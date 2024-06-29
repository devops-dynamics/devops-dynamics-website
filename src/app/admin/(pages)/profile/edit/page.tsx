import ProfileForm from "@/app/admin/_components/Forms/ProfileForm";
import { getUserId } from "@/app/admin/_utils/token";
import db from "@/db/db";
import React from "react";

const page = async () => {
    const userId = getUserId();
    const profile = userId
        ? await db.profile.findUnique({ where: { user_id: userId } })
        : null;
    if (!profile) {
        return <>No Profile Found</>;
    }
    return (
        <>
            <ProfileForm profile={profile} />
        </>
    );
};

export default page;
