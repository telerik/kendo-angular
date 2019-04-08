import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get(baseUrl + 'api/SampleData/WeatherForecasts')
    .pipe(map(response => (response as Array<any>).map(x => {
      x.dateFormatted = new Date(x.dateFormatted);
      return x;
    })))
    .subscribe(result => {
      this.forecasts = <WeatherForecast[]> result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
