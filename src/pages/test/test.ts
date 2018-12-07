import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as io from "socket.io-client";

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage implements OnInit{

  chats: any;
  room: any;
  joinned: boolean = false;
  newUser: any = { nickname: '', room: '' };
  msgData: any = { room: '', nickname: '', message: '' };
  socket = io('http://localhost:3000');
  localRoomData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.getRoomDataFromLocal();

    this.socket.on('connect', () => {
      this.socket.emit('join', this.localRoomData, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('No error');
        }
      });
    });

    this.socket.on('updateUserList', function (users) {
      console.log(users);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }



  getRoomDataFromLocal() {
    let data = localStorage.getItem('roomData');
    this.localRoomData =  JSON.parse(data);
    // console.log('local data : ', this.localUserData); 
    // this.room = {
    //   room: JSON.parse(localStorage.getItem('attedCode')),
    //   name: this.localUserData.master_id
    // }   
  }

}
