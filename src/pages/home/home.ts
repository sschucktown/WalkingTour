import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { SitePage } from '../site/site';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  locations: any = 0; //initialize locations variable to hold json array data
  constructor(public navCtrl: NavController, public data: Data) {
        this.data.loadAll().then(result => {
            this.locations =  result; //now has all json data
        });
  }
  detailsPage(id){
    this.navCtrl.push('SitePage', {code: id}); //match id and code to item clicked and push to site.html
  };
}