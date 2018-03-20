import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
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
export class ClientMenuPage {

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
    componentName: 'SectionInformationPage',
    icon: 'ios-basket-outline'
  }, {name: 'Informacje', componentName: 'SectionInformationPage'}];

  constructor(public navCtrl: NavController, navParam: NavParams) {
    this.client = navParam.get('client');
    console.log("constructor ClientMenu");
    console.log(this.client);
  }

  clickButton(id) {
    this.number = id;
  }

  openPage(pageName: string, number: number): void {
    this.selectedId = number;
    this.nav.setRoot(pageName, {id: number}, {
      animate: true,
      animation: 'slide',
      direction: 'forward',
      duration: 450,
      easing: 'in-out'
    });
  }

  ionViewWillLeave() {
    console.log(this.client);
    console.log('Ionic view will Leave')
  }
}
