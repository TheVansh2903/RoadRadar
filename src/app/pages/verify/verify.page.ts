import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
  standalone: true,
})
export class VerifyPage implements OnInit {
  constructor(private router:Router) {}

  ngOnInit() {}

  goToSignIn(){
    this.router.navigate(['/sign-in'])
  }
}
