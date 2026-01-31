import { Routes } from '@angular/router';
import { ShowWeather } from './components/show-weather/show-weather';
import { About } from './components/about/about';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ShowWeather},
    {path: 'about', component: About}
];
