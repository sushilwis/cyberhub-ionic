import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StdRegPage } from './std-reg';

@NgModule({
  declarations: [
    StdRegPage,
  ],
  imports: [
    IonicPageModule.forChild(StdRegPage),
  ],
})
export class StdRegPageModule {}
