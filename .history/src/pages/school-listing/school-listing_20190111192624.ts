import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { SchoolDetailsPage } from "./../school-details/school-details";
import { apiUrl } from "../../apiUrl";
/**
 * Generated class for the SchoolListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-school-listing",
  templateUrl: "school-listing.html"
})
export class SchoolListingPage {
  orgList: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public toastCtrl: ToastController,
    public loadingController: LoadingController
  ) {}

  ionViewDidLoad() {
    this.initLoader();
    let data = this.navParams.get("data");
    // console.log(data);
    this.getOrganization(data);
    console.log("ionViewDidLoad SchoolListingPage");
  }

  goToListingDetails(id) {
    this.navCtrl.push(SchoolDetailsPage, { id });
  }
  getOrganization(data: object) {
    this.presentLoading(true);
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    this.http
      .post(`${apiUrl.url}org/search`, data, options)
      .map(res => res.json())
      .subscribe(data => {
        if (data.data) {
          this.presentLoading(true);
          this.orgList = data.data;
          console.log(this.orgList);
        }
      });
  }

  initLoader() {
    this.loading = this.loadingController.create({
      spinner: "hide",
      content:
        '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
    });
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
