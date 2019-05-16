import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { ComplainReplyPage } from "../complain-reply/complain-reply";
import { Http, RequestOptions, Headers, } from '@angular/http';
import { apiUrl } from '../../apiUrl';

/**
 * Generated class for the PrincipalComplaindeskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal-complaindesk',
  templateUrl: 'principal-complaindesk.html',
})
export class PrincipalComplaindeskPage implements OnInit {

  localUserData: any;
  loading: any;
  allComplains: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingController: LoadingController, private http: Http, public alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.getComplain();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalComplaindeskPage');
  }



  gotoCompalinReply(id){
  	this.navCtrl.push(ComplainReplyPage, {
      data: id
    });
  }




  async getComplain() {
    // this.presentLoading(true);
    await this.getUserDataFromLocal();

    let header = new Headers();
    header.set("Content-Type", "application/json");

      let data = {
        org_id: this.localUserData.org_code,
        master_id: this.localUserData.master_id,
        user_type_id: this.localUserData.user_type_id,
      }     
      
      this.http
        .post(`${apiUrl.url}desk/principal`, data, {headers: header})
        .map(res => res.json())
        .subscribe(
          async data => {
            console.log('complain list : ', data);
            if(data.data.length > 0){
              this.allComplains = data.data;
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


  


  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);    
  }



  // onChangeTextValue() {
  //   if(this.complainMsg == '' && this.complainMsg == null){
  //     this.btnDisabled = true;
  //   }else{
  //     this.btnDisabled = false;
  //   }
  // }





  // showAlert(title, msg) {
	// 	const alert = this.alertCtrl.create({
	// 	  title: title,
	// 	  subTitle: msg,
	// 	  buttons: ['OK'],
  //   });
    
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
