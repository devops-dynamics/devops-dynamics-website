"use client";
import React from "react";
import { Button } from "@/components/ui";
import { deleteBlog } from "../../_actions/blog";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

function DeleteBlog({ id }: { id: string }) {
    const [loading, setLoading] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    const router = useRouter();
    const handleDelete = async () => {
        setLoading(true);
        setDisabled(true);
        try {
            await deleteBlog(id);
            router.refresh();
        } catch (error) {
            console.log("Error deleting blog:", error);
        } finally {
            setLoading(false);
            setDisabled(false);
        }
    };
    return (
        <Button
            variant={"destructive"}
            onClick={handleDelete}
            disabled={disabled}
            className="w-16"
        >
            {loading ? <Loader2 className="animate-spin" /> : "Delete"}
        </Button>
    );
}

export default DeleteBlog;
