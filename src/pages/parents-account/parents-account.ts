import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ModalController, ToastController, ActionSheetController, Platform, ViewController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { StuffChangePassPage } from '../stuff-change-pass/stuff-change-pass';
import { StuffEditPage } from '../stuff-edit/stuff-edit';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Transfer, FileUploadOptions } from '@ionic-native/transfer';

/**
 * Generated class for the ParentsAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parents-account',
  templateUrl: 'parents-account.html',
})
export class ParentsAccountPage {
  localUserData: any;
  orgDetails: any;
  loading: any;
  teacherDetails: any;
  profile_image: string;
  imageURI:any;
  imageFileName:any = "assets/imgs/student-icon.png";

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingController: LoadingController, private http: Http, public jsonp: Jsonp, public modalCtrl: ModalController, private camera: Camera, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController, public platform: Platform, public transfer: Transfer) {
    this.menuCtrl.enable(true);
    this.initLoader();
  }


  ngOnInit(){
    this.getUserDataFromLocal();
    this.getTeacherDetails();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentsAccountPage');
  }


  goToPassword() {
    console.log('change pass...');
    this.navCtrl.push(StuffChangePassPage);    
  }


  goToEditProfile() {
    console.log('edit profile...');

    let editData = {
      id: this.teacherDetails.id,
      fName : this.teacherDetails.f_name,
      lName : this.teacherDetails.l_name,
      shortName : this.teacherDetails.short_name,
      qualification : this.teacherDetails.qualification,
    }

    this.navCtrl.push(StuffEditPage, {data: editData});
  }



  getTeacherDetails() {
    this.presentLoading(true);

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: headers});

		let data = {
      'master_id': this.localUserData.master_id,
      'org_id': this.localUserData.org_code
		}

		this.http.post(`${apiUrl.url}staff/details`, data, options).
			map(res => res.json()).subscribe(data => {				
				
				if (data.data[0]) {
          this.presentLoading(false);
          this.teacherDetails = data.data[0];
          console.log('teacher details : ', data.data[0]);

          // if(data.data[0].nameclass){
          //   this.showSelectDepartmentBtn = false;
          // }else{
          //   this.showSelectDepartmentBtn = true;
          // }
				}
			});
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



  


  initLoader() {
		this.loading = this.loadingController.create({
			spinner: 'hide',
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
  }


  


  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);
    // console.log('local data : ', this.localUserData); 
    if(this.localUserData.profile_image){
      this.profile_image = `${apiUrl.url}public/uploads/profile_pic/${this.localUserData.profile_image}`

    }else{
      this.profile_image = `assets/imgs/student-icon.png`
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






  addQues() {    
      let modal = this.modalCtrl.create(QuesmodalPage);
      modal.present();
  }




}








@Component({
  templateUrl: './quesmodal.html'
})

export class QuesmodalPage {

  // character; 
  // orgShiftLists: any;
  // orgClassSectionList: any = []; 
  localUserData: any;
  // sortArray: any = [];
  // shiftID: any;
  // selectedData: any;
  // filteredArrayForClassList: any = [];
  // filteredArrayForSectionList: any = [];
  // classStreamID: any;
  // classIndexId: any;
  guarPhone: string;
  guarId: string;
  ans: string;
  // showDeptSelection: boolean = true;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public menuCtrl: MenuController, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private http: Http, 
    public loadingController: LoadingController, 
    public jsonp: Jsonp, 
    public modalCtrl: ModalController,
  ) {
    // var characters = [];
    // this.character = characters[this.params.get('charNum')];
    this.getUserDataFromLocal();
  }



  ngOnInit() {
    // this.sortArray = [];
    // this.filteredArrayForClassList = [];
    // this.getUserDataFromLocal();
    // this.getStudentDetails();
    // this.showSelectDepartmentBtn = false;
    // this.getShiftLists();
    // this.getClassList();    
  }






    dismiss() {
      this.viewCtrl.dismiss();
    }





// ########################################################################
//    -------------- getting user data from localstorage ---------------
// ########################################################################
    getUserDataFromLocal() {
      let data = localStorage.getItem('userData');
      this.localUserData = JSON.parse(data);
      // console.log('local data : ', this.localUserData);    
    }




// ########################################################################
// ----------- submit Guardian Info function -----------
// ########################################################################
    submitSecurityQuesAns() {
          let header = new Headers();
          header.set("Content-Type", "application/json");

          let data = {
            phone: this.guarPhone,
            adhar: this.guarId,
            org_id: this.localUserData.org_code,
            std_id: this.localUserData.master_id,
          };

          this.http
            .post(`${apiUrl.url}parent/add`, data, {headers: header})
            .map(res => res.json())
            .subscribe(
              data => {
                console.log('after guardian info submit : ', data); 
                if(data.data){
                  this.localUserData.is_ques_answered = '1';
                  localStorage.setItem('userData', JSON.stringify(this.localUserData));
                  this.navCtrl.push(ParentsAccountPage);
                }                                
          });
    }

}
