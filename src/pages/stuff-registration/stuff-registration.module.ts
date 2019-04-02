import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StuffRegistrationPage } from './stuff-registration';

@NgModule({
  declarations: [
    StuffRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(StuffRegistrationPage),
  ],
  entryComponents: [
    StuffRegistrationPage,
  ]
})
export class StuffRegistrationPageModule {}
