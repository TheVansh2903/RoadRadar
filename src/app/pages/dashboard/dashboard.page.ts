import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SupabaseService } from 'src/app/services/supabase';
import { Geolocation } from '@capacitor/geolocation';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class DashboardPage implements OnInit, AfterViewInit {

  map!: L.Map;

  latitude: number | null=null;
  longitude: number |null=null;
  isLoading: boolean = false;

  constructor(
    public navService: NavigationService,
    private authservice: AuthService,
    private router: Router,
    private supabase: SupabaseService,
    private menuCtrl:MenuController
  ) {}

  async ngOnInit() {}

  ngAfterViewInit() {
    this.loadMap();
  }



  async loadMap() {


    // FIX LEAFLET ICON ISSUE
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',

      iconUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',

      shadowUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });

    // CREATE MAP
    this.map = L.map('map').setView([28.9845, 77.7064], 13);

    // TILE LAYER
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '© OpenStreetMap contributors',
      }
    ).addTo(this.map);

    // FETCH REPORTS FROM SUPABASE
   const { data, error } = await this.supabase.client
  .from('reports')
  .select('*');

  console.log(data);
  console.log(error);

    if (error) {
      console.log('Supabase Error:', error);
      return;
    }

    // ADD MARKERS
   data.forEach((report: any) => {

  console.log(report.latitude);
  console.log(report.longitude);

  L.marker([
   Number(report.latitude),
   Number(report.longitude)
  ])
  .addTo(this.map)
  .bindPopup(`<b>${report.issue}</b>`);

});
  }

  goToReportForm() {
    this.router.navigate(['/report-form']);
  }

  goToHamburger(){
    this.menuCtrl.open();
  }
  goToProfile() {

  this.router.navigate(['/profile']);

}

logout() {

  localStorage.clear();

  this.router.navigate(['/login']);

}

  async toggleLocation(event: any) {
    const isChecked = event.target.checked;

    if (isChecked) {
      // Switch is ON -> Get Location
      this.isLoading = true;
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        this.latitude = coordinates.coords.latitude;
        this.longitude = coordinates.coords.longitude;
        console.log('Location:', this.latitude, this.longitude);
      } catch (error) {
        console.error('Error getting location', error);
        // Optional: Revert the toggle if permission is denied
        event.target.checked = false; 
      } finally {
        this.isLoading = false;
      }
    } else {
      // Switch is OFF -> Clear Location
      this.latitude = null;
      this.longitude = null;
      console.log('Location cleared');
    }
  }
}
