import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SectionTargetPage} from './section-target';
import {ActionListPage} from "../action-list/action-list";
import {RealizationPage} from "../realization/realization";

@NgModule({
  declarations: [
    RealizationPage,
    ActionListPage,
    SectionTargetPage,
  ],
  imports: [
    IonicPageModule.forChild(SectionTargetPage),
  ],
})
export class SectionTargetPageModule {
}
