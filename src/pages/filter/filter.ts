import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, MenuController, Nav, NavController, NavParams} from 'ionic-angular';
import {MenuOptionModel} from "../../shared/side-menu-content/models/menu-option-model";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {SideMenuSettings} from "../../shared/side-menu-content/models/side-menu-settings";
import {ClientListPage} from "../client-list/client-list";
import {SideMenuContentComponent} from "../../shared/side-menu-content/side-menu-content.component";

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  @ViewChild(Nav) nav: Nav;
  // Get the instance to call the public methods
  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  public rootPage: any = ClientListPage;

  // Options to show in the SideMenuComponent
  public options: Array<MenuOptionModel>;

  // Settings for the SideMenuComponent
  public sideMenuSettings: SideMenuSettings = {
    accordionMode: true,
    showSelectedOption: true,
    selectedOptionClass: 'active-side-menu-option',
    subOptionIndentation: {
      md: '56px',
      ios: '64px',
      wp: '56px'
    }
  };
  private unreadCountObservable: any = new ReplaySubject<number>(0);

  constructor(private alertCtrl: AlertController,
              private menuCtrl: MenuController,
              private navCtrl: NavController) {
    this.initializeOptions();
  }

  ngOnInit() {
    console.log('NgOnInit')
  }

  public selectOption(option: MenuOptionModel): void {
    this.menuCtrl.close().then(() => {
      if (option.custom && option.custom.isLogin) {
        this.presentAlert('You\'ve clicked the login option!');
      } else if (option.custom && option.custom.isLogout) {
        this.presentAlert('You\'ve clicked the logout option!');
      } else if (option.custom && option.custom.isExternalLink) {
        let url = option.custom.externalUrl;
        window.open(url, '_blank');
      } else {
        // Redirect to the selected page
        this.nav.setRoot(option.component, {'title': option.displayName, 'param': option.param, 'value': option.value});
      }
    });
  }

  public collapseMenuOptions(): void {
    this.sideMenu.collapseAllOptions();
  }

  public presentAlert(message: string): void {
    let alert = this.alertCtrl.create({
      title: 'Information',
      message: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  private initializeOptions(): void {
    this.options = [];

    // Load simple menu options
    // ------------------------------------------
    this.options.push(
      {
        displayName: 'Synchronizuj'
      },
      {
        iconName: 'ios-arrow-forward',
        displayName: 'Plan na dzisiaj',
        component: 'SectionDailyPlanPage',
        selected: true
      }
      ,
      {
        iconName: 'ios-arrow-forward',
        displayName: 'Baza klientów',
        component: 'ClientListPage',
      }
      ,
      {
        iconName: 'ios-arrow-forward',
        displayName: 'Cele',
        component: 'TargetPage'
      }
      ,
      {
        iconName: 'ios-arrow-forward',
        displayName: 'Baza wiedzy',
        component: 'KnowlegdeBasePage'
      },
      {
        iconName: 'ios-arrow-forward',
        displayName: 'Kalendarz pracy',
      },
      {
        displayName: 'Pomoc',
      }
      ,);

  }

}
