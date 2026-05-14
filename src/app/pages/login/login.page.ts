import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonHeader } from '@ionic/angular/standalone';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationService } from 'src/app/services/navigation';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [FormsModule,CommonModule,IonicModule],
})
export class LoginPage implements OnInit {
  constructor(
    public navService:NavigationService,
    private router: Router) {}

  ngOnInit() {}

  goToSignIn() {
    this.router.navigate(['/sign-in']);
  }

  gotoSignUp() {
    this.router.navigate(['/register']);
  }
}
