import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Client} from "../../model/client";

/**
 * Generated class for the ClientTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-detail-tabs',
  templateUrl: 'client-tabs.html'
})
export class ClientTabsPage {
  client:Client;
  PmiGo = 'PmiGoPage';
  ClientDetail = 'ClientDetailPage';
  Action = 'ActionClientPage';
  Contact = 'ContactDetailPage';


  constructor(public navCtrl: NavController,public navParam:NavParams) {
    this.client=this.navParam.get("client")
    console.log(this.client);
  }

}
