import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWeather } from './show-weather';

describe('ShowWeather', () => {
  let component: ShowWeather;
  let fixture: ComponentFixture<ShowWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowWeather);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
