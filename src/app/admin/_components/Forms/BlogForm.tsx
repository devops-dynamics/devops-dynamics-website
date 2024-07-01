"use client";
import { fetchTags } from "../../_actions/tag";
import BlogFormComponent from "./BlogFormComponent";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Tag } from "@prisma/client";

const BlogForm = ({ tags }: { tags?: Tag[] }) => {
    return (
        <div className="w-full max-w-6xl">
            <div>
                <form className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            placeholder="Enter a catchy title"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Blog Content</Label>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Provide a brief description of your blog post"
                            rows={10}
                        />
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
                                        name="tags"
                                    />
                                    <Label
                                        htmlFor={tag.name}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {tag.name}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex justify-end">
                <Button type="submit">Publish Post</Button>
            </div>
        </div>
    );
};

export default BlogFormComponent;
