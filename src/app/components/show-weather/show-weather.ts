import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../models/Weather';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ShowWeatherCard } from './show-weather-card/show-weather-card';

@Component({
  selector: 'app-show-weather',
  imports: [FormsModule, ShowWeatherCard],
  templateUrl: './show-weather.html',
  styleUrl: './show-weather.scss',
})
export class ShowWeather implements OnInit, OnDestroy {
  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(this.newCity());
  }

  destroy$: Subject<void> = new Subject();

  newCity = signal<string>('Ontario');

  weatherInfo = signal<Weather | null>(null);

  getWeather(local: string): void {
    this.weatherService
      .getWeather(local)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.weatherInfo.set(result);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
