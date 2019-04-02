import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolcalenderPage } from './schoolcalender';

@NgModule({
  declarations: [
    SchoolcalenderPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolcalenderPage),
  ],
})
export class SchoolcalenderPageModule {}
