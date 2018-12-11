import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,  MenuController, LoadingController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
// import { PdfDownloadPage } from '../pdf-download/pdf-download';
// import { LibraryListPage } from '../library-list/library-list';
import { StudentLibraryListPage } from '../student-library-list/student-library-list';
import { StudentNoticeBoardPage } from '../student-notice-board/student-notice-board';
import { PersonalNoticePage } from '../personal-notice/personal-notice';
import { LiveStreamPage } from '../live-stream/live-stream';
import { AttendancePage } from '../attendance/attendance';
import { RoutinePage } from '../routine/routine';
import { AccountPage } from '../account/account';
import { apiUrl } from '../../apiUrl';

/**
 * Generated class for the StudentOwndetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-student-owndetails',
  templateUrl: 'student-owndetails.html',
})
export class StudentOwndetailsPage implements OnInit {

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
  }




  ionViewDidLoad() {
    // console.log('ionViewDidLoad StudentOwndetailsPage');
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
    this.navCtrl.push(AttendancePage);
  }
  goToRoutine(){
    this.navCtrl.push(RoutinePage);
  }
  goToAccount(){
    this.navCtrl.push(AccountPage);
  }






  getUserData() {
    this.presentLoading(true);
		var header = new Headers();
		header.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: header});

		let data = {
      'org_id': this.localUserData.org_code,
      // 'master_id': this.localUserData.master_id
    }
    
    // console.log('send data : ', data);
    
		this.http.post(`${apiUrl.url}org/getdetail`, data, options).
			map(res => res.json()).subscribe(data => {				
				// console.log(data)

				if (data.data) {
          this.presentLoading(false);
          // console.log('receive data : ', data.data[0]);
          this.orgDetails = data.data[0];					
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
    // console.log('local data : ', this.localUserData);    
  }
}
