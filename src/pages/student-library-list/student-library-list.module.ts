import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentLibraryListPage, ProfilePage } from './student-library-list';

@NgModule({
  declarations: [
    StudentLibraryListPage,
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentLibraryListPage),
  ],
  entryComponents: [
    ProfilePage,
  ],
})
export class StudentLibraryListPageModule {}
