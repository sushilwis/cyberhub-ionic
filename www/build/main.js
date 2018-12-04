webpackJsonp([30],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveStreamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the LiveStreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LiveStreamPage = /** @class */ (function () {
    function LiveStreamPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        // this.loadingCtrl.page(true);  	
    }
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LiveStreamPage);
    return LiveStreamPage;
}());

//# sourceMappingURL=live-stream.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiUrl__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(65);
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
        // console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);    
    };
    ChangepasswordPage.prototype.onChangePassSubmit = function () {
        var _this = this;
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
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
                }
                else {
                    _this.showAlert(data.mssg);
                }
            });
        }
        else {
            this.showAlert('Password Not Match.');
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__school_details_school_details__ = __webpack_require__(45);
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
    function SchoolListingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SchoolListingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchoolListingPage');
    };
    SchoolListingPage.prototype.goToListingDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__school_details_school_details__["a" /* SchoolDetailsPage */]);
    };
    SchoolListingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-school-listing',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/school-listing/school-listing.html"*/'<!--\n  Generated template for the SchoolListingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>List of School</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list>\n  <ion-item (click)=goToListingDetails()>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/1-512.png">\n    </ion-thumbnail>\n    <h2>My School Name</h2>\n    <p>Hayao Miyazaki • 1992</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n<ion-item (click)=goToListingDetails()>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/1-512.png">\n    </ion-thumbnail>\n    <h2>My School Name</h2>\n    <p>Hayao Miyazaki • 1988</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item (click)=goToListingDetails()>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/1-512.png">\n    </ion-thumbnail>\n    <h2>My School Name</h2>\n    <p>Hayao Miyazaki • 1990</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item (click)=goToListingDetails()>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/1-512.png">\n    </ion-thumbnail>\n    <h2>My School Name</h2>\n    <p>Hayao Miyazaki • 1978</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n\n  <ion-item (click)=goToListingDetails()>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/1-512.png">\n    </ion-thumbnail>\n    <h2>My School Name</h2>\n    <p>Hayao Miyazaki • 1999</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n\n   <ion-item (click)=goToListingDetails()>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/1-512.png">\n    </ion-thumbnail>\n    <h2>My School Name</h2>\n    <p>Hayao Miyazaki • 2000</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n   <ion-item (click)=goToListingDetails()>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/1-512.png">\n    </ion-thumbnail>\n    <h2>My School Name</h2>\n    <p>Hayao Miyazaki • 1992</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/school-listing/school-listing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SchoolListingPage);
    return SchoolListingPage;
}());

//# sourceMappingURL=school-listing.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfDownloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__school_details_school_details__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__library_list_library_list__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__apiUrl__ = __webpack_require__(25);
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
    function PdfDownloadPage(navCtrl, navParams, http, loadingController, file, document, transfer, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.file = file;
        this.document = document;
        this.transfer = transfer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
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
        this.http.get(__WEBPACK_IMPORTED_MODULE_10__apiUrl__["a" /* apiUrl */].url + "/notice/" + id + "/1").
            map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.presentLoading(false);
            _this.noticeList = data;
            console.log(data);
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
    PdfDownloadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pdf-download',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/pdf-download/pdf-download.html"*/'<!--\n  Generated template for the PdfDownloadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Download PDF</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let list of noticeList">\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/download-img.png">\n      </ion-thumbnail>\n      <h2>{{list?.title}}</h2>\n      <p>{{list?.subject}}</p>\n      <button ion-button clear item-end (click)="downloadAndOpenPdf(list?.file_url)"><i class="fas fa-download fa-2x"></i></button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">\n  <ion-grid text-center >\n    <ion-row>\n      <div col-4 (click)=goToHome()>\n        <i text-center class="fas fa-home fa-inverse fa-lg"></i>\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-4 (click)=gotoLiveStream()>\n        <i text-center class="fas fa-video fa-inverse fa-lg"></i>\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-4>\n        <i text-center class="fas fa-align-justify fa-inverse fa-lg"></i>\n        <p  class="footer-p" (click)=goToLibrary()>Library</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/pdf-download/pdf-download.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PdfDownloadPage);
    return PdfDownloadPage;
}());

//# sourceMappingURL=pdf-download.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolcalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
        var id = this.navParams.get('id');
        //this.getDetails(id);
        this.loadEvents();
    }
    SchoolcalenderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchoolcalenderPage');
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
        this.eventSource = this.createRandomEvents();
        // console.log(this.eventSource)
    };
    SchoolcalenderPage.prototype.onEventSelected = function (event) {
        //console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
        var alert = this.alertCtrl.create({
            title: event.title,
            subTitle: 'Event Started:' + event.startTime + ', To: ' + event.endTime,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    SchoolcalenderPage.prototype.createRandomEvents = function () {
        var events = [];
        for (var i = 0; i < 10; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            }
            else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        console.log(events);
        return events;
    };
    SchoolcalenderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-schoolcalender',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/schoolcalender/schoolcalender.html"*/'<!--\n  Generated template for the SchoolcalenderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{viewTitle}}</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-buttons end>\n    <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n  </ion-buttons>\n  <br>\n  <calendar [eventSource]="eventSource" [calendarMode]="calendar.mode" [currentDate]="calendar.currentDate" (onCurrentDateChanged)="onCurrentDateChanged($event)"\n    (onRangeChanged)="reloadSource(startTime, endTime)" (onEventSelected)="onEventSelected($event)" (onTitleChanged)="onViewTitleChanged($event)"\n    (onTimeSelected)="onTimeSelected($event)" step="30">\n  </calendar>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/schoolcalender/schoolcalender.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SchoolcalenderPage);
    return SchoolcalenderPage;
}());

//# sourceMappingURL=schoolcalender.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the AttendanceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttendanceListPage = /** @class */ (function () {
    function AttendanceListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AttendanceListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttendanceListPage');
    };
    AttendanceListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-attendance-list',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/attendance-list/attendance-list.html"*/'<!--\n  Generated template for the AttendanceListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Attendance List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n	<ion-list>\n	  <ion-item>\n	    <ion-label>Student One</ion-label>\n	    <ion-checkbox [(ngModel)]="Student1"></ion-checkbox>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>Student Two</ion-label>\n	    <ion-checkbox [(ngModel)]="Student2"></ion-checkbox>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>Student Three</ion-label>\n	    <ion-checkbox [(ngModel)]="Student3"></ion-checkbox>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>Student Four</ion-label>\n	    <ion-checkbox [(ngModel)]="Student4"></ion-checkbox>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>Student Five</ion-label>\n	    <ion-checkbox [(ngModel)]="Student5"></ion-checkbox>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>Student Six</ion-label>\n	    <ion-checkbox [(ngModel)]="Student6"></ion-checkbox>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>Student Seven</ion-label>\n	    <ion-checkbox [(ngModel)]="Student7"></ion-checkbox>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>Student Eight</ion-label>\n	    <ion-checkbox [(ngModel)]="Student8"></ion-checkbox>\n	  </ion-item>\n\n\n	  <ion-item>\n	    <ion-label>Student Nine</ion-label>\n	    <ion-checkbox [(ngModel)]="Student9"></ion-checkbox>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>Student Ten</ion-label>\n	    <ion-checkbox [(ngModel)]="Student10"></ion-checkbox>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>Student Eleven</ion-label>\n	    <ion-checkbox [(ngModel)]="Student11"></ion-checkbox>\n	  </ion-item>\n	</ion-list>\n	<div class="padding">\n		<button ion-button type="submit" block outline color="blue" class="mt-10">Submit</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/attendance-list/attendance-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AttendanceListPage);
    return AttendanceListPage;
}());

//# sourceMappingURL=attendance-list.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplainReplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the ComplainReplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComplainReplyPage = /** @class */ (function () {
    function ComplainReplyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComplainReplyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComplainReplyPage');
    };
    ComplainReplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-complain-reply',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/complain-reply/complain-reply.html"*/'<!--\n  Generated template for the ComplainReplyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Complain Reply</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h1 text-center text-uppercase margin-bottom color="blue" class="">Type Your Reply</h1>\n	<ion-list>\n	  <ion-item>\n	    <ion-textarea type="text" placeholder="Type Here to Reply"></ion-textarea>\n	  </ion-item>\n	</ion-list>\n	 <button ion-button type="submit" block outline color="blue" class="mt-10">Submit Reply</button>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/complain-reply/complain-reply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ComplainReplyPage);
    return ComplainReplyPage;
}());

