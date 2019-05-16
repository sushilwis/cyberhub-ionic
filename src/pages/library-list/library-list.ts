import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController, ModalController, ViewController } from 'ionic-angular';
import { SchoolDetailsPage } from '../school-details/school-details';
import { RequestOptions, Headers, Http } from '@angular/http';
import { LiveStreamPage } from '../live-stream/live-stream';
import { apiUrl } from '../../apiUrl';
import { ProfilePage } from '../student-library-list/student-library-list';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { StaffInfoPage } from '../staff-info/staff-info';
import { HomePage } from '../home/home';
/**
 * Generated class for the LibraryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library-list',
  templateUrl: 'library-list.html',
})
export class LibraryListPage implements OnInit {
  localUserData: any;
  allBookList: any = [];
  schoolId: any;
  loading: any;
  allBook: any = [];
  page: any = 1;
  perPage: any = 5;
  totalData: any = 0;
  totalPage: any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu:MenuController,  private http: Http, public alertCtrl: AlertController, public loadingController: LoadingController, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.menu.enable(false);
    this.getUserDataFromLocal();
    this.schoolId = navParams.get('id');
    this.initLoader();

    for (let i = 0; i < 5; i++) {
      this.allBookList.push( this.allBookList.length );
    }
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryListPage');
  }

  
  goToHome() {
    if(this.localUserData){      
      if(this.localUserData.user_type_id == 1){
        this.navCtrl.setRoot(StudentOwndetailsPage);
      }else{
        this.navCtrl.setRoot(StaffInfoPage);
      }      
    } else {
      this.navCtrl.setRoot(HomePage, {loader: false});
    }    
  }
  
  
  gotoLiveStream(){
    this.navCtrl.push(LiveStreamPage);
  }


  ngOnInit(){
    this.getBookList();
  }





  async getBookList() {
    this.presentLoading(true);
    // await this.getUserDataFromLocal();
    let header = new Headers();
    header.set("Content-Type", "application/json");

      let data = {
        master_id: this.schoolId
      }      
      // console.log('Data sent : ', data);

      this.http
        .post(`${apiUrl.url}library/librarydetails`, data, {headers: header})
        .map(res => res.json())
        .subscribe(
          async data => {
              this.presentLoading(false);
            console.log("book list : ", data);
            if(data.data.length > 1){
              this.allBookList = await data.data;
              this.totalData = await data.data.length;
              this.totalPage = await Math.floor(data.data.length/5);
            }else{
              this.presentLoading(false);
            }          
      });        
  }






  // getUserDataFromLocal() {
  //   let data = localStorage.getItem('userData');
  //   this.localUserData = JSON.parse(data);  
  // }


  initLoader() {
    this.loading = this.loadingController.create({
      spinner: 'hide',
      content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
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






  presentProfileModal(id) {
    // console.log('clicked...', id); 
    let filterBook = this.allBookList.filter(function(item) {
      return item.id == id;
    })   
    let profileModal = this.modalCtrl.create(ProfilePage, { book: filterBook[0] });
    profileModal.present();
  }





  dismiss() {
    this.viewCtrl.dismiss();
  }





  doInfinite(infiniteScroll) {
    this.page = this.page+1;
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.allBookList.push( this.allBookList.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }





  getUserDataFromLocal() {
    let data = localStorage.getItem("userData");
    this.localUserData = JSON.parse(data);
    console.log('local data : ', this.localUserData);
  }





}
