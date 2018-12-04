import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { PdfDownloadPage } from '../pdf-download/pdf-download';
import { LibraryListPage } from '../library-list/library-list';
import { LiveStreamPage } from '../live-stream/live-stream';
import { SchoolcalenderPage } from '../schoolcalender/schoolcalender';
import { apiUrl } from '../../apiUrl'
/**
 * Generated class for the SchoolDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    private http: Http, public loadingController: LoadingController) {
    this.schoolId = navParams.get('id');
    this.getDetails(this.schoolId);
    this.initLoader();
    this.presentLoading(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolDetailsPage');

  }
  initLoader() {
    this.loading = this.loadingController.create({
      spinner: 'hide',
      content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
    });
  };
  getDetails(id: string){
    this.http.get(`${apiUrl.url}/school/${id}`).
      map(res => res.json()).subscribe(data => {
        this.presentLoading(false);
        this.schoolDetails = data;
      })
  }
	goToAllPdf(){
		this.navCtrl.push(PdfDownloadPage,{
      id: this.schoolId
    });
	}
  gotoLiveStream(){
    this.navCtrl.push(LiveStreamPage);
  }
  goToLibrary(){
    this.navCtrl.push(LibraryListPage);
  }
  goToCalender(){
    this.navCtrl.push(SchoolcalenderPage, {
      id: this.schoolId
    });
  }
  presentLoading(load: boolean) {
    if (load){
      return this.loading.present();
    }
    else{
      setTimeout(() => {
        return this.loading.dismiss();
      }, 1000);
    }

  }
}
