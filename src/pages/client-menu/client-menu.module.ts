import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ClientMenuPage} from './client-menu';

@NgModule({
  declarations: [
    ClientMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientMenuPage),
  ],
})
export class ClientMenuPageModule {
}
