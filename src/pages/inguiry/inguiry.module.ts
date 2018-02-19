import {ElementRef, NgModule} from '@angular/core';
import {Content, IonicPageModule} from 'ionic-angular';
import {InquiryPage} from './inguiry';
import {SuperTab, SuperTabsModule} from "ionic2-super-tabs";
import {InquirySectionPage} from "../inquiry-section/inquiry-section";

@NgModule({
  declarations: [
    InquirySectionPage,
    InquiryPage,
  ],
  imports: [
    SuperTabsModule,
    IonicPageModule.forChild(InquiryPage),
  ],
})
export class InquiryPageModule {
}
