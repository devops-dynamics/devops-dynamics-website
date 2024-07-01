import Link from "next/link";
import React from "react";
import db from "@/db/db";
import { getUserId } from "../../_utils/token";
import { Profile } from "@prisma/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default async function ProfilePage() {
    const userId = getUserId();
    let profile;
    if (userId) {
        profile = await db.profile.findUnique({ where: { user_id: userId } });
    }

    return (
        <div className="space-y-8">
            <UserDetails profile={profile} />
        </div>
    );
}

// export default page;

const Collection = ({ label, path }: { label: string; path: string }) => {
    return (
        <Link
            href={path}
            className="h-[100px] w-52 bg-foreground py-8 text-center text-2xl font-semibold text-primary-foreground hover:bg-foreground/90"
        >
            {label}
        </Link>
    );
};

const links = [
    {
        label: "User",
        path: "/admin/user",
        user: false,
    },
    {
        label: "Blog",
        path: "/admin/blog",
        user: true,
    },
    {
        label: "Projects",
        path: "/admin/project",
        user: true,
    },
    {
        label: "Tag",
        path: "/admin/tag",
        user: false,
    },
];

const UserDetails = async ({ profile }: { profile?: Profile | null }) => {
    return (
        <>
            <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 md:p-8">
                <div className="w-full max-w-md rounded-lg bg-card">
                    <div className="flex flex-col items-center gap-6 p-6">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                            <div className="text-2xl font-bold">
                                {profile?.display_name}
                            </div>
                            <div className="text-muted-foreground">
                                {profile?.email}
                            </div>
                        </div>
                        <div className="text-muted-foreground">
                            {profile?.bio}
                        </div>
                    </div>
                    <div className="p-6 pt-0" id="buttons">
                        <div className="flex flex-col gap-4">
                            <Button asChild>
                                <Link href={`/admin/profile/edit`}>
                                    Edit Profile
                                </Link>
                            </Button>
                            <Button asChild variant="secondary">
                                <Link href={`/admin/blog/new`}>Add Blog</Link>
                            </Button>

                            <Button asChild variant="secondary">
                                <Link href={`/admin/project/new`}>
                                    Add Project
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
