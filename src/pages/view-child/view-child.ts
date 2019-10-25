import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { apiUrl } from '../../apiUrl';
import { Http, RequestOptions, Headers } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-view-child',
  templateUrl: 'view-child.html',
})
export class ViewChildPage {

  guestTab: string = 'search';
  showLoader: boolean;
  parentData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private http: Http) {
    this.showLoader = true;
    this.getParentData();    
  }



  ionViewDidLoad() {
    this.showLoader = true;
    console.log('ionViewDidLoad ViewChildPage');
    this.chooseCollegeType();
    this.getStudents();
  }



  chooseCollegeType() {
    // if (typeId == 2) {

      let alert = this.alertCtrl.create();
      alert.setTitle('SELECT WHAT TO SEARCH');

      for (let index = 0; index < 3; index++) {        
        alert.addInput(
          {
            type: 'radio',
            label: 'Technical',
            value: '4',
            checked: false
          }
        );
      }      

      // alert.addInput(
      //   {
      //     type: 'radio',
      //     label: 'Non Technical',
      //     value: '5',
      //     checked: false
      //   }
      // );

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
          
        }
      });
      alert.present();
    // }
  }




getStudents(){
  this.showLoader = true;
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: headers });

  let data = {
    parent_id: this.parentData.id
  };

  this.http
      .post(`${apiUrl.url}parent/fetchstudentlist`, data, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log('student list :..........................', data);
        this.showLoader = false;
        if (data.data) {
          
        }
      })
}




  getParentData() {
    let parentLocalVal = localStorage.getItem('parentData');
    if(parentLocalVal){
      let localdata = JSON.parse(parentLocalVal);
      this.parentData = localdata;
    }    
  }


}
