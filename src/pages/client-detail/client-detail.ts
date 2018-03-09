import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Client} from "../../model/client";
import {PmiGo} from "../../model/pmigo";

/**
 * Generated class for the ClientDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-detail',
  templateUrl: 'client-detail.html',
})
export class ClientDetailPage implements OnInit{
  client:Client;
  pmigo:PmiGo;
  ngOnInit(): void {
    console.log(this.client);
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.client = this.navParams.data;

  }


}
