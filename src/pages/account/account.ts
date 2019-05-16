import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavParams, MenuController } from 'ionic-angular';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { LiveStreamPage } from '../live-stream/live-stream';
import { RoutinePage } from '../routine/routine';
import { ParentsStudentViewPage } from '../parents-student-view/parents-student-view';
import { AttendancePage } from '../attendance/attendance';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { ModalController, ViewController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { Chart } from 'chart.js';


declare var cordova: any;

@IonicPage()
@Component({
  selector: "page-account",
  templateUrl: "account.html"
})
export default class AccountPage implements OnInit {
  @ViewChild("doughnutCanvas") doughnutCanvas;
  doughnutChart: any;

  localUserData: any;
  // loading: any;
  studentDetails: any;
  showSelectDepartmentBtn: boolean;
  sortArray: any;

  imageURI: any;
  imageFileName: any = "assets/imgs/student-icon.png";
  profile_image: string;
  lastImage: string = null;
  loading: Loading;
  getData: any;
  showDeptSelection: boolean = false;
  issecurityadded: string;
  chartClassList = [];
  chartAttdValue = [];
  chartcolor = [];
  showLoader: boolean;
  avgAtdence;

  backgroundColor = [
    "rgb(255, 99, 132)",
    "rgb(54, 162, 235)",
    "rgb(255, 206, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(255, 159, 64)",
    "rgb(66, 134, 244)",
    "rgb(190, 71, 255)"
  ];

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public loadingController: LoadingController,
    public jsonp: Jsonp,
    public modalCtrl: ModalController,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    public transfer: Transfer
  ) {
    this.showLoader = true;
    this.menuCtrl.enable(false);
    
    this.platform.registerBackButtonAction(() => {
      if (this.navCtrl.getViews().length > 1) {
        this.navCtrl.pop();
      }
    });
    this.issecurityadded = JSON.parse(localStorage.getItem("securitypinadded"));
  }

  ngOnInit() {
    this.getUserDataFromLocal();
    this.getStudentDetails();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AccountPage");
    this.showLoader = false;
  }

  goToPassword() {
    this.navCtrl.push(ChangepasswordPage);
  }
  gotoHome() {
    this.navCtrl.setRoot(ParentsStudentViewPage);
  }
  gotoLiveStream() {
    this.navCtrl.push(LiveStreamPage);
  }
  goToAttendance() {
    this.navCtrl.push(AttendancePage);
  }
  goToRoutine() {
    this.navCtrl.push(RoutinePage);
  }

  getUserDataFromLocal() {
    let data = localStorage.getItem("userData");
    this.localUserData = JSON.parse(data);
    if (this.localUserData.profile_image && this.localUserData.digit_pin != 0) {
      this.profile_image = `${apiUrl.url}public/uploads/profile_pic/${
        this.localUserData.profile_image
      }`;
      let setdata = {
        u_id: this.localUserData.id,
        pin: this.localUserData.digit_pin
      };
      localStorage.setItem("securitypinadded", JSON.stringify(setdata));
      this.issecurityadded = JSON.parse(
        localStorage.getItem("securitypinadded")
      );
    } else {
      this.profile_image = `assets/imgs/student-icon.png`;
    }
  }

  getStudentDetails() {
    this.showLoader = true;

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });

    let data = {
      master_id: this.localUserData.master_id
    };

    this.http
      .post(`${apiUrl.url}student/studentdetail`, data, options)
      .map(res => res.json())
      .subscribe(data => {
        if (data.data[0]) {
          this.studentDetails = data.data[0];
          if (data.data[0].nameclass) {
            this.getAttendanceDetails(this.studentDetails.class_id);
            this.showSelectDepartmentBtn = false;
            this.showLoader = false;
          } else {
            this.showSelectDepartmentBtn = true;
            this.showLoader = false;
          }
          this.showLoader = false;
        }
      });
  }



  openModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  goToEnterSecurityPin() {
    let modal = this.modalCtrl.create(SecuritypinPage);
    modal.present();
  }

  getImage() {
    const options: CameraOptions = {
      quality: 30,
      allowEdit: false,
      destinationType: this.camera.DestinationType.FILE_URI,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.imageURI = imageData;
        this.imageFileName = imageData;
        const fileTransfer: any = this.transfer.create();

        let options: FileUploadOptions = {
          fileKey: "file",
          fileName: "ionicfile.jpg",
          chunkedMode: false,
          mimeType: "image/jpeg",
          headers: {},
          params: {
            id: this.localUserData.id
          }
        };
        

        fileTransfer
          .upload(this.imageURI, `${apiUrl.url}user/addprofileimage`, options)
          .then(
            data => {
              if (data) {
                
                let parseData = JSON.parse(data.response);
                
                this.imageFileName = `${apiUrl.url}public/uploads/profile_pic/${
                  parseData.data.profile_image
                }`;
                
                localStorage.removeItem("userData");
                localStorage.setItem(
                  "userData",
                  JSON.stringify(parseData.data)
                );
                this.getUserDataFromLocal();
                this.presentToast("Image uploaded successfully");
              }
            },
            err => {
              console.log(err);
              alert(JSON.stringify(err));
            }
          );
      },
      err => {
        console.log(err);
        this.presentToast(err);
      }
    );
  }

  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: "top"
    });

    toast.present();
  }

  getAttendanceDetails(class_id) {
    this.showLoader = true;

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });

    let apidata = {
      org_id: this.localUserData.org_code,
      dept_id: 31,
      std_id: 110
      
    };

    this.http
      .post(
        `${apiUrl.node_url}attendance/getStudentAttnPercent`,
        apidata,
        options
      )
      .map(res => res.json())
      .subscribe(data => {
        console.log("attn data : ", data);
        if (data.status) {
          this.http
            .post(`${apiUrl.url}coursecat/getsubcource`, apidata, options)
            .map(res => res.json())
            .subscribe(classes => {
              console.log(classes);

              classes.data.forEach((element, i) => {
                let new_arry = [];
                new_arry = data.attd.filter(cls => {
                  return cls.class_sub_id == element.id;
                });

                if (new_arry.length == 0) {
                  this.chartAttdValue.push(0);
                  this.chartClassList.push(element.subject_name);
                  this.chartcolor.push(this.backgroundColor[i]);
                } else {
                  this.chartAttdValue.push(new_arry[0].percent);
                  this.chartClassList.push(element.subject_name);
                  this.chartcolor.push(this.backgroundColor[i]);
                }
                this.showLoader = false;
              });
              let sum = this.chartAttdValue.reduce(
                (partial_sum, a) => partial_sum + a
              );

              this.avgAtdence = sum / this.chartAttdValue.length;
              this.renderGraph();
            });
            this.showLoader = false;
        }
      
      });
  }





  renderGraph() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "bar",
      options: {
        legend: {
            display: false,
        }
      },
      data: {
        labels: this.chartClassList,
        datasets: [
          {
            data: this.chartAttdValue,
            backgroundColor: this.chartcolor
          }
        ]
      }
    });
  }




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
  showLoader: boolean;

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
    
  }



  ngOnInit() {
    this.sortArray = [];
    this.filteredArrayForClassList = [];
    this.getUserDataFromLocal();
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
  }





