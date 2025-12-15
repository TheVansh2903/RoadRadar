import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import * as L from 'leaflet';
import '../../leaflet-fix';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const map = L.map('map').setView([28.6139, 77.209], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    L.marker([28.6139, 77.209]).addTo(map).bindPopup('You are here');
  }
}
