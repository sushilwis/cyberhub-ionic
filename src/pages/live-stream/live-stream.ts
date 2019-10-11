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
  video_details: any = [];
  showLoader: boolean = false;
  localUserData: any;
  orgDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private http: Http) {
	// this.loadingCtrl.page(true);  	
  }

  ngOnInit(){
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data); 
    this.getUserData();
  }
  getUserData() {
    this.showLoader = true;
    //this.presentLoading(true);
    var header = new Headers();
    header.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: header });

    let data = {
      'org_id': this.localUserData.org_code,
      // 'master_id': this.localUserData.master_id
    }

    this.http.post(`${apiUrl.url}org/getdetail`, data, options).
      map(res => res.json()).subscribe(data => {

        if (data.data) {
          //this.presentLoading(false);
          // this.orgDetails = data.data[0];

          if (data.data[0].youtube_channel_id) {
            this.getVideos(data.data[0].youtube_channel_id)
          }
        }
        this.showLoader = false;

      });
  }


  getVideos(chanelId: string) {
    this.http.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBuM2gCCThKbGByZCCG8YAdkqkSUbItSZ8&channelId=${chanelId}&part=snippet,id&order=date&maxResults=20`).map(resp => resp.json()).subscribe((data: any) => {
      let videos = data.items;
      let length = videos.length;
      let i = 0;

      videos.forEach(video => {
        i++;
        if (i != length)
          this.video_details.push(video);
      });

    });
  }

//  presentLoadingDefault() {
//   let loading = this.loadingCtrl.create({
//     content: 'Please wait...'
//   });

//   loading.present();

//   setTimeout(() => {
//     loading.dismiss();
//   }, 5000);
// }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad LiveStreamPage');
//   }



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
