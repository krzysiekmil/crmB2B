import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {Action} from "../../model/action";
import {Client} from "../../model/client";
import {ClassField} from "@angular/compiler/src/output/output_ast";
import getPrototypeOf = Reflect.getPrototypeOf;
import {isUndefined} from "ionic-angular/util/util";

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
  actionListConst:Array<Action>=[];
  actionField:any[]=Object.getOwnPropertyNames(this.action);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let param =this.navParams.get('param');
    let value =this.navParams.get('value');
    console.log(param,value);
    this.setList();
    this.actionListConst=this.actionList;
    this.filter(value,param);
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
      { data:'12:02:2018',type:'Seminarium',contact:'email kontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager',numberOfEmployees:9,nameOfClient:'asus'},
      { data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'email niekontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager',numberOfEmployees:32,nameOfClient:'dell'},
      { data:'12:02:2018',type:'ZgodaNaSeminarium',contact:'wyjatek kontaktowy',comment:'test1,',nazwiskoB2BManagera:'testowy Manager',numberOfEmployees:1,nameOfClient:'hp'},

    ]
  }


  filter(ev: any,type:any) {
    if (typeof (ev)!="undefined"&&typeof (type)!='undefined') {
      this.setList();
      let val = ev.toString();
      if (val && val !== '') {
        this.actionList = this.actionList.filter(action => {
          switch(type.toString()) {
            case 'type': {
              return Object.getOwnPropertyDescriptor(action, type.toString()).value.toString().toLowerCase() === val.toLowerCase();
            }
            case 'NumberOfEmployees':{
              let min=val.substring(0,val.indexOf('<'));
              let max=val.substring(val.lastIndexOf('<')+1);
              if(max>=0&&Object.getOwnPropertyDescriptor(action,'numberOfEmployees').value<max&&Object.getOwnPropertyDescriptor(action,'numberOfEmployees').value>min)
                return true;
              else
                return false;
            }
            default: {
              return Object.getOwnPropertyDescriptor(action, type.toString()).value.toString().toLowerCase().includes(val.toLowerCase());
            }
          }});
      }
    }
  }
  filterSearchBar(ev:any) {
   this.actionList=this.actionListConst;
    let val = ev.target.value;
    let length=this.actionField.length;
    if (val && val.trim() !== '') {
      this.actionList = this.actionList.filter(action => {
          let i = 0;
           while (i < length) {
            if (Object.getOwnPropertyDescriptor(action, this.actionField[i++]).value.toString().includes(val))
              return true;
            else
            {
              if(i==length-1)
                return false;
            }
          }
        }
      )
    }
  }

}
