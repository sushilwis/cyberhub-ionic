import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmissionFormPage } from './admission-form';

@NgModule({
  declarations: [
    AdmissionFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmissionFormPage),
  ],
})
export class AdmissionFormPageModule {}
