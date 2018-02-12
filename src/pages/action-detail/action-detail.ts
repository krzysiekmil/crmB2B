import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Action} from "../../model/action";
import {ModalPage} from "../modal/modal";

/**
 * Generated class for the ActionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-detail',
  templateUrl: 'action-detail.html',
})

export class ActionDetailPage {
  action:Action;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  this.action=this.navParams.get('action');
  }

  openModalWithParams() {
    let myModal = this.modalCtrl.create(ModalPage, { 'IQOSCoach': this.action.daneIQOS });
    myModal.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionDetailPage');
  }

}
