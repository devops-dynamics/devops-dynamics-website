"use client";
import React from "react";
import { Profile } from "@prisma/client";
import { updateProfile } from "../../_actions/profile";
import { useFormState, useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProfileForm({ profile }: { profile: Profile }) {
    const [error, action] = useFormState(
        updateProfile.bind(null, profile?.id),
        {},
    );
    return (
        <div className="inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="mx-8 w-full max-w-4xl rounded-xl bg-card p-10 sm:p-12 md:p-16">
                <div className="flex flex-col items-center gap-8">
                    <form action={action} className="grid w-full gap-6">
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
                                    name="displayName"
                                    defaultValue={
                                        profile ? profile.display_name : ""
                                    }
                                />
                                {error.displayName && (
                                    <p>{error.displayName}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    defaultValue={profile ? profile.email : ""}
                                    required
                                />
                                {error.email && <p>{error.email}</p>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                                id="bio"
                                name="bio"
                                rows={8}
                                defaultValue={profile ? profile.bio : ""}
                            />
                            {error.bio && <p>{error.bio}</p>}
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="upworkProfile">
                                    Upwork Profile Link
                                </Label>
                                <Input
                                    id="upworkProfile"
                                    name="upworkProfileLink"
                                    defaultValue={
                                        profile ? profile.upwork_profile : ""
                                    }
                                />
                                {error.upworkProfileLink && (
                                    <p>{error.upworkProfileLink}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="linkedinProfile">
                                    LinkedIn Profile Link
                                </Label>
                                <Input
                                    id="linkedinProfile"
                                    name="linkedinProfileLink"
                                    defaultValue={
                                        profile ? profile.linkedin_profile : ""
                                    }
                                />
                                {error.linkedinProfileLink && (
                                    <p>{error.linkedinProfileLink}</p>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="githubProfile">
                                    GitHub Profile Link
                                </Label>
                                <Input
                                    id="githubProfile"
                                    name="githubProfileLink"
                                    defaultValue={
                                        profile ? profile.github_profile : ""
                                    }
                                />
                                {error.githubProfileLink && (
                                    <p>{error.githubProfileLink}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="twitterProfile">
                                    Twitter Profile Link
                                </Label>
                                <Input
                                    id="twitterProfile"
                                    name="twitterProfileLink"
                                    defaultValue={
                                        profile ? profile.twitter_profile : ""
                                    }
                                />
                                {error.twitterProfileLink && (
                                    <p>{error.twitterProfileLink}</p>
                                )}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="website">Personal Website</Label>
                            <Input
                                id="website"
                                name="personalWebsiteLink"
                                defaultValue={
                                    profile ? profile.personal_website : ""
                                }
                            />
                            {error.personalWebsiteLink && (
                                <p>{error.personalWebsiteLink}</p>
                            )}
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="education">Education</Label>
                                <Input
                                    id="education"
                                    name="education"
                                    defaultValue={
                                        profile ? profile.education : ""
                                    }
                                />
                                {error.education && <p>{error.education}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="position">Position</Label>
                                <Input
                                    id="position"
                                    name="position"
                                    defaultValue={
                                        profile ? profile.position : ""
                                    }
                                />
                                {error.position && <p>{error.position}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="achievements">
                                    Achievements
                                </Label>
                                <Input
                                    id="achievements"
                                    name="achievements"
                                    defaultValue={
                                        profile ? profile.achievements : ""
                                    }
                                />
                                {error.achievements && (
                                    <p>{error.achievements}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="certifications">
                                    Certifications
                                </Label>
                                <Input
                                    id="certifications"
                                    name="certifications"
                                    defaultValue={
                                        profile ? profile.certifications : ""
                                    }
                                />
                                {error.certifications && (
                                    <p>{error.certifications}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-end gap-4">
                            <Button variant="outline">Cancel</Button>
                            {/* <Button type="submit">Save Changes</Button> */}
                            <SubmitButton label="Save Changes" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {label}
        </Button>
    );
}
