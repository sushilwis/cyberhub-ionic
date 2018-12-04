import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffInfoPage } from './staff-info';

@NgModule({
  declarations: [
    StaffInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(StaffInfoPage),
  ],
})
export class StaffInfoPageModule {}
