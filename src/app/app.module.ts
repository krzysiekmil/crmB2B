import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPageModule} from "../pages/login/login.module";
import {MenuPageModule} from "../pages/menu/menu.module";
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



@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    MenuPageModule,
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
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
