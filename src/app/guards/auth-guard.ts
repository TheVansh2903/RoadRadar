import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router
} from '@angular/router';

import { SupabaseService } from '../services/supabase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private supabase: SupabaseService,
    private router: Router
  ) {}

  async canActivate(): Promise<boolean> {

    const {
      data: { session }
    } = await this.supabase.client.auth.getSession();

    if (session) {
      return true;
    }

    this.router.navigate(['/sign-in']);
    return false;
  }
}