import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: GoogleMap;
  myPosition: any = {};
  markers: any[] = [
    {
      position:{
        latitude: 32.783336,
        longitude: -79.94643,
      },
      title:'Anderson House',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.7832976,
        longitude: -79.9475893,
      },
      title:'Baruch Auditorium',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.7855147,
        longitude: -79.9475556,
      },
      title:'Basic Sciences Building',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.785155 ,
        longitude: -79.947875,
      },
      title:'Colbert Library',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.7837306,
        longitude: -79.945016,
      },
      title:'Colcock Hall',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.7851153,
        longitude: -79.9458948,
      },
      title:'College of Health Professions-Building B/Charleston High School',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.7842674,
        longitude: -79.9482552,
      },
      title:'College of Nursing Building',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.783483,
        longitude: -79.945459,
      },
      title:'Hervey Allen Oak',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.7834599,
        longitude: -79.9478494,
      },
      title:'Hollings Cancer Center/1914 College of Medicine building',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.786753,
        longitude:  -79.947347,
      },
      title:'Macaulay Museum of Dental History',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.785386,
        longitude:  -79.948237,
      },
      title:'Porcher Medicinal Garden',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.786908,
        longitude: -79.947345,
      },
      title:'Porter Military Academy wall',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.7834974,
        longitude: -79.94603,
      },
      title:'Sebring-Aimar House',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.786492,
        longitude: -79.947910,
      },
      title:'Space Tree',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.7870656,
        longitude: -79.9476702,
      },
      title:'St. Luke’s Chapel',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.78651,
        longitude: -79.947313,
      },
      title:'Waring Historical Library ',
      icon: 'www/assets/img/markerART.png'
    },
    {
      position:{
        latitude: 32.786134,
        longitude: -79.946637,
      },
      title:'Wickliffe House',
      icon: 'www/assets/img/markerART.png'
    },
  ];
  constructor(
    private navCtrl: NavController,
    private geolocation: Geolocation,
    private googleMaps: GoogleMaps
  ) {}

  ionViewDidLoad(){
    this.getCurrentPosition();
  }
  getCurrentPosition(){
    this.geolocation.getCurrentPosition()
    .then(position => {
      this.myPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      this.loadMap();
    })
    .catch(error=>{
      console.log(error);
    })
  }

  loadMap(){
    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');

    this.map = this.googleMaps.create(element,{
      'controls':{
        'compass': true,
        'myLocationButton':true
      }
    });

    // create CameraPosition
    let position: CameraPosition<any> = {
      target: new LatLng(this.myPosition.latitude, this.myPosition.longitude),
      zoom: 18,
      tilt: 30
    };

    this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      console.log('Map is ready!');

      // move the map's camera to position
      this.map.moveCamera(position);

      let markerOptions: MarkerOptions = {
        position: this.myPosition,
        title: "Me",
        icon: 'www/assets/img/clear.png'
      };

      this.addMarker(markerOptions);

      this.markers.forEach(marker=>{
        this.addMarker(marker);
      });
      
    });
  }

  addMarker(options){
    let markerOptions: MarkerOptions = {
      position: new LatLng(options.position.latitude, options.position.longitude),
      title: options.title,
      icon: options.icon
    };
    this.map.addMarker(markerOptions);
  }
}

