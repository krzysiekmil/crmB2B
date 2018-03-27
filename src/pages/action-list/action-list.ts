import {Component} from '@angular/core';
import {IonicPage, ModalController, Nav, NavController, NavParams} from 'ionic-angular';
import {SectionVisitPage} from "../section-visit/section-visit";
import {SectionOrderPage} from "../section-order/section-order";

/**
 * Generated class for the ActionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Action {
  name: string;
  component: any;
  icon: string;
}

@Component({
  selector: 'page-action-list',
  templateUrl: 'action-list.html',
})
export class ActionListPage {
  actionList: Array<Action> = [
    {
      name: 'Przyjmij zamowienie',
      component: SectionOrderPage,
      icon: 'cart'
    },
    {
      name: 'Wypełnij ankiete',
      component: SectionVisitPage,
      icon: 'md-clipboard'
    },
    {
      name: 'Dołacz do programu +',
      component: null,
      icon: 'md-book'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionListPage');
  }

  open(id) {
    let modal = this.modalCtrl.create(this.actionList[id].component, {}, {showBackdrop: true})
    modal.present();
  }

}
