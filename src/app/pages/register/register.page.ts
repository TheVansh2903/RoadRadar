import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
})
export class RegisterPage implements OnInit {
  constructor(private router :Router) {}

  ngOnInit() {}
  goToSignIn(){
    this.router.navigate(['/sign-in'])
  }
}
