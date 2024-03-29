import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { StaffInfoPage } from '../staff-info/staff-info';
import { RequestOptions, Headers, Http } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { HomePage } from "../home/home";
import { StuffRegistrationPage } from '../stuff-registration/stuff-registration';
import { FcmProvider } from "../../providers/fcm/fcm";
import { StaffTabsPage } from "../staff-tabs/staff-tabs";
/**
 * Generated class for the StaffLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-staff-login",
  templateUrl: "staff-login.html",
})

export class StaffLoginPage implements OnInit {
  regID: any;
  pass: any;
  loading: any;
  showLoader: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    public fcm: FcmProvider
  ) {
    // this.initLoader();
  }

  ngOnInit() {
    this.showLoader = true;
    localStorage.clear();
  }

  ionViewDidLoad() {
    this.showLoader = false;
    console.log("ionViewDidLoad StaffLoginPage");
  }

  goToStaffInfo() {
    this.navCtrl.push(StaffInfoPage);
  }

  // initLoader() {
  //   this.loading = this.loadingController.create({
  //     spinner: "hide",
  //     content:
  //       '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
  //   });
  // }


  gotoHome() {
    this.navCtrl.setRoot(HomePage);
  }

  goToRegister() {
		this.navCtrl.push(StuffRegistrationPage);	
  }
  



  

  onStuffLoginSubmit() {
    this.showLoader = true;
    if (this.regID && this.pass) {
      // this.presentLoading(true);
      // localStorage.removeItem('userData');
      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      let options = new RequestOptions({ headers: headers });

      let data = {
        username: this.regID,
        pass: this.pass
      };

      // console.log(data);

      this.http
        .post(`${apiUrl.url}user/applogin`, data, options)
        .map(res => res.json())
        .subscribe(data => {
          // console.log("stuff login info : ", data.data);
          if (data.data.length > 0) {
            this.showLoader = false;
            // console.log(data.data[0]);
            localStorage.setItem("userData", JSON.stringify(data.data[0]));
            this.fcm.getToken();
            // this.presentLoading(false);
            this.navCtrl.setRoot(StaffTabsPage);
          } else {
            this.showLoader = false;
            this.showAlert(
              "Alert!",
              "User not found. Please check your ID or Password"
            );
            // this.presentLoading(false);
          }
        });
    } else {
      this.showLoader = false;
      this.showAlert("Alert!", "Please fill all the fields");
    }
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






  // presentLoading(load: boolean) {
  //   if (load) {
  //     return this.loading.present();
  //   } else {
  //     setTimeout(() => {
  //       return this.loading.dismiss();
  //     }, 1000);
  //   }
  // }




}
