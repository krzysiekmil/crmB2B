import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPageModule} from "../pages/login/login.module";
import {ClientTabsPageModule} from "../pages/client-tabs/client-tabs.module";
import {PmiGoPageModule} from "../pages/pmi-go/pmi-go.module";
import {ActionDetailPageModule} from "../pages/action-detail/action-detail.module";
import {ContactDetailPageModule} from "../pages/contact-detail/contact-detail.module";
import {AddContactPageModule} from "../pages/add-contact/add-contact.module";
import {ActionClientPageModule} from "../pages/action-client/action-client.module";


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    ClientTabsPageModule,
    PmiGoPageModule,
    ActionDetailPageModule,
    ContactDetailPageModule,
    AddContactPageModule,
    ActionClientPageModule,
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
