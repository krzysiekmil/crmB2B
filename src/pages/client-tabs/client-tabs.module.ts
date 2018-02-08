import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientTabsPage } from './client-tabs';

@NgModule({
  declarations: [
    ClientTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientTabsPage),
  ]
})
export class ClientTabsPageModule {}
