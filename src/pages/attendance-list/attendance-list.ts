import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RequestOptions, Headers, Http } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import * as io from "socket.io-client";
import { StaffInfoPage } from '../staff-info/staff-info';

/**
 * Generated class for the AttendanceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-attendance-list",
  templateUrl: "attendance-list.html"
})
export class AttendanceListPage implements OnInit {
  chats: any;
  room: any;
  joinned: boolean = false;
  newUser: any = { nickname: "", room: "" };
  msgData: any = { room: "", nickname: "", message: "" };
  socket = io("http://18.191.46.158:3000/");
  localUserData: any;
  studentList: any = [];
  attenStudentList: any = [];
  test: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {
    console.log('attendence list page...');    
    this.getStudentList();
    // this.roomName = {
    //   room: JSON.parse(localStorage.getItem('attedCode')),
    //   name: this.localUserData.master_id
    // }
    // this.getStudentList();
    this.socket.on("connect", () => {
      this.socket.emit("join", this.room, function(err) {
        if (err) {
          // console.log(err);
        } else {
          // console.log('No error');
        }
      });
    });

    this.socket.on("updateUserList", users => {
      // console.log(users);
      this.studentList = users;
      this.studentList.forEach(ele => {
        let foundStd = this.attenStudentList.filter(std => {
          return std.id == ele.name;
        });

        if (foundStd.length > 0) {
          let i = this.attenStudentList.indexOf(foundStd[0]);
          this.attenStudentList.splice(i, 1);
          foundStd[0].isChecked = true;
          this.attenStudentList.push(foundStd[0]);
        }
      });

      // console.log("student list : ", this.attenStudentList);
      // console.log('Students that gave attendence : ', this.studentList);

      // let   data = {
      //             search: {
      //             master_id: this.localUserData.master_id,
      //             org_id: this.localUserData.code_org
      //             },
      //             add: users[0]
      //       };
      // this.addStudentToPeriodAttendanceList(data);
    });
  }

  ionViewDidLoad() {
    // console.log('Atted ID : ', JSON.parse(localStorage.getItem('atted_id')));
    // console.log('ionViewDidLoad AttendanceListPage');
    // setTimeout(()=>{
    //   this.deactivatePeriodAtted(JSON.parse(localStorage.getItem('atted_id')));
    // }, 15000);
  }

  async getStudentList() {
    await this.getUserDataFromLocal();
    let header = new Headers();
    header.set("Content-Type", "application/json");

    if (this.getUserDataFromLocal) {
      let data = {
        dept_id: JSON.parse(localStorage.getItem("department")),
        org_id: this.localUserData.org_code
      };

      this.http
        .post(`${apiUrl.url}student/classstudentlist`, data, {
          headers: header
        })
        .map(res => res.json())
        .subscribe(async data => {
          console.log("student list : ", data);
          if (data.data.length > 1) {
            this.attenStudentList = await data.data;

            await this.attenStudentList.forEach(ele => {
              ele.isChecked = false;
            });

            // console.log("student list : ", this.attenStudentList);
          } else {
          }
        });
    }
  }

  getUserDataFromLocal() {
    let data = localStorage.getItem("userData");
    this.localUserData = JSON.parse(data);
    // this.localUserData =
    // console.log('local data : ', this.localUserData);
    this.room = {
      room: JSON.parse(localStorage.getItem("attedCode")),
      name: this.localUserData.master_id
    };
  }

  // emitJoin(){
  //   this.socket.emit('join', this.roomName, function (err) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('No error');
  //     }
  //   });
  // }

  addStudentToPeriodAttendanceList(data) {
    let header = new Headers();
    header.set("Content-Type", "application/json");

    this.http
      .post(`${apiUrl.node_url}attendance/addStudent`, data, {
        headers: header
      })
      .map(res => res.json())
      .subscribe(async data => {
        // console.log("data : ", data);
        if (data.success) {
          // this.showAlert(data.msg);
        } else {
          // this.showAlert(data.msg);
        }
      });
  }

  deactivatePeriodAtted(id) {
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let data = {
      id: id
    };

    this.http
      .post(`${apiUrl.node_url}attendance/deactivateAtted`, data, {
        headers: header
      })
      .map(res => res.json())
      .subscribe(async data => {
        // console.log("deactivate data : ", data);
        if (data.success) {
          // this.showAlert(data.msg);
        } else {
          // this.showAlert(data.msg);
        }
      });
  }

  checkboxChange(e, id) {
    // console.log('checked value : ', e.value, ' and ID : ', id);
    if (e.value) {
      let foundStd = this.attenStudentList.filter(std => {
        return std.id == id;
      });

      if (foundStd.length > 0) {
        let i = this.attenStudentList.indexOf(foundStd[0]);
        this.attenStudentList.splice(i, 1);
        foundStd[0].isChecked = true;
        this.attenStudentList.splice(i, 0, foundStd[0]);
      }
    } else {
      let foundStd = this.attenStudentList.filter(std => {
        return std.id == id;
      });

      if (foundStd.length > 0) {
        let i = this.attenStudentList.indexOf(foundStd[0]);
        this.attenStudentList.splice(i, 1);
        foundStd[0].isChecked = false;
        this.attenStudentList.splice(i, 0, foundStd[0]);
      }
    }
  }

  onSubmitStdAttendence() {
    let finalStdList = this.attenStudentList.filter(item => {
      return item.isChecked == true;
    });
    // console.log(finalStdList);
    let finalStdIdList = finalStdList.map(item => {
      return item.id;
    });
    // console.log(finalStdIdList);

    let header = new Headers();
    header.set("Content-Type", "application/json");

    let data = {
      id: JSON.parse(localStorage.getItem("atted_id")),
      std_list: finalStdIdList
    };

    this.http
      .post(`${apiUrl.node_url}attendance/addStdListOnPeriod`, data, {
        headers: header
      })
      .map(res => res.json())
      .subscribe(async data => {
        // console.log("attendence data : ", data);
        if (data.success) {
          await localStorage.removeItem("atted_id");
          await localStorage.removeItem("attedCode");
          await localStorage.removeItem("department");
          this.showAlert(data.msg);
          this.navCtrl.push(StaffInfoPage);
        } else {
          this.showAlert(data.msg);
        }
      });
  }

  showAlert(msg) {
    const alert = this.alertCtrl.create({
      title: "Alert!",
      subTitle: msg,
      buttons: ["OK"]
    });
    alert.present();
  }
}








// socket.on('connect', function () {
//   var params = jQuery.deparam(window.location.search);

//   socket.emit('join', params, function (err) {
//     if (err) {
//       alert(err);
//       window.location.href = '/';
//     } else {
//       console.log('No error');
//     }
//   });
// });

// socket.on('disconnect', function () {
//   console.log('Disconnected from server');
// });

// socket.on('updateUserList', function (users) {
//   var ol = jQuery('<ol></ol>');

//   users.forEach(function (user) {
//     ol.append(jQuery('<li></li>').text(user));
//   });

//   jQuery('#users').html(ol);
// });

// socket.on('newMessage', function (message) {
//   var formattedTime = moment(message.createdAt).format('h:mm a');
//   var template = jQuery('#message-template').html();
//   var html = Mustache.render(template, {
//     text: message.text,
//     from: message.from,
//     createdAt: formattedTime
//   });

//   jQuery('#messages').append(html);
//   scrollToBottom();
// });

// socket.on('newLocationMessage', function (message) {
//   var formattedTime = moment(message.createdAt).format('h:mm a');
//   var template = jQuery('#location-message-template').html();
//   var html = Mustache.render(template, {
//     from: message.from,
//     url: message.url,
//     createdAt: formattedTime
//   });

//   jQuery('#messages').append(html);
//   scrollToBottom();
// });

// jQuery('#message-form').on('submit', function (e) {
//   e.preventDefault();

//   var messageTextbox = jQuery('[name=message]');

//   socket.emit('createMessage', {
//     text: messageTextbox.val()
//   }, function () {
//     messageTextbox.val('')
//   });
// });
