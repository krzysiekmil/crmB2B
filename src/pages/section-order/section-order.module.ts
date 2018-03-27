import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SectionOrderPage} from './section-order';
import {OrderPage} from "../order/order";
import {DeliveryPage} from "../delivery/delivery";
import {SectionVisitPageModule} from "../section-visit/section-visit.module";
import {InquiryPage} from "../inguiry/inguiry";

@NgModule({
  declarations: [
    DeliveryPage,
    OrderPage,
    SectionOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(SectionOrderPage),
  ],
})
export class SectionOrderPageModule {
}
