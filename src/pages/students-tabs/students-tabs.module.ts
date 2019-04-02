import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import StudentsTabsPage from './students-tabs';

@NgModule({
  declarations: [
    StudentsTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentsTabsPage),
  ],
})
export class StudentsTabsPageModule {}
