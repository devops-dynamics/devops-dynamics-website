import supabase from "./supabaseClient";

const bucketName = "DD_TEST_BUCKET";

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

// deleting file from storage using imageUrl(public url) as parameter
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
