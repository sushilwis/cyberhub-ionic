import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { LiveStreamPage } from '../live-stream/live-stream';
import { AttendancePage } from '../attendance/attendance';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { SchoolDetailsPage } from '../school-details/school-details';
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
export class RoutinePage implements OnInit {
  scheduleTab: string = "class";
	data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];
  localUserData: any;
  loading: any;
  routineList: any;
  rawRoutineList: any;
  dayName: any = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  showLoader: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingController: LoadingController, private http: Http) {
    this.showLoader = true;
  		// for(let i = 1; i < 7; i++ ){
      // this.data.push({
      //     title: 'Day '+ i,
      //     details: 'Your New Routine',
      //     icon: 'ios-add-circle-outline',
      //     showDetails: false
      //   });
      // }
    // this.initLoader();
    this.getUserDataFromLocal();
  }



  ngOnInit() {
    this.getStudentRoutine();
  }


  goToHome(){
		this.navCtrl.setRoot(StudentOwndetailsPage);
	}
  
  // gotoLiveStream(){
  //   this.navCtrl.push(LiveStreamPage);
  // }
  // goToAttendance(){
  //   this.navCtrl.push(AttendancePage);
  // }
  
  goToRoutine(){
    this.navCtrl.push(RoutinePage);
  }  



// |--------------------------------------------------------------------
// |--------- toggle accordian method --------------
// |--------------------------------------------------------------------


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
      this.showLoader = false;
  }
  


// |--------------------------------------------------------------------
// |--------- goto home page method --------------
// |--------------------------------------------------------------------
  gotoHome(){
    this.navCtrl.setRoot(StudentOwndetailsPage);
  }



// |--------------------------------------------------------------------
// |--------- goto live stream page method --------------
// |--------------------------------------------------------------------
  gotoLiveStream(){
    this.navCtrl.push(LiveStreamPage);
  }


// |--------------------------------------------------------------------
// |--------- goto attendence page method --------------
// |--------------------------------------------------------------------
  goToAttendance(){
    this.navCtrl.push(AttendancePage);
  }




// |--------------------------------------------------------------------
// |--------- getting logged user data from localstorage --------------
// |--------------------------------------------------------------------

  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);
    // console.log('local data : ', this.localUserData);       
  }




// |--------------------------------------------------------------------
// |--------- getting all routine for a specific student --------------
// |--------------------------------------------------------------------

  getStudentRoutine() {
    this.showLoader = true;
    // this.presentLoading(true);

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: headers});

		let data = {
      'master_id': this.localUserData.master_id,
      'org_id': this.localUserData.org_code,
      'user_type_id': this.localUserData.user_type_id
    }
    
    // console.log('sent data : ', data);    

		this.http.post(`${apiUrl.url}routine/std-rutine`, data, options).
			map(res => res.json()).subscribe(data => {				
				// console.log('routine list : ', data);
				if (data.data.length > 0) {
          // this.presentLoading(false);
          this.rawRoutineList = data.data;
          console.log('routine list : ', this.rawRoutineList);
          this.sortArr(this.rawRoutineList);
          this.showLoader = false;
				}else{
          // this.presentLoading(false);
          this.showLoader = false;
        }

			});
  }





// |--------------------------------------------------------------------
// |-- loading start and stop method by passing true or false --
// |--------------------------------------------------------------------

  // presentLoading(load: boolean) {
	// 	if (load) {
	// 		return this.loading.present();
	// 	}else {
	// 		setTimeout(() => {
	// 			return this.loading.dismiss();
	// 		}, 500);
	// 	}
  // }






// |--------------------------------------------------------------------
// |--------- loading initialization --------------
// |--------------------------------------------------------------------

  // initLoader() {
	// 	this.loading = this.loadingController.create({
	// 		spinner: 'hide',
	// 		content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
	// 	});
  // }




// |--------------------------------------------------------------------
// |--------- sorting raw routine array --------------
// |--------------------------------------------------------------------


  async sortArr(rawRoutineArr) {
    let new_arry = [];
    rawRoutineArr.forEach((element, i) => {
      let pos = new_arry
        .map(function(e) {
          return e.day;
        })
        .indexOf(element.day);
      // console.log(new_arry.indexOf(element.day));
      if (pos < 0) {
        let new_data = {
          id: element.id,
          day: element.day,
          dayName: this.dayName[parseInt(element.day)-1],
          icon: 'ios-add-circle-outline',
          showDetails: false,
          priods: [
            {
              priod_id: element.priod_id,
              priod_name: element.priod.period_name,
              from_time: element.priod.from_time,
              to_time: element.priod.to_time,
              rutinedetails: element.rutinedetails
            }
          ]
        };
        new_arry.push(new_data);
      } else {
        let exsisting_data = {
          priod_id: element.priod_id,
          priod_name: element.priod.period_name,
          from_time: element.priod.from_time,
          to_time: element.priod.to_time,
          icon: 'ios-add-circle-outline',
          showDetails: false,
          rutinedetails: element.rutinedetails
        };
        new_arry[pos].priods.push(exsisting_data);
      }
    });


    // this.routineList = new_arry.sort(function(a, b){return a.day - b.day});
    // this.routineList = new_arry.sort(function(a, b){return a.priods.priod_id - b.priods.priod_id});

    await new_arry.forEach((elem, i) => {     
        new_arry[i].priods.sort(function(a, b){return a.priod_id - b.priod_id});     
    });

    this.routineList = new_arry;
    // console.log('final array : ', this.routineList);
    // this.presentLoading(false);
  }
  




}
