import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentRegPage } from './parent-reg';

@NgModule({
  declarations: [
    ParentRegPage,
  ],
  imports: [
    IonicPageModule.forChild(ParentRegPage),
  ],
})
export class ParentRegPageModule {}
