"use client";
import React from "react";
import { Button } from "@/components/ui";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteProject } from "../../_actions/project";

function DeleteProject({ id }: { id: string }) {
    const [loading, setLoading] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    const router = useRouter();
    const handleDelete = async () => {
        setLoading(true);
        setDisabled(true);
        try {
            await deleteProject(id);
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

export default DeleteProject;
