"use client";
import React, { useState, FormEvent, memo } from "react";
import { Button, Label } from "@/components/ui";
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
import { Input } from "@/components/ui/input";

// Memoized input component for better performance
const EnquiryFormInput = memo(({
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
                className="relative block overflow-hidden border-b-2 border-muted-foreground bg-transparent pt-3 dark:border-muted"
            >
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className="peer h-8 w-full border-none bg-transparent p-2 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 pl-2 text-xs font-semibold text-muted-foreground transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    {placeholder}
                </span>
            </label>
        </div>
    );
});

// Add display name for memo component
EnquiryFormInput.displayName = 'EnquiryFormInput';

const ContactPage = () => {
    const [selectedBudget, setSelectedBudget] = useState<string>("");
    const [customBudget, setCustomBudget] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append("budget", selectedBudget === "custom" ? customBudget : selectedBudget);
        
        try {
            // Add your form submission logic here
            console.log(Object.fromEntries(formData.entries()));
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

    const handleSelectChange = (value: string) => {
        setSelectedBudget(value);
        if (value !== "custom") {
            setCustomBudget("");
        }
    };

    return (
        <div className="space-y-16">
            {/* Heading */}
            <div className="space-y-4">
                <h1 className="text-md font-semibold">Contact Us</h1>
                <h2 className="text-5xl">Let us Work Together</h2>
                <p className="text-base font-semibold text-muted-foreground">
                    We can&apos;t wait to hear from you.
                </p>
            </div>

            {/* form + contacts */}
            <div className="flex w-full flex-col gap-x-12 gap-y-8 lg:flex-row lg:gap-y-12">
                {/* Contact Information */}
                <div className="w-full space-y-8 lg:w-1/2">
                    <ContactSection 
                        title="Location" 
                        content="Pune, India" 
                    />
                    <Separator />
                    <ContactSection 
                        title="Email Us" 
                        content="contact@devops-dynamics.com" 
                    />
                    <Separator />
                    <ContactSection 
                        title="Socials" 
                        content="contact@devops-dynamics.com" 
                    />
                </div>

                {/* Form */}
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
                            name="name"
                        />
                        <EnquiryFormInput
                            type="tel"
                            placeholder="Phone"
                            name="phone"
                        />
                        <EnquiryFormInput
                            type="text"
                            placeholder="Message"
                            name="message"
                        />

                        <div className="space-y-2 p-2">
                            <Label className="font-semibold text-muted-foreground">
                                Budget
                            </Label>
                            <Select value={selectedBudget} onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select your budget" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Budget</SelectLabel>
                                        <SelectItem value="1000">Less than $1,001</SelectItem>
                                        <SelectItem value="1001">$1,001 - $5,000</SelectItem>
                                        <SelectItem value="5000">$5,001 - $15,000</SelectItem>
                                        <SelectItem value="15000">$15,001 and above</SelectItem>
                                        <SelectItem value="custom">Custom</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {selectedBudget === "custom" && (
                                <div className="mt-4">
                                    <Input
                                        type="number"
                                        value={customBudget}
                                        onChange={(e) => setCustomBudget(e.target.value)}
                                        placeholder="Enter custom budget"
                                        className="w-full rounded-3xl bg-gradient-to-r from-blue-950 to-slate-800 p-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <Button variant="destructive" className="mt-4" type="submit">
                        Send
                    </Button>
                </form>
            </div>
        </div>
    );
};

// Memoized contact section component
const ContactSection = memo(({ title, content }: { title: string; content: string }) => (
    <div className="space-y-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-base font-semibold text-muted-foreground">
            {content}
        </p>
    </div>
));

ContactSection.displayName = 'ContactSection';

export default ContactPage;