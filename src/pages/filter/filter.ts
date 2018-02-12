import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, MenuController, Nav, NavController, NavParams} from 'ionic-angular';
import {MenuOptionModel} from "../../shared/side-menu-content/models/menu-option-model";
import {SideMenuSettings} from "../../shared/side-menu-content/models/side-menu-settings";
import {SideMenuContentComponent} from "../../shared/side-menu-content/side-menu-content.component";
import {HomePage} from "../home/home";
import {ActionFilterPage} from "../action-filter/action-filter";
import {ArrayObservable} from "rxjs/observable/ArrayObservable";
import {ReplaySubject} from "rxjs/ReplaySubject";

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
  @ViewChild(Nav) navCtrl: Nav;

  // Get the instance to call the public methods
  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  public rootPage: any = HomePage;

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

  constructor(
              private alertCtrl: AlertController,
              private menuCtrl: MenuController)
  {
    this.initializeOptions();
  }



  private initializeOptions(): void {
    this.options =[];

    // Load simple menu options
    // ------------------------------------------
    this.options.push({
      iconName: 'home',
      displayName: 'Nazwa klienta',
      component: ActionFilterPage,

      // This option is already selected
      selected: true
    });

    this.options.push({
      iconName: 'analytics',
      displayName: 'Nazwisko Managera B2B',
      component: ActionFilterPage
    });

    // Load options with nested items (with icons)
    // -----------------------------------------------
    this.options.push({
      displayName: 'Rodzaj działania',
      subItems: [
        {
          displayName: 'Rozmowa telefoniczna',
          component: ActionFilterPage
        },
        {
          displayName: 'Spotkanie',
          component: ActionFilterPage
        },
        {
          displayName: 'Zgoda na Seminarium',
          component: ActionFilterPage
        },
        {
          displayName: 'Zgoda na IQOS Space',
          component: ActionFilterPage
        },
        {
          displayName: 'Uruchomienie IQOS Space',
          component: ActionFilterPage
        },
        {
          displayName: 'Seminarium',
          component: ActionFilterPage
        }
      ]
    });
    this.options.push({
      displayName: 'Liczba pracowników',
      subItems: [
        {
          displayName: '<15',
          component: ActionFilterPage
        },
        {
          displayName: '<50',
          component: ActionFilterPage
        },
        {
          displayName: '<100',
          badge: this.unreadCountObservable,
          component: ActionFilterPage
        }
      ]
    });
    this.options.push({
      displayName: 'Wojewodztwo/Region',
      subItems: [
        {
          displayName: 'Sub Option 1',
          component: ActionFilterPage
        },
        {
          displayName: 'Sub Option 2',
          component: ActionFilterPage
        },
        {
          displayName: 'With Badge',
          badge: this.unreadCountObservable,
          component: ActionFilterPage
        }
      ]
    });
    this.options.push({
      displayName: 'Miasto',
      subItems: [
        {
          displayName: 'Sub Option 1',
          component: ActionFilterPage
        },
        {
          displayName: 'Sub Option 2',
          component: ActionFilterPage
        },
      ]
    });

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
        this.navCtrl.setRoot(option.component || ActionFilterPage, { 'title': option.displayName });
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


}
