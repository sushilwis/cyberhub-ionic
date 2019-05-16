import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ParentHomePage } from '../parent-home/parent-home';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';


@IonicPage()
@Component({
  selector: 'page-add-child',
  templateUrl: 'add-child.html',
})
export class AddChildPage {

  showLoader: boolean;
  localUserData: any;
  childId: any;
  stdDetails: any;

  constructor(
    public navCtrl: NavController, 
		public navParams: NavParams, 
    private http: Http,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
  ) {
    this.showLoader = true;
    this.getUserDataFromLocal();
  }



  ionViewDidLoad() {
    this.showLoader = false;
    console.log('ionViewDidLoad AddChildPage');
  }



  // saveChild() {
  //   // console.log('save child clicked.');  
  //   this.showAlert(
	// 		"Alert!",
	// 		"Successfully added your child information to your account"
  //   ); 
  //   this.navCtrl.setRoot(ParentHomePage); 
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
          console.log('ok pressed on alert.'); 
          console.log('std details : ...', this.stdDetails); 
          this.saveChild();          
        }
      }
    ]
  });
  
  alert.present();
  }





  saveChild() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});

    let data = {
      id: this.localUserData.id,
      user_name: this.childId,
    }

    this.http.post(`${apiUrl.url}parent/addstudent`, data, options).
      map(res => res.json()).subscribe(data => {	
        // console.log('login data : ', data.data);
        if (data.data.length > 0) {
          this.showLoader = false;
          localStorage.setItem('userData', JSON.stringify(data.data[0]));				
          this.navCtrl.setRoot(ParentHomePage);					
        }else {
          this.showLoader = false;
          this.showAlert('Alert!', 'User not found. Please check your ID or Password');
        }
      });
  }





  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    if(data){
      this.localUserData = JSON.parse(data);
    }      
  }





  viewChildDetails() {
    this.showLoader = true;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});

    let data = {
      username: this.childId,
    }

    this.http.post(`${apiUrl.url}user/detailsbyusername`, data, options).
      map(res => res.json()).subscribe(data => {
        
        if(data.data.length > 0 && data.data){
          this.showLoader = false;
          console.log('child details : ', data.data[0]);
          this.stdDetails = data.data[0];
  
          this.showAlert('Confirm', `<label style="font-size: 11px;">Name : ${this.stdDetails.studentmaster.name}</label><br><label>User Name : ${this.stdDetails.username}</label><br><label>Organization : ${this.stdDetails.studentmaster.orgmaster.org_name}</label>`);
        }else{
          this.showLoader = false;
          this.showAlert('Alert!', 'Student not found. Please check the Username.');
        }
       
        
        // if (data.data.length > 0) {
        //   this.showLoader = false;
        //   localStorage.setItem('userData', JSON.stringify(data.data[0]));				
        //   this.navCtrl.setRoot(ParentHomePage);					
        // }else {
        //   this.showLoader = false;
        //   this.showAlert('Alert!', 'User not found. Please check your ID or Password');
        // }
    });
  }



  // STD/402/5692111823
  // STD/402/3647681824






}
