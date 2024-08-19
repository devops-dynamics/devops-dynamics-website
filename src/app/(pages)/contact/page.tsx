"use client";
import TextInput from "@/components/Input/TextInput";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter } from "@/constants/icons";
// import { SelectContent } from "@radix-ui/react-select";
// import { RadioGroup } from "@radix-ui/react-dropdown-menu";
import React, { FormEvent } from "react";

const page = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(formData);
    };
    return (
        <div className="space-y-16">
            {/* Heading */}
            <div className="space-y-4">
                <h1 className="text-md font-semibold">Contact Us</h1>
                <h2 className="text-5xl">Let us Work Together</h2>
                <p className="text-base font-semibold text-muted-foreground">
                    We cant wait to hear from you.
                </p>
            </div>
            {/* form + contacts */}
            <div className="flex flex-col gap-x-12 gap-y-8 lg:flex-row lg:gap-y-12">
                {/* enquiry form */}
                <div className="w-full space-y-8 lg:w-1/2">
                    {/* Our Offices */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">Location</h3>
                        <p className="text-base font-semibold text-muted-foreground">
                            Puna, India
                        </p>
                    </div>
                    {/* Email Us */}
                    <Separator />
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">Email Us</h3>
                        <p className="text-base font-semibold text-muted-foreground">
                            hello@devopsdynamics.com
                        </p>
                    </div>
                    <Separator />
                    {/* Follow Us On - Social Media Icons */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">Socials</h3>
                        <p className="text-base font-semibold text-muted-foreground">
                            hello@devopsdynamics.com
                        </p>
                    </div>
                </div>
                <form
                    className="w-full space-y-6 lg:w-1/2"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-2">
                        <Label> Name</Label>
                        <Input name="name" placeholder="Name" />
                    </div>
                    <div className="space-y-2">
                        <Label> Email</Label>
                        <Input name="email" placeholder="Email" />
                    </div>
                    <div className="space-y-2">
                        <Label> Phone</Label>

                        <Input name="phone" placeholder="Phone" />
                    </div>
                    <div className="space-y-2">
                        <Label>Message</Label>
                        <Input
                            name="message"
                            placeholder="Enter you message here..."
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Budget</Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select you budget" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">
                                        Banana
                                    </SelectItem>
                                    <SelectItem value="blueberry">
                                        Blueberry
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button variant={"destructive"}>Send</Button>
                </form>
                {/* contacts */}
                <div />
            </div>
        </div>
    );
};

export default page;
