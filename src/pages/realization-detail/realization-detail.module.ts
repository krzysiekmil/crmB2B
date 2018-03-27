import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RealizationDetailPage} from './realization-detail';

@NgModule({
  declarations: [
    RealizationDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RealizationDetailPage),
  ],
})
export class RealizationDetailPageModule {
}
