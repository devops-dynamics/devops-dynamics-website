import { BlockQuote } from "@/app/(pages)/about/page";
import React from "react";

function PageHeader({
    pageHeaderTitle,
    pageHeaderSubtitle,
    pageHeaderDescription,
    children,
}: {
    pageHeaderTitle: string;
    pageHeaderSubtitle: string;
    pageHeaderDescription: string;
    children?: React.ReactNode;
}) {
    return (
        <div className="my-16 space-y-8">
            <h1 className="text-base font-bold">{pageHeaderTitle}</h1>
            <h2 className="text-5xl font-semibold">{pageHeaderSubtitle}</h2>
            <h3 className="max-w-3xl text-lg font-medium text-muted-foreground">
                {pageHeaderDescription}
            </h3>
            {children}
        </div>
    );
}

export default PageHeader;
