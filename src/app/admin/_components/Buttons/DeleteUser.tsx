"use client";
import React from "react";
import { Button } from "@/components/ui";
import { deleteUser } from "../../_actions/user";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

function DeleteUser({ id, role }: { id: string; role: string | null }) {
    // const userRole = getUserRole();
    console.log(role);
    const [loading, setLoading] = React.useState(false);

    const [disabled, setDisabled] = React.useState(role !== "OWNER");
    const router = useRouter();
    const handleDelete = async () => {
        setLoading(true);
        setDisabled(true);
        try {
            await deleteUser(id);
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
            disabled={disabled}
            onClick={handleDelete}
        >
            {loading ? <Loader2 className="animate-spin" /> : "Delete"}
        </Button>
    );
}

export default DeleteUser;