// ########################################################################
//     ------------------ getting all shift list here -----------------
// ########################################################################
  getShiftLists() {
    this.showLoader = true;
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
            
            this.orgShiftLists = data.data;
            this.showLoader = false;
      });
  }





// ########################################################################
//     ------------------ getting all class list here -----------------
// ########################################################################
  getClassList(){
    this.showLoader = true;
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
            console.log("Raw class list ", data.data);
            this.createSortArray(this.orgClassSectionList);
            this.showLoader = false;
      });
  }






// ########################################################################
//     ------------------ after choose shift -----------------
// ########################################################################
  onChooseShift(e){
    this.sortArray = [];
    this.shiftID = e;
    

      this.filteredArrayForClassList = this.orgClassSectionList.filter((ele) => {
        return ele.org_shift_id == e;
      });

      
      this.createSortArray(this.filteredArrayForClassList);
   


    
  }





// ########################################################################
//      ------------------ After choose class/stream -----------------
// ########################################################################
onChooseClassStream(e) { 

  this.filteredArrayForSectionList = [];
  this.classStreamID = e;

  this.filteredArrayForSectionList = this.sortArray.filter((element)=> {
    return element.class_id == e;
  });
 
  if(this.filteredArrayForSectionList.length > 0){
    this.filteredArrayForSectionList = this.filteredArrayForSectionList[0].sections;
  }  
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
  this.showLoader = true;
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
            
            if(data.status == 1){                           
                let modal1 = this.modalCtrl.create(Modal1Page);
                modal1.present();
                this.showLoader = false;              
            }
            this.showLoader = false;
      });
}






