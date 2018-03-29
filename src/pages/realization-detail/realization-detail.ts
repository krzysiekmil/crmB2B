import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Target} from "../section-daily-plan/section-daily-plan";

/**
 * Generated class for the RealizationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface State {
  title: string;
  startDate: string;
  endDate: string;
  comment?: string;
}

@IonicPage()
@Component({
  selector: 'page-realization-detail',
  templateUrl: 'realization-detail.html',
})
export class RealizationDetailPage implements OnInit {
  realization: Array<State> = [
    {
      title: 'Zamówienie w sklepie',
      startDate: '11.02.2018',
      endDate: '11.02.2018',
      comment: '-'
    },
    {
      title: 'Realizacja w magazynie',
      startDate: '11.02.2018',
      endDate: '27.02.2018',
      comment: '-'

    },
    {
      title: 'Dostawa',
      startDate: '27.02.2018',
      endDate: '13.03.2018',
      comment: '-'
    },
  ];
  task: Target;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit() {
    this.task = this.navParams.get('task')
    console.log(this.task)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealizationDetailPage');
  }

}
