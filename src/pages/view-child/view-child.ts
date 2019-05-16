import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
