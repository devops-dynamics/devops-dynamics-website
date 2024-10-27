import { Blog } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({ blog }: { blog: Blog }) {
    const { id, image, title, author_id, description } = blog;

    return (
        <article className="relative m-6 overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:outline hover:outline-white md:m-4">
            {/* Blog Cover Image */}
            <div className="relative h-52 w-full">
                <Image
                    alt="Blog cover image"
                    src={image || "/placeholder2.avif"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                    priority
                />
            </div>

            {/* Author Image */}
            <div className="absolute right-4 top-40 z-10 h-[80px] w-[80px] rounded-full border-2 border-white shadow-md">
                <Image
                    src={`/team/Suyash.jpg`}
                    alt="Author profile picture"
                    fill
                    className="rounded-full object-cover"
                    sizes="80px"
                />
            </div>

            {/* Blog Content */}
            <div className="space-y-4 bg-slate-50 px-4 py-8 dark:bg-slate-900 sm:p-6">
                <time
                    dateTime="2022-10-10"
                    className="block text-xs text-slate-700 dark:text-gray-400"
                >
                    10th Oct 2022
                </time>

                <Link href={`/blogs/${id}`}>
                    <h3 className="mt-4 text-lg font-semibold text-slate-800 hover:underline dark:text-white">
                        {title}
                    </h3>
                </Link>

                <p className="mt-2 line-clamp-3 h-24 text-sm text-slate-700 dark:text-gray-300">
                    {description}
                </p>
            </div>
        </article>
    );
}

export default BlogCard;
