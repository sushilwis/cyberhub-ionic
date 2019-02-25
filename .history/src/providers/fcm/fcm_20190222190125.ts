import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// @Injectable()
// export class FcmProvider {

//   constructor(public http: HttpClient) {
//     console.log('Hello FcmProvider Provider');
//   }

// }

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';


@Injectable()
export class FcmProvider {
  localVal;
  constructor(
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    private platform: Platform,
    private uniqueDeviceID: UniqueDeviceID
  ) {
    // this.localVal = JSON.parse(localStorage.getItem('userData'));
  }


  async getToken() {

    let token;

    if (this.platform.is('android')) {
     
      token = await this.firebaseNative.getToken()
      
    } 

    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
     
      const perm = await this.firebaseNative.grantPermission();
    } 
    
    // Is not cordova == web PWA
    if (!this.platform.is('cordova')) {
      // TODO add PWA support with angularfire2
    } 

    return this.saveTokenToFirestore(token)
  }





  private saveTokenToFirestore(token) {
    if (!token) return;
    const devicesRef = this.afs.collection('devices');
    this.uniqueDeviceID.get()
    .then((uuid: any) =>{
        alert(uuid)
        const docData = {
          token,
          deviece_id: uuid,
          user_id: ""
        }

        return devicesRef.doc(token).set(docData);
    })
        
    .catch((error: any) => console.log(error));
    
  }





  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }

}