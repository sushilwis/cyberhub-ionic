import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaffInfoPage } from '../staff-info/staff-info';
import { RequestOptions, Headers, Http } from '@angular/http';
import { apiUrl } from '../../apiUrl';

/**
 * Generated class for the StaffLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-login',
  templateUrl: 'staff-login.html',
})
export class StaffLoginPage {

  regID: any;
  pass: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffLoginPage');
  }
  goToStaffInfo(){
		this.navCtrl.setRoot(StaffInfoPage);
  }
  


  onStuffLoginSubmit() {

    var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: headers});

		let data = {
      'username': this.regID,
      'pass': this.pass
		}

		this.http.post(`${apiUrl.url}user/login`, data, options).
			map(res => res.json()).subscribe(data => {
        console.log(data);        
    });

  }



  
}
