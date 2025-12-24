import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a client for browser usage with proper cookie handling
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);
