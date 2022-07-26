import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName:string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.WEATHER_API_BASE_URL, {
      params: new HttpParams()
      .set('q',cityName)
      .set('units', 'metric')
      .set('mode','json')
      .set(environment.RAPID_API_KEY_NAME,environment.RAPID_API_KEY_VALUE)
    })
  }
}
