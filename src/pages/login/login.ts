import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RemindPage} from "../remind/remind";
import {AddClientPage} from "../add-client/add-client";
import {ClientListPage} from "../client-list/client-list";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  result:any;
  formValid:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder:FormBuilder) {
  this.formValid=this.formBuilder.group({
    name:['',Validators.pattern('(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')],
    password:['',Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])(?=\\S+$).{8,}$')]
  });
  }

  login(){}
  tak(){
    this.navCtrl.setRoot('AddClientPage');
  }
  nie(){
    this.navCtrl.setRoot('ClientListPage');
  }

  remindPassword(){
    console.log(this.formValid.value.name);
    this.navCtrl.push('RemindPage');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
