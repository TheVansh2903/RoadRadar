import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';
import * as L from 'leaflet';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class DashboardPage implements OnInit, AfterViewInit {
  map!: L.Map;
  ngOnInit() {}
  ngAfterViewInit() {
    this.loadMap();
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
