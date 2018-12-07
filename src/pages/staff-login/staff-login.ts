import { Component, OnInit } from '@angular/core';
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
export class StaffLoginPage implements OnInit {

  regID: any;
  pass: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,) {
  }

  ngOnInit(){
    localStorage.clear();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffLoginPage');
  }

  goToStaffInfo(){
		this.navCtrl.push(StaffInfoPage);
  }
  


  onStuffLoginSubmit() {
    // localStorage.removeItem('userData');
    var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: headers});

		let data = {
      'username': this.regID,
      'pass': this.pass
    }
    
    console.log(data);

		this.http.post(`${apiUrl.url}user/applogin`, data, options).
			map(res => res.json()).subscribe(data => {
        if(data){
          console.log(data.data[0]);                    
          localStorage.setItem('userData', JSON.stringify(data.data[0]));
          this.navCtrl.setRoot(StaffInfoPage);
        }        
    });

  }



  
}
