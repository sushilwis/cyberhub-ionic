import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentOwndetailsPage } from './student-owndetails';

@NgModule({
  declarations: [
    StudentOwndetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentOwndetailsPage),
  ],
})
export class StudentOwndetailsPageModule {}
