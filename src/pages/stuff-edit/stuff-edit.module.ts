import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StuffEditPage } from './stuff-edit';

@NgModule({
  declarations: [
    StuffEditPage,
  ],
  imports: [
    IonicPageModule.forChild(StuffEditPage),
  ],
  entryComponents: [
    StuffEditPage,
  ]
})
export class StuffEditPageModule {}
