import {Component, TemplateRef, ViewChild} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {CalendarEventTimesChangedEvent} from "angular-calendar";
import {CalendarEvent} from "angular-calendar";
import {Subject} from "rxjs/Subject";
import {CalendarEventAction} from "angular-calendar";
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};


@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  viewDate: Date = new Date();
  view = 'week';
  locale: string = 'en';
  isDragging = false;
  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: addHours(startOfDay(new Date()), 8),
      end: addHours(startOfDay(new Date()), 9),
      title: 'Apteka Mokotów',
      cssClass: 'custom-event',
      color: {
        primary: '#1e90ff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 10),
      end: addHours(startOfDay(new Date()), 12),
      title: 'Sklep Powiśle',
      cssClass: 'custom-event',
      color: {
        primary: '#00d830',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }

  handleEvent(event: CalendarEvent): void {
    let alert = this.alertCtrl.create({
      title: event.title,
      subTitle: 'Adres: Puławska 11, Warszawa\n Rozpoczęcia spotkania : 8:00 \n ' +
      'Zakończenie spotkania : 9:00',
      message: " Uwagi : -",
      buttons: [
        {
          text: 'Wróć'
        },
        {
          text: 'Edytuj'
        }
      ]
    });
    alert.present();
  }


  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    if (this.isDragging) {
      return;
    }
    this.isDragging = true;

    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();

    setTimeout(() => {
      this.isDragging = false;
    }, 1000);
  }

  addNewVisit(event): void {
    let modal = this.alertCtrl.create({
      title: 'Nowa wizyta',
      inputs: [
        {
          name: 'clientName',
          placeholder: 'Wprowadz nazwe klienta'
        },
        {
          name: 'startTime',
          placeholder: 'Czas rozpoczęci :8:30',
        }
      ],
      buttons: [
        {
          text: 'Wróć'
        },
        {
          text: 'Zapisz',
          handler: data => {
            this.hourSegmentClicked(event, data.clientName);
          }
        }
      ]
    });
    console.log(event.date);
    modal.present();

  }


  hourSegmentClicked(event, name: string): void {
    let newEvent: CalendarEvent = {
      start: event.date,
      end: addHours(event.date, 1),
      title: name || 'Apteka 2',
      cssClass: 'custom-event',
      color: {
        primary: '#488aff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    };

    this.events.push(newEvent);
    this.refresh.next();
  }

}