//# sourceMappingURL=complain-reply.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attendance_list_attendance_list__ = __webpack_require__(125);
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
 * Generated class for the GetAttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetAttendancePage = /** @class */ (function () {
    function GetAttendancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GetAttendancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GetAttendancePage');
    };
    GetAttendancePage.prototype.gotoAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__attendance_list_attendance_list__["a" /* AttendanceListPage */]);
    };
    GetAttendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-get-attendance',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/get-attendance/get-attendance.html"*/'<!--\n  Generated template for the GetAttendancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Attendance</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="item-center" padding>\n	<div class="enquiry-form">\n		 <h1 class="title" text-center text-uppercase margin-bottom>Put Attendance Pin</h1>\n	 	<form>\n		<!-- or with standalone set to true -->\n		 <ion-item class="select-css">\n		   <ion-input type="password" name="" placeholder="Enter Password"></ion-input>\n		</ion-item>\n		 <button ion-button type="submit" block outline color="blue" class="mt-10" (click)=gotoAttendance()>Submit</button>\n	</form>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/get-attendance/get-attendance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], GetAttendancePage);
    return GetAttendancePage;
}());

//# sourceMappingURL=get-attendance.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsChildTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parents_student_view_parents_student_view__ = __webpack_require__(66);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ParentsChildTabsPage);
    return ParentsChildTabsPage;
}());

//# sourceMappingURL=parents-child-tabs.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parents_child_tabs_parents_child_tabs__ = __webpack_require__(128);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ParentsLoginPage);
    return ParentsLoginPage;
}());

//# sourceMappingURL=parents-login.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComplaindeskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complain_reply_complain_reply__ = __webpack_require__(126);
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
 * Generated class for the PrincipalComplaindeskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrincipalComplaindeskPage = /** @class */ (function () {
    function PrincipalComplaindeskPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrincipalComplaindeskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalComplaindeskPage');
    };
    PrincipalComplaindeskPage.prototype.gotoCompalinReply = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__complain_reply_complain_reply__["a" /* ComplainReplyPage */]);
    };
    PrincipalComplaindeskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-principal-complaindesk',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/principal-complaindesk/principal-complaindesk.html"*/'<!--\n  Generated template for the PrincipalComplaindeskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Complain Desk</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	\n	<ion-card>\n	  <ion-card-content>\n	    <p>The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.</p>\n	  </ion-card-content>\n	  <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="blue" icon-start>\n          Ram Kumar\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="blue" icon-start (click)=gotoCompalinReply()>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Reply\n        </button>\n      </ion-col>\n    </ion-row>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	    <p>The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.</p>\n	  </ion-card-content>\n	  <ion-row no-padding>\n	  	<ion-col text-left>\n        <button ion-button clear small color="blue" icon-start>\n          Ram Kumar\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="blue" icon-start (click)=gotoCompalinReply()>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Reply\n        </button>\n      </ion-col>\n    </ion-row>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	    <p>The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.</p>\n	  </ion-card-content>\n	  <ion-row no-padding>\n	  	<ion-col text-left>\n        <button ion-button clear small color="blue" icon-start>\n          Ram Kumar\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="blue" icon-start (click)=gotoCompalinReply()>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Reply\n        </button>\n      </ion-col>\n    </ion-row>\n	</ion-card>\n\n\n	<ion-card>\n	  <ion-card-content>\n	    <p>The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.</p>\n	  </ion-card-content>\n	  <ion-row no-padding>\n	  	<ion-col text-left>\n        <button ion-button clear small color="blue" icon-start>\n          Ram Kumar\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="blue" icon-start (click)=gotoCompalinReply()>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Reply\n        </button>\n      </ion-col>\n    </ion-row>\n	</ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/principal-complaindesk/principal-complaindesk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PrincipalComplaindeskPage);
    return PrincipalComplaindeskPage;
}());

//# sourceMappingURL=principal-complaindesk.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalExamviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PrincipalExamviewPage);
    return PrincipalExamviewPage;
}());

//# sourceMappingURL=principal-examview.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComplainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the StaffComplainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffComplainPage = /** @class */ (function () {
    function StaffComplainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isShown = false;
    }
    StaffComplainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffComplainPage');
    };
    StaffComplainPage.prototype.goHide = function () {
        this.isShown = true;
    };
    StaffComplainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-staff-complain',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-complain/staff-complain.html"*/'<!--\n  Generated template for the StaffComplainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Staff Complain</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<div class="enquiry-form">\n		 <h3 class="title" text-center text-uppercase margin-bottom>Enter Your Complain</h3>\n	 	<form>\n			<ion-list style="background-color: none;">\n			  <ion-item>\n			  	<ion-label> <ion-icon ios="ios-text" md="md-text"></ion-icon></ion-label>\n			     <ion-textarea  name="" placeholder="Type Your Complain"></ion-textarea>\n			  </ion-item>\n			   <ion-note text-right float-right>You Have 3/3 Complain</ion-note>\n				<button ion-button block outline color="blue" class="mt-10" (click)=goHide()>Submit</button>\n				<p class="text-blue" *ngIf="isShown">Your Complain has been Submited to the Principal</p>\n			</ion-list>\n		</form>\n	</div>\n\n</ion-content>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-complain/staff-complain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], StaffComplainPage);
    return StaffComplainPage;
}());

//# sourceMappingURL=staff-complain.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuffExamdutyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the StuffExamdutyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StuffExamdutyPage = /** @class */ (function () {
    function StuffExamdutyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StuffExamdutyPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad StuffExamdutyPage');
    };
    StuffExamdutyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stuff-examduty',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-examduty/stuff-examduty.html"*/'<!--\n  Generated template for the StuffExamdutyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Exam Duty</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n<ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-12 text-uppercase text-center>\n    	<h2 ><strong>Bengali Honours</strong></h2>\n	</ion-col>\n  </ion-row>\n  <ion-row class="border">\n    <ion-col col-md-4 >\n    	<p><strong>Time</strong>:</p>\n    	<p>12PM-2PM</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Room No</strong>:</p>\n    	<p>12C</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Floor</strong>:</p>\n    	<p>2ND</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>  \n</ion-card>\n\n\n<ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-12 text-uppercase text-center>\n    	<h2 ><strong>Philosophy Honours</strong></h2>\n	</ion-col>\n  </ion-row>\n  <ion-row class="border">\n    <ion-col col-md-4 >\n    	<p><strong>Time</strong>:</p>\n    	<p>2PM-4PM</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Room No</strong>:</p>\n    	<p>10</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Floor</strong>:</p>\n    	<p>3ND</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>  \n</ion-card>\n\n<ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-12 text-uppercase text-center>\n    	<h2 ><strong>English Honours</strong></h2>\n	</ion-col>\n  </ion-row>\n  <ion-row class="border">\n    <ion-col col-md-4>\n    	<p><strong>Time</strong>:</p>\n    	<p>4PM-6PM</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Room No</strong>:</p>\n    	<p>12B</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Floor</strong>:</p>\n    	<p>2ND</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>  \n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-examduty/stuff-examduty.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], StuffExamdutyPage);
    return StuffExamdutyPage;
}());

