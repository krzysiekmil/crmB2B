import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Action} from "../../model/action";

/**
 * Generated class for the ActionClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-client',
  templateUrl: 'action-client.html',
})


export class ActionClientPage {
  actionList:Array<Action>=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.setAction();
  console.log(this.navParams.data)
  }


  setAction(){
    this.actionList=[
      {
        data:'wczoraj',
        type:'ZgodaNaSeminarium',
        contact:'Jan testowy',
        comment:'akcja 1',
        spodziewanaLiczbaOsob:24,
        lokalizacja:'Gdzies',
        liczbaIQOS:7
      }
      ,
      {
        data:'wczoraj',
        type:'Seminarium',
        contact:'Jan testowy',
        comment:'akcja 2',
        czyPmiUczestniczyl:true,
        daneIQOS:['Jan testowy','testowy jan'],
        liczbaUczestnikow:230
      }
      ,
      {
        data: 'wczoraj',
        type: 'cos ktos',
        contact: 'Jan testowy',
        comment: 'akcja 3',
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionClientPage');
  }
  ShowDetail(action:Action){
    this.navCtrl.push('ActionDetailPage',{action:action})

  }
  AddAction(){
    this.navCtrl.push('AddActionPage');
  }
  AddToList(action:Action){
    this.actionList.push(action);
  }

}
