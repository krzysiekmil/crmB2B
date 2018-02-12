import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {Page} from "../../model/Page";
import {AddClientPage} from "../add-client/add-client";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

export class MenuPage {
  @ViewChild(Nav) nav: Nav;
  pageList:Array<Page>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.pageList=[
        {
        name:'Nowy klient',
        componentName:'AddClientPage',
        icon:"add"
      }
      ,
      {
        name:'Przeglądanie listy klientow',
        componentName:'ClientListPage',
        icon:'clipboard'
      }
      ,
        {

          name:'Baza działań na klientach',
          componentName:'FilterPage',
          icon:'albums'
        }
        ,
        {

          name:'Raporty',
          componentName:'ClientListPage',
          icon:'list-box'
        }
        ,
        {

          name:'Asystent PmiGo',
          componentName:'ClientListPage',
          icon:'calendar'
        }
        ,
      {
        name:'Wyloguj',
        componentName:'ClientListPage',
        icon:'log-out'
      }
      ]
  }
  openPage(name:string){
  this.nav.setRoot(name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
