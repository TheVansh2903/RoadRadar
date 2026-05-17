import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from 'src/app/services/navigation';
import { NavController } from '@ionic/angular';
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
    
  ) { }

  ngOnInit() {
  }

}
