import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentsChildTabsPage } from './parents-child-tabs';

@NgModule({
  declarations: [
    ParentsChildTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ParentsChildTabsPage),
  ],
})
export class ParentsChildTabsPageModule {}
