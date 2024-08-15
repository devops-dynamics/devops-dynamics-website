import { TagForm } from "@/app/admin/_components/Forms/TagForm";
import db from "@/db/db";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
    // console.log(typeof id);

    const idInNum = parseInt(id, 10);
    const tag = await db.tag.findUnique({ where: { id: idInNum } });
    return (
        <>
            <TagForm tag={tag} />
        </>
    );
};

export default page;
