import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-on-board',
  templateUrl: './on-board.page.html',
  styleUrls: ['./on-board.page.scss'],
  standalone: true,
})
export class OnBoardPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToLogin() {
    this.router.navigate(['/login'])
  }
}
