import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ParentsChildTabsPage } from '../parents-child-tabs/parents-child-tabs';
import { ParentRegPage } from '../parent-reg/parent-reg';
import { ParentHomePage } from '../parent-home/parent-home';
// import { FcmProvider } from '../../providers/fcm/fcm';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
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
  parent_id: any;
  parent_password: any;
  loading: any;

  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, 
    private http: Http,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    // public fcm: FcmProvider, 
		public jsonp: Jsonp,
		) {

      this.initLoader();
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

	// parentLogin(){
	// 	this.navCtrl.setRoot(ParentHomePage);
	// 	this.showAlert(
	// 		"Alert!",
	// 		"Successfully logged in to your account"
	// 	);
  // }
  

  initLoader() {
		this.loading = this.loadingController.create({
			spinner: 'hide',
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
	}


	// showAlert(title, msg) {
  //   const alert = this.alertCtrl.create({
  //     title: title,
  //     subTitle: msg,
  //     buttons: ["OK"]
  //   });
  //   alert.present();
	// }



	showAlert(title, msg) {
    const alert = this.alertCtrl.create({
      title: title,
      cssClass: "confirmAlert",
      subTitle: msg,
      buttons: [
        {
          text: 'OK',
          cssClass: "okBtn",
          handler: () => {
            // this.navCtrl.push(WelcomeGuestPage);
          }
        }
      ]
    });
    
    alert.present();
  }





  parentLogin() {
	  if(this.parent_id && this.parent_password) {
		this.presentLoading(true);

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: headers});

		let data = {
		  'username': this.parent_id,
		  'pass': this.parent_password
		}

		this.http.post(`${apiUrl.url}parent/login`, data, options).
			map(res => res.json()).subscribe(data => {	
				// console.log('login data : ', data.data);
				if (data.data.length > 0) {
					localStorage.setItem('userData', JSON.stringify(data.data[0]));
					// console.log('login data : ', data.data);				
					this.presentLoading(false);
					this.navCtrl.setRoot(ParentHomePage);					
				}else {
					this.showAlert('Alert!', 'User not found. Please check your ID or Password');
					this.presentLoading(false);
				}
			});
	  }	else {
		  this.showAlert('Alert!', 'Please enter all the field');
	  }	
  }





  presentLoading(load: boolean) {
		if (load) {
			return this.loading.present();
		}
		else {
			setTimeout(() => {
				return this.loading.dismiss();
			}, 1000);
		}
	}
  
	

}
