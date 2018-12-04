import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolListingPage } from './school-listing';

@NgModule({
  declarations: [
    SchoolListingPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolListingPage),
  ],
})
export class SchoolListingPageModule {}
