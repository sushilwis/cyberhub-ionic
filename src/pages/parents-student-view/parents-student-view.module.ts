import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentsStudentViewPage } from './parents-student-view';

@NgModule({
  declarations: [
    ParentsStudentViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ParentsStudentViewPage),
  ],
})
export class ParentsStudentViewPageModule {}
