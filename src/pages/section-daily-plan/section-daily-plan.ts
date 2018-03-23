import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {PlanPage} from "../plan/plan";
import {SectionClientPage} from "../section-client/section-client";

/**
 * Generated class for the SectionDailyPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Target {
  title: string;
  subtitle?: string;
  status?: number;
  target?: number;
  paramList: Array<Param>;
  layoutParam?: [{}];
}


export interface Task {
  title: string;
  paramList: Array<Param>;
  layoutParam?: Array<Param>;
}

export interface Param {
  name?: string;
  value: any;
}

@IonicPage()
@Component({
  selector: 'page-section-daily-plan',
  templateUrl: 'section-daily-plan.html',
})
export class SectionDailyPlanPage {
  selectedId: number = 0;
  monthlyPlan: Array<Target> = [
    {
      title: 'Dystrybucja 3,99',
      status: 79,
      target: 177,
      paramList: [{value: 45}]
    }
    ,
    {
      title: 'Dystrybucja standów',
      status: 50,
      target: 70,
      paramList: [{value: 145}]
    }
    ,
    {
      title: 'Realizacja targetów',
      status: 0,
      target: 1,
      paramList: [{value: 0}]
    }
  ];
  taskList: Array<Task> = [{
    title: 'Wystawienie lodówki(nowy)',
    paramList: [
      {
        name: 'Id',
        value: '852448'
      },
      {
        name: 'Nazwa',
        value: 'P.H.U Bozena Bozena Szymanska, Pawel Szymanski '
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
  @ViewChild(SectionClientPage) sectionClientPage: SectionClientPage;
  @ViewChild(Slides) slides: Slides;
  List: any = [{name: 'Cele na dzisiaj', componentName: 'ClientDetailPage'},
    {name: 'Sklepy na dzisiaj', componentName: 'TargetPage'}, {
      name: 'Cele miesięczne',
      componentName: 'OrderAndDeliveryPage'
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionDailyPlanPage');
  }

  onSlideChanged(ev: any): void {
    this.selectedId = this.slides.realIndex;
  }

}
