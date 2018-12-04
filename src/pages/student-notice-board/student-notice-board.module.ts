import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentNoticeBoardPage } from './student-notice-board';

@NgModule({
  declarations: [
    StudentNoticeBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentNoticeBoardPage),
  ],
})
export class StudentNoticeBoardPageModule {}
