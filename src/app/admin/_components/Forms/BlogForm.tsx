"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Blog, Tag } from "@prisma/client";
import { addBlog, updateBlog } from "../../_actions/blog";

const BlogForm = ({
    tags,
    blog,
    userId,
}: {
    tags?: Tag[];
    blog?: Blog;
    userId?: string;
}) => {
    const [error, action] = useFormState(
        blog == null
            ? addBlog.bind(null, userId || "")
            : updateBlog.bind(null, blog?.id),
        {},
    );
    return (
        <form action={action} className="w-full max-w-6xl">
            <div>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            placeholder="Enter a catchy title"
                            defaultValue={blog?.title || ""}
                        />
                        {error?.title && <p>{error.title}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Blog Content</Label>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Provide a brief description of your blog post"
                            rows={40}
                            defaultValue={blog?.description || ""}
                        />
                        {error?.description && <p>{error.description}</p>}
                    </div>
                    <div>
                        <Label>Tags</Label>
                        <div className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
                            {tags?.map((tag) => (
                                <div
                                    key={tag.id}
                                    className="flex items-center space-x-2"
                                >
                                    <Checkbox
                                        id={tag.name}
                                        value={tag.id}
                                        name="blogTags"
                                    />
                                    <Label
                                        htmlFor={tag.name}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {tag.name}
                                    </Label>
                                </div>
                            ))}
                            {error?.blogTags && <p>{error.blogTags}</p>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <SubmitButton label={`Publish Changes`} />
            </div>
        </form>
    );
};

export default BlogForm;

function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {label}
        </Button>
    );
}