//# sourceMappingURL=stuff-examduty.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_library_list_student_library_list__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_notice_board_student_notice_board__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_notice_personal_notice__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_attendance_get_attendance__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__staff_complain_staff_complain__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parents_account_parents_account__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guest_enquiry_guest_enquiry__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__principal_examview_principal_examview__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__principal_complaindesk_principal_complaindesk__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stuff_examduty_stuff_examduty__ = __webpack_require__(133);
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
    function StaffInfoPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(true);
    }
    StaffInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffInfoPage');
    };
    StaffInfoPage.prototype.goToAllPdf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__student_notice_board_student_notice_board__["a" /* StudentNoticeBoardPage */]);
    };
    StaffInfoPage.prototype.goToLibrary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__student_library_list_student_library_list__["a" /* StudentLibraryListPage */]);
    };
    StaffInfoPage.prototype.goToPersonalNotice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__personal_notice_personal_notice__["a" /* PersonalNoticePage */]);
    };
    StaffInfoPage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    StaffInfoPage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__get_attendance_get_attendance__["a" /* GetAttendancePage */]);
    };
    StaffInfoPage.prototype.goToComplain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__staff_complain_staff_complain__["a" /* StaffComplainPage */]);
    };
    StaffInfoPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__parents_account_parents_account__["a" /* ParentsAccountPage */]);
    };
    StaffInfoPage.prototype.goToGuest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */]);
    };
    StaffInfoPage.prototype.goToPrincipal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__principal_examview_principal_examview__["a" /* PrincipalExamviewPage */]);
    };
    StaffInfoPage.prototype.goToComplainDesk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__principal_complaindesk_principal_complaindesk__["a" /* PrincipalComplaindeskPage */]);
    };
    StaffInfoPage.prototype.goToStuffDuty = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__stuff_examduty_stuff_examduty__["a" /* StuffExamdutyPage */]);
    };
    StaffInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-staff-info',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-info/staff-info.html"*/'<!--\n  Generated template for the StaffInfoPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <button ion-button menuToggle color="light">\n     <ion-icon name="menu"></ion-icon>\n   </button>\n    <ion-title>General Information</ion-title>\n    <ion-buttons end><button class="bell-icon" (click)=goToPersonalNotice()> <i class="fas fa-bell fa-inverse fa-lg"></i> </button></ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <!-- <div class="back-ground">\n      <img src="assets/imgs/stuff_icon.png"/>\n      <h5 text-center text-uppercase>College Name</h5>\n  </div> -->\n\n\n<ion-card>\n  <img src="assets/imgs/SCHOOLS-Banner-Images.jpg"/>\n  <ion-card-content>\n    <ion-card-title>\n      My College Name\n      </ion-card-title>\n      <p><strong>Email</strong>: demo@gmail.com</p>\n      <p><strong>Mobile</strong>: 1234567890</p>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n      </p>\n      <p (click)=goToPrincipal()>PRINCIPAL</p> <p (click)=goToComplainDesk()>PRINCIPAL COMPLAIN DESK</p>\n      <p (click)=goToStuffDuty()>Stuff Duty</p>\n  </ion-card-content>\n</ion-card>\n\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-3 class="icon-center" (click)=goToLibrary()>\n      <img src="assets/imgs/icon.png"/>\n      <p>Library</p>\n    </ion-col>\n    <ion-col col-md-3 class="icon-center" (click)=goToAllPdf()>\n      <img src="assets/imgs/icon2.png"/>\n      <p>Notice Board</p>\n    </ion-col>\n    <ion-col col-md-3 class="icon-center" (click)=goToPersonalNotice()>\n      <img src="assets/imgs/icon6.png"/>\n      <p>Personal Notice</p>\n    </ion-col>\n    <ion-col col-md-3 class="icon-center" (click)=goToAccount()>\n      <img src="assets/imgs/icon5.png"/>\n      <p>Account</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-md-3 class="icon-center" (click)=goToAttendance()>\n      <img src="assets/imgs/icon3.png"/>\n      <p>Attendance</p>\n    </ion-col>\n    <ion-col col-md-3 class="icon-center" (click)=gotoLiveStream()>\n      <img src="assets/imgs/icon1.png"/>\n      <p>Live Stream</p>\n    </ion-col>\n    <ion-col col-md-3 class="icon-center" (click)=goToComplain()>\n      <img src="assets/imgs/icon7.png"/>\n      <p>Complain</p>\n    </ion-col>\n    <ion-col col-md-3 class="icon-center" (click)=goToGuest()>\n      <img src="assets/imgs/guest.png"/>\n      <p>Guest</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-info/staff-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], StaffInfoPage);
    return StaffInfoPage;
}());

//# sourceMappingURL=staff-info.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_info_staff_info__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apiUrl__ = __webpack_require__(25);
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
    function StaffLoginPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    StaffLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffLoginPage');
    };
    StaffLoginPage.prototype.goToStaffInfo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__staff_info_staff_info__["a" /* StaffInfoPage */]);
    };
    StaffLoginPage.prototype.onStuffLoginSubmit = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            'username': this.regID,
            'pass': this.pass
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__apiUrl__["a" /* apiUrl */].url + "user/login", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
        });
    };
    StaffLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-staff-login',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-login/staff-login.html"*/'<!--\n  Generated template for the StaffLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Staff Login</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content>\n\n<img src="assets/imgs/logo.jpg" class="img-width"/>\n	<!-- <h1 class="heading" text-center text-uppercase>CyberHub</h1> -->\n	<img src="assets/imgs/bk.png" class="img-width" />\n	<div class="enquiry-form">\n		 <h3 class="title" text-center text-uppercase margin-bottom>Enter Details</h3>\n	 	<form>\n			<ion-list style="background-color: none;">\n\n			  <ion-item>\n			  	<ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n			    <ion-input type="text" placeholder="Username" name="regID" no-margin [(ngModel)]="regID"></ion-input>\n				</ion-item>\n				\n			  <ion-item>\n			  	<ion-label> <ion-icon ios="ios-disc" md="md-disc"></ion-icon></ion-label>\n			    <ion-input type="password" placeholder="Password" name="pass" no-margin [(ngModel)]="pass"></ion-input>\n				</ion-item>\n				\n				<button ion-button block outline color="blue" class="mt-10" (click)=onStuffLoginSubmit()>Submit</button>\n\n			</ion-list>\n		</form>\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-login/staff-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], StaffLoginPage);
    return StaffLoginPage;
}());

//# sourceMappingURL=staff-login.js.map

/***/ }),

/***/ 144:
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
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendance_attendance__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_owndetails_student_owndetails__ = __webpack_require__(30);
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
 * Generated class for the RoutinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoutinePage = /** @class */ (function () {
    function RoutinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [];
        for (var i = 1; i < 7; i++) {
            this.data.push({
                title: 'Day ' + i,
                details: 'Your New Routine',
                icon: 'ios-add-circle-outline',
                showDetails: false
            });
        }
    }
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
    RoutinePage.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
    };
    RoutinePage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    RoutinePage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__attendance_attendance__["a" /* AttendancePage */]);
    };
    RoutinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-routine',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/routine/routine.html"*/'<!--\n  Generated template for the RoutinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Routine</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-list>\n    <ion-item padding *ngFor="let d of data" (click)="toggleDetails(d)"><ion-icon color="primary" item-right [name]="d.icon"></ion-icon>\n      {{d.title}}\n      <table *ngIf="d.showDetails">{{d.details}}</table>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/routine/routine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], RoutinePage);
    return RoutinePage;
}());

