import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams, Slide, Slides} from 'ionic-angular';
import {OrderAndDeliveryPage} from "../order-and-delivery/order-and-delivery";

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
  currentPage: string;
  public selectedId: string = 'Informacje';

  @ViewChild(Nav) nav: Nav;
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Slide) slide: Slide;
  header = {header: false};
  List: any = [{name: 'Informacje', componentName: 'ClientDetailPage'},
    {name: 'Zamowienia i dostawy', componentName: OrderAndDeliveryPage},];
  number: number = 0;

// , {name: 'Galeria', compoenetName: 'GaleryPage'}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('constructor SectionInformationPage');

  }

  ngOnInit() {
    console.log('ngOnInit SectionInformationPage');
    this.number = this.navParams.get('id');
    this.nav.setRoot('ClientDetailPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionInformationPage');
  }

  openPage(id: number): void {
    this.selectedId = this.List[id].name;
    this.nav.setRoot(this.List[id].componentName, {header: false});
    // this.slides.slideTo(id)
    console.log(this.selectedId,)
  }

  slideChanged() {
    // this.selectedId = this.slides.realIndex;
    this.currentPage = this.List[this.selectedId].componentName;

  }

}
