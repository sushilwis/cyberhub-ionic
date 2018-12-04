import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AnimationService, AnimatesDirective } from 'css-animator';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';
import { NgCalendarModule } from 'ionic2-calendar';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

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
import { StudentNoticeBoardPage } from '../pages/student-notice-board/student-notice-board';
import { AccountPage, ModalPage } from '../pages/account/account';
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
import { SchoolcalenderPage } from '../pages/schoolcalender/schoolcalender';
import { StudentsTabsPage } from '../pages/students-tabs/students-tabs';
// import { AccountPage, ModalPage } from '../pages/account/account';

import { RippleDirective } from 'ng2-ripple-directive';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



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
    RippleDirective,
    AnimatesDirective,
    SchoolcalenderPage,
    StudentsTabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    NgCalendarModule,
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
    StudentsTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AnimationService,
    File,
    DocumentViewer,
    FileTransfer,
    NativePageTransitions
  ]
})
export class AppModule {}
