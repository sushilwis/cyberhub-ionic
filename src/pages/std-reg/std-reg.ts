import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  MenuController, LoadingController, AlertController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { StudentLoginPage } from '../student-login/student-login';

/**
 * Generated class for the StdRegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-std-reg',
  templateUrl: 'std-reg.html',
})
export class StdRegPage {

  loading: any;
  localUserData: any;
  collegeList: any;
  college: any;
  mobileNo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public menuCtrl: MenuController, public loadingController: LoadingController, public alertCtrl: AlertController) {
    this.menuCtrl.enable(true);
    this.initLoader();
  }


  ngOnInit(){
    this.getCollege();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StdRegPage');
  }



  getCollege() {
    this.presentLoading(true);

		var header = new Headers();
		header.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: header});

		this.http.get(`${apiUrl.url}org/alllist`, options).
			map(res => res.json()).subscribe(data => {				
				// console.log(data)
				if (data.data) {
          this.presentLoading(false);
          // console.log('receive college list : ', data);
          this.collegeList = data.data;					
				}
			});
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




  initLoader() {
		this.loading = this.loadingController.create({
			spinner: 'hide',
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
  }




  registrationSubmit() {
	
      this.presentLoading(true);
  
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({headers: headers});
  
      let data = {
        org_id: this.college,
        mobile_no: this.mobileNo
      }

      // console.log(data);      
  
      this.http.post(`${apiUrl.url}user/register`, data, options).
        map(res => res.json()).subscribe(data => {	  
          if (data.data.length > 0) {
            this.presentLoading(false);
            console.log('student data : ', data);	
            this.showAlert('Success!', `Your Username is : ${data.data[0].user_name} and Password is : ${data.data[0].hint}. Please login to continue.`);				
          }
      });    
  }





  showAlert(title, msg) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    
    alert.present();
  }




}
