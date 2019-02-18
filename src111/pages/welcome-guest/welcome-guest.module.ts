import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeGuestPage } from './welcome-guest';

@NgModule({
  declarations: [
    WelcomeGuestPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeGuestPage),
  ],
})
export class WelcomeGuestPageModule {}
