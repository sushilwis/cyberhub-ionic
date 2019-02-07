import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { StuffChangePassPage } from '../stuff-change-pass/stuff-change-pass';
import { StuffEditPage } from '../stuff-edit/stuff-edit';

/**
 * Generated class for the ParentsAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parents-account',
  templateUrl: 'parents-account.html',
})
export class ParentsAccountPage {
  localUserData: any;
  orgDetails: any;
  loading: any;
  teacherDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingController: LoadingController, private http: Http) {
    this.menuCtrl.enable(true);
    this.initLoader();
  }


  ngOnInit(){
    this.getUserDataFromLocal();
    this.getTeacherDetails();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentsAccountPage');
  }


  goToPassword() {
    console.log('change pass...');
    this.navCtrl.push(StuffChangePassPage);    
  }


  goToEditProfile() {
    console.log('edit profile...');

    let editData = {
      id: this.teacherDetails.id,
      fName : this.teacherDetails.f_name,
      lName : this.teacherDetails.l_name,
      shortName : this.teacherDetails.short_name,
      qualification : this.teacherDetails.qualification,
    }

    this.navCtrl.push(StuffEditPage, {data: editData});
  }



  getTeacherDetails() {
    this.presentLoading(true);

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: headers});

		let data = {
      'master_id': this.localUserData.master_id,
      'org_id': this.localUserData.org_code
		}

		this.http.post(`${apiUrl.url}staff/details`, data, options).
			map(res => res.json()).subscribe(data => {				
				
				if (data.data[0]) {
          this.presentLoading(false);
          this.teacherDetails = data.data[0];
          console.log('student details : ', data.data[0]);

          // if(data.data[0].nameclass){
          //   this.showSelectDepartmentBtn = false;
          // }else{
          //   this.showSelectDepartmentBtn = true;
          // }
				}
			});
  }






  presentLoading(load: boolean) {
		if (load) {
			return this.loading.present();
		}
		else {
			setTimeout(() => {
				return this.loading.dismiss();
			}, 1000);
		}
  }



  


  initLoader() {
		this.loading = this.loadingController.create({
			spinner: 'hide',
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
  }


  


  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);
    // console.log('local data : ', this.localUserData);    
  }




}
