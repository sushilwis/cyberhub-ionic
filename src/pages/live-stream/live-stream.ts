import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
// import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { Http, RequestOptions, Headers } from '@angular/http';
import { apiUrl } from '../../apiUrl';

/**
 * Generated class for the LiveStreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-live-stream',
  templateUrl: 'live-stream.html',
})
export class LiveStreamPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private http: Http) {
	// this.loadingCtrl.page(true);  	
  }

  ngOnInit(){

  }

 presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiveStreamPage');
  }



  // createLiveStream(){

  //   let options: StreamingVideoOptions = {
  //     successCallback: () => { console.log('Video played') },
  //     errorCallback: (e) => { console.log('Error streaming') },
  //     orientation: 'landscape',
  //     shouldAutoClose: true,
  //     controls: true
  //   };

    // this.streamingMedia.playVideo('https://path/to/video/stream', options);

    // let header = new Headers();
    // header.set("Content-Type", "application/json");

    // let data = {
    // }

    // this.http
    //     .post(`https://www.googleapis.com/youtube/v3/liveBroadcasts/insert`, data, {headers: header})
    //     .map(res => res.json())
    //     .subscribe(
    //       async data => {
    //         console.log("data : ", data);
    //         if(data){
              
    //         }else{

    //         }          
    // });
  // }
  

}
