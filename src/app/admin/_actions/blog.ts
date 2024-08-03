"use server";

import db from "@/db/db";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";

const addBlogSchema = z.object({
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

        await db.blog.create({
            data: {
                title: data.title,
                description: data.description,
                author_id: user.profile.id,
                image: "",
                tags: {
                    connect: data.blogTags?.map((id) => ({ id })),
                },
            },
        });
        revalidatePath("/admin/blog");
        redirect("/admin/blog");
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
}

const updateBlogSchema = addBlogSchema.extend({
    id: z.string(),
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
        await db.blog.update({
            where: { id },
            data: {
                title: data.title,
                description: data.description,
                tags: {
                    connect: data.blogTags?.map((id) => ({ id })),
                },
            },
        });
        revalidatePath("/admin/blog");
        redirect("/admin/blog");
    } catch (error) {
        console.error("Error updating blog:", error);
        throw error;
    }
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