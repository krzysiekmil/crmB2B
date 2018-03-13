import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the KnowlegdeBasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface knowlegdeData {
  title: string;
  icon?: string;
  subtitle?: string;
  numberOfPages: number;

}

@IonicPage()
@Component({
  selector: 'page-knowlegde-base',
  templateUrl: 'knowlegde-base.html',
})


export class KnowlegdeBasePage {
  knowledgeList: Array<knowlegdeData> = [{title: 'Akademia Perfect', subtitle: 'Store', numberOfPages: 124},
    {title: 'Akademia Perfect', subtitle: 'Store', numberOfPages: 124},
    {title: 'Promocja', numberOfPages: 72},
    {title: 'Sklep', subtitle: '(Promocje/dokumenty)', numberOfPages: 123}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KnowlegdeBasePage');
  }

}
