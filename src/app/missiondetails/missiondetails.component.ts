import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../services/space-x.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissiondetailsComponent implements OnInit {
  flightNumber: string = '';
  mission: any = {};

  constructor(private route: ActivatedRoute, private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.flightNumber = params.get('id')!;
      this.spaceXService.getLaunchByFlightNumber(this.flightNumber).subscribe(data => {
        this.mission = data;
      });
    });
  }

}
