webpackJsonp([36],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuffChangePassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parents_account_parents_account__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ModalController, Platform, ViewController } from 'ionic-angular';
/**
 * Generated class for the StuffChangePassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StuffChangePassPage = /** @class */ (function () {
    function StuffChangePassPage(navCtrl, navParams, menuCtrl, http, loadingController, jsonp, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.loadingController = loadingController;
        this.jsonp = jsonp;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    StuffChangePassPage.prototype.ngOnInit = function () {
        this.getUserDataFromLocal();
    };
    StuffChangePassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StuffChangePassPage');
    };
    StuffChangePassPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        console.log('local data : ', this.localUserData);
    };
    StuffChangePassPage.prototype.onChangePassSubmit = function () {
        var _this = this;
        if (this.newPassword && this.oldPassword) {
            if (this.newPassword == this.confNewPassword) {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
                var data = {
                    'id': this.localUserData.id,
                    'user_type_id': this.localUserData.user_type_id,
                    'pass': this.newPassword,
                    'oldpass': this.oldPassword,
                };
                this.http.post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "user/changepass", data, options).
                    map(function (res) { return res.json(); }).subscribe(function (data) {
                    console.log(data);
                    if (data.status == "1") {
                        _this.showAlert('Password Changed Successfully.');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__parents_account_parents_account__["a" /* ParentsAccountPage */]);
                    }
                    else {
                        _this.showAlert(data.mssg);
                    }
                });
            }
            else {
                this.showAlert('Password Not Match.');
            }
        }
        else {
            this.showAlert('Please fill all the fields.');
        }
    };
    StuffChangePassPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    StuffChangePassPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    StuffChangePassPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    StuffChangePassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stuff-change-pass',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-change-pass/stuff-change-pass.html"*/'<!--\n  Generated template for the StuffChangePassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="enquiry-form">\n    <h2 class="title" text-center text-uppercase margin-bottom>Change Your Password</h2>\n    <form>\n      <!-- or with standalone set to true -->\n      <ion-item class="select-css">\n         <ion-input type="password" name="oldPassword" placeholder="Old Password" [(ngModel)]="oldPassword"></ion-input>\n      </ion-item>\n  \n      <ion-item class="select-css">\n        <ion-input type="password" name="newPassword" placeholder="New Password" [(ngModel)]="newPassword"></ion-input>\n      </ion-item>\n  \n      <ion-item class="select-css">\n         <ion-input type="password" name="confNewPassword" placeholder="Confirm New Password" [(ngModel)]="confNewPassword"></ion-input>\n      </ion-item>\n      \n      <button ion-button type="submit" block outline color="blue" class="mt-10" (click)="onChangePassSubmit()">Submit</button>\n    </form>\n  </div>  \n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-change-pass/stuff-change-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], StuffChangePassPage);
    return StuffChangePassPage;
}());

//# sourceMappingURL=stuff-change-pass.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuffEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parents_account_parents_account__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the StuffEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StuffEditPage = /** @class */ (function () {
    function StuffEditPage(navCtrl, navParams, menuCtrl, loadingController, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.editData = this.navParams.get('data');
        console.log(this.editData);
        this.setDataToForm();
        this.initLoader();
    }
    StuffEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StuffEditPage');
    };
    StuffEditPage.prototype.setDataToForm = function () {
        this.stuffFName = this.editData.fName;
        this.stuffLName = this.editData.lName;
        this.stuffShortName = this.editData.shortName;
        this.stuffQualification = this.editData.qualification;
    };
    StuffEditPage.prototype.stuffProfileEditSubmit = function () {
        var _this = this;
        if (this.stuffFName && this.stuffLName && this.stuffShortName && this.stuffQualification) {
            this.presentLoading(true);
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
            var data = {
                master_id: this.editData.id,
                f_name: this.stuffFName,
                l_name: this.stuffLName,
                short_name: this.stuffShortName,
                qualification: this.stuffQualification,
            };
            // console.log(data);
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "staff/update", data, options).
                map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log('stuff data : ', data);
                if (data.data) {
                    _this.presentLoading(false);
                    _this.showAlert('Success!', "Update Successful.");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__parents_account_parents_account__["a" /* ParentsAccountPage */]);
                }
                else {
                    _this.presentLoading(false);
                    _this.showAlert('Error!', "Something Wrong. Please Try Again.");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__parents_account_parents_account__["a" /* ParentsAccountPage */]);
                }
            });
        }
        else {
            this.showAlert('Error!', "Please fill all the data.");
        }
    };
    StuffEditPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    StuffEditPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    StuffEditPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    StuffEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stuff-edit',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-edit/stuff-edit.html"*/'<!--\n  Generated template for the StuffEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h5 class="title" text-center text-uppercase margin-bottom></h5>\n\n    <!-- <ion-list>\n        <ion-item>\n          <ion-label>Select College</ion-label>\n          <ion-select [(ngModel)]="college" name="college">\n            <ion-option value=""></ion-option>\n          </ion-select>\n        </ion-item>\n    </ion-list> -->\n\n    <ion-list>\n        <ion-item>\n          <ion-label floating>First Name</ion-label>\n          <ion-input type="text" name="stuffFName" [(ngModel)]="stuffFName"></ion-input>\n        </ion-item>      \n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input type="text" name="stuffLName" [(ngModel)]="stuffLName"></ion-input>\n      </ion-item>      \n  </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Short Name</ion-label>\n        <ion-input type="text" name="stuffShortName" [(ngModel)]="stuffShortName"></ion-input>\n      </ion-item>      \n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Qualification</ion-label>\n        <ion-input type="text" name="stuffQualification" [(ngModel)]="stuffQualification"></ion-input>\n      </ion-item>      \n    </ion-list>\n\n    <button ion-button block outline color="blue" class="" (click)=\'stuffProfileEditSubmit()\'>Update</button>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-edit/stuff-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], StuffEditPage);
    return StuffEditPage;
}());

//# sourceMappingURL=stuff-edit.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(navCtrl, navParams, menuCtrl, http, loadingController, jsonp, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.loadingController = loadingController;
        this.jsonp = jsonp;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    ChangepasswordPage.prototype.ngOnInit = function () {
        this.getUserDataFromLocal();
    };
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);    
    };
    ChangepasswordPage.prototype.onChangePassSubmit = function () {
        var _this = this;
        if (this.newPassword && this.confNewPassword) {
            if (this.newPassword == this.confNewPassword) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]({ headers: headers });
                var data = {
                    'id': this.localUserData.id,
                    'user_type_id': this.localUserData.user_type_id,
                    'pass': this.newPassword,
                    'oldpass': this.oldPassword,
                };
                this.http.post(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* apiUrl */].url + "user/changepass", data, options).
                    map(function (res) { return res.json(); }).subscribe(function (data) {
                    console.log(data);
                    if (data.status == "1") {
                        _this.showAlert('Password Changed Successfully.');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["b" /* default */]);
                    }
                    else {
                        _this.showAlert(data.mssg);
                    }
                });
            }
            else {
                this.showAlert('Password Not Match.');
            }
        }
        else {
            this.showAlert('Please enter New Password and Password field.');
        }
    };
    ChangepasswordPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    ChangepasswordPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    ChangepasswordPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changepassword',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/changepassword/changepassword.html"*/'<!--\n  Generated template for the ChangepasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<div class="enquiry-form">\n		 <h1 class="title" text-center text-uppercase margin-bottom>Change Your Password</h1>\n	 	<form>\n		<!-- or with standalone set to true -->\n		<ion-item class="select-css">\n		   <ion-input type="password" name="oldPassword" placeholder="Old Password" [(ngModel)]="oldPassword"></ion-input>\n		</ion-item>\n\n		<ion-item class="select-css">\n			<ion-input type="password" name="newPassword" placeholder="New Password" [(ngModel)]="newPassword"></ion-input>\n	 </ion-item>\n\n		<ion-item class="select-css">\n		   <ion-input type="password" name="confNewPassword" placeholder="Confirm New Password" [(ngModel)]="confNewPassword"></ion-input>\n		</ion-item>\n		\n		<button ion-button type="submit" block outline color="blue" class="mt-10" (click)="onChangePassSubmit()">Submit</button>\n	</form>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/changepassword/changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfDownloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__school_details_school_details__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__library_list_library_list__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__student_notice_board_student_notice_board__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
/**
 * Generated class for the PdfDownloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PdfDownloadPage = /** @class */ (function () {
    function PdfDownloadPage(navCtrl, navParams, http, loadingController, file, document, transfer, platform, alertCtrl, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.file = file;
        this.document = document;
        this.transfer = transfer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        var id = navParams.get('id');
        this.getDetails(id);
        this.initLoader();
        this.presentLoading(true);
    }
    PdfDownloadPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    PdfDownloadPage.prototype.getDetails = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            org_id: id,
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_10__apiUrl__["a" /* apiUrl */].url + "notice/get-general", data, { headers: header }).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.presentLoading(false);
            _this.noticeList = data.data;
            if (data.data[0].notice) {
                _this.showList = true;
            }
            else {
                _this.showList = false;
            }
            console.log('show list : ', _this.showList);
        });
    };
    PdfDownloadPage.prototype.downloadAndOpenPdf = function (url) {
        var _this = this;
        console.log(url);
        var path = null;
        if (this.platform.is('ios')) {
            path = this.file.documentsDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.dataDirectory;
        }
        var transfer = this.transfer.create();
        transfer.download(url, path + 'myfile.pdf').then(function (entry) {
            var url = entry.toURL();
            _this.document.viewDocument(url, 'application/pdf', {});
        });
    };
    PdfDownloadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PdfDownloadPage');
    };
    PdfDownloadPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__school_details_school_details__["a" /* SchoolDetailsPage */]);
    };
    PdfDownloadPage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    PdfDownloadPage.prototype.goToLibrary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__library_list_library_list__["a" /* LibraryListPage */]);
    };
    PdfDownloadPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    PdfDownloadPage.prototype.showPdf = function (url) {
        console.log(url);
        this.document.viewDocument(url, 'application/pdf', {});
    };
    PdfDownloadPage.prototype.presentProfileModal = function (id) {
        // console.log('clicked...', id); 
        var filterNotice = this.noticeList.filter(function (item) {
            return item.id == id;
        });
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__student_notice_board_student_notice_board__["a" /* NoticeModalPage */], { notice: filterNotice[0] });
        profileModal.present();
    };
    PdfDownloadPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PdfDownloadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pdf-download',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/pdf-download/pdf-download.html"*/'<!--\n  Generated template for the PdfDownloadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Download PDF</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- <ion-list>\n\n    <ion-item *ngFor="let list of noticeList">\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/download-img.png">\n      </ion-thumbnail>\n      <h2>{{list?.title}}</h2>\n      <p>{{list?.subject}}</p>\n      <button ion-button clear item-end (click)="downloadAndOpenPdf(list?.file_url)"><i class="fas fa-download fa-2x"></i></button>\n    </ion-item>\n  </ion-list> -->\n  <!-- (click)="presentProfileModal(notice.id)" -->\n    <ion-list *ngFor="let notice of noticeList">\n      <ion-item *ngIf="notice.notice">\n        <ion-thumbnail item-start (click)="presentProfileModal(notice.id)">\n          <img src="assets/imgs/download-img.png">\n        </ion-thumbnail>\n        <h2>{{notice?.notice?.subject}}</h2>\n        <p>{{notice?.notice?.text}}</p>\n        <p>{{notice?.noticetype?.type_name}}</p>\n        <button ion-button clear item-end (click)="showPdf(notice?.notice?.file_url)">\n          <i class="fas fa-download fa-2x"></i>\n        </button>\n      </ion-item>  \n    </ion-list>\n\n    <ion-list *ngIf="!showList">\n      <ion-item text-center>\n        <p>No Data Found</p>\n      </ion-item>  \n    </ion-list>\n</ion-content>\n\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">\n  <ion-grid text-center >\n    <ion-row>\n      <div col-4 (click)=goToHome()>\n        <i text-center class="fas fa-home fa-inverse fa-lg"></i>\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-4 (click)=gotoLiveStream()>\n        <i text-center class="fas fa-video fa-inverse fa-lg"></i>\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-4>\n        <i text-center class="fas fa-align-justify fa-inverse fa-lg"></i>\n        <p  class="footer-p" (click)=goToLibrary()>Library</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/pdf-download/pdf-download.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], PdfDownloadPage);
    return PdfDownloadPage;
}());

//# sourceMappingURL=pdf-download.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attendance_list_attendance_list__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apiUrl__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the GetAttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetAttendancePage = /** @class */ (function () {
    function GetAttendancePage(navCtrl, navParams, menuCtrl, loadingController, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.sortArray = [];
        this.selectedData = {};
        this.filteredArrayForSectionList = [];
        this.showTeacherForm = true;
        this.menuCtrl.enable(true);
        this.initLoader();
    }
    GetAttendancePage.prototype.ngOnInit = function () {
        this.getUserDataFromLocal();
        this.getShiftLists();
        this.getClassList();
        // this.getPeriod();
        this.showTeacherForm = true;
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad GetAttendancePage');
    // }
    GetAttendancePage.prototype.gotoAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__attendance_list_attendance_list__["a" /* AttendanceListPage */]);
    };
    GetAttendancePage.prototype.getShiftLists = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            org_id: this.localUserData.org_code
        };
        // this.checkshift = [];
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__apiUrl__["a" /* apiUrl */].url + "shift/orgshiftlist", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // console.log("Org shift list ", data.data);
            _this.orgShiftLists = data.data;
        });
    };
    GetAttendancePage.prototype.onChooseShift = function (e) {
        this.sortArray = [];
        this.shiftID = e;
        // console.log(e);
        // console.log(this.allSelected);        
        // console.log('shift : ', e.value);  
        // let ifAllSelect = e.value.filter((ele)=>{
        //   return ele == "all";
        // });
        // if(ifAllSelect.length > 0){
        // this.sortArray = [];
        // this.selectedData.selectedShifts = this.orgShiftLists;
        // this.createSortArray(this.orgClassSectionList);
        // this.sortArray.unshift({
        //   class_name: "All",
        //   class_id: "all"
        // });
        // console.log("filter class list for choosen shift : ", this.sortArray); 
        // }else{
        this.selectedData.selectedShifts = e;
        this.filteredArrayForClassList = this.orgClassSectionList.filter(function (ele) {
            return ele.org_shift_id == e;
        });
        this.getPeriod();
        // console.log(this.filteredArrayForClassList);
        this.createSortArray(this.filteredArrayForClassList);
        // }
    };
    GetAttendancePage.prototype.getClassList = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            org_id: this.localUserData.org_code
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__apiUrl__["a" /* apiUrl */].url + "classsection/getall", data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // console.log("Org Class list : ", data.data);
            _this.orgClassSectionList = data.data;
            // this.createSortArray(this.orgClassSectionList);
            // this.sortArray.unshift({
            //   class_name: "All",
            //   class_id: "all"
            // });
        });
        // console.log("Org Class list : ", this.sortArray);
    };
    GetAttendancePage.prototype.onChooseClassStream = function (e) {
        // console.log(e);    
        this.filteredArrayForSectionList = [];
        this.classStreamID = e;
        this.filteredArrayForSectionList = this.sortArray.filter(function (element) {
            return element.class_id == e;
        });
        if (this.filteredArrayForSectionList.length > 0) {
            this.filteredArrayForSectionList = this.filteredArrayForSectionList[0].sections;
        }
        // console.log(this.filteredArrayForSectionList);    
    };
    GetAttendancePage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    GetAttendancePage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    GetAttendancePage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);    
    };
    GetAttendancePage.prototype.createSortArray = function (arr) {
        var _this = this;
        // var rs = 1;
        arr.forEach(function (ele) {
            var obj = {
                class_id: ele.class_id,
                sec_id: ele.sec_id,
                class_name: ele.class.class_name,
                shift_id: ele.org_shift_id,
                sections: [
                    {
                        section_name: ele.section.sec_name,
                        sec_id: ele.sec_id,
                        classSectionIndexId: ele.id
                    }
                ]
            };
            var check_exist = _this.sortArray.filter(function (element) {
                return element.class_id == ele.class_id;
            });
            if (check_exist.length > 0) {
                var i = _this.sortArray.indexOf(check_exist[0]);
                _this.sortArray.splice(i, 1);
                check_exist[0].sections.push({
                    section_name: ele.section.sec_name,
                    sec_id: ele.sec_id,
                    classSectionIndexId: ele.id
                });
                _this.sortArray.push(check_exist[0]);
            }
            else {
                _this.sortArray.push(obj);
            }
        });
        // console.log(this.sortArray);    
    };
    GetAttendancePage.prototype.getPeriod = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = { org_id: this.localUserData.org_code, shift_id: this.shiftID };
        // this.checkshift = [];
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__apiUrl__["a" /* apiUrl */].url + "routine/all", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // console.log("period list : ", data.data);
            _this.periodList = data.data;
        });
    };
    GetAttendancePage.prototype.onPeriodSubmit = function () {
        var _this = this;
        var data = {
            period_id: this.period,
            department_id: this.department,
            stream_id: this.stream,
            shift_id: this.shift,
            org_id: this.localUserData.org_code,
            master_id: this.localUserData.master_id,
            atted_code: Math.floor(1000 + Math.random() * 9000) + '' + this.localUserData.org_code + '' + this.localUserData.master_id,
            date: this.makeDateString(new Date()),
        };
        // console.log(data);
        var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__apiUrl__["a" /* apiUrl */].node_url + "attendance/addAttedData", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!data.success) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, data.data[0].atted_code];
                    case 1:
                        _a.genAttCode = _b.sent();
                        localStorage.setItem('attedCode', JSON.stringify(this.genAttCode));
                        localStorage.setItem('department', JSON.stringify(this.department));
                        localStorage.setItem('atted_id', JSON.stringify(data.data[0]._id));
                        this.showTeacherForm = false;
                        this.showAlert(data.msg);
                        return [3 /*break*/, 3];
                    case 2:
                        this.showTeacherForm = true;
                        this.showAlert(data.msg);
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    GetAttendancePage.prototype.onStartAttendence = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__attendance_list_attendance_list__["a" /* AttendanceListPage */]);
    };
    GetAttendancePage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    GetAttendancePage.prototype.makeDateString = function (date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return day + '/' + month + '/' + year;
    };
    GetAttendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-get-attendance',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/get-attendance/get-attendance.html"*/'<!--\n  Generated template for the GetAttendancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Attendance</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content *ngIf="showTeacherForm" class="item-center" padding>\n\n		<h4 class="title" text-center text-uppercase margin-bottom>Select Period</h4>\n\n		<ion-list>\n				<ion-item>\n					<ion-label>Shift</ion-label>\n					<ion-select [(ngModel)]="shift" (ionChange)="onChooseShift($event)">\n						<ng-container *ngFor="let shift of orgShiftLists">\n							<ion-option value="{{shift.orgshift[0]?.id}}" *ngIf="shift.orgshift[0]?.id">{{shift.name}}</ion-option>\n						</ng-container>\n					</ion-select>\n				</ion-item>\n		</ion-list>\n\n		<ion-list>\n				<ion-item>\n					<ion-label>Stream</ion-label>\n					<ion-select [(ngModel)]="stream" (ionChange)="onChooseClassStream($event)">\n						<ion-option value="{{classStream.class_id}}" *ngFor="let classStream of sortArray">{{classStream.class_name}}</ion-option>\n					</ion-select>\n				</ion-item>\n		</ion-list>\n\n		<ion-list>\n				<ion-item>\n					<ion-label>Department</ion-label>\n					<ion-select [(ngModel)]="department">\n						<ion-option value="{{sec.classSectionIndexId}}" *ngFor="let sec of filteredArrayForSectionList">{{sec.section_name}}</ion-option>\n					</ion-select>\n				</ion-item>\n		</ion-list>		\n\n		<ion-list>\n				<ion-item>\n					<ion-label>Period</ion-label>\n					<ion-select [(ngModel)]="period">\n						<ion-option *ngFor="let period of periodList" value="{{period.id}}">{{period.priod_name}} ({{period.from_time}} {{period.to_time}})</ion-option>\n					</ion-select>\n				</ion-item>\n		</ion-list>\n\n		<button ion-button block outline color="blue" class="mt-10" (click)="onPeriodSubmit()">Submit</button>\n\n</ion-content>\n\n\n\n\n\n\n\n\n<ion-content *ngIf="!showTeacherForm" class="item-center" padding>\n\n		<h3 class="title" text-center text-uppercase margin-bottom style="margin-top: 7rem;">Your Attendance Code</h3>\n		<h4 text-center margin-bottom>{{genAttCode}}</h4>\n		\n		<button ion-button block outline color="blue" class="mt-10" (click)="onStartAttendence()">Start</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/get-attendance/get-attendance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], GetAttendancePage);
    return GetAttendancePage;
}());

//# sourceMappingURL=get-attendance.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__staff_info_staff_info__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the AttendanceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttendanceListPage = /** @class */ (function () {
    function AttendanceListPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.joinned = false;
        this.newUser = { nickname: "", room: "" };
        this.msgData = { room: "", nickname: "", message: "" };
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__("http://18.191.46.158:3000/");
        this.studentList = [];
        this.attenStudentList = [];
        this.test = false;
    }
    AttendanceListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getStudentList();
        // this.roomName = {
        //   room: JSON.parse(localStorage.getItem('attedCode')),
        //   name: this.localUserData.master_id
        // }
        // this.getStudentList();
        this.socket.on("connect", function () {
            _this.socket.emit("join", _this.room, function (err) {
                if (err) {
                    // console.log(err);
                }
                else {
                    // console.log('No error');
                }
            });
        });
        this.socket.on("updateUserList", function (users) {
            // console.log(users);
            _this.studentList = users;
            _this.studentList.forEach(function (ele) {
                var foundStd = _this.attenStudentList.filter(function (std) {
                    return std.id == ele.name;
                });
                if (foundStd.length > 0) {
                    var i = _this.attenStudentList.indexOf(foundStd[0]);
                    _this.attenStudentList.splice(i, 1);
                    foundStd[0].isChecked = true;
                    _this.attenStudentList.push(foundStd[0]);
                }
            });
            // console.log("student list : ", this.attenStudentList);
            // console.log('Students that gave attendence : ', this.studentList);
            // let   data = {
            //             search: {
            //             master_id: this.localUserData.master_id,
            //             org_id: this.localUserData.code_org
            //             },
            //             add: users[0]
            //       };
            // this.addStudentToPeriodAttendanceList(data);
        });
    };
    AttendanceListPage.prototype.ionViewDidLoad = function () {
        // console.log('Atted ID : ', JSON.parse(localStorage.getItem('atted_id')));
        // console.log('ionViewDidLoad AttendanceListPage');
        // setTimeout(()=>{
        //   this.deactivatePeriodAtted(JSON.parse(localStorage.getItem('atted_id')));
        // }, 15000);
    };
    AttendanceListPage.prototype.getStudentList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserDataFromLocal()];
                    case 1:
                        _a.sent();
                        header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        header.set("Content-Type", "application/json");
                        if (this.getUserDataFromLocal) {
                            data = {
                                dept_id: JSON.parse(localStorage.getItem("department")),
                                org_id: this.localUserData.org_code
                            };
                            this.http
                                .post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "student/classstudentlist", data, {
                                headers: header
                            })
                                .map(function (res) { return res.json(); })
                                .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            console.log("student list : ", data);
                                            if (!(data.data.length > 1)) return [3 /*break*/, 3];
                                            _a = this;
                                            return [4 /*yield*/, data.data];
                                        case 1:
                                            _a.attenStudentList = _b.sent();
                                            return [4 /*yield*/, this.attenStudentList.forEach(function (ele) {
                                                    ele.isChecked = false;
                                                })];
                                        case 2:
                                            _b.sent();
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AttendanceListPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem("userData");
        this.localUserData = JSON.parse(data);
        // this.localUserData =
        // console.log('local data : ', this.localUserData);
        this.room = {
            room: JSON.parse(localStorage.getItem("attedCode")),
            name: this.localUserData.master_id
        };
    };
    // emitJoin(){
    //   this.socket.emit('join', this.roomName, function (err) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log('No error');
    //     }
    //   });
    // }
    AttendanceListPage.prototype.addStudentToPeriodAttendanceList = function (data) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].node_url + "attendance/addStudent", data, {
            headers: header
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log("data : ", data);
                if (data.success) {
                    // this.showAlert(data.msg);
                }
                else {
                    // this.showAlert(data.msg);
                }
                return [2 /*return*/];
            });
        }); });
    };
    AttendanceListPage.prototype.deactivatePeriodAtted = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            id: id
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].node_url + "attendance/deactivateAtted", data, {
            headers: header
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log("deactivate data : ", data);
                if (data.success) {
                    // this.showAlert(data.msg);
                }
                else {
                    // this.showAlert(data.msg);
                }
                return [2 /*return*/];
            });
        }); });
    };
    AttendanceListPage.prototype.checkboxChange = function (e, id) {
        // console.log('checked value : ', e.value, ' and ID : ', id);
        if (e.value) {
            var foundStd = this.attenStudentList.filter(function (std) {
                return std.id == id;
            });
            if (foundStd.length > 0) {
                var i = this.attenStudentList.indexOf(foundStd[0]);
                this.attenStudentList.splice(i, 1);
                foundStd[0].isChecked = true;
                this.attenStudentList.splice(i, 0, foundStd[0]);
            }
        }
        else {
            var foundStd = this.attenStudentList.filter(function (std) {
                return std.id == id;
            });
            if (foundStd.length > 0) {
                var i = this.attenStudentList.indexOf(foundStd[0]);
                this.attenStudentList.splice(i, 1);
                foundStd[0].isChecked = false;
                this.attenStudentList.splice(i, 0, foundStd[0]);
            }
        }
    };
    AttendanceListPage.prototype.onSubmitStdAttendence = function () {
        var _this = this;
        var finalStdList = this.attenStudentList.filter(function (item) {
            return item.isChecked == true;
        });
        // console.log(finalStdList);
        var finalStdIdList = finalStdList.map(function (item) {
            return item.id;
        });
        // console.log(finalStdIdList);
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            id: JSON.parse(localStorage.getItem("atted_id")),
            std_list: finalStdIdList
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].node_url + "attendance/addStdListOnPeriod", data, {
            headers: header
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!data.success) return [3 /*break*/, 4];
                        return [4 /*yield*/, localStorage.removeItem("atted_id")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, localStorage.removeItem("attedCode")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, localStorage.removeItem("department")];
                    case 3:
                        _a.sent();
                        this.showAlert(data.msg);
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__staff_info_staff_info__["a" /* StaffInfoPage */]);
                        return [3 /*break*/, 5];
                    case 4:
                        this.showAlert(data.msg);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    AttendanceListPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: "Alert!",
            subTitle: msg,
            buttons: ["OK"]
        });
        alert.present();
    };
    AttendanceListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-attendance-list",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/attendance-list/attendance-list.html"*/'<!--\n  Generated template for the AttendanceListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Attendance List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n	<ion-list>\n\n	  <ion-item *ngFor="let student of attenStudentList">\n	    <ion-label>{{student.name}}</ion-label>\n	    <ion-checkbox checked="{{student.isChecked}}" (ionChange)="checkboxChange($event, student.id)"></ion-checkbox>\n		</ion-item>\n		\n	</ion-list>\n	<div class="padding">\n		<button ion-button type="submit" block outline color="blue" class="mt-10" (click)="onSubmitStdAttendence()">Submit</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/attendance-list/attendance-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AttendanceListPage);
    return AttendanceListPage;
}());

