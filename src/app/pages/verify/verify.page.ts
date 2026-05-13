import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  NavController,
} from '@ionic/angular/standalone';
import { NavigationService } from 'src/app/services/navigation';
import { ActivatedRoute } from '@angular/router';
import { supabase } from 'src/app/services/supabase';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
  standalone: true,
})
export class VerifyPage implements OnInit {
  OTP: string = '';
  email: string = '';
  constructor(
    private route: ActivatedRoute,
    public navService: NavigationService,
    private router: Router,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {
    this.email = this.route.snapshot.queryParams['email'];
  }

  goToSignIn() {
    this.navCtrl.navigateRoot(['/sign-in']);
  }

  async verifyOTP() {
    const { data, error } = await supabase.auth.verifyOtp({
      email: this.email,
      token: this.OTP,
      type: 'email',
    });
    if (error) {
      alert(error.message);
      return;
    }
    this.navCtrl.navigateRoot('/reset-password');
  }
}
