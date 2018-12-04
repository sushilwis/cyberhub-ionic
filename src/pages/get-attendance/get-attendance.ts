import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AttendanceListPage } from '../attendance-list/attendance-list';

/**
 * Generated class for the GetAttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-attendance',
  templateUrl: 'get-attendance.html',
})
export class GetAttendancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetAttendancePage');
  }
  gotoAttendance(){
  	this.navCtrl.push(AttendanceListPage);
  }
}
