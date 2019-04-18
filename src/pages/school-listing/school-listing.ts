import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ActionSheetController, Platform } from 'ionic-angular';
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { SchoolDetailsPage } from "./../school-details/school-details";
import { apiUrl } from "../../apiUrl";

@IonicPage()
@Component({
  selector: "page-school-listing",
  templateUrl: "school-listing.html"
})
export class SchoolListingPage {
  orgList: any = [];
  loading: any;
  headTitle: string;
  navData: any;
  items: any = [];
  skip: number = 0;
  searchData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public toastCtrl: ToastController,
    public loadingController: LoadingController,
    public actionsheetCtrl: ActionSheetController,
    public platform: Platform,
  ) {
    this.skip = 0;
    this.initLoader();

    for (let i = 0; i < 20; i++) {
      this.items.push( this.items.length );
    }

  }

  ionViewDidLoad() {    
    let data = this.navParams.get("data");
    // console.log('route data : ...', data);
    this.searchData = JSON.parse(data);
    this.getOrganization(this.searchData, this.skip);
    console.log("ionViewDidLoad SchoolListingPage");
  }





  goToListingDetails(id) {
    this.navCtrl.push(SchoolDetailsPage, { id });
  }





  getOrganization(navdata: any, skip: any) {
    this.presentLoadingDefault();
    // this.presentLoading(true);
    // console.log('get org called...');    
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });

    let data = {
      country: navdata.country_id,
      state: navdata.state_id,
      dist: navdata.dist_id,
      org_type: navdata.type_id,
      skip: skip,
    }

    this.http
      .post(`${apiUrl.url}org/searchApp`, data, options)
      .map(res => res.json())
      .subscribe(data => {
        // console.log('school list : ', data);        
        if (data.length > 0) {
          // this.presentLoading(false);
          // this.orgList = data;
          
          data.forEach(ele => {

            let obj = {
              org : this.genOrgName(ele.org_type_id),
              id : ele.id,
              is_registered: this.getRegisterStatus(ele.is_registered),
              name: ele.org_name,
              city: ele.org_city,
              landmark: ele.landmark,
              org_logo: ele.org_logo,
              org_text: ele.org_text,
              email: ele.email,
              phone_no: ele.phone_no,
              website: ele.website
            } 
            
            this.orgList.push(obj);
              
          });

          // console.log('custom arr data :...', this.orgList);
        } else {
          // console.log('No data...');          
          this.genOrgName(navdata.type_id);
        }
      });
  }





  genOrgName(org_type_id) {
    // console.log('Type ID :... ', org_type_id);    
    if(org_type_id == '1'){
      this.headTitle = 'School';
      return 'SCHOOL';
    }
    if(org_type_id == '2'){
      this.headTitle = 'College';
      return 'COLLEGE';
    }
    if(org_type_id == '3'){
      this.headTitle = 'University';
      return 'UNIVERSITY';
    }
  }





  openActionSheet(org) {
    let actionSheet = this.actionsheetCtrl.create({
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
        },
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   icon: !this.platform.is('ios') ? 'close' : 'close',
        //   handler: () => {
        //     console.log('Cancel clicked');
        //   }
        // }
      ]
    });


    actionSheet.present();
  }





  getRegisterStatus(val) {
    if(val == '0'){
      return 'Pending';
    }
    if(val == '1'){
      return 'Registered';
    }
  }





  // openActionSheet(org) {
  //   let actionSheet = this.actionsheetCtrl.create({
  //     // title: `<img [src]="${org.org_logo}"/> ${org.name}`,
  //     title: `${org.name} ${org.landmark} `,
  //     cssClass: 'action-sheets-basic-page',
  //     buttons: [
  //       {
  //         text: `Status :  ${org.is_registered}`,
  //         // role: 'destructive',
  //         icon: !this.platform.is('ios') ? 'checkbox-outline' : 'checkbox-outline',
  //         handler: () => {
  //           // console.log('Delete clicked');
  //           this.schoolsDetails(org.id);
  //         }
  //       },
  //       {
  //         text: `Phone :  ${org.phone_no}`,
  //         // role: 'destructive',
  //         icon: !this.platform.is('ios') ? 'call' : 'call',
  //         handler: () => {
  //           // console.log('Delete clicked');
  //           this.schoolsDetails(org.id);
  //         }
  //       },
  //       {
  //         text: `Website :  ${org.website}`,
  //         icon: !this.platform.is('ios') ? 'cloud' : 'cloud',
  //         handler: () => {
  //           // console.log('Share clicked');
  //           this.schoolsDetails(org.id);
  //         }
  //       },
  //       {
  //         text: `Email :  ${org.email}`,
  //         icon: !this.platform.is('ios') ? 'mail' : 'mail',
  //         handler: () => {
  //           // console.log('Play clicked');
  //           this.schoolsDetails(org.id);
  //         }
  //       }
  //     ]
  //   });


  //   actionSheet.present();
  // }





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
    this.loading.dismissAll();

    if (load){
      return this.loading.present();
    }else{
      setTimeout(() => {
        return this.loading.dismiss();
      }, 500);
    }
  }





  // scrollComplete(event) {
  //   console.log(event);
  //   var scrollHei = <HTMLElement>document.getElementById('content');
  //   console.log(scrollHei.scrollHeight);    
  //   console.log('Scroll end :...', event.scrollHeight - (event.contentElement.offsetHeight + event.scrollTop));
  //   if(event.scrollHeight - (event.contentElement.offsetHeight + event.scrollTop) < -45) {
       
  //   }
  // }






  doInfinite(infiniteScroll) {
    this.skip += 20;

    setTimeout(() => {

      for (let i = 0; i < 20; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      
      this.getOrganization(this.searchData, this.skip);
      infiniteScroll.complete();
    }, 500);
  }






  presentLoadingDefault() {
    let loading = this.loadingController.create({
      content: 'Please wait...'
    });

    // console.log('loading data :...', loading);  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }






}
