import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalNoticePage } from './personal-notice';
import { StudentNoticeBoardPage, NoticeModalPage } from '../student-notice-board/student-notice-board';

@NgModule({
  declarations: [
    PersonalNoticePage,
    NoticeModalPage
  ],
  imports: [
    IonicPageModule.forChild(PersonalNoticePage),
  ],
  entryComponents: [
    NoticeModalPage
  ]
})
export class PersonalNoticePageModule {}
