import {ElementRef, NgModule} from '@angular/core';
import {Content, IonicPageModule} from 'ionic-angular';
import {InquiryPage} from './inguiry';
import {SuperTab, SuperTabsModule} from "ionic2-super-tabs";
import {InquirySectionPage} from "../inquiry-section/inquiry-section";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";

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
