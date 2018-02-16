import {ElementRef, NgModule} from '@angular/core';
import {Content, IonicPageModule} from 'ionic-angular';
import {InquiryPage} from './inguiry';
import {SuperTab, SuperTabsModule} from "ionic2-super-tabs";

@NgModule({
  declarations: [
    InquiryPage,
  ],
  imports: [
    SuperTabsModule,
    IonicPageModule.forChild(InquiryPage),
  ],
})
export class InquiryPageModule {
}
