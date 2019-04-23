import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { LiveStreamPage } from '../live-stream/live-stream';
import { RoutinePage } from '../routine/routine';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { apiUrl } from '../../apiUrl';
import { RequestOptions, Headers, Http } from '@angular/http';
import * as io from "socket.io-client";
import { TestPage } from '../test/test';

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-attendance",
  templateUrl: "attendance.html"
})
export class AttendancePage {
  chats: any;
  // roomName: any;
  joinned: boolean = false;
  newUser: any = { nickname: "", room: "" };
  msgData: any = { room: "", nickname: "", message: "" };
  socket = io("http://3.84.60.73:3000/");
  localUserData: any;
  periodList: any;
  showPeriodForm: boolean;
  period: any = '';
  attendenceCode: any;
  attPin: any;
  room: any;
  orgShiftLists;
  studentName: any;
  loading: any;
  student: any;
  showLoader: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public loadingController: LoadingController,
    private http: Http,
    public alertCtrl: AlertController
  ) {
    this.showLoader = true;
    this.menuCtrl.enable(false);
    // this.initLoader();
  }

  ngOnInit() {
    // console.log('Attendance page...');    
    this.getUserDataFromLocal();
    this.getShiftLists();
    // this.getClassList();
    // this.getPeriod();
    this.showPeriodForm = true;
    this.getStudentDetails();
    
    this.socket.on("updateUserList", function(users) {
      // console.log(users);
    });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AttendancePage');
    this.showLoader = false;
  }
  gotoHome() {
    this.navCtrl.setRoot(StudentOwndetailsPage);
  }
  gotoLiveStream() {
    this.navCtrl.push(LiveStreamPage);
  }
  goToRoutine() {
    this.navCtrl.push(RoutinePage);
  }

  onSubmitStudentAttPin() {
    // console.log('pin entered.');

    if (this.attendenceCode == this.attPin) {
      // console.log('correct pin.');

      this.room = {
        room: this.attPin,
        name: this.localUserData.master_id
      };

      // this.socket.on('connect', () => {
      //   this.socket.emit('join', this.room, function (err) {
      //     if (err) {
      //       console.log(err);
      //     } else {
      //       console.log('No error');
      //     }
      //   });
      // });

      localStorage.setItem("roomData", JSON.stringify(this.room));

      // this.socket.on('updateUserList', function (users) {
      //   console.log(users);

      //   // var ol = jQuery('<ol></ol>');

      //   // users.forEach(function (user) {
      //   //   ol.append(jQuery('<li></li>').text(user));
      //   // });

      //   // jQuery('#users').html(ol);
      // });
      this.navCtrl.push(TestPage);
    } else {
      this.showAlert("Invalid Code");
    }
  }







  getShiftLists() {
    this.showLoader = true;
    let header = new Headers();
    header.set("Content-Type", "application/json");
    let data = {
      org_id: this.localUserData.org_code
    };
    // this.checkshift = [];
    this.http
      .post(`${apiUrl.url}shift/orgshiftlist`, data, { headers: header })
      .map(res => res.json())
      .subscribe(data => {
        // console.log("Org shift list ", data.data);
        this.orgShiftLists = data.data;
        this.showLoader = false;
      });
  }






  getPeriod(e) {
    this.showLoader = true;
    console.log(e);

    let header = new Headers();
    header.set("Content-Type", "application/json");
    let data = {
      org_id: this.localUserData.org_code,
      shift_id: e
    };
    // this.checkshift = [];
    this.http
      .post(`${apiUrl.url}routine/all`, data, { headers: header })
      .map(res => res.json())
      .subscribe(data => {
        // console.log("period list : ", data.data);
        this.periodList = data.data;
        this.showLoader = false;
      });
  }






  getUserDataFromLocal() {
    let data = localStorage.getItem("userData");
    this.localUserData = JSON.parse(data);
    // console.log('local data : ', this.localUserData);
  }





  onPeriodSubmit() {
    this.showLoader = true;
    // let todayDate = new Date().toLocaleString().substring(0,9).toString();
    // todayDate = todayDate.toLocaleString();
    if(this.period == '') {
      this.showLoader = false;
      this.showAlert('Please select your period');
      return;
    }

    let data = {
      period_id: this.period,
      org_id: this.localUserData.org_code,
      master_id: this.localUserData.master_id,
      date: this.makeDateString(new Date())
    };

    // console.log("data : ", data);
    let header = new Headers();
    header.set("Content-Type", "application/json");

    this.http
      .post(`${apiUrl.node_url}attendance/getAttedData`, data, {
        headers: header
      })
      .map(res => res.json())
      .subscribe(async data => {
        // console.log("data : ", data.data[0]);

        if (data.success) {
          this.showPeriodForm = false;
          this.attendenceCode = data.data[0].atted_code;

          // this.room = {
          //   room: this.attPin,
          //   name: this.localUserData.master_id
          // }
          // this.genAttCode = await data.data[0].atted_code;
          // localStorage.setItem('attedCode', JSON.stringify(this.genAttCode));
          // this.showTeacherForm = false;
          // this.showAlert(data.msg);
          this.showLoader = false;
        } else {
          this.showLoader = false;
          this.showPeriodForm = true;
          this.showAlert('Wrong selection');          
        }
      });
  }





  makeDateString(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return day + "/" + month + "/" + year;
  }

  // showAlert(msg) {
  //   const alert = this.alertCtrl.create({
  //     title: "Alert!",
  //     subTitle: msg,
  //     buttons: ["OK"]
  //   });
  //   alert.present();
  // }



  showAlert(msg) {
  const alert = this.alertCtrl.create({
    title: "Alert!",
    cssClass: "confirmAlert",
    subTitle: msg,
    buttons: [
      {
        text: 'OK',
        cssClass: "okBtn",
        handler: () => {
          // this.navCtrl.push(WelcomeGuestPage);
        }
      }
    ]
  });
  
  alert.present();
  }



  getStudentDetails() {
    this.showLoader = true;
    // this.presentLoading(true);

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let data = {
      'master_id': this.localUserData.master_id
    }

    this.http.post(`${apiUrl.url}student/studentdetail`, data, options).
      map(res => res.json()).subscribe(data => {
        //console.log('student detail data : ', data);
        if (data.data[0]) {
          // this.presentLoading(false);
          this.student = data.data[0];
          console.log('student details : ...', this.student);
          this.getPeriod(this.student.shift_id);          
          // this.presentLoading(false);
          this.showLoader = false;
        }else{
          this.showLoader = false;
        }
      });
  }




  // presentLoading(load: boolean) {
	// 	if (load) {
	// 		return this.loading.present();
	// 	}
	// 	else {
	// 		setTimeout(() => {
	// 			return this.loading.dismiss();
	// 		}, 1000);
	// 	}
  // }



  // initLoader() {
	// 	this.loading = this.loadingController.create({
	// 		spinner: 'hide',
	// 		content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
	// 	});
  // }

}
