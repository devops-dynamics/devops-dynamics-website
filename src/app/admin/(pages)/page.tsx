import React from "react";
import Header from "../_components/Header";
import Link from "next/link";
import { getUser } from "../_actions/gerUser";

type Role = "OWNER" | "MEMBER";

const page = async () => {
    // const role = "OWNER";
    const roles = ["OWNER", "MEMBER"];
    const role = roles[Math.floor(Math.random() * roles.length)];

    const [] = await Promise.all([]);
    return (
        <div>
            <Header label="Admin Panel" />
            <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
                {role === "OWNER"
                    ? links.map((link) => {
                          return (
                              <Collection
                                  label={link.label}
                                  path={link.path}
                                  key={link.label}
                              />
                          );
                      })
                    : links
                          .filter((link) => link.user)
                          .map((link) => {
                              return (
                                  <Collection
                                      label={link.label}
                                      path={link.path}
                                      key={link.label}
                                  />
                              );
                          })}
            </div>
        </div>
    );
};

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

const Collection = ({ label, path }: { label: string; path: string }) => {
    return (
        <Link
            href={path}
            className="h-[100px] w-52 bg-foreground py-8 text-center text-2xl font-semibold text-primary-foreground hover:bg-foreground/90"
        >
            {label}
        </Link>
    );
};

export default page;
