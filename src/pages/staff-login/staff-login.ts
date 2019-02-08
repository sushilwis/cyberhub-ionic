import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { StaffInfoPage } from '../staff-info/staff-info';
import { RequestOptions, Headers, Http } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { HomePage } from "../home/home";
import { StuffRegistrationPage } from '../stuff-registration/stuff-registration';
/**
 * Generated class for the StaffLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-staff-login",
  templateUrl: "staff-login.html"
})
export class StaffLoginPage implements OnInit {
  regID: any;
  pass: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public alertCtrl: AlertController,
    public loadingController: LoadingController
  ) {
    this.initLoader();
  }

  ngOnInit() {
    localStorage.clear();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StaffLoginPage");
  }

  goToStaffInfo() {
    this.navCtrl.push(StaffInfoPage);
  }

  initLoader() {
    this.loading = this.loadingController.create({
      spinner: "hide",
      content:
        '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
    });
  }


  gotoHome() {
    this.navCtrl.setRoot(HomePage);
  }

  goToRegister() {
		this.navCtrl.push(StuffRegistrationPage);	
	}

  onStuffLoginSubmit() {
    if (this.regID && this.pass) {
      this.presentLoading(true);
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
          console.log("stuff login info : ", data.data);
          if (data.data.length > 0) {
            // console.log(data.data[0]);
            this.presentLoading(false);
            localStorage.setItem("userData", JSON.stringify(data.data[0]));
            this.navCtrl.setRoot(StaffInfoPage);
          } else {
            this.showAlert(
              "Alert!",
              "Sorry, user not found. Please check your ID or Password."
            );
            this.presentLoading(false);
          }
        });
    } else {
      this.showAlert("Alert!", "Please fill all the field.");
    }
  }

  showAlert(title, msg) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ["OK"]
    });
    alert.present();
  }

  presentLoading(load: boolean) {
    if (load) {
      return this.loading.present();
    } else {
      setTimeout(() => {
        return this.loading.dismiss();
      }, 1000);
    }
  }
}
