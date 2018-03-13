import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the TargetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-target',
  templateUrl: 'target.html',
})
export class TargetPage {
  isEmpty: boolean = true;
  emptyInformationHeader = 'Brak celow dla tego sklepu'
  emptyInformationMessage = 'Dodaj cele, albo spytaj sie \n menagera czy takie mozna ustalic';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isEmpty = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TargetPage');
    console.log(this.isEmpty);
  }

}
