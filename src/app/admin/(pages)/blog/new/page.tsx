import { fetchTags } from "@/app/admin/_actions/tag";
import BlogForm from "@/app/admin/_components/Forms/BlogForm";
import { getUserId } from "@/app/admin/_utils/token";
import React from "react";

const page = async () => {
    const userId = getUserId();
    // // console.log(userId);
    const tags = await fetchTags();
    return (
        <div>
            <BlogForm tags={tags} userId={userId || ""} />
        </div>
    );
};

export default page;
