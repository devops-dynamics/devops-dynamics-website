import db from "@/db/db";
import { Blog, Tag } from "@prisma/client";
import Link from "next/link";
import React from "react";

const BlogPage = async () => {
    return (
        <div>
            <BlogGrid />
        </div>
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
    console.log(allBlogs);
    return (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {allBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} tags={blog.tags} />
            ))}
        </ul>
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

function BlogCard({ blog, tags }: { blog: Blog; tags: Tag[] }) {
    const { id, title, image, description } = blog;
    return (
        <li key={blog.id} className="py-12">
            <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            {/* <time dateTime={date}>
                                    {formatDate(date, siteMetadata.locale)}
                                </time> */}
                        </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                    <Link
                                        href={`/blog/${id}`}
                                        className="text-gray-900 dark:text-gray-100"
                                    >
                                        {title}
                                    </Link>
                                </h2>
                                <div className="flex flex-wrap">
                                    {tags.map((tag) => (
                                        <TagComponent key={tag.id} tag={tag} />
                                    ))}
                                </div>
                            </div>
                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                {description}
                            </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                            <Link
                                href={`/blog/${id}`}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                aria-label={`Read more: "${title}"`}
                            >
                                Read more &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    );
}
