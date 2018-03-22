import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PlanPage} from "../plan/plan";

/**
 * Generated class for the SectionDailyPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Task {
  title: string;
  paramList: Array<Param>;
  layoutParam?: Array<Param>;
}

export interface Param {
  name: string;
  value: any;
}

@IonicPage()
@Component({
  selector: 'page-section-daily-plan',
  templateUrl: 'section-daily-plan.html',
})
export class SectionDailyPlanPage {
  dailyPlan: Array<Task> = [{
    title: 'Wystawienie lodówki(nowy)',
    paramList: [
      {
        name: 'Id',
        value: '852448'
      },
      {
        name: 'Nazwa',
        value: 'P.H.U Bozena Bozena Szymanska,Pawel Szymanski '
      },
      {
        name: 'Adres',
        value: 'Gdańsk, Trubadurów 6'
      },
      {
        name: 'Data utworzenia',
        value: '12-02-2018'
      },
      {
        name: 'Planowana data zakonczenia',
        value: '21-03-2018'
      },
      {
        name: 'Zakonczenie',
        value: '-'
      },
      {
        name: 'Uwagi',
        value: '-'
      },
    ],
    layoutParam: [
      {
        name: 'icon',
        value: 'warring'
      }
    ]
  }];
  @ViewChild(PlanPage) planPage: PlanPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionDailyPlanPage');
  }

}
