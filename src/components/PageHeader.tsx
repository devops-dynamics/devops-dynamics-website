import React from "react";

function PageHeader({
    pageHeaderTitle,
    pageHeaderSubtitle,
    pageHeaderDescription,
    children,
    className,
}: {
    pageHeaderTitle?: string;
    pageHeaderSubtitle: string;
    pageHeaderDescription: string;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`my-8 space-y-4 sm:my-12 md:my-16 lg:my-20 ${className}`}>
            {pageHeaderTitle && (
                <h1 className="text-sm font-semibold leading-6 sm:text-base md:leading-7">
                    {pageHeaderTitle}
                </h1>
            )}
            
            <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.75rem] 
                          w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[800px]">
                {pageHeaderSubtitle}
            </h2>
            
            <p className="text-base leading-relaxed text-muted-foreground 
                         w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[70vw] lg:max-w-[650px]
                         sm:text-lg md:text-xl md:leading-8">
                {pageHeaderDescription}
            </p>
            
            <div className="w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[800px]">
                {children}
            </div>
        </div>
    );
}

export default PageHeader;