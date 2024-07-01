import { fetchTags } from "@/app/admin/_actions/tag";
import BlogForm from "@/app/admin/_components/Forms/BlogForm";
import db from "@/db/db";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const blog = await db.blog.findUnique({ where: { id } });
    if (!blog) return <p>No blog found</p>;
    const tags = await fetchTags();
    return (
        <>
            <BlogForm blog={blog} tags={tags} />
        </>
    );
};

export default page;
