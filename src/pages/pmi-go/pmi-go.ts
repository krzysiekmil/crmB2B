import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PmiGo} from "../../model/pmigo";

/**
 * Generated class for the PmiGoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pmi-go',
  templateUrl: 'pmi-go.html',
})
export class PmiGoPage {
  pmigo:PmiGo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pmigo=new PmiGo();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PmiGoPage');
  }

}
