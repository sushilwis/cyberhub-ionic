import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, MenuController, Platform } from 'ionic-angular';
import { GuestEnquiryPage } from '../guest-enquiry/guest-enquiry';
import { StudentLoginPage } from '../student-login/student-login';
import { ParentsLoginPage } from '../parents-login/parents-login';
import { StaffLoginPage } from '../staff-login/staff-login';
import { AnimationService, AnimationBuilder } from 'css-animator';
import { WelcomeGuestPage } from '../welcome-guest/welcome-guest';
import { App } from 'ionic-angular';
import {IonicApp } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  splash = true;
  @ViewChild('myElement') myElem;
  private animator: AnimationBuilder;
  seeTabs: boolean = false;
constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    animationService: AnimationService,
    public app: App,
    private ionicApp: IonicApp,

  )
  {
    this.menuCtrl.enable(false);
    this.animator = animationService.builder();
    this.platform.registerBackButtonAction(() => {
      if (this.navCtrl.getViews().length > 1) {
        this.navCtrl.pop();
      }

      // let activeModal=this.ionicApp._modalPortal.getActive();
      // if(activeModal){
      //   activeModal.dismiss();
      //     return;
      // }

      let alert1 = <HTMLDivElement>document.querySelector('.alert-wrapper');
      let actionSheet = <HTMLDivElement>document.querySelector('.action-sheet-wrapper');
      let backdrop: any = <HTMLCollection>document.getElementsByTagName('ion-backdrop');

      if(backdrop && backdrop.length > 0){
        // alert(backdrop);
        for(var i=0; i <= backdrop.length; i++){
          if(backdrop[i]){
            backdrop[i].style.opacity = '0.1';
            // backdrop[i].style.display = 'none';
            // backdrop[i].remove();
          }          
        }
      }

      if(actionSheet){
        actionSheet.style.display = 'none';
      }
      
      if(alert1){
        alert1.style.display = 'none';
      }
    });

    this.seeTabs = false;

    // this.platform.registerBackButtonAction(() => {
    //   if (this.nav.getViews().length > 1) {
    //     let alert1 = <HTMLDivElement>document.querySelector('.alert-wrapper');
    //     if(alert1){
    //       alert1.style.display = 'none';
    //     }        
    //     this.nav.pop();
    //   }
    // })
  }


  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    }, 200);
    this.animateElem();
  }



  ngOnInit() {
    this.hideTabs();
  }

  animateElem() {
    this.animator.setType('pulse').show(this.myElem.nativeElement);
  }
 //  constructor(public menuCtrl:MenuController){
	// this.menuCtrl.enable(false);
	// }
	goToGuest(){
		this.navCtrl.push(WelcomeGuestPage);
	}
  goToStudent(){
    this.navCtrl.push(StudentLoginPage);
  }
  goToParents(){
    this.navCtrl.push(ParentsLoginPage);
  }
  goToStaff(){
    this.navCtrl.push(StaffLoginPage);
  }





  hideTabs(){
    let elements = document.querySelectorAll(".tabbar");
    console.log(Object.keys(elements));
    
      if (elements != null) {
          Object.keys(elements).map((key) => {
              elements[key].style.display = 'none';
          });
      }
  }

  
}