//# sourceMappingURL=routine.js.map

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		328,
		29
	],
	"../pages/attendance-list/attendance-list.module": [
		329,
		28
	],
	"../pages/attendance/attendance.module": [
		330,
		27
	],
	"../pages/changepassword/changepassword.module": [
		331,
		26
	],
	"../pages/complain-reply/complain-reply.module": [
		332,
		25
	],
	"../pages/get-attendance/get-attendance.module": [
		333,
		24
	],
	"../pages/guest-enquiry/guest-enquiry.module": [
		334,
		23
	],
	"../pages/library-list/library-list.module": [
		335,
		22
	],
	"../pages/live-stream/live-stream.module": [
		336,
		21
	],
	"../pages/parents-account/parents-account.module": [
		337,
		20
	],
	"../pages/parents-child-tabs/parents-child-tabs.module": [
		338,
		19
	],
	"../pages/parents-login/parents-login.module": [
		339,
		18
	],
	"../pages/parents-student-view/parents-student-view.module": [
		340,
		17
	],
	"../pages/pdf-download/pdf-download.module": [
		341,
		16
	],
	"../pages/personal-notice/personal-notice.module": [
		342,
		15
	],
	"../pages/principal-complaindesk/principal-complaindesk.module": [
		343,
		14
	],
	"../pages/principal-examview/principal-examview.module": [
		344,
		13
	],
	"../pages/routine/routine.module": [
		345,
		12
	],
	"../pages/school-details/school-details.module": [
		346,
		11
	],
	"../pages/school-listing/school-listing.module": [
		347,
		10
	],
	"../pages/schoolcalender/schoolcalender.module": [
		348,
		9
	],
	"../pages/staff-complain/staff-complain.module": [
		349,
		8
	],
	"../pages/staff-info/staff-info.module": [
		356,
		7
	],
	"../pages/staff-login/staff-login.module": [
		357,
		6
	],
	"../pages/student-library-list/student-library-list.module": [
		350,
		5
	],
	"../pages/student-login/student-login.module": [
		351,
		4
	],
	"../pages/student-notice-board/student-notice-board.module": [
		352,
		3
	],
	"../pages/student-owndetails/student-owndetails.module": [
		353,
		2
	],
	"../pages/students-tabs/students-tabs.module": [
		354,
		1
	],
	"../pages/stuff-examduty/stuff-examduty.module": [
		355,
		0
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
webpackAsyncContext.id = 186;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routine_routine__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_owndetails_student_owndetails__ = __webpack_require__(30);
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
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttendancePage = /** @class */ (function () {
    function AttendancePage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false);
    }
    AttendancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttendancePage');
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
    AttendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-attendance',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/attendance/attendance.html"*/'<!--\n  Generated template for the AttendancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Attendance</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="item-center" padding>\n	<div class="enquiry-form">\n		 <h1 class="title" text-center text-uppercase margin-bottom>Get Attendance Pin</h1>\n	 	<form>\n		<!-- or with standalone set to true -->\n		 <ion-item class="select-css">\n		   <ion-input type="password" name="" placeholder="Enter Password"></ion-input>\n		</ion-item>\n		 <button ion-button type="submit" block outline color="blue" class="mt-10">Submit</button>\n	</form>\n</div>\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/attendance/attendance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], AttendancePage);
    return AttendancePage;
}());

//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guest_enquiry_guest_enquiry__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_login_student_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parents_login_parents_login__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__staff_login_staff_login__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_css_animator__ = __webpack_require__(231);
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
            selector: 'page-home',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/home/home.html"*/'<!-- <ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<div id="custom-overlay" [style.display]="splash ? \'flex\' : \'none\'">\n  <div class="flb">\n    <img class="img-screen" src="assets/imgs/logo.png">\n  </div>\n</div>\n\n<ion-content class="item-center">\n  <ion-grid style="margin-top: 5em;">\n    <ion-row #myElement>\n\n      <ion-row col-6>\n        <ion-card color="blue" class="blue-gradient" [ripple] (click)="goToGuest()">\n          <ion-card-header text-center class="padd-bottom"><i class="fas fa-user-circle fa-3x"></i></ion-card-header>\n          <ion-card-content>\n            <ion-card-title text-uppercase text-center>\n              Guest\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n\n      <ion-row col-6>\n        <ion-card color="blue" class="blue-gradient" (click)=goToStudent()>\n          <ion-card-header text-center class="padd-bottom"><i class="fas fa-user fa-3x"></i></ion-card-header>\n          <ion-card-content>\n            <ion-card-title text-uppercase text-center>\n              Student\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n\n      <ion-row col-6>\n        <ion-card color="blue" class="blue-gradient" (click)=goToStaff()>\n          <ion-card-header text-center class="padd-bottom"><i class="fas fa-briefcase fa-3x"></i></ion-card-header>\n          <ion-card-content>\n            <ion-card-title text-uppercase text-center>\n              Staff\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n\n      <ion-row col-6>\n        <ion-card color="blue" class="blue-gradient" (click)=goToParents()>\n          <ion-card-header text-center class="padd-bottom"><i class="fas fa-users fa-3x"></i></ion-card-header>\n          <ion-card-content>\n            <ion-card-title text-uppercase text-center>\n              Parents\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6_css_animator__["AnimationService"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(260);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
var apiUrl = {
    url: 'http://softechs.co.in/school_hub/',
};
//# sourceMappingURL=apiUrl.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_css_animator__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_document_viewer__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_page_transitions__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_guest_enquiry_guest_enquiry__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_school_listing_school_listing__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_school_details_school_details__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_expandable_header_expandable_header__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_pdf_download_pdf_download__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_student_login_student_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_library_list_library_list__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_student_owndetails_student_owndetails__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_personal_notice_personal_notice__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_attendance_attendance__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_routine_routine__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_parents_login_parents_login__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_parents_student_view_parents_student_view__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_parents_child_tabs_parents_child_tabs__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_student_library_list_student_library_list__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_student_notice_board_student_notice_board__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_account_account__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_changepassword_changepassword__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_parents_account_parents_account__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_staff_login_staff_login__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_staff_info_staff_info__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_staff_complain_staff_complain__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_get_attendance_get_attendance__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_attendance_list_attendance_list__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_principal_examview_principal_examview__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_principal_complaindesk_principal_complaindesk__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_complain_reply_complain_reply__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_stuff_examduty_stuff_examduty__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_schoolcalender_schoolcalender__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_students_tabs_students_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ng2_ripple_directive__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ng2_ripple_directive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44_ng2_ripple_directive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_splash_screen__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































