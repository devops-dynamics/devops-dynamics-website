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
import { deleteUser } from "../../_actions/user";

const page = () => {
    return (
        <div>
            <PageHeader>
                <span>User</span>{" "}
                <Link href={`/admin/user/new`}>
                    <Button>Add New User</Button>
                </Link>
            </PageHeader>
            <UserTable />
        </div>
    );
};

export default page;

async function UserTable() {
    const users = await db.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
        },
        orderBy: { name: "asc" },
    });

    // console.log(users);

    if (users.length === 0) return <p>No users found</p>;

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>

                        <TableCell className="space-x-2">
                            {/* <Link
                                href={`/admin/user/${user.id}/edit`}
                                className="rounded bg-orange-400 p-1 text-center font-bold text-white hover:bg-orange-300"
                            >
                                Edit
                            </Link> */}
                            {/* <span className="mx-2 cursor-pointer rounded bg-red-800 p-1 text-center font-bold text-white hover:bg-red-600">
                                Delete
                            </span> */}
                            <Button asChild>
                                <Link href={`/admin/user/${user.id}/edit`}>
                                    Edit
                                </Link>
                            </Button>
                            <Button asChild variant={"destructive"}>
                                <Link href={`/admin/user/${user.id}/delete`}>
                                    Delete
                                </Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
