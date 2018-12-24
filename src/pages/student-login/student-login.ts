import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { StudentsTabsPage } from '../students-tabs/students-tabs';

import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import { apiUrl } from '../../apiUrl';
import {messageVendor} from '../../vendors';
import { StdRegPage } from '../std-reg/std-reg';
// declare var $: any;
// declare var jquery : any;

/**
 * Generated class for the StudentLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
	constructor(public navCtrl: NavController, public navParams: NavParams, 
		private http: Http, public loadingController: LoadingController, public jsonp: Jsonp) {
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




  ionViewDidLoad() {	
    // console.log('ionViewDidLoad StudentLoginPage');
  }






  loginSubmit() {
		
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
				if (data.data) {
					this.presentLoading(false);
					localStorage.setItem('userData', JSON.stringify(data.data[0]));
					this.navCtrl.setRoot(StudentsTabsPage);					
				}
			});
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


}
