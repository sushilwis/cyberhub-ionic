import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { apiUrl } from '../../apiUrl';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { AccountPage } from '../account/account';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage implements OnInit {

  oldPassword: any;
  newPassword: any;
  confNewPassword: any;
  localUserData: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private http: Http, public loadingController: LoadingController, public jsonp: Jsonp, public modalCtrl: ModalController, public alertCtrl: AlertController) {
  }


  ngOnInit() {
    this.getUserDataFromLocal();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ChangepasswordPage');
  }



  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);
    // console.log('local data : ', this.localUserData);    
  }



  onChangePassSubmit(){
    if(this.newPassword == this.confNewPassword){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({headers: headers});
  
      let data = {
        'id': this.localUserData.id,
        'user_type_id': this.localUserData.user_type_id,
        'pass': this.newPassword,
        'oldpass': this.oldPassword,
      }
  
      this.http.post(`${apiUrl.url}user/changepass`, data, options).
        map(res => res.json()).subscribe(data => {				
          console.log(data);   
          if(data.status == "1"){
            this.showAlert('Password Changed Successfully.');
            this.navCtrl.push(AccountPage);
          }else{
            this.showAlert(data.mssg);
          }       
        });
    }else{
      this.showAlert('Password Not Match.');
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




  initLoader() {
		this.loading = this.loadingController.create({
			spinner: 'hide',
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
  }




  showAlert(msg) {
    const alert = this.alertCtrl.create({
      title: 'Alert!',
      subTitle: msg,
      buttons: ['OK']
    });

    alert.present();
  }




}
