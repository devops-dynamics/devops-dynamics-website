// "use client";
import db from "@/db/db";
import { marked } from "marked";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
    console.log("Blog id: ", id);

    const blog = await db.blog.findFirst({
        where: {
            id: id,
        },
        select: {
            image: true,
            title: true,
            author_id: true,
            description: true,
            author: {
                select: {
                    display_name: true,
                    id: true, // to be used in the link
                },
            },
        },
    });

    const processedHtml = await marked.parse(blog?.description || "");

    return (
        <div className="mx-auto w-full max-w-7xl space-y-16">
            <h1 className="text-center text-5xl font-bold">
                {blog?.title}
                {/* Exploring The Shells */}
            </h1>
            {/* user, time and date */}
            <div className="flex gap-x-4 text-muted-foreground">
                <div className="flex w-full items-center justify-center gap-4">
                    <Image
                        src={"/placeholder-user.jpg"}
                        alt="user-image"
                        height={52}
                        width={52}
                        className="rounded-full"
                    />
                    <p className="text-lg font-semibold text-foreground">
                        {blog?.author.display_name}
                    </p>
                    {/* divider */}
                    <div className="h-8 w-1 bg-foreground/20"></div>
                    {/* date time */}
                    <time
                        dateTime="2022-10-10"
                        className="block text-base font-semibold text-gray-600 dark:text-gray-200"
                    >
                        10th Oct 2022
                    </time>
                </div>
            </div>
            {/* Blog Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-red-50">
                <Image src={"/placeholder2.avif"} alt="" fill={true} />
            </div>
            {/* Blog Content */}
            <article
                className="lg:prose-md prose prose-slate mx-auto max-w-5xl dark:prose-invert xl:prose-lg"
                dangerouslySetInnerHTML={{
                    __html:
                        processedHtml ||
                        "<div>OOPS! Something went wrong</div>",
                }}
            />
            {/* <div></div> */}
        </div>
    );
};

export default page;
