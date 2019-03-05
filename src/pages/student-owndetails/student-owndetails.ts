import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, Platform, ModalController, ViewController} from 'ionic-angular';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
// import { PdfDownloadPage } from '../pdf-download/pdf-download';
// import { LibraryListPage } from '../library-list/library-list';
import { StudentLibraryListPage } from '../student-library-list/student-library-list';
import { StudentNoticeBoardPage } from '../student-notice-board/student-notice-board';
import { PersonalNoticePage } from '../personal-notice/personal-notice';
import { LiveStreamPage } from '../live-stream/live-stream';
import { AttendancePage } from '../attendance/attendance';
import { RoutinePage } from '../routine/routine';
import AccountPage, { Modal1Page } from '../account/account';
import { apiUrl } from '../../apiUrl';
import { HomePage } from '../home/home';
import { StaffComplainPage } from '../staff-complain/staff-complain';
import { NotificationListPage } from "../notification-list/notification-list";
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
  allNotice: any;
  allPersonalNotice: any;
  personalNoticeCount: any;
  studentName: string;
  seeTabs: boolean = true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingController: LoadingController, private http: Http, public platform: Platform, public modalCtrl: ModalController, public viewCtrl: ViewController,) {
    this.menuCtrl.enable(false);
    this.initLoader();

    this.platform.registerBackButtonAction(() => {
      if (this.navCtrl.getViews().length > 1) {
        this.navCtrl.pop();
      }
    });

  }

  ngOnInit(){
    this.getUserDataFromLocal();
    this.getUserData();
    this.getNoticeList();
    // this.getWheatherData();
    this.getStudentDetails();
    this.seeTabs = true;
    this.getnotificationcount()
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentOwndetailsPage');
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
  goToComplain(){
    this.navCtrl.push(StaffComplainPage);
  }

  goToNotification(){
    this.navCtrl.push(NotificationListPage);
  }




  getUserData() {
    //this.presentLoading(true);
		var header = new Headers();
		header.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: header});

		let data = {
      'org_id': this.localUserData.org_code,
      // 'master_id': this.localUserData.master_id
    }
    
		this.http.post(`${apiUrl.url}org/getdetail`, data, options).
			map(res => res.json()).subscribe(data => {				

				if (data.data) {
          //this.presentLoading(false);
          this.orgDetails = data.data[0];	
          console.log('org details : ...', this.orgDetails);          				
        }
        
			});
  }






  // getWheatherData() {
  //   // this.presentLoading(true);
	// 	var header = new Headers();
	// 	header.append('Content-Type', 'application/json');
	// 	let options = new RequestOptions({headers: header});
    
	// 	this.http.get(`https://api.openweathermap.org/data/2.5/forecast/daily?zip=94040,us?appid=2335fe6c7bd175d5b8e46bc300783240
  //   `, options).
	// 		map(res => res.json()).subscribe(data => {				
	// 			console.log('api data : ', data);
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
    
    if(this.localUserData){
      // alert('In the student home before modal called.');
      if(this.localUserData.is_app_closed){
          console.log('app closed false');
          let modal = this.modalCtrl.create(Modal1Page);
          modal.present();
      }else{
        console.log('app closed false');        
      }
    }      
  }





  dismiss() {
    this.viewCtrl.dismiss();
  }





  async getNoticeList() {
    // this.presentLoading(true);
    await this.getUserDataFromLocal();

    let header = new Headers();
    header.set("Content-Type", "application/json");

      let data = {
        org_id: this.localUserData.org_code,
        user_type_id: this.localUserData.user_type_id,
        master_id: this.localUserData.master_id
      } 
      
      this.http
        .post(`${apiUrl.url}notice/get`, data, {headers: header})
        .map(res => res.json())
        .subscribe(
          async data => {
            if(data.data.length > 1){
              this.allNotice = await data.data;
              this.allPersonalNotice = await this.allNotice.filter((item)=>{
                return item.notiece_type_id == 3; 
              });              
              // this.personalNoticeCount = this.allPersonalNotice.length;
              // console.log('personal notice count : ', this.personalNoticeCount);
              // this.presentLoading(false);             
            }else{
              // this.presentLoading(false);
            }          
      });
  }





  getStudentDetails() {
    this.presentLoading(true);

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let data = {
      'master_id': this.localUserData.master_id
    }

    this.http.post(`${apiUrl.url}student/studentdetail`, data, options).
      map(res => res.json()).subscribe(data => {
        //console.log('student detail data : ', data);
        if (data.data[0]) {
         
          this.studentName = data.data[0].name;
          console.log('student detail data : ', data.data[0]);
          this.presentLoading(false);
        }
      });
  }

    getnotificationcount() {
      this.http.get(`${apiUrl.url}notification/count/${this.localUserData.id}`).map(res => res.json())
      .subscribe(data => {
        if(data.count){
          this.personalNoticeCount =  data.count
        }
        
      })
    }



  goToLogout() {
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }





  
  
}
