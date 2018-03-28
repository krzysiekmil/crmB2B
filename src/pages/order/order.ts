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
      title: 'Kat. 1',
      productList: [
        {
          id: 0,
          name: 'Produkt 1',
          order: 0,
          left: 1235,
          type: 'Sztuka'
        },
        {
          id: 1,
          name: 'Produkt 2',
          order: 0,
          left: 123,
          type: 'Sztuka'
        },
        {
          id: 2,
          name: 'Produkt 3',
          order: 0,
          left: 1555,
          type: 'Sztuka'
        },
      ],
    },
    {
      title: 'Kat. 2',
      productList: [
        {
          id: 3,
          name: 'Produkt 4',
          order: 0,
          left: 1235,
          type: 'Sztuka'
        },
        {
          id: 4,
          name: 'Produkt 5',
          order: 0,
          left: 123,
          type: 'Sztuka'
        },
        {
          id: 5,
          name: 'Produkt 6',
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
