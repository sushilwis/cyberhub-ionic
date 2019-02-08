import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParentsStudentViewPage } from '../parents-student-view/parents-student-view';
/**
 * Generated class for the ParentsChildTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parents-child-tabs',
  templateUrl: 'parents-child-tabs.html',
})
export class ParentsChildTabsPage {
	  
    tab1Root = ParentsStudentViewPage;
  	tab2Root = ParentsStudentViewPage;
  	tab3Root = ParentsStudentViewPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentsChildTabsPage');
  }

}
