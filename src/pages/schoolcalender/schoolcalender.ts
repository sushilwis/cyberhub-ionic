import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http, RequestOptions, Headers, } from '@angular/http';
import 'rxjs/add/operator/map';
import { apiUrl } from '../../apiUrl'
import { StudentOwndetailsPage } from '../student-owndetails/student-owndetails';
import { HomePage } from '../home/home';

/**
 * Generated class for the SchoolcalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schoolcalender',
  templateUrl: 'schoolcalender.html',
})
export class SchoolcalenderPage implements OnInit{
  eventSource: any = [];
  isToday: boolean;
  viewTitle
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    dateFormatter: {
      formatMonthViewDay: function (date: Date) {
        return date.getDate().toString();
      },
      formatMonthViewDayHeader: function (date: Date) {
        return 'MonMH';
      },
      formatMonthViewTitle: function (date: Date) {
        return 'testMT';
      },
      formatWeekViewDayHeader: function (date: Date) {
        return 'MonWH';
      },
      formatWeekViewTitle: function (date: Date) {
        return 'testWT';
      },
      formatWeekViewHourColumn: function (date: Date) {
        return 'testWH';
      },
      formatDayViewHourColumn: function (date: Date) {
        return 'testDH';
      },
      formatDayViewTitle: function (date: Date) {
        return 'testDT';
      }
    }
  };


  schoolId: any;
  allEventList: any = [];
  filterEventList: any = [];
  start: any;
  end: any;
  localUserData: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private http: Http,) {
      this.getUserDataFromLocal();
      this.schoolId =  this.navParams.get('id');
  }



  ngOnInit(){
    // this.getEventList();
  }



  goToHome() {
    if(this.localUserData){
      this.navCtrl.setRoot(StudentOwndetailsPage);
    } else {
      this.navCtrl.setRoot(HomePage);
    }    
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolcalenderPage');
    this.getEventList();
  }




  today() {
    this.calendar.currentDate = new Date();
  }





  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }





  onViewTitleChanged(title) {
    this.viewTitle = title;
  }





  onTimeSelected(ev) {
    // console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
    //   (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }





  loadEvents() {
    // this.eventSource = this.createRandomEvents();
    // console.log(this.eventSource)
  }





  onEventSelected(event) {
    //console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    let alert = this.alertCtrl.create({
      title: event.title.toUpperCase(),
      subTitle: 'Event Started:' + event.startTime + ', To: ' + event.endTime,
      buttons: ['Dismiss']
    });

    alert.present();
  }





  // createRandomEvents() {
  //   var events = [];
  //   for (var i = 0; i < 10; i += 1) {
  //     var date = new Date();
  //     var eventType = Math.floor(Math.random() * 2);
  //     var startDay = Math.floor(Math.random() * 90) - 45;
  //     var endDay = Math.floor(Math.random() * 2) + startDay;
  //     var startTime;
  //     var endTime;


  //     if (eventType === 0) {
  //       startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
  //       if (endDay === startDay) {
  //         endDay += 1;
  //       }
  //       endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
  //       events.push({
  //         title: 'All Day - ' + i,
  //         startTime: startTime,
  //         endTime: endTime,
  //         allDay: true
  //       });
  //     } else {
  //       var startMinute = Math.floor(Math.random() * 24 * 60);
  //       var endMinute = Math.floor(Math.random() * 180) + startMinute;
  //       startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
  //       endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
  //       events.push({
  //         title: 'Event - ' + i,
  //         startTime: startTime,
  //         endTime: endTime,
  //         allDay: false
  //       });
  //     }



  //   }
  //   console.log(events);

  //   return events;
  // }





async getEventList() {
    // this.presentLoading(true);
    // await this.getUserDataFromLocal();
    let header = new Headers();
    header.set("Content-Type", "application/json");

      let data = {
        org_id: this.schoolId
      }      

      this.http
        .post(`${apiUrl.url}event/eventdetails`, data, {headers: header})
        .map(res => res.json())
        .subscribe(
          async data => {
              // this.presentLoading(false);
            // console.log("event list : ", data.data);
            if(data.data.length > 1){
              this.allEventList = await data.data; 
              // console.log("event list : ", data.data);
              this.ArrangeArrFromEventList(this.allEventList);
              console.log('event source : ', this.eventSource);               
            } else {
              // this.presentLoading(false);
            }            
      });

      
      // return this.allEventList;
  }






  async ArrangeArrFromEventList(arr) {
    this.eventSource = [];

    arr.forEach(async (arrItem) => {

      this.end = this.createJavascriptDate(arrItem.event_enddate);
      this.start = this.createJavascriptDate(arrItem.event_startdate);

      let obj = await {
        allDay: false,
        eTime: arrItem.event_endtime,
        endTime: this.end,
        sTime: arrItem.event_startime,
        startTime: this.start,
        title: arrItem.event_name,
        desc: arrItem.event_description
      }

      // console.log('arr item : ', obj);
      await this.eventSource.push(obj);
    }); 
    
    // console.log('event source 111 : ', this.eventSource); 
  }






  createJavascriptDate(strDate){
    // let date = await new Date();
    let dateArr = strDate.split('-');    
    let timeStamp = new Date().setFullYear(dateArr[0], dateArr[1]-1, dateArr[2]);
    // console.log(timeStamp);    
    let jsDate = new Date(timeStamp);       
    return jsDate;
  }






  getUserDataFromLocal() {
    let data = localStorage.getItem("userData");
    this.localUserData = JSON.parse(data);
    // console.log('local data : ', this.localUserData);
  }






  // getDetails(id: string) {
  //   let listOfEvents = [];
  //   var date = new Date();
  //   this.http.get(`${apiUrl.url}/event/${id}`).
  //     map(res => res.json()).subscribe(data => {
  //       console.log(data);
  //       data.forEach(ele => {
  //         if (ele.allday == 0) {
  //           let strt_arry = ele.start_date.split(" ");
  //           let start_date = strt_arry[0].split("-")
  //           let end_arry = ele.start_date.split(" ");
  //           let end_date = end_arry[0].split("-")
  //           let startTime = new Date(Date.UTC(start_date[0], start_date[1], start_date[2]));
  //           let endTime = new Date(Date.UTC(end_date[0], end_date[1], end_date[2]));
  //           listOfEvents.push({
  //             allDay: true,
  //             startTime: startTime,
  //             endTime: endTime
  //           })
  //         }
  //       });
  //     })
  //   console.log(listOfEvents);

  // }

}
