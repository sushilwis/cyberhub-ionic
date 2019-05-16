import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchOrganisationPage } from './search-organisation';

@NgModule({
  declarations: [
    SearchOrganisationPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchOrganisationPage),
  ],
})
export class SearchOrganisationPageModule {}
