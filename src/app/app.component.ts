import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, List, Item, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { MenuController } from "ionic-angular";
import { HomePage } from "../pages/home/home";
// import { ListPage } from '../pages/list/list';
import { LiveStreamPage } from "../pages/live-stream/live-stream";
import { AttendancePage } from "../pages/attendance/attendance";
import { RoutinePage } from "../pages/routine/routine";
import { PersonalNoticePage } from "../pages/personal-notice/personal-notice";
import { GuestEnquiryPage } from "../pages/guest-enquiry/guest-enquiry";
import { StudentLoginPage } from "../pages/student-login/student-login";
import StudentsTabsPage from "../pages/students-tabs/students-tabs";
import { StaffTabsPage } from "../pages/staff-tabs/staff-tabs";
import { App } from "ionic-angular";

import { FcmProvider } from "../providers/fcm/fcm";
import { ToastController } from "ionic-angular";
// import { Subject } from 'rxjs/Subject';
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Firebase } from "@ionic-native/firebase";
import { NotificationListPage } from "../pages/notification-list/notification-list";
import { ParentHomePage } from "../pages/parent-home/parent-home";
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

// import {timer} from 'rxjs/observable/timer';

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  // showSplash: boolean = true;

  pages: Array<{ title: string; component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    public app: App,
    public fcm: FcmProvider,
    public toastCtrl: ToastController,
    private firebase: Firebase
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Guest", component: GuestEnquiryPage },
      { title: "Live-Stream", component: LiveStreamPage },
      { title: "Attendance", component: AttendancePage },
      { title: "Routine", component: RoutinePage },
      { title: "Personal Notice", component: PersonalNoticePage },
      { title: "Log out", component: GuestEnquiryPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let localVal = JSON.parse(localStorage.getItem("userData"));
      let parentLocalVal = JSON.parse(localStorage.getItem('parentData'));

      //   this.afs.collection('devices', ref => ref.where('userId', '==','testUser1')).snapshotChanges().subscribe(data => {
      //    data.map(x => console.log(x.payload.doc.data()))
      //  })
      // abcs.subscribe(data => console.log(data))
      // abcs.valueChanges().subscribe(data => console.log(data))

      //  yolo kya baat
      
      // Listen to incoming messages
      // this.fcm.listenToNotifications().pipe(
      //   tap(msg => {
      //     // show a toast
      //     const toast = this.toastCtrl.create({
      //       message: msg.body,
      //       duration: 3000,
      //       position: 'top'
      //     });
      //     toast.present();
      //   })
      // )
      // .subscribe((data)=> {
      //   console.log('listen to notification : ', data);
      // })

      if (localVal) {
        this.fcm.getToken();
        if (localVal.user_type_id == 4) {
          this.rootPage = StudentsTabsPage;
        }
        if (localVal.user_type_id == 2) {
          this.rootPage = StaffTabsPage;
        }
        if (localVal.user_type_id == 3) {
          this.rootPage = ParentHomePage;
        }
      } else if(parentLocalVal){
        if(parentLocalVal.user_type_id == 3){
          this.rootPage = ParentHomePage;
        }
      }else {
        this.rootPage = HomePage;
      }

      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
      if (this.platform.is('android') || this.platform.is('ios')) {

        this.firebase.onNotificationOpen().subscribe((data: any) => {
          if (data.wasTapped) {
            // Notification was received on device tray and tapped by the user.
            if (localVal.user_type_id == 4) {
              this.nav.push(NotificationListPage)
            }
            if (localVal.user_type_id == 2) {
              // this.rootPage = StaffTabsPage;
            }
          } else {
            // Notification was received in foreground. Maybe the user needs to be notified.
          }
        })
      }
      // timer(3000).subscribe(()=> this.showSplash = false);
      // this.splashScreen.show();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == "Log out") {
      this.logOut();
    } else {
      this.nav.setRoot(page.component);
    }
  }

  logOut() {
    localStorage.clear();
    this.nav.setRoot(HomePage);
  }

  // abc() {
  //     this.platform.ready().then(() => {

  //       // Get a FCM token
  //       this.fcm.getToken()

  //       // Listen to incoming messages
  //       this.fcm.listenToNotifications().pipe(
  //         tap(msg => {
  //           // show a toast
  //           const toast = this.toastCtrl.create({
  //             message: msg.body,
  //             duration: 3000
  //           });
  //           toast.present();
  //         })
  //       )
  //       .subscribe()
  //     // }

  //     });
  //   // }
  // }
}
