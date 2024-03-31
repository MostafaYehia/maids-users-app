import { Routes } from '@angular/router';
import { APP_NAV } from './constants';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: APP_NAV.USER_DETAILS,
    loadComponent: () =>
      import('./pages/user-details-page/user-details-page.component').then(
        (m) => m.UserDetailsPageComponent
      ),
  },
];
