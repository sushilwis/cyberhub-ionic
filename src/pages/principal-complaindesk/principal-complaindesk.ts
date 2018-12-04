import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComplainReplyPage } from "../complain-reply/complain-reply";

/**
 * Generated class for the PrincipalComplaindeskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal-complaindesk',
  templateUrl: 'principal-complaindesk.html',
})
export class PrincipalComplaindeskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalComplaindeskPage');
  }
  gotoCompalinReply(){
  	this.navCtrl.push(ComplainReplyPage);
  }

}
