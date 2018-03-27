import {Component} from '@angular/core';
import {App, IonicPage, ModalController, Nav, NavController, NavParams} from 'ionic-angular';
import {Target} from "../section-daily-plan/section-daily-plan";
import {RealizationDetailPage} from "../realization-detail/realization-detail";

/**
 * Generated class for the RealizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-realization',
  templateUrl: 'realization.html',
})
export class RealizationPage {
  TaskList: Array<Target> = [
    {
      title: 'Zamowienie nr. 1234',
      status: 'Dostarczone',
      subtitle: 'P.H.U. Bozena Bozena Szymanska,\n Pawel Szymanski'
    },
    {
      title: 'Zamowienie nr. 1521',
      status: 'Realizowane',
      subtitle: 'P.H.U. Bozena Bozena Szymanska,\n Pawel Szymanski'
    },
    {
      title: 'Zamowienie nr. 4334',
      status: 'Relizowane',
      subtitle: 'P.H.U. Bozena Bozena Szymanska,\n Pawel Szymanski'
    },
    {
      title: 'Zamowienie nr. 2234',
      status: 'Realizowane',
      subtitle: 'P.H.U. Bozena Bozena Szymanska,\n Pawel Szymanski'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav, public  app: App, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealizationPage');
  }

  showDetail(id: number) {
    // this.nav.popToRoot().catch(err=>{
    //   console.log(err);
    // });
    // this.nav.push(RealizationDetailPage,{task:this.TaskList[id]})
    let modal = this.modalCtrl.create(RealizationDetailPage, {task: this.TaskList[id]})
    modal.present();
  }

}
