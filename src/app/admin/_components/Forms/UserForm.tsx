"use client";
import React from "react";
import { addUser, updateUser } from "../../_actions/user";
import { User } from "@prisma/client";
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

export const UserForm = ({ user }: { user?: User | null }) => {
    const [error, action] = useFormState(
        user == null ? addUser : updateUser.bind(null, user.id),
        {},
    );

    return (
        <form action={action} className="space-y-8">
            <div className="space-y-2">
                <Label htmlFor="name" className="">
                    Full Name
                </Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    defaultValue={user ? user.name : ""}
                    className="max-w-96"
                />
                {error?.name && <p>{error.name}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="email" className="space-y-2">
                    Email
                </Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    defaultValue={user ? user.email : ""}
                    className="max-w-96"
                />
                {error?.email && <p>{error.email}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="password" className="space-y-2">
                    Password
                </Label>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="max-w-96"
                />
                {error?.password && <p>{error.password}</p>}
            </div>
            <div className="space-y-2">
                <Label className="space-y-2">Role</Label>
                <Select name="role" required>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue
                            placeholder="Select Role"
                            defaultValue={user?.role}
                        />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="OWNER">Owner</SelectItem>
                        <SelectItem value="MEMBER">Member</SelectItem>
                    </SelectContent>
                </Select>
                {error?.role && <p>{error.role}</p>}
            </div>
            <SubmitButton label={user ? "Update" : "Add"} />
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
