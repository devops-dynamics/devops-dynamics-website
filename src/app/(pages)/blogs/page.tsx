import BlogCard from "@/components/BlogCard";
import db from "@/db/db";
import { Blog, Tag } from "@prisma/client";
import Link from "next/link";
import React from "react";

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

// function BlogCard({ blog, tags }: { blog: Blog; tags: Tag[] }) {
//     const { id, title, image, description } = blog;
//     return (
//         <li key={blog.id} className="py-12">
//             <article>
//                 <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
//                     <dl>
//                         <dt className="sr-only">Published on</dt>
//                         <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
//                             {/* <time dateTime={date}>
//                                     {formatDate(date, siteMetadata.locale)}
//                                 </time> */}
//                         </dd>
//                     </dl>
//                     <div className="space-y-5 xl:col-span-3">
//                         <div className="space-y-6">
//                             <div>
//                                 <h2 className="text-2xl font-bold leading-8 tracking-tight">
//                                     <Link
//                                         href={`/blog/${id}`}
//                                         className="text-gray-900 dark:text-gray-100"
//                                     >
//                                         {title}
//                                     </Link>
//                                 </h2>
//                                 <div className="flex flex-wrap">
//                                     {tags.map((tag) => (
//                                         <TagComponent key={tag.id} tag={tag} />
//                                     ))}
//                                 </div>
//                             </div>
//                             <div className="prose max-w-none text-gray-500 dark:text-gray-400">
//                                 {description}
//                             </div>
//                         </div>
//                         <div className="text-base font-medium leading-6">
//                             <Link
//                                 href={`/blog/${id}`}
//                                 className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
//                                 aria-label={`Read more: "${title}"`}
//                             >
//                                 Read more &rarr;
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </article>
//         </li>
//     );
// }
