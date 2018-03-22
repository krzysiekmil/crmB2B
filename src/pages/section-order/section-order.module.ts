import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SectionOrderPage} from './section-order';

@NgModule({
  declarations: [
    SectionOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(SectionOrderPage),
  ],
})
export class SectionOrderPageModule {
}
