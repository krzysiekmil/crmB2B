import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Param, Target} from "../section-daily-plan/section-daily-plan";
import {TargetComponentPage} from "../target-component/target-component";

/**
 * Generated class for the TargetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Task {
  title: string;
  paramList: Array<Param>;
  layoutParam?: Array<Param>;
}

@IonicPage()
@Component({
  selector: 'page-target',
  templateUrl: 'target.html',
})
export class TargetPage {
  taskList: Array<Task> = [{
    title: 'Wprowadzenie nowego produktu',
    paramList: [
      {
        name: 'Id',
        value: '852448'
      },
      {
        name: 'Nazwa',
        value: 'P.H.U Bozena Bozena Szymanska, Pawel Szymanski '
      },
      {
        name: 'Adres',
        value: 'Gdańsk, Trubadurów 6'
      },
      {
        name: 'Data utworzenia',
        value: '12-02-2018'
      },
      {
        name: 'Planowana data zakonczenia',
        value: '21-03-2018'
      },
      {
        name: 'Zakonczenie',
        value: '-'
      },
      {
        name: 'Uwagi',
        value: '-'
      },
    ],
    layoutParam: [
      {
        name: 'icon',
        value: 'alert'
      }
    ]
  },
    {
      title: 'Poprawa pozycji na regale',
      paramList: [
        {
          name: 'Id',
          value: '852448'
        },
        {
          name: 'Nazwa',
          value: 'P.H.U Bozena Bozena Szymanska, Pawel Szymanski '
        },
        {
          name: 'Adres',
          value: 'Gdańsk, Trubadurów 6'
        },
        {
          name: 'Data utworzenia',
          value: '12-02-2018'
        },
        {
          name: 'Planowana data zakonczenia',
          value: '21-03-2018'
        },
        {
          name: 'Zakonczenie',
          value: '-'
        },
        {
          name: 'Uwagi',
          value: '-'
        },
      ],
      layoutParam: [
        {
          name: 'icon',
          value: 'basket'
        }
      ]
    },
    {
      title: 'Podpisanie nowej umowy z klientem',
      paramList: [
        {
          name: 'Id',
          value: '852448'
        },
        {
          name: 'Nazwa',
          value: 'P.H.U Bozena Bozena Szymanska, Pawel Szymanski '
        },
        {
          name: 'Adres',
          value: 'Gdańsk, Trubadurów 6'
        },
        {
          name: 'Data utworzenia',
          value: '12-02-2018'
        },
        {
          name: 'Planowana data zakonczenia',
          value: '21-03-2018'
        },
        {
          name: 'Zakonczenie',
          value: '-'
        },
        {
          name: 'Uwagi',
          value: '-'
        },
      ],
      layoutParam: [
        {
          name: 'icon',
          value: 'flame'
        }
      ]
    },
  ];
  isEmpty: boolean = true;
  emptyInformationHeader = 'Brak celow dla tego sklepu'
  emptyInformationMessage = 'Dodaj cele, albo spytaj sie \n menagera czy takie mozna ustalic';
  targetList = [{title: 'Akademia Perfect', subtitle: 'Store', numberOfPages: 124, icon: 'book'},
    {title: 'Akademia Perfect', subtitle: 'Store', numberOfPages: 124, icon: 'add'},
    {title: 'Promocja', subtitle: 'Store', numberOfPages: 72, icon: 'albums'},
    {title: 'Sklep', subtitle: '(Promocje/dokumenty)', numberOfPages: 123, icon: 'basket'}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
    this.isEmpty = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TargetPage');
    console.log(this.isEmpty);
  }

  openShopList(id) {
    let modal = this.modal.create(TargetComponentPage, {title: this.targetList[id].title, id: id});
    modal.present();
  }


}
