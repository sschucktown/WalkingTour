import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http'; //to be able to pass data between pages
import { LaunchNavigator,LaunchNavigatorOptions } from '@ionic-native/launch-navigator'; //launch native, external nav app

import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps} from '@ionic-native/google-maps';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';//import functions from main page
//import { SitePage } from '../pages/site/site';//import functions from secondary page
import { Data } from '../providers/data'; //import functions from main provider

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
	Data,
    StatusBar,
    SplashScreen,
  LaunchNavigator,
  Geolocation,
  GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
