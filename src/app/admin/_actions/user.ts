"use server";

import db from "@/db/db";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";
import bcryptjs from "bcryptjs";

const addUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    role: z.enum(["OWNER", "MEMBER"]),
});

export const addUser = async (prevState: unknown, formData: FormData) => {
    try {
        const result = addUserSchema.safeParse(
            Object.fromEntries(formData.entries()),
        );
        if (!result.success) {
            return result.error.formErrors.fieldErrors;
        }

        const data = result.data;
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(data.password, salt);

        await db.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
                role: data.role,
                profile: {
                    create: {
                        email: data.email,
                        display_name: data.name,
                        profile_image: "",
                        bio: "",
                        upwork_profile: "",
                        linkedin_profile: "",
                        github_profile: "",
                        twitter_profile: "",
                        personal_website: "",
                        position: "",
                        achievements: "",
                        education: "",
                        certifications: "",
                    },
                },
            },
        });

        revalidatePath("/admin/user");
        redirect("/admin/user");
    } catch (error) {
        console.error("Error adding user:", error);
        throw error;
    }
};

const updateUserSchema = addUserSchema.extend({
    id: z.string(),
});

export const updateUser = async (
    id: string,
    prevState: unknown,
    formData: FormData,
) => {
    try {
        const result = updateUserSchema.safeParse({
            id,
            ...Object.fromEntries(formData.entries()),
        });
        if (!result.success) {
            return result.error.formErrors.fieldErrors;
        }

        const data = result.data;

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(data.password, salt);

        const user = await db.user.findUnique({
            where: { id },
            select: {
                profile: {
                    select: {
                        id: true,
                    },
                },
            },
        });

        if (!user || !user.profile?.id) return notFound();

        await db.user.update({
            where: { id },
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
                role: data.role,
            },
        });

        await db.profile.update({
            where: { id: user.profile.id },
            data: {
                email: data.email,
                display_name: data.name,
            },
        });

        revalidatePath("/admin/user");
        redirect("/admin/user");
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

export const deleteUser = async (id: string) => {
    try {
        const user = await db.user.findUnique({
            where: { id: id },
            select: { profile: { select: { id: true } } },
            // include: { profile: { include: { blogs: true, projects: true } } }, // Load related data
        });

        if (!user || !user.profile?.id) return notFound();

        await db.profile.delete({ where: { id: user.profile.id } });
        // await db.user.delete({ where: { id } });

        revalidatePath("/admin/user");
        redirect("/admin/user");
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};
