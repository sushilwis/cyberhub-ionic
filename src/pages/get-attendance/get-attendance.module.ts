import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetAttendancePage } from './get-attendance';

@NgModule({
  declarations: [
    GetAttendancePage,
  ],
  imports: [
    IonicPageModule.forChild(GetAttendancePage),
  ],
})
export class GetAttendancePageModule {}
