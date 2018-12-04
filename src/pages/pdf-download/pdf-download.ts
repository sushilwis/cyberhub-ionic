import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { SchoolDetailsPage } from '../school-details/school-details';
import { LibraryListPage } from '../library-list/library-list';
import { LiveStreamPage } from '../live-stream/live-stream';
import { apiUrl } from '../../apiUrl'
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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http,
    public loadingController: LoadingController,
    private file: File,
    public document: DocumentViewer,
    public transfer: FileTransfer,
    public platform: Platform, private alertCtrl: AlertController) {
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
    this.http.get(`${apiUrl.url}/notice/${id}/1`).
      map(res => res.json()).subscribe(data => {
        this.presentLoading(false);
        this.noticeList = data;
        console.log(data);

      })
  }
  downloadAndOpenPdf(url: string) {
    console.log(url);

    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.dataDirectory;
    }
    const transfer = this.transfer.create();

    transfer.download(url, path + 'myfile.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    });
  }
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
}
