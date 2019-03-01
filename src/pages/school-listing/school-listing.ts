import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ActionSheetController, Platform } from 'ionic-angular';
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { SchoolDetailsPage } from "./../school-details/school-details";
import { apiUrl } from "../../apiUrl";
/**
 * Generated class for the SchoolListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-school-listing",
  templateUrl: "school-listing.html"
})
export class SchoolListingPage {
  orgList: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public toastCtrl: ToastController,
    public loadingController: LoadingController,
    public actionsheetCtrl: ActionSheetController,
    public platform: Platform,
  ) {}

  ionViewDidLoad() {
    this.initLoader();
    let data = this.navParams.get("data");
    // console.log(data);
    this.getOrganization(JSON.parse(data));
    console.log("ionViewDidLoad SchoolListingPage");
  }



  goToListingDetails(id) {
    this.navCtrl.push(SchoolDetailsPage, { id });
  }



  getOrganization(data: any) {
    // this.presentLoading(true);
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    this.http
      .get(`${apiUrl.url}org/search/${data.country_id}/${data.state_id}/${data.dist_id}/${data.type_id}`, options)
      .map(res => res.json())
      .subscribe(data => {
        // console.log('school list : ', data);        
        if (data.data) {
          // this.presentLoading(false);
          this.orgList = data.data;
          
          this.orgList.forEach(ele => {            
              ele.org = this.genOrgName(ele.org_type_id);
          });

          console.log(this.orgList);
        }
      });
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




  openActionSheet(org) {
    let actionSheet = this.actionsheetCtrl.create({
      // title: `<img [src]="${org.org_logo}"/> ${org.name}`,
      title: `${org.org_name}`,
      cssClass: 'action-sheets-basic-page',
      buttons: [
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
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });


    actionSheet.present();
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




  initLoader() {
    this.loading = this.loadingController.create({
      spinner: "hide",
      content:
        '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
    });
  }



  presentLoading(load: boolean) {
    if (load){
      return this.loading.present();
    }
    else{
      setTimeout(() => {
        return this.loading.dismiss();
      }, 500);
    }
  }
}
