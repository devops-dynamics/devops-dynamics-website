import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import db from "@/db/db";

export default async function AdminTagPage() {
    // const router = useRouter();
    return (
        <>
            <div className="flex items-center justify-between gap-4">
                {/* <PageHeader>Products</PageHeader> */}
                <Button asChild>
                    <Link href="/admin/tag/new">Add Tag</Link>
                </Button>
            </div>
            <ProductsTable />
        </>
    );
}

async function ProductsTable() {
    const tags = await db.tag.findMany({
        select: {
            id: true,
            name: true,
        },
        orderBy: { name: "asc" },
    });

    // console.log(tags);

    if (tags.length === 0) return <p>No products found</p>;

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>

                    <TableHead className="">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tags.map((tag) => (
                    <TableRow key={tag.id}>
                        <TableCell>{tag.name}</TableCell>
                        <TableCell>
                            <Button asChild variant={"secondary"}>
                                <Link href={`/admin/tag/${tag.id}/edit`}>
                                    Edit
                                </Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
