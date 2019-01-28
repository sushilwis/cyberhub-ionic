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


@IonicPage()
@Component({
  selector: 'page-school-details',
  templateUrl: 'school-details.html',
})


export class SchoolDetailsPage {
  loading: any;
  schoolDetails: any;
  schoolId: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: Http, public loadingController: LoadingController, private menuCtrl: MenuController) {
    this.schoolId = navParams.get('id');
    this.getDetails(this.schoolId);
    this.initLoader();
    this.menuCtrl.enable(false);
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
    this.navCtrl.push(LibraryListPage,{ id: this.schoolId });
  }
  
  goToCalender() {
    this.navCtrl.push(SchoolcalenderPage, {
      id: this.schoolId
    });
  }

  goToHome() {
    this.navCtrl.push(HomePage);
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
