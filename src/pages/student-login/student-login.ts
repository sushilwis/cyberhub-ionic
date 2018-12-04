import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { StudentsTabsPage } from '../students-tabs/students-tabs';

import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import { apiUrl } from '../../apiUrl';
import {messageVendor} from '../../vendors';
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

	initLoader() {
		this.loading = this.loadingController.create({
			spinner: 'hide',
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
	}




  ionViewDidLoad() {	
    // console.log('ionViewDidLoad StudentLoginPage');
  }






	goToListing(){
		
		this.presentLoading(true);

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: headers});

		let data = {
		  'username': this.student_register
		}

		this.http.post(`${apiUrl.url}user/student`, data, options).
			map(res => res.json()).subscribe(data => {				
				// console.log(data)

				if (data.data) {
					this.presentLoading(false);

					this.userdata = data.data;
					this.isShown = true;
					this.isHide = false;
					this.phone = data.data[0].mobile_no;
					this.OTP = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

					localStorage.setItem('userData', JSON.stringify(data.data[0]));
					// this.jsonp.request(`http://control.msg91.com/api/sendotp.php?otp_length=4&authkey=${messageVendor.authkey}&sender=${messageVendor.sender}&mobile=${data[0].mobile_no}&otp=${this.OTP}`).subscribe(data =>{
					// 	console.log(data);						
					// })
					console.log(this.OTP);					
				}
			});
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
