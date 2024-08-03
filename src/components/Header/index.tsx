import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";
import { Button } from "../ui/button";
import ThemeToggle from "../ThemeToggle";

const links = [
    {
        id: 1,
        title: "Services",
        path: "/services",
    },
    {
        id: 2,
        title: "Work",
        path: "/works",
    },
    {
        id: 3,
        title: "Blogs",
        path: "/blogs",
    },
    {
        id: 4,
        title: "About",
        path: "/about",
    },
];

const Header = () => {
    return (
        <header className="sticky top-0 mx-auto my-6 flex h-16 w-full max-w-7xl items-center gap-4 bg-background px-8 md:px-6">
            <nav className="hidden w-full flex-col gap-8 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <div className="flex w-full justify-between">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Package2 className="h-6 w-6" />
                        <span className="text-xl font-extrabold">LOGO</span>
                    </Link>
                    <div className="float-right flex space-x-8">
                        {links.map((item) => {
                            return (
                                <Link
                                    key={item.id}
                                    href={item.path}
                                    className="flex items-center gap-2 text-xl font-semibold text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-8 md:text-base"
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                        <Link
                            href={`/contact`}
                            className="rounded-full bg-black px-3 py-2 text-xl font-semibold text-white dark:bg-white dark:text-black md:text-base"
                        >
                            Contact
                        </Link>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>

            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        {links.map((item) => {
                            return (
                                <Link
                                    key={item.id}
                                    href={item.path}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    );
};

export default Header;
