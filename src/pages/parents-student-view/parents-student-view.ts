import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { StudentNoticeBoardPage } from '../student-notice-board/student-notice-board';
import { StudentLibraryListPage } from '../student-library-list/student-library-list';
import { RoutinePage } from '../routine/routine';
import { PersonalNoticePage } from '../personal-notice/personal-notice';
import { LiveStreamPage } from '../live-stream/live-stream';
import { AttendancePage } from '../attendance/attendance';
import { ParentsAccountPage } from '../parents-account/parents-account';
import { GuestEnquiryPage } from '../guest-enquiry/guest-enquiry';
/**
 * Generated class for the ParentsStudentViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parents-student-view',
  templateUrl: 'parents-student-view.html',

})
export class ParentsStudentViewPage {
	
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  	this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentsStudentViewPage');
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
    this.navCtrl.push(AttendancePage);
  }
  goToRoutine(){
    this.navCtrl.push(RoutinePage);
  }
  goToAccount(){
    this.navCtrl.push(ParentsAccountPage);
  }
  goToGuest(){
    this.navCtrl.push(GuestEnquiryPage);
  }
}
