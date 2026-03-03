import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';
import * as L from 'leaflet';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class DashboardPage implements OnInit, AfterViewInit {
  map!: L.Map;
  constructor(
    private authservice: AuthService,
    private router: Router,
  ) {}
  async ngOnInit() {
    const user = this.authservice.getUser();
    if (!user) {
      this.router.navigate(['/sign-in']);
    }
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
