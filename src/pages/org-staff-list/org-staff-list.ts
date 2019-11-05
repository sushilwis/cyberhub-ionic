import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { apiUrl } from '../../apiUrl';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-org-staff-list',
  templateUrl: 'org-staff-list.html',
})
export class OrgStaffListPage {

  org_id: any;
  imageFileName: any = "assets/imgs/student-icon.png";
  profile_image: string;
  localUserData: any;
  allStaffList: any = [];
  showLoader: boolean;
  alldepts: any;
  copyallStaffList: any;
  orgShiftLists: any;
  shift: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.org_id = this.navParams.get('org_id');
    console.log(this.org_id);
    this.getOrgStaffList();
    this.getdeptList();
    this.getShiftLists();
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgStaffListPage');
  }



  getdeptList() {
    this.http.get(`${apiUrl.url}classsection/depts`).map(res => res.json()).subscribe((data: any) => {
      if (data.data) {
        this.alldepts = data.data;
      }
    })
  }



  onChooseDept(_e:any) {
    console.log(_e);
    this.copyallStaffList = this.allStaffList.filter(ele => ele.dept_id == _e && ele.shift_id == this.shift);
    console.log(this.copyallStaffList);    
  }



  getOrgStaffList(){
    this.showLoader = true
    let data = {
      org_id: this.org_id
    }
    this.http.post(`${apiUrl.url}staff/orglist`, data)
    .map(res => res.json()).subscribe((data: any) => {
      console.log(data);
      if (data.data) {
        this.copyallStaffList = [];
        data.data.forEach(element => {
          if (element.user && element.user[0].user_type_id == 2) {
            this.allStaffList.push(element);            
          }
          this.showLoader = false
        });

        console.log('all staff list...............', this.allStaffList);                 
        // this.allStaffList = data.data;
      }
    })
  }




  returnImage(data) {
    // console.log(data);    
    if (data.profile_image) {
      return data.profile_image
    }else{
      return 'assets/imgs/student-icon.png';
    }
  }




  getShiftLists() {
    this.showLoader = true;
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let data = {
      org_id: this.org_id
    };

    // this.checkshift = [];
    this.http
      .post(`${apiUrl.url}shift/orgshiftlist`, data, { headers: header })
      .map(res => res.json())
      .subscribe(data => {
        // console.log("Org shift list ", data.data);
        this.showLoader = false;
        this.orgShiftLists = data.data;
      });
  }




  onChooseShift(){
    console.log('shift ID :...................', this.shift);    
  }




}
