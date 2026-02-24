import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader } from '@ionic/angular/standalone';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  // standalone: true,
  imports: [],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  
}
