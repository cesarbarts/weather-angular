import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Weather } from '../models/Weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url: string = 'http://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private readonly http: HttpClient) {}

  getWeather(local: string): Observable<Weather> {
    return this.http.get<Weather>(this.url + local + '&units=metric&APPID=' + environment.apiKey);
  }
}
