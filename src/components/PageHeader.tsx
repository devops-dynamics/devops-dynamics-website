import React from "react";

function PageHeader({
    pageHeaderTitle,
    pageHeaderSubtitle,
    pageHeaderDescription,
    children,
}: {
    pageHeaderTitle?: string;
    pageHeaderSubtitle: string;
    pageHeaderDescription: string;
    children?: React.ReactNode;
}) {
    return (
        <div className="my-16 space-y-8 xl:my-20">
            {pageHeaderTitle && (
                <h1 className="text-base leading-7 font-semibold">
                    {pageHeaderTitle}
                </h1>
            )}
            <h2 className="text-[3.75rem] leading-none font-semibold w-[85%] min-w-[1000px] xl:w-[800px]">
                {pageHeaderSubtitle}
            </h2>
            <p className="text-xl leading-8 text-muted-foreground w-[50%] min-w-[750px] xl:w-[600px]">
                {pageHeaderDescription}
            </p>
            {children}
        </div>
    );
}

export default PageHeader;
