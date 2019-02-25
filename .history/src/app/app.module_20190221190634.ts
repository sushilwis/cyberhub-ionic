import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AnimationService, AnimatesDirective } from 'css-animator';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';
import { NgCalendarModule } from 'ionic2-calendar';
// import { File } from '@ionic-native/file';
// import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
// import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GuestEnquiryPage } from '../pages/guest-enquiry/guest-enquiry';
import { SchoolListingPage } from '../pages/school-listing/school-listing';
import { SchoolDetailsPage } from '../pages/school-details/school-details';
import { ExpandableHeaderComponent } from '../components/expandable-header/expandable-header';
import { PdfDownloadPage } from '../pages/pdf-download/pdf-download';
import { StudentLoginPage } from '../pages/student-login/student-login';
import { LibraryListPage } from '../pages/library-list/library-list';
import { StudentOwndetailsPage } from '../pages/student-owndetails/student-owndetails';
import { PersonalNoticePage } from '../pages/personal-notice/personal-notice';
import { LiveStreamPage } from '../pages/live-stream/live-stream';
import { AttendancePage } from '../pages/attendance/attendance';
import { RoutinePage } from '../pages/routine/routine';
import { ParentsLoginPage } from '../pages/parents-login/parents-login';
import { ParentsStudentViewPage } from '../pages/parents-student-view/parents-student-view';
import { ParentsChildTabsPage } from '../pages/parents-child-tabs/parents-child-tabs';
import { StudentLibraryListPage } from '../pages/student-library-list/student-library-list';
import { ProfilePage } from '../pages/student-library-list/student-library-list';
import { StudentNoticeBoardPage, NoticeModalPage } from '../pages/student-notice-board/student-notice-board';
import AccountPage, { ModalPage } from '../pages/account/account';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { ParentsAccountPage } from '../pages/parents-account/parents-account';
import { StaffLoginPage } from '../pages/staff-login/staff-login';
import { StaffInfoPage } from '../pages/staff-info/staff-info';
import { StaffComplainPage } from '../pages/staff-complain/staff-complain';
import { GetAttendancePage } from '../pages/get-attendance/get-attendance';
import { AttendanceListPage } from '../pages/attendance-list/attendance-list';
import { PrincipalExamviewPage } from '../pages/principal-examview/principal-examview';
import { PrincipalComplaindeskPage } from '../pages/principal-complaindesk/principal-complaindesk';
import { ComplainReplyPage } from '../pages/complain-reply/complain-reply';
import { StuffExamdutyPage } from '../pages/stuff-examduty/stuff-examduty';
// import { StaffInfoPage } from '../pages/staff-info/staff-info';
import { SchoolcalenderPage } from '../pages/schoolcalender/schoolcalender';
import StudentsTabsPage from '../pages/students-tabs/students-tabs';
// import { AccountPage, ModalPage } from '../pages/account/account';
// import { StudentNoticeBoardPage, NoticeModalPage } from './student-notice-board';
import { StuffChangePassPage } from '../pages/stuff-change-pass/stuff-change-pass';

// import { RippleDirective } from 'ng2-ripple-directive';

// import { StreamingMedia } from '@ionic-native/streaming-media';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatServProvider } from '../providers/chat-serv/chat-serv';
import { TestPage } from '../pages/test/test';
import { StdRegPage } from '../pages/std-reg/std-reg';
import { StuffEditPage } from '../pages/stuff-edit/stuff-edit';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
import { FileOpener } from "@ionic-native/file-opener";
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { StuffRegistrationPage } from '../pages/stuff-registration/stuff-registration';
import { WelcomeGuestPage } from '../pages/welcome-guest/welcome-guest';
import { SearchOrganisationPage } from '../pages/search-organisation/search-organisation';

import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FcmProvider } from '../providers/fcm/fcm';

// const firebase = {
//  // your firebase web config
//     apiKey: "AIzaSyDPcwzadP1MQHKAVdrSZ45cXhq_vallj94",
//     authDomain: "inunco-app.firebaseapp.com",
//     databaseURL: "https://inunco-app.firebaseio.com",
//     projectId: "inunco-app",
//     storageBucket: "inunco-app.appspot.com",
//     messagingSenderId: "1079256060941"
// }




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GuestEnquiryPage,
    SchoolListingPage,
    SchoolDetailsPage,
    ExpandableHeaderComponent,
    PdfDownloadPage,
    StudentLoginPage,
    LibraryListPage,
    StudentOwndetailsPage,
    PersonalNoticePage,
    LiveStreamPage,
    AttendancePage,
    RoutinePage,
    ParentsLoginPage,
    ParentsStudentViewPage,
    ParentsChildTabsPage,
    StudentLibraryListPage,
    StudentNoticeBoardPage,
    AccountPage,
    ModalPage,
    ChangepasswordPage,
    ParentsAccountPage,
    StaffLoginPage,
    StaffInfoPage,
    StaffComplainPage,
    GetAttendancePage,
    AttendanceListPage,
    PrincipalExamviewPage,
    PrincipalComplaindeskPage,
    ComplainReplyPage,
    StuffExamdutyPage,
    // RippleDirective,
    AnimatesDirective,
    SchoolcalenderPage,
    StudentsTabsPage,
    TestPage,
    StdRegPage,
    ProfilePage,
    NoticeModalPage,
    StuffChangePassPage,
    StuffEditPage,
    StuffRegistrationPage,
    WelcomeGuestPage,
    SearchOrganisationPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    NgCalendarModule,
    // PdfViewerModule,
    AngularFireModule.initializeApp(firebase), 
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GuestEnquiryPage,
    SchoolListingPage,
    SchoolDetailsPage,
    PdfDownloadPage,
    StudentLoginPage,
    LibraryListPage,
    StudentOwndetailsPage,
    PersonalNoticePage,
    LiveStreamPage,
    AttendancePage,
    RoutinePage,
    ParentsLoginPage,
    ParentsStudentViewPage,
    ParentsChildTabsPage,
    StudentLibraryListPage,
    StudentNoticeBoardPage,
    AccountPage,
    ModalPage,
    ChangepasswordPage,
    ParentsAccountPage,
    StaffLoginPage,
    StaffInfoPage,
    StaffComplainPage,
    GetAttendancePage,
    AttendanceListPage,
    PrincipalExamviewPage,
    PrincipalComplaindeskPage,
    ComplainReplyPage,
    StuffExamdutyPage,
    SchoolcalenderPage,
    StudentsTabsPage,
    TestPage,
    StdRegPage,
    ProfilePage,
    NoticeModalPage,
    StuffChangePassPage,
    StuffEditPage,
    StuffRegistrationPage,
    WelcomeGuestPage,
    SearchOrganisationPage,
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AnimationService,
    File,
    DocumentViewer,
    ChatServProvider,
    FileTransfer,
    // FileUploadOptions,
    FileTransferObject,
    Camera,
    FilePath,
    FileOpener,
    Transfer,
    Firebase,
    FcmProvider,
    // Camera,
    // StreamingMedia
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
