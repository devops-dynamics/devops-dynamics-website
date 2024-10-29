"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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


interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

interface EnquiryFormInputProps {
  type: string;
  placeholder: string;
  name: string;
}

interface MessageState {
  text: string;
  type: "success" | "error";
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps): JSX.Element => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </a>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg viewBox="0 0 24 24" {...props} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EnquiryFormInput = ({
  type,
  placeholder,
  name,
}: EnquiryFormInputProps): JSX.Element => (
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
        required
      />
      <span className="absolute start-0 top-2 -translate-y-1/2 pl-2 text-xs font-semibold text-muted-foreground transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
        {placeholder}
      </span>
    </label>
  </div>
);

export default function ContactPage(): JSX.Element {
  const [showCustomBudget, setShowCustomBudget] = useState<boolean>(false);
  const [customBudget, setCustomBudget] = useState<string>("");
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<MessageState | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        email: formData.get("email"),
        name: formData.get("name"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        budget: showCustomBudget ? customBudget : selectedBudget,
      };

      // Log the form data to console
      console.log("Form submitted with data:", data);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setMessage({ text: "Message sent successfully!", type: "success" });

      // Reset form
      e.currentTarget.reset();
      setCustomBudget("");
      setSelectedBudget("");
      setShowCustomBudget(false);
    } catch (error) {
      console.error("Error:", error);
      setMessage({
        text: "Error sending message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBudgetChange = (value: string): void => {
    setSelectedBudget(value);
    setShowCustomBudget(value === "custom");
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

      {/* Form + Contacts */}
      <div className="flex w-full flex-col gap-x-12 gap-y-8 lg:flex-row lg:gap-y-12">
        {/* Contact Information */}
        <div className="w-full space-y-8 lg:w-1/2">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Location</h3>
            <p className="text-base font-semibold text-muted-foreground">
              Pune, India
            </p>
          </div>
          <Separator />
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Email Us</h3>
            <a
              href="mailto:contact@devops-dynamics.com"
              className="text-base font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              contact@devops-dynamics.com
            </a>
          </div>
          <Separator />
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Connect With Us</h3>
            <div className="space-y-2">
              <SocialLink
                href="https://linkedin.com/company/devops-dynamics"
                icon={LinkedInIcon}
                label="LinkedIn"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
          <div className="w-full space-y-6 rounded-lg border-2 border-muted-foreground p-4 dark:border-muted">
            <EnquiryFormInput type="email" placeholder="Email" name="email" />
            <EnquiryFormInput type="text" placeholder="Name" name="name" />
            <EnquiryFormInput type="tel" placeholder="Phone" name="phone" />
            <EnquiryFormInput type="text" placeholder="Message" name="message" />

            <div className="space-y-2 p-2">
              <Label className="font-semibold text-muted-foreground">Budget</Label>
              <Select onValueChange={handleBudgetChange} value={selectedBudget}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select your budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Budget Range</SelectLabel>
                    <SelectItem value="5000">$0-$5000</SelectItem>
                    <SelectItem value="10000">$5001-$10000</SelectItem>
                    <SelectItem value="15000">$10001-$15000</SelectItem>
                    <SelectItem value="above">$15000 and above</SelectItem>
                    <SelectItem value="custom">Custom Budget</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {showCustomBudget && (
                <div className="mt-4">
                  <Label htmlFor="customBudget">Enter your budget</Label>
                  <Input
                    id="customBudget"
                    name="customBudget"
                    type="number"
                    placeholder="Enter amount in USD"
                    value={customBudget}
                    onChange={(e): void => setCustomBudget(e.target.value)}
                    className="mt-2"
                  />
                </div>
              )}
            </div>
          </div>
          {message && (
            <div
              className={`mt-4 p-2 rounded ${
                message.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message.text}
            </div>
          )}
          <Button
            type="submit"
            variant="destructive"
            className="mx-2 my-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </form>
      </div>
    </div>
  );
}