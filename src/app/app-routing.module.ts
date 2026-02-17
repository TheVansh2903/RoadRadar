import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'on-board',
    loadChildren: () =>
      import('./pages/on-board/on-board.module').then(
        (m) => m.OnBoardPageModule,
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule,
      ),
  },
  {
    path: 'update-password',
    loadChildren: () =>
      import('./pages/update-password/update-password.module').then(
        (m) => m.UpdatePasswordPageModule,
      ),
  },
  {
    path: '',
    redirectTo: 'on-board',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
