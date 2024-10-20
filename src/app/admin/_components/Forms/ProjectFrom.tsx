"use client";
import React from "react";
import { addProject, updateProject } from "../../_actions/project";
import { Project, User } from "@prisma/client";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ProjectForm = ({
    project,
    userId,
}: {
    project?: Project | null;
    userId?: string | null;
}) => {
    const [error, action] = useFormState(
        // addProject.bind(null, userId ? userId : ""),
        project == null
            ? addProject.bind(null, userId ? userId : "")
            : updateProject.bind(null, project.id),
        {},
    );

    return (
        <form action={action} className="space-y-8">
            <div className="space-y-2">
                <Label htmlFor="title" className="">
                    Title
                </Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    required
                    defaultValue={project ? project.title : ""}
                    className="max-w-96"
                />
                {error?.title && <p>{error.title}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="description" className="space-y-2">
                    Description
                </Label>
                <Textarea
                    id="description"
                    name="description"
                    rows={10}
                    required
                    defaultValue={project ? project.description : ""}
                    className="max-w-96"
                />
                {error?.description && <p>{error.description}</p>}
            </div>

            <SubmitButton label={project ? "Update" : "Add"} />
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

export default ProjectForm;
