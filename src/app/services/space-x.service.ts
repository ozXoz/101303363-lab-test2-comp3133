import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private baseUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) { }

  getLaunches() {
    return this.http.get<any[]>(`${this.baseUrl}/launches`);
  }

  getLaunchByFlightNumber(flightNumber: string) {
    return this.http.get<any>(`${this.baseUrl}/launches/${flightNumber}`);
  }
}
