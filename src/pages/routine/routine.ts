import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LiveStreamPage } from '../live-stream/live-stream';
import { AttendancePage } from '../attendance/attendance';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
/**
 * Generated class for the RoutinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-routine',
  templateUrl: 'routine.html',
})
export class RoutinePage {

	data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		for(let i = 1; i < 7; i++ ){
      this.data.push({
          title: 'Day '+ i,
          details: 'Your New Routine',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });
    }
  }

	toggleDetails(data) {
	    if (data.showDetails) {
	        data.showDetails = false;
	        data.icon = 'ios-add-circle-outline';
	    } else {
	        data.showDetails = true;
	        data.icon = 'ios-remove-circle-outline';
	    }
  	}

	  ionViewDidLoad() {
	    console.log('ionViewDidLoad RoutinePage');
	  }
  gotoHome(){
    this.navCtrl.setRoot(StudentOwndetailsPage);
  }
  gotoLiveStream(){
    this.navCtrl.push(LiveStreamPage);
  }
  goToAttendance(){
    this.navCtrl.push(AttendancePage);
  }
}
