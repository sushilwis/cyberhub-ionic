import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { GuestEnquiryPage } from '../guest-enquiry/guest-enquiry';
import { SearchOrganisationPage } from '../search-organisation/search-organisation';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { StudentLibraryListPage } from '../student-library-list/student-library-list';
import { SchoolcalenderPage } from '../schoolcalender/schoolcalender';
import { SchoolDetailsPage } from '../school-details/school-details';
import { OrgStaffListPage } from '../org-staff-list/org-staff-list';


@IonicPage()
@Component({
  selector: 'page-welcome-guest',
  templateUrl: 'welcome-guest.html',
})
export class WelcomeGuestPage {

  guestTab: string = 'search';
  tabHeaderTitle: any = 'Guest';
  showHeader: boolean = false;
  allSchoolsList: any;
  lists: any = [];
  items: any = [];
  headTitle: string;
  orgList: any;
  skip: number = 20;
  searchData: any;
  loading: any;
  typeId: any;
  showLoader: boolean;
  searchCollgResult: any = [];
  searchOrg: any;
  SearchOrgId: any;
  regID: any;
  SearchedResult: any = [];
  showData: boolean = false 
  showError: boolean = false;
  showList: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public menuCtrl: MenuController, public loadingController: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.showLoader = true;
    for (let i = 0; i < 20; i++) {
      this.items.push( this.items.length );
    }
    // this.initLoader();
  }

  ngOnInit(){
    // this.getCollege();
    // this.getOrganization();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeGuestPage');
    this.showLoader = false;
  }

  goToFilterOrg(){  
    this.navCtrl.push(GuestEnquiryPage);  
  }

  goToSearchOrg(){
    this.navCtrl.push(SearchOrganisationPage);    
  }


  filterCollgList(ev) {
    const val = ev.target.value;
    // console.log(this.items);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.searchCollgResult = this.lists.filter(item => {
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });

      this.lists = this.searchCollgResult;
      console.log('items : ...', this.searchCollgResult);
    }
  }


  onClickTab(value) {
    if(value != '1'){
      this.showHeader = true;      
      this.lists = [];      
      this.getHeaderTitle(value);
      this.tabHeaderTitle = this.getHeaderTitle(value);
      // console.log('Header : ',this.tabHeaderTitle);
      this.showRadio();
    }else{
      this.showHeader = false;
      this.lists = [];      
      this.getHeaderTitle(value);
      this.tabHeaderTitle = this.getHeaderTitle(value);
      // console.log('Header : ',this.tabHeaderTitle);      
    }   
  }





  // getOrganization(navdata: any, skip: any) {
  //   // this.presentLoadingDefault();
  //   // this.presentLoading(true);
  //   // console.log('get org called...');    
  //   var headers = new Headers();
  //   headers.append("Content-Type", "application/json");
  //   let options = new RequestOptions({ headers: headers });

  //   let data = {
  //     country: navdata.country_id,
  //     state: navdata.state_id,
  //     dist: navdata.dist_id,
  //     org_type: navdata.type_id,
  //     skip: skip,
  //   }

  //   this.http
  //     .post(`${apiUrl.url}org/searchApp`, data, options)
  //     .map(res => res.json())
  //     .subscribe(data => {
  //       // console.log('school list : ', data);        
  //       if (data.length > 0) {
  //         // this.presentLoading(false);
  //         // this.orgList = data;
          
  //         data.forEach(ele => {

  //           let obj = {
  //             org : this.genOrgName(ele.org_type_id),
  //             id : ele.id,
  //             is_registered: this.getRegisterStatus(ele.is_registered),
  //             name: ele.org_name,
  //             city: ele.org_city,
  //             landmark: ele.landmark,
  //             org_logo: ele.org_logo,
  //             org_text: ele.org_text,
  //             email: ele.email,
  //             phone_no: ele.phone_no,
  //             website: ele.website
  //           } 
            
  //           this.orgList.push(obj);
              
  //         });

  //         // console.log('custom arr data :...', this.orgList);
  //       } else {
  //         // console.log('No data...');          
  //         this.genOrgName(navdata.type_id);
  //       }
  //     });
  // }





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
        return "Video Stream";
      case '3':        
        return "Library";        
      case '4':
        return "Events";       
      case '5':
        return "Skill Development";        
      case '6':
        return "Staff Details"; 
      case '7':
        return "Admission"; 
      case '8':
        return "Exam Schedule";         
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
      
      this.getData(this.typeId, this.skip);
      infiniteScroll.complete();
    }, 500);
  }







  showRadio() {
    this.orgList = [];
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
        // console.log('cancel clicked :...', );
        this.navCtrl.pop();        
      }
    });
    
    alert.addButton({
      text: 'OK',
      cssClass: "okBtn",
      handler: data => {
        console.log(data);
        if(data != '' && data != null){
          this.typeId = data;
          this.chooseCollegeType(data)
          // this.getData(data, this.skip);
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

  chooseCollegeType(typeId: any) {
    if (typeId == 2) {

      let alert = this.alertCtrl.create();
      alert.setTitle('SELECT WHAT TO SEARCH');
      alert.addInput(
        {
          type: 'radio',
          label: 'Technical',
          value: '4',
          checked: false
        }
      );

      alert.addInput(
        {
          type: 'radio',
          label: 'Non Technical',
          value: '5',
          checked: false
        }
      );

      // alert.addButton('Cancel');
      alert.addButton({
        text: 'Cancel',
        cssClass: "cancelBtn",
        handler: data => {
          console.log('cancel clicked :...');
          this.navCtrl.pop();
        }
      });
      alert.addButton({
        text: 'OK',
        cssClass: "okBtn",
        handler: data => {
          // console.log(data);
          if (data != '' && data != null) {
            this.typeId = data;
            this.getData(data, this.skip);
            // this.chooseCollegeType(data)
          } else {
            this.showAlert('Alert!', 'Please select a type of institution');
          }
        }
      });
      alert.present();
    }
  }



  onSelectSearch(values){
    this.searchOrg = values.name;
    this.SearchOrgId = values.id;
    this.searchCollgResult = [];
    this.showData = true;
  }

  searchStudent() {
     this.showLoader = true;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let data = {
      org_id: this.SearchOrgId,
      applicantNo: this.regID
    }

    this.http
      .post(`${apiUrl.url}exam/search-student`, data, options)
      .map(res => res.json())
      .subscribe(data => {
        // console.log(data);
        if (data.data) {
          this.SearchedResult = []
          this.showLoader = false;
          data.data.forEach((element: any) => {
            if (element.exam_date.length > 0 && element.exam_date[0].exam_room.length >0) {
              this.SearchedResult.push(element)
            }
          });
          if (this.SearchedResult.length == 0) {
            this.showError = true
          }
          console.log(this.showError);
          
        }
      })
  }

  searchedNo(data) {
    if (data.std_regs_no == this.regID) {
      return data.std_regs_no
    }
    else{
      data.std_roll_no
    }
  }
  getData(id, skip) {
    // this.presentLoading(true);
    this.showLoader = true;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let data = {
      type: id,
      is_reg: 1,
      skip: skip,
    }

    this.http
      .post(`${apiUrl.url}org/orgsearchbytype`, data, options)
      .map(res => res.json())
      .subscribe(data => {
        // this.presentLoading(false);
        this.allSchoolsList = data.data;
        // console.log("school list..... : ", this.allSchoolsList);
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
            this.lists.push(obj);
          });
          // this.presentLoading(false);
          // console.log("arr list..... : ", this.lists);
          this.orgList = this.lists; 
          this.showLoader = false;
        } else {
          this.showLoader = false;
          // this.presentLoading(false);
          // this.presentToast('Sorry, No Data Found !');
          this.showAlert('Alert!', 'No Data Found !');        
        }       
      });
  }

  scrollToLeft() {
    (<HTMLElement>document.getElementsByClassName('footer')[0]).scrollLeft += 60;
  }
  scrollToRight() {
    (<HTMLElement>document.getElementsByClassName('footer')[0]).scrollLeft -= 60;
  }




  schoolsDetails(id) {
    this.navCtrl.push(
      SchoolDetailsPage,
      {
        id: id,
        admission :1
      },
      { animation: "transition", duration: 1000, direction: "forward" }
    );
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
            this.navCtrl.push(WelcomeGuestPage);
          }
        }
      ]
    });
    
		alert.present();
  }








  // presentLoading(load: boolean) {
	// 	if (load) {
	// 		return this.loading.present().then((data)=>{
  //         console.log('loading data :...', data);          
  //     });
	// 	}
	// 	else {
	// 		setTimeout(() => {
  //       if(this.loading != undefined){
  //         return this.loading.dismiss().then((data)=>{
  //           console.log('loading data :...', data);
  //         });
  //       }				
	// 		}, 1000);
	// 	}
  // }





  // initLoader() {
	// 	this.loading = this.loadingController.create({
  //     spinner: 'hide',
  //     dismissOnPageChange: false,
	// 		content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
	// 	});
  // }



  goToLibrarySection(org_id) {
    // console.log('id :...', org_id);  
    this.navCtrl.push(StudentLibraryListPage, { data: org_id });  
  }


  goToLiveSection(org_id) {

  }


  goToSkillSection(org_id){

  }


  goToEventSection(org_id){
    this.navCtrl.push(SchoolcalenderPage, { data: org_id });
  }


  goToStaffSection(org_id){
    this.navCtrl.push(OrgStaffListPage, { org_id })
  }

  onSearchButtonClick(){
    this.orgList = []
    this.showList = false;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    if (ev.target.value == "") {
      this.showList = false;
      this.orgList = this.lists;
      return;
    }

    this.showList = true;
    // console.log('value : ', ev.target.value);
    // this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;
    // console.log(this.items);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.orgList = this.lists.filter(item => {
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
      console.log('this.orgList items : ...', this.orgList);
      this.lists = this.orgList;
    }
  }




  // getBooks(ev: any) {
  //   // Reset items back to all of the items
  //   if (ev.target.value == "") {
  //     this.showList = false;
  //     this.orgList = this.lists;
  //     return;
  //   }

  //   this.showList = true;
  //   // console.log('value : ', ev.target.value);
  //   // this.initializeItems();

  //   // set val to the value of the searchbar
  //   const val = ev.target.value;
  //   // console.log(this.items);

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != "") {
  //     this.orgList = this.lists.filter(item => {
  //       return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
  //     });
  //     console.log('this.orgList items : ...', this.orgList);
  //   }
  // }
  // getBookList(org_id) {
  //   // this.presentLoading(true);
  //   this.showLoader = true;
  //   let header = new Headers();
  //   header.set("Content-Type", "application/json");

  //     let data = {
  //       master_id: org_id
  //     }

      
  //     this.http
  //       .post(`${apiUrl.url}library/librarydetails`, data, {headers: header})
  //       .map(res => res.json())
  //       .subscribe(
  //         async data => {
  //           console.log("book list : ", data.data);
  //           if(data.data.length > 1) {
  //             // this.presentLoading(false);
  //             this.allBookList = await data.data;
  //             this.allBook = await data.data; 
  //             this.totalData = await data.data.length;
  //             this.totalPage = await Math.floor(data.data.length/5);  
  //             this.showLoader = false;   

  //           } else {
  //             this.showLoader = false;
  //           }          
  //     });        
  // }






}
