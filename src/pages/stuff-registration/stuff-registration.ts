import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,  MenuController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { StudentLoginPage } from '../student-login/student-login';
import { SchoolDetailsPage } from '../school-details/school-details';
import { SchoolListingPage } from '../school-listing/school-listing';
import { StdRegPage } from '../std-reg/std-reg';
import { StaffLoginPage } from '../staff-login/staff-login';


@IonicPage()
@Component({
  selector: 'page-stuff-registration',
  templateUrl: 'stuff-registration.html',
})
export class StuffRegistrationPage {

  @ViewChild("search") searchbox;

  isSearchbarOpened = false;
  loading: any;
  localUserData: any;
  collegeList: any;
  college: any;
  mobileNo: any;

  searchQuery: string = "";
  items = [];
  allSchoolsList: any;
  inputShowValue: any;
  list = [];
  idList = [];
  country: number;
  state: number;
  jela: string;
  type: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public menuCtrl: MenuController, public loadingController: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.menuCtrl.enable(true);
    this.initLoader();
    // this.getData();
  }

  ngOnInit(){
    this.getCollege();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StuffRegistrationPage');
  }



  getCollege() {
    this.presentLoading(true);

		var header = new Headers();
		header.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: header});

		this.http.get(`${apiUrl.url}org/alllist`, options).
			map(res => res.json()).subscribe(data => {				
				// console.log(data)
				if (data.data) {
          this.presentLoading(false);
          // console.log('receive college list : ', data);
          this.collegeList = data.data;					
				}
			});
  }





  presentLoading(load: boolean) {
		if (load) {
			return this.loading.present();
		} else {
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




  registrationSubmit() {
	
      // this.presentLoading(true);
  
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({headers: headers});
  
      let data = {
        org_id: this.college,
        mobile_no: this.mobileNo
      }

      console.log('sent stuff reg data : ', data);      

      this.http.post(`${apiUrl.url}user/register`, data, options).
        map(res => res.json()).subscribe(data => {
          console.log('after stuff reg :... ', data);          	  
          if (data.data) {
            // this.presentLoading(false);
            // console.log('student data : ', data);	
            this.showAlert('Success!', `Your Username is : ${data.data.username} and Password is : ${data.data.hint}. Please login to continue.`);
            this.navCtrl.push(StaffLoginPage);				
          }else{
            this.showAlert('Error!', `Sorry, Invalid Credential !.`);
          }
      });    
  }





  showAlert(title, msg) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    
    alert.present();
  }




  getItems(ev: any) {
    // Reset items back to all of the items
    if(ev.target.value == ""){
      this.isSearchbarOpened = false;
      this.items = [];
      return;
    }

    this.isSearchbarOpened = true;
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

      console.log('items : ...', this.items);      
    }
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
      this.navCtrl.push(SchoolListingPage, {data});
    }
  }




  initializeItems() {
    this.items = this.list;
  }




  schoolsDetails(org) {
    this.inputShowValue = org.name;
    this.college = org.id;
    
    this.items = [];
  }




  // getData() {
  //   this.http
  //     .get(`${apiUrl.url}org/alllist`)
  //     .map(res => res.json())
  //     .subscribe(data => {
  //       this.presentLoading(false);
  //       this.allSchoolsList = data;
  //       console.log("student list : ", this.allSchoolsList);
  //       data.data.forEach(ele => {
  //         const obj = {
  //           id: ele.id,
  //           name: ele.org_name
  //         };
  //         this.list.push(obj);
  //       });
  //     });
  // }





  getData() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let data = {
      type: this.type,
      is_reg: true,
    }
    
    this.http
      .post(`${apiUrl.url}org/orgsearchbytype`, data, options)
      .map(res => res.json())
      .subscribe(data => {
        // this.presentLoading(false);
        this.allSchoolsList = data.data;
        console.log("school list..... : ", this.allSchoolsList);
        // console.log("school list length..... : ", data.data.length);
        if(this.allSchoolsList.length > 0){
          this.allSchoolsList.forEach(ele => {
            const obj = {
              id: ele.id,
              name: ele.org_name
            };
            this.list.push(obj);
          });

          console.log("arr list..... : ", this.list);
        }        
      });
  }




  onSearchButtonClick() {
    this.isSearchbarOpened = true;
    setTimeout(() => {
      this.searchbox.setFocus();
    }, 150);
  }




  presentToast(msg:string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }




  goToStuffLogin(){
    this.navCtrl.push(StaffLoginPage);
  }



}
