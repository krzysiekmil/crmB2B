import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ClientMessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Messages {
  tittle: string;
  messages: string;
  icon?: string
}

@IonicPage()
@Component({
  selector: 'page-client-messages',
  templateUrl: 'client-messages.html',
})
export class ClientMessagesPage {
  messagesList: Array<Messages> = [
    {
      tittle: 'Promocja dla regionu',
      messages: 'Wszystkie produkty kat. 2  z 20% zniżką dla klienta',
      icon: 'flame'
    }
    ,
    {
      tittle: 'Nowy Produkt',
      messages: 'Zaoferuj nowy produkt z magazynu w twoim regionie',
      icon: 'information'
    },
    {
      tittle: 'Błąd !!!',
      messages: 'Dane z poprzedniej wizyty wymagaja uzupełnienia',
      icon: 'nuclear'
    }

  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientMessagesPage');
  }

}
