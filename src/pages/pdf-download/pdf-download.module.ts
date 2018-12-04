import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdfDownloadPage } from './pdf-download';

@NgModule({
  declarations: [
    PdfDownloadPage,
  ],
  imports: [
    IonicPageModule.forChild(PdfDownloadPage),
  ],
})
export class PdfDownloadPageModule {}
