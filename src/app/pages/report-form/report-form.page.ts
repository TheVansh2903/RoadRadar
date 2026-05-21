import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from 'src/app/services/navigation';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';
import { SupabaseService } from 'src/app/services/supabase';
@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.page.html',
  styleUrls: ['./report-form.page.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule,IonicModule]
})
export class ReportFormPage implements OnInit {

  constructor(
    public navService:NavigationService,
    private supabase: SupabaseService
    
  ) { }
  map!: L.Map;
  firstName='';
  lastName='';
  email='';
  issue='';
  category='';
  description ='';
  address1='';
  address2='';
  pincode= '';
  district='';
  state='';
  country='';
  priority='';
  imageUrl=''; 

  async submitReport(){
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy:true,
      timeout:15000
    });
     const lat = coordinates.coords.latitude;
     const lng = coordinates.coords.longitude;
     const report = {
      issue: this.issue,
      latitude: lat,
      longitude: lng,
    };

    console.log(report);


    // Save report to database here
    const { data, error } =
  await this.supabase.client
    .from('reports')
    .insert([
      {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,

        issue: this.issue,
        category: this.category,
        description: this.description,

        address1: this.address1,
        address2: this.address2,

        pincode: this.pincode,
        district: this.district,
        state: this.state,
        country: this.country,

        priority: this.priority,
        latitude: lat,
        longitude: lng,

        image_url:this.imageUrl
      }
    ]);
    if(error){
      console.log(error);
    }
    else{
      console.log('Report Saved')
    }
  }

  ngOnInit() {
  }
async getCurrentLocation(){
    const coordinates =await Geolocation.getCurrentPosition({
      enableHighAccuracy:true,
      timeout:15000,
    });
    console.log('Latitude:',coordinates.coords.latitude);
    console.log('Longitude:',coordinates.coords.longitude);
    
  }
}
