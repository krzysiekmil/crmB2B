import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SectionInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section-information',
  templateUrl: 'section-information.html',
})
export class SectionInformationPage implements OnInit {
  selectedId: number = 0;
  @ViewChild(Nav) nav: Nav;
  List: any = [{name: 'Informacje', componentName: 'ClientDetailPage'},
    {name: 'Cele', componentName: 'TargetPage'}, {name: 'Zamowienia i dostawy', componentName: 'OrderAndDeliveryPage'},
    {name: 'Baza wiedzy', componentName: 'KnowlegdeBasePage'}, {name: 'Galeria', compoenetName: 'GaleryPage'}];
  number: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('constructor SectionInformationPage');

  }

  ngOnInit() {
    console.log('ngOnInit SectionInformationPage');
    this.number = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionInformationPage');
  }

  openPage(pageName: string, number: number): void {
    this.selectedId = number;
    this.nav.setRoot(pageName, {id: number, number: this.number});
  }
}
