import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { LiveStreamPage } from '../live-stream/live-stream';
import { AttendancePage } from '../attendance/attendance';
import { RoutinePage } from '../routine/routine';
import { RequestOptions, Headers, Http, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';


@IonicPage()
@Component({
  selector: 'page-student-notice-board',
  templateUrl: 'student-notice-board.html',
})
export class StudentNoticeBoardPage implements OnInit {
  localUserData: any;
  loading: any;
  allNotice: any = [];
  page: any = 0;
  perPage: any = 4;
  totalData: any = 0;
  totalPage: any = 0;
  pdfSrc: any;

  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams, public menuCtrl: MenuController, public loadingController: LoadingController, public modalCtrl: ModalController, public jsonp: Jsonp, public viewCtrl: ViewController, public document: DocumentViewer) {
    this.menuCtrl.enable(false);
    this.initLoader();

    for (let i = 0; i < 5; i++) {
      this.allNotice.push(this.allNotice.length);
    }
  }

  ngOnInit(){
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






  async getNoticeList(infiniteScroll?) {

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
            // console.log('Receive notice data : ', data.data);
            if(data.data.length > 1) {
              console.log('Receive data : ', data.data); 
              this.allNotice = await data.data;
              this.totalData = await data.data.length;
              this.totalPage = await Math.floor(this.totalData/5);            
              this.presentLoading(false);             
            } else {
              this.presentLoading(false);
            }          
      });
  }






  doInfinite(infiniteScroll) {
    this.page = this.page+1;
    console.log('Begin async operation');

    if (this.page === this.totalPage) {
      infiniteScroll.enable(false);
    }

    setTimeout(() => {

      for (let i = 0; i < 5; i++) {
        this.allNotice.push(this.allNotice.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500)
  }






  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);
    // console.log('local data : ', this.localUserData);      
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
    alert(`${apiUrl.url}public/uploads/Notices/${url}`); 
    this.pdfSrc = `${apiUrl.url}public/uploads/Notices/${url}`;      
    this.document.viewDocument(`${apiUrl.url}public/uploads/Notices/${url}`, 'application/pdf', {});
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
