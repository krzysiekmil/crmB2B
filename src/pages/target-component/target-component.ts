import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ClientMenuPage} from "../client-menu/client-menu";

/**
 * Generated class for the TargetComponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Shop {
  name: string;
  address: string;
  city: string;
  distance: number;
}

@IonicPage()
@Component({
  selector: 'page-target-component',
  templateUrl: 'target-component.html',
})
export class TargetComponentPage implements OnInit {
  shopList: Array<Shop> = [
    {
      name: 'Piotr i Paweł',
      address: 'Balcerskiego 2',
      city: 'Gdansk',
      distance: 234.5,
    },
    {
      name: 'IKS',
      address: 'Balcerskiego 2',
      city: 'Gdansk',
      distance: 122,
    },
    {
      name: 'ERBE',
      address: 'Balcerskiego 2',
      city: 'Gdansk',
      distance: 2,
    },
    {
      name: 'P.H.U. Bozena',
      address: 'Balcerskiego 2',
      city: 'Gdansk',
      distance: 223.5,
    },
  ]
  title: string;
  id: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit() {
    this.title = this.navParams.get('title');
    this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TargetComponentPage');
  }

  openShop(id) {
    let client = {
      name: this.shopList[id].name,
      adress: "zxc",
      nip: 1244,
      pmigo: true
    };
    this.navCtrl.push(ClientMenuPage, {client: client})
  }

}
