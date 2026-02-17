import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAccPageRoutingModule } from './login-acc-routing.module';

import { LoginAccPage } from './login-acc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAccPageRoutingModule,
    LoginAccPage,
  ],
})
export class LoginAccPageModule {}
