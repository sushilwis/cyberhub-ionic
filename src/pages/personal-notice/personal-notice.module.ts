import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalNoticePage } from './personal-notice';

@NgModule({
  declarations: [
    PersonalNoticePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalNoticePage),
  ],
})
export class PersonalNoticePageModule {}
