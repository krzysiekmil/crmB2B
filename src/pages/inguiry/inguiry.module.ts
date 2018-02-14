import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {InquiryPage} from './inguiry';

@NgModule({
  declarations: [
    InquiryPage,
  ],
  imports: [
    IonicPageModule.forChild(InquiryPage),
  ],
})
export class InquiryPageModule {
}
