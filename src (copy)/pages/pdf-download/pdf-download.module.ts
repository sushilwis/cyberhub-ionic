import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdfDownloadPage } from './pdf-download';
import { NoticeModalPage } from '../student-notice-board/student-notice-board';

@NgModule({
  declarations: [
    PdfDownloadPage,
    NoticeModalPage
  ],
  imports: [
    IonicPageModule.forChild(PdfDownloadPage),
  ],
  entryComponents: [
    NoticeModalPage
  ]
})
export class PdfDownloadPageModule {}
