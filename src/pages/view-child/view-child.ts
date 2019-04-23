import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-child',
  templateUrl: 'view-child.html',
})
export class ViewChildPage {

  guestTab: string = 'search';
  showLoader: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.showLoader = true;
  }

  ionViewDidLoad() {
    this.showLoader = false;
    console.log('ionViewDidLoad ViewChildPage');
  }

}
