import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {
  launches: any[] = [];
  // yearFilter: string = '';
  yearFilter: string | Event = ''; // Change the type to string | Event

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe(data => {
      this.launches = data;
    });
  }

  applyFilter(): void {
    if (this.yearFilter) {
      this.http.get<any[]>(`https://api.spacexdata.com/v3/launches?launch_year=${this.yearFilter}`).subscribe(data => {
        this.launches = data;
      });
    } else {
      this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe(data => {
        this.launches = data;
      });
    }
  }

  showDetails(flightNumber: any) {
    this.router.navigateByUrl(`/missiondetails/${flightNumber.flight_number}`);
  }
}
