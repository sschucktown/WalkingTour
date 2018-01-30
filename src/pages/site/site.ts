import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { LaunchNavigator,LaunchNavigatorOptions  } from '@ionic-native/launch-navigator';


@IonicPage()
@Component({
  selector: 'page-site',
  templateUrl: 'site.html',
})
export class SitePage {
location: any;
destination: string;
transportMode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data, private launchNavigator: LaunchNavigator) {
	this.data.getByID(this.navParams.get('code')).then(result =>{
		this.location=result;
		this.destination = result.about;
		this.transportMode = "walking";
  });
	
  }
  navigate(){
	  
	  let options: LaunchNavigatorOptions = {
    transportMode:this.transportMode
    }
  
    console.log("navigate browser test")
	  this.launchNavigator.navigate(this.destination, options)
  };
  }
  

