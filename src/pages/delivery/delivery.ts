import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the DeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Delivery {
  name: string;
  id: number;
  address: string;
  phone: number;
  email: string;
}

@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage {
  deliveryList: Array<Delivery> =
    [
      {
        name: 'Speciał Gdansk',
        id: 123432,
        address: 'Kazimierza 6, Gdańsk',
        phone: 66358882,
        email: 'lona.rozenek@specjal.pl'
      },
      {
        name: 'Speciał Olsztyn',
        id: 435634,
        address: 'Kazimierza 123, Olsztyn',
        phone: 66358882,
        email: 'lona.rozenek@specjal.pl'
      },
      {
        name: 'Speciał Szczecin',
        id: 23432,
        address: 'Kazimierza 23, Szczecin',
        phone: 12345894,
        email: 'lona.rozenek@specjal.pl'
      },
    ];
  selectedDelivery: Delivery = {
    name: 'Speciał Gdansk',
    id: 123432,
    address: 'Kazimierza 6, Gdańsk',
    phone: 66358882,
    email: 'lona.rozenek@specjal.pl'
  };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryPage');
  }

}
