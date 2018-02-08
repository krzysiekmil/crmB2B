import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

/**
 * Generated class for the RemindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remind',
  templateUrl: 'remind.html',
})
export class RemindPage {

  formValid:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder) {
    this.formValid=this.formBuilder.group({
      name:['',Validators.pattern('(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')],
    })
  }

  Remind(){
  console.log(this.formValid.value.name);
  this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemindPage');
  }

}
