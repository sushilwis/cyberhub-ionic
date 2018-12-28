import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { LiveStreamPage } from '../live-stream/live-stream';
import { AttendancePage } from '../attendance/attendance';
import { RoutinePage } from '../routine/routine';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { RequestOptions, Headers, Http, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { NoticeModalPage } from '../student-notice-board/student-notice-board';
/**
 * Generated class for the PersonalNoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-notice',
  templateUrl: 'personal-notice.html',
})
export class PersonalNoticePage implements OnInit {
  localUserData: any;
  allNotice: any;
  loading: any;
  allPersonalNotice: any;
  showNothingMsg: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public document: DocumentViewer, public menuCtrl: MenuController, public loadingController: LoadingController, public modalCtrl: ModalController, private http: Http) {
    this.initLoader();
  }


  ngOnInit(){
    this.getNoticeList();
    this.showNothingMsg = false;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalNoticePage');
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
  goToHome(){
    this.navCtrl.setRoot(StudentOwndetailsPage);
  }





  async getNoticeList(){

    this.presentLoading(true);

    await this.getUserDataFromLocal();
    let header = new Headers();
    header.set("Content-Type", "application/json");

      let data = {
        org_id: this.localUserData.org_code,
        user_type_id: this.localUserData.user_type_id,
        master_id: this.localUserData.master_id
      } 

      // console.log('Data sent : ', data);      
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
              // console.log('personal notice : ', this.allPersonalNotice);
              if(this.allPersonalNotice.length > 0){
                this.showNothingMsg = false;
              }else{
                this.showNothingMsg = true;
              }
              // console.log('show nothing value : ', this.showNothingMsg);
              this.presentLoading(false);             
            }else{
              this.presentLoading(false);
            }          
      });
  }






  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);
    console.log('local data : ', this.localUserData);
      
  }






  initLoader() {
		this.loading = this.loadingController.create({
			spinner: 'hide',
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
	}





// |------------------------------------------------------------------
// |--------- show loading method(control show loading) ----------
// |------------------------------------------------------------------
  presentLoading(load: boolean) {
		if (load) {
			return this.loading.present();
		}
		else {
			setTimeout(() => {
				return this.loading.dismiss();
			}, 500);
		}
  }





  presentProfileModal(id) {
    // console.log('clicked...', id); 
    let filterNotice = this.allPersonalNotice.filter(function(item) {
      return item.id == id;
    });
       
    let profileModal = this.modalCtrl.create(NoticeModalPage, { notice: filterNotice[0] });
    profileModal.present();
  }






  dismiss() {
    this.viewCtrl.dismiss();
  }






  showPdf(url: string) {   
    this.document.viewDocument(url, 'application/pdf', {});
  }
}