// socket.on('connect', function () {
//   var params = jQuery.deparam(window.location.search);
//   socket.emit('join', params, function (err) {
//     if (err) {
//       alert(err);
//       window.location.href = '/';
//     } else {
//       console.log('No error');
//     }
//   });
// });
// socket.on('disconnect', function () {
//   console.log('Disconnected from server');
// });
// socket.on('updateUserList', function (users) {
//   var ol = jQuery('<ol></ol>');
//   users.forEach(function (user) {
//     ol.append(jQuery('<li></li>').text(user));
//   });
//   jQuery('#users').html(ol);
// });
// socket.on('newMessage', function (message) {
//   var formattedTime = moment(message.createdAt).format('h:mm a');
//   var template = jQuery('#message-template').html();
//   var html = Mustache.render(template, {
//     text: message.text,
//     from: message.from,
//     createdAt: formattedTime
//   });
//   jQuery('#messages').append(html);
//   scrollToBottom();
// });
// socket.on('newLocationMessage', function (message) {
//   var formattedTime = moment(message.createdAt).format('h:mm a');
//   var template = jQuery('#location-message-template').html();
//   var html = Mustache.render(template, {
//     from: message.from,
//     url: message.url,
//     createdAt: formattedTime
//   });
//   jQuery('#messages').append(html);
//   scrollToBottom();
// });
// jQuery('#message-form').on('submit', function (e) {
//   e.preventDefault();
//   var messageTextbox = jQuery('[name=message]');
//   socket.emit('createMessage', {
//     text: messageTextbox.val()
//   }, function () {
//     messageTextbox.val('')
//   });
// });
//# sourceMappingURL=attendance-list.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalExamviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrincipalExamviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrincipalExamviewPage = /** @class */ (function () {
    function PrincipalExamviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrincipalExamviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalExamviewPage');
    };
    PrincipalExamviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-principal-examview',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/principal-examview/principal-examview.html"*/'<!--\n  Generated template for the PrincipalExamviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Exam Schedule</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-12 text-uppercase text-center>\n    	<h2 ><strong>Bengali Honours</strong></h2>\n	</ion-col>\n  </ion-row>\n  <ion-row class="border">\n    <ion-col col-4 >\n    	<p><strong>Time</strong>:</p>\n    	<p>12PM-2PM</p>\n    </ion-col>\n    <ion-col col-4>\n    	<p><strong>Room No</strong>:</p>\n    	<p>12C</p>\n    </ion-col>\n    <ion-col col-4>\n    	<p><strong>Floor</strong>:</p>\n    	<p>2ND</p>\n    </ion-col>\n    <ion-col col-12>\n    	<p><strong>Invigilator Name</strong>: Loriem Iosum</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>  \n</ion-card>\n\n\n<ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-12 text-uppercase text-center>\n    	<h2 ><strong>Philosophy Honours</strong></h2>\n	</ion-col>\n  </ion-row>\n  <ion-row class="border">\n    <ion-col col-4 >\n    	<p><strong>Time</strong>:</p>\n    	<p>2PM-4PM</p>\n    </ion-col>\n    <ion-col col-4>\n    	<p><strong>Room No</strong>:</p>\n    	<p>10</p>\n    </ion-col>\n    <ion-col col-4>\n    	<p><strong>Floor</strong>:</p>\n    	<p>3ND</p>\n    </ion-col>\n    <ion-col col-12>\n    	<p><strong>Invigilator Name</strong>: Loriem Iosum, Loriem Iosum</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>  \n</ion-card>\n\n<ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-12 text-uppercase text-center>\n    	<h2 ><strong>English Honours</strong></h2>\n	</ion-col>\n  </ion-row>\n  <ion-row class="border">\n    <ion-col col-4 >\n    	<p><strong>Time</strong>:</p>\n    	<p>4PM-6PM</p>\n    </ion-col>\n    <ion-col col-4>\n    	<p><strong>Room No</strong>:</p>\n    	<p>12B</p>\n    </ion-col>\n    <ion-col col-4>\n    	<p><strong>Floor</strong>:</p>\n    	<p>2ND</p>\n    </ion-col>\n    <ion-col col-12>\n    	<p><strong>Invigilator Name</strong>: Loriem Iosum</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>  \n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/principal-examview/principal-examview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PrincipalExamviewPage);
    return PrincipalExamviewPage;
}());

//# sourceMappingURL=principal-examview.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComplaindeskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complain_reply_complain_reply__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apiUrl__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the PrincipalComplaindeskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrincipalComplaindeskPage = /** @class */ (function () {
    function PrincipalComplaindeskPage(navCtrl, navParams, menuCtrl, loadingController, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    PrincipalComplaindeskPage.prototype.ngOnInit = function () {
        this.getComplain();
    };
    PrincipalComplaindeskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalComplaindeskPage');
    };
    PrincipalComplaindeskPage.prototype.gotoCompalinReply = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__complain_reply_complain_reply__["a" /* ComplainReplyPage */], {
            data: id
        });
    };
    PrincipalComplaindeskPage.prototype.getComplain = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // this.presentLoading(true);
                    return [4 /*yield*/, this.getUserDataFromLocal()];
                    case 1:
                        // this.presentLoading(true);
                        _a.sent();
                        header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                        header.set("Content-Type", "application/json");
                        data = {
                            org_id: this.localUserData.org_code,
                            master_id: this.localUserData.master_id,
                            user_type_id: this.localUserData.user_type_id,
                        };
                        this.http
                            .post(__WEBPACK_IMPORTED_MODULE_4__apiUrl__["a" /* apiUrl */].url + "desk/principal", data, { headers: header })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.log('complain list : ', data);
                                if (data.data.length > 0) {
                                    this.allComplains = data.data;
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    PrincipalComplaindeskPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    PrincipalComplaindeskPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    PrincipalComplaindeskPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
    };
    // onChangeTextValue() {
    //   if(this.complainMsg == '' && this.complainMsg == null){
    //     this.btnDisabled = true;
    //   }else{
    //     this.btnDisabled = false;
    //   }
    // }
    PrincipalComplaindeskPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK'],
        });
        alert.present();
    };
    PrincipalComplaindeskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-principal-complaindesk',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/principal-complaindesk/principal-complaindesk.html"*/'<!--\n  Generated template for the PrincipalComplaindeskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Complain Desk</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	\n	<ion-card *ngFor="let complain of allComplains">\n	  <ion-card-content>\n	    <p>{{complain.message}}</p>\n	  </ion-card-content>\n	  <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="blue" icon-start>\n            {{complain.student_id.name}}\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="blue" icon-start (click)=gotoCompalinReply(complain.from_id)>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Reply\n        </button>\n      </ion-col>\n    </ion-row>\n	</ion-card>\n\n	<!-- <ion-card>\n	  <ion-card-content>\n	    <p>The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.</p>\n	  </ion-card-content>\n	  <ion-row no-padding>\n	  	<ion-col text-left>\n        <button ion-button clear small color="blue" icon-start>\n          Ram Kumar\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="blue" icon-start (click)=gotoCompalinReply()>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Reply\n        </button>\n      </ion-col>\n    </ion-row>\n	</ion-card> -->\n\n	<!-- <ion-card>\n	  <ion-card-content>\n	    <p>The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.</p>\n	  </ion-card-content>\n	  <ion-row no-padding>\n	  	<ion-col text-left>\n        <button ion-button clear small color="blue" icon-start>\n          Ram Kumar\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="blue" icon-start (click)=gotoCompalinReply()>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Reply\n        </button>\n      </ion-col>\n    </ion-row>\n	</ion-card> -->\n\n\n	<!-- <ion-card>\n	  <ion-card-content>\n	    <p>The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.</p>\n	  </ion-card-content>\n	  <ion-row no-padding>\n	  	<ion-col text-left>\n        <button ion-button clear small color="blue" icon-start>\n          Ram Kumar\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="blue" icon-start (click)=gotoCompalinReply()>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Reply\n        </button>\n      </ion-col>\n    </ion-row>\n	</ion-card> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/principal-complaindesk/principal-complaindesk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PrincipalComplaindeskPage);
    return PrincipalComplaindeskPage;
}());

//# sourceMappingURL=principal-complaindesk.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplainReplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the ComplainReplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComplainReplyPage = /** @class */ (function () {
    function ComplainReplyPage(navCtrl, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.btnDisabled = true;
        this.id = navParams.get('data');
        console.log('id : ', this.id);
    }
    ComplainReplyPage.prototype.ngOnInit = function () {
        this.getUserDataFromLocal();
    };
    ComplainReplyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComplainReplyPage');
    };
    ComplainReplyPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
    };
    ComplainReplyPage.prototype.onChangeTextValue = function () {
        if (this.complainMsg == '' && this.complainMsg == null) {
            this.btnDisabled = true;
        }
        else {
            this.btnDisabled = false;
        }
    };
    ComplainReplyPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK'],
        });
        alert.present();
    };
    ComplainReplyPage.prototype.sendReply = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, data;
            return __generator(this, function (_a) {
                header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                header.set("Content-Type", "application/json");
                data = {
                    org_id: this.localUserData.org_code,
                    master_id: this.localUserData.master_id,
                    mssg: this.complainMsg,
                    to_id: this.id,
                };
                console.log('reply complain : ', data);
                this.http
                    .post(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* apiUrl */].url + "desk/princepal_reply", data, { headers: header })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data) {
                            this.complainMsg = '';
                            this.btnDisabled = true;
                            this.showAlert('Alert!', 'Reply has been submitted successfully.');
                        }
                        else {
                            this.showAlert('Alert!', 'Something went wrong. Please try again.');
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ComplainReplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-complain-reply',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/complain-reply/complain-reply.html"*/'<!--\n  Generated template for the ComplainReplyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Complain Reply</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<h1 text-center text-uppercase margin-bottom color="blue" class="">Type Your Reply</h1>\n\n	<ion-list>\n	  <ion-item>\n	    <ion-textarea [(ngModel)]="complainMsg" type="text" placeholder="Type Here to Reply" (keyup)=onChangeTextValue()></ion-textarea>\n	  </ion-item>\n	</ion-list>\n\n	<button ion-button type="submit" block outline color="blue" class="mt-10" [disabled]="btnDisabled" (click)=sendReply()>Submit Reply</button>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/complain-reply/complain-reply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], ComplainReplyPage);
    return ComplainReplyPage;
}());

//# sourceMappingURL=complain-reply.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuffExamdutyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the StuffExamdutyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StuffExamdutyPage = /** @class */ (function () {
    function StuffExamdutyPage(navCtrl, navParams, menuCtrl, loadingController, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.initLoader();
        this.getUserDataFromLocal();
    }
    StuffExamdutyPage.prototype.ngOnInit = function () {
        this.getStudentRoutine();
    };
    StuffExamdutyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StuffExamdutyPage');
    };
    // |--------------------------------------------------------------------
    // |--------- toggle accordian method --------------
    // |--------------------------------------------------------------------
    StuffExamdutyPage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'ios-add-circle-outline';
        }
        else {
            data.showDetails = true;
            data.icon = 'ios-remove-circle-outline';
        }
    };
    // |--------------------------------------------------------------------
    // |--------- getting logged user data from localstorage --------------
    // |--------------------------------------------------------------------
    StuffExamdutyPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        console.log('local data : ', this.localUserData);
    };
    // |--------------------------------------------------------------------
    // |--------- getting all routine for a specific student --------------
    // |--------------------------------------------------------------------
    StuffExamdutyPage.prototype.getStudentRoutine = function () {
        var _this = this;
        this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            'master_id': this.localUserData.master_id,
            'org_id': this.localUserData.org_code,
            'user_type_id': this.localUserData.user_type_id
        };
        // console.log('sent data : ', data);    
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "routine/std-rutine", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log('routine list : ', data);
            if (data.data.length > 0) {
                // this.presentLoading(false);
                _this.rawRoutineList = data.data;
                console.log('raw routine list : ', _this.rawRoutineList);
                _this.sortArr(_this.rawRoutineList);
            }
            else {
                _this.presentLoading(false);
            }
        });
    };
    // |--------------------------------------------------------------------
    // |---- loading start and stop method by passing true or false ----
    // |--------------------------------------------------------------------
    StuffExamdutyPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 500);
        }
    };
    // |--------------------------------------------------------------------
    // |--------- loading initialization --------------
    // |--------------------------------------------------------------------
    StuffExamdutyPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    // |--------------------------------------------------------------------
    // |--------- sorting raw routine array --------------
    // |--------------------------------------------------------------------
    StuffExamdutyPage.prototype.sortArr = function (rawRoutineArr) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var new_arry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        new_arry = [];
                        rawRoutineArr.forEach(function (element, i) {
                            var pos = new_arry
                                .map(function (e) {
                                return e.day;
                            })
                                .indexOf(element.day);
                            // console.log(new_arry.indexOf(element.day));
                            if (pos < 0) {
                                if (element.rutinedetails.length > 0) {
                                    _this.subject = element.rutinedetails[0].class.section.sec_name;
                                    _this.room = element.rutinedetails[0].room.name;
                                    _this.floor = element.rutinedetails[0].room.floor_name;
                                }
                                else {
                                    _this.subject = 'No Priod';
                                    _this.room = 'NA';
                                    _this.floor = 'NA';
                                }
                                var new_data = {
                                    id: element.id,
                                    day: element.day,
                                    icon: 'ios-add-circle-outline',
                                    showDetails: false,
                                    priods: [
                                        {
                                            priod_id: element.priod_id,
                                            priod_name: element.priod.priod_name,
                                            from_time: element.priod.from_time,
                                            to_time: element.priod.to_time,
                                            sub: _this.subject,
                                            floor: _this.floor,
                                            room: _this.room,
                                            rutinedetails: element.rutinedetails
                                        }
                                    ]
                                };
                                new_arry.push(new_data);
                            }
                            else {
                                var exsisting_data = {
                                    priod_id: element.priod_id,
                                    priod_name: element.priod.priod_name,
                                    from_time: element.priod.from_time,
                                    to_time: element.priod.to_time,
                                    sub: _this.subject,
                                    floor: _this.floor,
                                    room: _this.room,
                                    icon: 'ios-add-circle-outline',
                                    showDetails: false,
                                    rutinedetails: element.rutinedetails
                                };
                                new_arry[pos].priods.push(exsisting_data);
                            }
                        });
                        // this.routineList = new_arry.sort(function(a, b){return a.day - b.day});
                        // this.routineList = new_arry.sort(function(a, b){return a.priods.priod_id - b.priods.priod_id});
                        return [4 /*yield*/, new_arry.forEach(function (elem, i) {
                                new_arry[i].priods.sort(function (a, b) { return a.priod_id - b.priod_id; });
                            })];
                    case 1:
                        // this.routineList = new_arry.sort(function(a, b){return a.day - b.day});
                        // this.routineList = new_arry.sort(function(a, b){return a.priods.priod_id - b.priods.priod_id});
                        _a.sent();
                        this.routineList = new_arry;
                        console.log('final array : ', this.routineList);
                        this.presentLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    StuffExamdutyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stuff-examduty',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-examduty/stuff-examduty.html"*/'<!--\n  Generated template for the StuffExamdutyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Exam Duty</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n\n\n    <ion-list>\n        <ion-item *ngFor="let routine of routineList" (click)="toggleDetails(routine)"><ion-icon color="primary" item-right [name]="routine?.icon"></ion-icon>\n          Day {{routine?.day}}\n          <!-- <table *ngIf="routine.showDetails">{{routine}}</table> -->\n    \n          <ion-list *ngIf="routine?.showDetails">\n            <ion-item *ngFor="let r of routine.priods">\n              <!-- <p>Priod : {{r?.priod_name}} Priod</p>\n              <p *ngIf="r?.rutinedetails[0]">CC Name : {{r?.rutinedetails[0]?.cc_name}}</p>\n              <p *ngIf="!r?.rutinedetails[0]">CC Name : No Priod</p>\n              <p *ngIf="r?.rutinedetails[0]">Time : {{r?.from_time}} to {{r?.to_time}}</p>\n              <p *ngIf="!r?.rutinedetails[0]">Time : NA</p>\n              <p *ngIf="r?.rutinedetails[0]">Teacher : {{r?.rutinedetails[0]?.teacher?.name}} ({{r?.rutinedetails[0]?.teacher?.short_name}})</p>\n              <p *ngIf="!r?.rutinedetails[0]">Teacher : NA</p> -->\n\n              <ion-card>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col col-md-12 text-uppercase text-center>\n                        <h2 ><strong>{{r?.sub}}</strong></h2>\n                    </ion-col>\n                    </ion-row>\n                    <ion-row class="border">\n                      <ion-col col-md-4 >\n                        <p><strong>Time</strong>:</p>\n                        <p>{{r?.from_time}} - {{r?.to_time}}</p>\n                      </ion-col>\n                      <ion-col col-md-4>\n                        <p><strong>Room No</strong>:</p>\n                        <p>{{r?.room}}</p>\n                      </ion-col>\n                      <ion-col col-md-4>\n                        <p><strong>Floor</strong>:</p>\n                        <p>{{r?.floor}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>  \n              </ion-card>\n            </ion-item>\n\n            \n          </ion-list>\n        \n        </ion-item>\n\n\n\n        <!-- <ion-item>\n          <ion-list>\n            <p></p>\n          </ion-list>\n        </ion-item> -->\n    </ion-list>\n\n\n\n\n<!-- <ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-12 text-uppercase text-center>\n    	<h2 ><strong>Bengali Honours</strong></h2>\n	</ion-col>\n  </ion-row>\n  <ion-row class="border">\n    <ion-col col-md-4 >\n    	<p><strong>Time</strong>:</p>\n    	<p>12PM-2PM</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Room No</strong>:</p>\n    	<p>12C</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Floor</strong>:</p>\n    	<p>2ND</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>  \n</ion-card>\n\n\n<ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-12 text-uppercase text-center>\n    	<h2 ><strong>Philosophy Honours</strong></h2>\n	</ion-col>\n  </ion-row>\n  <ion-row class="border">\n    <ion-col col-md-4 >\n    	<p><strong>Time</strong>:</p>\n    	<p>2PM-4PM</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Room No</strong>:</p>\n    	<p>10</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Floor</strong>:</p>\n    	<p>3ND</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>  \n</ion-card>\n\n<ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-12 text-uppercase text-center>\n    	<h2 ><strong>English Honours</strong></h2>\n	</ion-col>\n  </ion-row>\n  <ion-row class="border">\n    <ion-col col-md-4>\n    	<p><strong>Time</strong>:</p>\n    	<p>4PM-6PM</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Room No</strong>:</p>\n    	<p>12B</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Floor</strong>:</p>\n    	<p>2ND</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>  \n</ion-card> -->\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-examduty/stuff-examduty.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], StuffExamdutyPage);
    return StuffExamdutyPage;
}());

//# sourceMappingURL=stuff-examduty.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveStreamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

/**
 * Generated class for the LiveStreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LiveStreamPage = /** @class */ (function () {
    function LiveStreamPage(navCtrl, navParams, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        // this.loadingCtrl.page(true);  	
    }
    LiveStreamPage.prototype.ngOnInit = function () {
    };
    LiveStreamPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    };
    LiveStreamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LiveStreamPage');
    };
    LiveStreamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-live-stream',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/live-stream/live-stream.html"*/'<!--\n  Generated template for the LiveStreamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Live Stream</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content>\n<ion-spinner name="bubbles" ></ion-spinner>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/live-stream/live-stream.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LiveStreamPage);
    return LiveStreamPage;
}());

//# sourceMappingURL=live-stream.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolcalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_owndetails_student_owndetails__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__staff_info_staff_info__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/**
 * Generated class for the SchoolcalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchoolcalenderPage = /** @class */ (function () {
    function SchoolcalenderPage(navCtrl, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
            dateFormatter: {
                formatMonthViewDay: function (date) {
                    return date.getDate().toString();
                },
                formatMonthViewDayHeader: function (date) {
                    return 'MonMH';
                },
                formatMonthViewTitle: function (date) {
                    return 'testMT';
                },
                formatWeekViewDayHeader: function (date) {
                    return 'MonWH';
                },
                formatWeekViewTitle: function (date) {
                    return 'testWT';
                },
                formatWeekViewHourColumn: function (date) {
                    return 'testWH';
                },
                formatDayViewHourColumn: function (date) {
                    return 'testDH';
                },
                formatDayViewTitle: function (date) {
                    return 'testDT';
                }
            }
        };
        this.allEventList = [];
        this.filterEventList = [];
        this.getUserDataFromLocal();
        this.schoolId = this.navParams.get('id');
    }
    SchoolcalenderPage.prototype.ngOnInit = function () {
        // this.getEventList();
    };
    SchoolcalenderPage.prototype.goToHome = function () {
        if (this.localUserData) {
            if (this.localUserData.user_type_id == 1) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__staff_info_staff_info__["a" /* StaffInfoPage */]);
            }
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }
    };
    SchoolcalenderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchoolcalenderPage');
        this.getEventList();
    };
    SchoolcalenderPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    SchoolcalenderPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    SchoolcalenderPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    SchoolcalenderPage.prototype.onTimeSelected = function (ev) {
        // console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
        //   (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    SchoolcalenderPage.prototype.loadEvents = function () {
        // this.eventSource = this.createRandomEvents();
        // console.log(this.eventSource)
    };
    SchoolcalenderPage.prototype.onEventSelected = function (event) {
        //console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
        var alert = this.alertCtrl.create({
            title: event.title.toUpperCase(),
            subTitle: 'Event Started:' + event.startTime + ', To: ' + event.endTime,
            buttons: ['Dismiss']
        });
        alert.present();
    };
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
    SchoolcalenderPage.prototype.getEventList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, data;
            return __generator(this, function (_a) {
                header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                header.set("Content-Type", "application/json");
                data = {
                    org_id: this.schoolId
                };
                this.http
                    .post(__WEBPACK_IMPORTED_MODULE_4__apiUrl__["a" /* apiUrl */].url + "event/eventdetails", data, { headers: header })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(data.data.length > 1)) return [3 /*break*/, 2];
                                _a = this;
                                return [4 /*yield*/, data.data];
                            case 1:
                                _a.allEventList = _b.sent();
                                // console.log("event list : ", data.data);
                                this.ArrangeArrFromEventList(this.allEventList);
                                console.log('event source : ', this.eventSource);
                                return [3 /*break*/, 2];
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SchoolcalenderPage.prototype.ArrangeArrFromEventList = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.eventSource = [];
                arr.forEach(function (arrItem) { return __awaiter(_this, void 0, void 0, function () {
                    var obj;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.end = this.createJavascriptDate(arrItem.event_enddate);
                                this.start = this.createJavascriptDate(arrItem.event_startdate);
                                return [4 /*yield*/, {
                                        allDay: false,
                                        eTime: arrItem.event_endtime,
                                        endTime: this.end,
                                        sTime: arrItem.event_startime,
                                        startTime: this.start,
                                        title: arrItem.event_name,
                                        desc: arrItem.event_description
                                    }
                                    // console.log('arr item : ', obj);
                                ];
                            case 1:
                                obj = _a.sent();
                                // console.log('arr item : ', obj);
                                return [4 /*yield*/, this.eventSource.push(obj)];
                            case 2:
                                // console.log('arr item : ', obj);
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SchoolcalenderPage.prototype.createJavascriptDate = function (strDate) {
        // let date = await new Date();
        var dateArr = strDate.split('-');
        var timeStamp = new Date().setFullYear(dateArr[0], dateArr[1] - 1, dateArr[2]);
        // console.log(timeStamp);    
        var jsDate = new Date(timeStamp);
        return jsDate;
    };
    SchoolcalenderPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem("userData");
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);
    };
    SchoolcalenderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-schoolcalender',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/schoolcalender/schoolcalender.html"*/'<!--\n  Generated template for the SchoolcalenderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{viewTitle}}</ion-title>\n\n    <ion-buttons end (click)=goToHome() *ngIf="localUserData == null">\n        <button ion-button icon-only>\n          <ion-icon name="home" color="light"></ion-icon>\n        </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-buttons end>\n    <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n  </ion-buttons>\n  \n  <br>\n\n  <calendar [eventSource]="eventSource" [calendarMode]="calendar.mode" [currentDate]="calendar.currentDate" (onCurrentDateChanged)="onCurrentDateChanged($event)"\n    (onRangeChanged)="reloadSource(startTime, endTime)" (onEventSelected)="onEventSelected($event)" (onTitleChanged)="onViewTitleChanged($event)"\n    (onTimeSelected)="onTimeSelected($event)" step="30">\n  </calendar>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/schoolcalender/schoolcalender.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SchoolcalenderPage);
    return SchoolcalenderPage;
}());