// import { AccountPage, ModalPage } from '../pages/account/account';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_school_listing_school_listing__["a" /* SchoolListingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_school_details_school_details__["a" /* SchoolDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_expandable_header_expandable_header__["a" /* ExpandableHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_pdf_download_pdf_download__["a" /* PdfDownloadPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_student_login_student_login__["a" /* StudentLoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_library_list_library_list__["a" /* LibraryListPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_personal_notice_personal_notice__["a" /* PersonalNoticePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_live_stream_live_stream__["a" /* LiveStreamPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_routine_routine__["a" /* RoutinePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_parents_login_parents_login__["a" /* ParentsLoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_parents_student_view_parents_student_view__["a" /* ParentsStudentViewPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_parents_child_tabs_parents_child_tabs__["a" /* ParentsChildTabsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_student_library_list_student_library_list__["a" /* StudentLibraryListPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_student_notice_board_student_notice_board__["a" /* StudentNoticeBoardPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_account_account__["b" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_parents_account_parents_account__["a" /* ParentsAccountPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_staff_login_staff_login__["a" /* StaffLoginPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_staff_info_staff_info__["a" /* StaffInfoPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_staff_complain_staff_complain__["a" /* StaffComplainPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_get_attendance_get_attendance__["a" /* GetAttendancePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_attendance_list_attendance_list__["a" /* AttendanceListPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_principal_examview_principal_examview__["a" /* PrincipalExamviewPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_principal_complaindesk_principal_complaindesk__["a" /* PrincipalComplaindeskPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_complain_reply_complain_reply__["a" /* ComplainReplyPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_stuff_examduty_stuff_examduty__["a" /* StuffExamdutyPage */],
                __WEBPACK_IMPORTED_MODULE_44_ng2_ripple_directive__["RippleDirective"],
                __WEBPACK_IMPORTED_MODULE_3_css_animator__["AnimatesDirective"],
                __WEBPACK_IMPORTED_MODULE_42__pages_schoolcalender_schoolcalender__["a" /* SchoolcalenderPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_students_tabs_students_tabs__["a" /* StudentsTabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
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
                        { loadChildren: '../pages/student-library-list/student-library-list.module#StudentLibraryListPageModule', name: 'StudentLibraryListPage', segment: 'student-library-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-login/student-login.module#StudentLoginPageModule', name: 'StudentLoginPage', segment: 'student-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-notice-board/student-notice-board.module#StudentNoticeBoardPageModule', name: 'StudentNoticeBoardPage', segment: 'student-notice-board', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-owndetails/student-owndetails.module#StudentOwndetailsPageModule', name: 'StudentOwndetailsPage', segment: 'student-owndetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/students-tabs/students-tabs.module#StudentsTabsPageModule', name: 'StudentsTabsPage', segment: 'students-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stuff-examduty/stuff-examduty.module#StuffExamdutyPageModule', name: 'StuffExamdutyPage', segment: 'stuff-examduty', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/staff-info/staff-info.module#StaffInfoPageModule', name: 'StaffInfoPage', segment: 'staff-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/staff-login/staff-login.module#StaffLoginPageModule', name: 'StaffLoginPage', segment: 'staff-login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__["a" /* NgCalendarModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_school_listing_school_listing__["a" /* SchoolListingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_school_details_school_details__["a" /* SchoolDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_pdf_download_pdf_download__["a" /* PdfDownloadPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_student_login_student_login__["a" /* StudentLoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_library_list_library_list__["a" /* LibraryListPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_personal_notice_personal_notice__["a" /* PersonalNoticePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_live_stream_live_stream__["a" /* LiveStreamPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_routine_routine__["a" /* RoutinePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_parents_login_parents_login__["a" /* ParentsLoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_parents_student_view_parents_student_view__["a" /* ParentsStudentViewPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_parents_child_tabs_parents_child_tabs__["a" /* ParentsChildTabsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_student_library_list_student_library_list__["a" /* StudentLibraryListPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_student_notice_board_student_notice_board__["a" /* StudentNoticeBoardPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_account_account__["b" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_parents_account_parents_account__["a" /* ParentsAccountPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_staff_login_staff_login__["a" /* StaffLoginPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_staff_info_staff_info__["a" /* StaffInfoPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_staff_complain_staff_complain__["a" /* StaffComplainPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_get_attendance_get_attendance__["a" /* GetAttendancePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_attendance_list_attendance_list__["a" /* AttendanceListPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_principal_examview_principal_examview__["a" /* PrincipalExamviewPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_principal_complaindesk_principal_complaindesk__["a" /* PrincipalComplaindeskPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_complain_reply_complain_reply__["a" /* ComplainReplyPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_stuff_examduty_stuff_examduty__["a" /* StuffExamdutyPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_schoolcalender_schoolcalender__["a" /* SchoolcalenderPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_students_tabs_students_tabs__["a" /* StudentsTabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_3_css_animator__["AnimationService"],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentOwndetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_library_list_student_library_list__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_notice_board_student_notice_board__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_notice_personal_notice__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__attendance_attendance__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routine_routine__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__apiUrl__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    };
    StudentOwndetailsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad StudentOwndetailsPage');
    };
    StudentOwndetailsPage.prototype.goToAllPdf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__student_notice_board_student_notice_board__["a" /* StudentNoticeBoardPage */]);
    };
    StudentOwndetailsPage.prototype.goToLibrary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__student_library_list_student_library_list__["a" /* StudentLibraryListPage */]);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_account__["a" /* AccountPage */]);
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
        // console.log('send data : ', data);
        this.http.post(__WEBPACK_IMPORTED_MODULE_10__apiUrl__["a" /* apiUrl */].url + "org/getdetail", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log(data)
            if (data.data) {
                _this.presentLoading(false);
                console.log('receive data : ', data.data[0]);
                _this.orgDetails = data.data[0];
            }
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
        console.log('local data : ', this.localUserData);
    };
    StudentOwndetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-owndetails',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-owndetails/student-owndetails.html"*/'<!--\n  Generated template for the StudentOwndetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="blue">\n    <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>	\n    <ion-title>College Details</ion-title>\n    <ion-buttons end>\n      <button class="bell-icon" (click)=goToPersonalNotice()> <i class="fas fa-bell fa-inverse fa-lg"></i> </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<ion-card>\n  <img [src]="orgDetails?.org_img"/>\n  <ion-card-content>\n    <ion-card-title>\n      {{orgDetails?.org_name}}\n    </ion-card-title>\n      <div float-right >\n        <p [ngStyle]="{\'font-size\': \'24px\'}">\n          <ion-icon name="cloud"></ion-icon>\n        17 °C</p>\n      </div>\n      <!-- <p ><strong>Email</strong>: demo@gmail.com</p>\n      <p><strong>Mobile</strong>: 1234567890</p> -->\n      <div [innerHtml]="orgDetails?.org_text"></div>\n      <p><strong>About</strong> : </p>\n      <div [innerHtml]="orgDetails?.org_about" class="mt-4"></div>\n  </ion-card-content>\n  \n</ion-card>\n\n\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-4 class="icon-center" (click)=goToLibrary()>\n      <img src="assets/imgs/icon.png"/>\n      <p>Library</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToAllPdf()>\n      <img src="assets/imgs/icon2.png"/>\n      <p>Notice Board</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToPersonalNotice()>\n      <img src="assets/imgs/icon6.png"/>\n      <p>Personal Notice</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-md-4 class="icon-center" (click)=goToAttendance()>\n      <img src="assets/imgs/icon3.png"/>\n      <p>Attendance</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToRoutine()>\n      <img src="assets/imgs/icon4.png"/>\n      <p>Routine</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToAccount()>\n      <img src="assets/imgs/icon5.png"/>\n      <p>Account</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n\n\n<!-- <ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3>\n        <img src="assets/imgs/white-icon5.png">\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-owndetails/student-owndetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], StudentOwndetailsPage);
    return StudentOwndetailsPage;
}());

//# sourceMappingURL=student-owndetails.js.map

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_attendance_attendance__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_routine_routine__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_personal_notice_personal_notice__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_guest_enquiry_guest_enquiry__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_student_login_student_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_students_tabs_students_tabs__ = __webpack_require__(70);
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
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_students_tabs_students_tabs__["a" /* StudentsTabsPage */];
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
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_student_login_student_login__["a" /* StudentLoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header no-padding no-margin>\n    <ion-toolbar no-padding no-margin class="toolbar-nopadding">\n      <ion-title no-padding no-margin >\n        <img src="assets/imgs/student-icon.png"/>\n        <p color="light" style="color:#fff;">User Name</p>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="content-margin">\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" color="light">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n  \n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" ></ion-nav>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 325:
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalNoticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendance_attendance__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routine_routine__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_owndetails_student_owndetails__ = __webpack_require__(30);
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
 * Generated class for the PersonalNoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalNoticePage = /** @class */ (function () {
    function PersonalNoticePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
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
    PersonalNoticePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-personal-notice',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/personal-notice/personal-notice.html"*/'<!--\n  Generated template for the PersonalNoticePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n  	<button ion-button menuToggle color="light">\n     <ion-icon name="menu"></ion-icon>\n   </button>\n    <ion-title>Personal Notice</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-card color="light" [ripple]>\n  <ion-card-header>\n    <strong>Submit fine </strong>\n  </ion-card-header>\n  <ion-card-content>\n    <p>You must submit fine for book submit date over.</p>\n    <ion-note text-right float-right>10 hours ago</ion-note>\n  </ion-card-content>\n</ion-card>\n\n<ion-card color="light" [ripple]>\n  <ion-card-header>\n    <strong>Submit fine </strong>\n  </ion-card-header>\n  <ion-card-content>\n    <p>You must submit fine for book submit date over.</p>\n    <ion-note text-right float-right>10 hours ago</ion-note>\n  </ion-card-content>\n</ion-card>\n\n\n</ion-content>\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">\n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=goToHome()>\n        <img src="assets/imgs/white-icon5.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <!-- <i text-center class="fas fa-boxes fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <!-- <i class="fas fa-box fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n\n<!-- <ion-footer class="fixed">\n  <ion-toolbar color="primary">\n  <ion-grid text-center >\n    <ion-row>\n      <div col-4 (click)=gotoLiveStream()>\n        <i text-center class="fas fa-video fa-inverse fa-lg"></i>\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-4 (click)=goToAttendance()>\n        <i text-center class="fas fa-boxes fa-inverse fa-lg"></i>\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-4 (click)=goToRoutine()>\n        <i class="fas fa-box fa-inverse fa-lg"></i>\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/personal-notice/personal-notice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PersonalNoticePage);
    return PersonalNoticePage;
}());

