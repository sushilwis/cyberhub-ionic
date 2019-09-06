import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import * as moment from 'moment';

import { StudentNoticeBoardPage } from "../student-notice-board/student-notice-board";
import { PersonalNoticePage } from "../personal-notice/personal-notice";
import { RoutinePage } from '../routine/routine';
/**
 * Generated class for the NotificationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification-list',
  templateUrl: 'notification-list.html',
})
export class NotificationListPage {
  localUserData;
  allNotification;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    this.getUserDataFromLocal();
    this.getallNotification();
    console.log('ionViewDidLoad NotificationListPage');
  }

  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);
  }
  getallNotification(){
    this.http.get(`${apiUrl.url}notification/get-all/${this.localUserData.id}`).map(res => res.json()).subscribe(data => {
      this.allNotification = data.data;
      this.allNotification.forEach(item => {
        item.timeDifference = this.createJavascriptDate(item.created_at);
      });
    })
  }

  createJavascriptDate(strDate) {
    // let date = await new Date();
    let onlyDate = strDate.split(" ");

    let dateArr = onlyDate[0].split('-');
    let date = `${dateArr[0]} + ${dateArr[1]} + ${dateArr[2]} ${onlyDate[1]}`;
    console.log('date str : ', moment(date, "YYYYMMDD HH:mm:ss"));
    return moment(date, "YYYY-MM-DDHH:mm:ss").fromNow();

  }

  gotoNotiece(id) {
    this.http.get(`${apiUrl.url}notification/seen/${id}`).map(res => res.json()).subscribe(data => {
      if (data.status) {
        
        this.navCtrl.push(StudentNoticeBoardPage);
      }
    })
  }
  gotoPersonalNotiece(id) {
    this.http.get(`${apiUrl.url}notification/seen/${id}`).map(res => res.json()).subscribe(data => {
      if (data.status) {

        this.navCtrl.push(PersonalNoticePage);
      }
    })
    
  }

  gotoRoutinePage(id){
    this.http.get(`${apiUrl.url}notification/seen/${id}`).map(res => res.json()).subscribe(data => {
      if (data.status) {

        this.navCtrl.push(RoutinePage);
      }
    })
  }
}
