import {Component, DoCheck} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Action} from "../../model/action";
import {ActionClientPage} from "../action-client/action-client";

/**
 * Generated class for the AddActionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-action',
  templateUrl: 'add-action.html',
})
export class AddActionPage implements DoCheck {
  ngDoCheck(): void {
    console.log(this.action.type)
  }
  action:Action;

  type:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    this.action=new Action();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddActionPage');
  }
  AddAction(){

    this.navCtrl.setRoot(ActionClientPage,{addAction:this.action})
  }


}
