import { Routes } from '@angular/router';
import { CrImputComponent } from './components/cr-imput/cr-imput.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/cr-imput/cr-imput.component').then(m => m.CrImputComponent),
  },
];
