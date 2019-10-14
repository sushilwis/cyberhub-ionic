import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { apiUrl } from '../../apiUrl';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';


/**
 * Generated class for the OrgStaffListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.org_id = this.navParams.get('org_id');
    console.log(this.org_id);
    this.getOrgStaffList()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgStaffListPage');
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
        data.data.forEach(element => {
          if (element.user[0].user_type_id == 2) {
            this.allStaffList.push(element)
          }
          this.showLoader = false
        });
        
        // this.allStaffList = data.data;
      }
    })
  }

  returnImage(data) {
    if (data.profile_image) {
      return data.profile_image
    }else{
      return 'assets/imgs/student-icon.png';
    }
  }

}