//# sourceMappingURL=personal-notice.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestEnquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__school_listing_school_listing__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__school_details_school_details__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apiUrl__ = __webpack_require__(25);
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
    function GuestEnquiryPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.isSearchbarOpened = false;
        this.searchQuery = '';
        this.items = [];
        this.list = [];
        this.idList = [];
        this.getData();
    }
    GuestEnquiryPage.prototype.getData = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_6__apiUrl__["a" /* apiUrl */].url + "/schools").
            map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.allSchoolsList = data;
            data.forEach(function (ele) {
                var obj = {
                    'id': ele.id,
                    'name': ele.school_name
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
        }, { animation: 'transition', duration: 1000, direction: 'forward' });
    };
    GuestEnquiryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuestEnquiryPage');
    };
    GuestEnquiryPage.prototype.goToListing = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__school_listing_school_listing__["a" /* SchoolListingPage */]);
    };
    GuestEnquiryPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item['name'].toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], GuestEnquiryPage.prototype, "searchbox", void 0);
    GuestEnquiryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-guest-enquiry',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/guest-enquiry/guest-enquiry.html"*/'<!--\n  Generated template for the GuestEnquiryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar color="blue" [hideBackButton]="isSearchbarOpened ? \'true\' : \'false\'">\n    	<ion-title *ngIf="isSearchbarOpened==false">Submit Enquiry</ion-title>\n			<ion-buttons end *ngIf="isSearchbarOpened==false" (click)="onSearchButtonClick()">\n				<button ion-button icon-only>\n					<ion-icon name="search" color="light"></ion-icon>\n				</button>\n			</ion-buttons>\n			<ion-searchbar #search (ionInput)="getItems($event)" *ngIf="isSearchbarOpened" showCancelButton="true" (ionCancel)="isSearchbarOpened=false">\n\n			</ion-searchbar>\n		</ion-navbar>\n		<div class="search-result" [ngStyle]="{\'display\':isSearchbarOpened ? \'block\' : \'none\' }">\n			<ion-list>\n			<ion-item *ngFor="let item of items" (click)="schoolsDetails(item.id)">\n				{{ item.name }}\n			</ion-item>\n		</ion-list>\n		</div>\n\n  	<!-- <ion-toolbar>\n    	<ion-searchbar></ion-searchbar>\n  	</ion-toolbar> -->\n</ion-header>\n\n\n<ion-content class="item-center" padding color="light">\n	<img src="assets/imgs/logo.jpg" class="img-width"/>\n	<!-- <h1 class="heading" text-center text-uppercase>CyberHub</h1> -->\n	<img src="assets/imgs/bk.png" class="img-width" />\n	<div class="enquiry-form">\n		 <h1 text-center text-uppercase margin-bottom color="blue">Find Your Organization</h1>\n	 <form>\n\n	 	<ion-item class="select-css">\n		  <ion-label>Country</ion-label>\n		  <ion-select>\n		    <ion-option>India</ion-option>\n		    <ion-option>Australia</ion-option>\n		    <ion-option>USA</ion-option>\n		    <ion-option>Brazil</ion-option>\n		    <ion-option>Canada</ion-option>\n		    <ion-option>France</ion-option>\n		  </ion-select>\n		</ion-item>\n\n\n	 	<ion-item class="select-css">\n	 		<ion-label>State</ion-label>\n		  <ion-select>\n		    <ion-option>West Bangal</ion-option>\n		    <ion-option>Orissa</ion-option>\n		    <ion-option>Jharkhand</ion-option>\n		    <ion-option>Uttar Pradesh</ion-option>\n		    <ion-option>Panjab</ion-option>\n		    <ion-option>Maharashtra</ion-option>\n		  </ion-select>\n		</ion-item>\n\n		<ion-item class="select-css">\n			<ion-label>City</ion-label>\n\n		  <ion-select>\n		    <ion-option>Kolkata</ion-option>\n		    <ion-option>Delhi</ion-option>\n		    <ion-option>Mumbai</ion-option>\n		    <ion-option>Lucknow</ion-option>\n		    <ion-option>Chennai</ion-option>\n		    <ion-option>Bangalore</ion-option>\n		  </ion-select>\n		</ion-item>\n		<!-- or with standalone set to true -->\n\n		 <button ion-button type="submit" block outline color="blue" class="mt-10" (click)=goToListing()>Submit Enquiry</button>\n	</form>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/guest-enquiry/guest-enquiry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], GuestEnquiryPage);
    return GuestEnquiryPage;
}());

//# sourceMappingURL=guest-enquiry.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_download_pdf_download__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_list_library_list__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__schoolcalender_schoolcalender__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apiUrl__ = __webpack_require__(25);
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
 * Generated class for the SchoolDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchoolDetailsPage = /** @class */ (function () {
    function SchoolDetailsPage(navCtrl, navParams, http, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.schoolId = navParams.get('id');
        this.getDetails(this.schoolId);
        this.initLoader();
        this.presentLoading(true);
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
    ;
    SchoolDetailsPage.prototype.getDetails = function (id) {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "/school/" + id).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.presentLoading(false);
            _this.schoolDetails = data;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__library_list_library_list__["a" /* LibraryListPage */]);
    };
    SchoolDetailsPage.prototype.goToCalender = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__schoolcalender_schoolcalender__["a" /* SchoolcalenderPage */], {
            id: this.schoolId
        });
    };
    SchoolDetailsPage.prototype.presentLoading = function (load) {
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
    SchoolDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-school-details',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/school-details/school-details.html"*/'<!--\n  Generated template for the SchoolDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n     <!--  <expandable-header [scrollArea]="mycontent" headerHeight="125">\n        <img src="assets/imgs/SCHOOLS-Banner-Images.jpg"/>\n      </expandable-header> -->\n      <ion-title>School Details</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content fullscreen="" #mycontent="">\n\n<ion-card>\n  <img src="assets/imgs/SCHOOLS-Banner-Images.jpg"/>\n  <ion-card-content>\n    <ion-card-title>\n\n      {{ schoolDetails && schoolDetails[0]?.school_name }}\n      </ion-card-title>\n      <p><strong>Address</strong>: {{ schoolDetails && schoolDetails[0]?.location }}</p>\n      <p><strong>Email</strong>: demo@gmail.com</p>\n      <p><strong>Mobile</strong>: 1234567890</p>\n      <p>The most popular industrial group ever, and largely responsible for bringing the music to a mass audience. The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n      </p>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-4 class="icon-center" (click)=gotoLiveStream()>\n      <img src="assets/imgs/icon6.png"/>\n      <p>Live Streaming</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToAllPdf()>\n      <img src="assets/imgs/icon2.png"/>\n      <p>Notice Board</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToLibrary()>\n      <img src="assets/imgs/icon.png"/>\n      <p>Library</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<!-- <ion-grid text-center>\n  <button ion-button color="blue" (click)=goToAllPdf()>NOTICE BOARD</button>\n  <button ion-button color="blue" (click)=goToLibrary()>LIBRARY MANAGEMENT</button>\n</ion-grid> -->\n\n</ion-content>\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">\n  <ion-grid text-center >\n    <ion-row>\n      <div col-3>\n        <i text-center class="fas fa-home fa-inverse fa-lg"></i>\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <i text-center class="fas fa-video fa-inverse fa-lg"></i>\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToLibrary()>\n        <i text-center class="fas fa-align-justify fa-inverse fa-lg"></i>\n        <p  class="footer-p">Library</p>\n      </div>\n      <div col-3 (click)=goToCalender()>\n        <i text-center class="far fa-calendar-alt fa-inverse fa-lg"></i>\n        <p  class="footer-p">Calender</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/school-details/school-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SchoolDetailsPage);
    return SchoolDetailsPage;
}());

