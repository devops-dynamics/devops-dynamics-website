import React from "react";
import db from "@/db/db";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { PageHeader } from "../../_components/Header/PageHeader";
import { Button } from "@/components/ui/button";
import { getUserId } from "../../_utils/token";

const page = () => {
    return (
        <div>
            <PageHeader>
                <span>Projects</span>
                <Link href={`/admin/user/new`}>
                    <Button asChild>
                        <Link href={`/admin/project/new`}>Add New Project</Link>
                    </Button>
                </Link>
            </PageHeader>
            <ProjectTable />
        </div>
    );
};

export default page;

async function ProjectTable() {
    const userId = getUserId();
    if (!userId) return <p>No user found</p>;
    const user = await db.user.findUnique({
        where: { id: userId },
        select: {
            profile: {
                select: {
                    id: true,
                },
            },
        },
    });

    if (!user?.profile?.id) return <p>No user found</p>;

    const projects = await db.project.findMany({
        where: { author_id: user.profile.id },
        select: {
            id: true,
            title: true,
        },
    });

    if (projects.length === 0) return <p>No blogs found</p>;

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {projects.map((project) => (
                    <TableRow key={project.id}>
                        <TableCell>{project.title}</TableCell>
                        <TableCell>
                            {/* <Link
                                href={`/admin/user/${user.id}/edit`}
                                className="hover:underline"
                            >
                                Edit
                            </Link> */}
                            <span className="mx-2 cursor-pointer rounded bg-red-800 p-1 text-center font-bold text-white hover:bg-red-600">
                                Delete
                            </span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
