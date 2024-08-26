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

export default uploadFile;
