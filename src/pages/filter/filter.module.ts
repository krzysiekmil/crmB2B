import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FilterPage} from './filter';
import {SideMenuContentComponent} from "../../shared/side-menu-content/side-menu-content.component";

@NgModule({
  declarations: [
    FilterPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterPage),
  ],
  exports: []
})
export class FilterPageModule {
}
