import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader } from '@ionic/angular/standalone';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationService } from 'src/app/services/navigation';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  // standalone: true,
  imports: [],
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
