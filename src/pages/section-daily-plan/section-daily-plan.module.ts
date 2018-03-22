import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SectionDailyPlanPage} from './section-daily-plan';
import {PlanPage} from "../plan/plan";

@NgModule({
  declarations: [
    PlanPage,
    SectionDailyPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(SectionDailyPlanPage),
  ],
})
export class SectionDailyPlanPageModule {
}
