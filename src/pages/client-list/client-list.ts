import {Component, ViewChild} from '@angular/core';
import {App, IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {Client} from "../../model/client";
import {ClientMenuPage} from "../client-menu/client-menu";


/**
 * Generated class for the ClientListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-list',
  templateUrl: 'client-list.html',
})
export class ClientListPage {
  clientList:Array<Client>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, private nav: Nav) {
    this.setClient();
  }
  setClient(){
    this.clientList=[{
      name:"name_one",
      adress:"asd",
      nip:1234,
      pmigo:true
    }
    ,{
        name:"name_4",
        adress:"qwe",
        nip:1244,
        pmigo:true
      }
      ,{
        name:"name_6",
        adress:"zxc",
        nip:1244,
        pmigo:true
      }]
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
}
