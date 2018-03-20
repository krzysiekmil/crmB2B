import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {InquiryPage} from './inguiry';
import {InquirySectionPage} from "../inquiry-section/inquiry-section";
import {SummaryPage} from "../summary/summary";

@NgModule({
  declarations: [
    SummaryPage,
    InquirySectionPage,
    InquiryPage,
  ],
  imports: [
    IonicPageModule.forChild(InquiryPage),
  ],
})
export class InquiryPageModule {
}
