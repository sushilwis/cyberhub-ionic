import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentsAccountPage } from './parents-account';
import { StuffChangePassPage } from '../stuff-change-pass/stuff-change-pass';
import { StuffEditPage } from '../stuff-edit/stuff-edit';

@NgModule({
  declarations: [
    ParentsAccountPage,
    StuffChangePassPage,
    StuffEditPage
  ],
  imports: [
    IonicPageModule.forChild(ParentsAccountPage),
  ],
  entryComponents: [
    StuffChangePassPage,
    StuffEditPage
  ]
})
export class ParentsAccountPageModule {}
