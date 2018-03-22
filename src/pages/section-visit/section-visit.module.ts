import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SectionVisitPage} from './section-visit';
import {InquiryPage} from "../inguiry/inguiry";
import {InquirySectionPage} from "../inquiry-section/inquiry-section";
import {SummaryPage} from "../summary/summary";

@NgModule({
  declarations: [
    SummaryPage,
    InquirySectionPage,
    InquiryPage,
    SectionVisitPage,
  ],
  imports: [
    IonicPageModule.forChild(SectionVisitPage),
  ],
})
export class SectionVisitPageModule {
}
