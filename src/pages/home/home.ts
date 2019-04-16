import { Component, ViewChild, OnInit } from "@angular/core";
import {
  NavController,
  MenuController,
  Platform,
  LoadingController
} from "ionic-angular";
import { GuestEnquiryPage } from "../guest-enquiry/guest-enquiry";
import { StudentLoginPage } from "../student-login/student-login";
import { ParentsLoginPage } from "../parents-login/parents-login";
import { StaffLoginPage } from "../staff-login/staff-login";
import { AnimationService, AnimationBuilder } from "css-animator";
import { WelcomeGuestPage } from "../welcome-guest/welcome-guest";
import { App } from "ionic-angular";
import { IonicApp } from "ionic-angular";
import * as $ from "jquery";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  splash = true;
  @ViewChild("myElement") myElem;
  private animator: AnimationBuilder;
  seeTabs: boolean = false;
  loading: any;
  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    animationService: AnimationService,
    public app: App,
    private ionicApp: IonicApp,
    public loadingController: LoadingController
  ) {
    this.loadScript();
    this.initLoader();
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

      let alert1 = <HTMLDivElement>document.querySelector(".alert-wrapper");
      let actionSheet = <HTMLDivElement>(
        document.querySelector(".action-sheet-wrapper")
      );
      let backdrop: any = <HTMLCollection>(
        document.getElementsByTagName("ion-backdrop")
      );

      if (backdrop && backdrop.length > 0) {
        // alert(backdrop);
        for (var i = 0; i <= backdrop.length; i++) {
          if (backdrop[i]) {
            backdrop[i].style.opacity = "0.1";
            // backdrop[i].style.display = 'none';
            // backdrop[i].remove();
          }
        }
      }

      if (actionSheet) {
        actionSheet.style.display = "none";
      }

      if (alert1) {
        alert1.style.display = "none";
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
    this.loadScript();
    // this.presentLoading(false);
    setTimeout(() => {
      this.splash = false;
    }, 10000);
    this.animateElem();
  }

  ngOnInit() {
    this.loadScript();
    this.hideTabs();
    // this.presentLoading(true);
  }

  animateElem() {
    this.animator.setType("pulse").show(this.myElem.nativeElement);
  }
  //  constructor(public menuCtrl:MenuController){
  // this.menuCtrl.enable(false);
  // }
  goToGuest() {
    this.navCtrl.push(WelcomeGuestPage);
  }
  goToStudent() {
    this.navCtrl.push(StudentLoginPage);
  }
  goToParents() {
    this.navCtrl.push(ParentsLoginPage);
  }
  goToStaff() {
    this.navCtrl.push(StaffLoginPage);
  }

  hideTabs() {
    let elements = document.querySelectorAll(".tabbar");
    console.log(Object.keys(elements));

    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "none";
      });
    }
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
      content: `<div class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>`
    });
  }

  loadScript() {
    var $splash = $(".splashScreen");
    var $logo1 = $(".splashLogo1");
    var $logo2 = $(".splashLogo2");
    var $footext = $(".splashFooterText");
    var $anim = $(".animationContainer");
    var $viewport = $(".viewportArea");
    $logo1.delay(5000).animate(
      {
        left: "-100%",
        opacity: 0,
        easing: "easeOutExpo"
      },
      500,
      function() {
        $logo2.animate(
          {
            left: "50%",
            opacity: 1,
            easing: "easeInExpo"
          },
          500,
          function() {
            $footext.animate(
              {
                bottom: 0
              },
              500,
              function() {
                $anim.animate(
                  {
                    opacity: 1
                  },
                  500,
                  function() {
                    $viewport.animate(
                      {
                        opacity: 1
                      },
                      500,
                      "linear",
                      function() {
                        //   alert("into second phase");
                        $viewport.animate(
                          {
                            opacity: 1
                          },
                          500,
                          function() {
                            $splash.delay(7000).animate(
                              {
                                opacity: 0
                              },

                              function() {
                                $splash.remove();
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
}
