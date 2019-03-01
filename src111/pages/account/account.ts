import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, MenuController } from 'ionic-angular';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { LiveStreamPage } from '../live-stream/live-stream';
import { RoutinePage } from '../routine/routine';
import { ParentsStudentViewPage } from '../parents-student-view/parents-student-view';
import { AttendancePage } from '../attendance/attendance';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { ModalController, ViewController } from 'ionic-angular';
// import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';


declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})

export default class AccountPage implements OnInit {

  localUserData: any;
  // loading: any;
  studentDetails: any;
  showSelectDepartmentBtn: boolean;
  sortArray: any;

  imageURI:any;
  imageFileName:any = "assets/imgs/student-icon.png";
  profile_image: string;
  lastImage: string = null;
  loading: Loading;
  

  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams, private http: Http, public loadingController: LoadingController, public jsonp: Jsonp, public modalCtrl: ModalController, private camera: Camera, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController, public platform: Platform, private transfer: Transfer) {
    this.menuCtrl.enable(false);
    this.initLoader();
    this.platform.registerBackButtonAction(() => {
      if (this.navCtrl.getViews().length > 1) {
        this.navCtrl.pop();
      }
    });
  }




  ngOnInit() {
    this.getUserDataFromLocal();
    this.getStudentDetails();
    this.showSelectDepartmentBtn = false;
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  goToPassword(){
		this.navCtrl.push(ChangepasswordPage);
	}
	 gotoHome(){
    this.navCtrl.setRoot(ParentsStudentViewPage);
  }
  gotoLiveStream(){
    this.navCtrl.push(LiveStreamPage);
  }
  goToAttendance(){
    this.navCtrl.push(AttendancePage);
  }
  goToRoutine(){
    this.navCtrl.push(RoutinePage);
  }




  getUserDataFromLocal() {
    let data = localStorage.getItem('userData');
    this.localUserData = JSON.parse(data);
    if(this.localUserData.profile_image){
      this.profile_image = `${apiUrl.url}public/uploads/profile_pic/${this.localUserData.profile_image}`

    }else{
      this.profile_image = `assets/imgs/student-icon.png`
    }   
  }




  getStudentDetails() {
    this.presentLoading(true);

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: headers});

		let data = {
		  'master_id': this.localUserData.master_id
		}

		this.http.post(`${apiUrl.url}student/studentdetail`, data, options).
			map(res => res.json()).subscribe(data => {
        console.log('student detail data : ', data);				
				if (data.data[0]) {
          this.presentLoading(false);
          this.studentDetails = data.data[0];

          if(data.data[0].nameclass){
            this.showSelectDepartmentBtn = false;
          }else{
            this.showSelectDepartmentBtn = true;
          }
				}
			});
  }





  getStudentSubjectDetails() {
    this.presentLoading(true);

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({headers: headers});

		let data = {
		  'master_id': this.localUserData.master_id
		}

		this.http.post(`${apiUrl.url}student/studentdetail`, data, options).
			map(res => res.json()).subscribe(data => {
        console.log('student subject data : ', data);				
				if (data.data[0]) {
          this.presentLoading(false);
          // this.studentDetails = data.data[0];

          if(data.data[0].nameclass){
            this.showSelectDepartmentBtn = false;
          }else{
            this.showSelectDepartmentBtn = true;
          }
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
  




  openModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
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




   
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    
    toast.present();
  }





  // presentToast(msg) {
  //   let toast = this.toastCtrl.create({
  //     message: msg,
  //     duration: 3000,
  //     position: 'bottom'
  //   });
  
  //   toast.onDidDismiss(() => {
  //     console.log('Dismissed toast');
  //   });
  
  //   toast.present();
  // }
}











@Component({
  templateUrl: './modal.html'
})

export class ModalPage {

  character; 
  orgShiftLists: any;
  orgClassSectionList: any = []; 
  localUserData: any;
  sortArray: any = [];
  shiftID: any;
  selectedData: any;
  filteredArrayForClassList: any = [];
  filteredArrayForSectionList: any = [];
  classStreamID: any;
  classIndexId: any;

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
    public modalCtrl: ModalController
  ) {
    // var characters = [];
    // this.character = characters[this.params.get('charNum')];
  }



  ngOnInit() {
    this.sortArray = [];
    this.filteredArrayForClassList = [];
    this.getUserDataFromLocal();
    // this.getStudentDetails();
    // this.showSelectDepartmentBtn = false;
    this.getShiftLists();
    this.getClassList();    
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
//     ------------------ getting all shift list here -----------------
// ########################################################################
  getShiftLists() {
      let header = new Headers();
      header.set("Content-Type", "application/json");

      let data = {
        org_id: this.localUserData.org_code
      };

      this.http
        .post(`${apiUrl.url}shift/orgshiftlist`, data, {headers: header})
        .map(res => res.json())
        .subscribe(
          data => {
            // console.log("Org shift list ", data.data);
            this.orgShiftLists = data.data;
      });
  }





// ########################################################################
//     ------------------ getting all class list here -----------------
// ########################################################################
  getClassList(){
      let header = new Headers();
      header.set("Content-Type", "application/json");

      let data = {
        org_id: this.localUserData.org_code
      };

      this.http
        .post(`${apiUrl.url}classsection/getall`, data, {headers: header})
        .map(res => res.json())
        .subscribe(
          data => {
            this.orgClassSectionList = data.data;
            // console.log("Org class list ", data.data);
            this.createSortArray(this.orgClassSectionList);
      });
  }






// ########################################################################
//     ------------------ after choose shift -----------------
// ########################################################################
  onChooseShift(e){
    this.sortArray = [];
    this.shiftID = e;
    // console.log(e);
    // console.log(this.allSelected);        
    // console.log('shift : ', e);  
    
    // let ifAllSelect = e.value.filter((ele)=>{
    //   return ele == "all";
    // });
    
    // if(ifAllSelect.length > 0){
    //   this.sortArray = [];
    //   this.selectedData.selectedShifts = this.orgShiftLists;

    //   this.createSortArray(this.orgClassSectionList);
    //   // console.log("filter class list for choosen shift : ", this.sortArray); 
    // // }else{
    //   this.sortArray = [];
    //   this.selectedData.selectedShifts = e.value;

      this.filteredArrayForClassList = this.orgClassSectionList.filter((ele) => {
        return ele.org_shift_id == e;
      });

      // console.log(this.filteredArrayForClassList);
      this.createSortArray(this.filteredArrayForClassList);
    // }


    // console.log('sort array : ', this.sortArray);
  }





// ########################################################################
//      ------------------ After choose class/stream -----------------
// ########################################################################
onChooseClassStream(e) {
  // console.log(e); 

  this.filteredArrayForSectionList = [];
  this.classStreamID = e;

  // if(e.value == "all"){
  //   this.filteredArrayForSectionList = [
  //     { sec_id: "all", section_name: "All" }
  //   ];
  //   return;
  // }

  this.filteredArrayForSectionList = this.sortArray.filter((element)=> {
    return element.class_id == e;
  });
 
  if(this.filteredArrayForSectionList.length > 0){
    this.filteredArrayForSectionList = this.filteredArrayForSectionList[0].sections;
  }  

  // console.log('filter section array : ', this.filteredArrayForSectionList);
}






// ########################################################################
// ----------- after choosing section function -----------
// ########################################################################
onChooseSection(e) {
  this.classIndexId = e; 
}





// ########################################################################
// ----------- submit department function -----------
// ########################################################################
submitDepartment() {
      let header = new Headers();
      header.set("Content-Type", "application/json");

      let data = {
        id: this.classIndexId,
        std_id: this.localUserData.master_id,
      };

      this.http
        .post(`${apiUrl.url}student/classupdate`, data, {headers: header})
        .map(res => res.json())
        .subscribe(
          data => {
            // console.log("after add data : ", data);
      });
}






// ########################################################################
// ----------- sorting class list array here for looping -----------
// ########################################################################
createSortArray(arr){
  // var rs = 1;
  arr.forEach(ele => {

    var obj = {
      class_id: ele.class_id,
      sec_id: ele.sec_id,
      class_name: ele.class.class_name,
      shift_id: ele.org_shift_id,
      sections: [
        {
          section_name: ele.section.sec_name,
          sec_id: ele.sec_id,
          classSectionIndexId: ele.id
        }
      ]
    }

    let check_exist = this.sortArray.filter((element)=> {
      return element.class_id == ele.class_id;
    });

    if(check_exist.length > 0){
      // console.log('exist');
      let i = this.sortArray.indexOf(check_exist[0]);
      this.sortArray.splice(i,1); 

      check_exist[0].sections.push({
        section_name: ele.section.sec_name,
        sec_id: ele.sec_id,
        classSectionIndexId: ele.id
      });

      this.sortArray.push(check_exist[0]);       
    }else{
      this.sortArray.push(obj);
    }
  });


  // console.log('class section : ', this.sortArray);    
}




  



}