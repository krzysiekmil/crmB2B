import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {Action} from "../../model/action";
import {Client} from "../../model/client";
import {ClassField} from "@angular/compiler/src/output/output_ast";
import getPrototypeOf = Reflect.getPrototypeOf;

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
  action:Action={ data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'jan kontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager Janek',numberOfEmployees:1,nameOfClient:'list'};
  actionList:Array<Action>=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(Object.getOwnPropertyDescriptor(this.action,'contact').value);
  }

  setList(){
    this.actionList=[
      { data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'jan kontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager Janek',numberOfEmployees:1,nameOfClient:'list'},
      { data:'12:02:2018',type:'Seminarium',contact:'jan niekontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager Janek',numberOfEmployees:54,nameOfClient:'list'},
      { data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'marek kontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager Marek',numberOfEmployees:12,nameOfClient:'mail'},
      { data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'marek niekontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager Makren',numberOfEmployees:312,nameOfClient:'mail'},
      { data:'12:02:2018',type:'Seminarium',contact:'kran kontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager ASD',numberOfEmployees:9,nameOfClient:'lenovo'},
      { data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'kran niekontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager ASD',numberOfEmployees:29,nameOfClient:'apple'},
      { data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'kontakt kontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager telefon',numberOfEmployees:69,nameOfClient:'toshiba'},
      { data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'kontakt niekontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager telefon',numberOfEmployees:29,nameOfClient:'samsung'},
      { data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'telefon kontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager kulka',numberOfEmployees:59,nameOfClient:'samsung'},
      { data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'telefon niekontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager kulka',numberOfEmployees:32,nameOfClient:'toshiba'},
      { data:'12:02:2018',type:'Seminarium',contact:'email kontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager',numberOfEmployees:49,nameOfClient:'asus'},
      { data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'email niekontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager',numberOfEmployees:12,nameOfClient:'dell'},
      { data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'wyjatek kontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager',numberOfEmployees:51,nameOfClient:'hp'},

    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionFilterPage');
  }
  test(ev:any){
    console.log(Object.keys(this.action))
  }
  filter(ev: any,atype:string) {
    this.setList();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.actionList = this.actionList.filter(action=> {
        // return action.atype.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

}
