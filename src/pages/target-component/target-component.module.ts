import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TargetComponentPage} from './target-component';

@NgModule({
  declarations: [
    TargetComponentPage,
  ],
  imports: [
    IonicPageModule.forChild(TargetComponentPage),
  ],
})
export class TargetComponentPageModule {
}
