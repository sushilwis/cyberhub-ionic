import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import AccountPage, { ModalPage } from './account';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    AccountPage,
    ModalPage
  ],

  imports: [
    IonicPageModule.forChild(AccountPage),
  ],
  
  entryComponents: [
    ModalPage
  ],

  providers: [
    Camera
  ]
})
export class AccountPageModule {}
