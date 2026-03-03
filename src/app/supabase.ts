import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://txfyrephofxrqhodbswe.supabase.co';
const supabaseKey = 'sb_publishable_6J6kPJMBcWL8xGhx4OYBIQ_P-smjczK';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});
