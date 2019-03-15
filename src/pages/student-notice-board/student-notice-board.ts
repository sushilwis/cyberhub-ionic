import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { LiveStreamPage } from '../live-stream/live-stream';
import { AttendancePage } from '../attendance/attendance';
import { RoutinePage } from '../routine/routine';
import { RequestOptions, Headers, Http, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { FileOpener } from "@ionic-native/file-opener";
import { HomePage } from '../home/home';
import { StaffInfoPage } from '../staff-info/staff-info';
import * as moment from 'moment';


@IonicPage()
@Component({
  selector: "page-student-notice-board",
  templateUrl: "student-notice-board.html"
})
export class StudentNoticeBoardPage implements OnInit {
  notice: string = "general";
  localUserData: any;
  loading: any;
  allNotice: any = [];
  page: any = 0;
  perPage: any = 4;
  totalData: any = 0;
  totalPage: any = 0;
  pdfSrc: any;
  guestOrgId: any;
  departmentalNotice: any = [];
  generalNotice: any = [];
  personalNotice: any = [];

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    private http: Http,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public loadingController: LoadingController,
    public modalCtrl: ModalController,
    public jsonp: Jsonp,
    public viewCtrl: ViewController,
    private fileOpener: FileOpener
  ) {
    this.getUserDataFromLocal();
    this.menuCtrl.enable(false);
    this.initLoader();

    for (let i = 0; i < 5; i++) {
      this.allNotice.push(this.allNotice.length);
    }

    this.platform.registerBackButtonAction(() => {
      if (this.navCtrl.getViews().length > 1) {
        this.navCtrl.pop();
      }
    });
    
  }

  ngOnInit() {
    this.guestOrgId = this.navParams.get('id');
    // console.log('guest org id : ', this.guestOrgId);    
    this.getNotice();
  }

  ionViewDidLoad() {
    console.log("StudentNoticeBoardPage");
  }

  goToHome() {
    if(this.localUserData){      
      if(this.localUserData.user_type_id == 1){
        this.navCtrl.setRoot(StudentOwndetailsPage);
      }else{
        this.navCtrl.setRoot(StaffInfoPage);
      }      
    } else {
      this.navCtrl.setRoot(HomePage);
    }    
  }

  gotoLiveStream() {
    this.navCtrl.push(LiveStreamPage);
  }
  goToAttendance() {
    this.navCtrl.push(AttendancePage);
  }
  goToRoutine() {
    this.navCtrl.push(RoutinePage);
  }






  getNoticeList(infiniteScroll?) {

    this.presentLoading(true);
    // this.getUserDataFromLocal();
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let data = {
      org_id: this.localUserData.org_code,
      user_type_id: this.localUserData.user_type_id,
      master_id: this.localUserData.master_id
    };

    // console.log('Data sent : ', data);
    this.http
      .post(`${apiUrl.url}notice/get`, data, { headers: header })
      .map(res => res.json())
      .subscribe(async data => {
        // console.log('Receive notice data : ', data.data);
        if (data.data.length > 1) {
          console.log("notice list : ", data.data);
          this.allNotice = await data.data;
          this.allNotice.forEach(item => {
            item.timeDifference = this.createJavascriptDate(item.created_at);
          });
          this.filterAllNotices(this.allNotice);
          this.totalData = await data.data.length;
          this.totalPage = await Math.floor(this.totalData / 5);
          this.presentLoading(false);
        } else {
          this.presentLoading(false);
        }
      });
  }


  filterAllNotices(arr) {
    arr.forEach(item => {
      if(item.notiece_type_id == '1'){
        this.departmentalNotice.push(item);
      }
      if(item.notiece_type_id == '2'){
        this.generalNotice.push(item);
      }
      if(item.notiece_type_id == '3'){
        this.personalNotice.push(item);
      }
    });
  }


  createJavascriptDate(strDate) {
    // let date = await new Date();
    let onlyDate = strDate.substring(0, 10);
    let dateArr = onlyDate.split('-');
    let date = dateArr[0] + dateArr[1] + dateArr[2];
    //console.log('date str : ', date);
    return moment(date, "YYYYMMDD").fromNow();

  }

  getGuestNoticeList(infiniteScroll?) {

    this.presentLoading(true);
    // this.getUserDataFromLocal();
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let data = {
      org_id: this.guestOrgId
    };

    // console.log('Data sent : ', data);
    this.http
      .post(`${apiUrl.url}notice/get-general`, data, { headers: header })
      .map(res => res.json())
      .subscribe(async data => {
        // console.log('Receive notice data for guest : ', data);
        if (data.data.length > 1) {
          console.log("guest notice list : ", data.data);
          this.allNotice = await data.data;
          this.totalData = await data.data.length;
          this.totalPage = await Math.floor(this.totalData / 5);
          this.presentLoading(false);
        } else {
          this.presentLoading(false);
        }
      });
  }






  getNotice() {
    if(this.localUserData != null){
      this.getNoticeList();
    }else{
      this.getGuestNoticeList();
    }
  }









  doInfinite(infiniteScroll) {
    this.page = this.page + 1;
    console.log("Begin async operation");

    if (this.page === this.totalPage) {
      infiniteScroll.enable(false);
    }

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.allNotice.push(this.allNotice.length);
      }

      console.log("Async operation has ended");
      infiniteScroll.complete();
    }, 500);
  }

  getUserDataFromLocal() {
    let data = localStorage.getItem("userData");
    this.localUserData = JSON.parse(data);
    console.log('local data : ', this.localUserData);
  }

  initLoader() {
    this.loading = this.loadingController.create({
      spinner: "hide",
      content:
        '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
    });
  }

  // |------------------------------------------------------------------
  // |--------- show loading method(control show loading) ----------
  // |------------------------------------------------------------------
  presentLoading(load: boolean) {
    if (load) {
      return this.loading.present();
    } else {
      setTimeout(() => {
        return this.loading.dismiss();
      }, 500);
    }
  }

  presentProfileModal(id) {
    let filterNotice = this.allNotice.filter(function(item) {
      return item.id == id;
    });

    let profileModal = this.modalCtrl.create(NoticeModalPage, {
      notice: filterNotice[0]
    });
    profileModal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  // showPdf(url: string) {
  //   // alert(`${apiUrl.url}public/uploads/Notices/${url}`);
  //   let pdfurl = `${apiUrl.url}public/uploads/Notices/${url}`;
  //   this.fileOpener
  //     .open(pdfurl, "application/pdf")
  //     .then(dta => {
  //       alert(JSON.stringify(dta))
  //     })
  //     .catch(
  //       e => {}
  //       // alert(JSON.stringify(e))
  //       );
  // }
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
