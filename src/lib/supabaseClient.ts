import env from "@/constants/env";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

const supabase = createClient(env.supabase.url, env.supabase.publicAnonKey);
export default supabase;
