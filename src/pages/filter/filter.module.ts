import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterPage } from './filter';
import {SideMenuContentComponent} from "../../shared/side-menu-content/side-menu-content.component";

@NgModule({
  declarations: [
    FilterPage,
    SideMenuContentComponent
  ],
  imports: [
    IonicPageModule.forChild(FilterPage),
  ],
})
export class FilterPageModule {}
