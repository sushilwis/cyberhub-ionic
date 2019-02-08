import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { apiUrl } from '../../apiUrl';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SchoolDetailsPage } from '../school-details/school-details';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { StaffInfoPage } from '../staff-info/staff-info';
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public platform: Platform, public toastCtrl: ToastController) {
    this.getUserDataFromLocal();
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchOrganisationPage');
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

}
