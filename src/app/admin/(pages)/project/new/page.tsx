import ProjectForm from "@/app/admin/_components/Forms/ProjectFrom";
import { getUserId } from "@/app/admin/_utils/token";
import React from "react";

const page = () => {
    const userId = getUserId();
    return (
        <>
            <ProjectForm userId={userId} />
        </>
    );
};

export default page;
