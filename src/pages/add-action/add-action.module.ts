import { NgModule } from '@angular/core';
import {IonicPageModule, NavController, NavParams} from 'ionic-angular';
import { AddActionPage } from './add-action';
import {ActionClientPage} from "../action-client/action-client";
import {ActionClientPageModule} from "../action-client/action-client.module";

@NgModule({
  declarations: [
    AddActionPage,
  ],
  imports: [
    ActionClientPageModule,
    IonicPageModule.forChild(AddActionPage),
  ],

})
export class AddActionPageModule {}
