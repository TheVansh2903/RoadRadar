import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationService } from 'src/app/services/navigation';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class SignInPage implements OnInit {
  email: string = '';
  password: string = '';
  constructor(
    public navService:NavigationService,
    private router: Router,
    private authservice: AuthService,
  ) {}

  ngOnInit() {}
  goToForgot() {
    this.router.navigate(['forgot-password']);
  }
  goToSignUp() {
    this.router.navigate(['/register']);
  }

  async login() {
    try {
      await this.authservice.login(this.email, this.password);
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      alert(err.message);
    }
  }
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
