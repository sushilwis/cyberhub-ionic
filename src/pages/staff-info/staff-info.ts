import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { StudentLibraryListPage } from '../student-library-list/student-library-list';
import { StudentNoticeBoardPage } from '../student-notice-board/student-notice-board';
import { PersonalNoticePage } from '../personal-notice/personal-notice';
import { GetAttendancePage } from '../get-attendance/get-attendance';
import { LiveStreamPage } from '../live-stream/live-stream';
import { StaffComplainPage } from '../staff-complain/staff-complain';
import { ParentsAccountPage } from '../parents-account/parents-account';
import { GuestEnquiryPage } from '../guest-enquiry/guest-enquiry';
import { PrincipalExamviewPage } from '../principal-examview/principal-examview';
import{ PrincipalComplaindeskPage } from '../principal-complaindesk/principal-complaindesk';
import { StuffExamdutyPage } from '../stuff-examduty/stuff-examduty';
/**
 * Generated class for the StaffInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-info',
  templateUrl: 'staff-info.html',
})
export class StaffInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffInfoPage');
  }
  goToAllPdf(){
		this.navCtrl.push(StudentNoticeBoardPage);
	}
  goToLibrary(){
    this.navCtrl.push(StudentLibraryListPage);
  }
  goToPersonalNotice(){
    this.navCtrl.push(PersonalNoticePage);
  }
  gotoLiveStream(){
    this.navCtrl.push(LiveStreamPage);
  }
  goToAttendance(){
    this.navCtrl.push(GetAttendancePage);
  }
 goToComplain(){
    this.navCtrl.push(StaffComplainPage);
  }
  goToAccount(){
    this.navCtrl.push(ParentsAccountPage);
  }
  goToGuest(){
    this.navCtrl.push(GuestEnquiryPage);
  }
  goToPrincipal(){
    this.navCtrl.push(PrincipalExamviewPage);
  }
  goToComplainDesk(){
    this.navCtrl.push(PrincipalComplaindeskPage);
  }
  goToStuffDuty(){
    this.navCtrl.push(StuffExamdutyPage);
  }
}
