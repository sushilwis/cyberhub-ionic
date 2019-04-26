import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import AccountPage, { ModalPage, Modal1Page } from './account';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    AccountPage,
    ModalPage,
    Modal1Page,
  ],

  imports: [
    IonicPageModule.forChild(AccountPage),
  ],
  
  entryComponents: [
    ModalPage,
    Modal1Page,
  ],

  providers: [
    Camera
  ]
})
export class AccountPageModule {}
