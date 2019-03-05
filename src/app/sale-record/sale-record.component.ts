import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

interface SearchTime {
  day: string,
  time: any
}

interface detailProduction {
  name: string,
  quantity: number,
  price: number
}
@Component({
  selector: 'app-sale-record',
  templateUrl: './sale-record.component.html',
  styleUrls: ['./sale-record.component.scss']
})
export class SaleRecordComponent implements OnInit {

  time: Array<SearchTime> = [];
  selected = [];
  production: Array<detailProduction> = [];
  isActive: boolean = true;
  constructor() { }

  ngOnInit() {
    this.time = [
      {
        day: '2016-12-01',
        time: '11:30:03'
      },
      {
        day: '2016-12-02',
        time: '11:30:03'
      },
      {
        day: '2016-12-03',
        time: '11:30:03'
      },
      {
        day: '2016-12-04',
        time: '11:30:03'
      },
      {
        day: '2016-12-05',
        time: '11:30:03'
      },
      {
        day: '2016-12-06',
        time: '11:30:03'
      },
      {
        day: '2016-12-07',
        time: '11:30:03'
      },
      {
        day: '2016-12-08',
        time: '11:30:03'
      },
      {
        day: '2016-12-08',
        time: '11:30:03'
      },
      {
        day: '2016-12-08',
        time: '11:30:03'
      },
      {
        day: '2016-12-08',
        time: '11:30:03'
      },
      {
        day: '2016-12-09',
        time: '11:30:03'
      }
    ];

    for (let i = 0; i < this.time.length; i++) {
      this.selected[i] = false;
    }

    this.production = [
      {
        name: '羅勒風味海瓜子蛤蜊炒蝦仁意麵腸',
        quantity: 10,
        price: 140000
      },
      {
        name: '羅勒風味海瓜子蛤蜊炒蝦仁意麵腸',
        quantity: 9,
        price: 140
      },
      {
        name: '羅勒風味海瓜子蛤蜊炒蝦仁意麵腸',
        quantity: 8,
        price: 140000
      },
      {
        name: '羅勒風味海瓜子蛤蜊炒蝦仁意麵腸',
        quantity: 8,
        price: 140000
      },
      {
        name: '羅勒風味海瓜子蛤蜊炒蝦仁意麵腸',
        quantity: 8,
        price: 140000
      },
      {
        name: '羅勒風味海瓜子蛤蜊炒蝦仁意麵腸',
        quantity: 8,
        price: 140000
      },
      {
        name: '羅勒風味海瓜子蛤蜊炒蝦仁意麵腸',
        quantity: 7,
        price: 140000
      },
      {
        name: '羅勒風味海瓜子蛤蜊炒蝦仁意麵腸',
        quantity: 6,
        price: 140000
      },
      {
        name: '羅勒風味海瓜子蛤蜊炒蝦仁意麵腸',
        quantity: 5,
        price: 140000
      },
      {
        name: '羅勒風味海瓜子蛤蜊炒蝦仁意麵腸',
        quantity: 4,
        price: 140000
      },
      {
        name: '羅勒風味海瓜子蛤蜊炒蝦仁意麵腸',
        quantity: 3,
        price: 140000
      }
    ]
  }

  onClick(index) {
    this.selected.forEach((item, index)=>{
      this.selected[index] = false;
    });
    this.selected[index] = true;
  }
}
