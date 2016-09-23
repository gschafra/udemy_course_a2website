import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './components/pages/about/about.component';
import {HomeComponent} from './components/pages/home/home.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
      path: '',
      component: HomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);