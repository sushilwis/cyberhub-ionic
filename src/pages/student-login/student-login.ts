import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import StudentsTabsPage from '../students-tabs/students-tabs';

import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import { apiUrl } from '../../apiUrl';
import {messageVendor} from '../../vendors';
import { StdRegPage } from '../std-reg/std-reg';
import {HomePage} from '../home/home'
import { FcmProvider } from "../../providers/fcm/fcm";
// declare var $: any;
// declare var jquery : any;

@IonicPage()
@Component({
  selector: 'page-student-login',
  templateUrl: 'student-login.html',
})
export class StudentLoginPage {
	//
	loading: any;
	isShown: boolean = false;
	isHide: boolean = true;
	student_register: string;
	student_password: string;
	phone: string;
	OTP: number;
	otp_pass: number;
	userdata: any;
	show: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, 
		private http: Http, public loadingController: LoadingController, 
		public jsonp: Jsonp, public alertCtrl: AlertController, public fcm: FcmProvider ) {
		this.initLoader();
		// setTimeout(() => {
		// 	//
		// }, 1000);
  }



  	ngOnInit(){
    	localStorage.clear();
  	}

  

	initLoader() {
		this.loading = this.loadingController.create({
			spinner: 'hide',
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
	}


	gotoHome(){
		this.navCtrl.setRoot(HomePage);
	}

	ionViewDidLoad() {	
		console.log('ionViewDidLoad StudentLoginPage');
	}






  loginSubmit() {
	  if(this.student_register && this.student_password) {
		this.presentLoading(true);

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: headers});

		let data = {
		  'username': this.student_register,
		  'pass': this.student_password
		}

		this.http.post(`${apiUrl.url}user/applogin`, data, options).
			map(res => res.json()).subscribe(data => {	
				console.log('login data : ', data.data);
				if (data.data.length > 0) {
					localStorage.setItem('userData', JSON.stringify(data.data[0]));
					// console.log('login data : ', data.data);	
					this.fcm.getToken();				
					this.presentLoading(false);
					this.navCtrl.setRoot(StudentsTabsPage);					
				}else {
					this.showAlert('Alert!', 'User not found. Please check your ID or Password');
					this.presentLoading(false);
				}
			});
	  }	else {
		this.showAlert('Alert!', 'Please enter all the field');
	  }	
	}





	goToRegister() {
		// this.presentLoading(true);
		this.navCtrl.push(StdRegPage);
		// this.presentLoading(false);	
	}





	goToOwnDetails(){		
		if (this.OTP == this.otp_pass) {
			this.navCtrl.setRoot(StudentsTabsPage);
		}		
	}




	resendMessage(){

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


	password() {
		this.show = !this.show;
		
	}

	// showAlert(title, msg) {
	// 	const alert = this.alertCtrl.create({
	// 	  title: title,
	// 	  subTitle: msg,
	// 	  buttons: ['OK']
	// 	});
	// 	alert.present();
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


}