//# sourceMappingURL=school-details.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLibraryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_owndetails_student_owndetails__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attendance_attendance__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routine_routine__ = __webpack_require__(18);
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
 * Generated class for the StudentLibraryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentLibraryListPage = /** @class */ (function () {
    function StudentLibraryListPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false);
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
    StudentLibraryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-library-list',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-library-list/student-library-list.html"*/'<!--\n  Generated template for the StudentLibraryListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>List of Books</ion-title>\n      <ion-buttons end class="search-icon"> <i class="fas fa-search fa-lg"></i> </ion-buttons>\n  </ion-navbar>\n   <ion-toolbar>\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n<ion-list>\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2><strong>Book Name</strong>: The Federalist Papers</h2>\n    <p><strong>Author Name</strong>: Serial installment</p>\n    <small><strong>Number of Copies</strong>: 10</small>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2><strong>Book Name</strong>: The Federalist Papers</h2>\n    <p><strong>Author Name</strong>: Serial installment</p>\n    <small><strong>Number of Copies</strong>: 10</small>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2><strong>Book Name</strong>: The Federalist Papers</h2>\n    <p><strong>Author Name</strong>: Serial installment</p>\n    <small><strong>Number of Copies</strong>: 10</small>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2><strong>Book Name</strong>: The Federalist Papers</h2>\n    <p><strong>Author Name</strong>: Serial installment</p>\n    <small><strong>Number of Copies</strong>: 10</small>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2><strong>Book Name</strong>: The Federalist Papers</h2>\n    <p><strong>Author Name</strong>: Serial installment</p>\n    <small><strong>Number of Copies</strong>: 10</small>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=goToHome()>\n        <img src="assets/imgs/white-icon5.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <!-- <i text-center class="fas fa-boxes fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n      	<!-- <i class="fas fa-box fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-library-list/student-library-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], StudentLibraryListPage);
    return StudentLibraryListPage;
}());

//# sourceMappingURL=student-library-list.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentNoticeBoardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_owndetails_student_owndetails__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attendance_attendance__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routine_routine__ = __webpack_require__(18);
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
 * Generated class for the StudentNoticeBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentNoticeBoardPage = /** @class */ (function () {
    function StudentNoticeBoardPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false);
    }
    StudentNoticeBoardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentNoticeBoardPage');
    };
    StudentNoticeBoardPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */]);
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
    StudentNoticeBoardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-notice-board',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-notice-board/student-notice-board.html"*/'<!--\n  Generated template for the StudentNoticeBoardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Notice Board</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-list>\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/download-img.png">\n    </ion-thumbnail>\n    <h2>Your Pdf Download</h2>\n    <p>Hayao Miyazaki • 1992</p>\n    <button ion-button clear item-end><i class="fas fa-download fa-2x"></i></button>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/download-img.png">\n    </ion-thumbnail>\n    <h2>My School Name</h2>\n    <p>Hayao Miyazaki • 1992</p>\n    <button ion-button clear item-end><i class="fas fa-download fa-2x"></i></button>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/download-img.png">\n    </ion-thumbnail>\n    <h2>My School Name</h2>\n    <p>Hayao Miyazaki • 1992</p>\n    <button ion-button clear item-end><i class="fas fa-download fa-2x"></i></button>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/download-img.png">\n    </ion-thumbnail>\n    <h2>My School Name</h2>\n    <p>Hayao Miyazaki • 1992</p>\n    <button ion-button clear item-end><i class="fas fa-download fa-2x"></i></button>\n  </ion-item>\n</ion-list>\n</ion-content>\n\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=goToHome()>\n        <img src="assets/imgs/white-icon5.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <!-- <i text-center class="fas fa-boxes fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n      	<!-- <i class="fas fa-box fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-notice-board/student-notice-board.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], StudentNoticeBoardPage);
    return StudentNoticeBoardPage;
}());

//# sourceMappingURL=student-notice-board.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routine_routine__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parents_student_view_parents_student_view__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__attendance_attendance__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apiUrl__ = __webpack_require__(25);
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
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(menuCtrl, navCtrl, navParams, http, loadingController, jsonp, modalCtrl) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.jsonp = jsonp;
        this.modalCtrl = modalCtrl;
        this.menuCtrl.enable(false);
        this.initLoader();
    }
    AccountPage.prototype.ngOnInit = function () {
        this.getUserDataFromLocal();
        this.getStudentDetails();
        this.showSelectDepartmentBtn = false;
        // this.getShiftLists();
    };
    AccountPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad AccountPage');
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
        // console.log('local data : ', this.localUserData);    
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
            // console.log('student details : ', data.data[0]);
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
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="back-ground">\n      <img src="assets/imgs/student-icon.png"/>\n      <h5 text-center text-uppercase color="light">{{studentDetails?.f_name}} {{studentDetails?.l_name}}</h5>\n      <p text-center text-uppercase no-padding no-margin>{{studentDetails?.user_name}}</p>\n      <p text-center text-uppercase no-padding no-margin>{{studentDetails?.nameclass.class.class_name}} {{studentDetails?.nameclass.section.sec_name}}</p>\n      <p text-center>\n        <button class="btnStyle" ion-button color="dark" outline (click)="openModal()" *ngIf="!studentDetails?.nameclass.class.class_name">Select Department</button>\n      </p>\n  </div>\n\n  <ion-card>\n  <ion-card-content>\n      <p><strong>Email</strong>: {{studentDetails?.email}}</p>\n      <p><strong>Mobile</strong>: {{localUserData?.mobile_no}}</p>\n      <p><strong>Adhaar</strong>: {{studentDetails?.adhar_no}}</p>\n      <p><strong>Caste</strong>: {{studentDetails?.cast_category}}</p>\n      <p><strong>DOB</strong>: {{studentDetails?.dob}}</p>\n      <p><strong>Gender</strong>: {{studentDetails?.gender}}</p>\n      <p><strong>Roll No</strong>: {{studentDetails?.roll_no}}</p>\n      <p><strong>Registration No</strong>: {{studentDetails?.registration_no}}</p>\n      <button ion-button type="submit" block outline color="blue" class="mt-10" (click)=goToPassword()>Change Password</button>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=gotoHome()>\n        <img src="assets/imgs/white-icon5.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <!-- <i text-center class="fas fa-boxes fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <!-- <i class="fas fa-box fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], AccountPage);
    return AccountPage;
}());

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
            console.log("Org shift list ", data.data);
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
            console.log("Org class list ", data.data);
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
        console.log('shift : ', e);
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
        console.log('sort array : ', this.sortArray);
    };
    // ########################################################################
    //      ------------------ After choose class/stream -----------------
    // ########################################################################
    ModalPage.prototype.onChooseClassStream = function (e) {
        console.log(e);
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
        console.log('filter section array : ', this.filteredArrayForSectionList);
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
            console.log("after add data : ", data);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsStudentViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_notice_board_student_notice_board__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_library_list_student_library_list__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routine_routine__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_notice_personal_notice__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__attendance_attendance__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parents_account_parents_account__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guest_enquiry_guest_enquiry__ = __webpack_require__(44);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__student_notice_board_student_notice_board__["a" /* StudentNoticeBoardPage */]);
    };
    ParentsStudentViewPage.prototype.goToLibrary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__student_library_list_student_library_list__["a" /* StudentLibraryListPage */]);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], ParentsStudentViewPage);
    return ParentsStudentViewPage;
}());

//# sourceMappingURL=parents-student-view.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    function ParentsAccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ParentsAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParentsAccountPage');
    };
    ParentsAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-parents-account',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-account/parents-account.html"*/'<!--\n  Generated template for the ParentsAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="back-ground">\n      <img src="assets/imgs/student-icon.png"/>\n      <h5 text-center text-uppercase color="light">My Name</h5>\n      <p text-center text-uppercase>Register Id: 123456789</p>\n  </div>\n\n  <ion-card>\n  <ion-card-content>\n      <p><strong>Email</strong>: demo@gmail.com</p>\n      <p><strong>Mobile</strong>: 1234567890</p>\n      <p><strong>Child Name One</strong>: Loriem Ipsum</p>\n      <p><strong>Child Name Two</strong>: Loriem Ipsum</p>\n      <p><strong>Child Name Three</strong>: Loriem Ipsum</p>\n      <br/>\n      <button ion-button type="submit" block outline color="blue" class="mt-10" (click)=goToPassword()>Change Password</button>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=gotoHome()>\n        <img src="assets/imgs/white-icon5.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n       <!--  <i text-center class="fas fa-video fa-inverse fa-lg"></i> -->\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <!-- <i text-center class="fas fa-boxes fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <!-- <i class="fas fa-box fa-inverse fa-lg"></i> -->\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-account/parents-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ParentsAccountPage);
    return ParentsAccountPage;
}());

