import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SectionDailyPlanPage} from './section-daily-plan';
import {PlanPage} from "../plan/plan";
import {SectionClientPage} from "../section-client/section-client";

@NgModule({
  declarations: [
    SectionClientPage,
    PlanPage,
    SectionDailyPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(SectionDailyPlanPage),
  ],
})
export class SectionDailyPlanPageModule {
}
