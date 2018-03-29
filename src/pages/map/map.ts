import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    console.log('HALKO')
    this.loadMap();
  }

  ionViewDidLoad() {
  }

  loadMap() {

    let latLng = new google.maps.LatLng(52.9290, 18.6010);

    let mapOptions = {
      center: latLng,
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let marker = new google.maps.Marker({
      position: latLng,
    });

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    marker.set(this.map)
  }

}
