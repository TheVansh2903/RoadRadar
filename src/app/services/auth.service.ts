import { Injectable } from '@angular/core';
import { SupabaseService } from '../services/supabase';
import { NavController } from '@ionic/angular';
import { NavigationService } from './navigation';
import { NavigationCancel } from '@angular/router';
import { SupabaseClient } from '@supabase/supabase-js';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private supabase: SupabaseService,
    private navCtrl: NavController,
  ) {}
  async register(email: string, password: string) {
    const { data, error } = await this.supabase.client.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return data;
  }
  async login(email: string, password: string) {
    const { data, error } = await this.supabase.client.auth.signInWithPassword({
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
    await this.supabase.client.auth.signOut();
  }
  async getUser() {
    const { data } = await this.supabase.client.auth.getUser();
    return data.user;
  }

  async resetPassword(email: string) {
    const { data, error } =
      await this.supabase.client.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:8100/reset-password',
      });
    if (error) throw error;
    return data;
  }
}