//# sourceMappingURL=schoolcalender.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__students_tabs_students_tabs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__std_reg_std_reg__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// declare var $: any;
// declare var jquery : any;
/**
 * Generated class for the StudentLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentLoginPage = /** @class */ (function () {
    function StudentLoginPage(navCtrl, navParams, http, loadingController, jsonp, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.jsonp = jsonp;
        this.alertCtrl = alertCtrl;
        this.isShown = false;
        this.isHide = true;
        this.initLoader();
        // setTimeout(() => {
        // 	//
        // }, 1000);
    }
    StudentLoginPage.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    StudentLoginPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    StudentLoginPage.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    StudentLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentLoginPage');
    };
    StudentLoginPage.prototype.loginSubmit = function () {
        var _this = this;
        if (this.student_register && this.student_password) {
            this.presentLoading(true);
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]({ headers: headers });
            var data = {
                'username': this.student_register,
                'pass': this.student_password
            };
            this.http.post(__WEBPACK_IMPORTED_MODULE_5__apiUrl__["a" /* apiUrl */].url + "user/applogin", data, options).
                map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log('login data : ', data.data);
                if (data.data.length > 0) {
                    // console.log('login data : ', data.data);					
                    _this.presentLoading(false);
                    localStorage.setItem('userData', JSON.stringify(data.data[0]));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__students_tabs_students_tabs__["a" /* default */]);
                }
                else {
                    _this.showAlert('Alert!', 'Sorry, user not found. Please check your ID or Password.');
                    _this.presentLoading(false);
                }
            });
        }
        else {
            this.showAlert('Alert!', 'Please enter all the field.');
        }
    };
    StudentLoginPage.prototype.goToRegister = function () {
        // this.presentLoading(true);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__std_reg_std_reg__["a" /* StdRegPage */]);
        // this.presentLoading(false);	
    };
    StudentLoginPage.prototype.goToOwnDetails = function () {
        if (this.OTP == this.otp_pass) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__students_tabs_students_tabs__["a" /* default */]);
        }
    };
    StudentLoginPage.prototype.resendMessage = function () {
    };
    StudentLoginPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    StudentLoginPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    StudentLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-login',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-login/student-login.html"*/'<!--\n  Generated template for the StudentLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="item-center" padding color="secondary">\n	\n	<img src="assets/imgs/inunco-dark.png" class="img-width"/>\n	<!-- <img src="assets/imgs/bk.png" class="img-width"/> -->\n\n\n	<div class="enquiry-form">\n		 <h3 class="title" text-center text-uppercase margin-bottom>Enter Regitration Id</h3>\n	 	<form>\n			<ion-list style="background-color: none;">\n			  <ion-item>\n			  	<ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n			    <ion-input type="text" autofocus name="student_register" placeholder="Register Id" no-margin [(ngModel)]="student_register"></ion-input>\n				</ion-item>\n				\n				<ion-item>\n			  	<ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n			    <ion-input type="password" autofocus name="student_password" placeholder="Password" no-margin [(ngModel)]="student_password"></ion-input>\n			  </ion-item>\n			\n				<!-- <button ion-button block outline color="blue" class="mt-10" *ngIf="isHide" (click)=loginSubmit()>Submit</button> -->\n			<ion-grid>\n				<ion-row col-12>\n					<button ion-button block outline color="blue" class="mt-10" *ngIf="isHide" (click)=loginSubmit()>Submit</button>\n				</ion-row>\n				<ion-row>\n					<ion-row col-6>\n						<button ion-button block outline color="blue" class="" (click)=\'goToRegister()\'>Registration</button>\n					</ion-row>\n					<ion-row col-6>\n						<button ion-button block outline color="blue" class="" (click)=\'gotoHome()\'>Back</button>\n					</ion-row>\n				</ion-row>\n			</ion-grid>\n\n			<button block ion-button outline text-left color="blue" *ngIf="isShown">Register_Id: {{student_register}} </button>\n			<button block ion-button outline text-left color="blue" *ngIf="isShown">Phone: {{phone}}</button>\n\n				<ion-item *ngIf="isShown" margin-top >\n			    <ion-input type="number" name="otp_pass" maxlengtgh=4 [(ngModel)]="otp_pass" placeholder="Enter One Time Password" no-margin></ion-input>\n				</ion-item>\n				<p *ngIf="isShown">Not getting any message? <a href="#" (click)="resendMessage()">Resend</a> </p>\n			</ion-list>\n			<button ion-button block color="blue" class="mt-10" *ngIf="isShown" (click)=goToOwnDetails()>Next</button>\n		</form>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-login/student-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], StudentLoginPage);
    return StudentLoginPage;
}());

//# sourceMappingURL=student-login.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StdRegPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__school_listing_school_listing__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the StdRegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StdRegPage = /** @class */ (function () {
    function StdRegPage(navCtrl, navParams, http, menuCtrl, loadingController, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.isSearchbarOpened = false;
        this.searchQuery = "";
        this.items = [];
        this.list = [];
        this.idList = [];
        this.menuCtrl.enable(true);
        this.initLoader();
        this.getData();
    }
    StdRegPage.prototype.ngOnInit = function () {
        this.getCollege();
    };
    StdRegPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StdRegPage');
    };
    StdRegPage.prototype.getCollege = function () {
        var _this = this;
        this.presentLoading(true);
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: header });
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "org/alllist", options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log(data)
            if (data.data) {
                _this.presentLoading(false);
                // console.log('receive college list : ', data);
                _this.collegeList = data.data;
            }
        });
    };
    StdRegPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    StdRegPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    StdRegPage.prototype.registrationSubmit = function () {
        var _this = this;
        this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            org_id: this.college,
            mobile_no: this.mobileNo
        };
        // console.log(data);      
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "user/register", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.data.length > 0) {
                _this.presentLoading(false);
                console.log('student data : ', data);
                _this.showAlert('Success!', "Your Username is : " + data.data[0].user_name + " and Password is : " + data.data[0].hint + ". Please login to continue.");
            }
        });
    };
    StdRegPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    StdRegPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        if (ev.target.value == "") {
            this.isSearchbarOpened = false;
            this.items = [];
            return;
        }
        this.isSearchbarOpened = true;
        // console.log('value : ', ev.target.value);
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // console.log(this.items);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != "") {
            this.items = this.items.filter(function (item) {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
            console.log('items : ...', this.items);
        }
    };
    StdRegPage.prototype.goToListing = function () {
        if (this.country == null && this.state == null) {
            this.presentToast("State and Country Can't be Blank");
        }
        else {
            var data = {
                country: this.country,
                state: this.state,
                jela: this.jela
            };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__school_listing_school_listing__["a" /* SchoolListingPage */], { data: data });
        }
    };
    StdRegPage.prototype.initializeItems = function () {
        this.items = this.list;
    };
    StdRegPage.prototype.schoolsDetails = function (org) {
        this.inputShowValue = org.name;
        this.college = org.id;
        this.items = [];
    };
    StdRegPage.prototype.getData = function () {
        var _this = this;
        this.http
            .get(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "org/alllist")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.presentLoading(false);
            _this.allSchoolsList = data;
            console.log("student list : ", _this.allSchoolsList);
            data.data.forEach(function (ele) {
                var obj = {
                    id: ele.id,
                    name: ele.org_name
                };
                _this.list.push(obj);
            });
        });
    };
    StdRegPage.prototype.onSearchButtonClick = function () {
        var _this = this;
        this.isSearchbarOpened = true;
        setTimeout(function () {
            _this.searchbox.setFocus();
        }, 150);
    };
    StdRegPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", Object)
    ], StdRegPage.prototype, "searchbox", void 0);
    StdRegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-std-reg',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/std-reg/std-reg.html"*/'<!--\n  Generated template for the StdRegPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="blue">\n    <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>	\n    <ion-title>Student Registration</ion-title>\n    <!-- <ion-buttons end>\n      <button class="bell-icon" (click)=goToPersonalNotice()> \n        <i class="fas fa-bell fa-inverse fa-lg"></i> \n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <h5 class="title" text-center text-uppercase margin-bottom>Student Registration</h5>\n\n    <!-- <ion-list>\n      <ion-item> -->\n        <!-- <ion-navbar color="light" [hideBackButton]="isSearchbarOpened ? \'true\' : \'false\'"> -->\n          <!-- <ion-title *ngIf="isSearchbarOpened==false">Submit Enquiry</ion-title>\n          <ion-buttons end *ngIf="isSearchbarOpened==false" (click)="onSearchButtonClick()">\n            <button ion-button icon-only>\n              <ion-icon name="search" color="light"></ion-icon>\n            </button>\n          </ion-buttons> -->\n        <ion-input type="text" name="inputShowValue" placeholder="Search" [(ngModel)]="inputShowValue" (keyup)="getItems($event)" (click)="onSearchButtonClick()"></ion-input>\n          <ion-list class="search-result" [ngStyle]="{\'display\':isSearchbarOpened ? \'block\' : \'none\' }">\n            <ion-item *ngFor="let item of items" (click)="schoolsDetails(item)">\n              {{ item.name }}\n            </ion-item>\n          </ion-list>\n      <!-- </ion-item> \n    </ion-list> -->\n\n    <ion-list>\n        <ion-item>\n          <ion-label fixed>Phone No</ion-label>\n          <ion-input type="number" name="regNo" [(ngModel)]="mobileNo"></ion-input>\n        </ion-item>      \n    </ion-list>\n\n    <button ion-button block outline color="blue" class="" (click)=\'registrationSubmit()\'>Submit</button>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/std-reg/std-reg.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _g || Object])
    ], StdRegPage);
    return StdRegPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=std-reg.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parents_child_tabs_parents_child_tabs__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ParentsLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParentsLoginPage = /** @class */ (function () {
    function ParentsLoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isShown = false;
        this.isHide = true;
    }
    ParentsLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParentsLoginPage');
    };
    ParentsLoginPage.prototype.goToListing = function () {
        this.isShown = true;
        this.isHide = false;
    };
    ParentsLoginPage.prototype.goToChildDetails = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__parents_child_tabs_parents_child_tabs__["a" /* ParentsChildTabsPage */]);
    };
    ParentsLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-parents-login',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-login/parents-login.html"*/'<!--\n  Generated template for the ParentsLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Parents Login</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n\n\n<ion-content class="item-center" padding color="light">\n	<img src="assets/imgs/logo.jpg" class="img-width"/>\n	<!-- <h1 class="heading" text-center text-uppercase>CyberHub</h1> -->\n	<img src="assets/imgs/bk.png" class="img-width" />\n	<div class="enquiry-form">\n		 <h3 class="title" text-center text-uppercase margin-bottom>Enter Your Email</h3>\n	 	<form>\n			<ion-list>\n				  <ion-item>\n				  	<ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n				    <ion-input type="text" placeholder="Email" no-margin></ion-input>\n				  </ion-item>\n			<ion-item *ngIf="isShown" margin-top>\n			    <ion-input type="text" placeholder="Enter One Time Password" no-margin></ion-input>\n			  </ion-item>\n			</ion-list>\n			<button ion-button block outline color="blue" class="mt-10" *ngIf="isHide" (click)=goToListing()>Submit</button>\n			<button ion-button block outline color="blue" class="mt-10" *ngIf="isShown" (click)=goToChildDetails()>Next</button>\n		</form>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-login/parents-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ParentsLoginPage);
    return ParentsLoginPage;
}());

//# sourceMappingURL=parents-login.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsChildTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parents_student_view_parents_student_view__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ParentsChildTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParentsChildTabsPage = /** @class */ (function () {
    function ParentsChildTabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__parents_student_view_parents_student_view__["a" /* ParentsStudentViewPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__parents_student_view_parents_student_view__["a" /* ParentsStudentViewPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__parents_student_view_parents_student_view__["a" /* ParentsStudentViewPage */];
    }
    ParentsChildTabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParentsChildTabsPage');
    };
    ParentsChildTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-parents-child-tabs',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-child-tabs/parents-child-tabs.html"*/'<!--\n  Generated template for the ParentsChildTabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n\n<ion-tabs id="tabs" color="blue">\n  <ion-tab [root]="tab1Root" tabTitle="Child 1" tabIcon="contact" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Child 2" tabIcon="contacts" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Child 3" tabIcon="people" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-child-tabs/parents-child-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ParentsChildTabsPage);
    return ParentsChildTabsPage;
}());

//# sourceMappingURL=parents-child-tabs.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_info_staff_info__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stuff_registration_stuff_registration__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the StaffLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffLoginPage = /** @class */ (function () {
    function StaffLoginPage(navCtrl, navParams, http, alertCtrl, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.initLoader();
    }
    StaffLoginPage.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    StaffLoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad StaffLoginPage");
    };
    StaffLoginPage.prototype.goToStaffInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__staff_info_staff_info__["a" /* StaffInfoPage */]);
    };
    StaffLoginPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: "hide",
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
        });
    };
    StaffLoginPage.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    StaffLoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__stuff_registration_stuff_registration__["a" /* StuffRegistrationPage */]);
    };
    StaffLoginPage.prototype.onStuffLoginSubmit = function () {
        var _this = this;
        if (this.regID && this.pass) {
            this.presentLoading(true);
            // localStorage.removeItem('userData');
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Content-Type", "application/json");
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]({ headers: headers });
            var data = {
                username: this.regID,
                pass: this.pass
            };
            // console.log(data);
            this.http
                .post(__WEBPACK_IMPORTED_MODULE_4__apiUrl__["a" /* apiUrl */].url + "user/applogin", data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log("stuff login info : ", data.data);
                if (data.data.length > 0) {
                    // console.log(data.data[0]);
                    _this.presentLoading(false);
                    localStorage.setItem("userData", JSON.stringify(data.data[0]));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__staff_info_staff_info__["a" /* StaffInfoPage */]);
                }
                else {
                    _this.showAlert("Alert!", "Sorry, user not found. Please check your ID or Password.");
                    _this.presentLoading(false);
                }
            });
        }
        else {
            this.showAlert("Alert!", "Please fill all the field.");
        }
    };
    StaffLoginPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ["OK"]
        });
        alert.present();
    };
    StaffLoginPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    StaffLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-staff-login",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-login/staff-login.html"*/'<!--\n  Generated template for the StaffLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Staff Login</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content>\n\n<img src="assets/imgs/inunco-dark.png" class="img-width"/>\n	<!-- <h1 class="heading" text-center text-uppercase>CyberHub</h1> -->\n	<!-- <img src="assets/imgs/bk.png" class="img-width" /> -->\n	<div class="enquiry-form">\n		 <h3 class="title" text-center text-uppercase margin-bottom>Enter Details</h3>\n	 	<form>\n			<ion-list style="background-color: none;">\n\n			  <ion-item>\n			  	<ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n			    <ion-input type="text" placeholder="Username" name="regID" no-margin [(ngModel)]="regID"></ion-input>\n				</ion-item>\n				\n			  <ion-item>\n			  	<ion-label> <ion-icon ios="ios-disc" md="md-disc"></ion-icon></ion-label>\n			    <ion-input type="password" placeholder="Password" name="pass" no-margin [(ngModel)]="pass"></ion-input>\n				</ion-item>\n				<ion-grid>\n					<ion-row>\n						<ion-row col-6>\n							<button ion-button block outline color="blue" class="" (click)=onStuffLoginSubmit()>Submit</button>\n						</ion-row>\n						<ion-row col-6>\n							<button ion-button block outline color="blue" class="" (click)=\'gotoHome()\'>Back</button>\n						</ion-row>\n						<ion-row col-12>\n							<button ion-button block outline color="blue" class="" (click)=goToRegister()>Registration</button>\n						</ion-row>\n					</ion-row>\n\n					<!-- <ion-row>\n						<ion-row col-12>\n							<button ion-button block outline color="blue" class="">Registration</button>\n						</ion-row>\n					</ion-row> -->\n				</ion-grid>\n			</ion-list>\n		</form>\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-login/staff-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], StaffLoginPage);
    return StaffLoginPage;
}());

//# sourceMappingURL=staff-login.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_owndetails_student_owndetails__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = /** @class */ (function () {
    function TestPage(navCtrl, navParams, alertCtrl, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.joinned = false;
        this.newUser = { nickname: "", room: "" };
        this.msgData = { room: "", nickname: "", message: "" };
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__("http://18.191.46.158:3000/");
        this.initLoader();
    }
    TestPage.prototype.ngOnInit = function () {
        var _this = this;
        this.presentLoading(true);
        this.getRoomDataFromLocal();
        this.socket.on("connect", function () {
            _this.socket.emit("join", _this.localRoomData, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("No error");
                }
            });
        });
        this.socket.on("updateUserList", function (users) {
            console.log(users);
        });
        this.socket.on("attedStatus", function (status) {
            console.log("Status : ", status);
            if (status) {
                _this.presentLoading(false);
                _this.showAlert("Attendence Successful.");
                _this.socket.emit("forceDisconnect");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
            }
            else {
                _this.showAlert("Attendence Not Successful.");
            }
        });
        this.socket.on("disconnect", function () {
            console.log("Disconnected from server");
        });
        // setTimeout(()=>{
        //   this.presentLoading(false);
        //   this.navCtrl.setRoot(StudentsTabsPage);
        // }, 15000);
    };
    TestPage.prototype.ionViewDidLoad = function () {
        // this.presentLoading(true);
        console.log("ionViewDidLoad TestPage");
    };
    TestPage.prototype.getRoomDataFromLocal = function () {
        var data = localStorage.getItem("roomData");
        this.localRoomData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);
        // this.room = {
        //   room: JSON.parse(localStorage.getItem('attedCode')),
        //   name: this.localUserData.master_id
        // }
    };
    TestPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: "Alert!",
            subTitle: msg,
            buttons: ["OK"]
        });
        alert.present();
    };
    TestPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    TestPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: "hide",
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
        });
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-test",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/test/test.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Attendence</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h4 class="title" text-center text-uppercase margin-bottom>Please wait...</h4>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/test/test.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentOwndetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_library_list_student_library_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_notice_board_student_notice_board__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_notice_personal_notice__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__attendance_attendance__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routine_routine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__staff_complain_staff_complain__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// import { PdfDownloadPage } from '../pdf-download/pdf-download';
// import { LibraryListPage } from '../library-list/library-list';










/**
 * Generated class for the StudentOwndetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentOwndetailsPage = /** @class */ (function () {
    function StudentOwndetailsPage(navCtrl, navParams, menuCtrl, loadingController, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.menuCtrl.enable(true);
        this.initLoader();
    }
    StudentOwndetailsPage.prototype.ngOnInit = function () {
        this.getUserDataFromLocal();
        this.getUserData();
        this.getNoticeList();
        this.getWheatherData();
    };
    StudentOwndetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentOwndetailsPage');
    };
    StudentOwndetailsPage.prototype.goToAllPdf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__student_notice_board_student_notice_board__["b" /* StudentNoticeBoardPage */]);
    };
    StudentOwndetailsPage.prototype.goToLibrary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__student_library_list_student_library_list__["b" /* StudentLibraryListPage */]);
    };
    StudentOwndetailsPage.prototype.goToPersonalNotice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_notice_personal_notice__["a" /* PersonalNoticePage */]);
    };
    StudentOwndetailsPage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    StudentOwndetailsPage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__attendance_attendance__["a" /* AttendancePage */]);
    };
    StudentOwndetailsPage.prototype.goToRoutine = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__routine_routine__["a" /* RoutinePage */]);
    };
    StudentOwndetailsPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_account__["b" /* default */]);
    };
    StudentOwndetailsPage.prototype.goToComplain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__staff_complain_staff_complain__["a" /* StaffComplainPage */]);
    };
    StudentOwndetailsPage.prototype.getUserData = function () {
        var _this = this;
        this.presentLoading(true);
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: header });
        var data = {
            'org_id': this.localUserData.org_code,
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_10__apiUrl__["a" /* apiUrl */].url + "org/getdetail", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.data) {
                _this.presentLoading(false);
                _this.orgDetails = data.data[0];
            }
        });
    };
    StudentOwndetailsPage.prototype.getWheatherData = function () {
        // this.presentLoading(true);
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: header });
        this.http.get("https://api.openweathermap.org/data/2.5/forecast/daily?zip=94040,us?appid=2335fe6c7bd175d5b8e46bc300783240\n    ", options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('api data : ', data);
        });
    };
    StudentOwndetailsPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    StudentOwndetailsPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    StudentOwndetailsPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
    };
    StudentOwndetailsPage.prototype.getNoticeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // this.presentLoading(true);
                    return [4 /*yield*/, this.getUserDataFromLocal()];
                    case 1:
                        // this.presentLoading(true);
                        _a.sent();
                        header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        header.set("Content-Type", "application/json");
                        data = {
                            org_id: this.localUserData.org_code,
                            user_type_id: this.localUserData.user_type_id,
                            master_id: this.localUserData.master_id
                        };
                        this.http
                            .post(__WEBPACK_IMPORTED_MODULE_10__apiUrl__["a" /* apiUrl */].url + "notice/get", data, { headers: header })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        if (!(data.data.length > 1)) return [3 /*break*/, 3];
                                        _a = this;
                                        return [4 /*yield*/, data.data];
                                    case 1:
                                        _a.allNotice = _c.sent();
                                        _b = this;
                                        return [4 /*yield*/, this.allNotice.filter(function (item) {
                                                return item.notiece_type_id == 3;
                                            })];
                                    case 2:
                                        _b.allPersonalNotice = _c.sent();
                                        this.personalNoticeCount = this.allPersonalNotice.length;
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentOwndetailsPage.prototype.goToLogout = function () {
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */]);
    };
    StudentOwndetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-owndetails',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-owndetails/student-owndetails.html"*/'<!--\n  Generated template for the StudentOwndetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="blue">\n    <!-- <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>	 -->\n    <ion-title>College Details</ion-title>\n    <ion-buttons end>\n      <button class="bell-icon" (click)=goToPersonalNotice()> <i class="fas fa-bell fa-inverse fa-lg"></i> </button>\n      <ion-badge>{{personalNoticeCount}}</ion-badge>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- <button ion-button menuToggle>Toggle Menu</button> -->\n\n<ion-card>\n  <img [src]="orgDetails?.org_img"/>\n  <ion-card-content>\n    <ion-card-title>\n      {{orgDetails?.org_name}}\n    </ion-card-title>\n      <div float-right >\n        <p [ngStyle]="{\'font-size\': \'24px\'}">\n          <ion-icon name="cloud"></ion-icon>\n        17 °C</p>\n      </div>\n      <!-- <p ><strong>Email</strong>: demo@gmail.com</p>\n      <p><strong>Mobile</strong>: 1234567890</p> -->\n      <div [innerHtml]="orgDetails?.org_text"></div>\n      <!-- <p><strong>About</strong> : </p>\n      <div [innerHtml]="orgDetails?.org_about" class="mt-4"></div> -->\n  </ion-card-content>  \n</ion-card>\n\n\n<ion-grid>\n\n  <ion-row>\n    <ion-col col-md-4 class="icon-center" (click)=goToLibrary()>\n      <img src="assets/imgs/icon.png"/>\n      <p>Library</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToAllPdf()>\n      <img src="assets/imgs/icon2.png"/>\n      <p>Notice Board</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToPersonalNotice()>\n      <img src="assets/imgs/icon6.png"/>\n      <p>Personal Notice</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-md-4 class="icon-center" (click)=goToAttendance()>\n      <img src="assets/imgs/icon3.png"/>\n      <p>Attendance</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToRoutine()>\n      <img src="assets/imgs/icon4.png"/>\n      <p>Routine</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToAccount()>\n      <img src="assets/imgs/icon5.png"/>\n      <p>Account</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-md-4 class="icon-center" (click)=goToComplain()>\n      <img src="assets/imgs/icon7.png"/>\n      <p>Complain</p>\n    </ion-col>\n\n    <ion-col col-md-4 class="icon-center" (click)=goToLogout()>\n      <img src="assets/imgs/icon7.png"/>\n      <p>Logout</p>\n    </ion-col>\n    \n    <ion-col col-md-4 class="">\n      <img src=""/>\n      <p></p>\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n</ion-content>\n\n\n<!-- <ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3>\n        <img src="assets/imgs/white-icon5.png">\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-owndetails/student-owndetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], StudentOwndetailsPage);
    return StudentOwndetailsPage;
}());

