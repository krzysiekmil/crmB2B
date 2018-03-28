import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the SectionTargetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section-target',
  templateUrl: 'section-target.html',
})
export class SectionTargetPage {
  @ViewChild(Slides) slides: Slides;
  List: any = [{name: 'Informacje', id: 0}, {name: 'Zrealizowane', id: 1}];
  selectedId: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionTargetPage');
  }


}
