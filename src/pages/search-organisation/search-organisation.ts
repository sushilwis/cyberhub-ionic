import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, ActionSheetController, AlertController, LoadingController } from 'ionic-angular';
import { apiUrl } from '../../apiUrl';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import { SchoolDetailsPage } from '../school-details/school-details';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { StaffInfoPage } from '../staff-info/staff-info';
import { HomePage } from '../home/home';
import { WelcomeGuestPage } from '../welcome-guest/welcome-guest';

/**
 * Generated class for the SearchOrganisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-organisation',
  templateUrl: 'search-organisation.html',
})
export class SearchOrganisationPage {
  @ViewChild("search") searchbox;
  allSchoolsList: any;
  list: any = [];
  localUserData: any;
  isSearchbarOpened: boolean;
  items: any[];
  organization: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public platform: Platform, public toastCtrl: ToastController, public actionsheetCtrl: ActionSheetController, public alertCtrl: AlertController, public loadingController: LoadingController) {
    this.getUserDataFromLocal();
    // this.getData();
    this.initLoader();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchOrganisationPage');
    this.showRadio();
  }





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
  //           name: ele.org_name,
  //           city: ele.org_city,
  //           landmark: ele.landmark,
  //           org: this.genOrgName(ele.org_type_id),
  //           org_logo: ele.org_logo,
  //           org_text: ele.org_text,
  //           email: ele.email,
  //           phone_no: ele.phone_no,
  //           website: ele.website
  //         };
  //         this.list.push(obj);
  //       });
  //     });
  // }

  initLoader() {
		this.loading = this.loadingController.create({
			spinner: 'hide',
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
  }



  getData(id) {
    this.presentLoading(true);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let data = {
      type: id,
      is_reg: 0,
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
                        is_registered: this.getRegisterStatus(ele.is_registered),
                        name: ele.org_name,
                        city: ele.org_city,
                        landmark: ele.landmark,
                        org: this.genOrgName(ele.org_type_id),
                        org_logo: ele.org_logo,
                        org_text: ele.org_text,
                        email: ele.email,
                        phone_no: ele.phone_no,
                        website: ele.website
                      };
            this.list.push(obj);
          });
          this.presentLoading(false);
          console.log("arr list..... : ", this.list);
        } else {
          this.presentLoading(false);
          // this.presentToast('Sorry, No Data Found !');
          this.showAlert('Alert!', 'No Data Found !');        
        }       
      });
  }




  getRegisterStatus(val) {
    if(val == '0'){
      return 'Pending';
    }
    if(val == '1'){
      return 'Registered';
    }
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




  genOrgName(org_type_id) {
    if(org_type_id == '1'){
      return 'SCHOOL';
    }
    if(org_type_id == '2'){
      return 'COLLEGE';
    }
    if(org_type_id == '3'){
      return 'UNIVERSITY';
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




  initializeItems() {
    this.items = this.list;
    console.log('All items', this.items);    
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
      duration: 4000,
      position: 'bottom'
    });
    toast.present();
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
  


  goToHome() {
    if(this.localUserData) {      
      if(this.localUserData.user_type_id == 1){
        this.navCtrl.setRoot(StudentOwndetailsPage);
      }else{
        this.navCtrl.setRoot(StaffInfoPage);
      }      
    } else {
      this.navCtrl.setRoot(HomePage);
    }    
  }




  openActionSheet(org) {
    let actionSheet = this.actionsheetCtrl.create({
      // title: `<img [src]="${org.org_logo}"/> ${org.name}`,
      title: `${org.name}`,
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: `Status :  ${org.is_registered}`,
          // role: 'destructive',
          icon: !this.platform.is('ios') ? 'checkbox-outline' : 'checkbox-outline',
          handler: () => {
            // console.log('Delete clicked');
            this.schoolsDetails(org.id);
          }
        },
        {
          text: `Phone :  ${org.phone_no}`,
          // role: 'destructive',
          icon: !this.platform.is('ios') ? 'call' : 'call',
          handler: () => {
            // console.log('Delete clicked');
            this.schoolsDetails(org.id);
          }
        },
        {
          text: `Website :  ${org.website}`,
          icon: !this.platform.is('ios') ? 'cloud' : 'cloud',
          handler: () => {
            // console.log('Share clicked');
            this.schoolsDetails(org.id);
          }
        },
        {
          text: `Email :  ${org.email}`,
          icon: !this.platform.is('ios') ? 'mail' : 'mail',
          handler: () => {
            // console.log('Play clicked');
            this.schoolsDetails(org.id);
          }
        }
      ]
    });


    actionSheet.present();
  }




  showAlert(title, msg) {
		const alert = this.alertCtrl.create({
      title: title,
      cssClass: "confirmAlert",
		  subTitle: msg,
		  buttons: [
        {
          text: 'Ok',
          cssClass: "okBtn",
          handler: () => {
            this.navCtrl.setRoot(WelcomeGuestPage);
          }
        }
      ]
    });
    
		alert.present();
  }



  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('SELECT WHAT TO SEARCH');

    alert.addInput(
      {
        type: 'radio',
        label: 'School',
        value: '1',
        checked: false
      }
    );

    alert.addInput(
      {
        type: 'radio',
        label: 'College',
        value: '2',
        checked: false
      }
    );

    alert.addInput(
      {
        type: 'radio',
        label: 'University',
        value: '3',
        checked: false
      }
    );

    // alert.addButton('Cancel');
    alert.addButton({
      text: 'Cancel',
      cssClass: "cancelBtn",
      handler: data => {
        console.log('cancel clicked :...', );
        this.navCtrl.setRoot(WelcomeGuestPage);        
      }
    });
    alert.addButton({
      text: 'OK',
      cssClass: "okBtn",
      handler: data => {
        // console.log(data);
        if(data != '' && data != null){
          this.getData(data); 
        }else{
          this.showAlert('Alert!', 'Please select a type of institution');
        }       
      }
    });
    alert.present();

    // alert.onDidDismiss( data => {
    //   if (! data) {
    //     this.getData(0)
    //   }else{
    //     this.getData(data)
    //   }
      
    // })
  }

  



}
