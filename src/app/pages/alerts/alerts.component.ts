import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
  alerts=[
    {type:'Accident', description:'Two-car collision', distance:3},
    {type:'Roadblock', description:'Construction zone', distance:5}
  ];
}
