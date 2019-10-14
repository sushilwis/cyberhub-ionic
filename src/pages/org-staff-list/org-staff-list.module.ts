import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgStaffListPage } from './org-staff-list';

@NgModule({
  declarations: [
    OrgStaffListPage,
  ],
  imports: [
    IonicPageModule.forChild(OrgStaffListPage),
  ],
})
export class OrgStaffListPageModule {}
