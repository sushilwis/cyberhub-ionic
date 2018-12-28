import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentNoticeBoardPage, NoticeModalPage } from './student-notice-board';

@NgModule({
  declarations: [
    StudentNoticeBoardPage,
    NoticeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentNoticeBoardPage),
  ],
  entryComponents: [
    NoticeModalPage,
  ]
})
export class StudentNoticeBoardPageModule {}
