import {Component} from '@angular/core';
import {Camera} from "@ionic-native/camera";
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ExtraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html',
})
export class ExtraPage {
  sign: boolean;
  photo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private camera: Camera) {
  }

  takePicture(): void {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 800,
      targetHeight: 600,
      quality: 100,
      allowEdit: true,
      correctOrientation: false,
      saveToPhotoAlbum: true,
    }).then(imageData => {
      this.photo = "data:image/jpeg;base64," + imageData;
    }).catch(err => console.error(err));
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Zarządzaj zdjeciem ',
      buttons: [
        {
          text: 'Usuń',
          role: 'destructive',
          handler: () => {
            this.photo = null
          }
        },
        {
          text: 'Powtórz',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Wyjdź',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
