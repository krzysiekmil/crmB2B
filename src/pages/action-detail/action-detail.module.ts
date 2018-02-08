import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionDetailPage } from './action-detail';

@NgModule({
  declarations: [
    ActionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionDetailPage),
  ],
})
export class ActionDetailPageModule {}
