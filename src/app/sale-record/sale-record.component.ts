import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';


interface OrderList {
  number: any,
  day: any,
  time: any
}

interface OrderData {
  name: string,
  number: string,
  price: number,
  time: any,
  status: string
}

interface OrderTotal {
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

  listArray: Array<OrderList> = [];
  dataArray: Array<OrderData> = [];
  totalArray: Array<OrderTotal> = [];
  constructor() { }

  ngOnInit() {
    this.listArray = [
      {
        number: '01.',
        day: '2016-12-01',
        time: '11:30:03'
      },
      {
        number: '02.',
        day: '2016-12-02',
        time: '11:30:03'
      },
      {
        number: '03.',
        day: '2016-12-03',
        time: '11:30:03'
      },
      {
        number: '04.',
        day: '2016-12-04',
        time: '11:30:03'
      },
      {
        number: '05.',
        day: '2016-12-05',
        time: '11:30:03'
      },
      {
        number: '06.',
        day: '2016-12-06',
        time: '11:30:03'
      },
      {
        number: '07.',
        day: '2016-12-07',
        time: '11:30:03'
      },
      {
        number: '08.',
        day: '2016-12-08',
        time: '11:30:03'
      },
      {
        number: '08.',
        day: '2016-12-08',
        time: '11:30:03'
      },
      {
        number: '08.',
        day: '2016-12-08',
        time: '11:30:03'
      },
      {
        number: '08.',
        day: '2016-12-08',
        time: '11:30:03'
      },
      {
        number: '09.',
        day: '2016-12-09',
        time: '11:30:03'
      }
    ]
    this.totalArray = [
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

}
