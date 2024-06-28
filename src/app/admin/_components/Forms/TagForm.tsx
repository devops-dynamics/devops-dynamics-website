"use client";
import React from "react";
import { addTag, updateTag } from "../../_actions/tag";
import { Tag } from "@prisma/client";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const TagForm = ({ tag }: { tag?: Tag | null }) => {
    const [error, action] = useFormState(
        tag == null ? addTag : updateTag.bind(null, tag.id),
        {},
    );

    return (
        <form action={action} className="space-y-8">
            <div className="space-y-2">
                <Label>Tag Name</Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    defaultValue={tag ? tag.name : ""}
                    className="max-w-96"
                />
                {error?.name && <div>{error.name}</div>}
            </div>
            <SubmitButton label={tag ? "Update" : "Add"} />
        </form>
    );
};

function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending}>
            {label}
        </Button>
    );
}
