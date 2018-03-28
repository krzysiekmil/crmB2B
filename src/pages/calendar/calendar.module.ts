import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CalendarPage} from './calendar';
import {CalendarWeekHoursViewModule} from "angular-calendar-week-hours-view";
import {CalendarModule} from "angular-calendar";

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    CalendarModule.forRoot(),
    CalendarWeekHoursViewModule,
    IonicPageModule.forChild(CalendarPage),
  ],

})
export class CalendarPageModule {
}
