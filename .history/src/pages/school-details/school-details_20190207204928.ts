import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';

import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { PdfDownloadPage } from '../pdf-download/pdf-download';
import { LibraryListPage } from '../library-list/library-list';
import { LiveStreamPage } from '../live-stream/live-stream';
import { SchoolcalenderPage } from '../schoolcalender/schoolcalender';
import { apiUrl } from '../../apiUrl'
import { HomePage } from '../home/home';
import { StudentNoticeBoardPage } from '../student-notice-board/student-notice-board';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { StaffInfoPage } from '../staff-info/staff-info';


@IonicPage()
@Component({
  selector: 'page-school-details',
  templateUrl: 'school-details.html',
})


export class SchoolDetailsPage {
  loading: any;
  schoolDetails: any;
  schoolId: string;
  localUserData: any;
  pet;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: Http, public loadingController: LoadingController, private menuCtrl: MenuController) {
    this.getUserDataFromLocal();
    this.schoolId = navParams.get('id');
    this.getDetails(this.schoolId);
    this.initLoader();
    this.menuCtrl.enable(false);
    this.pet = "about";
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolDetailsPage');
  }




  initLoader() {
    this.loading = this.loadingController.create({
      spinner: 'hide',
      content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
    });
  }




  getDetails(id: string) {
    // this.presentLoading(true);
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let data = {
      org_id: id,
    }

    console.log('data : ', data);    

    this.http.post(`${apiUrl.url}org/getdetail`, data, {headers: header}).
      map(res => res.json()).subscribe(data => {
        // this.presentLoading(false);
        this.schoolDetails = data.data[0];
        console.log(this.schoolDetails);        
      })
  }






	goToAllPdf(){
		this.navCtrl.push(PdfDownloadPage,{
      id: this.schoolId
    });
  }

  




  gotoLiveStream() {
    this.navCtrl.push(LiveStreamPage);
  }

  goToLibrary() {
    this.navCtrl.push(LibraryListPage, { id: this.schoolId });
  }
  
  goToCalender() {
    this.navCtrl.push(SchoolcalenderPage, {
      id: this.schoolId
    });
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





  goToNotice() {
    console.log("org ID : ", this.schoolId);    
    this.navCtrl.push(StudentNoticeBoardPage, { id: this.schoolId });
  }





  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);
    // console.log('local data : ', this.localUserData);      
  }





  presentLoading(load: boolean) {
    if (load){
      return this.loading.present();
    }
    else{
      setTimeout(() => {
        return this.loading.dismiss();
      }, 500);
    }
  }





}
