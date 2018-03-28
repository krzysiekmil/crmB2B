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
  headerShow = true;
  knowledgeList: Array<knowlegdeData> = [
    {title: 'Akademia Perfect', subtitle: 'Store', numberOfPages: 124, icon: 'albums'},
    {title: 'Akademia Perfect', subtitle: 'Store', numberOfPages: 124, icon: 'beaker'},
    {title: 'Promocja', numberOfPages: 72, icon: 'book'},
    {title: 'Sklep', subtitle: '(Promocje/dokumenty)', numberOfPages: 123, icon: 'cart'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.headerShow = this.navParams.get('header');
    console.log(this.navParams.data)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KnowlegdeBasePage');
  }

}
