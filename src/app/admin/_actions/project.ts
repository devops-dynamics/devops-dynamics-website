"use server";

import db from "@/db/db";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";

const addProjectSchema = z.object({
    title: z.string().min(1),
    description: z.string(),
});

export async function addProject(
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

        const result = addProjectSchema.safeParse(
            Object.fromEntries(formData.entries()),
        );
        if (result.success === false) {
            return result.error.formErrors.fieldErrors;
        }
        const data = result.data;

        await db.project.create({
            data: {
                title: data.title,
                description: data.description,
                author_id: user.profile.id,
            },
        });
        revalidatePath("/admin/project");
        redirect("/admin/project");
    } catch (error) {
        console.error("Error creating project:", error);
        throw error;
    }
}

const updateProjectSchema = addProjectSchema.extend({
    id: z.string(),
});

export async function updateProject(
    id: string,
    prevState: unknown,
    formData: FormData,
) {
    try {
        const result = updateProjectSchema.safeParse({
            id,
            ...Object.fromEntries(formData.entries()),
        });

        if (result.success === false) {
            return result.error.formErrors.fieldErrors;
        }
        const data = result.data;

        await db.project.update({
            where: { id },
            data: {
                title: data.title,
                description: data.description,
            },
        });
        revalidatePath("/admin/project");
        redirect("/admin/project");
    } catch (error) {
        console.error("Error updating project:", error);
        throw error;
    }
}
