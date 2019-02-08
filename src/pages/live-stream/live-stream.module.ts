import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveStreamPage } from './live-stream';
import { StreamingMedia } from '@ionic-native/streaming-media';

@NgModule({
  declarations: [
    LiveStreamPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveStreamPage),
  ],
  providers: [StreamingMedia]
})
export class LiveStreamPageModule {}
