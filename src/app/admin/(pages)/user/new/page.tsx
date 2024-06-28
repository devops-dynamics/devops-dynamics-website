import { UserForm } from "@/app/admin/_components/Forms/UserForm";
import { PageHeader } from "@/app/admin/_components/Header/PageHeader";
import React from "react";

const page = () => {
    return (
        <>
            <PageHeader>Create New User</PageHeader>
            <UserForm />
        </>
    );
};

export default page;
