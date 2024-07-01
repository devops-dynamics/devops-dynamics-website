"use server";

import db from "@/db/db";
import { Tag } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";

const addBlogSchema = z.object({
    title: z.string().min(1),
    description: z.string(),
    blogTags: z.array(z.number()),
    // image: z.string(),
});

export async function addBlog(
    userId: string,
    prevState: unknown,
    formData: FormData,
) {
    try {
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
                author_id: userId,
                image: "",
                tags: {
                    connect: data.blogTags.map((id) => ({ id })),
                },
            },
        });
        revalidatePath("/admin/blog");
        redirect("/admin/blog");
    } catch (error) {}
}

export async function fetchBlogs(userId?: string) {
    const blogs = await db.blog.findMany({ where: { author_id: userId } });
    return blogs;
}
