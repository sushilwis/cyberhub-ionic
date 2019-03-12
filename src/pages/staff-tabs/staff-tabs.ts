import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { StaffInfoPage } from '../staff-info/staff-info';
import { AttendancePage } from '../attendance/attendance';
import { RoutinePage } from '../routine/routine';
import { HomePage } from '../home/home';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import { apiUrl } from '../../apiUrl';
import { ParentsAccountPage }  from '../parents-account/parents-account';
import { StuffExamdutyPage } from '../stuff-examduty/stuff-examduty';
import { GetAttendancePage } from '../get-attendance/get-attendance';
import { StudentNoticeBoardPage } from '../student-notice-board/student-notice-board';
/**
 * Generated class for the StudentsTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-staff-tabs",
  templateUrl: "staff-tabs.html"
})
export class StaffTabsPage implements OnInit {
  tab1Root = StaffInfoPage;
  tab2Root = StuffExamdutyPage;
  tab3Root = GetAttendancePage;
  tab4Root = StudentNoticeBoardPage;
  loaded: boolean = false;
  tabIndex: number = 0;
  localUserData: any;
  loading: any;
  orgDetails: any;
  seeTabs: boolean = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // private nativePageTransitions: NativePageTransitions,
    private http: Http,
    public loadingController: LoadingController,
    public jsonp: Jsonp
  ) {
    this.initLoader();
  }

  ngOnInit() {
    this.seeTabs = true;
    this.getUserDataFromLocal();
    this.getUserData();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad StudentsTabsPage');
  }

  initLoader() {
    this.loading = this.loadingController.create({
      spinner: "hide",
      content:
        '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
    });
  }

  // public transition(e): void {
  //   let options: NativeTransitionOptions = {
  //     direction: this.getAnimationDirection(e.index),
  //     duration: 250,
  //     slowdownfactor: -1,
  //     slidePixels: 0,
  //     iosdelay: 20,
  //     androiddelay: 0,
  //     fixedPixelsTop: 0,
  //     fixedPixelsBottom: 48
  //   };

  //   if (!this.loaded) {
  //     this.loaded = true;
  //     return;
  //   }
  //   this.nativePageTransitions.slide(options);
  // }

  private getAnimationDirection(index): string {
    var currentIndex = this.tabIndex;

    this.tabIndex = index;

    switch (true) {
      case currentIndex < index:
        return "left";
      case currentIndex > index:
        return "right";
    }
  }

  goToLogout() {
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }

  getUserData() {
    this.presentLoading(true);
    var header = new Headers();
    header.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: header });

    let data = {
      org_id: this.localUserData.org_code
      // 'master_id': this.localUserData.master_id
    };

    // console.log('send data : ', data);

    this.http
      .post(`${apiUrl.url}org/getdetail`, data, options)
      .map(res => res.json())
      .subscribe(data => {
        // console.log(data)
        if (data.data) {
          this.presentLoading(false);
          // console.log('receive data : ', data.data[0]);
          this.orgDetails = data.data[0];
        }
      });
  }

  getUserDataFromLocal() {
    let data = localStorage.getItem("userData");
    this.localUserData = JSON.parse(data);
    // console.log(this.localUserData);
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