//# sourceMappingURL=student-owndetails.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guest_enquiry_guest_enquiry__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_login_student_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parents_login_parents_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__staff_login_staff_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_css_animator__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_css_animator__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl, animationService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.splash = true;
        this.menuCtrl.enable(false);
        this.animator = animationService.builder();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.splash = false;
        }, 200);
        this.animateElem();
    };
    HomePage.prototype.animateElem = function () {
        this.animator.setType('pulse').show(this.myElem.nativeElement);
    };
    //  constructor(public menuCtrl:MenuController){
    // this.menuCtrl.enable(false);
    // }
    HomePage.prototype.goToGuest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */]);
    };
    HomePage.prototype.goToStudent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__student_login_student_login__["a" /* StudentLoginPage */]);
    };
    HomePage.prototype.goToParents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__parents_login_parents_login__["a" /* ParentsLoginPage */]);
    };
    HomePage.prototype.goToStaff = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__staff_login_staff_login__["a" /* StaffLoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myElement'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "myElem", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/home/home.html"*/'<!-- <ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<div id="custom-overlay" [style.display]="splash ? \'flex\' : \'none\'">\n  <div class="flb">\n    <img class="img-screen" src="assets/imgs/logo.png">\n  </div>\n</div>\n\n<ion-content class="item-center" style="background: #434244">\n  <img class="logo-school" src="assets/imgs/inunco.png">\n  <ion-grid >\n    <ion-row #myElement>\n\n      <ion-row col-6>\n        <ion-card color="blue" class="blue-gradient" [ripple] (click)="goToGuest()">\n          <ion-card-header text-center class="padd-bottom"><i class="fas fa-user-circle fa-3x"></i></ion-card-header>\n          <ion-card-content>\n            <ion-card-title text-uppercase text-center>\n              Guest\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n\n      <ion-row col-6>\n        <ion-card color="blue" class="blue-gradient" (click)=goToStudent()>\n          <ion-card-header text-center class="padd-bottom"><i class="fas fa-user fa-3x"></i></ion-card-header>\n          <ion-card-content>\n            <ion-card-title text-uppercase text-center>\n              Student\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n\n      <ion-row col-6>\n        <ion-card color="blue" class="blue-gradient" (click)=goToStaff()>\n          <ion-card-header text-center class="padd-bottom"><i class="fas fa-briefcase fa-3x"></i></ion-card-header>\n          <ion-card-content>\n            <ion-card-title text-uppercase text-center>\n              Staff\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n\n      <ion-row col-6>\n        <ion-card color="blue" class="blue-gradient" (click)=goToParents()>\n          <ion-card-header text-center class="padd-bottom"><i class="fas fa-users fa-3x"></i></ion-card-header>\n          <ion-card-content>\n            <ion-card-title text-uppercase text-center>\n              Parents\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6_css_animator__["AnimationService"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendance_attendance__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_owndetails_student_owndetails__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apiUrl__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the RoutinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoutinePage = /** @class */ (function () {
    function RoutinePage(navCtrl, navParams, menuCtrl, loadingController, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.data = [];
        // for(let i = 1; i < 7; i++ ){
        // this.data.push({
        //     title: 'Day '+ i,
        //     details: 'Your New Routine',
        //     icon: 'ios-add-circle-outline',
        //     showDetails: false
        //   });
        // }
        this.initLoader();
        this.getUserDataFromLocal();
    }
    RoutinePage_1 = RoutinePage;
    RoutinePage.prototype.ngOnInit = function () {
        this.getStudentRoutine();
    };
    RoutinePage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
    };
    // gotoLiveStream(){
    //   this.navCtrl.push(LiveStreamPage);
    // }
    // goToAttendance(){
    //   this.navCtrl.push(AttendancePage);
    // }
    RoutinePage.prototype.goToRoutine = function () {
        this.navCtrl.push(RoutinePage_1);
    };
    // |--------------------------------------------------------------------
    // |--------- toggle accordian method --------------
    // |--------------------------------------------------------------------
    RoutinePage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'ios-add-circle-outline';
        }
        else {
            data.showDetails = true;
            data.icon = 'ios-remove-circle-outline';
        }
    };
    RoutinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoutinePage');
    };
    // |--------------------------------------------------------------------
    // |--------- goto home page method --------------
    // |--------------------------------------------------------------------
    RoutinePage.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
    };
    // |--------------------------------------------------------------------
    // |--------- goto live stream page method --------------
    // |--------------------------------------------------------------------
    RoutinePage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    // |--------------------------------------------------------------------
    // |--------- goto attendence page method --------------
    // |--------------------------------------------------------------------
    RoutinePage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__attendance_attendance__["a" /* AttendancePage */]);
    };
    // |--------------------------------------------------------------------
    // |--------- getting logged user data from localstorage --------------
    // |--------------------------------------------------------------------
    RoutinePage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        console.log('local data : ', this.localUserData);
    };
    // |--------------------------------------------------------------------
    // |--------- getting all routine for a specific student --------------
    // |--------------------------------------------------------------------
    RoutinePage.prototype.getStudentRoutine = function () {
        var _this = this;
        this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            'master_id': this.localUserData.master_id,
            'org_id': this.localUserData.org_code,
            'user_type_id': this.localUserData.user_type_id
        };
        // console.log('sent data : ', data);    
        this.http.post(__WEBPACK_IMPORTED_MODULE_6__apiUrl__["a" /* apiUrl */].url + "routine/std-rutine", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log('routine list : ', data);
            if (data.data.length > 0) {
                // this.presentLoading(false);
                _this.rawRoutineList = data.data;
                // console.log('routine list : ', this.rawRoutineList);
                _this.sortArr(_this.rawRoutineList);
            }
            else {
                _this.presentLoading(false);
            }
        });
    };
    // |--------------------------------------------------------------------
    // |-- loading start and stop method by passing true or false --
    // |--------------------------------------------------------------------
    RoutinePage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 500);
        }
    };
    // |--------------------------------------------------------------------
    // |--------- loading initialization --------------
    // |--------------------------------------------------------------------
    RoutinePage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    // |--------------------------------------------------------------------
    // |--------- sorting raw routine array --------------
    // |--------------------------------------------------------------------
    RoutinePage.prototype.sortArr = function (rawRoutineArr) {
        return __awaiter(this, void 0, void 0, function () {
            var new_arry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        new_arry = [];
                        rawRoutineArr.forEach(function (element, i) {
                            var pos = new_arry
                                .map(function (e) {
                                return e.day;
                            })
                                .indexOf(element.day);
                            // console.log(new_arry.indexOf(element.day));
                            if (pos < 0) {
                                var new_data = {
                                    id: element.id,
                                    day: element.day,
                                    icon: 'ios-add-circle-outline',
                                    showDetails: false,
                                    priods: [
                                        {
                                            priod_id: element.priod_id,
                                            priod_name: element.priod.priod_name,
                                            from_time: element.priod.from_time,
                                            to_time: element.priod.to_time,
                                            rutinedetails: element.rutinedetails
                                        }
                                    ]
                                };
                                new_arry.push(new_data);
                            }
                            else {
                                var exsisting_data = {
                                    priod_id: element.priod_id,
                                    priod_name: element.priod.priod_name,
                                    from_time: element.priod.from_time,
                                    to_time: element.priod.to_time,
                                    icon: 'ios-add-circle-outline',
                                    showDetails: false,
                                    rutinedetails: element.rutinedetails
                                };
                                new_arry[pos].priods.push(exsisting_data);
                            }
                        });
                        // this.routineList = new_arry.sort(function(a, b){return a.day - b.day});
                        // this.routineList = new_arry.sort(function(a, b){return a.priods.priod_id - b.priods.priod_id});
                        return [4 /*yield*/, new_arry.forEach(function (elem, i) {
                                new_arry[i].priods.sort(function (a, b) { return a.priod_id - b.priod_id; });
                            })];
                    case 1:
                        // this.routineList = new_arry.sort(function(a, b){return a.day - b.day});
                        // this.routineList = new_arry.sort(function(a, b){return a.priods.priod_id - b.priods.priod_id});
                        _a.sent();
                        this.routineList = new_arry;
                        // console.log('final array : ', this.routineList);
                        this.presentLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    RoutinePage = RoutinePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-routine',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/routine/routine.html"*/'<!--\n  Generated template for the RoutinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Routine</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-list>\n    <ion-item padding *ngFor="let routine of routineList" (click)="toggleDetails(routine)"><ion-icon color="primary" item-right [name]="routine?.icon"></ion-icon>\n      Day {{routine?.day}}\n      <!-- <table *ngIf="routine.showDetails">{{routine}}</table> -->\n\n      <ion-list *ngIf="routine?.showDetails">\n				<ion-item *ngFor="let r of routine.priods">\n          <p>Priod : {{r?.priod_name}} Priod</p>\n          <p *ngIf="r?.rutinedetails[0]">CC Name : {{r?.rutinedetails[0]?.cc_name}}</p>\n          <p *ngIf="!r?.rutinedetails[0]">CC Name : No Priod</p>\n          <p *ngIf="r?.rutinedetails[0]">Time : {{r?.from_time}} to {{r?.to_time}}</p>\n          <p *ngIf="!r?.rutinedetails[0]">Time : NA</p>\n          <p *ngIf="r?.rutinedetails[0]">Teacher : {{r?.rutinedetails[0]?.teacher?.name}} ({{r?.rutinedetails[0]?.teacher?.short_name}})</p>\n          <p *ngIf="!r?.rutinedetails[0]">Teacher : NA</p>\n				</ion-item>\n      </ion-list>\n    \n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n\n<!-- \n<ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=goToHome()>\n        <img src="assets/imgs/white-icon5.png">\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/routine/routine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
    ], RoutinePage);
    return RoutinePage;
    var RoutinePage_1;
}());

//# sourceMappingURL=routine.js.map

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		528,
		35
	],
	"../pages/attendance-list/attendance-list.module": [
		529,
		34
	],
	"../pages/attendance/attendance.module": [
		530,
		33
	],
	"../pages/changepassword/changepassword.module": [
		531,
		32
	],
	"../pages/complain-reply/complain-reply.module": [
		532,
		31
	],
	"../pages/get-attendance/get-attendance.module": [
		533,
		30
	],
	"../pages/guest-enquiry/guest-enquiry.module": [
		534,
		29
	],
	"../pages/library-list/library-list.module": [
		535,
		28
	],
	"../pages/live-stream/live-stream.module": [
		536,
		0
	],
	"../pages/parents-account/parents-account.module": [
		537,
		27
	],
	"../pages/parents-child-tabs/parents-child-tabs.module": [
		538,
		26
	],
	"../pages/parents-login/parents-login.module": [
		539,
		25
	],
	"../pages/parents-student-view/parents-student-view.module": [
		540,
		24
	],
	"../pages/pdf-download/pdf-download.module": [
		541,
		23
	],
	"../pages/personal-notice/personal-notice.module": [
		542,
		22
	],
	"../pages/principal-complaindesk/principal-complaindesk.module": [
		543,
		21
	],
	"../pages/principal-examview/principal-examview.module": [
		544,
		20
	],
	"../pages/routine/routine.module": [
		545,
		19
	],
	"../pages/school-details/school-details.module": [
		546,
		18
	],
	"../pages/school-listing/school-listing.module": [
		547,
		17
	],
	"../pages/schoolcalender/schoolcalender.module": [
		548,
		16
	],
	"../pages/staff-complain/staff-complain.module": [
		549,
		15
	],
	"../pages/staff-info/staff-info.module": [
		562,
		14
	],
	"../pages/staff-login/staff-login.module": [
		561,
		13
	],
	"../pages/std-reg/std-reg.module": [
		550,
		12
	],
	"../pages/student-library-list/student-library-list.module": [
		551,
		11
	],
	"../pages/student-login/student-login.module": [
		552,
		10
	],
	"../pages/student-notice-board/student-notice-board.module": [
		553,
		9
	],
	"../pages/student-owndetails/student-owndetails.module": [
		554,
		8
	],
	"../pages/students-tabs/students-tabs.module": [
		555,
		7
	],
	"../pages/stuff-change-pass/stuff-change-pass.module": [
		556,
		6
	],
	"../pages/stuff-edit/stuff-edit.module": [
		557,
		5
	],
	"../pages/stuff-examduty/stuff-examduty.module": [
		558,
		4
	],
	"../pages/stuff-registration/stuff-registration.module": [
		559,
		3
	],
	"../pages/test/test.module": [
		560,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 210;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routine_routine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_owndetails_student_owndetails__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__test_test__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttendancePage = /** @class */ (function () {
    function AttendancePage(navCtrl, navParams, menuCtrl, loadingController, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.alertCtrl = alertCtrl;
        // roomName: any;
        this.joinned = false;
        this.newUser = { nickname: "", room: "" };
        this.msgData = { room: "", nickname: "", message: "" };
        this.socket = __WEBPACK_IMPORTED_MODULE_7_socket_io_client__("http://18.191.46.158:3000/");
        this.menuCtrl.enable(false);
    }
    AttendancePage.prototype.ngOnInit = function () {
        this.getUserDataFromLocal();
        this.getShiftLists();
        // this.getClassList();
        // this.getPeriod();
        this.showPeriodForm = true;
        this.socket.on("updateUserList", function (users) {
            console.log(users);
        });
    };
    AttendancePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad AttendancePage');
    };
    AttendancePage.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
    };
    AttendancePage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    AttendancePage.prototype.goToRoutine = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__routine_routine__["a" /* RoutinePage */]);
    };
    AttendancePage.prototype.onSubmitStudentAttPin = function () {
        // console.log('pin entered.');
        if (this.attendenceCode == this.attPin) {
            // console.log('correct pin.');
            this.room = {
                room: this.attPin,
                name: this.localUserData.master_id
            };
            // this.socket.on('connect', () => {
            //   this.socket.emit('join', this.room, function (err) {
            //     if (err) {
            //       console.log(err);
            //     } else {
            //       console.log('No error');
            //     }
            //   });
            // });
            localStorage.setItem("roomData", JSON.stringify(this.room));
            // this.socket.on('updateUserList', function (users) {
            //   console.log(users);
            //   // var ol = jQuery('<ol></ol>');
            //   // users.forEach(function (user) {
            //   //   ol.append(jQuery('<li></li>').text(user));
            //   // });
            //   // jQuery('#users').html(ol);
            // });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__test_test__["a" /* TestPage */]);
        }
        else {
            this.showAlert("Invalid Code.");
        }
    };
    AttendancePage.prototype.getShiftLists = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            org_id: this.localUserData.org_code
        };
        // this.checkshift = [];
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_5__apiUrl__["a" /* apiUrl */].url + "shift/orgshiftlist", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // console.log("Org shift list ", data.data);
            _this.orgShiftLists = data.data;
        });
    };
    AttendancePage.prototype.getPeriod = function (e) {
        var _this = this;
        console.log(e);
        var header = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            org_id: this.localUserData.org_code,
            shift_id: e
        };
        // this.checkshift = [];
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_5__apiUrl__["a" /* apiUrl */].url + "routine/all", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // console.log("period list : ", data.data);
            _this.periodList = data.data;
        });
    };
    AttendancePage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem("userData");
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);
    };
    AttendancePage.prototype.onPeriodSubmit = function () {
        // let todayDate = new Date().toLocaleString().substring(0,9).toString();
        // todayDate = todayDate.toLocaleString();
        var _this = this;
        var data = {
            period_id: this.period,
            org_id: this.localUserData.org_code,
            master_id: this.localUserData.master_id,
            date: this.makeDateString(new Date())
        };
        // console.log("data : ", data);
        var header = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_5__apiUrl__["a" /* apiUrl */].node_url + "attendance/getAttedData", data, {
            headers: header
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log("data : ", data.data[0]);
                if (data.success) {
                    this.showPeriodForm = false;
                    this.attendenceCode = data.data[0].atted_code;
                    // this.room = {
                    //   room: this.attPin,
                    //   name: this.localUserData.master_id
                    // }
                    // this.genAttCode = await data.data[0].atted_code;
                    // localStorage.setItem('attedCode', JSON.stringify(this.genAttCode));
                    // this.showTeacherForm = false;
                    // this.showAlert(data.msg);
                }
                else {
                    this.showPeriodForm = true;
                    this.showAlert(data.msg);
                }
                return [2 /*return*/];
            });
        }); });
    };
    AttendancePage.prototype.makeDateString = function (date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return day + "/" + month + "/" + year;
    };
    AttendancePage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: "Alert!",
            subTitle: msg,
            buttons: ["OK"]
        });
        alert.present();
    };
    AttendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-attendance",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/attendance/attendance.html"*/'\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Attendance</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n<ion-content *ngIf="showPeriodForm" class="item-center" padding>\n	<h4 class="title" text-center text-uppercase margin-bottom>Select Period</h4>\n	 <ion-list>\n			<ion-item>\n				<ion-label>Shift</ion-label>\n				<ion-select [(ngModel)]="shift" (ionChange)="getPeriod($event)">\n					<ng-container *ngFor="let shift of orgShiftLists">\n						<ion-option value="{{shift.orgshift[0]?.id}}" *ngIf="shift.orgshift[0]?.id">{{shift.name}}</ion-option>\n					</ng-container>\n				</ion-select>\n			</ion-item>\n	</ion-list>\n\n	<!--<ion-list>\n			<ion-item>\n				<ion-label>Stream</ion-label>\n				<ion-select [(ngModel)]="stream" (ionChange)="onChooseClassStream($event)">\n					<ion-option value="{{classStream.class_id}}" *ngFor="let classStream of sortArray">{{classStream.class_name}}</ion-option>\n				</ion-select>\n			</ion-item>\n	</ion-list>\n\n	<ion-list>\n			<ion-item>\n				<ion-label>Department</ion-label>\n				<ion-select [(ngModel)]="department">\n					<ion-option value="{{sec.sec_id}}" *ngFor="let sec of filteredArrayForSectionList">{{sec.section_name}}</ion-option>\n				</ion-select>\n			</ion-item>\n	</ion-list>		 -->\n\n	<ion-list>\n			<ion-item>\n				<ion-label>Period</ion-label>\n				<ion-select [(ngModel)]="period">\n					<ion-option *ngFor="let period of periodList" value="{{period.id}}">{{period.priod_name}} ({{period.from_time}} {{period.to_time}})</ion-option>\n				</ion-select>\n			</ion-item>\n	</ion-list>\n\n	<button ion-button block outline color="blue" class="mt-10" (click)="onPeriodSubmit()">Submit</button>\n</ion-content>\n\n\n\n\n\n<ion-content class="item-center" *ngIf="!showPeriodForm" padding>\n	<div class="enquiry-form">\n		<h1 class="title" text-center text-uppercase margin-bottom>Enter Attendance Pin</h1>\n	 	<form>\n		  <ion-item class="select-css">\n		    <ion-input type="text" name="attPin" placeholder="Enter Pin" [(ngModel)]="attPin"></ion-input>\n			</ion-item>\n		 <button ion-button type="submit" block outline color="blue" class="mt-10" (click)="onSubmitStudentAttPin()">Submit</button>\n		</form>\n	</div>\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/attendance/attendance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AttendancePage);
    return AttendancePage;
}());

//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_library_list_student_library_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_notice_board_student_notice_board__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__personal_notice_personal_notice__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__get_attendance_get_attendance__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__staff_complain_staff_complain__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__parents_account_parents_account__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guest_enquiry_guest_enquiry__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__principal_examview_principal_examview__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__principal_complaindesk_principal_complaindesk__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__stuff_examduty_stuff_examduty__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















