import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Globe, Mail, Linkedin } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Blog, Profile as ProfileType, Project } from "@prisma/client";

type ProjectProp = {
    id: string;
    title: string;
    description: string;
    author_id?: string;
};

export default function Profile({
    profile,
    blogs,
    projects,
}: {
    profile: ProfileType;
    blogs: Blog[] | any;
    projects: Project[] | ProjectProp[];
}) {
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
                            <h1 className="text-2xl font-bold">
                                {profile.display_name}
                            </h1>
                            <p className="text-muted-foreground">
                                {profile.position || "Freelancer"}
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
                            <p>{profile.bio}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Contact & Links</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {/* mail */}
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>{profile.email}</span>
                            </div>
                            {/* upwork */}
                            {profile && profile.upwork_profile && (
                                <div className="flex items-center space-x-2">
                                    <Link
                                        href={profile.upwork_profile}
                                        className="flex items-center space-x-2"
                                    >
                                        <svg
                                            fill="#000000"
                                            height={24}
                                            width={24}
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g
                                                id="SVGRepo_bgCarrier"
                                                strokeWidth="0"
                                            ></g>
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"></path>{" "}
                                            </g>
                                        </svg>
                                        <span>Upwork Profile</span>
                                    </Link>
                                </div>
                            )}
                            {/* github */}
                            {profile && profile.github_profile && (
                                <div className="flex items-center space-x-2">
                                    <Link
                                        href={profile.github_profile}
                                        className="flex items-center space-x-2"
                                    >
                                        <Github className="h-4 w-4" />
                                        <span>GitHub</span>
                                    </Link>
                                </div>
                            )}
                            {/* twitter */}
                            {profile && profile.twitter_profile && (
                                <div className="flex items-center space-x-2">
                                    <Link
                                        href={profile.twitter_profile}
                                        className="flex items-center space-x-2"
                                    >
                                        <Twitter className="h-4 w-4" />
                                        <span>Twitter</span>
                                    </Link>
                                </div>
                            )}
                            {/* personal website */}
                            {profile && profile.personal_website && (
                                <div className="flex items-center space-x-2">
                                    <Link
                                        href="https://johndoe.com"
                                        className="flex items-center space-x-2"
                                    >
                                        <Globe className="h-4 w-4" />
                                        <span>Personal Website</span>
                                    </Link>
                                </div>
                            )}
                            {/* linkedin */}
                            {profile && profile.linkedin_profile && (
                                <div className="flex items-center space-x-2">
                                    <Link
                                        href={profile.linkedin_profile}
                                        className="flex items-center space-x-2"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                        <span>LinkedIn</span>
                                    </Link>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                    {/* education */}
                    {profile.education && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Education</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {
                                    <div className="flex items-center space-x-2">
                                        <span>{profile.education || "da"}</span>
                                    </div>
                                }
                            </CardContent>
                        </Card>
                    )}
                    {/* achievements */}
                    {profile.achievements && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Achievements</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {
                                    <div className="flex items-center space-x-2">
                                        <span>
                                            {profile.achievements ||
                                                "achievements"}
                                        </span>
                                    </div>
                                }
                            </CardContent>
                        </Card>
                    )}
                    {/* certifications */}
                    {profile.certifications && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Certification</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {
                                    <div className="flex items-center space-x-2">
                                        <span>
                                            {profile.certifications || "cert"}
                                        </span>
                                    </div>
                                }
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Blogs Column */}
                <div className="col-span-2 space-y-6">
                    <Tabs defaultValue="blogs" className="">
                        <TabsList className="mx-6">
                            <TabsTrigger value="blogs">Blogs</TabsTrigger>
                            <TabsTrigger value="projects">Projects</TabsTrigger>
                        </TabsList>
                        <TabsContent value="blogs">
                            <div>
                                <CardHeader>
                                    <CardTitle className="text-4xl">
                                        Latest Blog Posts
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {blogs.map((post: any, index: number) => (
                                        <Card key={index}>
                                            <CardHeader>
                                                <CardTitle className="text-lg">
                                                    {post.title}
                                                </CardTitle>
                                                {/* <CardDescription>
                                            {post.date}
                                        </CardDescription> */}
                                            </CardHeader>
                                            <CardContent>
                                                <p className="line-clamp-1 text-sm text-muted-foreground">
                                                    {post.description}
                                                </p>
                                                <Button
                                                    variant="link"
                                                    className="mt-2 p-0"
                                                    asChild
                                                >
                                                    <Link
                                                        href={`/blogs/${post.id}`}
                                                    >
                                                        Read more
                                                    </Link>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </CardContent>
                            </div>
                        </TabsContent>
                        <TabsContent value="projects">
                            {/* Projects */}
                            {projects.length > 0 ? (
                                <>
                                    <CardHeader>
                                        <CardTitle className="text-4xl">
                                            Projects Worked On
                                        </CardTitle>
                                    </CardHeader>
                                    <div className="space-y-6 p-6">
                                        {projects.map((item, index) => {
                                            return (
                                                <Card key={index}>
                                                    <CardHeader>
                                                        <CardTitle className="text-lg">
                                                            {item.title}
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <p className="line-clamp-1 text-sm text-muted-foreground">
                                                            {item.description}
                                                        </p>
                                                    </CardContent>
                                                </Card>
                                            );
                                        })}
                                    </div>
                                </>
                            ) : (
                                <h2>No Projects Found</h2>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
