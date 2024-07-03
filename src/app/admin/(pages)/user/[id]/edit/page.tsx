import { UserForm } from "@/app/admin/_components/Forms/UserForm";
import db from "@/db/db";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const user = await db.user.findUnique({ where: { id } });
    return (
        <>
            <UserForm user={user} />
        </>
    );
};

export default page;
