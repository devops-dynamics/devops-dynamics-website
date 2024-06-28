import Link from "next/link";
import React from "react";
import { PageHeader } from "../../_components/Header/PageHeader";
import db from "@/db/db";
import { getUser } from "../../_utils/getUser";
// import { getUser } from "../../_actions/gerUser";

const page = () => {
    return (
        <div className="space-y-8">
            <PageHeader>Profile Details</PageHeader>
            {/* <UserDetails /> */}
            {/* {links.map((link)=>{})} */}
        </div>
    );
};

export default page;

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

const UserDetails = async () => {
    const userToken = getUser();
    const userEmail = userToken?.email;
    console.log("Email:", userEmail);

    // const user = await db.profile.findUnique({ where: { email: userEmail } });
    // console.log(user);
    return <>User Found</>;
};
