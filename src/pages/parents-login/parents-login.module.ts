import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentsLoginPage } from './parents-login';

@NgModule({
  declarations: [
    ParentsLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(ParentsLoginPage),
  ],
})
export class ParentsLoginPageModule {}
