import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ParentsChildTabsPage } from '../parents-child-tabs/parents-child-tabs';
import { ParentRegPage } from '../parent-reg/parent-reg';
import { ParentHomePage } from '../parent-home/parent-home';
// import { FcmProvider } from '../../providers/fcm/fcm';
import { Http } from '@angular/http';
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

  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, 
    private http: Http,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
		// public fcm: FcmProvider,
		) {
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

	parentLogin(){
		this.navCtrl.setRoot(ParentHomePage);
		this.showAlert(
			"Alert!",
			"Successfully logged in to your account."
		);
	}


	showAlert(title, msg) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ["OK"]
    });
    alert.present();
	}
	

}
