import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://txfyrephofxrqhodbswe.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_KEY';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {

  client = createClient(
    supabaseUrl,
    supabaseKey,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
    }
  );

}