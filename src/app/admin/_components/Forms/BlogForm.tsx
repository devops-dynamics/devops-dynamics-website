"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { fetchTags } from "../../_actions/tag";

export default function BlogForm() {
    return (
        <div className="w-full max-w-6xl">
            <div>
                <form className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Enter a catchy title" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Blog Content</Label>
                        <Textarea
                            id="description"
                            placeholder="Provide a brief description of your blog post"
                            rows={10}
                        />
                    </div>
                    <div>
                        <Label>Tags</Label>
                        <div className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
                            <TagCheckBoxes />
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex justify-end">
                <Button type="submit">Publish Post</Button>
            </div>
        </div>
    );
}

const TagCheckBoxes = async () => {
    const tags = await fetchTags();
    return (
        <>
            {tags.map((tag) => (
                <Checkbox key={tag.id} value={tag.name} />
            ))}
        </>
    );
};
