import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ParentHomePage } from '../parent-home/parent-home';


@IonicPage()
@Component({
  selector: 'page-add-child',
  templateUrl: 'add-child.html',
})
export class AddChildPage {

  constructor(
    public navCtrl: NavController, 
		public navParams: NavParams, 
    private http: Http,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
  ) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddChildPage');
  }



  saveChild() {
    console.log('save child clicked.');  
    this.showAlert(
			"Alert!",
			"Successfully added your child information to your account"
    ); 
    this.navCtrl.setRoot(ParentHomePage); 
  }


  // showAlert(title, msg) {
  //   const alert = this.alertCtrl.create({
  //     title: title,
  //     subTitle: msg,
  //     buttons: ["OK"]
  //   });
  //   alert.present();
  // }
  


  showAlert(title, msg) {
  const alert = this.alertCtrl.create({
    title: title,
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


}
