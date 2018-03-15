import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Client} from "../../model/client";
import {PmiGo} from "../../model/pmigo";

/**
 * Generated class for the ClientDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export var select;

export interface InformationSection {
  title: string;
  detailList: Array<Detail>;
  layoutParamList?: Array<LayoutParam>;


}

export interface Detail {
  param: any;
  value: any;
  layoutParamList?: Array<LayoutParam>;

}

export interface LayoutParam {
  param: any;
  value: any;
}

@IonicPage()
@Component({
  selector: 'page-client-detail',
  templateUrl: 'client-detail.html',
})
export class ClientDetailPage implements OnInit{
  client:Client;
  pmigo:PmiGo;
  informationList: Array<InformationSection> = [{
    title: 'Statystyki',
    detailList: [{param: 'Dostawy 12 miec. (SU)', value: 394}, {param: 'Śr. dostawy 12 miec. (SU)', value: '1,4'}]
  },
    {
      title: 'Dane Podstawowe',
      detailList: [{param: 'Id', value: 852448}, {param: 'Nazwa', value: 'PHU Bozena Szymanska'},
        {param: 'Adres', value: 'Gdansk, Trubadurow 6'}]
    }];

  ngOnInit(): void {
    console.log(this.client);
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.client = this.navParams.data;

  }

  swipeEvent(ev) {
    select = 0;
    console.log(select);
    console.log(ev);
  }


}
