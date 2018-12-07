import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestOptions, Headers, Http } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import * as io from "socket.io-client";

/**
 * Generated class for the AttendanceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance-list',
  templateUrl: 'attendance-list.html',
})
export class AttendanceListPage implements OnInit {

  chats: any;
  room: any;
  joinned: boolean = false;
  newUser: any = { nickname: '', room: '' };
  msgData: any = { room: '', nickname: '', message: '' };
  socket = io('http://localhost:3000');
  localUserData: any;
  studentList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }



  ngOnInit(){
    this.getUserDataFromLocal();
    // this.roomName = {
    //   room: JSON.parse(localStorage.getItem('attedCode')),
    //   name: this.localUserData.master_id
    // }
    // this.getStudentList();
    this.socket.on('connect', () => {
      this.socket.emit('join', this.room, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('No error');
        }
      });
    });


    this.socket.on('updateUserList', (users)=> {
      // console.log(users);
      this.studentList = users;

      console.log('Students that gave attendence : ', this.studentList);

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
    console.log('ionViewDidLoad AttendanceListPage');
  }



  getStudentList(){
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let data = {

    }
    
    this.http
      .post(`${apiUrl.node_url}/`, data, {headers: header})
      .map(res => res.json())
      .subscribe(
        async data => {
          console.log("data : ", data);
          if(data.success){
            // this.showAlert(data.msg);
          }else{
            // this.showAlert(data.msg);
          }          
    });
  }





  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);
    console.log('local data : ', this.localUserData); 
    this.room = {
      room: JSON.parse(localStorage.getItem('attedCode')),
      name: this.localUserData.master_id
    }   
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




  addStudentToPeriodAttendanceList(data){
    let header = new Headers();
    header.set("Content-Type", "application/json");
    
    this.http
      .post(`${apiUrl.node_url}attendance/addStudent`, data, {headers: header})
      .map(res => res.json())
      .subscribe(
        async data => {
          console.log("data : ", data);
          if(data.success){
            // this.showAlert(data.msg);
          }else{
            // this.showAlert(data.msg);
          }          
    });
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
