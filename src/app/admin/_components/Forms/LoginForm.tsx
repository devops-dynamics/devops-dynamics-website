"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "../Header/PageHeader";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onLogin = async (e: FormEvent) => {
        try {
            e.preventDefault();
            setLoading(true);
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/login`,
                user,
            );
            console.log("Login success", response.data);
            router.push("/admin/profile");
        } catch (error: any) {
            console.log("Login failed", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <form
            className="flex min-h-screen flex-col items-center justify-center space-y-8 py-2"
            onSubmit={onLogin}
        >
            <PageHeader>Admin Panel</PageHeader>
            <div className="space-y-2">
                <Label htmlFor="email" className="font-bold">
                    Email
                </Label>
                <Input
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                    placeholder="user@example.com"
                    autoComplete="off"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password" className="font-bold">
                    Password
                </Label>
                <Input
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                    placeholder="Password"
                    autoComplete="off"
                />
            </div>
            <Button type="submit">Login here</Button>
        </form>
    );
}
