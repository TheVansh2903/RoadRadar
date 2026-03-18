import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { NavigationService } from 'src/app/services/navigation';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
  standalone: true,
})
export class VerifyPage implements OnInit {
  constructor(
    public navService:NavigationService,
    private router:Router) {}

  ngOnInit() {}

  goToSignIn(){
    this.router.navigate(['/sign-in'])
  }
}
