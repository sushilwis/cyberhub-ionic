import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { LiveStreamPage } from '../live-stream/live-stream';
import { AttendancePage } from '../attendance/attendance';
import { RoutinePage } from '../routine/routine';

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
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
      this.menuCtrl.enable(false);

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
}
