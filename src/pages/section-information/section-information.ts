import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams, Scroll, Slide, Slides} from 'ionic-angular';
import {ClientDetailPage, select} from "../client-detail/client-detail";

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

  openPage(number: number): void {
    console.log(select);
    this.slides.slideTo(number)
  }

  slideChanged() {
    this.selectedId = this.slides.realIndex;
    this.currentPage = this.List[this.selectedId].componentName;

  }

  swipeEvent(ev: any) {
    console.log(ev);
  }
}
