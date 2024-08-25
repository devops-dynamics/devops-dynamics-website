import React from "react";
import db from "@/db/db";
import { BlogCard, Link } from "@/components";
import { Blog, Tag } from "@prisma/client";

const BlogPage = async () => {
    return (
        <>
            <p className="font-xs my-6 text-center font-semibold text-purple-400">
                Explore new everyday
            </p>
            <h1 className="mb-8 text-center text-5xl font-bold">Our Blogs</h1>
            <BlogGrid />
        </>
    );
};

export default BlogPage;

const BlogGrid = async () => {
    const allBlogs = await db.blog.findMany({
        select: {
            id: true,
            author: {
                select: {
                    id: true,
                    display_name: true,
                },
            },
            title: true,
            tags: true,
            image: true,
            description: true,
            author_id: true,
        },
    });
    // console.log(allBlogs);
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

const TagComponent = ({ tag }: { tag: Tag }) => {
    return (
        <Link
            href={`/tags/${tag.id}`}
            className="mr-3 text-sm font-bold uppercase text-red-400 hover:text-red-600 dark:hover:text-red-300"
        >
            {tag.name.split(" ").join("-")}
        </Link>
    );
};
