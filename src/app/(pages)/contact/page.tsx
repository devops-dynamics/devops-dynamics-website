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
        <>
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
                <div className="flex w-full flex-col gap-x-12 gap-y-8 lg:flex-row lg:gap-y-12">
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
                    <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
                        <div className="w-full space-y-6 rounded-lg border-2 border-muted-foreground py-4 dark:border-muted">
                            <EnquiryFormInput
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                            <EnquiryFormInput
                                type="text"
                                placeholder="Name"
                                name="Name"
                            />
                            <EnquiryFormInput
                                type="text"
                                placeholder="Phone"
                                name="Phone"
                            />
                            <EnquiryFormInput
                                type="text"
                                placeholder="Message"
                                name="Message"
                            />

                            <div className="space-y-2 p-2">
                                <Label className="font-semibold text-muted-foreground">
                                    Budget
                                </Label>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue
                                            className=""
                                            placeholder="Select you budget"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="apple">
                                                Apple
                                            </SelectItem>
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
                        </div>
                        <Button variant={"destructive"} className="mx-2 my-2">
                            Send
                        </Button>
                    </form>
                    {/* contacts */}
                    <div />
                </div>
            </div>
        </>
    );
};

const EnquiryFormInput = ({
    type,
    placeholder,
    name,
}: {
    type: string;
    placeholder: string;
    name: string;
}) => {
    return (
        <div className="px-0 py-1">
            <label
                htmlFor={name}
                className="relative block overflow-hidden border-b-2 border-muted-foreground bg-transparent pt-3 focus-within:border-blue-600 dark:border-muted"
            >
                <input
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    className="peer h-8 w-full border-none bg-transparent p-2 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 pl-2 text-xs font-semibold text-muted-foreground transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    {placeholder}
                </span>
            </label>
        </div>
    );
};

export default page;
