import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import * as io from "socket.io-client";
import StudentsTabsPage from '../students-tabs/students-tabs';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-test",
  templateUrl: "test.html"
})
export class TestPage implements OnInit {
  chats: any;
  loading: any;
  room: any;
  joinned: boolean = false;
  newUser: any = { nickname: "", room: "" };
  msgData: any = { room: "", nickname: "", message: "" };
  socket = io("http://18.191.46.158:3000/");
  localRoomData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingController: LoadingController
  ) {
    this.initLoader();
  }

  ngOnInit() {
    this.presentLoading(true);
    this.getRoomDataFromLocal();

    this.socket.on("connect", () => {
      this.socket.emit("join", this.localRoomData, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("No error");
        }
      });
    });

    this.socket.on("updateUserList", users => {
      console.log(users);
    });

    this.socket.on("attedStatus", status => {
      console.log("Status : ", status);
      if (status) {
        this.presentLoading(false);
        this.showAlert("Attendence Successful.");
        this.socket.emit("forceDisconnect");
        this.navCtrl.setRoot(StudentOwndetailsPage);
      } else {
        this.showAlert("Attendence Not Successful.");
      }
    });

    this.socket.on("disconnect", function() {
      console.log("Disconnected from server");
    });

    // setTimeout(()=>{
    //   this.presentLoading(false);
    //   this.navCtrl.setRoot(StudentsTabsPage);
    // }, 15000);
  }

  ionViewDidLoad() {
    // this.presentLoading(true);
    console.log("ionViewDidLoad TestPage");
  }

  getRoomDataFromLocal() {
    let data = localStorage.getItem("roomData");
    this.localRoomData = JSON.parse(data);
    // console.log('local data : ', this.localUserData);
    // this.room = {
    //   room: JSON.parse(localStorage.getItem('attedCode')),
    //   name: this.localUserData.master_id
    // }
  }

  showAlert(msg) {
    const alert = this.alertCtrl.create({
      title: "Alert!",
      subTitle: msg,
      buttons: ["OK"]
    });
    alert.present();
  }

  presentLoading(load: boolean) {
    if (load) {
      return this.loading.present();
    } else {
      setTimeout(() => {
        return this.loading.dismiss();
      }, 1000);
    }
  }

  initLoader() {
    this.loading = this.loadingController.create({
      spinner: "hide",
      content:
        '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
    });
  }
}
