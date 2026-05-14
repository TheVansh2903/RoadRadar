import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationCancel, Router } from '@angular/router';
import { IonHeader } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { NavigationService } from 'src/app/services/navigation';
import { SupabaseService } from 'src/app/services/supabase';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class ResetPasswordPage implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  constructor(
    public navService: NavigationService,
    private authservice: AuthService,
    private router: Router,
    private navCtrl: NavController,
    private supabase:SupabaseService
  ) {}

  ngOnInit() {}
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  newPassword = '';

  async updatePassword() {
    const { data, error } = await this.supabase.client.auth.updateUser({
      password: this.newPassword,
    });
    if (error) {
      alert(error.message);
      return;
    }
    alert('Password updated Successfully');
    this.navCtrl.navigateRoot('/sign-in');
  }
}
