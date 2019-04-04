import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,  MenuController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { StudentLoginPage } from '../student-login/student-login';
import { SchoolDetailsPage } from '../school-details/school-details';
import { SchoolListingPage } from '../school-listing/school-listing';

/**
 * Generated class for the StdRegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-std-reg',
  templateUrl: 'std-reg.html',
})
export class StdRegPage {
  @ViewChild("search") searchbox;

  isSearchbarOpened = false;
  loading: any;
  localUserData: any;
  collegeList: any;
  college: any;
  mobileNo: any;
  idNo: any;

  searchQuery: string = "";
  items = [];
  allSchoolsList: any;
  inputShowValue: any;
  list = [];
  idList = [];

  type: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public menuCtrl: MenuController, public loadingController: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.menuCtrl.enable(true);
    this.initLoader();
  }


  ngOnInit(){
    // this.getCollege();
  }
  



  ionViewDidLoad() {
    console.log('ionViewDidLoad StdRegPage');
  }



  goToLogin(){
    this.navCtrl.push(StudentLoginPage);
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




  registrationSubmit() {
	
      this.presentLoading(true);
  
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({headers: headers});
  
      let data = {
        org_id: this.college,
        mobile_no: this.mobileNo,
        id_no: this.idNo,
        type: this.type,
      }

      // console.log(data);      
  
      this.http.post(`${apiUrl.url}user/register`, data, options).
        map(res => res.json()).subscribe(data => {          	  
          if (data.data) { 
            this.presentLoading(false);           
            console.log('student data : ', data);	
            this.showAlert('Success!', `Your Username is : ${data.data[0].username} and Password is : ${data.data[0].hint}. Please login to continue`);				
          }else{
            this.presentLoading(false);
            this.showAlert('Error!', `${data.Error}`);
          }
      });    
  }





  // showAlert(title, msg) {
  //   const alert = this.alertCtrl.create({
  //     title: title,
  //     subTitle: msg,
  //     buttons: ['OK']
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
    console.log('item arr : ', this.items);
    // console.log('value : ', ev.target.value);
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




  // goToListing() {
  //   if (this.country == null && this.state == null) {
  //     this.presentToast(`State and Country Can't be Blank`)
  //   } else {
  //     let data = {
  //       country: this.country,
  //       state: this.state,
  //       jela: this.jela
  //     };
  //     this.navCtrl.push(SchoolListingPage, {data});
  //   }
  // }




  initializeItems() {
    this.items = this.list;
  }




  schoolsDetails(org) {
    this.isSearchbarOpened = false;
    this.inputShowValue = org.name;
    this.college = org.id;
    
    this.items = [];
  }




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
        // console.log("school list... : ", this.allSchoolsList);
        // console.log("school list length..... : ", data.data.length);
        if(this.allSchoolsList.length > 0){
          this.list = [];
          this.allSchoolsList.forEach(ele => {
            const obj = {
              id: ele.id,
              name: ele.org_name,
              city: ele.org_city,
              pin: ele.pin,
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
      //this.searchbox.setFocus();
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
