import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { LiveStreamPage } from '../live-stream/live-stream';
import { AttendancePage } from '../attendance/attendance';
import { RoutinePage } from '../routine/routine';
import { RequestOptions, Headers, Http, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { DocumentViewer } from '@ionic-native/document-viewer';

/**
 * Generated class for the StudentNoticeBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-notice-board',
  templateUrl: 'student-notice-board.html',
})
export class StudentNoticeBoardPage implements OnInit {
  localUserData: any;
  loading: any;
  allNotice: any;

  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams, public menuCtrl: MenuController, public loadingController: LoadingController, public modalCtrl: ModalController, public jsonp: Jsonp, public viewCtrl: ViewController, public document: DocumentViewer) {
    this.menuCtrl.enable(false);
    this.initLoader();
  }

  ngOnInit(){
    // this.getUserDataFromLocal();
    this.getNoticeList();
  }

  ionViewDidLoad() {
    console.log('StudentNoticeBoardPage');
  }
   goToHome(){
		this.navCtrl.setRoot(StudentOwndetailsPage);
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
              console.log('Receive data : ', data.data); 
              this.allNotice = data.data;            
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
    let filterNotice = this.allNotice.filter(function(item) {
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








@Component({
  templateUrl: 'notice-modal.html'
})
export class NoticeModalPage implements OnInit {
  notice: any;
 constructor(params: NavParams, public platform: Platform, public viewCtrl: ViewController, public menuCtrl: MenuController, public navCtrl: NavController) {
  //  console.log('book', params.get('book'));  
  this.notice = params.get('notice');   
 }

 ngOnInit(){  
  console.log(this.notice); 
 }


 dismiss() {
  this.viewCtrl.dismiss();
  }
}
