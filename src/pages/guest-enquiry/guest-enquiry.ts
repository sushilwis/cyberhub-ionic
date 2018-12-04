import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  selector: 'page-guest-enquiry',
  templateUrl: 'guest-enquiry.html',
})
export class GuestEnquiryPage {

  @ViewChild('search') searchbox;

  isSearchbarOpened = false;
  searchQuery: string = '';
  items=[];
  allSchoolsList: any;
  list = [];
  idList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.getData();
  }
  getData() {
    this.http.get(`${apiUrl.url}/schools`).
      map(res => res.json()).subscribe(data =>{
        this.allSchoolsList = data;
        data.forEach(ele => {
          const obj = {
            'id': ele.id,
            'name': ele.school_name
          }
          this.list.push(obj);

        });
    });
  }
  initializeItems(){
    this.items = this.list;
  }
  onSearchButtonClick(){
    this.isSearchbarOpened = true;
    setTimeout(() => {
      this.searchbox.setFocus();
    }, 150);

  }
  schoolsDetails(id){
    this.navCtrl.push(SchoolDetailsPage, {
      id: id
    },{ animation: 'transition', duration: 1000, direction: 'forward' });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestEnquiryPage');
  }

	goToListing(){
		this.navCtrl.push(SchoolListingPage);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item['name'].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
