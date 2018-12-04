import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountPage, ModalPage } from './account';

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
})
export class AccountPageModule {}
