import { Injectable } from '@angular/core';
import { supabase } from '../supabase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  async register(email: string, password: string) {
    const {data,error}=await supabase.auth.signUp({
      email,password
    });
    if (error) throw error ;
    return data;
  }
  async login(email:string , password:string){
    const {data,error}=await supabase.auth.signInWithPassword({
      email,password
    });
    if (error) throw error;
    return data 
  }
  async logout (){
    await supabase.auth.signOut();
  }
  async getUser (){
    const {data} = await supabase.auth.getUser();
    return data.user;
  }
}
