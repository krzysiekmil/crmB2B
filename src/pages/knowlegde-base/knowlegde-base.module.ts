import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {KnowlegdeBasePage} from './knowlegde-base';

@NgModule({
  declarations: [
    KnowlegdeBasePage,
  ],
  imports: [
    IonicPageModule.forChild(KnowlegdeBasePage),
  ],
})
export class KnowlegdeBasePageModule {
}
