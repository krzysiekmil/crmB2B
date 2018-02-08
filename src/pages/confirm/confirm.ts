import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Client} from "../../model/client";

/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
  client:Client;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.client=this.navParams.get("client");
  console.log(this.client);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }

}
