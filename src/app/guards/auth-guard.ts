import { inject, Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateFn,
  Router
} from '@angular/router';

import { SupabaseService } from '../services/supabase';
import { AuthService } from '../services/auth.service';


export const AuthGuard: CanActivateFn=async()=>{
  const authservice =inject(AuthService);
  const router=inject(Router);

  const user =await authservice.getUser();

  if (user){
    return true;
  }
  router.navigate(['/sign-in']);
  return false;

}