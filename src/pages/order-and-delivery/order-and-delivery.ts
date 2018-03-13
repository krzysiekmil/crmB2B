import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the OrderAndDeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface OrderAndDeliveryData {
  title: string;
  data: string;
  orderSum: any;
  deliverySum: any;
  orderDetail: Array<Data>;
  deliveryDetail: Array<Data>;
}

export interface Data {
  param: any;
  value: any;
}


export var multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];


@IonicPage()
@Component({
  selector: 'page-order-and-delivery',
  templateUrl: 'order-and-delivery.html',
})
export class OrderAndDeliveryPage {
  // single = [
  //   {
  //     "name": "2011",
  //     "series": [
  //       {
  //         "name": "Zamowienie",
  //         "value": 11
  //       },
  //       {
  //         "name": "Dostawa",
  //         "value": 12
  //       }]
  //   },
  //   {
  //     "name": "2012",
  //     "series": [
  //       {
  //         "name": "Zamowienie",
  //         "value": 12
  //       },
  //       {
  //         "name": "Dostawa",
  //         "value": 23
  //       }]
  //   },
  //   {
  //     "name": "2013",
  //     "series": [
  //       {
  //         "name": "Zamowienie",
  //         "value": 15
  //       },
  //       {
  //         "name": "Dostawa",
  //         "value": 7
  //       }]
  //   },{
  //     "name": "2014",
  //     "series": [
  //       {
  //         "name": "Zamowienie",
  //         "value": 12
  //       },
  //       {
  //         "name": "Dostawa",
  //         "value": 14
  //       }]
  //   },{
  //     "name": "2015",
  //     "series": [
  //       {
  //         "name": "Zamowienie",
  //         "value": 51
  //       },
  //       {
  //         "name": "Dostawa",
  //         "value": 50
  //       }]
  //   },
  // ];
  single = [{
    "name": "Germany",
    "value": 8940000
  },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
    {
      "name": "US2A",
      "value": 5000000
    }, {
      "name": "U3SA",
      "value": 5000000
    }, {
      "name": "U1SA",
      "value": 5000000
    }, {
      "name": "USA",
      "value": 5000000
    }, {
      "name": "USA",
      "value": 5000000
    },
  ];
  multi = [
    {
      "name": "STY",
      "series": [
        {
          "name": "Zamowienie",
          "value": 123
        },
        {
          "name": "Dostawa",
          "value": 120
        }
      ]
    },

    {
      "name": "LUT",
      "series": [
        {
          "name": "Zamowienie",
          "value": 110
        },
        {
          "name": "Dostawa",
          "value": 110
        }
      ]
    },

    {
      "name": "MAR",
      "series": [
        {
          "name": "Zamowienie",
          "value": 200
        },
        {
          "name": "Dostawa",
          "value": 180
        }
      ]
    },
    {
      "name": "KWI",
      "series": [
        {
          "name": "Zamowienie",
          "value": 50
        },
        {
          "name": "Dostawa",
          "value": 58
        }
      ]
    },
    {
      "name": "MAJ",
      "series": [
        {
          "name": "Zamowienie",
          "value": 145
        },
        {
          "name": "Dostawa",
          "value": 150
        }
      ]
    },
    {
      "name": "CZE",
      "series": [
        {
          "name": "Zamowienie",
          "value": 100
        },
        {
          "name": "Dostawa",
          "value": 128
        }
      ]
    },
    {
      "name": "LIP",
      "series": [
        {
          "name": "Zamowienie",
          "value": 185
        },
        {
          "name": "Dostawa",
          "value": 150
        }
      ]
    },
    {
      "name": "SIE",
      "series": [
        {
          "name": "Zamowienie",
          "value": 145
        },
        {
          "name": "Dostawa",
          "value": 150
        }
      ]
    },
    {
      "name": "WRZ",
      "series": [
        {
          "name": "Zamowienie",
          "value": 145
        },
        {
          "name": "Dostawa",
          "value": 150
        }
      ]
    },
    {
      "name": "PAZ",
      "series": [
        {
          "name": "Zamowienie",
          "value": 145
        },
        {
          "name": "Dostawa",
          "value": 150
        }
      ]
    },
    {
      "name": "LIS",
      "series": [
        {
          "name": "Zamowienie",
          "value": 145
        },
        {
          "name": "Dostawa",
          "value": 150
        }
      ]
    },
    {
      "name": "GRU",
      "series": [
        {
          "name": "Zamowienie",
          "value": 145
        },
        {
          "name": "Dostawa",
          "value": 150
        }
      ]
    }
  ];

  view: any[] = [1000, 140];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  groupPadding = 4.5;
  barPadding = 5;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#1aa7de', '#322e9c', '#C7B42C', '#AAAAAA']
  };


  width: any = 1000;
  height: any = 200;
  DataList: OrderAndDeliveryData = {
    title: 'Specjał Gdansk',
    data: '21.10.2018',
    orderSum: '224,23 (SU)',
    deliverySum: '218,23(SU)',
    orderDetail: [{param: 'RB EB 250 Kokos', value: 24}, {param: 'RB EB 250 Winter', value: 24},
      {param: 'RB EB 250 Puszka', value: 24}, {param: 'RB EB 250 Tropical', value: 24}],
    deliveryDetail: [{param: 'RB EB 250 Kokos', value: 20}, {param: 'RB EB 250 Winter', value: 20},
      {param: 'RB EB 250 Puszka', value: 20}, {param: 'RB EB 250 Tropical', value: 20}]
  };
  public barChartOptions: any = {
    gridLineColor: 'transparent',
    scaleShowLabels: false,
    showScale: false,
    scaleShowVerticalLines: false,
    responsive: false

  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 12, 123, 100, 23, 41, 76, 34, 6, 44, 55, 77, 12], label: 'Zamowienia'},
    {data: [28, 48, 40, 19, 86, 27, 90, 12, 43, 13, 65, 87, 23, 12, 56, 73, 43, 12, 65, 34], label: 'Dostawy'}
  ];

  constructor() {
  }

  // events
  public chartClicked(e: any): void {
    if (e.active.length !== 0)
      console.log(e.active[0]._index)
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  onSelect(event) {
    console.log(event);
  }

  // public randomize():void {
  //   // Only Change 3 values
  //   let data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40];
  //   let clone = JSON.parse(JSON.stringify(this.barChartData));
  //   clone[0].data = data;
  //   this.barChartData = clone;
  //   /**
  //    * (My guess), for Angular to recognize the change in the dataset
  //    * it has to change the dataset variable directly,
  //    * so one way around it, is to clone the data, change it and then
  //    * assign it;
  //    */
  // }


}
