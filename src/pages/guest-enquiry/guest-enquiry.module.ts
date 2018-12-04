import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestEnquiryPage } from './guest-enquiry';

@NgModule({
  declarations: [
    GuestEnquiryPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestEnquiryPage),
  ],
})
export class GuestEnquiryPageModule {}
