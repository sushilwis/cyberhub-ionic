import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, MenuController, Platform } from 'ionic-angular';
import { GuestEnquiryPage } from '../guest-enquiry/guest-enquiry';
import { StudentLoginPage } from '../student-login/student-login';
import { ParentsLoginPage } from '../parents-login/parents-login';
import { StaffLoginPage } from '../staff-login/staff-login';
import { AnimationService, AnimationBuilder } from 'css-animator';
import { WelcomeGuestPage } from '../welcome-guest/welcome-guest';

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
    animationService: AnimationService
  )
  {
    this.menuCtrl.enable(false);
    this.animator = animationService.builder();
    this.platform.registerBackButtonAction(() => {
      if (this.navCtrl.getViews().length > 1) {
        this.navCtrl.pop();
      }
    });

    this.seeTabs = false;
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
