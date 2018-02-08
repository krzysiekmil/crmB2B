import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../model/client";

/**
 * Generated class for the AddClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-client',
  templateUrl: 'add-client.html',
})
export class AddClientPage {
  nipList:Array<number>;
  newClient:Client;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder) {
  this.newClient=new Client();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClientPage');
  }

  addClient(){
    console.log(this.newClient);
  this.navCtrl.push('ConfirmPage',{
      name:this.newClient.name,
      address:this.newClient.adress,
      nip:this.newClient.nip,
      pmigo:this.newClient.pmigo,
      client:this.newClient
  })
  }

  isOnList(e:number):boolean{
    return true;
    // if(this.nipList.indexOf(nip)>=0)
    //   return true;
    // else
    //   return false;
  }

}
