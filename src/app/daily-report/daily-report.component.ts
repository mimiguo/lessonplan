import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss']
})
export class DailyReportComponent implements OnInit {

  floorArray = [
    {
      name: '1F',
      status: '滿'
    },
    {
      name: '2F',
      status: 14
    },
    {
      name: '室外',
      status: 8
    },
    {
      name: '室外a',
      status: 8
    }

  ];
  constructor() {

    console.log(this.floorArray);
   }

  ngOnInit() {
  }

}

