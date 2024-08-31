const env = {
    database: {
        directUrl: "",
        databaseUrl: "",
    },
    auth: {
        tokenSecret: "",
    },
    supabase: {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
        publicAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        storage: {
            bucketName: process.env.BUCKET_NAME!,
        },
    },
};

export default env;
