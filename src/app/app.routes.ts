import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'dev',
    title: 'Dev info',
    loadComponent: () => import('./views/dev-info/dev-info.component').then(m => m.DevInfoComponent),
  },
];
