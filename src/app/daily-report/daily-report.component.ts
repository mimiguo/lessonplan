import { Component, OnInit } from '@angular/core';


interface Floor {
  name: string,
  status: any
}

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss']
})
export class DailyReportComponent implements OnInit {

  floorArray: Array<Floor> = [];
  selected = [];
  isActive: boolean = true;


  constructor() {

    console.log('line30', this.floorArray);
  }

  ngOnInit() {
    console.log('line34');
    this.floorArray = [
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
        name: '室外',
        status: 8
      },
      {
        name: '3F',
        status: 15
      },
      {
        name: '4F',
        status: 13
      }

    ];

    for (let i = 0; i < this.floorArray.length; i++) {
      this.selected[i] = false;
    }
    console.log('selected', this.selected);
  }

  onClick(index) {
    console.log(index);
    this.selected.forEach((item, index) => {
      console.log(item);
      this.selected[index] = false;
    });
    this.selected[index] = true;
  }
}

