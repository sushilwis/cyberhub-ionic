import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { apiUrl } from '../../apiUrl';

/**
 * Generated class for the StuffExamdutyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stuff-examduty',
  templateUrl: 'stuff-examduty.html',
})
export class StuffExamdutyPage implements OnInit {
  localUserData: any;
  rawRoutineList: any;
  loading: any;
  routineList: any[];
  subject: any;
  floor: any;
  room: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingController: LoadingController, private http: Http) {
    this.initLoader();
    this.getUserDataFromLocal();
  }




  ngOnInit() {
    this.getStudentRoutine();
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad StuffExamdutyPage');
  }




// |--------------------------------------------------------------------
// |--------- toggle accordian method --------------
// |--------------------------------------------------------------------


	toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
    } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
    }
  }
  






// |--------------------------------------------------------------------
// |--------- getting logged user data from localstorage --------------
// |--------------------------------------------------------------------

getUserDataFromLocal() {
  let data = localStorage.getItem('userData');
  this.localUserData = JSON.parse(data);
  console.log('local data : ', this.localUserData);       
}






// |--------------------------------------------------------------------
// |--------- getting all routine for a specific student --------------
// |--------------------------------------------------------------------

getStudentRoutine() {
  this.presentLoading(true);

  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({headers: headers});

  let data = {
    'master_id': this.localUserData.master_id,
    'org_id': this.localUserData.org_code,
    'user_type_id': this.localUserData.user_type_id
  } 
  // console.log('sent data : ', data);    

  this.http.post(`${apiUrl.url}routine/std-rutine`, data, options).
    map(res => res.json()).subscribe(data => {				
      // console.log('routine list : ', data);
      if (data.data.length > 0) {
        // this.presentLoading(false);
        this.rawRoutineList = data.data;
        console.log('raw routine list : ', this.rawRoutineList);
        this.sortArr(this.rawRoutineList);
      }else{
        this.presentLoading(false);
      }

    });
}







// |--------------------------------------------------------------------
// |---- loading start and stop method by passing true or false ----
// |--------------------------------------------------------------------

presentLoading(load: boolean) {
  if (load) {
    return this.loading.present();
  }else {
    setTimeout(() => {
      return this.loading.dismiss();
    }, 500);
  }
}






// |--------------------------------------------------------------------
// |--------- loading initialization --------------
// |--------------------------------------------------------------------

initLoader() {
  this.loading = this.loadingController.create({
    spinner: 'hide',
    content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
  });
}







// |--------------------------------------------------------------------
// |--------- sorting raw routine array --------------
// |--------------------------------------------------------------------


async sortArr(rawRoutineArr) {
  let new_arry = [];
  rawRoutineArr.forEach((element, i) => {
    let pos = new_arry
      .map(function(e) {
        return e.day;
      })
      .indexOf(element.day);
    // console.log(new_arry.indexOf(element.day));
    if (pos < 0) {
      if(element.rutinedetails.length > 0){
        this.subject = element.rutinedetails[0].class.section.sec_name;
        this.room = element.rutinedetails[0].room.name;
        this.floor = element.rutinedetails[0].room.floor_name;
      }else{
        this.subject = 'No Priod';
        this.room = 'NA';
        this.floor = 'NA'
      }


      let new_data = {
        id: element.id,
        day: element.day,
        icon: 'ios-add-circle-outline',
        showDetails: false,
        priods: [
          {
            priod_id: element.priod_id,
            priod_name: element.priod.priod_name,
            from_time: element.priod.from_time,
            to_time: element.priod.to_time,
            sub: this.subject,
            floor: this.floor,
            room: this.room,
            rutinedetails: element.rutinedetails
          }
        ]
      };
      new_arry.push(new_data);
    } else {
      
      let exsisting_data = {
        priod_id: element.priod_id,
        priod_name: element.priod.priod_name,
        from_time: element.priod.from_time,
        to_time: element.priod.to_time,
        sub: this.subject,
        floor: this.floor,
        room: this.room,
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
  console.log('final array : ', this.routineList);
  this.presentLoading(false);
}






}
