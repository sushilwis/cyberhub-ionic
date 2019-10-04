import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import {Headers, Http } from "@angular/http";

import { apiUrl } from "../../apiUrl";

/**
 * Generated class for the PrincipalExamviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal-examview',
  templateUrl: 'principal-examview.html',
})
export class PrincipalExamviewPage {
  localUserData: any;
  orgShiftLists: any;
  selectedData: any = {};
  filteredArrayForClassList: any;
  orgClassSectionList: any;
  sortArray: any
  newFilterSectionArry: any;
  showLoader: boolean = false
  shift: any;
  shiftID: any;
  rawRoutineList : any;
  subject: any;
  room: any;
  floor: any;
  course: any;
  department: any;
  sem: any;
  dayName: any = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  routineList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private alertCtrl: AlertController, public http: Http) {
  }

  ionViewDidLoad() {
    this.getUserDataFromLocal();
    this.getClassList()
    console.log('ionViewDidLoad PrincipalExamviewPage');
    this.getShiftLists()
  }
  
    getUserDataFromLocal() {
      let data = localStorage.getItem("userData");
      this.localUserData = JSON.parse(data);
      // console.log('local data : ', this.localUserData);
    }
  getShiftLists() {
    this.showLoader = true;
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
        this.showLoader = false;
        this.orgShiftLists = data.data;
      });
  }

  streamDisabled() {
    if (this.shift == "" || this.shift === null) {
      return true;
    } else {
      return false;
    }
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
    this.showLoader = true;
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let data = {
      org_id: this.localUserData.org_code
    };

    this.http
      .post(`${apiUrl.url}classsection/getall`, data)
      .map(res => res.json())
      .subscribe(data => {
        this.showLoader = false;
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
    console.log(e);
    
    // console.log(this.sortArray);

    // this.filteredArrayForSectionList = [];
    // this.classStreamID = e;
    // var d = new Date();
    // // var n = d.getFullYear();
    // this.filteredArrayForSectionList = this.sortArray.filter(element => {
    //   return element.class_id == e;
    // });

    // if (this.filteredArrayForSectionList.length > 0) {
    //   this.filteredArrayForSectionList = this.filteredArrayForSectionList[0].sections;
    // }
    // this.newFilterSectionArry = [];
    // this.onSemChange(this.sem_no);
    // // this.streamname = 
    // console.log(this.filteredArrayForSectionList);
    
    let apiData = {
      org_id: this.localUserData.org_code,
      year: 2019,
      stream: e == 1 ? 'B.A.' : e == 2 ? 'B.Sc.' : 'B. Com.',
      shift: this.shiftID
    }
    this.http.post(`${apiUrl.url}routine/getbyorg`, apiData).map(res => res.json()).subscribe(data => {
      console.log(data);
      this.rawRoutineList = data.data;
      console.log('raw routine list : ', this.rawRoutineList);
      this.sortArr(this.rawRoutineList);
    })
  }

  // onSemChange(e) {
  //   this.newFilterSectionArry = this.filteredArrayForSectionList.filter(ele => {
  //     return ele.sem_id == e;
  //   });
  //   // console.log(this.newFilterSectionArry);
  // }

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

  
  async sortArr(rawRoutineArr) {
    let new_arry = [];

      rawRoutineArr.forEach((element, i) => {
        let pos = new_arry
          .map(function(e) {
            return e.day;
          })
          .indexOf(element.day);

          console.log('pos...................', pos);
          // console.log('element.rutinedetails.length...................', element.rutinedetails.length);
          
        
        if (pos < 0) {
          // console.log('pos < 0', element.rutinedetails.length);
          // rutinedetails
          if(element.rutinedetails.length > 0){
            console.log('pos < 0 .....if', element.rutinedetails.length);
            

            this.subject = element.rutinedetails[0].class.section.sec_name;
            this.room = element.rutinedetails[0].room.name;
            this.floor = element.rutinedetails[0].room.floor_name;
            this.course = element.rutinedetails[0].class_sub.subcourse[0].count_name;
            this.department = element.rutinedetails[0].class.section.sec_name;
            this.sem = element.sem.sem_no;
          }else{
            console.log('pos < 0.....else', element.rutinedetails.length);

            this.subject = 'No Class';
            this.room = 'N/A';
            this.floor = 'N/A';
            this.course = 'N/A';
            this.department = 'N/A';
            this.sem = 'N/A';
          }
          console.log('this.course.........',this.course);


          let new_data = {
            id: element.id,
            day: element.day,
            dayName: this.dayName[parseInt(element.day)-1],
            icon: 'ios-add-circle-outline',
            showDetails: false,
            priods: [
              {
                priod_id: element.priod_id,
                priod_name: element.priod.period_name,
                from_time: element.priod.from_time,
                to_time: element.priod.to_time,
                sub: this.subject,
                floor: this.floor,
                room: this.room,
                course: this.course,
                department: this.department,
                sem: this.sem,
                rutinedetails: element.rutinedetails
              }
            ]
          };
          new_arry.push(new_data);
          // console.log(new_data);
          
        } else {

          if(element.rutinedetails.length > 0){
            console.log('pos < 0 .....if', element.rutinedetails.length);

            this.subject = element.rutinedetails[0].class.section.sec_name;
            this.room = element.rutinedetails[0].room.name;
            this.floor = element.rutinedetails[0].room.floor_name;
            this.course = element.rutinedetails[0].class_sub.subcourse[0].count_name;
            this.department = element.rutinedetails[0].class.section.sec_name;
            this.sem = element.sem.sem_no;
          }else{
            console.log('pos < 0.....else', element.rutinedetails.length);

            this.subject = 'No Class';
            this.room = 'N/A';
            this.floor = 'N/A';
            this.course = 'N/A';
            this.department = 'N/A';
            this.sem = 'N/A';
          }
          
          let exsisting_data = {
            priod_id: element.priod_id,
            priod_name: element.priod.period_name,
            from_time: element.priod.from_time,
            to_time: element.priod.to_time,
            sub: this.subject,
            floor: this.floor,
            room: this.room,
            course: this.course,
            department: this.department,
            sem: this.sem,
            icon: 'ios-add-circle-outline',
            showDetails: false,
            rutinedetails: element.rutinedetails
          };

          new_arry[pos].priods.push(exsisting_data);
        }
      });


      // this.routineList = new_arry.sort(function(a, b){return a.day - b.day});
      // this.routineList = new_arry.sort(function(a, b){return a.priods.priod_id - b.priods.priod_id});

      await new_arry.forEach((elem, i) => {     
          new_arry[i].priods.sort(function(a, b){return a.priod_id - b.priod_id});     
      });
      
      this.routineList = new_arry;
      // console.log(this.routineList);
      console.log('final array routine list: ', this.routineList);
      // this.presentLoading(false);
  }

  

	toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
    } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
    }
  }
}
