import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GuestEnquiryPage } from '../guest-enquiry/guest-enquiry';
import { SearchOrganisationPage } from '../search-organisation/search-organisation';

/**
 * Generated class for the WelcomeGuestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome-guest',
  templateUrl: 'welcome-guest.html',
})
export class WelcomeGuestPage {
  guestTab: string = 'search';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeGuestPage');
  }

  goToFilterOrg(){  
    this.navCtrl.push(GuestEnquiryPage);  
  }

  goToSearchOrg(){
    this.navCtrl.push(SearchOrganisationPage);    
  }

}
