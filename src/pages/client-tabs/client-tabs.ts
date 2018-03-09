import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Client} from "../../model/client";
import {ClientMenuPage} from "../client-menu/client-menu";


/**
 * Generated class for the ClientTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface TabList {
  componentName: string;
  title: string;
  param?: any;
  icon?: any;
}
@IonicPage()
@Component({
  selector: 'page-client-detail-tabs',
  templateUrl: 'client-tabs.html'
})


export class ClientTabsPage {
  Test = 'TestPage';
  client:Client;
  PmiGo = 'PmiGoPage';
  ClientDetail = 'ClientDetailPage';
  Action = 'ActionClientPage';
  Contact = 'ContactDetailPage';
  OrderAndDelivery = 'OrderAndDeliveryPage';
  ClientMenu = 'ClientMenuPage';

  TabList: TabList[] = [{componentName: this.ClientMenu, title: 'Menu4'}, {
    componentName: this.ClientMenu,
    title: 'Menu4'
  }, {componentName: this.ClientMenu, title: 'Menu4'}, {
    componentName: this.ClientMenu,
    title: 'Menu4'
  }, {componentName: this.ClientMenu, title: 'Menu4'}, {
    componentName: this.ClientMenu,
    title: 'Menu4'
  }, {componentName: this.ClientMenu, title: 'Menu4'}, {
    componentName: this.ClientMenu,
    title: 'Menu4'
  }, {componentName: this.ClientMenu, title: 'Menu4'}, {componentName: this.ClientMenu, title: 'Menu4'}]


  constructor(public navCtrl: NavController,public navParam:NavParams) {
    this.client=this.navParam.get("client")
    console.log(this.client);
  }

}
