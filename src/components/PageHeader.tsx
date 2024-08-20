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
            <h1 className="text-base font-bold">{pageHeaderTitle}</h1>
            <h2 className="max-w-xl text-5xl font-light xl:max-w-2xl xl:text-7xl">
                {pageHeaderSubtitle}
            </h2>
            <h3 className="max-w-2xl text-base font-medium text-muted-foreground xl:text-lg">
                {pageHeaderDescription}
            </h3>
            {children}
        </div>
    );
}

export default PageHeader;
