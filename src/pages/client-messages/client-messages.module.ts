import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ClientMessagesPage} from './client-messages';

@NgModule({
  declarations: [
    ClientMessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientMessagesPage),
  ],
})
export class ClientMessagesPageModule {
}
