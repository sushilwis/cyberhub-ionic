import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { SchoolDetailsPage } from '../school-details/school-details';
import { RequestOptions, Headers, Http } from '@angular/http';
import { LiveStreamPage } from '../live-stream/live-stream';
import { apiUrl } from '../../apiUrl';
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
  allBookList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu:MenuController,  private http: Http, public alertCtrl: AlertController) {

  	this.menu.enable(false);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryListPage');
  }
  
   goToHome(){
		this.navCtrl.push(SchoolDetailsPage);
	}
  
  gotoLiveStream(){
    this.navCtrl.push(LiveStreamPage);
  }


  ngOnInit(){
    this.getBookList();
  }





  async getBookList(){
    await this.getUserDataFromLocal();
    let header = new Headers();
    header.set("Content-Type", "application/json");

      let data = {
        master_id: this.localUserData.org_code
      }
      
      console.log('Data sent : ', data);
      
      this.http
        .post(`${apiUrl.url}library/librarydetails`, data, {headers: header})
        .map(res => res.json())
        .subscribe(
          async data => {
            console.log("book list : ", data);
            if(data.data.length > 1){
              this.allBookList = await data.data;
            }else{
            }          
      });        
  }





  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);  
  }
}
