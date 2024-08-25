import { Blog } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({ blog }: { blog: Blog }) {
    const { id, image, title, author_id, description } = blog;
    return (
        <article className="relative m-6 overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:outline hover:outline-white md:m-4">
            {/* <div className="left-0 top-16 z-10 overflow-hidden rounded-lg border border-white shadow transition hover:shadow-lg"> */}

            {/* </div> */}
            <div className="relative h-52 w-full overflow-hidden">
                <Image
                    alt=""
                    className="overflow-hidden object-cover"
                    src={`/placeholder.avif`}
                    fill={true}
                />
            </div>
            <div className="border-3 absolute right-4 top-40 z-10 h-[80px] w-[80px] rounded-full">
                <Image
                    src={"/user.jpeg"}
                    alt=""
                    fill={true}
                    className="rounded-full object-cover"
                />
            </div>

            <div className="space-y-4 bg-background bg-slate-50 px-4 py-8 text-foreground dark:bg-slate-900 sm:p-6">
                <time
                    dateTime="2022-10-10"
                    className="block text-xs text-slate-700 dark:text-gray-200"
                >
                    {" "}
                    10th Oct 2022{" "}
                </time>

                <Link href={"/blogs/123"}>
                    <h3 className="mt-4 text-lg font-semibold text-slate-800 hover:underline dark:text-white">
                        {title}
                    </h3>
                </Link>

                <p className="mt-2 line-clamp-3 h-24 text-sm/relaxed text-slate-700 dark:text-gray-200">
                    {description}
                </p>
            </div>
        </article>
    );
}

export default BlogCard;
