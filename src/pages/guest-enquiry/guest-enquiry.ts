import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, LoadingController} from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { SchoolListingPage } from '../school-listing/school-listing';
import { SchoolDetailsPage } from './../school-details/school-details';
import { apiUrl } from '../../apiUrl';
import { HomePage } from '../home/home';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { StaffInfoPage } from '../staff-info/staff-info';
import { SearchOrganisationPage } from '../search-organisation/search-organisation';
import { HttpParams } from '@angular/common/http';


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
  localUserData: any;
  states: any;
  loading: any;
  dists: any;
  dist: any;
  type: any;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public toastCtrl: ToastController,
    public loadingController: LoadingController
  ) {
    this.getUserDataFromLocal();
    // this.getData();
    console.log(this.navCtrl.getViews());
    this.platform.registerBackButtonAction(() => {
      if (this.navCtrl.getViews().length > 1) {
        this.navCtrl.pop();
      }
    })

    this.initLoader();
  }



  // loc/states   {country_id: 101}
  // loc/dists    {state_id: }




  // getData() {
  //   this.http
  //     .get(`${apiUrl.url}org/alllist`)
  //     .map(res => res.json())
  //     .subscribe(data => {
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
  


  goToSearchOrg(){
    this.navCtrl.push(SearchOrganisationPage);    
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




  goToHome() {
    if(this.localUserData){      
      if(this.localUserData.user_type_id == 1){
        this.navCtrl.setRoot(StudentOwndetailsPage);
      }else{
        this.navCtrl.setRoot(StaffInfoPage);
      }      
    } else {
      this.navCtrl.setRoot(HomePage);
    }    
  }





  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);
    // console.log('local data : ', this.localUserData);      
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




  presentToast(msg:string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }




  onChangeCountry(){
        this.presentLoading(true);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});
    
        let data = {
          country_id: this.country,
        }

        // loc/states   {country_id: 101}
        this.http.post(`${apiUrl.url}loc/states`, data, options).
          map(res => res.json()).subscribe(data => {				
            console.log('state data : ', data.data);   
            if(data.data.length > 0){
              this.presentLoading(false);
              // this.loading.dismiss();
              this.states = data.data;
              // this.showAlert('Password Changed Successfully.');
              // this.navCtrl.push(AccountPage);
            }else{
              // this.presentLoading(false);
              // this.showAlert(data.mssg);
              // this.loading.dismiss();
            }       
        });
  }







  onChangeState(){
    // this.presentLoading(true);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});

    let data = {
      state_id: this.state,
    }

    
    this.http.post(`${apiUrl.url}loc/dists`, data, options).
      map(res => res.json()).subscribe(data => {				
        console.log('dist data : ', data.data);   
        if(data.data.length > 0){
          // this.presentLoading(false);
          // this.loading.dismiss();
          this.dists = data.data;
          // this.showAlert('Password Changed Successfully.');
          // this.navCtrl.push(AccountPage);
        }else{
          // this.presentLoading(false);
          // this.loading.dismiss();
          // this.showAlert(data.mssg);
        }       
    });
  }







  onChangeDist() {
    this.presentLoading(true);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});

    const params = new HttpParams()
    .set('country_id', this.country.toString())
    .set('state_id', this.state.toString())
    .set('dist_id', this.dist.toString())
    .set('type_id', '2');

    // let data = {
    //     params : {
    //     country_id: this.country,
    //     state_id: this.state,
    //     dist_id: this.dist,
    //     type_id: this.type,
    //   }
    // }

    // let formData = new FormData();
    // formData.append('country_id', this.country.toString());
    // formData.append('state_id', this.state.toString());
    // formData.append('dist_id', this.dist.toString());
    // formData.append('type_id', this.type.toString());

    
    this.http.get(`${apiUrl.url}org/search?country=${this.country}&state=${this.state}&dist=${this.dist}&type=2`).
      map(res => res.json()).subscribe(data => {				
          console.log('dist data : ', data.data);   
          this.presentLoading(false);      
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
      dismissOnPageChange: true,
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
  }





  
}
