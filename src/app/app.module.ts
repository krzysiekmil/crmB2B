import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPageModule} from "../pages/login/login.module";
import {PmiGoPageModule} from "../pages/pmi-go/pmi-go.module";
import {ActionDetailPageModule} from "../pages/action-detail/action-detail.module";
import {ContactDetailPageModule} from "../pages/contact-detail/contact-detail.module";
import {AddContactPageModule} from "../pages/add-contact/add-contact.module";
import {ActionClientPageModule} from "../pages/action-client/action-client.module";
import {ModalPageModule} from "../pages/modal/modal.module";
import {MenuPageModule} from "../pages/menu/menu.module";
import {MainPageModule} from "../pages/main/main.module";
import {InquiryPageModule} from "../pages/inguiry/inguiry.module";
import {HttpModule} from "@angular/http";
import {ConfirmPage} from "../pages/confirm/confirm";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GaleryPageModule} from "../pages/galery/galery.module";
import {KnowlegdeBasePageModule} from "../pages/knowlegde-base/knowlegde-base.module";
import {TargetPageModule} from "../pages/target/target.module";
import {ClientMenuPageModule} from "../pages/client-menu/client-menu.module";
import {VisitPageModule} from "../pages/visit/visit.module";
import {OrderPageModule} from "../pages/order/order.module";
import {SectionInformationPageModule} from "../pages/section-information/section-information.module";
import {OrderAndDeliveryPageModule} from "../pages/order-and-delivery/order-and-delivery.module";
import {ChartsModule} from "ng2-charts";


@NgModule({
  declarations: [
    ConfirmPage,
    MyApp,
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    PmiGoPageModule,
    ActionDetailPageModule,
    ContactDetailPageModule,
    AddContactPageModule,
    ActionClientPageModule,
    ModalPageModule,
    MenuPageModule,
    MainPageModule,
    InquiryPageModule,
    BrowserAnimationsModule,
    GaleryPageModule,
    KnowlegdeBasePageModule,
    TargetPageModule,
    ClientMenuPageModule,
    SectionInformationPageModule,
    OrderAndDeliveryPageModule,
    VisitPageModule,
    OrderPageModule,
    ChartsModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabPlacement: 'top'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConfirmPage,
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
