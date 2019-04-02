import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, AlertController, ModalController, ViewController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { SchoolDetailsPage } from '../school-details/school-details';
import { LibraryListPage } from '../library-list/library-list';
import { LiveStreamPage } from '../live-stream/live-stream';
import { apiUrl } from '../../apiUrl'
import { NoticeModalPage } from '../student-notice-board/student-notice-board';
/**
/**
 * Generated class for the PdfDownloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdf-download',
  templateUrl: 'pdf-download.html',
})
export class PdfDownloadPage {

  loading: any;
  noticeList: any;
  showList: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http,
    public loadingController: LoadingController,
    private file: File,
    public document: DocumentViewer,
    public transfer: FileTransfer,
    public platform: Platform, 
    private alertCtrl: AlertController, public modalCtrl: ModalController, public viewCtrl: ViewController,) {
    let id = navParams.get('id');
    this.getDetails(id);
    this.initLoader();
    this.presentLoading(true);
  }



  initLoader() {
    this.loading = this.loadingController.create({
      spinner: 'hide',
      content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
    });
  }



  getDetails(id: string){
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let data = {
      org_id: id,
    }

    this.http.post(`${apiUrl.url}notice/get-general`, data, {headers: header}).
      map(res => res.json()).subscribe(data => {
        console.log(data);
        this.presentLoading(false);
        this.noticeList = data.data;
 
        if(data.data[0].notice){
          this.showList = true;
        }else{
          this.showList = false;
        } 
        
        console.log('show list : ', this.showList);        
      })
  }



  // downloadAndOpenPdf(url: string) {
  //   console.log(url);

  //   let path = null;
  //   if (this.platform.is('ios')) {
  //     path = this.file.documentsDirectory;
  //   } else if (this.platform.is('android')) {
  //     path = this.file.dataDirectory;
  //   }
  //   const transfer = this.transfer.create();

  //   transfer.download(url, path + 'myfile.pdf').then(entry => {
  //     let url = entry.toURL();
  //     this.document.viewDocument(url, 'application/pdf', {});
  //   });
  // }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfDownloadPage');
  }

  goToHome(){
		this.navCtrl.push(SchoolDetailsPage);
	}
  gotoLiveStream(){
    this.navCtrl.push(LiveStreamPage);
  }
  goToLibrary(){
    this.navCtrl.push(LibraryListPage);
  }

  presentLoading(load: boolean) {
    if (load) {
      return this.loading.present();
    }
    else {
      setTimeout(() => {
        return this.loading.dismiss();
      }, 1000);
    }

  }





  showPdf(url: string) {
    console.log(url);    
    this.document.viewDocument(url, 'application/pdf', {});
  }




  presentProfileModal(id) {
    // console.log('clicked...', id); 
    let filterNotice = this.noticeList.filter(function(item) {
      return item.id == id;
    });
       
    let profileModal = this.modalCtrl.create(NoticeModalPage, { notice: filterNotice[0] });
    profileModal.present();
  }





  dismiss() {
    this.viewCtrl.dismiss();
  }
}
