import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentsAccountPage } from './parents-account';

@NgModule({
  declarations: [
    ParentsAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(ParentsAccountPage),
  ],
})
export class ParentsAccountPageModule {}
