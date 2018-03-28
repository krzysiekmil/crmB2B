import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPageModule} from "../pages/login/login.module";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GaleryPageModule} from "../pages/galery/galery.module";
import {KnowlegdeBasePageModule} from "../pages/knowlegde-base/knowlegde-base.module";
import {TargetPageModule} from "../pages/target/target.module";
import {ClientMenuPageModule} from "../pages/client-menu/client-menu.module";
import {VisitPageModule} from "../pages/visit/visit.module";
import {SectionInformationPageModule} from "../pages/section-information/section-information.module";
import {OrderAndDeliveryPageModule} from "../pages/order-and-delivery/order-and-delivery.module";
import {ChartsModule} from "ng2-charts";
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {SectionVisitPageModule} from "../pages/section-visit/section-visit.module";
import {SectionOrderPageModule} from "../pages/section-order/section-order.module";
import {SectionDailyPlanPageModule} from "../pages/section-daily-plan/section-daily-plan.module";
import {MenuPageModule} from "../pages/menu/menu.module";
import {RealizationDetailPageModule} from "../pages/realization-detail/realization-detail.module";
import {ClientMessagesPageModule} from "../pages/client-messages/client-messages.module";
import {TargetComponentPageModule} from "../pages/target-component/target-component.module";
import {SectionTargetPageModule} from "../pages/section-target/section-target.module";
import {Camera} from "@ionic-native/camera";
import {AddVisitPageModule} from "../pages/add-visit/add-visit.module";
import {CalendarPageModule} from "../pages/calendar/calendar.module";
import {CalendarDateFormatter, CalendarEventTitleFormatter, CalendarUtils} from "angular-calendar";
import {CalendarModule} from "angular-calendar";
import {DraggableHelper} from "angular-draggable-droppable";
import {CustomDateFormatterProvider} from '../providers/custom-date-formatter/custom-date-formatter';
import {CustomEventTitleFormatterProvider} from '../providers/custom-event-title-formatter/custom-event-title-formatter';
import {CalendarWeekHoursViewModule} from "angular-calendar-week-hours-view";


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    BrowserAnimationsModule,
    GaleryPageModule,
    KnowlegdeBasePageModule,
    TargetPageModule,
    ClientMenuPageModule,
    SectionInformationPageModule,
    SectionVisitPageModule,
    OrderAndDeliveryPageModule,
    VisitPageModule,
    SectionDailyPlanPageModule,
    SectionOrderPageModule,
    ChartsModule,
    NgxChartsModule,
    MenuPageModule,
    RealizationDetailPageModule,
    ClientMessagesPageModule,
    TargetComponentPageModule,
    SectionTargetPageModule,
    AddVisitPageModule,
    CalendarPageModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatterProvider
    },
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatterProvider
    },
    CalendarEventTitleFormatter,
    DraggableHelper,
    CalendarUtils,
    CalendarDateFormatter,
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomDateFormatterProvider,
    CustomEventTitleFormatterProvider
  ],
  exports: []
})
export class AppModule {}
