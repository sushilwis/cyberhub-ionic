import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { apiUrl } from '../../apiUrl';
import { Http, RequestOptions, Headers, } from '@angular/http';

/**
 * Generated class for the ComplainReplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complain-reply',
  templateUrl: 'complain-reply.html',
})
export class ComplainReplyPage implements OnInit {

  id: any;
  localUserData: any;
  btnDisabled: boolean = true;
  complainMsg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private http: Http) {
    this.id = navParams.get('data');
    console.log('id : ', this.id);    
  }

  ngOnInit() {
    this.getUserDataFromLocal();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplainReplyPage');
  }


  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);    
  }



  onChangeTextValue() {
    if(this.complainMsg == '' && this.complainMsg == null){
      this.btnDisabled = true;
    }else{
      this.btnDisabled = false;
    }
  }



  showAlert(title, msg) {
		const alert = this.alertCtrl.create({
		  title: title,
		  subTitle: msg,
		  buttons: ['OK'],
    });
    
		alert.present();
  }




  async sendReply() {
    // this.presentLoading(true);

    let header = new Headers();
    header.set("Content-Type", "application/json");

      let data = {
        org_id: this.localUserData.org_code,
        master_id: this.localUserData.master_id,
        mssg: this.complainMsg,
        to_id: this.id,
      }      
      console.log('reply complain : ', data);
      this.http
        .post(`${apiUrl.url}desk/princepal_reply`, data, {headers: header})
        .map(res => res.json())
        .subscribe(
          async data => {
            // console.log(data);
            if(data){
              this.complainMsg = '';
              this.btnDisabled = true;
              this.showAlert('Alert!', 'Reply has been submitted successfully.');
            } else {
              this.showAlert('Alert!', 'Something went wrong. Please try again.');
            }
      });
  }

}
