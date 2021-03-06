import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, Platform, ModalController, ViewController, AlertController, ActionSheetController, ToastController } from 'ionic-angular';
import { AddChildPage } from '../add-child/add-child';
import { ViewChildPage } from '../view-child/view-child';
import { Http, Jsonp, RequestOptions, Headers } from '@angular/http';
import { HomePage } from '../home/home';
import { Modal1Page } from '../account/account';
import { apiUrl } from '../../apiUrl';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Transfer, FileUploadOptions } from '@ionic-native/transfer';


@IonicPage()
@Component({
  selector: 'page-parent-home',
  templateUrl: 'parent-home.html',
})
export class ParentHomePage {
  guestTab: string = 'search';
  profile_image: string;
  localUserData: any;
  issecurityadded: any;
  imageURI: any;
  imageFileName: any;
  parentDetails: any;
  parentName: any;
  loading: any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public menuCtrl: MenuController, 
    public loadingController: LoadingController, 
    public http: Http, 
    public platform: Platform, 
    public modalCtrl: ModalController, 
    public viewCtrl: ViewController, 
    public alertCtrl: AlertController,   
    public jsonp: Jsonp,
    public camera: Camera, 
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController, 
    public actionSheetCtrl: ActionSheetController,  
    public transfer: Transfer,
  ) {
    this.getUserDataFromLocal();
    this.initLoader();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentHomePage');
  }

  goToAddChild() {
    this.navCtrl.push(AddChildPage);
  }

  goToViewChildDetails() {
    this.navCtrl.push(ViewChildPage);
  }

  goToLogout() {
    this.showAlert('Logout !', 'Are you sure ?');
    // localStorage.clear();
    // this.navCtrl.setRoot(HomePage);
  }



  showAlert(title, msg) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      cssClass: "confirmAlert",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'OK',
          cssClass: "okBtn",
          handler: () => {
            // console.log('Agree clicked');
            localStorage.clear();
            this.navCtrl.setRoot(HomePage);
            // this.navCtrl.push(StudentLoginPage);
          }
        }
      ]
    });
    alert.present();
  }




  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data); 
    console.log('local data : ...', data);    
    
    if(this.localUserData){
      // alert('In the student home before modal called.');
      if(this.localUserData.is_app_closed){
          // console.log('app closed false');
          let modal = this.modalCtrl.create(Modal1Page);
          modal.present();
      }else{
        // console.log('app closed false');        
      }
    } 
    
    if (this.localUserData.profile_image && this.localUserData.digit_pin != 0){
      this.profile_image = `${apiUrl.url}public/uploads/profile_pic/${this.localUserData.profile_image}`
      let setdata = {
        u_id: this.localUserData.id,
        pin: this.localUserData.digit_pin,
      };
      localStorage.setItem("securitypinadded", JSON.stringify(setdata));
      this.issecurityadded = JSON.parse(localStorage.getItem("securitypinadded"));    
    }else{
      this.profile_image = `assets/imgs/student-icon.png`;
    }
  }





  getImage() {
    const options: CameraOptions = {
      quality: 30,
      allowEdit: false,
      destinationType: this.camera.DestinationType.FILE_URI,
      correctOrientation:true
    }
  
    this.camera.getPicture(options).then((imageData) => {
      
      this.imageURI = imageData;
      this.imageFileName = imageData;
      const fileTransfer: any = this.transfer.create();

      let options: FileUploadOptions = {
        fileKey: 'file',
        fileName: 'ionicfile.jpg',
        chunkedMode: false,
        mimeType: "image/jpeg",
        headers: {},
        params: {
          id: this.localUserData.id
        },
      }
      // this.presentLoading(true);

      fileTransfer.upload(this.imageURI, `${apiUrl.url}user/addprofileimage`, options)
        .then((data) => {
          if(data){
            // alert(JSON.stringify(data.response));
            let parseData = JSON.parse(data.response);
            // this.presentLoading(false);
            this.imageFileName = `${apiUrl.url}public/uploads/profile_pic/${parseData.data.profile_image}`;
            //alert(this.imageFileName);
            localStorage.removeItem('userData');
            localStorage.setItem('userData', JSON.stringify(parseData.data));
            this.getUserDataFromLocal();
            this.presentToast("Image uploaded successfully");
          }
      }, (err) => {
        console.log(err);
        alert(JSON.stringify(err));
      });     
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }






  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    
    toast.present();
  }







  // getParentDetails() {
  //   this.presentLoading(true);

  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   let options = new RequestOptions({ headers: headers });

  //   let data = {
  //     'master_id': this.localUserData.master_id
  //   }

  //   this.http.post(`${apiUrl.url}student/studentdetail`, data, options).
  //     map(res => res.json()).subscribe(data => {
  //       this.presentLoading(false);
  //       // console.log('student detail data : ', data);
  //       if (data.data[0]) {
  //         this.parentDetails = data.data[0];
  //         this.parentName = data.data[0].f_name;
  //         // console.log('student detail data : ', data.data[0]);          
  //       }
  //     });
  // }






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







  initLoader() {
		this.loading = this.loadingController.create({
			spinner: 'hide',
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
  }







}
