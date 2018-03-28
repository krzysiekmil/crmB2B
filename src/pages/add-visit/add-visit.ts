import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the AddVisitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface Visit {
  clientName: string;
  type: string,
  time: string;
  date: string;
}

@IonicPage()
@Component({
  selector: 'page-add-visit',
  templateUrl: 'add-visit.html',
})
export class AddVisitPage {
  myVisit: Array<Visit> = [
    {
      clientName: 'Piotr i Paweł',
      type: 'Dostawa',
      time: '12:15',
      date: '11.04.2018'
    },
    {
      clientName: 'Żabka',
      type: 'Wizyta',
      time: '13:30',
      date: '11.04.2018'
    },
    {
      clientName: 'Piotr i Paweł',
      type: 'Kontrola',
      time: '15:15',
      date: '11.04.2018'
    },
    {
      clientName: 'P.H.U Bozena',
      type: 'Nowa umowa',
      time: '18:00',
      date: '11.04.2018'
    },
  ]
  myDate: any;
  myTime: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddVisitPage');
  }


}
