import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth-guard';
import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('src/app/pages/dashboard/dashboard.page').then(
        (m) => m.DashboardPage,
      ),
    canActivate: [AuthGuard],
    component: DashboardPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