/**
 * Generated class for the StaffInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffInfoPage = /** @class */ (function () {
    function StaffInfoPage(navCtrl, navParams, menuCtrl, loadingController, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.menuCtrl.enable(true);
        this.initLoader();
    }
    StaffInfoPage.prototype.ngOnInit = function () {
        this.getUserDataFromLocal();
        this.getUserData();
        console.log('Stuff info page...');
    };
    StaffInfoPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad StaffInfoPage');
    };
    StaffInfoPage.prototype.goToAllPdf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__student_notice_board_student_notice_board__["b" /* StudentNoticeBoardPage */]);
    };
    StaffInfoPage.prototype.goToLibrary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__student_library_list_student_library_list__["b" /* StudentLibraryListPage */]);
    };
    StaffInfoPage.prototype.goToPersonalNotice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__personal_notice_personal_notice__["a" /* PersonalNoticePage */]);
    };
    StaffInfoPage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    StaffInfoPage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__get_attendance_get_attendance__["a" /* GetAttendancePage */]);
    };
    StaffInfoPage.prototype.goToComplain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__staff_complain_staff_complain__["a" /* StaffComplainPage */]);
    };
    StaffInfoPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__parents_account_parents_account__["a" /* ParentsAccountPage */]);
    };
    StaffInfoPage.prototype.goToGuest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */]);
    };
    StaffInfoPage.prototype.goToPrincipal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__principal_examview_principal_examview__["a" /* PrincipalExamviewPage */]);
    };
    StaffInfoPage.prototype.goToComplainDesk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__principal_complaindesk_principal_complaindesk__["a" /* PrincipalComplaindeskPage */]);
    };
    StaffInfoPage.prototype.goToStuffDuty = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__stuff_examduty_stuff_examduty__["a" /* StuffExamdutyPage */]);
    };
    StaffInfoPage.prototype.getUserData = function () {
        var _this = this;
        this.presentLoading(true);
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: header });
        var data = {
            'org_id': this.localUserData.org_code,
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "org/getdetail", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log('org_details : ', data.data[0]);
            if (data.data) {
                _this.presentLoading(false);
                _this.orgDetails = data.data[0];
            }
        });
    };
    StaffInfoPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    StaffInfoPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    StaffInfoPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);    
    };
    StaffInfoPage.prototype.goToLogout = function () {
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__home_home__["a" /* HomePage */]);
    };
    StaffInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-staff-info',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-info/staff-info.html"*/'<!--\n  Generated template for the StaffInfoPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <button ion-button menuToggle color="light">\n     <ion-icon name="menu"></ion-icon>\n   </button>\n    <ion-title>General Information</ion-title>\n    <ion-buttons end><button class="bell-icon" (click)=goToPersonalNotice()> <i class="fas fa-bell fa-inverse fa-lg"></i> </button></ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-card>\n    <img src="{{orgDetails?.org_img}}"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{orgDetails?.org_name}}\n        </ion-card-title>\n        <div [innerHtml]="orgDetails?.org_text"></div>\n        <!-- <p><strong>About</strong> : </p>\n        <div [innerHtml]="orgDetails?.org_about" class="mt-4"></div> -->        \n        <!-- <p (click)=goToPrincipal()>PRINCIPAL</p>  -->\n        <button ion-button block outline color="blue" class="mt-10" (click)=goToPrincipal()>PRINCIPAL</button>\n        <!-- <p (click)=goToComplainDesk()>COMPLAIN DESK</p> -->\n        <button ion-button block outline color="blue" class="mt-10" (click)=goToComplainDesk()>COMPLAIN DESK</button>\n        <!-- <p (click)=goToStuffDuty()>STUFF DUTY</p> -->\n        <button ion-button block outline color="blue" class="mt-10" (click)=goToStuffDuty()>STUFF DUTY</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-md-3 class="icon-center" (click)=goToLibrary()>\n        <img src="assets/imgs/icon.png"/>\n        <p>Library</p>\n      </ion-col>\n      <ion-col col-md-3 class="icon-center" (click)=goToAllPdf()>\n        <img src="assets/imgs/icon2.png"/>\n        <p>Notice Board</p>\n      </ion-col>\n      <ion-col col-md-3 class="icon-center" (click)=goToPersonalNotice()>\n        <img src="assets/imgs/icon6.png"/>\n        <p>Personal Notice</p>\n      </ion-col>\n      <ion-col col-md-3 class="icon-center" (click)=goToAccount()>\n        <img src="assets/imgs/icon5.png"/>\n        <p>Account</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-md-3 class="icon-center" (click)=goToAttendance()>\n        <img src="assets/imgs/icon3.png"/>\n        <p>Attendance</p>\n      </ion-col>\n      <ion-col col-md-3 class="icon-center" (click)=goToStuffDuty()>\n        <img src="assets/imgs/calendar1.png"/>\n        <p>Stuff Duty</p>\n      </ion-col>\n      <ion-col col-md-3 class="icon-center" (click)=gotoLiveStream()>\n        <img src="assets/imgs/icon1.png"/>\n        <p>Live Stream</p>\n      </ion-col>\n      <ion-col col-md-3 class="icon-center" (click)=goToComplain()>\n        <img src="assets/imgs/icon7.png"/>\n        <p>Complain</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-md-4 class="icon-center" (click)=goToGuest()>\n        <img src="assets/imgs/guest.png"/>\n        <p>Guest</p>\n      </ion-col>\n\n      <ion-col col-md-4 class="icon-center" (click)=goToLogout()>\n        <img src="assets/imgs/icon7.png"/>\n        <p>Logout</p>\n      </ion-col>\n\n      <ion-col col-md-4 class="">\n        <img src=""/>\n        <p></p>\n      </ion-col>\n\n      <ion-col col-md-4 class="">\n        <img src=""/>\n        <p></p>\n      </ion-col>\n    </ion-row>\n    \n  </ion-grid>\n</ion-content>\n\n\n\n\n<ion-footer class="fixed">\n    <ion-toolbar color="primary">  \n    <ion-grid text-center >\n      <ion-row>\n        <div col-3 (click)=goToHome()>\n          <img src="assets/imgs/white-icon5.png">\n         <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n          <p class="footer-p">Home</p>\n        </div>\n        <div col-3 (click)=gotoLiveStream()>\n          <img src="assets/imgs/white-icon1.png">\n         <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n          <p class="footer-p">Streaming</p>\n        </div>\n        <div col-3 (click)=goToAttendance()>\n          <img src="assets/imgs/white-icon2.png">\n          <!-- <i text-center class="fas fa-boxes fa-inverse fa-lg"></i> -->\n          <p  class="footer-p">Attendance</p>\n        </div>\n        <div col-3 (click)=goToRoutine()>\n          <img src="assets/imgs/white-icon3.png">\n          <!-- <i class="fas fa-box fa-inverse fa-lg"></i> -->\n          <p  class="footer-p">Routine</p>\n        </div>\n      </ion-row>\n    </ion-grid>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-info/staff-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], StaffInfoPage);
    return StaffInfoPage;
}());

//# sourceMappingURL=staff-info.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StudentNoticeBoardPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_owndetails_student_owndetails__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attendance_attendance__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routine_routine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__staff_info_staff_info__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var StudentNoticeBoardPage = /** @class */ (function () {
    function StudentNoticeBoardPage(navCtrl, http, navParams, menuCtrl, loadingController, modalCtrl, jsonp, viewCtrl, fileOpener) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.jsonp = jsonp;
        this.viewCtrl = viewCtrl;
        this.fileOpener = fileOpener;
        this.allNotice = [];
        this.page = 0;
        this.perPage = 4;
        this.totalData = 0;
        this.totalPage = 0;
        this.getUserDataFromLocal();
        this.menuCtrl.enable(false);
        this.initLoader();
        for (var i = 0; i < 5; i++) {
            this.allNotice.push(this.allNotice.length);
        }
    }
    StudentNoticeBoardPage.prototype.ngOnInit = function () {
        this.guestOrgId = this.navParams.get('id');
        // console.log('guest org id : ', this.guestOrgId);    
        this.getNotice();
    };
    StudentNoticeBoardPage.prototype.ionViewDidLoad = function () {
        console.log("StudentNoticeBoardPage");
    };
    StudentNoticeBoardPage.prototype.goToHome = function () {
        if (this.localUserData) {
            if (this.localUserData.user_type_id == 1) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__staff_info_staff_info__["a" /* StaffInfoPage */]);
            }
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
        }
    };
    StudentNoticeBoardPage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    StudentNoticeBoardPage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__attendance_attendance__["a" /* AttendancePage */]);
    };
    StudentNoticeBoardPage.prototype.goToRoutine = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__routine_routine__["a" /* RoutinePage */]);
    };
    StudentNoticeBoardPage.prototype.getNoticeList = function (infiniteScroll) {
        var _this = this;
        this.presentLoading(true);
        // this.getUserDataFromLocal();
        var header = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            org_id: this.localUserData.org_code,
            user_type_id: this.localUserData.user_type_id,
            master_id: this.localUserData.master_id
        };
        // console.log('Data sent : ', data);
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_7__apiUrl__["a" /* apiUrl */].url + "notice/get", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(data.data.length > 1)) return [3 /*break*/, 4];
                        console.log("Receive data : ", data.data);
                        _a = this;
                        return [4 /*yield*/, data.data];
                    case 1:
                        _a.allNotice = _d.sent();
                        _b = this;
                        return [4 /*yield*/, data.data.length];
                    case 2:
                        _b.totalData = _d.sent();
                        _c = this;
                        return [4 /*yield*/, Math.floor(this.totalData / 5)];
                    case 3:
                        _c.totalPage = _d.sent();
                        this.presentLoading(false);
                        return [3 /*break*/, 5];
                    case 4:
                        this.presentLoading(false);
                        _d.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    StudentNoticeBoardPage.prototype.getGuestNoticeList = function (infiniteScroll) {
        var _this = this;
        this.presentLoading(true);
        // this.getUserDataFromLocal();
        var header = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            org_id: this.guestOrgId
        };
        // console.log('Data sent : ', data);
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_7__apiUrl__["a" /* apiUrl */].url + "notice/get-general", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log('Receive notice data for guest : ', data);
                        if (!(data.data.length > 1)) return [3 /*break*/, 4];
                        console.log("Receive data : ", data.data);
                        _a = this;
                        return [4 /*yield*/, data.data];
                    case 1:
                        _a.allNotice = _d.sent();
                        _b = this;
                        return [4 /*yield*/, data.data.length];
                    case 2:
                        _b.totalData = _d.sent();
                        _c = this;
                        return [4 /*yield*/, Math.floor(this.totalData / 5)];
                    case 3:
                        _c.totalPage = _d.sent();
                        this.presentLoading(false);
                        return [3 /*break*/, 5];
                    case 4:
                        this.presentLoading(false);
                        _d.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    StudentNoticeBoardPage.prototype.getNotice = function () {
        if (this.localUserData != null) {
            this.getNoticeList();
        }
        else {
            this.getGuestNoticeList();
        }
    };
    StudentNoticeBoardPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        console.log("Begin async operation");
        if (this.page === this.totalPage) {
            infiniteScroll.enable(false);
        }
        setTimeout(function () {
            for (var i = 0; i < 5; i++) {
                _this.allNotice.push(_this.allNotice.length);
            }
            console.log("Async operation has ended");
            infiniteScroll.complete();
        }, 500);
    };
    StudentNoticeBoardPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem("userData");
        this.localUserData = JSON.parse(data);
        console.log('local data : ', this.localUserData);
    };
    StudentNoticeBoardPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: "hide",
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
        });
    };
    // |------------------------------------------------------------------
    // |--------- show loading method(control show loading) ----------
    // |------------------------------------------------------------------
    StudentNoticeBoardPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 500);
        }
    };
    StudentNoticeBoardPage.prototype.presentProfileModal = function (id) {
        var filterNotice = this.allNotice.filter(function (item) {
            return item.id == id;
        });
        var profileModal = this.modalCtrl.create(NoticeModalPage, {
            notice: filterNotice[0]
        });
        profileModal.present();
    };
    StudentNoticeBoardPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    StudentNoticeBoardPage.prototype.showPdf = function (url) {
        alert(__WEBPACK_IMPORTED_MODULE_7__apiUrl__["a" /* apiUrl */].url + "public/uploads/Notices/" + url);
        //let pdfurl = `${apiUrl.url}public/uploads/Notices/${url}`;
        this.fileOpener
            .open(url, "application/pdf")
            .then(function (dta) { return alert(JSON.stringify(dta)); })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    StudentNoticeBoardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-student-notice-board",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-notice-board/student-notice-board.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Notice Board</ion-title>\n    <ion-buttons end (click)=goToHome() *ngIf="localUserData == null">\n        <button ion-button icon-only>\n          <ion-icon name="home" color="light"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content *ngIf="allNotice">  \n  <ion-list>\n    <ion-item *ngFor="let notice of allNotice">\n      <ion-thumbnail item-start (click)="presentProfileModal(notice.id)">\n        <img src="assets/imgs/download-img.png">\n      </ion-thumbnail>\n      <h2>{{notice?.notice?.subject}}</h2>\n      <p>{{notice?.notice?.text}}</p>\n      <p>{{notice?.noticetype?.type_name}}</p>\n      <p style="font-size: 10px;">{{notice?.created_at}}</p>\n\n      <button ion-button clear item-end (click)="showPdf(\'http://softechs.co.in/school_hub/public/uploads/Notices/1545809130-2.pdf\')">\n        <i class="fas fa-download fa-2x"></i>\n      </button>\n      \n    </ion-item>\n  </ion-list>\n\n  <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < totalPage">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n  <!-- <pdf-viewer *ngIf="pdfSrc" [src]="pdfSrc" [render-text]="true" style="display: block;"></pdf-viewer> -->\n</ion-content>\n\n\n<ion-content *ngIf="!allNotice">\n    <ion-item>\n        <p text-center><strong>Nothing Found</strong></p>\n    </ion-item>\n</ion-content>\n\n<!-- <pdf-viewer [src]="pdfSrc" [render-text]="true" style="display: block;"></pdf-viewer> -->\n\n\n<ion-footer class="fixed" *ngIf="localUserData != null">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=goToHome()>\n        <img src="assets/imgs/white-icon5.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <!-- <i text-center class="fas fa-boxes fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n      	<!-- <i class="fas fa-box fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-notice-board/student-notice-board.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* Jsonp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */]])
    ], StudentNoticeBoardPage);
    return StudentNoticeBoardPage;
}());

var NoticeModalPage = /** @class */ (function () {
    function NoticeModalPage(params, platform, viewCtrl, menuCtrl, navCtrl) {
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        //  console.log('book', params.get('book'));  
        this.notice = params.get('notice');
    }
    NoticeModalPage.prototype.ngOnInit = function () {
        console.log(this.notice);
    };
    NoticeModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NoticeModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-notice-board/notice-modal.html"*/'<ion-header>\n        <ion-toolbar>\n          <ion-title>\n              Notice Details\n          </ion-title>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n</ion-header>\n\n\n<ion-content>        \n  <ion-card>       \n    \n    <h4 text-center style="font-size: 18px;"><strong>{{notice?.notice?.subject}}</strong></h4>\n    \n    <ion-card-content>\n      <p><strong>Title</strong> : {{notice?.notice?.title}}</p>\n      <p><strong>Details</strong> : {{notice?.notice?.text}}</p>\n      <p><strong>Notice Type</strong> : {{notice?.noticetype?.type_name}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-notice-board/notice-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], NoticeModalPage);
    return NoticeModalPage;
}());

//# sourceMappingURL=student-notice-board.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuffRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__school_listing_school_listing__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StuffRegistrationPage = /** @class */ (function () {
    function StuffRegistrationPage(navCtrl, navParams, http, menuCtrl, loadingController, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.isSearchbarOpened = false;
        this.searchQuery = "";
        this.items = [];
        this.list = [];
        this.idList = [];
        this.menuCtrl.enable(true);
        this.initLoader();
        this.getData();
    }
    StuffRegistrationPage.prototype.ngOnInit = function () {
        this.getCollege();
    };
    StuffRegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StuffRegistrationPage');
    };
    StuffRegistrationPage.prototype.getCollege = function () {
        var _this = this;
        this.presentLoading(true);
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: header });
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "org/alllist", options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log(data)
            if (data.data) {
                _this.presentLoading(false);
                // console.log('receive college list : ', data);
                _this.collegeList = data.data;
            }
        });
    };
    StuffRegistrationPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    StuffRegistrationPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    StuffRegistrationPage.prototype.registrationSubmit = function () {
        // this.presentLoading(true);
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            org_id: this.college,
            mobile_no: this.mobileNo
        };
        console.log('sent stuff reg data : ', data);
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "user/register", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.data.length > 0) {
                _this.presentLoading(false);
                // console.log('student data : ', data);	
                _this.showAlert('Success!', "Your Username is : " + data.data[0].user_name + " and Password is : " + data.data[0].hint + ". Please login to continue.");
            }
        });
    };
    StuffRegistrationPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    StuffRegistrationPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        if (ev.target.value == "") {
            this.isSearchbarOpened = false;
            this.items = [];
            return;
        }
        this.isSearchbarOpened = true;
        // console.log('value : ', ev.target.value);
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // console.log(this.items);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != "") {
            this.items = this.items.filter(function (item) {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
            console.log('items : ...', this.items);
        }
    };
    StuffRegistrationPage.prototype.goToListing = function () {
        if (this.country == null && this.state == null) {
            this.presentToast("State and Country Can't be Blank");
        }
        else {
            var data = {
                country: this.country,
                state: this.state,
                jela: this.jela
            };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__school_listing_school_listing__["a" /* SchoolListingPage */], { data: data });
        }
    };
    StuffRegistrationPage.prototype.initializeItems = function () {
        this.items = this.list;
    };
    StuffRegistrationPage.prototype.schoolsDetails = function (org) {
        this.inputShowValue = org.name;
        this.college = org.id;
        this.items = [];
    };
    StuffRegistrationPage.prototype.getData = function () {
        var _this = this;
        this.http
            .get(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "org/alllist")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.presentLoading(false);
            _this.allSchoolsList = data;
            console.log("student list : ", _this.allSchoolsList);
            data.data.forEach(function (ele) {
                var obj = {
                    id: ele.id,
                    name: ele.org_name
                };
                _this.list.push(obj);
            });
        });
    };
    StuffRegistrationPage.prototype.onSearchButtonClick = function () {
        var _this = this;
        this.isSearchbarOpened = true;
        setTimeout(function () {
            _this.searchbox.setFocus();
        }, 150);
    };
    StuffRegistrationPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", Object)
    ], StuffRegistrationPage.prototype, "searchbox", void 0);
    StuffRegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stuff-registration',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-registration/stuff-registration.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>	\n    <ion-title>Stuff Registration</ion-title>\n    <!-- <ion-buttons end>\n      <button class="bell-icon" (click)=goToPersonalNotice()> \n        <i class="fas fa-bell fa-inverse fa-lg"></i> \n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <h5 class="title" text-center text-uppercase margin-bottom>Stuff Registration</h5>\n\n    <!-- <ion-list>\n      <ion-item> -->\n        <!-- <ion-navbar color="light" [hideBackButton]="isSearchbarOpened ? \'true\' : \'false\'"> -->\n          <!-- <ion-title *ngIf="isSearchbarOpened==false">Submit Enquiry</ion-title>\n          <ion-buttons end *ngIf="isSearchbarOpened==false" (click)="onSearchButtonClick()">\n            <button ion-button icon-only>\n              <ion-icon name="search" color="light"></ion-icon>\n            </button>\n          </ion-buttons> -->\n        <ion-input type="text" name="inputShowValue" placeholder="Search" [(ngModel)]="inputShowValue" (keyup)="getItems($event)" (click)="onSearchButtonClick()"></ion-input>\n          <ion-list class="search-result" [ngStyle]="{\'display\':isSearchbarOpened ? \'block\' : \'none\' }">\n            <ion-item *ngFor="let item of items" (click)="schoolsDetails(item)">\n              {{ item.name }}\n            </ion-item>\n          </ion-list>\n      <!-- </ion-item> \n    </ion-list> -->\n\n    <ion-list>\n        <ion-item>\n          <ion-label fixed>Phone No</ion-label>\n          <ion-input type="number" name="regNo" [(ngModel)]="mobileNo"></ion-input>\n        </ion-item>      \n    </ion-list>\n\n    <button ion-button block outline color="blue" class="" (click)=\'registrationSubmit()\'>Submit</button>\n</ion-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-registration/stuff-registration.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _g || Object])
    ], StuffRegistrationPage);
    return StuffRegistrationPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=stuff-registration.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(419);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StudentLibraryListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_owndetails_student_owndetails__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attendance_attendance__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routine_routine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__apiUrl__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the StudentLibraryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentLibraryListPage = /** @class */ (function () {
    function StudentLibraryListPage(navCtrl, navParams, menuCtrl, http, alertCtrl, loadingController, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.allBookList = [];
        this.page = 1;
        this.perPage = 5;
        this.totalData = 0;
        this.totalPage = 0;
        this.menuCtrl.enable(false);
        this.initLoader();
        for (var i = 0; i < 5; i++) {
            this.allBookList.push(this.allBookList.length);
        }
    }
    StudentLibraryListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentLibraryListPage');
    };
    StudentLibraryListPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
    };
    StudentLibraryListPage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    StudentLibraryListPage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__attendance_attendance__["a" /* AttendancePage */]);
    };
    StudentLibraryListPage.prototype.goToRoutine = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__routine_routine__["a" /* RoutinePage */]);
    };
    StudentLibraryListPage.prototype.ngOnInit = function () {
        this.getBookList();
    };
    StudentLibraryListPage.prototype.getBookList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoading(true);
                        return [4 /*yield*/, this.getUserDataFromLocal()];
                    case 1:
                        _a.sent();
                        header = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
                        header.set("Content-Type", "application/json");
                        data = {
                            master_id: this.localUserData.org_code
                        };
                        // console.log('Data sent : ', data);
                        this.http
                            .post(__WEBPACK_IMPORTED_MODULE_7__apiUrl__["a" /* apiUrl */].url + "library/librarydetails", data, { headers: header })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b, _c, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        if (!(data.data.length > 1)) return [3 /*break*/, 5];
                                        this.presentLoading(false);
                                        _a = this;
                                        return [4 /*yield*/, data.data];
                                    case 1:
                                        _a.allBookList = _e.sent();
                                        _b = this;
                                        return [4 /*yield*/, data.data];
                                    case 2:
                                        _b.allBook = _e.sent();
                                        _c = this;
                                        return [4 /*yield*/, data.data.length];
                                    case 3:
                                        _c.totalData = _e.sent();
                                        _d = this;
                                        return [4 /*yield*/, Math.floor(data.data.length / 5)];
                                    case 4:
                                        _d.totalPage = _e.sent();
                                        return [3 /*break*/, 6];
                                    case 5:
                                        this.presentLoading(false);
                                        _e.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentLibraryListPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
    };
    StudentLibraryListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 5; i++) {
                _this.allBookList.push(_this.allBookList.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    StudentLibraryListPage.prototype.onChangeSearch = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var tempArr, index, matchFound, matchAuthor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showNotFound = false;
                        tempArr = [];
                        if (!(e.target.value != "")) return [3 /*break*/, 6];
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < this.allBookList.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.allBookList[index].book_name.toLowerCase().match(e.target.value)];
                    case 2:
                        matchFound = _a.sent();
                        return [4 /*yield*/, this.allBookList[index].author.toLowerCase().match(e.target.value)];
                    case 3:
                        matchAuthor = _a.sent();
                        if (matchFound != null) {
                            tempArr.push(this.allBookList[index]);
                            this.showNotFound = false;
                        }
                        if (matchAuthor != null) {
                            tempArr.push(this.allBookList[index]);
                            this.showNotFound = false;
                        }
                        _a.label = 4;
                    case 4:
                        index++;
                        return [3 /*break*/, 1];
                    case 5:
                        // if(matchFound === null && matchAuthor === null){
                        //   console.log('not found any thing...');
                        //   this.showNotFound = true;
                        // }
                        if (tempArr.length == 0) {
                            console.log('not found any thing...');
                            this.showNotFound = true;
                        }
                        tempArr = tempArr.filter(function (item, pos) {
                            return tempArr.indexOf(item) == pos;
                        });
                        this.allBookList = tempArr;
                        return [3 /*break*/, 7];
                    case 6:
                        this.allBookList = this.allBook;
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    StudentLibraryListPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    StudentLibraryListPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 500);
        }
    };
    StudentLibraryListPage.prototype.presentProfileModal = function (id) {
        console.log('clicked...', id);
        var filterBook = this.allBook.filter(function (item) {
            return item.id == id;
        });
        var profileModal = this.modalCtrl.create(ProfilePage, { book: filterBook[0] });
        profileModal.present();
    };
    StudentLibraryListPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    StudentLibraryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-library-list',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-library-list/student-library-list.html"*/'<!--\n  Generated template for the StudentLibraryListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>List of Books</ion-title>\n      <ion-buttons end class="search-icon"> <i class="fas fa-search fa-lg"></i> </ion-buttons>\n  </ion-navbar>\n   <ion-toolbar>\n    <ion-searchbar (keyup)="onChangeSearch($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list>\n        <ion-item *ngIf="showNotFound" text-center>\n          <p>Not Found Any Book</p>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item *ngFor="let book of allBookList" (click)="presentProfileModal(book.id)">\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/book.png">\n        </ion-thumbnail>\n        <h2 *ngIf="book.book_name"><strong>{{book.book_name}}</strong></h2>\n        <p><strong>Author Name</strong>: {{book.author}}</p>\n        <small><strong>Number of Copies</strong>: {{book.no_copy}}</small>\n      </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < totalPage">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n<!-- *ngIf="page < totalPage" *ngIf="book.book_name"-->\n\n</ion-content>\n\n\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=goToHome()>\n        <img src="assets/imgs/white-icon5.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <!-- <i text-center class="fas fa-boxes fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n      	<!-- <i class="fas fa-box fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-library-list/student-library-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], StudentLibraryListPage);
    return StudentLibraryListPage;
}());

