import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule,IonicModule]
})
export class DashboardPage implements OnInit, AfterViewInit {
  map!: L.Map;

  constructor(
    public navService: NavigationService,
    private authservice: AuthService,
    private router: Router,
  ) {}

  async ngOnInit() {
   
  }

  ngAfterViewInit() {
    this.loadMap();

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; OpenStreetMap &copy; CartoDB',
      },
    ).addTo(this.map);
  }

  loadMap() {
    this.map = L.map('map').setView([28.9845, 77.7064], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 300);
  }
}
