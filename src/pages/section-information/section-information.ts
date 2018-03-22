import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams, Slide, Slides} from 'ionic-angular';
import {ClientDetailPage, select} from "../client-detail/client-detail";
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
  @ViewChild(OrderAndDeliveryPage) orderAndDeliver: OrderAndDeliveryPage;
  currentPage = 'OrderAndDeliveryPage';
  public selectedId: number = 0;
  test1;
  test2: number = 1000;
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Slide) slide: Slide;
  List: any = [{name: 'Informacje', componentName: 'ClientDetailPage'},
    {name: 'Cele', componentName: 'TargetPage'}, {name: 'Zamowienia i dostawy', componentName: 'OrderAndDeliveryPage'},
    {name: 'Baza wiedzy', componentName: 'KnowlegdeBasePage'}];
  number: number = 0;

// , {name: 'Galeria', compoenetName: 'GaleryPage'}
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

  openPage(id: number): void {
    console.log(select);
    this.selectedId = id;
    // this.slides.slideTo(id)
  }

  slideChanged() {
    this.selectedId = this.slides.realIndex;
    this.currentPage = this.List[this.selectedId].componentName;

  }
}
