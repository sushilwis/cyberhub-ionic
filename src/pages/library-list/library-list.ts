import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SchoolDetailsPage } from '../school-details/school-details';

import { LiveStreamPage } from '../live-stream/live-stream';
/**
 * Generated class for the LibraryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library-list',
  templateUrl: 'library-list.html',
})
export class LibraryListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu:MenuController) {

  	this.menu.enable(false);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryListPage');
  }
  
   goToHome(){
		this.navCtrl.push(SchoolDetailsPage);
	}
  
  gotoLiveStream(){
    this.navCtrl.push(LiveStreamPage);
  }
}
