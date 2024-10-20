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
import DeleteBlog from "../../_components/Buttons/DeleteBlog";

const page = () => {
    return (
        <div>
            <PageHeader>
                <span>Blogs</span>
                <Button asChild>
                    <Link href={`/admin/blog/new`}>Add New Blog</Link>
                </Button>
            </PageHeader>

            <BlogTable />
        </div>
    );
};

export default page;

async function BlogTable() {
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

    const blogs = await db.blog.findMany({
        where: { author_id: user.profile.id },
        select: {
            id: true,
            title: true,
        },
    });

    if (blogs.length === 0) return <p>No blogs found</p>;

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {blogs.map((blog) => (
                    <TableRow key={blog.id}>
                        <TableCell>{blog.title}</TableCell>
                        <TableCell className="space-x-4">
                            <Button asChild>
                                <Link href={`/admin/blog/${blog.id}/edit`}>
                                    Edit
                                </Link>
                            </Button>
                            <DeleteBlog id={blog.id} />
                            {/* <span className="mx-2 cursor-pointer rounded bg-red-800 p-1 text-center font-bold text-white hover:bg-red-600">
                                Delete
                            </span> */}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
