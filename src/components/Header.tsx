import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { header } from "@/constants/staticData";
import NavLink from "./NavLink";
import Image from "next/image";

const Header = () => {
    const { navigation } = header;

    return (
        <header className="sticky top-0 z-50 mx-auto my-6 flex h-16 w-full max-w-7xl items-center gap-4 bg-background px-8 md:px-6">
            {/* Desktop Navigation */}
            <nav className="hidden w-full flex-col gap-8 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <div className="flex w-full justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Image
                            src="/favicon.png"
                            alt="DevOps Dynamics Logo"
                            width={24}
                            height={24}
                            className="h-6 w-6"
                        />
                        <span className="text-wrap text-base font-extrabold lg:text-lg">
                            DevOps Dynamics
                        </span>
                    </Link>
                    <div className="float-right flex space-x-8">
                        {navigation.links.map((item) => (
                            <NavLink key={item.id} href={item.path}>
                                {item.title}
                            </NavLink>
                        ))}
                        <Link
                            href="/contact"
                            className="rounded-full bg-black px-3 py-2 text-xl font-semibold text-white dark:bg-white dark:text-black md:text-base"
                        >
                            Contact
                        </Link>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
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
                            href="/"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Image
                                src="/new-logo.png"
                                alt="DevOps Dynamics Logo"
                                width={24}
                                height={24}
                                className="h-6 w-6"
                            />
                            <span>DevOps Dynamics</span>
                        </Link>
                        {navigation.links.map((item) => (
                            <Link
                                key={item.id}
                                href={item.path}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Contact
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    );
};

export default Header;