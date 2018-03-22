import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import {SideMenuContentComponent} from "../../shared/side-menu-content/side-menu-content.component";

@NgModule({
  declarations: [
    MenuPage,
    SideMenuContentComponent

  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
  ],
})
export class MenuPageModule {}
