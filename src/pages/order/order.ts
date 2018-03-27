import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface OrderSection {
  title: string;
  productList: Array<Product>

}

export interface Product {
  id: number;
  name: string;
  order: number;
  type: string;
  left: any;
}

export interface Type {
  name: string;
  multi: number;
}
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  order: Array<OrderSection> = [
    {
      title: 'Pakiet',
      productList: [
        {
          id: 0,
          name: 'RB ED250 Puszka (3.24zł)',
          order: 0,
          left: 1235,
          type: 'Sztuka'
        },
        {
          id: 1,
          name: 'RB ED250 Puszka (3.24zł)',
          order: 0,
          left: 123,
          type: 'Sztuka'
        },
        {
          id: 2,
          name: 'RB ED250 Puszka (3.24zł)',
          order: 0,
          left: 1555,
          type: 'Sztuka'
        },
      ],
    },
    {
      title: 'Lista SKU',
      productList: [
        {
          id: 3,
          name: 'RB ED250 Puszka (3.24zł)',
          order: 0,
          left: 1235,
          type: 'Sztuka'
        },
        {
          id: 4,
          name: 'RB ED250 Puszka (3.24zł)',
          order: 0,
          left: 123,
          type: 'Sztuka'
        },
        {
          id: 5,
          name: 'RB ED250 Puszka (3.24zł)',
          order: 0,
          left: 1555,
          type: 'Sztuka'
        },
      ],
    },
  ];
  typeList: Array<Type> = [
    {
      name: 'Sztuka',
      multi: 1,
    },
    {
      name: 'Pudełko',
      multi: 10,
    },
    {
      name: 'Zgrzewka',
      multi: 12,
    }
  ];
  selectedId = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  selectedProduct(id) {
    if (id === this.selectedId) {

      this.selectedId = null;
    }
    else
      this.selectedId = id;
  }

}
