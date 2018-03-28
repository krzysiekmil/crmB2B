import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Promotion {
  icon: string;
  name: string
  cost: any;
  afterDiscount: any
}

@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})
export class PromotionPage {
  promotionList: Array<Promotion> = [
    {
      icon: 'flame',
      name: 'Produkt 1',
      cost: '4.99',
      afterDiscount: '3,99',
    },
    {
      icon: 'alert',
      name: 'Produkt 2',
      cost: '4.99',
      afterDiscount: '3,99',
    },
    {
      icon: 'flame',
      name: 'Produkt 3',
      cost: '14.99',
      afterDiscount: '13,99',
    },
    {
      icon: 'nuclear',
      name: 'Produkt 4',
      cost: '14.99',
      afterDiscount: '9,99',
    },
    {
      icon: 'alarm',
      name: 'Produkt 5',
      cost: '12.99',
      afterDiscount: '8,99',
    },

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromotionPage');
  }

}