// ########################################################################
// ----------- sorting class list array here for looping -----------
// ########################################################################
createSortArray(arr){
  let currYear = new Date().getFullYear();  

  arr.forEach(ele => {

    if(currYear == ele.year){    

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
    }
  });


      
}

}










@Component({
  templateUrl: './modal1.html'
})

export class Modal1Page {

  localUserData: any;
  guarPhone: string;
  guarId: string;
  showLoader: boolean;
  

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
    this.showLoader = true;
    this.getUserDataFromLocal();
  }



  ngOnInit() {
    this.showLoader = false;    
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
    submitGuardianInfo() {
      this.showLoader = true;
          let header = new Headers();
          header.set("Content-Type", "application/json");

          let data = {
            phone: this.guarPhone,
            adhar: this.guarId,
            org_id: this.localUserData.org_code,
            std_id: this.localUserData.master_id,
            from_app: 1
          };

          this.http
            .post(`${apiUrl.url}parent/add`, data, {headers: header})
            .map(res => res.json())
            .subscribe(
              data => {
                console.log('after guardian info submit : ', data); 
                if(data.data){
                  this.localUserData.is_first_time = '1';
                  localStorage.setItem('userData', JSON.stringify(this.localUserData));
                  this.navCtrl.push(AccountPage);
                  this.showLoader = false;
                }else{
                  this.showLoader = false;
                }                                
          });
    }

}










@Component({
  templateUrl: './securitypin.html'
})

export class SecuritypinPage {

  localUserData: any;
  guarPhone: string;
  guarId: string;
  securityPin: number;
  btnDisabled: boolean = false;
  showLoader: boolean;

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
    public toastCtrl: ToastController,
  ) {
    this.showLoader = true;
    this.getUserDataFromLocal();
  }



  ngOnInit() {
    this.showLoader = false;   
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
    submitSecurityPin() {
      this.showLoader = true;
          let header = new Headers();
          header.set("Content-Type", "application/json");

          let data = {
            u_id: this.localUserData.id,
            pin: this.securityPin,
          };

          this.http
            .post(`${apiUrl.url}user/add-pin`, data, {headers: header})
            .map(res => res.json())
            .subscribe(
              getdata => {
                console.log('after add pin submit : ', getdata); 
                if (getdata.status == 1){
                  this.dismiss();
                  localStorage.setItem("securitypinadded", JSON.stringify(data));
                  this.navCtrl.push(AccountPage); 
                  this.showLoader = false;                 
                }else{
                  this.presentToast('Sorry, Something went wrong.');
                  this.showLoader = false;
                }                                
          });
    }




    // checkForValidPin
    checkForValidPin() {
      let pinString = this.securityPin.toString();
      console.log('pin length : ', pinString.length);      
      if(pinString.length === 6){
        this.btnDisabled = true; 
      }else{
        this.btnDisabled = false; 
      }
    }




    presentToast(text) {
      let toast = this.toastCtrl.create({
        message: text,
        duration: 3000,
        position: 'top'
      });
      
      toast.present();
    }

}
