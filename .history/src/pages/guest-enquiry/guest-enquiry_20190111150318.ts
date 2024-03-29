import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SchoolListingPage } from '../school-listing/school-listing';
import { SchoolDetailsPage } from './../school-details/school-details';
import { apiUrl } from '../../apiUrl';
/**
 * Generated class for the GuestEnquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-guest-enquiry",
  templateUrl: "guest-enquiry.html"
})
export class GuestEnquiryPage {
  @ViewChild("search") searchbox;

  isSearchbarOpened = false;
  searchQuery: string = "";
  items = [];
  allSchoolsList: any;
  list = [];
  idList = [];
  country: number;
  state: number;
  jela: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public toastCtrl: ToastController
  ) {
    this.getData();
  }

  getData() {
    this.http
      .get(`${apiUrl.url}org/alllist`)
      .map(res => res.json())
      .subscribe(data => {
        this.allSchoolsList = data;
        console.log("student list : ", this.allSchoolsList);
        data.data.forEach(ele => {
          const obj = {
            id: ele.id,
            name: ele.org_name
          };
          this.list.push(obj);
        });
      });
  }

  initializeItems() {
    this.items = this.list;
  }

  onSearchButtonClick() {
    this.isSearchbarOpened = true;
    setTimeout(() => {
      this.searchbox.setFocus();
    }, 150);
  }

  schoolsDetails(id) {
    this.navCtrl.push(
      SchoolDetailsPage,
      {
        id: id
      },
      { animation: "transition", duration: 1000, direction: "forward" }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad GuestEnquiryPage");
  }

  goToListing() {
    if (this.country == null && this.state == null) {
      this.presentToast(`State and Country Can't be Blank`)
    } else {
      let data = {
        country: this.country,
        state: this.state,
        jela: this.jela
      };
      this.navCtrl.push(SchoolListingPage, data);
    }
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    // console.log('value : ', ev.target.value);
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;
    // console.log(this.items);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.items = this.items.filter(item => {
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
  presentToast(msg:string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
