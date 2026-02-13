import { Routes } from '@angular/router';
import { ShowWeather } from './components/show-weather/show-weather';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { appGuardGuard } from './app-guard-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  {
    path: '',
    canActivate: [appGuardGuard],
    children: [
      { path: 'weather', component: ShowWeather },
      { path: 'about', component: About },
    ],
  },
];
