import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./pages/user-details-page/user-details-page.component').then(
        (m) => m.UserDetailsPageComponent
      ),
  },
];
