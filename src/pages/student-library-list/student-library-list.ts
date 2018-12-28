import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController, ModalController, Platform, ViewController } from 'ionic-angular';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { LiveStreamPage } from '../live-stream/live-stream';
import { AttendancePage } from '../attendance/attendance';
import { RoutinePage } from '../routine/routine';
import { RequestOptions, Headers, Http } from '@angular/http';
import { apiUrl } from '../../apiUrl';

/**
 * Generated class for the StudentLibraryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-library-list',
  templateUrl: 'student-library-list.html',
})
export class StudentLibraryListPage {
  localUserData: any;
  allBookList: any = [];
  page: any = 1;
  perPage: any = 5;
  totalData: any = 0;
  totalPage: any = 0;
  loading: any;
  matchItem: any;
  allBook: any;
  showNotFound: boolean;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController,  private http: Http, public alertCtrl: AlertController, public loadingController: LoadingController, public modalCtrl: ModalController, public viewCtrl: ViewController) {
      this.menuCtrl.enable(false);
      this.initLoader();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentLibraryListPage');
  }

  
   goToHome(){
		this.navCtrl.setRoot(StudentOwndetailsPage);
	}
  
  gotoLiveStream(){
    this.navCtrl.push(LiveStreamPage);
  }
  goToAttendance(){
    this.navCtrl.push(AttendancePage);
  }
  goToRoutine(){
    this.navCtrl.push(RoutinePage);
  }



  ngOnInit(){
    this.getBookList();
  }





  async getBookList(){
    this.presentLoading(true);
    await this.getUserDataFromLocal();
    let header = new Headers();
    header.set("Content-Type", "application/json");

      let data = {
        master_id: this.localUserData.org_code
      }
      
      // console.log('Data sent : ', data);
      
      this.http
        .post(`${apiUrl.url}library/librarydetails`, data, {headers: header})
        .map(res => res.json())
        .subscribe(
          async data => {
            // console.log("book list : ", data.data);
            if(data.data.length > 1){
              this.presentLoading(false);
              this.allBookList = await data.data;
              this.allBook = await data.data; 
              this.totalData = await data.data.length;
              this.totalPage = await Math.floor(data.data.length/5)+1;
              // console.log('total data : ', this.totalData);
              // console.log('total page : ', this.totalPage);              
            }else{
              this.presentLoading(false);
            }          
      });        
  }
  





  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);  
  }





  doInfinite(infiniteScroll) {
    this.page = this.page+1;
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 2; i++) {
        this.allBookList.push( this.allBookList.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }






  async onChangeSearch(e){
    this.showNotFound = false;
    let tempArr = [];
    // console.log('search change...', e.target.value);
    if(e.target.value != ""){     
      for (let index = 0; index < this.allBookList.length; index++) {
            var matchFound = await this.allBookList[index].book_name.toLowerCase().match(e.target.value);
            var matchAuthor = await this.allBookList[index].author.toLowerCase().match(e.target.value);
                
            if (matchFound != null) {
              tempArr.push(this.allBookList[index]);
              this.showNotFound = false;
            }

            if (matchAuthor != null) {
              tempArr.push(this.allBookList[index]);
              this.showNotFound = false;
            }

            
      }

      // if(matchFound === null && matchAuthor === null){
      //   console.log('not found any thing...');
      //   this.showNotFound = true;
      // }

      if(tempArr.length == 0){
        console.log('not found any thing...');
        this.showNotFound = true;
      }

      tempArr = tempArr.filter(function(item, pos) {
        return tempArr.indexOf(item) == pos;
      }) 

      this.allBookList = tempArr;
      // this.showNotFound = false;
    }else{
      this.allBookList = this.allBook;
      
    }   
  }






  initLoader() {
		this.loading = this.loadingController.create({
			spinner: 'hide',
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
	}






  presentLoading(load: boolean) {
		if (load) {
			return this.loading.present();
		}
		else {
			setTimeout(() => {
				return this.loading.dismiss();
			}, 500);
		}
  }
  





  presentProfileModal(id) {
    console.log('clicked...', id); 
    let filterBook = this.allBook.filter(function(item) {
      return item.id == id;
    })   
    let profileModal = this.modalCtrl.create(ProfilePage, { book: filterBook[0] });
    profileModal.present();
  }





  dismiss() {
    this.viewCtrl.dismiss();
  }

}






@Component({
  templateUrl: 'book-modal.html'
})
export class ProfilePage implements OnInit {
  book: any;
 constructor(params: NavParams, public platform: Platform, public viewCtrl: ViewController, public menuCtrl: MenuController, public navCtrl: NavController) {
  //  console.log('book', params.get('book'));  
  this.book = params.get('book');   
 }

 ngOnInit(){  
  console.log(this.book); 
 }


 dismiss() {
  this.viewCtrl.dismiss();
  }
}
