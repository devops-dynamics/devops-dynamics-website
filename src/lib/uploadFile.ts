import env from "@/constants/env";
import supabase from "./supabaseClient";

const bucketName = env.supabase.storage.bucketName;

const uploadFile = async (file: File) => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;
    let { error } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file);
    if (error) {
        throw error;
    }
    const { data: url } = await supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);

    return url.publicUrl;
};

const deleteFile = async (imageUrl: string) => {
    const filePath = imageUrl.split("/").pop();
    let { data, error } = await supabase.storage
        .from(bucketName)
        .remove([filePath!]);
    if (error) {
        throw error;
    }
    return data;
};

export default uploadFile;
