import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ClientContainerPage} from './client-container';
import {MapPage} from "../map/map";
import {ClientListPage} from "../client-list/client-list";

@NgModule({
  declarations: [
    ClientListPage,
    MapPage,
    ClientContainerPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientContainerPage),
  ],
})
export class ClientContainerPageModule {
}
