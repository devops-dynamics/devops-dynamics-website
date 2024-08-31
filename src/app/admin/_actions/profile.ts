"use server";

import db from "@/db/db";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";

// editing profile

const updateProfileSchema = z.object({
    displayName: z.string(),
    email: z.string().email(),
    bio: z.string(),
    upworkProfileLink: z.string(),
    linkedinProfileLink: z.string(),
    githubProfileLink: z.string(),
    twitterProfileLink: z.string(),
    personalWebsiteLink: z.string(),
    education: z.string(),
    position: z.string(),
    achievements: z.string(),
    certifications: z.string(),
    // profileImage: z.string(),
});

export const updateProfile = async (
    id: string,
    prevState: unknown,
    formData: FormData,
) => {
    try {
        const result = updateProfileSchema.safeParse({
            id,
            ...Object.fromEntries(formData.entries()),
        });
        if (result.success === false) {
            return result.error.formErrors.fieldErrors;
        }
        const data = result.data;

        const profile = await db.profile.findUnique({ where: { id } });

        if (!profile) return notFound();

        await db.profile.update({
            where: { id },
            data: {
                display_name: data.displayName,
                // TODO: add image upload
                // profile_image: data.profileImage,
                email: data.email,
                bio: data.bio,
                achievements: data.achievements,
                upwork_profile: data.upworkProfileLink,
                github_profile: data.githubProfileLink,
                twitter_profile: data.twitterProfileLink,
                linkedin_profile: data.linkedinProfileLink,
                personal_website: data.personalWebsiteLink,
                certifications: data.certifications,
                position: data.achievements,
                education: data.education,
            },
        });

        revalidatePath("/admin/profile");
        redirect("/admin/profile");
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error;
    }
};
