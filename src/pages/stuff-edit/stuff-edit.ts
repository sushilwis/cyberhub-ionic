import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { ParentsAccountPage } from '../parents-account/parents-account';

/**
 * Generated class for the StuffEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stuff-edit',
  templateUrl: 'stuff-edit.html',
})
export class StuffEditPage {

  stuffFName: any;
  stuffLName: any;
  stuffShortName: any;
  stuffQualification: any;

  editData: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingController: LoadingController, private http: Http, public alertCtrl: AlertController) {
    this.editData = this.navParams.get('data');
    console.log(this.editData);
    this.setDataToForm(); 
    this.initLoader();   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StuffEditPage');
  }


  setDataToForm() {
    this.stuffFName = this.editData.fName;
    this.stuffLName = this.editData.lName;
    this.stuffShortName = this.editData.shortName;
    this.stuffQualification = this.editData.qualification;
  }




  stuffProfileEditSubmit() {
    this.presentLoading(true);

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});

    let data = {
      master_id: this.editData.id,
      f_name: this.stuffFName,
      l_name: this.stuffLName,
      short_name: this.stuffShortName,
      qualification: this.stuffQualification,
    }

    // console.log(data);      

    this.http.post(`${apiUrl.url}staff/update`, data, options).
      map(res => res.json()).subscribe(data => {
        console.log('stuff data : ', data);	  
        if (data.data) {
          this.presentLoading(false);
          this.showAlert('Success!', `Update Successful.`);	
          this.navCtrl.push(ParentsAccountPage);			
        }else{
          this.presentLoading(false);
          this.showAlert('Error!', `Something Wrong. Please Try Again.`);
          this.navCtrl.push(ParentsAccountPage);
        }
    })
  }






  presentLoading(load: boolean) {
		if (load) {
			return this.loading.present();
		}
		else {
			setTimeout(() => {
				return this.loading.dismiss();
			}, 1000);
		}
  }



  


  initLoader() {
		this.loading = this.loadingController.create({
			spinner: 'hide',
			content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
		});
  }






  showAlert(title, msg) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });

    alert.present();
  }



  

}
