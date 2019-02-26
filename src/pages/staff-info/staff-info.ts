import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { RequestOptions, Headers, Http } from '@angular/http';
import { apiUrl } from '../../apiUrl';


import { StudentLibraryListPage } from '../student-library-list/student-library-list';
import { StudentNoticeBoardPage } from '../student-notice-board/student-notice-board';
import { PersonalNoticePage } from '../personal-notice/personal-notice';
import { GetAttendancePage } from '../get-attendance/get-attendance';
import { LiveStreamPage } from '../live-stream/live-stream';
import { StaffComplainPage } from '../staff-complain/staff-complain';
import { ParentsAccountPage } from '../parents-account/parents-account';
import { GuestEnquiryPage } from '../guest-enquiry/guest-enquiry';
import { PrincipalExamviewPage } from '../principal-examview/principal-examview';
import{ PrincipalComplaindeskPage } from '../principal-complaindesk/principal-complaindesk';
import { StuffExamdutyPage } from '../stuff-examduty/stuff-examduty';
import { HomePage } from '../home/home';
/**
 * Generated class for the StaffInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-info',
  templateUrl: 'staff-info.html',
})
export class StaffInfoPage {

  localUserData: any;
  orgDetails: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingController: LoadingController, private http: Http) {
    this.menuCtrl.enable(true);
    this.initLoader();
  }


  ngOnInit(){
    this.getUserDataFromLocal();
    this.getUserData();
    console.log('Stuff info page...');    
  }



  ionViewDidLoad() {
    // console.log('ionViewDidLoad StaffInfoPage');
  }



  goToAllPdf(){
		this.navCtrl.push(StudentNoticeBoardPage);
	}
  goToLibrary(){
    this.navCtrl.push(StudentLibraryListPage);
  }
  goToPersonalNotice(){
    this.navCtrl.push(PersonalNoticePage);
  }
  gotoLiveStream(){
    this.navCtrl.push(LiveStreamPage);
  }
  goToAttendance(){
    this.navCtrl.push(GetAttendancePage);
  }
  goToComplain(){
    this.navCtrl.push(StaffComplainPage);
  }
  goToAccount(){
    this.navCtrl.push(ParentsAccountPage);
  }
  goToGuest(){
    this.navCtrl.push(GuestEnquiryPage);
  }
  goToPrincipal(){
    this.navCtrl.push(PrincipalExamviewPage);
  }
  goToComplainDesk(){
    this.navCtrl.push(PrincipalComplaindeskPage);
  }
  goToStuffDuty(){
    this.navCtrl.push(StuffExamdutyPage);
  }



  getUserData() {
    this.presentLoading(true);
		var header = new Headers();
		header.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: header});

		let data = {
      'org_id': this.localUserData.org_code,
    }
    
		this.http.post(`${apiUrl.url}org/getdetail`, data, options).
			map(res => res.json()).subscribe(data => {				
				console.log('org_details : ', data.data[0]);

				if (data.data) {
          this.presentLoading(false);
          this.orgDetails = data.data[0];					
        }
        
			});
  }






  // getUserData() {
  //   this.presentLoading(true);
	// 	var header = new Headers();
	// 	header.append('Content-Type', 'application/json');
	// 	let options = new RequestOptions({headers: header});

	// 	let data = {
  //     'org_id': this.localUserData.org_code,
  //   }
    
	// 	this.http.post(`${apiUrl.url}org/getdetail`, data, options).
	// 		map(res => res.json()).subscribe(data => {				
	// 			console.log('org_details : ', data.data[0]);

	// 			if (data.data) {
  //         this.presentLoading(false);
  //         this.orgDetails = data.data[0];					
  //       }
        
	// 		});
  // }






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
    // console.log('local data : ', this.localUserData);    
  }





  goToLogout() {
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }
}
