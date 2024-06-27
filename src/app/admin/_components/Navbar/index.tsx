"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
    {
        label: "User",
        path: "/admin/user",
        user: false,
    },
    {
        label: "Blog",
        path: "/admin/blog",
        user: true,
    },
    {
        label: "Projects",
        path: "/admin/project",
        user: true,
    },
    {
        label: "Tag",
        path: "/admin/tag",
        user: false,
    },
];

export default function Nav() {
    return (
        <NavigationMenu className="mx-auto">
            <NavigationMenuList>
                {links.map((link) => {
                    return (
                        <NavigationMenuItem key={link.label}>
                            <Link href={`${link.path}`} legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    {link.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    );
                })}
                <NavigationMenuItem>
                    <ThemeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
