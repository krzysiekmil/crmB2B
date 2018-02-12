import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ActionFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-filter',
  templateUrl: 'action-filter.html',
})
export class ActionFilterPage {
  active:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionFilterPage');
  }

}
