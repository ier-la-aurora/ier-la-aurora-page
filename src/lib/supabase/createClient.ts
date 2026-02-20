import { createClient } from "@supabase/supabase-js";
import { SUPABASE_ROLE_KEY } from "astro:env/server";
import { SUPABASE_URL } from "astro:env/server";


export const supabase = createClient(
	SUPABASE_URL,
	SUPABASE_ROLE_KEY
)