var ProfilePage = /** @class */ (function () {
    function ProfilePage(params, platform, viewCtrl, menuCtrl, navCtrl) {
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        //  console.log('book', params.get('book'));  
        this.book = params.get('book');
    }
    ProfilePage.prototype.ngOnInit = function () {
        console.log(this.book);
    };
    ProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-library-list/book-modal.html"*/'<!-- <ion-header>\n        <ion-toolbar>\n          <ion-title>\n            Book Details\n          </ion-title>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header> -->\n\n\n      <ion-header>\n            <ion-toolbar>\n              <ion-title>\n                  Book Details\n              </ion-title>\n              <ion-buttons start>\n                <button ion-button (click)="dismiss()">\n                  <span ion-text color="primary" showWhen="ios">Cancel</span>\n                  <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-toolbar>\n    </ion-header>\n\n\n<ion-content>        \n    <ion-card>       \n        \n        <h4 text-center style="font-size: 18px;"><strong>{{book?.book_name}}</strong></h4>\n        \n        <ion-card-content>\n          <p><strong>Author</strong> : {{book?.author}}</p>\n          <p><strong>Edition</strong> : {{book?.edition}}</p>\n          <p><strong>ISBN</strong> : {{book?.isbn_code}}</p>\n          <p><strong>Publisher</strong> : {{book?.publisher_name}}</p>\n          <p><strong>No of Copy</strong> : {{book?.no_copy}}</p>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-library-list/book-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=student-library-list.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_css_animator__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_page_transitions__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_guest_enquiry_guest_enquiry__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_school_listing_school_listing__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_school_details_school_details__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_expandable_header_expandable_header__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pdf_download_pdf_download__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_student_login_student_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_library_list_library_list__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_student_owndetails_student_owndetails__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_personal_notice_personal_notice__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_attendance_attendance__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_routine_routine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_parents_login_parents_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_parents_student_view_parents_student_view__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_parents_child_tabs_parents_child_tabs__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_student_library_list_student_library_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_student_notice_board_student_notice_board__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_account_account__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_changepassword_changepassword__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_parents_account_parents_account__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_staff_login_staff_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_staff_info_staff_info__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_staff_complain_staff_complain__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_get_attendance_get_attendance__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_attendance_list_attendance_list__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_principal_examview_principal_examview__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_principal_complaindesk_principal_complaindesk__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_complain_reply_complain_reply__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_stuff_examduty_stuff_examduty__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_schoolcalender_schoolcalender__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_students_tabs_students_tabs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_stuff_change_pass_stuff_change_pass__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng2_ripple_directive__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng2_ripple_directive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_ng2_ripple_directive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_status_bar__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_splash_screen__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_chat_serv_chat_serv__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_test_test__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_std_reg_std_reg__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_stuff_edit_stuff_edit__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_ng2_pdf_viewer__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_platform_browser_dynamic__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_file_transfer__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_file__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_camera__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_file_path__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_file_opener__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_transfer__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_stuff_registration_stuff_registration__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { File } from '@ionic-native/file';
// import { FileTransfer } from '@ionic-native/file-transfer';



































// import { StaffInfoPage } from '../pages/staff-info/staff-info';


// import { AccountPage, ModalPage } from '../pages/account/account';
// import { StudentNoticeBoardPage, NoticeModalPage } from './student-notice-board';


// import { Camera } from '@ionic-native/camera';
// import { StreamingMedia } from '@ionic-native/streaming-media';















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_school_listing_school_listing__["a" /* SchoolListingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_school_details_school_details__["a" /* SchoolDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_expandable_header_expandable_header__["a" /* ExpandableHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pdf_download_pdf_download__["a" /* PdfDownloadPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_student_login_student_login__["a" /* StudentLoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_library_list_library_list__["a" /* LibraryListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_personal_notice_personal_notice__["a" /* PersonalNoticePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_live_stream_live_stream__["a" /* LiveStreamPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_routine_routine__["a" /* RoutinePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_parents_login_parents_login__["a" /* ParentsLoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_parents_student_view_parents_student_view__["a" /* ParentsStudentViewPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_parents_child_tabs_parents_child_tabs__["a" /* ParentsChildTabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_student_library_list_student_library_list__["b" /* StudentLibraryListPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_student_notice_board_student_notice_board__["b" /* StudentNoticeBoardPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_account_account__["b" /* default */],
                __WEBPACK_IMPORTED_MODULE_28__pages_account_account__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_parents_account_parents_account__["a" /* ParentsAccountPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_staff_login_staff_login__["a" /* StaffLoginPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_staff_info_staff_info__["a" /* StaffInfoPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_staff_complain_staff_complain__["a" /* StaffComplainPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_get_attendance_get_attendance__["a" /* GetAttendancePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_attendance_list_attendance_list__["a" /* AttendanceListPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_principal_examview_principal_examview__["a" /* PrincipalExamviewPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_principal_complaindesk_principal_complaindesk__["a" /* PrincipalComplaindeskPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_complain_reply_complain_reply__["a" /* ComplainReplyPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_stuff_examduty_stuff_examduty__["a" /* StuffExamdutyPage */],
                __WEBPACK_IMPORTED_MODULE_43_ng2_ripple_directive__["RippleDirective"],
                __WEBPACK_IMPORTED_MODULE_3_css_animator__["AnimatesDirective"],
                __WEBPACK_IMPORTED_MODULE_40__pages_schoolcalender_schoolcalender__["a" /* SchoolcalenderPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_students_tabs_students_tabs__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_47__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_std_reg_std_reg__["a" /* StdRegPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_student_library_list_student_library_list__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_student_notice_board_student_notice_board__["a" /* NoticeModalPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_stuff_change_pass_stuff_change_pass__["a" /* StuffChangePassPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_stuff_edit_stuff_edit__["a" /* StuffEditPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_stuff_registration_stuff_registration__["a" /* StuffRegistrationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/attendance-list/attendance-list.module#AttendanceListPageModule', name: 'AttendanceListPage', segment: 'attendance-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/attendance/attendance.module#AttendancePageModule', name: 'AttendancePage', segment: 'attendance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/complain-reply/complain-reply.module#ComplainReplyPageModule', name: 'ComplainReplyPage', segment: 'complain-reply', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/get-attendance/get-attendance.module#GetAttendancePageModule', name: 'GetAttendancePage', segment: 'get-attendance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guest-enquiry/guest-enquiry.module#GuestEnquiryPageModule', name: 'GuestEnquiryPage', segment: 'guest-enquiry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/library-list/library-list.module#LibraryListPageModule', name: 'LibraryListPage', segment: 'library-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/live-stream/live-stream.module#LiveStreamPageModule', name: 'LiveStreamPage', segment: 'live-stream', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parents-account/parents-account.module#ParentsAccountPageModule', name: 'ParentsAccountPage', segment: 'parents-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parents-child-tabs/parents-child-tabs.module#ParentsChildTabsPageModule', name: 'ParentsChildTabsPage', segment: 'parents-child-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parents-login/parents-login.module#ParentsLoginPageModule', name: 'ParentsLoginPage', segment: 'parents-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parents-student-view/parents-student-view.module#ParentsStudentViewPageModule', name: 'ParentsStudentViewPage', segment: 'parents-student-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pdf-download/pdf-download.module#PdfDownloadPageModule', name: 'PdfDownloadPage', segment: 'pdf-download', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-notice/personal-notice.module#PersonalNoticePageModule', name: 'PersonalNoticePage', segment: 'personal-notice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal-complaindesk/principal-complaindesk.module#PrincipalComplaindeskPageModule', name: 'PrincipalComplaindeskPage', segment: 'principal-complaindesk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal-examview/principal-examview.module#PrincipalExamviewPageModule', name: 'PrincipalExamviewPage', segment: 'principal-examview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/routine/routine.module#RoutinePageModule', name: 'RoutinePage', segment: 'routine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school-details/school-details.module#SchoolDetailsPageModule', name: 'SchoolDetailsPage', segment: 'school-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school-listing/school-listing.module#SchoolListingPageModule', name: 'SchoolListingPage', segment: 'school-listing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schoolcalender/schoolcalender.module#SchoolcalenderPageModule', name: 'SchoolcalenderPage', segment: 'schoolcalender', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/staff-complain/staff-complain.module#StaffComplainPageModule', name: 'StaffComplainPage', segment: 'staff-complain', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/std-reg/std-reg.module#StdRegPageModule', name: 'StdRegPage', segment: 'std-reg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-library-list/student-library-list.module#StudentLibraryListPageModule', name: 'StudentLibraryListPage', segment: 'student-library-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-login/student-login.module#StudentLoginPageModule', name: 'StudentLoginPage', segment: 'student-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-notice-board/student-notice-board.module#StudentNoticeBoardPageModule', name: 'StudentNoticeBoardPage', segment: 'student-notice-board', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-owndetails/student-owndetails.module#StudentOwndetailsPageModule', name: 'StudentOwndetailsPage', segment: 'student-owndetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/students-tabs/students-tabs.module#StudentsTabsPageModule', name: 'StudentsTabsPage', segment: 'students-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stuff-change-pass/stuff-change-pass.module#StuffChangePassPageModule', name: 'StuffChangePassPage', segment: 'stuff-change-pass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stuff-edit/stuff-edit.module#StuffEditPageModule', name: 'StuffEditPage', segment: 'stuff-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stuff-examduty/stuff-examduty.module#StuffExamdutyPageModule', name: 'StuffExamdutyPage', segment: 'stuff-examduty', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stuff-registration/stuff-registration.module#StuffRegistrationPageModule', name: 'StuffRegistrationPage', segment: 'stuff-registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/staff-login/staff-login.module#StaffLoginPageModule', name: 'StaffLoginPage', segment: 'staff-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/staff-info/staff-info.module#StaffInfoPageModule', name: 'StaffInfoPage', segment: 'staff-info', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_50_ng2_pdf_viewer__["a" /* PdfViewerModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_school_listing_school_listing__["a" /* SchoolListingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_school_details_school_details__["a" /* SchoolDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pdf_download_pdf_download__["a" /* PdfDownloadPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_student_login_student_login__["a" /* StudentLoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_library_list_library_list__["a" /* LibraryListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_personal_notice_personal_notice__["a" /* PersonalNoticePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_live_stream_live_stream__["a" /* LiveStreamPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_routine_routine__["a" /* RoutinePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_parents_login_parents_login__["a" /* ParentsLoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_parents_student_view_parents_student_view__["a" /* ParentsStudentViewPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_parents_child_tabs_parents_child_tabs__["a" /* ParentsChildTabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_student_library_list_student_library_list__["b" /* StudentLibraryListPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_student_notice_board_student_notice_board__["b" /* StudentNoticeBoardPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_account_account__["b" /* default */],
                __WEBPACK_IMPORTED_MODULE_28__pages_account_account__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_parents_account_parents_account__["a" /* ParentsAccountPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_staff_login_staff_login__["a" /* StaffLoginPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_staff_info_staff_info__["a" /* StaffInfoPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_staff_complain_staff_complain__["a" /* StaffComplainPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_get_attendance_get_attendance__["a" /* GetAttendancePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_attendance_list_attendance_list__["a" /* AttendanceListPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_principal_examview_principal_examview__["a" /* PrincipalExamviewPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_principal_complaindesk_principal_complaindesk__["a" /* PrincipalComplaindeskPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_complain_reply_complain_reply__["a" /* ComplainReplyPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_stuff_examduty_stuff_examduty__["a" /* StuffExamdutyPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_schoolcalender_schoolcalender__["a" /* SchoolcalenderPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_students_tabs_students_tabs__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_47__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_std_reg_std_reg__["a" /* StdRegPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_student_library_list_student_library_list__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_student_notice_board_student_notice_board__["a" /* NoticeModalPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_stuff_change_pass_stuff_change_pass__["a" /* StuffChangePassPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_stuff_edit_stuff_edit__["a" /* StuffEditPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_stuff_registration_stuff_registration__["a" /* StuffRegistrationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_3_css_animator__["AnimationService"],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_46__providers_chat_serv_chat_serv__["a" /* ChatServProvider */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_file_transfer__["a" /* FileTransfer */],
                // FileUploadOptions,
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_56__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_transfer__["a" /* Transfer */]
                // Camera,
                // StreamingMedia
            ]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_51__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 215,
	"./af.js": 215,
	"./ar": 216,
	"./ar-dz": 217,
	"./ar-dz.js": 217,
	"./ar-kw": 218,
	"./ar-kw.js": 218,
	"./ar-ly": 219,
	"./ar-ly.js": 219,
	"./ar-ma": 220,
	"./ar-ma.js": 220,
	"./ar-sa": 221,
	"./ar-sa.js": 221,
	"./ar-tn": 222,
	"./ar-tn.js": 222,
	"./ar.js": 216,
	"./az": 223,
	"./az.js": 223,
	"./be": 224,
	"./be.js": 224,
	"./bg": 225,
	"./bg.js": 225,
	"./bm": 226,
	"./bm.js": 226,
	"./bn": 227,
	"./bn.js": 227,
	"./bo": 228,
	"./bo.js": 228,
	"./br": 229,
	"./br.js": 229,
	"./bs": 230,
	"./bs.js": 230,
	"./ca": 231,
	"./ca.js": 231,
	"./cs": 232,
	"./cs.js": 232,
	"./cv": 233,
	"./cv.js": 233,
	"./cy": 234,
	"./cy.js": 234,
	"./da": 235,
	"./da.js": 235,
	"./de": 236,
	"./de-at": 237,
	"./de-at.js": 237,
	"./de-ch": 238,
	"./de-ch.js": 238,
	"./de.js": 236,
	"./dv": 239,
	"./dv.js": 239,
	"./el": 240,
	"./el.js": 240,
	"./en-au": 241,
	"./en-au.js": 241,
	"./en-ca": 242,
	"./en-ca.js": 242,
	"./en-gb": 243,
	"./en-gb.js": 243,
	"./en-ie": 244,
	"./en-ie.js": 244,
	"./en-il": 245,
	"./en-il.js": 245,
	"./en-nz": 246,
	"./en-nz.js": 246,
	"./eo": 247,
	"./eo.js": 247,
	"./es": 248,
	"./es-do": 249,
	"./es-do.js": 249,
	"./es-us": 250,
	"./es-us.js": 250,
	"./es.js": 248,
	"./et": 251,
	"./et.js": 251,
	"./eu": 252,
	"./eu.js": 252,
	"./fa": 253,
	"./fa.js": 253,
	"./fi": 254,
	"./fi.js": 254,
	"./fo": 255,
	"./fo.js": 255,
	"./fr": 256,
	"./fr-ca": 257,
	"./fr-ca.js": 257,
	"./fr-ch": 258,
	"./fr-ch.js": 258,
	"./fr.js": 256,
	"./fy": 259,
	"./fy.js": 259,
	"./gd": 260,
	"./gd.js": 260,
	"./gl": 261,
	"./gl.js": 261,
	"./gom-latn": 262,
	"./gom-latn.js": 262,
	"./gu": 263,
	"./gu.js": 263,
	"./he": 264,
	"./he.js": 264,
	"./hi": 265,
	"./hi.js": 265,
	"./hr": 266,
	"./hr.js": 266,
	"./hu": 267,
	"./hu.js": 267,
	"./hy-am": 268,
	"./hy-am.js": 268,
	"./id": 269,
	"./id.js": 269,
	"./is": 270,
	"./is.js": 270,
	"./it": 271,
	"./it.js": 271,
	"./ja": 272,
	"./ja.js": 272,
	"./jv": 273,
	"./jv.js": 273,
	"./ka": 274,
	"./ka.js": 274,
	"./kk": 275,
	"./kk.js": 275,
	"./km": 276,
	"./km.js": 276,
	"./kn": 277,
	"./kn.js": 277,
	"./ko": 278,
	"./ko.js": 278,
	"./ku": 279,
	"./ku.js": 279,
	"./ky": 280,
	"./ky.js": 280,
	"./lb": 281,
	"./lb.js": 281,
	"./lo": 282,
	"./lo.js": 282,
	"./lt": 283,
	"./lt.js": 283,
	"./lv": 284,
	"./lv.js": 284,
	"./me": 285,
	"./me.js": 285,
	"./mi": 286,
	"./mi.js": 286,
	"./mk": 287,
	"./mk.js": 287,
	"./ml": 288,
	"./ml.js": 288,
	"./mn": 289,
	"./mn.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 291,
	"./ms-my": 292,
	"./ms-my.js": 292,
	"./ms.js": 291,
	"./mt": 293,
	"./mt.js": 293,
	"./my": 294,
	"./my.js": 294,
	"./nb": 295,
	"./nb.js": 295,
	"./ne": 296,
	"./ne.js": 296,
	"./nl": 297,
	"./nl-be": 298,
	"./nl-be.js": 298,
	"./nl.js": 297,
	"./nn": 299,
	"./nn.js": 299,
	"./pa-in": 300,
	"./pa-in.js": 300,
	"./pl": 301,
	"./pl.js": 301,
	"./pt": 302,
	"./pt-br": 303,
	"./pt-br.js": 303,
	"./pt.js": 302,
	"./ro": 304,
	"./ro.js": 304,
	"./ru": 305,
	"./ru.js": 305,
	"./sd": 306,
	"./sd.js": 306,
	"./se": 307,
	"./se.js": 307,
	"./si": 308,
	"./si.js": 308,
	"./sk": 309,
	"./sk.js": 309,
	"./sl": 310,
	"./sl.js": 310,
	"./sq": 311,
	"./sq.js": 311,
	"./sr": 312,
	"./sr-cyrl": 313,
	"./sr-cyrl.js": 313,
	"./sr.js": 312,
	"./ss": 314,
	"./ss.js": 314,
	"./sv": 315,
	"./sv.js": 315,
	"./sw": 316,
	"./sw.js": 316,
	"./ta": 317,
	"./ta.js": 317,
	"./te": 318,
	"./te.js": 318,
	"./tet": 319,
	"./tet.js": 319,
	"./tg": 320,
	"./tg.js": 320,
	"./th": 321,
	"./th.js": 321,
	"./tl-ph": 322,
	"./tl-ph.js": 322,
	"./tlh": 323,
	"./tlh.js": 323,
	"./tr": 324,
	"./tr.js": 324,
	"./tzl": 325,
	"./tzl.js": 325,
	"./tzm": 326,
	"./tzm-latn": 327,
	"./tzm-latn.js": 327,
	"./tzm.js": 326,
	"./ug-cn": 328,
	"./ug-cn.js": 328,
	"./uk": 329,
	"./uk.js": 329,
	"./ur": 330,
	"./ur.js": 330,
	"./uz": 331,
	"./uz-latn": 332,
	"./uz-latn.js": 332,
	"./uz.js": 331,
	"./vi": 333,
	"./vi.js": 333,
	"./x-pseudo": 334,
	"./x-pseudo.js": 334,
	"./yo": 335,
	"./yo.js": 335,
	"./zh-cn": 336,
	"./zh-cn.js": 336,
	"./zh-hk": 337,
	"./zh-hk.js": 337,
	"./zh-tw": 338,
	"./zh-tw.js": 338
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 451;

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalNoticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendance_attendance__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routine_routine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_owndetails_student_owndetails__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_document_viewer__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__student_notice_board_student_notice_board__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












/**
 * Generated class for the PersonalNoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalNoticePage = /** @class */ (function () {
    function PersonalNoticePage(navCtrl, navParams, viewCtrl, document, menuCtrl, loadingController, modalCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.document = document;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.allNotice = [];
        this.allPersonalNotice = [];
        this.initLoader();
    }
    PersonalNoticePage.prototype.ngOnInit = function () {
        this.getNoticeList();
        this.showNothingMsg = false;
    };
    PersonalNoticePage.prototype.ngAfterViewInit = function () {
        console.log('after view init');
    };
    PersonalNoticePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalNoticePage');
    };
    PersonalNoticePage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    PersonalNoticePage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__attendance_attendance__["a" /* AttendancePage */]);
    };
    PersonalNoticePage.prototype.goToRoutine = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__routine_routine__["a" /* RoutinePage */]);
    };
    PersonalNoticePage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
    };
    PersonalNoticePage.prototype.getNoticeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoading(true);
                        return [4 /*yield*/, this.getUserDataFromLocal()];
                    case 1:
                        _a.sent();
                        header = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
                        header.set("Content-Type", "application/json");
                        data = {
                            org_id: this.localUserData.org_code,
                            user_type_id: this.localUserData.user_type_id,
                            master_id: this.localUserData.master_id
                        };
                        // console.log('Data sent : ', data);      
                        this.http
                            .post(__WEBPACK_IMPORTED_MODULE_7__apiUrl__["a" /* apiUrl */].url + "notice/get", data, { headers: header })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var _a, _b, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        console.log('personal notice data : ', data);
                                        if (!(data.data.length > 1)) return [3 /*break*/, 6];
                                        _a = this;
                                        return [4 /*yield*/, data.data];
                                    case 1:
                                        _a.allNotice = _d.sent();
                                        _b = this;
                                        return [4 /*yield*/, this.allNotice.filter(function (item) {
                                                return item.notiece_type_id == 3;
                                            })];
                                    case 2:
                                        _b.allPersonalNotice = _d.sent();
                                        if (!(this.allPersonalNotice.length > 0)) return [3 /*break*/, 4];
                                        this.showNothingMsg = false;
                                        _c = this;
                                        return [4 /*yield*/, this.allNotice.filter(function (item) {
                                                return item.notiece_type_id == 3;
                                            })];
                                    case 3:
                                        _c.allPersonalNotice = _d.sent();
                                        this.allPersonalNotice.forEach(function (item) {
                                            item.timeDifference = _this.createJavascriptDate(item.created_at);
                                        });
                                        return [3 /*break*/, 5];
                                    case 4:
                                        this.showNothingMsg = true;
                                        _d.label = 5;
                                    case 5:
                                        // console.log('personal notice with time defference : ', this.allPersonalNotice);
                                        this.presentLoading(false);
                                        return [3 /*break*/, 7];
                                    case 6:
                                        this.presentLoading(false);
                                        _d.label = 7;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    PersonalNoticePage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);      
    };
    PersonalNoticePage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    // |------------------------------------------------------------------
    // |--------- show loading method(control show loading) ----------
    // |------------------------------------------------------------------
    PersonalNoticePage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 500);
        }
    };
    PersonalNoticePage.prototype.presentProfileModal = function (id) {
        // console.log('clicked...', id); 
        var filterNotice = this.allPersonalNotice.filter(function (item) {
            return item.id == id;
        });
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__student_notice_board_student_notice_board__["a" /* NoticeModalPage */], { notice: filterNotice[0] });
        profileModal.present();
    };
    PersonalNoticePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PersonalNoticePage.prototype.showPdf = function (url) {
        this.document.viewDocument(url, 'application/pdf', {});
    };
    PersonalNoticePage.prototype.createJavascriptDate = function (strDate) {
        // let date = await new Date();
        var onlyDate = strDate.substring(0, 10);
        var dateArr = onlyDate.split('-');
        var date = dateArr[0] + dateArr[1] - 1 + dateArr[2];
        console.log('date str : ', date);
        return __WEBPACK_IMPORTED_MODULE_10_moment__(date, "YYYYMMDD").fromNow();
        // let timeStamp = new Date().setFullYear(dateArr[0], dateArr[1]-1, dateArr[2]);  
        // let jsDate = new Date(timeStamp);       
        // return jsDate;
    };
    PersonalNoticePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-personal-notice',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/personal-notice/personal-notice.html"*/'<!--\n  Generated template for the PersonalNoticePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n  	<button ion-button menuToggle color="light">\n     <ion-icon name="menu"></ion-icon>\n   </button>\n    <ion-title>Personal Notice</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n<ion-content>\n  <ion-card color="light" [ripple] *ngFor="let personalNotice of allPersonalNotice" (click)="presentProfileModal(personalNotice.id)">\n    <ion-card-header>\n      <strong>{{personalNotice?.notice?.subject}}</strong>\n    </ion-card-header>\n    \n    <ion-card-content>\n      <p>{{personalNotice?.notice?.text}}</p>\n      <ion-note text-right float-right>{{personalNotice?.timeDifference}}</ion-note>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card text-center *ngIf="showNothingMsg">\n    <p>Nothing To Show</p>\n  </ion-card>\n</ion-content>\n\n\n\n\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">\n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=goToHome()>\n        <img src="assets/imgs/white-icon5.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <!-- <i text-center class="fas fa-boxes fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <!-- <i class="fas fa-box fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/personal-notice/personal-notice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]])
    ], PersonalNoticePage);
    return PersonalNoticePage;
}());

//# sourceMappingURL=personal-notice.js.map

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_attendance_attendance__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_routine_routine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_personal_notice_personal_notice__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_guest_enquiry_guest_enquiry__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_students_tabs_students_tabs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_staff_info_staff_info__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { ListPage } from '../pages/list/list';







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Guest', component: __WEBPACK_IMPORTED_MODULE_9__pages_guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */] },
            // { title: 'List', component: ListPage },
            { title: 'Live-Stream', component: __WEBPACK_IMPORTED_MODULE_5__pages_live_stream_live_stream__["a" /* LiveStreamPage */] },
            { title: 'Attendance', component: __WEBPACK_IMPORTED_MODULE_6__pages_attendance_attendance__["a" /* AttendancePage */] },
            { title: 'Routine', component: __WEBPACK_IMPORTED_MODULE_7__pages_routine_routine__["a" /* RoutinePage */] },
            { title: 'Personal Notice', component: __WEBPACK_IMPORTED_MODULE_8__pages_personal_notice_personal_notice__["a" /* PersonalNoticePage */] },
            { title: 'Log out', component: __WEBPACK_IMPORTED_MODULE_9__pages_guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            var localVal = JSON.parse(localStorage.getItem('userData'));
            if (localVal) {
                if (localVal.user_type_id == 4) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_students_tabs_students_tabs__["a" /* default */];
                }
                if (localVal.user_type_id == 2) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_staff_info_staff_info__["a" /* StaffInfoPage */];
                }
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            _this.statusBar.styleDefault();
            // this.splashScreen.hide();
            // this.splashScreen.show();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title == "Log out") {
            this.logOut();
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.logOut = function () {
        localStorage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header no-padding no-margin>\n    <ion-toolbar no-padding no-margin class="toolbar-nopadding">\n      <ion-title no-padding no-margin >\n        <img src="assets/imgs/student-icon.png"/>\n        <p color="light" style="color:#fff;">User Name</p>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="content-margin">\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" color="light">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n  \n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" ></ion-nav>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ExpandableHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ExpandableHeaderComponent = /** @class */ (function () {
    function ExpandableHeaderComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ExpandableHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ExpandableHeaderComponent.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
            for (var _i = 0, _a = _this.element.nativeElement.children; _i < _a.length; _i++) {
                var headerElement = _a[_i];
                var totalHeight = headerElement.offsetTop + headerElement.clientHeight;
                if (totalHeight > _this.newHeaderHeight && !headerElement.isHidden) {
                    headerElement.isHidden = true;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0');
                }
                else if (totalHeight <= _this.newHeaderHeight && headerElement.isHidden) {
                    headerElement.isHidden = false;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0.7');
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('scrollArea'),
        __metadata("design:type", Object)
    ], ExpandableHeaderComponent.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('headerHeight'),
        __metadata("design:type", Number)
    ], ExpandableHeaderComponent.prototype, "headerHeight", void 0);
    ExpandableHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'expandable-header',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/components/expandable-header/expandable-header.html"*/'<!-- Generated template for the ExpandableHeaderComponent component -->\n\n  <ng-content></ng-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/components/expandable-header/expandable-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ExpandableHeaderComponent);
    return ExpandableHeaderComponent;
}());

