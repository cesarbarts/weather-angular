import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWeatherCard } from './show-weather-card';

describe('ShowWeatherCard', () => {
  let component: ShowWeatherCard;
  let fixture: ComponentFixture<ShowWeatherCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowWeatherCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowWeatherCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
