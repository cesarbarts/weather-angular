import { Component, input } from '@angular/core';
import { Weather } from '../../../models/Weather';
import { DecimalPipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faTemperatureHigh, faTemperatureLow, faUmbrella, faWater, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-weather-card',
  imports: [DecimalPipe, FontAwesomeModule],
  templateUrl: './show-weather-card.html',
  styleUrl: './show-weather-card.scss',
})
export class ShowWeatherCard {
    info = input.required<Weather>();
    faCofee = faCoffee;
    faTemperatureLow = faTemperatureLow;
    faTemperatureHigh = faTemperatureHigh;
    faWind = faWind;
    faWater = faWater;
}
