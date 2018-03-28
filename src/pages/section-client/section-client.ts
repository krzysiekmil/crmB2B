import {Component} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {ClientMenuPage} from "../client-menu/client-menu";
import {Client} from "../../model/client";

/**
 * Generated class for the SectionClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-section-client',
  templateUrl: 'section-client.html',
})
export class SectionClientPage {
  clientList = [{
    name: "Piotr i Paweł",
    adress: "asd",
    nip: 1234,
    pmigo: true
  }
    , {
      name: "Żabka",
      adress: "qwe",
      nip: 1244,
      pmigo: true
    }
    , {
      name: "Apteka",
      adress: "zxc",
      nip: 1244,
      pmigo: true
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams, private nav: Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionClientPage');
  }

  showDetailsOfClient(client: Client) {
    this.nav.push(ClientMenuPage, {client: client})
  }

}
