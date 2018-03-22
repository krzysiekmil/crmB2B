import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {InquiryPage} from "../inguiry/inguiry";

/**
 * Generated class for the SectionVisitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section-visit',
  templateUrl: 'section-visit.html',
})
export class SectionVisitPage {
  @ViewChild(InquiryPage) inguiry: InquiryPage;
  List: any = [{name: 'Podsumowanie'}];
  public selectedId: number = 0;
  number: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionVisitPage');
  }

}
