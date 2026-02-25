import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
})
export class ForgotPasswordPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToVerify() {
    this.router.navigate(['/verify']);
  }
}
