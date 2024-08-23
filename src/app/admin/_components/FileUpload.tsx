"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
// import supabase from "@supabase/supabase-js";
import { Button } from "@/components/ui";
import Image from "next/image";
import supabase from "@/lib/supabaseClient";
// import { SupabaseClient } from "@supabase/supabase-js";

export function InputFile() {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            if (!file) return;
            setUploading(true);

            const fileExt = file.name.split(".").pop();
            const fileName = `${Date.now()}.${fileExt}`;
            const filePath = `${fileName}`;

            let { error } = await supabase.storage
                .from("bucketName")
                .upload(filePath, file);

            if (error) {
                throw error;
            }

            const { data: url } = await supabase.storage
                .from("bucketName")
                .getPublicUrl(filePath);

            setFileUrl(url.publicUrl);

            console.log(url.publicUrl);

            setUploading(false);
            setError(null);
            alert("File uploaded Successfully");
        } catch (error: any) {
            setError(error.message);
            setUploading(false);
        }
    };

    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
            <Button onClick={handleUpload} disabled={uploading}>
                Upload
            </Button>
            <div>
                {fileUrl && (
                    <Image
                        src={fileUrl}
                        alt="uploaded file"
                        height={300}
                        width={400}
                    />
                )}
            </div>
        </div>
    );
}

/*
Create supabase storage bucket
update policies
update env
integrate with blog-cover & member profile picture
*/
