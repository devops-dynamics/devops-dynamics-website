import React from "react";
import { Separator } from "./ui/separator";

function VerticalSeparator() {
    return (
        <div className="h-full space-y-1 overflow-hidden">
            <Separator
                orientation="vertical"
                className="h-10 w-[2px] bg-black dark:bg-white"
            />
            <Separator orientation="vertical" className="w-[2px]" />
        </div>
    );
}

export default VerticalSeparator;
