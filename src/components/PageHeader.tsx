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
        <div className="my-16 space-y-8 xl:my-20">
            <h1 className="text-base font-bold">
                {pageHeaderTitle}
            </h1>
            {/* Subtitle with smaller text sizes */}
            <h4 className="font-display text-3xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-4xl md:text-5xl lg:text-6xl">
                {pageHeaderSubtitle}
            </h4>
            <h3 className="max-w-2xl text-base font-medium text-muted-foreground xl:text-lg">
                {pageHeaderDescription}
            </h3>
            {children}
        </div>
    );
}

export default PageHeader;