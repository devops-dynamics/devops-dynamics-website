import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { header } from "@/constants/staticData";
import NavLink from "./NavLink";
import Image from "next/image";

const Header = () => {
    // if (typeof window !== "undefined") {
    // }

    const { navigation } = header;
    return (
        <header className="sticky top-0 z-50 mx-auto my-6 flex h-20 w-full max-w-7xl items-center gap-4 bg-background px-8 md:px-6">
            <nav className="hidden w-full flex-col gap-8 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <div className="flex w-full justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        {/* <Package2 className="h-6 w-6" /> */}
                        <div className="relative mx-4 my-auto aspect-square w-10 py-2">
                            <Image
                                src={"/logo.svg"}
                                // width={40}
                                // height={40}
                                fill={true}
                                alt="logo"
                                className="m-1 my-auto rounded-xl"
                            />
                        </div>
                        <span className="text-wrap py-2 text-base font-extrabold lg:text-lg">
                            DevopsDynamics
                        </span>
                    </Link>
                    <div className="float-right flex space-x-8">
                        {navigation.links.map((item) => {
                            return (
                                <NavLink key={item.id} href={item.path}>
                                    {item.title}
                                </NavLink>
                            );
                        })}
                        <Link
                            href={`/contact`}
                            className="shrink rounded-full bg-black px-3 py-3 align-middle text-xl font-semibold text-white dark:bg-white dark:text-black md:text-base"
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
                        {navigation.links.map((item) => {
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
