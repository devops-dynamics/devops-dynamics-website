"use server";

import db from "@/db/db";
import uploadFile from "@/lib/uploadFile";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";

const fileSchema = z.instanceof(File, { message: "Required" });

const imageSchema = fileSchema.refine(
    (file) => file.size === 0 || file.type.startsWith("image/"),
);

const addBlogSchema = z.object({
    image: imageSchema.refine((file) => file.size > 0, "Required"),
    title: z.string().min(1),
    description: z.string(),
    blogTags: z.array(z.number()).optional(),
    // image: z.string(),
});

export async function addBlog(
    userId: string,
    prevState: unknown,
    formData: FormData,
) {
    try {
        const user = await db.user.findUnique({
            where: { id: userId },
            select: { profile: { select: { id: true } } },
        });

        if (!user || !user.profile?.id) {
            return notFound();
        }

        const tags = formData.getAll("blogTags").map(Number);

        const formDataObject = {
            ...Object.fromEntries(formData.entries()),
            blogTags: tags,
        };

        const result = addBlogSchema.safeParse(formDataObject);
        if (result.success === false) {
            return result.error.formErrors.fieldErrors;
        }
        const data = result.data;

        // upload image using uploadFile function
        const imageUrl = await uploadFile(data.image);

        await db.blog.create({
            data: {
                title: data.title,
                description: data.description,
                author_id: user.profile.id,
                image: imageUrl,
                tags: {
                    connect: data.blogTags?.map((id) => ({ id })),
                },
            },
        });
    } catch (error: any) {
        console.error("Error Adding Blog:", error.message || error);
        throw error;
    }
    revalidatePath("/admin/blog");
    redirect("/admin/blog");
}

const updateBlogSchema = addBlogSchema.extend({
    id: z.string(),
    image: imageSchema.optional(),
    // newImage: imageSchema.optional(),
});

export async function updateBlog(
    id: string,
    prevState: unknown,
    formData: FormData,
) {
    try {
        const result = updateBlogSchema.safeParse({
            id,
            ...Object.fromEntries(formData.entries()),
        });
        if (result.success === false) {
            return result.error.formErrors.fieldErrors;
        }
        const data = result.data;
        // check if image is updated
        const blog = await db.blog.findUnique({
            where: { id },
            select: {
                image: true,
            },
        });
        let imageUrl = blog?.image;
        if (data.image != null && data.image.size > 0) {
            // image is updated
            // upload the new image
            imageUrl = await uploadFile(data.image);
            // delete the old image from db
        }
        // let imageUrl = data.image;
        await db.blog.update({
            where: { id },
            data: {
                title: data.title,
                image: imageUrl,
                description: data.description,
                tags: {
                    connect: data.blogTags?.map((id) => ({ id })),
                },
            },
        });
    } catch (error) {
        console.error("Error updating blog:", error);
        throw error;
    }
    revalidatePath("/admin/blog");
    redirect("/admin/blog");
}

export async function fetchBlogs(userId?: string) {
    const blogs = await db.blog.findMany({ where: { author_id: userId } });
    return blogs;
}

// export const deleteBlog = async (id: string) => {

export async function deleteBlog(id: string) {
    try {
        const blog = await db.blog.findUnique({ where: { id } });
        if (!blog) return notFound();

        await db.blog.delete({ where: { id } });

        revalidatePath("/admin/blog");
        redirect("/admin/blog");
    } catch (error) {
        console.error("Error deleting blog:", error);
        throw error;
    }
}
