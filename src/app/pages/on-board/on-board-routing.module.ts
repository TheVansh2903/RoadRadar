import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnBoardPage } from './on-board.page';

const routes: Routes = [
  {
    path: '',
    component: OnBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnBoardPageRoutingModule {}
