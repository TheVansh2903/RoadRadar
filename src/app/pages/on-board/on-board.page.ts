import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-on-board',
  templateUrl: './on-board.page.html',
  styleUrls: ['./on-board.page.scss'],
  standalone: true,
  imports:[CommonModule,FormsModule,IonicModule]
})
export class OnBoardPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToLogin() {
    this.router.navigate(['/login'])
  }
}
