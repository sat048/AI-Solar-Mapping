// Import the createClient function and types from Supabase
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

// Create and export the Supabase client, typed as SupabaseClient
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
