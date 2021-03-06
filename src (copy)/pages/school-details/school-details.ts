import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController, Platform } from 'ionic-angular';

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


export class SchoolDetailsPage implements OnInit {
  loading: any;
  schoolDetails: any;
  schoolId: string;
  localUserData: any;
  pet;
  weatherdata: any;
  temp: number;
  weatherIcon: string;
  pin: any;
  maxTemp: number;
  minTemp: number;
  humidity: any;
  showLoader: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: Http, public loadingController: LoadingController, private menuCtrl: MenuController, public platform: Platform) {
    this.showLoader = true;
    this.getUserDataFromLocal();
    this.schoolId = navParams.get('id');
    
    // this.initLoader();
    this.menuCtrl.enable(false);
    this.pet = "about";
    this.platform.registerBackButtonAction(() => {
      if (this.navCtrl.getViews().length > 1) {
        this.navCtrl.pop();
      }
    });
  }


  ngOnInit() {
    this.getDetails(this.schoolId);
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolDetailsPage');
    this.showLoader = false;
  }




  // initLoader() {
  //   this.loading = this.loadingController.create({
  //     spinner: 'hide',
  //     content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
  //   });
  // }




  getDetails(id: string) {
    // this.presentLoading(true);
    this.showLoader = true;
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
        this.pin = data.data[0].pin.replace(' ','');
        // this.pin;
        this.getWeatherData();
        console.log(this.pin);
        console.log(this.schoolDetails);
        this.showLoader = false;
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





  // presentLoading(load: boolean) {
  //   if (load){
  //     return this.loading.present();
  //   }
  //   else{
  //     setTimeout(() => {
  //       return this.loading.dismiss();
  //     }, 500);
  //   }
  // }





  getWeatherData() {
    // b60c3e9d5ed15819d78fd18b00e5cfbb
    // https://openweathermap.org/img/w/
    this.showLoader = true;
    var headers = new Headers();
		headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.pin},in&appid=c02a8ac947999e382330611c5f2c508b`).
			map(res => res.json()).subscribe(data => {				
        // console.log('weather data.../',data); 
        this.weatherdata = data.main;
        this.temp = Math.round(parseInt(this.weatherdata.temp)-273.15);
        this.maxTemp = Math.round(parseInt(this.weatherdata.temp_max)-273.15);
        this.minTemp = Math.round(parseInt(this.weatherdata.temp_min)-273.15);
        this.humidity = this.weatherdata.humidity;

        this.weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        this.showLoader = false; 
        // console.log('weather img link : ', this.temp );     
			});
  }





}
