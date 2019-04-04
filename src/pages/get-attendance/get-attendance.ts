import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { AttendanceListPage } from '../attendance-list/attendance-list';
import { RequestOptions, Headers, Http } from '@angular/http';
import { apiUrl } from '../../apiUrl';

/**
 * Generated class for the GetAttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-get-attendance",
  templateUrl: "get-attendance.html"
})
export class GetAttendancePage {
  localUserData: any;
  orgShiftLists: any;
  loading: any;
  orgClassSectionList: any;
  sortArray: any = [];
  shiftID: any;
  selectedData: any = {};
  filteredArrayForClassList: any;
  filteredArrayForSectionList: any = [];
  classStreamID: any;
  periodList: any;

  period: any = "";
  department: any = "";
  stream: any = "";
  shift: any = "";
  genAttCode: number;
  allSemList;
  sem_no;
  showTeacherForm: boolean = true;
  newFilterSectionArry;
  classfilteredSubject
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public loadingController: LoadingController,
    private http: Http,
    public alertCtrl: AlertController
  ) {
    this.menuCtrl.enable(true);
    this.initLoader();
  }

  ngOnInit() {
    console.log("get attendance page...");
    this.getUserDataFromLocal();
    this.getShiftLists();
    this.getClassList();
    // this.getPeriod();
    this.getallsem();
    this.showTeacherForm = true;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad GetAttendancePage');
  // }
  gotoAttendance() {
    this.navCtrl.push(AttendanceListPage);
  }

  getShiftLists() {
    let header = new Headers();
    header.set("Content-Type", "application/json");
    let data = {
      org_id: this.localUserData.org_code
    };
    // this.checkshift = [];
    this.http
      .post(`${apiUrl.url}shift/orgshiftlist`, data, { headers: header })
      .map(res => res.json())
      .subscribe(data => {
        // console.log("Org shift list ", data.data);
        this.orgShiftLists = data.data;
      });
  }

  onChooseShift(e) {
    this.sortArray = [];
    this.shiftID = e;
    // console.log(e);
    // console.log(this.allSelected);
    // console.log('shift : ', e.value);

    // let ifAllSelect = e.value.filter((ele)=>{
    //   return ele == "all";
    // });

    // if(ifAllSelect.length > 0){
    // this.sortArray = [];
    // this.selectedData.selectedShifts = this.orgShiftLists;

    // this.createSortArray(this.orgClassSectionList);
    // this.sortArray.unshift({
    //   class_name: "All",
    //   class_id: "all"
    // });

    // console.log("filter class list for choosen shift : ", this.sortArray);
    // }else{
    this.selectedData.selectedShifts = e;
    this.filteredArrayForClassList = this.orgClassSectionList.filter(ele => {
      return ele.org_shift_id == e;
    });
    // this.getPeriod();
    // console.log(this.filteredArrayForClassList);
    this.createSortArray(this.filteredArrayForClassList);
    // }
  }

  getClassList() {
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let data = {
      org_id: this.localUserData.org_code
    };

    this.http
      .post(`${apiUrl.url}classsection/getall`, data)
      .map(res => res.json())
      .subscribe(data => {
        // console.log("Org Class list : ", data.data);
        this.orgClassSectionList = data.data;
        // this.createSortArray(this.orgClassSectionList);
        // this.sortArray.unshift({
        //   class_name: "All",
        //   class_id: "all"
        // });
      });
    // console.log("Org Class list : ", this.sortArray);
  }

  onChooseClassStream(e) {
    // console.log(this.sortArray);

    this.filteredArrayForSectionList = [];
    this.classStreamID = e;
    var d = new Date();
    var n = d.getFullYear();
    this.filteredArrayForSectionList = this.sortArray.filter(element => {
      return element.class_id == e;
    });

    if (this.filteredArrayForSectionList.length > 0) {
      this.filteredArrayForSectionList = this.filteredArrayForSectionList[0].sections;
    }

    console.log(this.filteredArrayForSectionList);
  }

  getallsem() {
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let data = {
      org_id: this.localUserData.org_code
    };

    this.http
      .post(`${apiUrl.url}classsection/getallsem`, data)
      .map(res => res.json())
      .subscribe(data => {
        // console.log("Org Class list : ", data.data);
        this.allSemList = data.data;
        // this.createSortArray(this.orgClassSectionList);
        // this.sortArray.unshift({
        //   class_name: "All",
        //   class_id: "all"
        // });
      });
  }

  onSemChange(e){
    
    this.newFilterSectionArry = this.filteredArrayForSectionList.filter(ele => {
      return ele.sem_id == e
    })
    // console.log(this.newFilterSectionArry);

  }
  getSubjectid(e) {
    console.log(e);
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let data = {
      org_id: this.localUserData.org_code,
      year: new Date().getFullYear(),
      dept_id: this.department,
      sem: this.sem_no,
      // day: new Date().getDay(),
      day: 1,
      stream: this.stream == 1 ? "B.A" : "B.Sc"
    };
    // console.log(data);

    this.http
      .post(`${apiUrl.url}routine/getdayroutine`, data)
      .map(res => res.json())
      .subscribe(data => {
        if (data.length == 0 && data[0].rutinedetails) {
          alert("No Class found in your routine");
        } else {
          this.classfilteredSubject = data.data.filter(ele => {
            return ele.priod_id == e;
          });
          
          console.log("Org ", this.classfilteredSubject);
        }
        // this.allSemList = data.data;
        // this.createSortArray(this.orgClassSectionList);
        // this.sortArray.unshift({
        //   class_name: "All",
        //   class_id: "all"
        // });
      });
  }

  presentLoading(load: boolean) {
    if (load) {
      return this.loading.present();
    } else {
      setTimeout(() => {
        return this.loading.dismiss();
      }, 1000);
    }
  }

  initLoader() {
    this.loading = this.loadingController.create({
      spinner: "hide",
      content:
        '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
    });
  }

  getUserDataFromLocal() {
    let data = localStorage.getItem("userData");
    this.localUserData = JSON.parse(data);
    // console.log('local data : ', this.localUserData);
  }

  createSortArray(arr) {
    // var rs = 1;
    let currYear = new Date().getFullYear();
    arr.forEach(ele => {
      if (ele.year == currYear) {
        var obj = {
          class_id: ele.class_id,
          sec_id: ele.sec_id,
          class_name: ele.class.class_name,
          shift_id: ele.org_shift_id,
          sections: [
            {
              section_name: ele.section.sec_name,
              sec_id: ele.sec_id,
              classSectionIndexId: ele.id,
              sem_id: ele.sem_id
            }
          ]
        };

        let check_exist = this.sortArray.filter(element => {
          return element.class_id == ele.class_id;
        });

        if (check_exist.length > 0) {
          let i = this.sortArray.indexOf(check_exist[0]);
          this.sortArray.splice(i, 1);

          check_exist[0].sections.push({
            section_name: ele.section.sec_name,
            sec_id: ele.sec_id,
            classSectionIndexId: ele.id,
            sem_id: ele.sem_id
          });

          this.sortArray.push(check_exist[0]);
        } else {
          this.sortArray.push(obj);
        }
      }
    });
    // console.log(this.sortArray);
  }

  getPeriod() {
    console.log("get period called...");
    let header = new Headers();
    header.set("Content-Type", "application/json");
    let data = { org_id: this.localUserData.org_code, shift_id: this.shiftID };
    // this.checkshift = [];
    this.http
      .post(`${apiUrl.url}routine/all`, data, { headers: header })
      .map(res => res.json())
      .subscribe(data => {
        // console.log("period list : ", data.data);
        this.periodList = data.data;
      });
  }

  // onChooseDepartment() {

  // }

  onPeriodSubmit() {
    if (
      this.period == "" ||
      this.department == "" ||
      this.stream == "" ||
      this.shift == ""
    ) {
      this.showAlert("Select all field step wise");
      return;
    }

    let data = {
      period_id: this.period,
      department_id: this.department,
      stream_id: this.stream,
      shift_id: this.shift,
      org_id: this.localUserData.org_code,
      master_id: this.localUserData.master_id,
      atted_code:
        Math.floor(1000 + Math.random() * 9000) +
        "" +
        this.localUserData.org_code +
        "" +
        this.localUserData.master_id,
      date: this.makeDateString(new Date()),
      class_sub_id: this.classfilteredSubject[0].rutinedetails[0]
        .class_sub_id
    };

    // console.log(data);

    let header = new Headers();
    header.set("Content-Type", "application/json");

    this.http
      .post(`${apiUrl.node_url}attendance/addAttedData`, data, {
        headers: header
      })
      .map(res => res.json())
      .subscribe(async data => {
        // console.log("data : ", data);
        if (data.success) {
          this.genAttCode = await data.data[0].atted_code;
          localStorage.setItem("attedCode", JSON.stringify(this.genAttCode));
          localStorage.setItem("department", JSON.stringify(this.department));
          localStorage.setItem("atted_id", JSON.stringify(data.data[0]._id));
          this.showTeacherForm = false;
          this.showAlert(data.msg);
        } else {
          this.showTeacherForm = true;
          this.showAlert(data.msg);
        }
      });
  }

  onStartAttendence() {
    this.navCtrl.push(AttendanceListPage);
  }

  // showAlert(msg) {
  //   const alert = this.alertCtrl.create({
  //     title: "Alert!",
  //     subTitle: msg,
  //     buttons: ["OK"]
  //   });
  //   alert.present();
  // }




  showAlert(msg) {
    const alert = this.alertCtrl.create({
      title: 'Alert!',
      cssClass: "confirmAlert",
      subTitle: msg,
      buttons: [
        {
          text: 'OK',
          cssClass: "okBtn",
          handler: () => {
            // this.navCtrl.push(WelcomeGuestPage);
          }
        }
      ]
    });
    
    alert.present();
  }


  

  makeDateString(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return day + "/" + month + "/" + year;
  }
}
