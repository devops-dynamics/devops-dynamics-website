"use server";

import db from "@/db/db";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";

const addSchema = z.object({
    name: z.string().min(1),
});

export async function addTag(prevState: unknown, formData: FormData) {
    try {
        const result = addSchema.safeParse(
            Object.fromEntries(formData.entries()),
        );
        if (result.success === false) {
            return result.error.formErrors.fieldErrors;
        }
        const data = result.data;

        await db.tag.create({
            data: {
                name: data.name,
            },
        });

        revalidatePath("/admin/tag");
        redirect("/admin/tag");
    } catch (error) {
        console.error("Error creating tag:", error);
        throw error;
    }
}

const updateSchema = z.object({
    id: z.number().min(0),
    name: z.string().min(1),
});

export async function updateTag(
    id: number,
    prevState: unknown,
    formData: FormData,
) {
    try {
        const result = updateSchema.safeParse({
            id,
            ...Object.fromEntries(formData.entries()),
        });
        if (result.success === false) {
            return result.error.formErrors.fieldErrors;
        }
        const data = result.data;

        const tag = await db.tag.findUnique({ where: { id } });
        if (tag == null) return notFound();

        await db.tag.update({
            where: { id },
            data: { name: data.name },
        });

        revalidatePath("/admin/tag");
        redirect("/admin/tag");
    } catch (error) {
        console.error("Error updating tag:", error);
        throw error;
    }
}
