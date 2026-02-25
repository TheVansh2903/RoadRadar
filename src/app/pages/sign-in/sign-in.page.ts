import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
})
export class SignInPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  goToForgot() {
    this.router.navigate(['forgot-password']);
  }
  goToSignUp() {
    this.router.navigate(['/register']);
  }
}
