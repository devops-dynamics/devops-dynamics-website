import Profile from "@/components/Profile";
import db from "@/db/db";
import React from "react";

async function ProfilePage({ params }: { params: { id: string } }) {
    const id = params.id;
    const profile = await db.profile.findUnique({
        where: {
            id: id,
        },
        include: {
            blogs: {
                select: {
                    id: true,
                    title: true,
                    description: true,
                },
            },
            projects: {
                select: {
                    id: true,
                    title: true,
                    description: true,
                },
            },
        },
    });
    console.log("Profile: ", profile);

    if (!profile) {
        return (
            <div>
                <p>Profile not found</p>
            </div>
        );
    }

    return (
        <>
            <Profile
                profile={profile}
                blogs={profile.blogs}
                projects={profile.projects}
            />
            {/* <div className="grid grid-cols-3">
                <div className="bg-red-200">
                    <p>{profile?.display_name}</p>
                    <p>{profile?.bio}</p>
                    <p>{profile?.email}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className=""></div>
            </div> */}
        </>
    );
}

export default ProfilePage;
