import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { apiUrl } from '../../apiUrl';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { StudentNoticeBoardPage } from '../student-notice-board/student-notice-board';
import { StudentLibraryListPage } from '../student-library-list/student-library-list';
import { PersonalNoticePage } from '../personal-notice/personal-notice';
import { LiveStreamPage } from '../live-stream/live-stream';
import { AttendancePage } from '../attendance/attendance';
import { RoutinePage } from '../routine/routine';
import AccountPage from '../account/account';
import { StaffInfoPage } from '../staff-info/staff-info';



@IonicPage()
@Component({
  selector: 'page-staff-complain',
  templateUrl: 'staff-complain.html',
})
export class StaffComplainPage implements OnInit {

  isShown: boolean = false;
  localUserData: any;
  loading: any;
  complainMsg: any = '';
  btnDisabled: boolean = true;
  allMsgs: any;
  totalcomplain;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingController: LoadingController, private http: Http, public alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.getUserDataFromLocal();
    this.getComplainAndReplys();
    this.countComplain();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffComplainPage');
  }

  goHide() {
  	this.isShown = true;
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

  countComplain(){
    this.http.get(`${apiUrl.url}desk/countMsg/${this.localUserData.master_id}`).map(res => res.json())
    .subscribe(data => {
      console.log('complain data : ...', data.data);      
      this.totalcomplain = data.data.length
    })
  }





  async sendComplain() {

    if(this.totalcomplain >= '3') {
      this.showAlert('Alert!', 'Sorry, You Have Not Any Complain Left.');
      this.navCtrl.setRoot(StaffInfoPage);
    }else{
    
    let header = new Headers();
    header.set("Content-Type", "application/json");

      let data = {
        org_id: this.localUserData.org_code,
        sender_id: this.localUserData.master_id,
        mssg: this.complainMsg,
        user_type_id: this.localUserData.user_type_id
      }
      
      // console.log(data);      
      
      this.http
        .post(`${apiUrl.url}desk/addmsg`, data, {headers: header})
        .map(res => res.json())
        .subscribe(
          async data => {
            // console.log(data);
            if(data.data){
              this.complainMsg = '';
              this.btnDisabled = true;
              this.countComplain();
              this.getComplainAndReplys();
              this.showAlert('Alert!', 'Your Complain has been Submited.');
            } else {
              this.showAlert('Alert!', 'Something went wrong. Please try again.');
            }
      });

    }
  }





  async getComplainAndReplys() {
    // this.presentLoading(true);
    await this.getUserDataFromLocal();

    let header = new Headers();
    header.set("Content-Type", "application/json");

      let data = {
        org_id: this.localUserData.org_code,
        master_id: this.localUserData.master_id
      }     
      
      this.http
        .post(`${apiUrl.url}desk/staff`, data, {headers: header})
        .map(res => res.json())
        .subscribe(
          async data => {
            console.log('message list data : ', data);
            if(data.data.length > 0){
              this.allMsgs = data.data;
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


}
