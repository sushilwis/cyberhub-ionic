import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParentsChildTabsPage } from '../parents-child-tabs/parents-child-tabs';
import { ParentRegPage } from '../parent-reg/parent-reg';
/**
 * Generated class for the ParentsLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parents-login',
  templateUrl: 'parents-login.html',
})
export class ParentsLoginPage {
	isShown: boolean = false;
	isHide: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentsLoginPage');
  }

  	goToListing(){
		this.isShown = true;
		this.isHide = false;
	}
	goToChildDetails(){
		this.navCtrl.setRoot(ParentsChildTabsPage);
	}

	goToParentsReg() {
		this.navCtrl.push(ParentRegPage);
	} 
}
