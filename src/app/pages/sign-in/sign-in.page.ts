import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  NavController,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationService } from 'src/app/services/navigation';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
  imports: [FormsModule,CommonModule],
})
export class SignInPage implements OnInit {
  email: string = '';
  password: string = '';
  constructor(
    public navService: NavigationService,
    private navCtrl: NavController,
    private router: Router,
    private authservice: AuthService,
  ) {}

  ngOnInit() {}
  goToForgot() {
    this.navCtrl.navigateRoot(['forgot-password']);
  }
  goToSignUp() {
    this.navCtrl.navigateRoot(['/register']);
  }
  loading = false;

  async login() {
    if (this.loading) {
      return;
    }
    if (!this.email || !this.password) {
      alert('Please Enter Email and Password');
      return;
    }
    if (this.password.length < 6) {
      alert('Password must be at least 6 character');
      return;
    }
    this.loading = true;
    try {
      await this.authservice.login(this.email, this.password);
    } catch (err: any) {
      alert(err.message);
    } finally {
      this.loading = false;
    }
  }
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  showPassword = false ;

  togglePassword(){
    this.showPassword=!this.showPassword;
  }
}
