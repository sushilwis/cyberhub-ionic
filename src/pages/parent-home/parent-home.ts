import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddChildPage } from '../add-child/add-child';
import { ViewChildPage } from '../view-child/view-child';

/**
 * Generated class for the ParentHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parent-home',
  templateUrl: 'parent-home.html',
})
export class ParentHomePage {
  guestTab: string = 'search';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentHomePage');
  }

  goToAddChild() {
    this.navCtrl.push(AddChildPage);
  }

  goToViewChildDetails() {
    this.navCtrl.push(ViewChildPage);
  }

}