//# sourceMappingURL=expandable-header.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ChatServProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatServProvider = /** @class */ (function () {
    function ChatServProvider(http) {
        this.http = http;
        console.log('Hello ChatServProvider Provider');
    }
    ChatServProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ChatServProvider);
    return ChatServProvider;
}());

//# sourceMappingURL=chat-serv.js.map

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routine_routine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parents_student_view_parents_student_view__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__attendance_attendance__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_transfer__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AccountPage = /** @class */ (function () {
    function AccountPage(menuCtrl, navCtrl, navParams, http, loadingController, jsonp, modalCtrl, camera, loadingCtrl, toastCtrl, actionSheetCtrl, platform, file, filePath, transfer) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.jsonp = jsonp;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.file = file;
        this.filePath = filePath;
        this.transfer = transfer;
        this.imageFileName = "assets/imgs/student-icon.png";
        this.lastImage = null;
        this.menuCtrl.enable(false);
        this.initLoader();
    }
    AccountPage.prototype.ngOnInit = function () {
        this.getUserDataFromLocal();
        this.getStudentDetails();
        this.showSelectDepartmentBtn = false;
    };
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.goToPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    AccountPage.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__parents_student_view_parents_student_view__["a" /* ParentsStudentViewPage */]);
    };
    AccountPage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    AccountPage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__attendance_attendance__["a" /* AttendancePage */]);
    };
    AccountPage.prototype.goToRoutine = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__routine_routine__["a" /* RoutinePage */]);
    };
    AccountPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        if (this.localUserData.profile_image) {
            this.profile_image = __WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "public/uploads/profile_pic/" + this.localUserData.profile_image;
        }
        else {
            this.profile_image = "assets/imgs/student-icon.png";
        }
    };
    AccountPage.prototype.getStudentDetails = function () {
        var _this = this;
        this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            'master_id': this.localUserData.master_id
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "student/studentdetail", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('student detail data : ', data);
            if (data.data[0]) {
                _this.presentLoading(false);
                _this.studentDetails = data.data[0];
                if (data.data[0].nameclass) {
                    _this.showSelectDepartmentBtn = false;
                }
                else {
                    _this.showSelectDepartmentBtn = true;
                }
            }
        });
    };
    AccountPage.prototype.getStudentSubjectDetails = function () {
        var _this = this;
        this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            'master_id': this.localUserData.master_id
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "student/studentdetail", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('student subject data : ', data);
            if (data.data[0]) {
                _this.presentLoading(false);
                // this.studentDetails = data.data[0];
                if (data.data[0].nameclass) {
                    _this.showSelectDepartmentBtn = false;
                }
                else {
                    _this.showSelectDepartmentBtn = true;
                }
            }
        });
    };
    AccountPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    AccountPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    AccountPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(ModalPage);
        modal.present();
    };
    AccountPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 30,
            allowEdit: false,
            destinationType: this.camera.DestinationType.FILE_URI,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
            _this.imageFileName = imageData;
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: 'file',
                fileName: 'ionicfile.jpg',
                chunkedMode: false,
                mimeType: "image/jpeg",
                headers: {},
                params: {
                    id: _this.localUserData.id
                },
            };
            // this.presentLoading(true);
            fileTransfer.upload(_this.imageURI, __WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "user/addprofileimage", options)
                .then(function (data) {
                if (data) {
                    // alert(JSON.stringify(data.response));
                    var parseData = JSON.parse(data.response);
                    // this.presentLoading(false);
                    _this.imageFileName = __WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "public/uploads/profile_pic/" + parseData.data.profile_image;
                    //alert(this.imageFileName);
                    localStorage.removeItem('userData');
                    localStorage.setItem('userData', JSON.stringify(parseData.data));
                    _this.getUserDataFromLocal();
                    _this.presentToast("Image uploaded successfully");
                }
            }, function (err) {
                console.log(err);
                alert(JSON.stringify(err));
            });
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    AccountPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="back-ground">\n      <img class="profile-image" src="{{profile_image}}" *ngIf="profile_image"/>\n      <button ion-button icon-only round small color="light" class="camera-icon" (click)="getImage()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n      <!-- <button ion-button block outline color="blue" class="mt-10 ml-10 mr-10" (click)="getImage()">Get Image</button>\n      <button ion-button block outline color="blue" class="mt-10 ml-10 mr-10" (click)="uploadFile()">Upload Image</button> -->\n      <h5 text-center text-uppercase color="light">{{studentDetails?.f_name}} {{studentDetails?.l_name}}</h5>\n      <p text-center text-uppercase no-padding no-margin>{{studentDetails?.user_name}}</p>\n      <p text-center text-uppercase no-padding no-margin>{{studentDetails?.nameclass.class.class_name}} {{studentDetails?.nameclass.section.sec_name}}</p>\n      <p text-center text-uppercase no-padding no-margin>Semester : {{studentDetails?.nameclass?.sem_id?.sem_no}}</p>\n      <p text-center>\n        <button class="btnStyle" ion-button color="dark" outline (click)="openModal()" *ngIf="!studentDetails?.nameclass.class.class_name">Select Department</button>\n      </p>\n  </div>\n\n  <ion-card>\n    <ion-card-content>\n        <p><strong>Email</strong>: {{studentDetails?.email}}</p>\n        <p><strong>Mobile</strong>: {{localUserData?.mobile_no}}</p>\n        <p><strong>Adhaar</strong>: {{studentDetails?.adhar_no}}</p>\n        <p><strong>Caste</strong>: {{studentDetails?.cast_category}}</p>\n        <p><strong>DOB</strong>: {{studentDetails?.dob}}</p>\n        <p><strong>Gender</strong>: {{studentDetails?.gender}}</p>\n        <p><strong>Roll No</strong>: {{studentDetails?.roll_no}}</p>\n        <p><strong>Registration No</strong>: {{studentDetails?.registration_no}}</p>\n        <button ion-button type="submit" block outline color="blue" class="mt-10" (click)=goToPassword()>Change Password</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n\n<!-- \n<ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n    <ion-grid text-center >\n      <ion-row>\n        <div col-3 (click)=gotoHome()>\n          <img src="assets/imgs/white-icon5.png">\n          <p class="footer-p">Home</p>\n        </div>\n        <div col-3 (click)=gotoLiveStream()>\n          <img src="assets/imgs/white-icon1.png">\n          <p class="footer-p">Live Streaming</p>\n        </div>\n        <div col-3 (click)=goToAttendance()>\n          <img src="assets/imgs/white-icon2.png">\n          <p  class="footer-p">Attendance</p>\n        </div>\n        <div col-3 (click)=goToRoutine()>\n          <img src="assets/imgs/white-icon3.png">\n          <p  class="footer-p">Routine</p>\n        </div>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_transfer__["a" /* Transfer */]])
    ], AccountPage);
    return AccountPage;
}());
/* harmony default export */ __webpack_exports__["b"] = (AccountPage);
var ModalPage = /** @class */ (function () {
    function ModalPage(platform, params, viewCtrl, menuCtrl, navCtrl, navParams, http, loadingController, jsonp, modalCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.jsonp = jsonp;
        this.modalCtrl = modalCtrl;
        this.orgClassSectionList = [];
        this.sortArray = [];
        this.filteredArrayForClassList = [];
        this.filteredArrayForSectionList = [];
        // var characters = [];
        // this.character = characters[this.params.get('charNum')];
    }
    ModalPage.prototype.ngOnInit = function () {
        this.sortArray = [];
        this.filteredArrayForClassList = [];
        this.getUserDataFromLocal();
        // this.getStudentDetails();
        // this.showSelectDepartmentBtn = false;
        this.getShiftLists();
        this.getClassList();
    };
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    // ########################################################################
    //    -------------- getting user data from localstorage ---------------
    // ########################################################################
    ModalPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);    
    };
    // ########################################################################
    //     ------------------ getting all shift list here -----------------
    // ########################################################################
    ModalPage.prototype.getShiftLists = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            org_id: this.localUserData.org_code
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "shift/orgshiftlist", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // console.log("Org shift list ", data.data);
            _this.orgShiftLists = data.data;
        });
    };
    // ########################################################################
    //     ------------------ getting all class list here -----------------
    // ########################################################################
    ModalPage.prototype.getClassList = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            org_id: this.localUserData.org_code
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "classsection/getall", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.orgClassSectionList = data.data;
            // console.log("Org class list ", data.data);
            _this.createSortArray(_this.orgClassSectionList);
        });
    };
    // ########################################################################
    //     ------------------ after choose shift -----------------
    // ########################################################################
    ModalPage.prototype.onChooseShift = function (e) {
        this.sortArray = [];
        this.shiftID = e;
        // console.log(e);
        // console.log(this.allSelected);        
        // console.log('shift : ', e);  
        // let ifAllSelect = e.value.filter((ele)=>{
        //   return ele == "all";
        // });
        // if(ifAllSelect.length > 0){
        //   this.sortArray = [];
        //   this.selectedData.selectedShifts = this.orgShiftLists;
        //   this.createSortArray(this.orgClassSectionList);
        //   // console.log("filter class list for choosen shift : ", this.sortArray); 
        // // }else{
        //   this.sortArray = [];
        //   this.selectedData.selectedShifts = e.value;
        this.filteredArrayForClassList = this.orgClassSectionList.filter(function (ele) {
            return ele.org_shift_id == e;
        });
        // console.log(this.filteredArrayForClassList);
        this.createSortArray(this.filteredArrayForClassList);
        // }
        // console.log('sort array : ', this.sortArray);
    };
    // ########################################################################
    //      ------------------ After choose class/stream -----------------
    // ########################################################################
    ModalPage.prototype.onChooseClassStream = function (e) {
        // console.log(e); 
        this.filteredArrayForSectionList = [];
        this.classStreamID = e;
        // if(e.value == "all"){
        //   this.filteredArrayForSectionList = [
        //     { sec_id: "all", section_name: "All" }
        //   ];
        //   return;
        // }
        this.filteredArrayForSectionList = this.sortArray.filter(function (element) {
            return element.class_id == e;
        });
        if (this.filteredArrayForSectionList.length > 0) {
            this.filteredArrayForSectionList = this.filteredArrayForSectionList[0].sections;
        }
        // console.log('filter section array : ', this.filteredArrayForSectionList);
    };
    // ########################################################################
    // ----------- after choosing section function -----------
    // ########################################################################
    ModalPage.prototype.onChooseSection = function (e) {
        this.classIndexId = e;
    };
    // ########################################################################
    // ----------- submit department function -----------
    // ########################################################################
    ModalPage.prototype.submitDepartment = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            id: this.classIndexId,
            std_id: this.localUserData.master_id,
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "student/classupdate", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // console.log("after add data : ", data);
        });
    };
    // ########################################################################
    // ----------- sorting class list array here for looping -----------
    // ########################################################################
    ModalPage.prototype.createSortArray = function (arr) {
        var _this = this;
        // var rs = 1;
        arr.forEach(function (ele) {
            var obj = {
                class_id: ele.class_id,
                sec_id: ele.sec_id,
                class_name: ele.class.class_name,
                shift_id: ele.org_shift_id,
                sections: [
                    {
                        section_name: ele.section.sec_name,
                        sec_id: ele.sec_id,
                        classSectionIndexId: ele.id
                    }
                ]
            };
            var check_exist = _this.sortArray.filter(function (element) {
                return element.class_id == ele.class_id;
            });
            if (check_exist.length > 0) {
                // console.log('exist');
                var i = _this.sortArray.indexOf(check_exist[0]);
                _this.sortArray.splice(i, 1);
                check_exist[0].sections.push({
                    section_name: ele.section.sec_name,
                    sec_id: ele.sec_id,
                    classSectionIndexId: ele.id
                });
                _this.sortArray.push(check_exist[0]);
            }
            else {
                _this.sortArray.push(obj);
            }
        });
        // console.log('class section : ', this.sortArray);    
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/modal.html"*/'<ion-header>\n        <ion-toolbar>\n          <ion-title>Add Department</ion-title>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n      <ion-item>\n        <ion-label>Shift</ion-label>\n        <ion-select [(ngModel)]="shift" (ionChange)="onChooseShift($event)">\n          <ng-container *ngFor="let shift of orgShiftLists">\n            <ion-option value="{{shift?.orgshift[0]?.id}}" *ngIf="shift?.orgshift[0]?.id">{{shift?.name}}</ion-option>\n          </ng-container>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Class/Stream</ion-label>\n        <ion-select [(ngModel)]="classStream" (ionChange)="onChooseClassStream($event)">\n          <ion-option *ngFor="let class of sortArray" value="{{class?.class_id}}">{{class?.class_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Section</ion-label>\n        <ion-select [(ngModel)]="section" (ionChange)="onChooseSection($event)">\n          <ion-option *ngFor="let section of filteredArrayForSectionList" value="{{section?.classSectionIndexId}}">{{section?.section_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button type="submit" block outline color="blue" class="mt-10" (click)="submitDepartment()">Submit</button>\n</ion-content>\n\n\n\n<!-- filteredArrayForSectionList -->\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestEnquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__school_listing_school_listing__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__school_details_school_details__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__student_owndetails_student_owndetails__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__staff_info_staff_info__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the GuestEnquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuestEnquiryPage = /** @class */ (function () {
    function GuestEnquiryPage(navCtrl, navParams, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.isSearchbarOpened = false;
        this.searchQuery = "";
        this.items = [];
        this.list = [];
        this.idList = [];
        this.getUserDataFromLocal();
        this.getData();
    }
    GuestEnquiryPage.prototype.getData = function () {
        var _this = this;
        this.http
            .get(__WEBPACK_IMPORTED_MODULE_6__apiUrl__["a" /* apiUrl */].url + "org/alllist")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.allSchoolsList = data;
            console.log("student list : ", _this.allSchoolsList);
            data.data.forEach(function (ele) {
                var obj = {
                    id: ele.id,
                    name: ele.org_name
                };
                _this.list.push(obj);
            });
        });
    };
    GuestEnquiryPage.prototype.initializeItems = function () {
        this.items = this.list;
    };
    GuestEnquiryPage.prototype.onSearchButtonClick = function () {
        var _this = this;
        this.isSearchbarOpened = true;
        setTimeout(function () {
            _this.searchbox.setFocus();
        }, 150);
    };
    GuestEnquiryPage.prototype.schoolsDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__school_details_school_details__["a" /* SchoolDetailsPage */], {
            id: id
        }, { animation: "transition", duration: 1000, direction: "forward" });
    };
    GuestEnquiryPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad GuestEnquiryPage");
    };
    GuestEnquiryPage.prototype.goToListing = function () {
        if (this.country == null && this.state == null) {
            this.presentToast("State and Country Can't be Blank");
        }
        else {
            var data = {
                country: this.country,
                state: this.state,
                jela: this.jela
            };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__school_listing_school_listing__["a" /* SchoolListingPage */], { data: data });
        }
    };
    GuestEnquiryPage.prototype.goToHome = function () {
        if (this.localUserData) {
            if (this.localUserData.user_type_id == 1) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__staff_info_staff_info__["a" /* StaffInfoPage */]);
            }
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
        }
    };
    GuestEnquiryPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);      
    };
    GuestEnquiryPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        if (ev.target.value == "") {
            this.isSearchbarOpened = false;
            this.items = [];
            return;
        }
        this.isSearchbarOpened = true;
        // console.log('value : ', ev.target.value);
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // console.log(this.items);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != "") {
            this.items = this.items.filter(function (item) {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
            console.log('items : ...', this.items);
        }
    };
    GuestEnquiryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", Object)
    ], GuestEnquiryPage.prototype, "searchbox", void 0);
    GuestEnquiryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-guest-enquiry",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/guest-enquiry/guest-enquiry.html"*/'<!--\n  Generated template for the GuestEnquiryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		<ion-navbar color="blue">\n			<ion-title>Submit Enquiry</ion-title>\n			\n			<ion-buttons end (click)=goToHome()>\n				<button ion-button icon-only>\n					<ion-icon name="home" color="light"></ion-icon>\n				</button>\n			</ion-buttons>\n			<!-- <ion-searchbar #search (ionInput)="getItems($event)" *ngIf="isSearchbarOpened" showCancelButton="true" (ionCancel)="isSearchbarOpened=false"></ion-searchbar> -->\n		</ion-navbar>\n		<!-- <div class="search-result" [ngStyle]="{\'display\':isSearchbarOpened ? \'block\' : \'none\' }">\n			<ion-list>\n			<ion-item *ngFor="let item of items" (click)="schoolsDetails(item.id)">\n				{{ item.name }}\n			</ion-item>\n		</ion-list>\n		</div> -->\n</ion-header>\n\n\n<ion-content class="item-center" padding color="light">\n	<img src="assets/imgs/inunco-dark.png" class="img-width"/>\n	<!-- <h1 class="heading" text-center text-uppercase>CyberHub</h1> -->\n	<!-- <img src="assets/imgs/bk.png" class="img-width" /> -->\n	<div class="enquiry-form">\n			<h1 text-center text-uppercase margin-bottom color="blue">Search Organization</h1>\n\n				<ion-input #search placeholder="Search" (keyup)="getItems($event)" (click)="onSearchButtonClick()"></ion-input>\n				<!-- <div class="search-result"> -->\n					<ion-list class="search-result" [ngStyle]="{\'display\':isSearchbarOpened ? \'block\' : \'none\' }">\n						<ion-item *ngFor="let item of items" (click)="schoolsDetails(item.id)">\n								{{ item.name }}\n						</ion-item>\n					</ion-list>\n				<!-- </div> -->\n\n		 <h1 text-center text-uppercase margin-bottom color="blue">Find Your Organization</h1>\n		 \n	 <form>\n	 	<ion-item class="select-css">\n		  <ion-label>Country</ion-label>\n		  <ion-select [(ngModel)]="country" name="country">\n		    <ion-option value="">India</ion-option>		    \n		  </ion-select>\n		</ion-item>\n\n	 	<ion-item class="select-css">\n	 		<ion-label>State</ion-label>\n		  <ion-select [(ngModel)]="state" name="state">\n		    <ion-option value="">West Bangal</ion-option>		    \n		  </ion-select>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>District</ion-label>\n			<ion-select [(ngModel)]="dist" name="dist">\n		    <ion-option value="">West Bangal</ion-option>		    \n		  </ion-select>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>City</ion-label>\n			<ion-select [(ngModel)]="city" name="city">\n		    <ion-option value="">West Bangal</ion-option>		    \n		  </ion-select>\n		</ion-item>\n\n		 <button ion-button type="submit" block outline color="blue" margin-top (click)=goToListing()>Submit Enquiry</button>\n		 <button ion-button type="submit" block outline color="blue" (click)=goToHome()>Back To Home</button>\n	</form>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/guest-enquiry/guest-enquiry.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], GuestEnquiryPage);
    return GuestEnquiryPage;
}());

//# sourceMappingURL=guest-enquiry.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stuff_change_pass_stuff_change_pass__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stuff_edit_stuff_edit__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ParentsAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParentsAccountPage = /** @class */ (function () {
    function ParentsAccountPage(navCtrl, navParams, menuCtrl, loadingController, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.menuCtrl.enable(true);
        this.initLoader();
    }
    ParentsAccountPage.prototype.ngOnInit = function () {
        this.getUserDataFromLocal();
        this.getTeacherDetails();
    };
    ParentsAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParentsAccountPage');
    };
    ParentsAccountPage.prototype.goToPassword = function () {
        console.log('change pass...');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__stuff_change_pass_stuff_change_pass__["a" /* StuffChangePassPage */]);
    };
    ParentsAccountPage.prototype.goToEditProfile = function () {
        console.log('edit profile...');
        var editData = {
            id: this.teacherDetails.id,
            fName: this.teacherDetails.f_name,
            lName: this.teacherDetails.l_name,
            shortName: this.teacherDetails.short_name,
            qualification: this.teacherDetails.qualification,
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__stuff_edit_stuff_edit__["a" /* StuffEditPage */], { data: editData });
    };
    ParentsAccountPage.prototype.getTeacherDetails = function () {
        var _this = this;
        this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            'master_id': this.localUserData.master_id,
            'org_id': this.localUserData.org_code
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "staff/details", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.data[0]) {
                _this.presentLoading(false);
                _this.teacherDetails = data.data[0];
                console.log('student details : ', data.data[0]);
                // if(data.data[0].nameclass){
                //   this.showSelectDepartmentBtn = false;
                // }else{
                //   this.showSelectDepartmentBtn = true;
                // }
            }
        });
    };
    ParentsAccountPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    ParentsAccountPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    ParentsAccountPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);    
    };
    ParentsAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-parents-account',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-account/parents-account.html"*/'<!--\n  Generated template for the ParentsAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="back-ground">\n      <img src="assets/imgs/student-icon.png"/>\n      <h5 text-center text-uppercase color="light">{{teacherDetails?.name}}</h5>\n      <p text-center text-uppercase>Register Id: {{teacherDetails?.user_name}}</p>\n  </div>\n\n  <ion-card>\n  <ion-card-content>\n      <p><strong>Email</strong>: {{teacherDetails?.email}}</p>\n      <p><strong>Aadhar</strong>: {{teacherDetails?.adhar_no}}</p>\n      <p><strong>Mobile</strong>: 1234567890</p>\n      <p><strong>Gender</strong>: {{teacherDetails?.gender}}</p>\n      <p><strong>qualification</strong>: {{teacherDetails?.qualification}}</p>\n      <p><strong>Short Name</strong>: {{teacherDetails?.short_name}}</p>\n      <br/>\n      <button ion-button type="submit" block outline color="blue" class="mt-10" (click)=goToPassword()>Change Password</button>\n      <button ion-button type="submit" block outline color="blue" class="mt-10" (click)=goToEditProfile()>Edit Profile</button>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=gotoHome()>\n        <img src="assets/imgs/white-icon5.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <!-- <i text-center class="fas fa-boxes fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <!-- <i class="fas fa-box fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-account/parents-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ParentsAccountPage);
    return ParentsAccountPage;
}());

//# sourceMappingURL=parents-account.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__school_details_school_details__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apiUrl__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SchoolListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchoolListingPage = /** @class */ (function () {
    function SchoolListingPage(navCtrl, navParams, http, toastCtrl, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
    }
    SchoolListingPage.prototype.ionViewDidLoad = function () {
        this.initLoader();
        var data = this.navParams.get("data");
        // console.log(data);
        this.getOrganization(data);
        console.log("ionViewDidLoad SchoolListingPage");
    };
    SchoolListingPage.prototype.goToListingDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__school_details_school_details__["a" /* SchoolDetailsPage */], { id: id });
    };
    SchoolListingPage.prototype.getOrganization = function (data) {
        var _this = this;
        this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_5__apiUrl__["a" /* apiUrl */].url + "org/search", data, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.data) {
                _this.presentLoading(false);
                _this.orgList = data.data;
                console.log(_this.orgList);
            }
        });
    };
    SchoolListingPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: "hide",
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
        });
    };
    SchoolListingPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 500);
        }
    };
    SchoolListingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-school-listing",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/school-listing/school-listing.html"*/'<!--\n  Generated template for the SchoolListingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>List of School</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list>\n  <ion-item *ngFor="let item of orgList" (click)=goToListingDetails(item.id)>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/1-512.png">\n    </ion-thumbnail>\n    <h2>{{item.org_name}}</h2>\n    <p>{{item.org_city}}, {{item.jela}} • {{item.estd}}</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n  <!-- <ion-item >\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/1-512.png">\n    </ion-thumbnail>\n    <h2>aaa</h2>\n    <p>aaa, vvv • 1234</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item> -->\n  \n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/school-listing/school-listing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SchoolListingPage);
    return SchoolListingPage;
}());

