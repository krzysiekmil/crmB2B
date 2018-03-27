import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the SectionOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section-order',
  templateUrl: 'section-order.html',
})
export class SectionOrderPage {
  @ViewChild(Slides) slides: Slides;
  selectedSection = 0;
  buttonList = [{name: 'Dostawa', id: 0}, {name: 'Produkty', id: 1}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionOrderPage');
  }

  openSection(id) {
    if (this.selectedSection !== id)
      this.slides.slideTo(id);
  }

  onSlideChanged(slider) {
    console.log('Slide changed', slider.realIndex, this.selectedSection);
    this.selectedSection = slider.realIndex;
  }

}
