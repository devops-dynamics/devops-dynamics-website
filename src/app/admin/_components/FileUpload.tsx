"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import uploadFile from "@/lib/uploadFile";

export function InputImage({ ...props }: { [key: string]: any }) {
    const [file, setFile] = useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        console.log(e.target.files[0]);

        setFile(e.target.files[0]);
    };

    // const handleUpload = async () => {
    //     try {
    //         if (!file) return;
    //         const publicUrl = await uploadFile(file);
    //         console.log(publicUrl);
    //     } catch (error: any) {
    //         console.log(error.message);
    //     }
    // };

    return (
        <Input
            id="picture"
            type="file"
            onChange={handleFileChange}
            // onSubmit={handleUpload}
            {...props}
        />
    );
}

/*
Create supabase storage bucket
update policies
update env
integrate with blog-cover & member profile picture
*/
