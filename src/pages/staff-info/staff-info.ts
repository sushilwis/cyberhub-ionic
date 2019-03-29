import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
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
import { StaffLoginPage } from '../staff-login/staff-login';
import { SchoolcalenderPage } from '../schoolcalender/schoolcalender';
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
  profile_image: string;
  teacherDetails: any;
  weatherIcon: string;
  weatherdata: any;
  temp: any;
  pin: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingController: LoadingController, private http: Http, public alertCtrl: AlertController) {
    this.getUserDataFromLocal();
    this.menuCtrl.enable(false);
    this.initLoader();
    
    this.getUserData();
    this.getTeacherDetails();    
  }


  ngOnInit(){    
    console.log('Stuff info page...');     
       
  }



  ionViewDidLoad() {
    // console.log('ionViewDidLoad StaffInfoPage');
    // this.getWeatherData();
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
    // this.navCtrl.push(LiveStreamPage);
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
  goToStaffDuty(){
    this.navCtrl.push(StuffExamdutyPage);
  }
  goToEvents() {
    this.navCtrl.push(SchoolcalenderPage,{
      id: this.localUserData.org_code
    });
  }



  getUserData() {
    // this.presentLoading(true);
		var header = new Headers();
		header.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: header});

		let data = {
      'org_id': this.localUserData.org_code,
    }
    
		this.http.post(`${apiUrl.url}org/getdetail`, data, options).
			map(res => res.json()).subscribe(data => {	
        // this.presentLoading(false);			
				// console.log('org_details : ', data.data[0]);

				if (data.data) {          
          this.orgDetails = data.data[0];	
          this.pin = data.data[0].pin;
          // console.log('org_details : ', data.data[0]);
          // console.log('PIN : ', this.pin);	
          this.getWeatherData();			
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
    // this.presentLoading(true);
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);
    // console.log('local data : ', this.localUserData); 
    if(this.localUserData.profile_image){
      this.profile_image = `${apiUrl.url}public/uploads/profile_pic/${this.localUserData.profile_image}`;
    }else{
      this.profile_image = `assets/imgs/student-icon.png`;
    }   
  }





  goToLogout() {
    // this.showAlert('Logout', 'Are you sure want to logout ?');
    // localStorage.clear();
    // this.navCtrl.setRoot(HomePage);
    this.showAlert('Logout !', 'Are you sure ?');
  }




  getTeacherDetails() {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: headers});

		let data = {
      'master_id': this.localUserData.master_id,
      'org_id': this.localUserData.org_code
		}

		this.http.post(`${apiUrl.url}staff/details`, data, options).
			map(res => res.json()).subscribe(data => {				
				// this.presentLoading(false);
				if (data.data[0]) {          
          this.teacherDetails = data.data[0];
          // console.log('teacher details : ', data.data[0]);

          // if(data.data[0].nameclass){
          //   this.showSelectDepartmentBtn = false;
          // }else{
          //   this.showSelectDepartmentBtn = true;
          // }
				}
			});
  }




  getWeatherData() {
    // b60c3e9d5ed15819d78fd18b00e5cfbb
    // https://openweathermap.org/img/w/
    var headers = new Headers();
		headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.pin},in&appid=c02a8ac947999e382330611c5f2c508b`).
			map(res => res.json()).subscribe(data => {				
        // console.log('weather data.../',data); 
        this.weatherdata = data.main;
        this.temp = Math.round(parseInt(this.weatherdata.temp)-273.15);
        this.weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; 
        // console.log('weather img link : ', this.temp );     
			});
  }





  showAlert(title, msg) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      cssClass: "confirmAlert",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'Ok',
          cssClass: "okBtn",
          handler: () => {
            localStorage.clear();
            this.navCtrl.setRoot(HomePage);
            // this.navCtrl.push(StaffLoginPage);
          }
        }
      ]
    });
    alert.present();
  }







}
