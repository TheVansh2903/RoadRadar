import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { NavigationService } from 'src/app/services/navigation';
import { supabase } from 'src/app/services/supabase';
import { NavController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports:[FormsModule,CommonModule]
})
export class ForgotPasswordPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    public navService: NavigationService,
    private router: Router,
  ) {}

  ngOnInit() {}

  goToVerify() {
    this.router.navigate(['/verify']);
  }

  email: string = '';

  async sentOtp() {
    if (!this.email) {
      alert('Please enter email');
      return;
    }
    try {
      await supabase.auth.signInWithOtp({ email: this.email });
      this.navCtrl.navigateForward('/verify', {
        queryParams: { email: this.email },
      });
    } catch (err: any) {
      alert(err.message);
    }
  }
}
