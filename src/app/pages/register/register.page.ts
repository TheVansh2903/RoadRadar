import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from 'src/app/services/navigation';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class RegisterPage implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  constructor(
    public navService:NavigationService,
    private router: Router,
    private authservice: AuthService,
  ) {}

  ngOnInit() {}
  goToSignIn() {
    this.router.navigate(['/sign-in']);
  }

  async register() {
    if (this.password !== this.confirmPassword) {
      alert('Password do not match');
      return;
    }
    try {
      await this.authservice.register(this.email, this.password);
      alert('Register Successfully! Check Your Email');
      this.router.navigate(['/sign-in']);
    } catch (err: any) {
      alert(err.message);
    }
  }
}
