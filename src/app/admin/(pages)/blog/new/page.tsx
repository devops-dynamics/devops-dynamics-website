import { fetchTags } from "@/app/admin/_actions/tag";
import BlogForm from "@/app/admin/_components/Forms/BlogForm";
import React from "react";

const page = async () => {
    const tags = await fetchTags();
    return (
        <div>
            <BlogForm tags={tags} />
        </div>
    );
};

export default page;
