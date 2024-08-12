import { Blog } from "@prisma/client";
import Image from "next/image";
import React from "react";

function BlogCard({ blog }: { blog: Blog }) {
    const { id, image, title, author_id, description } = blog;
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:outline hover:outline-white">
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
            <div className="border-3 relative z-10 rounded-full">
                <Image
                    src={"/placeholder-user.jpg"}
                    alt=""
                    height={70}
                    width={70}
                    className="absolute -top-8 right-8 z-10 rounded-full object-cover"
                />
            </div>

            <div className="space-y-4 bg-slate-900 px-4 py-8 sm:p-6">
                <time
                    dateTime="2022-10-10"
                    className="block text-xs text-gray-200"
                >
                    {" "}
                    10th Oct 2022{" "}
                </time>

                <a href="#">
                    <h3 className="mt-4 text-lg font-semibold text-white hover:underline">
                        {/* How to position your furniture for positivity */}
                        Lorem ipsum dolor sit amet consectetur.
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-200">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                </p>
            </div>
        </article>
    );
}

export default BlogCard;
