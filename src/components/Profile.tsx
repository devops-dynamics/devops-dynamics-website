import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Globe, Mail } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Profile() {
    const blogs = [
        {
            title: "10 Tips for Successful Freelancing",
            description:
                "Learn how to thrive in the competitive world of freelancing.",
            date: "2023-06-15",
        },
        {
            title: "The Future of Web Development",
            description:
                "Exploring upcoming trends and technologies in web development.",
            date: "2023-05-22",
        },
        {
            title: "Mastering React Hooks",
            description:
                "A deep dive into React Hooks and how to use them effectively.",
            date: "2023-04-10",
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid gap-6 md:grid-cols-3">
                {/* Profile Details Column */}
                <div className="space-y-6">
                    {/* <Card> */}
                    {/* <CardContent className="pt-6"> */}
                    <div className="flex flex-col items-center space-y-4">
                        <Avatar className="h-32 w-32">
                            <AvatarImage
                                src="/placeholder.svg?height=128&width=128"
                                alt="Profile Picture"
                            />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold">John Doe</h1>
                            <p className="text-muted-foreground">
                                Freelance Web Developer
                            </p>
                        </div>
                    </div>
                    {/* </CardContent> */}
                    {/* </Card> */}

                    <Card>
                        <CardHeader>
                            <CardTitle>About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Passionate web developer with 5+ years of
                                experience in creating responsive and
                                user-friendly websites. Specialized in React,
                                Next.js, and modern CSS frameworks.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Contact & Links</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>john.doe@example.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Link
                                    href="https://www.upwork.com/freelancers/johndoe"
                                    className="flex items-center space-x-2"
                                >
                                    <Image
                                        src="/upwork-icon.svg"
                                        width={16}
                                        height={16}
                                        alt="Upwork"
                                    />
                                    <span>Upwork Profile</span>
                                </Link>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Link
                                    href="https://github.com/johndoe"
                                    className="flex items-center space-x-2"
                                >
                                    <Github className="h-4 w-4" />
                                    <span>GitHub</span>
                                </Link>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Link
                                    href="https://twitter.com/johndoe"
                                    className="flex items-center space-x-2"
                                >
                                    <Twitter className="h-4 w-4" />
                                    <span>Twitter</span>
                                </Link>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Link
                                    href="https://johndoe.com"
                                    className="flex items-center space-x-2"
                                >
                                    <Globe className="h-4 w-4" />
                                    <span>Personal Website</span>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Blogs Column */}
                <div className="col-span-2 space-y-6">
                    <div>
                        <CardHeader>
                            <CardTitle className="text-4xl">
                                Latest Blog Posts
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {blogs.map((post, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription>
                                            {post.date}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            {post.description}
                                        </p>
                                        <Button
                                            variant="link"
                                            className="mt-2 p-0"
                                        >
                                            Read more
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </CardContent>
                    </div>
                </div>
            </div>
        </div>
    );
}
