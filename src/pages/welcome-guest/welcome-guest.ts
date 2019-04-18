import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { GuestEnquiryPage } from '../guest-enquiry/guest-enquiry';
import { SearchOrganisationPage } from '../search-organisation/search-organisation';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';


@IonicPage()
@Component({
  selector: 'page-welcome-guest',
  templateUrl: 'welcome-guest.html',
})
export class WelcomeGuestPage {

  guestTab: string = 'search';
  tabHeaderTitle: any = '';
  showHeader: boolean = false;
  allSchoolsList: any;
  list: any[];
  items: any = [];
  headTitle: string;
  orgList: any;
  skip: number = 0;
  searchData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public menuCtrl: MenuController, public loadingController: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    for (let i = 0; i < 20; i++) {
      this.items.push( this.items.length );
    }
  }

  ngOnInit(){
    // this.getCollege();
    // this.getOrganization();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeGuestPage');
  }

  goToFilterOrg(){  
    this.navCtrl.push(GuestEnquiryPage);  
  }

  goToSearchOrg(){
    this.navCtrl.push(SearchOrganisationPage);    
  }





  onClickTab(value) {
    // console.log('tab clicked', value); 
    if(value != '1'){
      this.showHeader = true;
      this.getHeaderTitle(value);
      this.tabHeaderTitle = this.getHeaderTitle(value);
      console.log('Header : ',this.tabHeaderTitle);
    }else{
      this.showHeader = false;
      this.getHeaderTitle(value);
      this.tabHeaderTitle = this.getHeaderTitle(value);
      console.log('Header : ',this.tabHeaderTitle);      
    }   
  }





  getOrganization(navdata: any, skip: any) {
    // this.presentLoadingDefault();
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






  getHeaderTitle(type) {
    switch(type) {
      case '2':        
        return "Live Stream";
      case '3':        
        return "Library";        
      case '4':
        return "Events";       
      case '5':
        return "Skill Development";        
      case '6':
        return "Staff Details";       
      default:
        return "";
    }
  }





  getRegisterStatus(val) {
    if(val == '0'){
      return 'Pending';
    }
    if(val == '1'){
      return 'Registered';
    }
  }






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





}
