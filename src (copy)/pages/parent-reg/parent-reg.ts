import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { ParentsLoginPage } from '../parents-login/parents-login';
import { SchoolListingPage } from '../school-listing/school-listing';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';

/**
 * Generated class for the ParentRegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parent-reg',
  templateUrl: 'parent-reg.html',
})
export class ParentRegPage {

  @ViewChild("search") searchbox;

  isSearchbarOpened = false;
  loading: any;
  localUserData: any;
  collegeList: any;
  college: any;
  institute: any;
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
  identityNo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public menuCtrl: MenuController, public loadingController: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentRegPage');
  }


  disabledField() {
    if (this.type == '' || this.type == null) {
      return true;
    }else{
      return false;
    }
  }


  goToParentsLogin(){
    this.navCtrl.push(ParentsLoginPage);
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
        phone: this.mobileNo,
        adhar: this.identityNo,
      }

      console.log('sent stuff reg data : ', data);      

      this.http.post(`${apiUrl.url}parent/add`, data, options).
        map(res => res.json()).subscribe(data => {
          console.log('after parent reg :... ', data);          	  
          if (data.data) {
            this.showAlert('Success!', `Your Username : ${data.data.username}, Password : ${data.data.hint}. Please login to continue`);
            this.navCtrl.push(ParentsLoginPage);				
          }else{
            this.showAlert('Error!', `Invalid Credential !`);
          }
      });    
  }





  // showAlert(title, msg) {
  //   const alert = this.alertCtrl.create({
  //     title: title,
  //     subTitle: msg,
  //     buttons: [{
  //       text: 'OK',
  //       role: 'ok',
  //       cssClass: 'alertOkBtn',
  //       handler: (blah) => {
  //         console.log('Ok clicked.');
  //       }
  //     }]
  //   });
    
  //   alert.present();
  // }




  showAlert(title, msg) {
    const alert = this.alertCtrl.create({
      title: title,
      cssClass: "confirmAlert",
      subTitle: msg,
      buttons: [
        {
          text: 'OK',
          cssClass: "okBtn",
          handler: () => {
            // this.navCtrl.push(WelcomeGuestPage);
          }
        }
      ]
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

      console.log('college list : ...', this.items);      
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
    this.isSearchbarOpened = false;
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
              name: ele.org_name,
              landMark: ele.landmark,
              city: ele.org_city,
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

}
