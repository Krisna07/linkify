import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://kbglzqgrxnmdqvauagdb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiZ2x6cWdyeG5tZHF2YXVhZ2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNzUxNDQsImV4cCI6MjAyODc1MTE0NH0.-xhriaXNZszWfuY4uAA_YgT55MB1XKvwBhKBJLUyI7o"
);
