import { createClient } from '@supabase/supabase-js'

// Ensure environment variables exist
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and Key must be provided in the .env file')
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey)

// Optional: simple log to confirm client creation
console.log('Supabase client initialized successfully')
console.log('Supabase client initialized');

