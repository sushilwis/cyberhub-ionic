import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibraryListPage } from './library-list';

@NgModule({
  declarations: [
    LibraryListPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraryListPage),
  ],
})
export class LibraryListPageModule {}
