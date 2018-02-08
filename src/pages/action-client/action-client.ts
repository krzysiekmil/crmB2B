import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActionClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-client',
  templateUrl: 'action-client.html',
})
export class ActionClientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionClientPage');
  }
  ShowDetail(){
    this.navCtrl.push('ActionDetailPage')

  }
  AddAction(){
    this.navCtrl.push('AddActionPage');
  }

}
