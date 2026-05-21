import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      if(Capacitor.isNativePlatform()){
        StatusBar.setOverlaysWebView({ overlay: false }).catch(err=>{console.error(err)});
        
      }
    });
  }
}
