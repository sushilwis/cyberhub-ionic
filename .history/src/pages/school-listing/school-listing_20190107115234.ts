import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SchoolDetailsPage } from '../school-details/school-details';

/**
 * Generated class for the SchoolListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school-listing',
  templateUrl: 'school-listing.html',
})
export class SchoolListingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolListingPage');
  }

	goToListingDetails(){
		this.navCtrl.push(SchoolDetailsPage);
	}
}
