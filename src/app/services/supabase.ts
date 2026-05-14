import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://txfyrephofxrqhodbswe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4ZnlyZXBob2Z4cnFob2Ric3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0NjIwMzEsImV4cCI6MjA4ODAzODAzMX0.mfB9B7OHsGqJSgRSMdEn_amOO10PO2phr5qZK84EvSQ'

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