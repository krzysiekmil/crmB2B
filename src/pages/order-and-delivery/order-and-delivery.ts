import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Scroll} from 'ionic-angular';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ClientDetailPageModule} from "../client-detail/client-detail.module";
import {ClientDetailPage} from "../client-detail/client-detail";

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


@Component({
  animations: [trigger('expand', [
    state('true', style({height: '*'})),
    state('false', style({height: '0'})),
    transition('void=>*', animate('0s')),
    transition('false => true', animate('350ms linear')),
    transition('true=>false', animate('125ms linear'))
  ]),],
  selector: 'page-order-and-delivery',
  templateUrl: 'order-and-delivery.html',
})
export class OrderAndDeliveryPage {
  @ViewChild(Scroll) scroll: Scroll;
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
  // options
  view: any[] = [1000, 195];
  animations: false;
  yScaleMax = 300;
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

  //classVariable
  deliverySelected: boolean = false;
  orderSeleceted: boolean = false;



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
    if (event.name === 'Zamowienie')
      this.orderSeleceted = true;
    else
      this.orderSeleceted = false;
  }

  openSection(name: string) {
    console.log(name);
    if (name === 'Zamowienie') {
      if (this.orderSeleceted === false)
        this.orderSeleceted = true;
      else
        this.orderSeleceted = false;
    }
    else {
      if (this.deliverySelected === false)
        this.deliverySelected = true;
      else
        this.deliverySelected = false;
    }
  }



}
