import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { GuestEnquiryPage } from '../guest-enquiry/guest-enquiry';
import { StudentLoginPage } from '../student-login/student-login';
import { ParentsLoginPage } from '../parents-login/parents-login';
import { StaffLoginPage } from '../staff-login/staff-login';
import { AnimationService, AnimationBuilder } from 'css-animator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;
  @ViewChild('myElement') myElem;
  private animator: AnimationBuilder;
constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    animationService: AnimationService
  )
  {
    this.menuCtrl.enable(false);
    this.animator = animationService.builder();
  }


  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    }, 200);
    this.animateElem();
  }

  animateElem() {
    this.animator.setType('pulse').show(this.myElem.nativeElement);
  }
 //  constructor(public menuCtrl:MenuController){
	// this.menuCtrl.enable(false);
	// }
	goToGuest(){
		this.navCtrl.push(GuestEnquiryPage);
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
}
