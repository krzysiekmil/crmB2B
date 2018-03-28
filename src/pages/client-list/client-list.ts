import {Component, ViewChild} from '@angular/core';
import {App, IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {Client} from "../../model/client";
import {ClientMenuPage} from "../client-menu/client-menu";
import {trigger, state, transition, style, animate} from "@angular/animations";


/**
 * Generated class for the ClientListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  animations: [
    trigger('expand', [
      state('true', style({height: '*'})),
      state('false', style({height: '0'})),
      transition('void=>*', animate('0s')),
      transition('false => true', animate('250ms linear')),
      transition('true=>false', animate('100ms linear'))
    ]),
  ],
  selector: 'page-client-list',
  templateUrl: 'client-list.html',
})
export class ClientListPage {
  showSearchBar: boolean = false;
  clientList:Array<Client>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, private nav: Nav) {
    this.setClient();
  }
  setClient(){
    this.clientList=[{
      name: "Piotr i Paweł",
      adress:"asd",
      nip:1234,
      pmigo:true
    }
    ,{
        name: "ERBE",
        adress:"qwe",
        nip:1244,
        pmigo:true
      }
      ,{
        name: "P.H.U. Bozena",
        adress:"zxc",
        nip:1244,
        pmigo:true
      }];
  }

  filterClient(ev:any){
    this.setClient();
    let val=ev.target.value;
    if(val&&val.trim()!==''){
      val=val.toLowerCase();
      this.clientList=this.clientList.filter((client)=>{
          if((client.adress.toLowerCase().includes(val)) ||(client.nip.toString().includes(val)) ||(client.name.includes(val)))
            return client;
      });
    }
  }
  showDetailsOfClient(client:Client){
    this.nav.push(ClientMenuPage, {client: client})
  }

  showSearchBarClick() {
    if (this.showSearchBar === true)
      this.showSearchBar = false;
    else
      this.showSearchBar = true;
  }
}
