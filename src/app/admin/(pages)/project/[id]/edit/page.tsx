import ProjectForm from "@/app/admin/_components/Forms/ProjectFrom";
import db from "@/db/db";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const project = await db.project.findUnique({ where: { id } });
    if (!project) return <p>No blog found</p>;
    return (
        <>
            <ProjectForm project={project} />
        </>
    );
};

export default page;
