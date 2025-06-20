// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.PARCEL_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.PARCEL_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
