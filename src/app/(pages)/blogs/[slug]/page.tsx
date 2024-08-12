import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div className="mx-auto w-full max-w-7xl space-y-16">
            <h1 className="text-center text-5xl font-bold">
                Exploring The Shells
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
                        Suyash Bhaswar
                    </p>
                    {/* divider */}
                    <div className="h-8 w-1 bg-foreground/20"></div>
                    {/* date time */}
                    <time
                        dateTime="2022-10-10"
                        className="block text-base font-semibold text-gray-200"
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
            <article className="prose lg:prose-md xl:prose-lg prose-slate dark:prose-invert mx-auto max-w-5xl">
                <h1>Garlic bread with cheese: What the science tells us</h1>
                <p>
                    For years parents have espoused the health benefits of
                    eating garlic bread with cheese to their children, with the
                    food earning such an iconic status in our culture that kids
                    will often dress up as warm, cheesy loaf for Halloween.
                </p>
                <p>
                    But a recent study shows that the celebrated appetizer may
                    be linked to a series of rabies cases springing up around
                    the country.
                </p>
                <h2>This is a H2 Tag</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt modi pariatur atque enim deserunt esse eligendi
                    animi molestias culpa dolorem.
                </p>
                <h3>This is a H3 Tag</h3>
                <ul>
                    <li>list item 1:</li>
                    <li>list item 2:</li>
                    <li>list item 3:</li>
                </ul>
                <blockquote>This is a Block Quote</blockquote>
            </article>
        </div>
    );
};

export default page;
