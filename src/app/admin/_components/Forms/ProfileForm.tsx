import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Profile } from "@prisma/client";

export default function ProfileForm({ profile }: { profile?: Profile | null }) {
    return (
        <div className="inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="mx-8 w-full max-w-4xl rounded-xl bg-card p-10 sm:p-12 md:p-16">
                <div className="flex flex-col items-center gap-8">
                    <form className="grid w-full gap-6">
                        <div className="w-full items-center gap-1.5">
                            <Label htmlFor="profileImage">Profile Image</Label>
                            <Input id="profileImage" type="file" />
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="displayName">
                                    Display Name
                                </Label>
                                <Input
                                    id="displayName"
                                    defaultValue={
                                        profile ? profile.display_name : ""
                                    }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    defaultValue={profile ? profile.email : ""}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                                id="bio"
                                rows={8}
                                defaultValue={profile ? profile.bio : ""}
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="upworkProfile">
                                    Upwork Profile Link
                                </Label>
                                <Input
                                    id="upworkProfile"
                                    defaultValue={
                                        profile ? profile.upwork_profile : ""
                                    }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="linkedinProfile">
                                    LinkedIn Profile Link
                                </Label>
                                <Input
                                    id="linkedinProfile"
                                    defaultValue={
                                        profile ? profile.linkedin_profile : ""
                                    }
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="githubProfile">
                                    GitHub Profile Link
                                </Label>
                                <Input
                                    id="githubProfile"
                                    defaultValue={
                                        profile ? profile.github_profile : ""
                                    }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="twitterProfile">
                                    Twitter Profile Link
                                </Label>
                                <Input
                                    id="twitterProfile"
                                    defaultValue={
                                        profile ? profile.twitter_profile : ""
                                    }
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="website">Personal Website</Label>
                            <Input
                                id="website"
                                defaultValue={
                                    profile ? profile.personal_website : ""
                                }
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="education">Education</Label>
                                <Input
                                    id="education"
                                    defaultValue={
                                        profile ? profile.education : ""
                                    }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="position">Position</Label>
                                <Input
                                    id="position"
                                    defaultValue={
                                        profile ? profile.position : ""
                                    }
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="achievements">
                                    Achievements
                                </Label>
                                <Input
                                    id="achievements"
                                    defaultValue={
                                        profile ? profile.achievements : ""
                                    }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="certifications">
                                    Certifications
                                </Label>
                                <Input
                                    id="certifications"
                                    defaultValue={
                                        profile ? profile.certifications : ""
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-4">
                            <Button variant="outline">Cancel</Button>
                            <Button type="submit">Save Changes</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function UploadIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    );
}
