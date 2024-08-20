"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const style =
        pathname === href
            ? "underline underline-offset-8 font-bold text-foreground"
            : "font-semibold text-muted-foreground";

    return (
        <Link
            href={href}
            className={`flex items-center gap-2 text-xl decoration-2 hover:text-foreground hover:underline hover:underline-offset-8 md:text-base ${style} `}
        >
            {children}
        </Link>
    );
}

export default NavLink;
