import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SectionInformationPage} from './section-information';

@NgModule({
  declarations: [
    SectionInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(SectionInformationPage),
  ],
})
export class SectionInformationPageModule {
}