//# sourceMappingURL=school-listing.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_download_pdf_download__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_list_library_list__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__schoolcalender_schoolcalender__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__student_notice_board_student_notice_board__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__student_owndetails_student_owndetails__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__staff_info_staff_info__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SchoolDetailsPage = /** @class */ (function () {
    function SchoolDetailsPage(navCtrl, navParams, http, loadingController, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.getUserDataFromLocal();
        this.schoolId = navParams.get('id');
        this.getDetails(this.schoolId);
        this.initLoader();
        this.menuCtrl.enable(false);
    }
    SchoolDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchoolDetailsPage');
    };
    SchoolDetailsPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    SchoolDetailsPage.prototype.getDetails = function (id) {
        var _this = this;
        // this.presentLoading(true);
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            org_id: id,
        };
        console.log('data : ', data);
        this.http.post(__WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "org/getdetail", data, { headers: header }).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // this.presentLoading(false);
            _this.schoolDetails = data.data[0];
            console.log(_this.schoolDetails);
        });
    };
    SchoolDetailsPage.prototype.goToAllPdf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pdf_download_pdf_download__["a" /* PdfDownloadPage */], {
            id: this.schoolId
        });
    };
    SchoolDetailsPage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    SchoolDetailsPage.prototype.goToLibrary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__library_list_library_list__["a" /* LibraryListPage */], { id: this.schoolId });
    };
    SchoolDetailsPage.prototype.goToCalender = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__schoolcalender_schoolcalender__["a" /* SchoolcalenderPage */], {
            id: this.schoolId
        });
    };
    SchoolDetailsPage.prototype.goToHome = function () {
        if (this.localUserData) {
            if (this.localUserData.user_type_id == 1) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__staff_info_staff_info__["a" /* StaffInfoPage */]);
            }
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
        }
    };
    SchoolDetailsPage.prototype.goToNotice = function () {
        console.log("org ID : ", this.schoolId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__student_notice_board_student_notice_board__["b" /* StudentNoticeBoardPage */], { id: this.schoolId });
    };
    SchoolDetailsPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);      
    };
    SchoolDetailsPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 500);
        }
    };
    SchoolDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-school-details',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/school-details/school-details.html"*/'<!--\n  Generated template for the SchoolDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n     <!--  <expandable-header [scrollArea]="mycontent" headerHeight="125">\n        <img src="assets/imgs/SCHOOLS-Banner-Images.jpg"/>\n      </expandable-header> -->\n      <ion-title>College Details</ion-title>\n      <ion-buttons end (click)=goToHome()>\n          <button ion-button icon-only>\n            <ion-icon name="home" color="light"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content fullscreen="" #mycontent="">\n\n<!-- <ion-card>\n  <img src="assets/imgs/SCHOOLS-Banner-Images.jpg"/>\n  <ion-card-content>\n    <ion-card-title>\n\n      {{ schoolDetails && schoolDetails[0]?.school_name }}\n      </ion-card-title>\n      <p><strong>Address</strong>: {{schoolDetails.org_address}}</p>\n      <p><strong>Email</strong>: {{schoolDetails.org_address}}</p>\n      <p><strong>Mobile</strong>: {{schoolDetails.org_address}}</p>\n\n      <p>The most popular industrial group ever, and largely responsible for bringing the music to a mass audience. The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n      </p>\n  </ion-card-content>\n</ion-card> -->\n\n\n  <!-- <ion-card>\n    <img [src]="schoolDetails?.org_img"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{schoolDetails?.org_name}}\n      </ion-card-title>\n        <div float-right >\n          <p [ngStyle]="{\'font-size\': \'24px\'}">\n            <ion-icon name="cloud"></ion-icon>\n          17 °C</p>\n        </div>\n        <div [innerHtml]="schoolDetails?.org_text"></div>\n        <p><strong>About</strong> : </p>\n        <div [innerHtml]="schoolDetails?.org_about" class="mt-4"></div>\n    </ion-card-content>\n    \n  </ion-card> -->\n\n\n  <ion-card>\n    <img [src]="schoolDetails?.org_logo"/>\n    <ion-card-content>\n        <ion-card-title>\n          {{schoolDetails?.org_name}}\n        </ion-card-title>        \n        <p><strong>Land Mark</strong>: {{schoolDetails?.landmark}}</p>\n        <p><strong>City</strong>: {{schoolDetails?.org_city}}</p>\n        <p><strong>District</strong>: {{schoolDetails?.district?.name}}</p>\n        <p><strong>Country</strong>: {{schoolDetails?.country?.name}}</p>\n        \n        <div float-right >\n          <p [ngStyle]="{\'font-size\': \'24px\'}">\n            <ion-icon name="cloud"></ion-icon>\n          17 °C</p>\n        </div>\n        <p ><strong>Email</strong>: {{schoolDetails?.email}}</p>\n        <p><strong>College Phone</strong>: {{schoolDetails?.phone_no}}</p>\n        <p><strong>Website</strong>: {{schoolDetails?.website}}</p>\n        <div [innerHtml]="schoolDetails?.org_text"></div>\n        <p><strong>About</strong> : </p>\n        <div [innerHtml]="schoolDetails?.org_about" class="mt-4"></div>\n    </ion-card-content>  \n  </ion-card>\n\n\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col col-md-4 class="icon-center" (click)=gotoLiveStream()>\n        <img src="assets/imgs/icon6.png"/>\n        <p>Live Streaming</p>\n      </ion-col>\n      <ion-col col-md-4 class="icon-center" (click)=goToAllPdf()>\n        <img src="assets/imgs/icon2.png"/>\n        <p>Notice Board</p>\n      </ion-col>\n      <ion-col col-md-4 class="icon-center" (click)=goToLibrary()>\n        <img src="assets/imgs/icon.png"/>\n        <p>Library</p>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>      \n      <ion-col col-md-4 class="icon-center">\n        <img src=""/>\n        <p></p>\n      </ion-col>\n      <ion-col col-md-4 class="icon-center">\n        <img src=""/>\n        <p></p>\n      </ion-col>\n      <ion-col col-md-4 class="icon-center">\n        <img src=""/>\n        <p></p>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n<!-- <ion-grid text-center>\n  <button ion-button color="blue" (click)=goToAllPdf()>NOTICE BOARD</button>\n  <button ion-button color="blue" (click)=goToLibrary()>LIBRARY MANAGEMENT</button>\n</ion-grid> -->\n\n</ion-content>\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">\n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=goToNotice()>\n        <i text-center class="fas fa-home fa-inverse fa-lg"></i>\n        <p class="footer-p">Notice</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <i text-center class="fas fa-video fa-inverse fa-lg"></i>\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToLibrary()>\n        <i text-center class="fas fa-align-justify fa-inverse fa-lg"></i>\n        <p  class="footer-p">Library</p>\n      </div>\n      <div col-3 (click)=goToCalender()>\n        <i text-center class="far fa-calendar-alt fa-inverse fa-lg"></i>\n        <p  class="footer-p">Calender</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/school-details/school-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], SchoolDetailsPage);
    return SchoolDetailsPage;
}());

//# sourceMappingURL=school-details.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_library_list_student_library_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__student_owndetails_student_owndetails__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__staff_info_staff_info__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/**
 * Generated class for the LibraryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LibraryListPage = /** @class */ (function () {
    function LibraryListPage(navCtrl, navParams, menu, http, alertCtrl, loadingController, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.allBookList = [];
        this.allBook = [];
        this.page = 1;
        this.perPage = 5;
        this.totalData = 0;
        this.totalPage = 0;
        this.menu.enable(false);
        this.getUserDataFromLocal();
        this.schoolId = navParams.get('id');
        this.initLoader();
        for (var i = 0; i < 5; i++) {
            this.allBookList.push(this.allBookList.length);
        }
    }
    LibraryListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LibraryListPage');
    };
    LibraryListPage.prototype.goToHome = function () {
        if (this.localUserData) {
            if (this.localUserData.user_type_id == 1) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__staff_info_staff_info__["a" /* StaffInfoPage */]);
            }
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
        }
    };
    LibraryListPage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    LibraryListPage.prototype.ngOnInit = function () {
        this.getBookList();
    };
    LibraryListPage.prototype.getBookList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, data;
            return __generator(this, function (_a) {
                this.presentLoading(true);
                header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                header.set("Content-Type", "application/json");
                data = {
                    master_id: this.schoolId
                };
                // console.log('Data sent : ', data);
                this.http
                    .post(__WEBPACK_IMPORTED_MODULE_4__apiUrl__["a" /* apiUrl */].url + "library/librarydetails", data, { headers: header })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                this.presentLoading(false);
                                console.log("book list : ", data);
                                if (!(data.data.length > 1)) return [3 /*break*/, 4];
                                _a = this;
                                return [4 /*yield*/, data.data];
                            case 1:
                                _a.allBookList = _d.sent();
                                _b = this;
                                return [4 /*yield*/, data.data.length];
                            case 2:
                                _b.totalData = _d.sent();
                                _c = this;
                                return [4 /*yield*/, Math.floor(data.data.length / 5)];
                            case 3:
                                _c.totalPage = _d.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                this.presentLoading(false);
                                _d.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    // getUserDataFromLocal() {
    //   let data = localStorage.getItem('userData');
    //   this.localUserData = JSON.parse(data);  
    // }
    LibraryListPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    LibraryListPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 500);
        }
    };
    LibraryListPage.prototype.presentProfileModal = function (id) {
        // console.log('clicked...', id); 
        var filterBook = this.allBookList.filter(function (item) {
            return item.id == id;
        });
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__student_library_list_student_library_list__["a" /* ProfilePage */], { book: filterBook[0] });
        profileModal.present();
    };
    LibraryListPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LibraryListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 5; i++) {
                _this.allBookList.push(_this.allBookList.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    LibraryListPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem("userData");
        this.localUserData = JSON.parse(data);
        console.log('local data : ', this.localUserData);
    };
    LibraryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-library-list',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/library-list/library-list.html"*/'<!--\n  Generated template for the LibraryListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>List of Books</ion-title>\n      <!-- <ion-buttons end class="search-icon"> <i class="fas fa-search fa-lg"></i> </ion-buttons> -->\n      <ion-buttons end (click)=goToHome() *ngIf="localUserData == null">\n          <button ion-button icon-only>\n            <ion-icon name="home" color="light"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n   <ion-toolbar>\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content *ngIf="allBookList">\n  \n  <ion-list>\n      <!-- <ion-item >\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/book.png">\n        </ion-thumbnail>\n        <h2><strong>Book Name</strong>: The Federalist Papers</h2>\n        <p><strong>Author Name</strong>: Serial installment</p>\n        <small><strong>Number of Copies</strong>: 10</small>\n      </ion-item> -->\n      <ion-item *ngFor="let book of allBookList" (click)="presentProfileModal(book.id)">\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/book.png">\n        </ion-thumbnail>\n        <h2 *ngIf="book.book_name"><strong>{{book.book_name}}</strong></h2>\n        <p><strong>Author Name</strong>: {{book.author}}</p>\n        <small><strong>Number of Copies</strong>: {{book.no_copy}}</small>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < totalPage">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n\n\n<ion-content *ngIf="!allBookList">\n  <ion-item>\n      <p text-center><strong>Nothing Found</strong></p>\n  </ion-item>\n</ion-content>\n\n\n\n<ion-footer class="fixed" *ngIf="localUserData != null">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-4 (click)=goToHome()>\n        <i text-center class="fas fa-home fa-inverse fa-lg"></i>\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-4 (click)=gotoLiveStream()>\n        <i text-center class="fas fa-video fa-inverse fa-lg"></i>\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-4>\n        <i text-center class="fas fa-align-justify fa-inverse fa-lg"></i>\n        <p  class="footer-p">Library</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/library-list/library-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], LibraryListPage);
    return LibraryListPage;
}());

//# sourceMappingURL=library-list.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComplainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_notice_board_student_notice_board__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_library_list_student_library_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__personal_notice_personal_notice__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__attendance_attendance__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routine_routine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var StaffComplainPage = /** @class */ (function () {
    function StaffComplainPage(navCtrl, navParams, menuCtrl, loadingController, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.isShown = false;
        this.complainMsg = '';
        this.btnDisabled = true;
    }
    StaffComplainPage_1 = StaffComplainPage;
    StaffComplainPage.prototype.ngOnInit = function () {
        this.getComplainAndReplys();
    };
    StaffComplainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffComplainPage');
    };
    StaffComplainPage.prototype.goHide = function () {
        this.isShown = true;
    };
    StaffComplainPage.prototype.goToAllPdf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__student_notice_board_student_notice_board__["b" /* StudentNoticeBoardPage */]);
    };
    StaffComplainPage.prototype.goToLibrary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__student_library_list_student_library_list__["b" /* StudentLibraryListPage */]);
    };
    StaffComplainPage.prototype.goToPersonalNotice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__personal_notice_personal_notice__["a" /* PersonalNoticePage */]);
    };
    StaffComplainPage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    StaffComplainPage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__attendance_attendance__["a" /* AttendancePage */]);
    };
    StaffComplainPage.prototype.goToRoutine = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__routine_routine__["a" /* RoutinePage */]);
    };
    StaffComplainPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__account_account__["b" /* default */]);
    };
    StaffComplainPage.prototype.goToComplain = function () {
        this.navCtrl.push(StaffComplainPage_1);
    };
    StaffComplainPage.prototype.sendComplain = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // this.presentLoading(true);
                    return [4 /*yield*/, this.getUserDataFromLocal()];
                    case 1:
                        // this.presentLoading(true);
                        _a.sent();
                        header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                        header.set("Content-Type", "application/json");
                        data = {
                            org_id: this.localUserData.org_code,
                            sender_id: this.localUserData.master_id,
                            mssg: this.complainMsg,
                        };
                        // console.log(data);      
                        this.http
                            .post(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* apiUrl */].url + "desk/addmsg", data, { headers: header })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                // console.log(data);
                                if (data) {
                                    this.complainMsg = '';
                                    this.btnDisabled = true;
                                    this.showAlert('Alert!', 'Your Complain has been Submited.');
                                }
                                else {
                                    this.showAlert('Alert!', 'Something went wrong. Please try again.');
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    StaffComplainPage.prototype.getComplainAndReplys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // this.presentLoading(true);
                    return [4 /*yield*/, this.getUserDataFromLocal()];
                    case 1:
                        // this.presentLoading(true);
                        _a.sent();
                        header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                        header.set("Content-Type", "application/json");
                        data = {
                            org_id: this.localUserData.org_code,
                            master_id: this.localUserData.master_id
                        };
                        this.http
                            .post(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* apiUrl */].url + "desk/staff", data, { headers: header })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.log('message list data : ', data);
                                if (data.data.length > 0) {
                                    this.allMsgs = data.data;
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    StaffComplainPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    StaffComplainPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    StaffComplainPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
    };
    StaffComplainPage.prototype.onChangeTextValue = function () {
        if (this.complainMsg == '' && this.complainMsg == null) {
            this.btnDisabled = true;
        }
        else {
            this.btnDisabled = false;
        }
    };
    StaffComplainPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK'],
        });
        alert.present();
    };
    StaffComplainPage = StaffComplainPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-staff-complain',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-complain/staff-complain.html"*/'\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Complain</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<div class="enquiry-form">\n		 <h3 class="title" text-center text-uppercase margin-bottom>Enter Your Complain</h3>\n	 	<form>\n			<ion-list style="background-color: none;">\n\n			  <ion-item>\n			  	<ion-label> <ion-icon ios="ios-text" md="md-text"></ion-icon></ion-label>\n			    <ion-textarea name="complainMsg" [(ngModel)]="complainMsg" placeholder="Type Your Complain" (keyup)="onChangeTextValue()"></ion-textarea>\n				</ion-item>\n				\n			  <ion-note text-right float-right>You Have 3/3 Complain</ion-note>\n				<button ion-button block outline color="blue" class="mt-10" (click)=sendComplain() (click)=goHide() [disabled]="btnDisabled">Submit</button>\n				<!-- <p class="text-blue" *ngIf="isShown">Your Complain has been Submited to the Principal</p> -->\n			</ion-list>\n		</form>\n	</div>\n\n	<div style="    display: flex;flex-direction: column;	height: calc(67vh - 90px); overflow-y: scroll;">\n			<div *ngFor="let msg of allMsgs" class="messages" [ngClass]="(msg.from_id)?\'other\':\'\'">\n				<div class="message">\n					<span class="orinal-text">{{msg.message}}</span>\n				</div>\n			</div>\n			<!-- <div class="messages other">\n				<div class="message" >\n					<span class="orinal-text">{msg.message}</span>\n				</div>\n			</div>\n			<div class="messages">\n				<div class="message" >\n					<span class="orinal-text">h</span>\n				</div>\n			</div>\n			<div class="messages other">\n				<div class="message" >\n					<span class="orinal-text">hiiii</span>\n				</div>\n			</div> -->\n	</div>\n\n</ion-content>\n\n\n\n\n\n\n<ion-footer class="fixed">\n		<ion-toolbar color="primary">  \n		<ion-grid text-center >\n			<ion-row>\n				<div col-3 (click)=goToHome()>\n					<img src="assets/imgs/white-icon5.png">\n				 <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n					<p class="footer-p">Home</p>\n				</div>\n				<div col-3 (click)=gotoLiveStream()>\n					<img src="assets/imgs/white-icon1.png">\n				 <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n					<p class="footer-p">Stream</p>\n				</div>\n				<div col-3 (click)=goToAttendance()>\n					<img src="assets/imgs/white-icon2.png">\n					<!-- <i text-center class="fas fa-boxes fa-inverse fa-lg"></i> -->\n					<p  class="footer-p">Attendance</p>\n				</div>\n				<div col-3 (click)=goToRoutine()>\n					<img src="assets/imgs/white-icon3.png">\n					<!-- <i class="fas fa-box fa-inverse fa-lg"></i> -->\n					<p  class="footer-p">Routine</p>\n				</div>\n			</ion-row>\n		</ion-grid>\n		</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-complain/staff-complain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], StaffComplainPage);
    return StaffComplainPage;
    var StaffComplainPage_1;
}());

//# sourceMappingURL=staff-complain.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_owndetails_student_owndetails__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routine_routine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { IonicPage, NavController, NavParams } from 'ionic-angular';









/**
 * Generated class for the StudentsTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentsTabsPage = /** @class */ (function () {
    function StudentsTabsPage(navCtrl, navParams, nativePageTransitions, http, loadingController, jsonp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
        this.http = http;
        this.loadingController = loadingController;
        this.jsonp = jsonp;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__routine_routine__["a" /* RoutinePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_9__account_account__["b" /* default */];
        this.loaded = false;
        this.tabIndex = 0;
        this.initLoader();
    }
    StudentsTabsPage.prototype.ngOnInit = function () {
        this.getUserDataFromLocal();
        this.getUserData();
    };
    StudentsTabsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad StudentsTabsPage');
    };
    StudentsTabsPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: "hide",
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
        });
    };
    StudentsTabsPage.prototype.transition = function (e) {
        var options = {
            direction: this.getAnimationDirection(e.index),
            duration: 250,
            slowdownfactor: -1,
            slidePixels: 0,
            iosdelay: 20,
            androiddelay: 0,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 48
        };
        if (!this.loaded) {
            this.loaded = true;
            return;
        }
        this.nativePageTransitions.slide(options);
    };
    StudentsTabsPage.prototype.getAnimationDirection = function (index) {
        var currentIndex = this.tabIndex;
        this.tabIndex = index;
        switch (true) {
            case currentIndex < index:
                return "left";
            case currentIndex > index:
                return "right";
        }
    };
    StudentsTabsPage.prototype.goToLogout = function () {
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    StudentsTabsPage.prototype.getUserData = function () {
        var _this = this;
        this.presentLoading(true);
        var header = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        header.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["f" /* RequestOptions */]({ headers: header });
        var data = {
            org_id: this.localUserData.org_code
            // 'master_id': this.localUserData.master_id
        };
        // console.log('send data : ', data);
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "org/getdetail", data, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // console.log(data)
            if (data.data) {
                _this.presentLoading(false);
                // console.log('receive data : ', data.data[0]);
                _this.orgDetails = data.data[0];
            }
        });
    };
    StudentsTabsPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem("userData");
        this.localUserData = JSON.parse(data);
        // console.log(this.localUserData);
    };
    StudentsTabsPage.prototype.presentLoading = function (load) {
        var _this = this;
        if (load) {
            return this.loading.present();
        }
        else {
            setTimeout(function () {
                return _this.loading.dismiss();
            }, 1000);
        }
    };
    StudentsTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-students-tabs",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/students-tabs/students-tabs.html"*/'<ion-content>\n\n  <ion-tabs id="tabs" color="blue">\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="true" (swipe)="transition($event)"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Routine" tabIcon="grid" tabsHideOnSubPages="true" (swipe)="transition($event)"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person" tabsHideOnSubPages="true" (ionChange)="transition($event)"></ion-tab>\n    <!-- <ion-tab [root]="tab4Root" tabTitle="Logout" tabIcon="log-out" tabsHideOnSubPages="true" (ionChange)="transition($event)"></ion-tab> -->\n  </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/students-tabs/students-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* Jsonp */]])
    ], StudentsTabsPage);
    return StudentsTabsPage;
}());
/* harmony default export */ __webpack_exports__["a"] = (StudentsTabsPage);
//# sourceMappingURL=students-tabs.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsStudentViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_notice_board_student_notice_board__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_library_list_student_library_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routine_routine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_notice_personal_notice__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__attendance_attendance__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parents_account_parents_account__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guest_enquiry_guest_enquiry__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the ParentsStudentViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParentsStudentViewPage = /** @class */ (function () {
    function ParentsStudentViewPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(true);
    }
    ParentsStudentViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParentsStudentViewPage');
    };
    ParentsStudentViewPage.prototype.goToAllPdf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__student_notice_board_student_notice_board__["b" /* StudentNoticeBoardPage */]);
    };
    ParentsStudentViewPage.prototype.goToLibrary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__student_library_list_student_library_list__["b" /* StudentLibraryListPage */]);
    };
    ParentsStudentViewPage.prototype.goToPersonalNotice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_notice_personal_notice__["a" /* PersonalNoticePage */]);
    };
    ParentsStudentViewPage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    ParentsStudentViewPage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__attendance_attendance__["a" /* AttendancePage */]);
    };
    ParentsStudentViewPage.prototype.goToRoutine = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__routine_routine__["a" /* RoutinePage */]);
    };
    ParentsStudentViewPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__parents_account_parents_account__["a" /* ParentsAccountPage */]);
    };
    ParentsStudentViewPage.prototype.goToGuest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */]);
    };
    ParentsStudentViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-parents-student-view',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-student-view/parents-student-view.html"*/'<!--\n  Generated template for the ParentsStudentViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n  	<button ion-button menuToggle color="light">\n     <ion-icon name="menu"></ion-icon>\n   </button>\n    <ion-title>Student\'s Details</ion-title>\n    <ion-buttons end><button class="bell-icon" (click)=goToPersonalNotice()> <i class="fas fa-bell fa-inverse fa-lg"></i> </button></ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<ion-card>\n  <img src="assets/imgs/SCHOOLS-Banner-Images.jpg"/>\n  <ion-card-content>\n    <ion-card-title>\n      My College Name\n      </ion-card-title>\n      <p><strong>Email</strong>: demo@gmail.com</p>\n      <p><strong>Mobile</strong>: 1234567890</p>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n      </p>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-4 class="icon-center" (click)=goToLibrary()>\n      <img src="assets/imgs/icon.png"/>\n      <p>Library</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToAllPdf()>\n      <img src="assets/imgs/icon2.png"/>\n      <p>Notice Board</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToPersonalNotice()>\n      <img src="assets/imgs/icon6.png"/>\n      <p>Personal Notice</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-md-4 class="icon-center" (click)=goToGuest()>\n      <img src="assets/imgs/guest.png"/>\n      <p>Guest</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToRoutine()>\n      <img src="assets/imgs/icon4.png"/>\n      <p>Routine</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToAccount()>\n      <img src="assets/imgs/icon5.png"/>\n      <p>Account</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<!-- <ion-grid>\n  <ion-row>\n    <ion-col style="margin-bottom: 0px; padding-bottom: 0px;">\n      	 <button block ion-button color="blue"  (click)=goToAllPdf()>NOTICE BOARD</button>\n    </ion-col>\n    <ion-col style="margin-bottom: 0px; padding-bottom: 0px;">\n      <button block ion-button color="blue" (click)=goToLibrary()>LIBRARY</button>\n    </ion-col>\n  </ion-row>\n</ion-grid> -->\n\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-student-view/parents-student-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], ParentsStudentViewPage);
    return ParentsStudentViewPage;
}());

//# sourceMappingURL=parents-student-view.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
var apiUrl = {
    url: 'http://softechs.co.in/school_hub/',
    // node_url : 'http://localhost:3000/',
    // node_url: "https://still-shore-43294.herokuapp.com/",
    node_url: 'http://18.191.46.158:3000/',
};
//# sourceMappingURL=apiUrl.js.map

/***/ })

},[399]);
//# sourceMappingURL=main.js.map