//# sourceMappingURL=parents-account.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__school_details_school_details__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__ = __webpack_require__(12);
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
 * Generated class for the LibraryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LibraryListPage = /** @class */ (function () {
    function LibraryListPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu.enable(false);
    }
    LibraryListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LibraryListPage');
    };
    LibraryListPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__school_details_school_details__["a" /* SchoolDetailsPage */]);
    };
    LibraryListPage.prototype.gotoLiveStream = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__["a" /* LiveStreamPage */]);
    };
    LibraryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-library-list',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/library-list/library-list.html"*/'<!--\n  Generated template for the LibraryListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>List of Books</ion-title>\n      <ion-buttons end class="search-icon"> <i class="fas fa-search fa-lg"></i> </ion-buttons>\n  </ion-navbar>\n   <ion-toolbar>\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n<ion-list>\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2><strong>Book Name</strong>: The Federalist Papers</h2>\n    <p><strong>Author Name</strong>: Serial installment</p>\n    <small><strong>Number of Copies</strong>: 10</small>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2><strong>Book Name</strong>: The Federalist Papers</h2>\n    <p><strong>Author Name</strong>: Serial installment</p>\n    <small><strong>Number of Copies</strong>: 10</small>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2><strong>Book Name</strong>: The Federalist Papers</h2>\n    <p><strong>Author Name</strong>: Serial installment</p>\n    <small><strong>Number of Copies</strong>: 10</small>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2><strong>Book Name</strong>: The Federalist Papers</h2>\n    <p><strong>Author Name</strong>: Serial installment</p>\n    <small><strong>Number of Copies</strong>: 10</small>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2><strong>Book Name</strong>: The Federalist Papers</h2>\n    <p><strong>Author Name</strong>: Serial installment</p>\n    <small><strong>Number of Copies</strong>: 10</small>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-4 (click)=goToHome()>\n        <i text-center class="fas fa-home fa-inverse fa-lg"></i>\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-4 (click)=gotoLiveStream()>\n        <i text-center class="fas fa-video fa-inverse fa-lg"></i>\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-4>\n        <i text-center class="fas fa-align-justify fa-inverse fa-lg"></i>\n        <p  class="footer-p">Library</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/library-list/library-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], LibraryListPage);
    return LibraryListPage;
}());

//# sourceMappingURL=library-list.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__students_tabs_students_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apiUrl__ = __webpack_require__(25);
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
    function StudentLoginPage(navCtrl, navParams, http, loadingController, jsonp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.jsonp = jsonp;
        this.isShown = false;
        this.isHide = true;
        this.initLoader();
        // setTimeout(() => {
        // 	//
        // }, 1000);
    }
    StudentLoginPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    StudentLoginPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad StudentLoginPage');
    };
    StudentLoginPage.prototype.goToListing = function () {
        var _this = this;
        this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            'username': this.student_register
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_5__apiUrl__["a" /* apiUrl */].url + "user/student", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log(data)
            if (data.data) {
                _this.presentLoading(false);
                _this.userdata = data.data;
                _this.isShown = true;
                _this.isHide = false;
                _this.phone = data.data[0].mobile_no;
                _this.OTP = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
                localStorage.setItem('userData', JSON.stringify(data.data[0]));
                // this.jsonp.request(`http://control.msg91.com/api/sendotp.php?otp_length=4&authkey=${messageVendor.authkey}&sender=${messageVendor.sender}&mobile=${data[0].mobile_no}&otp=${this.OTP}`).subscribe(data =>{
                // 	console.log(data);						
                // })
                console.log(_this.OTP);
            }
        });
    };
    StudentLoginPage.prototype.goToOwnDetails = function () {
        if (this.OTP == this.otp_pass) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__students_tabs_students_tabs__["a" /* StudentsTabsPage */]);
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
    StudentLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-login',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-login/student-login.html"*/'<!--\n  Generated template for the StudentLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="item-center" padding color="secondary">\n	<img src="assets/imgs/logo.jpg" class="img-width"/>\n	<!-- <h1 class="heading" text-center text-uppercase>CyberHub</h1> -->\n	<img src="assets/imgs/bk.png" class="img-width"/>\n	<div class="enquiry-form">\n		 <h3 class="title" text-center text-uppercase margin-bottom>Enter Regitration Id</h3>\n	 	<form>\n			<ion-list style="background-color: none;">\n			  <ion-item >\n			  	<ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n			    <ion-input type="text" autofocus name="student_register" placeholder="Register Id" no-margin [(ngModel)]="student_register"></ion-input>\n			  </ion-item>\n			\n			<button ion-button block outline color="blue" class="mt-10" *ngIf="isHide" (click)=goToListing()>Submit</button>\n\n			<button block ion-button outline text-left color="blue" *ngIf="isShown">Register_Id: {{student_register}} </button>\n			<button block ion-button outline text-left color="blue" *ngIf="isShown">Phone: {{phone}}</button>\n\n				<ion-item *ngIf="isShown" margin-top >\n			    <ion-input type="number" name="otp_pass" maxlengtgh=4 [(ngModel)]="otp_pass" placeholder="Enter One Time Password" no-margin></ion-input>\n				</ion-item>\n				<p *ngIf="isShown">Not getting any message? <a href="#" (click)="resendMessage()">Resend</a> </p>\n			</ion-list>\n			<button ion-button block color="blue" class="mt-10" *ngIf="isShown" (click)=goToOwnDetails()>Next</button>\n		</form>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-login/student-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Jsonp */]])
    ], StudentLoginPage);
    return StudentLoginPage;
}());

//# sourceMappingURL=student-login.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_owndetails_student_owndetails__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__live_stream_live_stream__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__attendance_attendance__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routine_routine__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__apiUrl__ = __webpack_require__(25);
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
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__live_stream_live_stream__["a" /* LiveStreamPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__attendance_attendance__["a" /* AttendancePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__routine_routine__["a" /* RoutinePage */];
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
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
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
            case (currentIndex < index):
                return ('left');
            case (currentIndex > index):
                return ('right');
        }
    };
    StudentsTabsPage.prototype.getUserData = function () {
        var _this = this;
        this.presentLoading(true);
        var header = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["f" /* RequestOptions */]({ headers: header });
        var data = {
            'org_id': this.localUserData.org_code,
        };
        // console.log('send data : ', data);
        this.http.post(__WEBPACK_IMPORTED_MODULE_9__apiUrl__["a" /* apiUrl */].url + "org/getdetail", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log(data)
            if (data.data) {
                _this.presentLoading(false);
                // console.log('receive data : ', data.data[0]);
                _this.orgDetails = data.data[0];
            }
        });
    };
    StudentsTabsPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
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
            selector: 'page-students-tabs',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/students-tabs/students-tabs.html"*/'<ion-content>\n\n  <ion-tabs id="tabs" color="blue">\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="true" (swipe)="transition($event)"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Live" tabIcon="videocam" tabsHideOnSubPages="true" (swipe)="transition($event)"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Attendance" tabIcon="done-all" tabsHideOnSubPages="true" (ionChange)="transition($event)"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Routine" tabIcon="list" tabsHideOnSubPages="true" (ionChange)="transition($event)"></ion-tab>\n  </ion-tabs>\n\n</ion-content>\n\n<!-- <ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3>\n        <img src="assets/imgs/white-icon5.png">\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/students-tabs/students-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */]])
    ], StudentsTabsPage);
    return StudentsTabsPage;
}());

//# sourceMappingURL=students-tabs.js.map

/***/ })

},[237]);
//# sourceMappingURL=main.js.map