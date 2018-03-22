import {Component, OnInit, ViewChild} from '@angular/core';
import {App, IonicPage, Keyboard, Nav, NavController, NavParams} from 'ionic-angular';
import {SectionInformationPage} from "../section-information/section-information";
import {Client} from "../../model/client";

/**
 * Generated class for the ClientMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-menu',
  templateUrl: 'client-menu.html',
})
export class ClientMenuPage implements OnInit {
  hide = false;
  client: Client;
  selectedId: number = 0;
  @ViewChild(Nav) nav: Nav;
  number = 0;
  List: any = [{
    name: 'Informacje',
    componentName: 'SectionInformationPage',
    icon: 'ios-information-circle-outline'
  }, {name: 'Wizyta', componentName: 'SectionVisitPage', icon: 'ios-person-outline'}, {
    name: 'Zamowienie',
    componentName: 'SectionOrderPage',
    icon: 'ios-basket-outline'
  }
    , {name: 'Informacje', componentName: 'SectionInformationPage'}];

  constructor(public navCtrl: NavController, navParam: NavParams, public keyboard: Keyboard, app: App) {
    this.client = navParam.get('client');
    console.log("constructor ClientMenu");
    console.log(this.client);
  }

  ngOnInit() {
  }


  openPage(pageName: string, number: number): void {
    if (number !== 1) {
      this.nav.setRoot(pageName);
      this.selectedId = number;
    }
    else
      this.navCtrl.push(pageName);
  }

  pushPage(pageName: string, number: number): void {
    this.selectedId = number;
    this.navCtrl.push(pageName);

  }

}
