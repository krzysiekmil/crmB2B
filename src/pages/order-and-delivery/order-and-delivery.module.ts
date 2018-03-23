import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OrderAndDeliveryPage} from './order-and-delivery';
import {ChartsModule} from "ng2-charts";
import {NgxChartsModule} from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    OrderAndDeliveryPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(OrderAndDeliveryPage),
  ],
})
export class OrderAndDeliveryPageModule {
}
