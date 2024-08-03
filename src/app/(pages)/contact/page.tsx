import TextInput from "@/components/Input/TextInput";
import React from "react";

const page = () => {
    return (
        <div className="space-y-12">
            {/* Heading */}
            <div className="space-y-4">
                <h1 className="text-md font-semibold">Contact Us</h1>
                <h2 className="text-5xl">Let us Work Together</h2>
                <p className="text-base font-semibold text-muted-foreground">
                    We cant wait to hear from you.
                </p>
            </div>
            {/* form + contacts */}
            <div>
                {/* enquiry form */}
                <div className="space-y-6">
                    <TextInput label="Name" />
                    <TextInput label="Email" />
                    <TextInput label="Phone" />
                    <TextInput label="Message" />
                    <TextInput label="Email" />
                </div>
                {/* contacts */}
            </div>
        </div>
    );
};

export default page;
