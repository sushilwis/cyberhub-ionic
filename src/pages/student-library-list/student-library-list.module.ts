import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentLibraryListPage } from './student-library-list';

@NgModule({
  declarations: [
    StudentLibraryListPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentLibraryListPage),
  ],
})
export class StudentLibraryListPageModule {}
