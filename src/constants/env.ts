const env = {
    database: {
        directUrl: "",
        databaseUrl: "",
    },
    auth: {
        tokenSecret: "",
    },
    supabase: {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
        publicAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    },
};

export default env;
