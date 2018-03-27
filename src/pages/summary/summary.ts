import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Section} from "../../model/inguiry-model";

/**
 * Generated class for the SummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
  @Input() sectionList: Array<Section>;
  @Output() sectionChanger = new EventEmitter<any>();
  @Output() popSection = new EventEmitter();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openSection(id: number) {
    this.sectionChanger.emit(id);
  }

  close() {
    this.popSection.emit();
  }

}
