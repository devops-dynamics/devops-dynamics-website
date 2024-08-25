"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { marked } from "marked";
import { Loader2 } from "lucide-react";

function RTE() {
    const [input, setInput] = useState("");
    const [renderedHtmlPreview, setRenderedHtmlPreview] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");

    const handleInputChange = (e: FormEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value;
        setInput(value);
    };

    useEffect(() => {
        async function processMarkdown() {
            setIsLoading((prev) => true);
            if (activeTab === "preview") {
                const processedHtml = await marked.parse(input);
                setRenderedHtmlPreview(processedHtml);
            }
            setIsLoading((prev) => false);
        }
        processMarkdown();
    });

    return (
        <Tabs defaultValue="edit" className="w-full">
            <TabsList>
                <TabsTrigger value="edit" onClick={() => setActiveTab("edit")}>
                    Edit
                </TabsTrigger>
                <TabsTrigger
                    value="preview"
                    onClick={() => setActiveTab("preview")}
                >
                    Preview
                </TabsTrigger>
            </TabsList>
            <TabsContent value="edit">
                <Textarea
                    placeholder="Enter your content here"
                    rows={30}
                    value={input}
                    onChange={handleInputChange}
                />
            </TabsContent>
            <TabsContent
                value="preview"
                className="min-h-screen rounded-lg border p-4 shadow"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="animate-spin" />{" "}
                    </>
                ) : (
                    <div className="prose dark:prose-invert">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: renderedHtmlPreview,
                            }}
                        />
                    </div>
                )}
            </TabsContent>
        </Tabs>
    );
}

export default RTE;
