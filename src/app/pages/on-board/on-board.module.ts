import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnBoardPageRoutingModule } from './on-board-routing.module';

import { OnBoardPage } from './on-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnBoardPageRoutingModule
  ],
  declarations: [OnBoardPage]
})
export class OnBoardPageModule {}
