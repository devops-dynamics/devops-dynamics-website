import db from "@/db/db";
import React from "react";

async function ProfilePage({ params }: { params: { id: string } }) {
    const id = params.id;
    const profile = await db.profile.findUnique({
        where: {
            id: id,
        },
    });
    console.log("Profile: ", profile);

    return (
        <div className="bg-red-200">
            <p>{profile?.display_name}</p>
            <p>{profile?.bio}</p>
            <p>{profile?.email}</p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
}

export default ProfilePage;
