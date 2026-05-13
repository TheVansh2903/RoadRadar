import { Injectable } from '@angular/core';
import { supabase } from '../services/supabase';
import { NavController } from '@ionic/angular';
import { NavigationService } from './navigation';
import { NavigationCancel } from '@angular/router';
import { SupabaseClient } from '@supabase/supabase-js';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private navCtrl: NavController) {}
  async register(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return data;
  }
  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
      return data;
    }

    this.navCtrl.navigateRoot('/dashboard');
  }
  async logout() {
    await supabase.auth.signOut();
  }
  async getUser() {
    const { data } = await supabase.auth.getUser();
    return data.user;
  }

  async resetPassword(email: string) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:8100/reset-password',
    });
    if (error) throw error;
    return data;
  }
}
