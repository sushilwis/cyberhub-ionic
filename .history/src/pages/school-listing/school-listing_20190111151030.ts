import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http } from "@angular/http";
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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SchoolListingPage");
  }

  goToListingDetails() {
    this.navCtrl.push(SchoolDetailsPage);
  }
}
