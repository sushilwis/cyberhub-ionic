import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { LiveStreamPage } from '../pages/live-stream/live-stream';
import { AttendancePage } from '../pages/attendance/attendance';
import { RoutinePage } from '../pages/routine/routine';
import { PersonalNoticePage } from '../pages/personal-notice/personal-notice';
import { GuestEnquiryPage } from '../pages/guest-enquiry/guest-enquiry';
import { StudentLoginPage } from '../pages/student-login/student-login';
import StudentsTabsPage from '../pages/students-tabs/students-tabs';
import { StaffInfoPage } from '../pages/staff-info/staff-info';
import { App } from 'ionic-angular';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController, public app: App) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Guest', component: GuestEnquiryPage },
      // { title: 'List', component: ListPage },
      { title: 'Live-Stream', component: LiveStreamPage },
      { title: 'Attendance', component: AttendancePage },
      { title: 'Routine', component: RoutinePage },
      { title: 'Personal Notice', component: PersonalNoticePage },
      { title: 'Log out', component: GuestEnquiryPage },
    ];
  }



  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let localVal = JSON.parse(localStorage.getItem('userData'));

      if(localVal){
        if(localVal.user_type_id == 4){
          this.rootPage = StudentsTabsPage;
        }
        if(localVal.user_type_id == 2){
          this.rootPage = StaffInfoPage;
        }
      }else{
        this.rootPage = HomePage;
      }

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.splashScreen.show();
    });
  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title == "Log out"){
      this.logOut();
    } else {
      this.nav.setRoot(page.component);
    }    
  }



  logOut(){
    localStorage.clear();
    this.nav.setRoot(HomePage);
  }



}
