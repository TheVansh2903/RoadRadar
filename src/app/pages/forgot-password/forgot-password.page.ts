import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { NavigationService } from 'src/app/services/navigation';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
})
export class ForgotPasswordPage implements OnInit {
  constructor(
    public navService:NavigationService,
    private router: Router) {}

  ngOnInit() {}

  goToVerify() {
    this.router.navigate(['/verify']);
  }
}
