import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
// --- Initialize Supabase ---
const supabaseUrl = 'https://pqrgvelzxmtdqrofxujx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcmd2ZWx6eG10ZHFyb2Z4dWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMTc0ODAsImV4cCI6MjA3MTY5MzQ4MH0.s8JZLDdzIS1wBLln0Zs3LK_9BHelUcbRhyAC_0-5sos';

export const supabase = createClient(supabaseUrl, supabaseKey);
