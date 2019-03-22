webpackJsonp([39],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__students_tabs_students_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__std_reg_std_reg__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_fcm_fcm__ = __webpack_require__(122);
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
    function StudentLoginPage(navCtrl, navParams, http, loadingController, jsonp, alertCtrl, fcm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.jsonp = jsonp;
        this.alertCtrl = alertCtrl;
        this.fcm = fcm;
        this.isShown = false;
        this.isHide = true;
        this.show = false;
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
                    localStorage.setItem('userData', JSON.stringify(data.data[0]));
                    // console.log('login data : ', data.data);	
                    _this.fcm.getToken();
                    _this.presentLoading(false);
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
    StudentLoginPage.prototype.password = function () {
        this.show = !this.show;
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
            selector: 'page-student-login',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-login/student-login.html"*/'<!--\n  Generated template for the StudentLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title style="text-decoration: none;">Student Login</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content class="item-center" padding color="secondary" style="padding-top: 100px;">\n	\n	<!-- <img src="assets/imgs/inunco-dark.png" class="img-width"/> -->\n	<!-- <img src="assets/imgs/bk.png" class="img-width"/> -->\n	<div text-center style="margin-top: 40px;">\n		<!-- <img class="logo-school" src="assets/icon/cyverhub_logo.svg"> -->\n		<h4 style="font-size: 1.9rem;">\n			<img class="login-page-logo" src="assets/icon/cyverhub_logo.svg">\n			<img class="straight-line" src="assets/icon/substract.svg">\n			   Welcome Student !\n		</h4>\n	</div>\n\n\n	<div class="enquiry-form">\n			<p class="sub-line">\n				<span>Login to access features<br>which provide with you.</span>\n			</p>\n		 <p class="" text-center text-capitalize margin-bottom style="text-decoration: underline; font-size: 16px;">Login with your credentials</p>\n	 	<form>\n			<ion-list style="background-color: none;">\n			  <ion-item>\n			  	<ion-label floating style="color: #9a9a9a"> <ion-icon ios="ios-mail" md="md-mail"></ion-icon> Account ID</ion-label>\n					<ion-input type="text" name="student_register" no-margin [(ngModel)]="student_register"></ion-input>					\n				</ion-item>\n\n				<p class="input-info">Which Created by Cyberhub</p>\n				\n				<ion-item>\n			  	<ion-label floating style="color: #9a9a9a"> <ion-icon name="lock"></ion-icon> Account Password</ion-label>\n			    <ion-input [type]="show ? \'text\' : \'password\'" name="student_password" no-margin [(ngModel)]="student_password"></ion-input>\n					<button ion-button clear icon-start item-end (click)="password()" style="margin-top: 36px;">\n						<ion-icon [name]="show ? \'eye\' : \'eye-off\'"></ion-icon>\n					</button>\n					<!-- <ion-icon item-end  ></ion-icon> -->					\n				</ion-item>\n\n				<p class="input-info">Which Created by Cyberhub</p>\n\n				<!-- <button ion-button block outline color="blue" class="mt-10" *ngIf="isHide" (click)=loginSubmit()>Submit</button> -->\n				<div text-center style="margin-top: 25px;">\n						<button ion-button color="blue" class="btn-size mt-10" *ngIf="isHide" (click)=loginSubmit()>Submit</button>\n				</div>\n\n\n\n			<!-- <ion-grid> -->\n				<!-- <ion-row col-12 text-center>\n					<div>\n						<button ion-button color="blue" class="btn-size mt-10" *ngIf="isHide" (click)=loginSubmit()>Submit</button>\n					</div>\n				</ion-row> -->\n\n				<!-- <ion-row col-12> -->\n				<div text-capitalize text-center>\n					<p (click)=\'goToRegister()\' style="font-size: 16px; cursor: pointer; font-weight: bold; margin-top: 40px;">Not registered yet?<br> click here to get registered now.</p>\n				</div>\n				<!-- </ion-row>	 -->\n				<!-- <ion-row>\n					<ion-row col-6>\n						<button ion-button block outline color="blue" class="" (click)=\'goToRegister()\'>Registration</button>\n					</ion-row>\n					<ion-row col-6>\n						<button ion-button block outline color="blue" class="" (click)=\'gotoHome()\'>Back</button>\n					</ion-row>\n				</ion-row> -->\n			<!-- </ion-grid> -->\n\n			<button block ion-button outline text-left color="blue" *ngIf="isShown">Register_Id: {{student_register}} </button>\n			<button block ion-button outline text-left color="blue" *ngIf="isShown">Phone: {{phone}}</button>\n\n				<ion-item *ngIf="isShown" margin-top >\n			    <ion-input type="number" name="otp_pass" maxlengtgh=4 [(ngModel)]="otp_pass" placeholder="Enter One Time Password" no-margin></ion-input>\n				</ion-item>\n				<p *ngIf="isShown">Not getting any message? <a href="#" (click)="resendMessage()">Resend</a> </p>\n			</ion-list>\n\n\n			<button ion-button block color="blue" class="mt-10" *ngIf="isShown" (click)=goToOwnDetails()>Next</button>\n\n		</form>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-login/student-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__providers_fcm_fcm__["a" /* FcmProvider */]])
    ], StudentLoginPage);
    return StudentLoginPage;
}());

//# sourceMappingURL=student-login.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsAccountPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuesmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stuff_change_pass_stuff_change_pass__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stuff_edit_stuff_edit__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__ = __webpack_require__(212);
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
    function ParentsAccountPage(navCtrl, navParams, menuCtrl, loadingController, http, jsonp, modalCtrl, camera, loadingCtrl, toastCtrl, actionSheetCtrl, platform, transfer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.jsonp = jsonp;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.transfer = transfer;
        this.imageFileName = "assets/imgs/student-icon.png";
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
                console.log('teacher details : ', data.data[0]);
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
        if (this.localUserData.profile_image) {
            this.profile_image = __WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "public/uploads/profile_pic/" + this.localUserData.profile_image;
        }
        else {
            this.profile_image = "assets/imgs/student-icon.png";
        }
    };
    ParentsAccountPage.prototype.getImage = function () {
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
            fileTransfer.upload(_this.imageURI, __WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "user/addprofileimage", options)
                .then(function (data) {
                if (data) {
                    // alert(JSON.stringify(data.response));
                    var parseData = JSON.parse(data.response);
                    // this.presentLoading(false);
                    _this.imageFileName = __WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "public/uploads/profile_pic/" + parseData.data.profile_image;
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
    ParentsAccountPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ParentsAccountPage.prototype.addQues = function () {
        var modal = this.modalCtrl.create(QuesmodalPage);
        modal.present();
    };
    ParentsAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-parents-account',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-account/parents-account.html"*/'<!--\n  Generated template for the ParentsAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="back-ground">\n      <img class="profile-image" src="{{profile_image}}" *ngIf="profile_image"/>\n      <button ion-button icon-only round small color="light" class="camera-icon" (click)="getImage()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n      <h5 text-center text-uppercase color="light">{{teacherDetails?.name}}</h5>\n      <p text-center text-uppercase>Register Id: {{teacherDetails?.user_name}}</p>\n  </div>\n\n  <ion-card style="background-color: #1b1b1b; border: 1px solid #fff">\n    <ion-card-content>\n        <p class="color-white"><strong>Email</strong>: {{teacherDetails?.email}}</p>\n        <p class="color-white"><strong>Identification No.</strong>: {{teacherDetails?.adhar_no}}</p>\n        <p class="color-white"><strong>Mobile</strong>: 1234567890</p>\n        <p class="color-white"><strong>Gender</strong>: {{teacherDetails?.gender}}</p>\n        <p class="color-white"><strong>qualification</strong>: {{teacherDetails?.qualification}}</p>\n        <p class="color-white"><strong>Short Name</strong>: {{teacherDetails?.short_name}}</p>\n        <p class="color-white"><strong>Deperment</strong>: Physics </p>\n        <p class="color-white"><strong>DOB</strong>: 31/01/1970 </p>\n        <p class="color-white"><strong>Degignation</strong>: Professor </p>\n        <br/>\n        <button ion-button type="submit" block outline color="blue" class="mt-10" (click)=goToPassword()>Change Password</button>\n        <button ion-button type="submit" block outline color="blue" class="mt-10" (click)=goToEditProfile()>Edit Profile</button>\n        <button ion-button type="submit" block outline color="blue" class="mt-10" (click)=addQues()>Add Security Pin</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n\n\n\n<!-- <ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=gotoHome()>\n        <img src="assets/imgs/white-icon5.png">\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-account/parents-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__["a" /* Transfer */]])
    ], ParentsAccountPage);
    return ParentsAccountPage;
}());

var QuesmodalPage = /** @class */ (function () {
    // showDeptSelection: boolean = true;
    function QuesmodalPage(platform, params, viewCtrl, menuCtrl, navCtrl, navParams, http, loadingController, jsonp, modalCtrl, toastCtrl) {
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
        this.toastCtrl = toastCtrl;
        this.btnDisabled = false;
        // var characters = [];
        // this.character = characters[this.params.get('charNum')];
        this.getUserDataFromLocal();
    }
    QuesmodalPage.prototype.ngOnInit = function () {
        // this.sortArray = [];
        // this.filteredArrayForClassList = [];
        // this.getUserDataFromLocal();
        // this.getStudentDetails();
        // this.showSelectDepartmentBtn = false;
        // this.getShiftLists();
        // this.getClassList();    
    };
    QuesmodalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    // ########################################################################
    //    -------------- getting user data from localstorage ---------------
    // ########################################################################
    QuesmodalPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);    
    };
    // ########################################################################
    // ----------- submit Guardian Info function -----------
    // ########################################################################
    QuesmodalPage.prototype.submitSecurityPin = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            u_id: this.localUserData.id,
            pin: this.securityPin,
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "user/add-pin", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (getdata) {
            console.log('after add pin submit : ', getdata);
            if (getdata.status == 1) {
                _this.dismiss();
                localStorage.setItem("securitypinadded", JSON.stringify(data));
                // this.navCtrl.push();
            }
            else {
                _this.presentToast('Sorry, Something went wrong.');
            }
        });
    };
    // checkForValidPin
    QuesmodalPage.prototype.checkForValidPin = function () {
        var pinString = this.securityPin.toString();
        console.log('pin length : ', pinString.length);
        if (pinString.length === 6) {
            this.btnDisabled = true;
        }
        else {
            this.btnDisabled = false;
        }
    };
    QuesmodalPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    QuesmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-account/quesmodal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Add Security Pin</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Security Pin (6 digit)</ion-label>\n      <ion-input type="number" name="securityPin" no-margin [(ngModel)]="securityPin" (ionChange)="checkForValidPin()">\n      </ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button type="submit" block outline color="blue" class="mt-10" (click)="submitSecurityPin()"\n    [disabled]="!btnDisabled">Submit</button>\n  <!-- <button ion-button type="submit" block outline color="blue" class="mt-10" (click)="dismiss()">Skip For Now</button> -->\n</ion-content>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-account/quesmodal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Jsonp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], QuesmodalPage);
    return QuesmodalPage;
}());

//# sourceMappingURL=parents-account.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_info_staff_info__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stuff_registration_stuff_registration__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__staff_tabs_staff_tabs__ = __webpack_require__(141);
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
    function StaffLoginPage(navCtrl, navParams, http, alertCtrl, loadingController, fcm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.fcm = fcm;
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
                    localStorage.setItem("userData", JSON.stringify(data.data[0]));
                    _this.fcm.getToken();
                    _this.presentLoading(false);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__staff_tabs_staff_tabs__["a" /* StaffTabsPage */]);
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
            selector: "page-staff-login",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-login/staff-login.html"*/'<ion-content class="item-center" padding color="secondary">\n	<div text-center style="margin-top: 40px;">\n		<h4 style="font-size: 1.9rem;">\n			<img class="login-page-logo" src="assets/icon/cyverhub_logo.svg">\n			<img class="straight-line" src="assets/icon/substract.svg"> Welcome Stuff !\n		</h4>\n	</div>\n\n	<div class="enquiry-form">\n		<p class="sub-line">\n			<span>Here you can login to access all <br>the features your organisation <br>provides you with.</span>\n			</p>\n			<p class="" text-center text-capitalize margin-bottom style="text-decoration: underline; font-size: 16px;">Login with your credentials</p>\n	 	<form>\n			<ion-list style="background-color: none;">\n\n			  <ion-item>\n			  	<ion-label floating style="color: #9a9a9a"> <ion-icon ios="ios-mail" md="md-mail"></ion-icon> Account ID</ion-label>\n			    <ion-input type="text" name="regID" no-margin [(ngModel)]="regID"></ion-input>\n				</ion-item>\n				<p class="input-info">Which Created by Cyberhub</p>\n				\n			  <ion-item>\n			  	<ion-label floating style="color: #9a9a9a"> <ion-icon name="lock"></ion-icon> Account Password</ion-label>\n			    <ion-input type="password" name="pass" no-margin [(ngModel)]="pass"></ion-input>\n				</ion-item>\n				<p class="input-info">Which Created by Cyberhub</p>\n\n				<div text-center style="margin-top: 25px;">\n					<button ion-button color="blue" class="btn-size mt-10" (click)=onStuffLoginSubmit()>Submit</button>\n				</div>\n\n				<div text-capitalize text-center margin-top>\n						<p (click)=goToRegister()  style="font-size: 16px; cursor: pointer; margin-top: 40px;">Not registered yet?<br> click here to get registered now.</p>\n				</div>\n			</ion-list>\n		</form>\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-login/staff-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__["a" /* FcmProvider */]])
    ], StaffLoginPage);
    return StaffLoginPage;
}());

//# sourceMappingURL=staff-login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolcalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_owndetails_student_owndetails__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__staff_info_staff_info__ = __webpack_require__(36);
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
        console.log(event);
        var startTime = event.startTime.toString().substring(0, 16);
        var endTime = event.endTime.toString().substring(0, 16);
        var alert = this.alertCtrl.create({
            title: "Event",
            cssClass: "eventAlert",
            message: "<div>\n      <p>Title : " + event.title + "</p>\n      <p>Description : " + event.desc + "</p>\n      </div>\n      <p>Event Started: " + startTime + ", To: " + endTime + "</p>\n      ",
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
                                    }];
                            case 1:
                                obj = _a.sent();
                                this.eventSource.push(obj);
                                console.log('arr item : ', this.eventSource);
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
            selector: 'page-schoolcalender',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/schoolcalender/schoolcalender.html"*/'<!--\n  Generated template for the SchoolcalenderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{viewTitle}}</ion-title>\n\n    <ion-buttons end (click)=goToHome() *ngIf="localUserData == null">\n        <button ion-button icon-only>\n          <ion-icon name="home" color="light"></ion-icon>\n        </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- <ion-buttons end>\n    <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n  </ion-buttons>\n  \n  <br> -->\n\n  <calendar [eventSource]="eventSource" [calendarMode]="calendar.mode" [currentDate]="calendar.currentDate" (onCurrentDateChanged)="onCurrentDateChanged($event)"\n    (onRangeChanged)="reloadSource(startTime, endTime)" (onEventSelected)="onEventSelected($event)" (onTitleChanged)="onViewTitleChanged($event)"\n    (onTimeSelected)="onTimeSelected($event)" step="30">\n  </calendar>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/schoolcalender/schoolcalender.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SchoolcalenderPage);
    return SchoolcalenderPage;
}());

//# sourceMappingURL=schoolcalender.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__ = __webpack_require__(194);
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



// import { Observable } from 'rxjs';
var FcmProvider = /** @class */ (function () {
    function FcmProvider(firebaseNative, afs, platform, http) {
        this.firebaseNative = firebaseNative;
        this.afs = afs;
        this.platform = platform;
        this.http = http;
        // this.localVal = JSON.parse(localStorage.getItem('userData'));
    }
    FcmProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, perm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 3:
                        token = _a.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        perm = _a.sent();
                        _a.label = 5;
                    case 5:
                        // Is not cordova == web PWA
                        if (!this.platform.is('cordova')) {
                            // TODO add PWA support with angularfire2
                        }
                        return [2 /*return*/, this.saveTokenToFirestore(token)];
                }
            });
        });
    };
    FcmProvider.prototype.saveTokenToFirestore = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var localVal, headers, options, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!token)
                            return [2 /*return*/];
                        return [4 /*yield*/, JSON.parse(localStorage.getItem('userData'))];
                    case 1:
                        localVal = _a.sent();
                        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                        headers.append('Content-Type', 'application/json');
                        options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: headers });
                        data = {
                            id: localVal.id,
                            token: token
                        };
                        this.http.post(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* apiUrl */].url + "/user/savetoken", data, options)
                            .map(function (res) { return res.json(); }).subscribe(function (data) {
                            // alert(JSON.stringify(data))
                            if (data.status == 1) {
                                return data;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FcmProvider.prototype.listenToNotifications = function () {
        return this.firebaseNative.onNotificationOpen();
    };
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal1Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SecuritypinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routine_routine__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parents_student_view_parents_student_view__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__attendance_attendance__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_chart_js__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_chart_js__);
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
    function AccountPage(menuCtrl, navCtrl, navParams, http, loadingController, jsonp, modalCtrl, camera, loadingCtrl, toastCtrl, actionSheetCtrl, platform, transfer) {
        var _this = this;
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
        this.transfer = transfer;
        this.imageFileName = "assets/imgs/student-icon.png";
        this.lastImage = null;
        this.showDeptSelection = false;
        this.menuCtrl.enable(false);
        this.initLoader();
        // this.getData = this.navParams.get('data');
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.getViews().length > 1) {
                _this.navCtrl.pop();
            }
        });
        this.issecurityadded = JSON.parse(localStorage.getItem("securitypinadded"));
    }
    AccountPage.prototype.ngOnInit = function () {
        this.getUserDataFromLocal();
        this.getStudentDetails();
        this.getAttendanceDetails();
    };
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_11_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
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
        if (this.localUserData.profile_image && this.localUserData.digit_pin != 0) {
            this.profile_image = __WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "public/uploads/profile_pic/" + this.localUserData.profile_image;
            var setdata = {
                u_id: this.localUserData.id,
                pin: this.localUserData.digit_pin,
            };
            localStorage.setItem("securitypinadded", JSON.stringify(setdata));
            this.issecurityadded = JSON.parse(localStorage.getItem("securitypinadded"));
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
                console.log('student detasisld : ', _this.studentDetails);
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
    AccountPage.prototype.goToEnterSecurityPin = function () {
        var modal = this.modalCtrl.create(SecuritypinPage);
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
    AccountPage.prototype.getAttendanceDetails = function () {
        // this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            'org_id': this.localUserData.org_code,
            'dept_id': this.localUserData.dept_id,
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].node_url + "getStudentAttnPercent", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('attn data : ', data);
            // data.data.forEach(elem => {
            // });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "doughnutCanvas", void 0);
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="back-ground">\n    <div class="mh-container">\n      <img class="profile-image" src="{{profile_image}}" *ngIf="profile_image"/>\n      <button ion-button icon-only round small color="light" class="camera-icon" (click)="getImage()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n    </div>\n      <!-- <button ion-button block outline color="blue" class="mt-10 ml-10 mr-10" (click)="getImage()">Get Image</button>\n      <button ion-button block outline color="blue" class="mt-10 ml-10 mr-10" (click)="uploadFile()">Upload Image</button> -->\n      <h5 text-center text-uppercase color="light">{{studentDetails?.f_name}} {{studentDetails?.l_name}}</h5>\n      <p text-center text-uppercase no-padding no-margin>{{studentDetails?.user_name}}</p>\n      <p text-center text-uppercase no-padding no-margin>{{studentDetails?.nameclass?.class?.class_name}} {{studentDetails?.nameclass?.section?.sec_name}}</p>\n      <p text-center text-uppercase no-padding no-margin>Semester : {{studentDetails?.nameclass?.sem_id?.sem_no}}</p>\n      <p text-center text-uppercase no-padding no-margin>Attendance : 60%</p>\n      <p text-center>\n        <button class="btnStyle" ion-button color="dark" outline (click)="openModal()" *ngIf="studentDetails?.nameclass == null">Select Department</button>\n      </p>\n  </div>\n\n    <!-- <ion-card>\n      <ion-card-header>\n        Doughnut Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #doughnutCanvas></canvas>\n      </ion-card-content>\n    </ion-card> -->\n\n  <ion-card style="background-color: #353434; border: 1px solid #fff;" class="text-white">\n    <ion-card-content>\n        <p><strong>Email</strong>: {{studentDetails?.email}}</p>\n        <p><strong>Mobile</strong>: {{localUserData?.mobile_no}}</p>\n        <p><strong>Identification No.</strong>: {{studentDetails?.adhar_no}}</p>\n        <p><strong>Caste</strong>: {{studentDetails?.cast_category}}</p>\n        <p><strong>DOB</strong>: {{studentDetails?.dob}}</p>\n        <p><strong>Gender</strong>: {{studentDetails?.gender}}</p>\n        <p><strong>Roll No</strong>: {{studentDetails?.roll_no}}</p>\n        <p><strong>Registration No</strong>: {{studentDetails?.registration_no}}</p>\n        <button ion-button type="submit" block outline color="light" class="mt-10" (click)=goToPassword()>Change Password</button>\n        \n        <button ion-button type="submit" block outline color="light" class="mt-10" *ngIf="! issecurityadded" (click)=goToEnterSecurityPin()>Set Security Pin</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n\n<!-- \n<ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n    <ion-grid text-center >\n      <ion-row>\n        <div col-3 (click)=gotoHome()>\n          <img src="assets/imgs/white-icon5.png">\n          <p class="footer-p">Home</p>\n        </div>\n        <div col-3 (click)=gotoLiveStream()>\n          <img src="assets/imgs/white-icon1.png">\n          <p class="footer-p">Live Streaming</p>\n        </div>\n        <div col-3 (click)=goToAttendance()>\n          <img src="assets/imgs/white-icon2.png">\n          <p  class="footer-p">Attendance</p>\n        </div>\n        <div col-3 (click)=goToRoutine()>\n          <img src="assets/imgs/white-icon3.png">\n          <p  class="footer-p">Routine</p>\n        </div>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__["a" /* Transfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__["a" /* Transfer */]) === "function" && _o || Object])
    ], AccountPage);
    return AccountPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());
/* harmony default export */ __webpack_exports__["d"] = (AccountPage);
var ModalPage = /** @class */ (function () {
    // showDeptSelection: boolean = true;
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
            console.log("Raw class list ", data.data);
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
        var _this = this;
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
            // this.showDeptSelection = false;
            if (data.status == 1) {
                // this.navCtrl.push(AccountPage);              
                var modal1 = _this.modalCtrl.create(Modal1Page);
                modal1.present();
            }
        });
    };
    // ########################################################################
    // ----------- sorting class list array here for looping -----------
    // ########################################################################
    ModalPage.prototype.createSortArray = function (arr) {
        var _this = this;
        // var rs = 1;
        var currYear = new Date().getFullYear();
        console.log('year : ', currYear);
        arr.forEach(function (ele) {
            if (currYear == ele.year) {
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
                    console.log('class section : ', _this.sortArray);
                }
                else {
                    _this.sortArray.push(obj);
                }
            }
        });
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/modal.html"*/'<ion-header>\n        <ion-toolbar>\n          <ion-title>Add Department</ion-title>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()" style="\n            width: 61%; font-size: 2.2rem;">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <ion-item>\n        <ion-label>Shift</ion-label>\n        <ion-select [(ngModel)]="shift" (ionChange)="onChooseShift($event)">\n          <ng-container *ngFor="let shift of orgShiftLists">\n            <ion-option value="{{shift?.orgshift[0]?.id}}" *ngIf="shift?.orgshift[0]?.id">{{shift?.name}}</ion-option>\n          </ng-container>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Class/Stream</ion-label>\n        <ion-select [(ngModel)]="classStream" (ionChange)="onChooseClassStream($event)">\n          <ion-option *ngFor="let class of sortArray" value="{{class?.class_id}}">{{class?.class_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Section</ion-label>\n        <ion-select [(ngModel)]="section" (ionChange)="onChooseSection($event)">\n          <ion-option *ngFor="let section of filteredArrayForSectionList" value="{{section?.classSectionIndexId}}">{{section?.section_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button type="submit" block outline color="blue" class="mt-10" (click)="submitDepartment()">Submit</button>\n</ion-content>\n\n\n\n\n\n\n<!-- <ion-content *ngIf="!showDeptSelection">\n  <ion-list>\n    <ion-item>\n      <ion-label>Shift</ion-label>\n      <ion-select [(ngModel)]="shift" (ionChange)="onChooseShift($event)">\n        <ng-container *ngFor="let shift of orgShiftLists">\n          <ion-option value="{{shift?.orgshift[0]?.id}}" *ngIf="shift?.orgshift[0]?.id">{{shift?.name}}</ion-option>\n        </ng-container>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button type="submit" block outline color="blue" class="mt-10">Submit</button>\n</ion-content> -->\n\n\n\n<!-- filteredArrayForSectionList -->\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/modal.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _k || Object])
    ], ModalPage);
    return ModalPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

var Modal1Page = /** @class */ (function () {
    // showDeptSelection: boolean = true;
    function Modal1Page(platform, params, viewCtrl, menuCtrl, navCtrl, navParams, http, loadingController, jsonp, modalCtrl) {
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
        // var characters = [];
        // this.character = characters[this.params.get('charNum')];
        this.getUserDataFromLocal();
    }
    Modal1Page.prototype.ngOnInit = function () {
        // this.sortArray = [];
        // this.filteredArrayForClassList = [];
        // this.getUserDataFromLocal();
        // this.getStudentDetails();
        // this.showSelectDepartmentBtn = false;
        // this.getShiftLists();
        // this.getClassList();    
    };
    Modal1Page.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    // ########################################################################
    //    -------------- getting user data from localstorage ---------------
    // ########################################################################
    Modal1Page.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);    
    };
    // ########################################################################
    // ----------- submit Guardian Info function -----------
    // ########################################################################
    Modal1Page.prototype.submitGuardianInfo = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            phone: this.guarPhone,
            adhar: this.guarId,
            org_id: this.localUserData.org_code,
            std_id: this.localUserData.master_id,
            from_app: 1
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "parent/add", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('after guardian info submit : ', data);
            if (data.data) {
                _this.localUserData.is_first_time = '1';
                localStorage.setItem('userData', JSON.stringify(_this.localUserData));
                _this.navCtrl.push(AccountPage);
            }
        });
    };
    Modal1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/modal1.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>Guardian Info</ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()" style="\n        width: 61%; font-size: 2.2rem;">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Guardian Phone</ion-label>\n        <ion-input type="text" name="guarPhone" no-margin [(ngModel)]="guarPhone"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Guardian ID</ion-label>\n        <ion-input type="text" name="guarId" no-margin [(ngModel)]="guarId"></ion-input>\n      </ion-item>\n    </ion-list>\n  \n    <button ion-button type="submit" block outline color="blue" class="mt-10" (click)="submitGuardianInfo()">Submit</button>\n    <button ion-button type="submit" block outline color="blue" class="mt-10" (click)="dismiss()">Skip For Now</button>\n</ion-content>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/modal1.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _k || Object])
    ], Modal1Page);
    return Modal1Page;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

var SecuritypinPage = /** @class */ (function () {
    // showDeptSelection: boolean = true;
    function SecuritypinPage(platform, params, viewCtrl, menuCtrl, navCtrl, navParams, http, loadingController, jsonp, modalCtrl, toastCtrl) {
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
        this.toastCtrl = toastCtrl;
        this.btnDisabled = false;
        // var characters = [];
        // this.character = characters[this.params.get('charNum')];
        this.getUserDataFromLocal();
    }
    SecuritypinPage.prototype.ngOnInit = function () {
        // this.sortArray = [];
        // this.filteredArrayForClassList = [];
        // this.getUserDataFromLocal();
        // this.getStudentDetails();
        // this.showSelectDepartmentBtn = false;
        // this.getShiftLists();
        // this.getClassList();    
    };
    SecuritypinPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    // ########################################################################
    //    -------------- getting user data from localstorage ---------------
    // ########################################################################
    SecuritypinPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);    
    };
    // ########################################################################
    // ----------- submit Guardian Info function -----------
    // ########################################################################
    SecuritypinPage.prototype.submitSecurityPin = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        var data = {
            u_id: this.localUserData.id,
            pin: this.securityPin,
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_8__apiUrl__["a" /* apiUrl */].url + "user/add-pin", data, { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (getdata) {
            console.log('after add pin submit : ', getdata);
            if (getdata.status == 1) {
                _this.dismiss();
                localStorage.setItem("securitypinadded", JSON.stringify(data));
                _this.navCtrl.push(AccountPage);
            }
            else {
                _this.presentToast('Sorry, Something went wrong.');
            }
        });
    };
    // checkForValidPin
    SecuritypinPage.prototype.checkForValidPin = function () {
        var pinString = this.securityPin.toString();
        console.log('pin length : ', pinString.length);
        if (pinString.length === 6) {
            this.btnDisabled = true;
        }
        else {
            this.btnDisabled = false;
        }
    };
    SecuritypinPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    SecuritypinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/securitypin.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>Add Security Pin</ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()" style="\n        width: 61%; font-size: 2.2rem;">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Security Pin (6 digit)</ion-label>\n        <ion-input type="number" name="securityPin" no-margin [(ngModel)]="securityPin" (ionChange)="checkForValidPin()"></ion-input>\n      </ion-item>\n    </ion-list>\n  \n    <button ion-button type="submit" block outline color="blue" class="mt-10" (click)="submitSecurityPin()" [disabled]="!btnDisabled">Submit</button>\n    <!-- <button ion-button type="submit" block outline color="blue" class="mt-10" (click)="dismiss()">Skip For Now</button> -->\n</ion-content>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/account/securitypin.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Jsonp */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _l || Object])
    ], SecuritypinPage);
    return SecuritypinPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=account.js.mapundefined

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_owndetails_student_owndetails__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendance_attendance__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routine_routine__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__student_notice_board_student_notice_board__ = __webpack_require__(33);
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

// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';








/**
 * Generated class for the StudentsTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentsTabsPage = /** @class */ (function () {
    function StudentsTabsPage(navCtrl, navParams, 
        // private nativePageTransitions: NativePageTransitions,
        http, loadingController, jsonp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.jsonp = jsonp;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__routine_routine__["a" /* RoutinePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__attendance_attendance__["a" /* AttendancePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_9__student_notice_board_student_notice_board__["b" /* StudentNoticeBoardPage */];
        this.loaded = false;
        this.tabIndex = 0;
        this.seeTabs = true;
        this.initLoader();
    }
    StudentsTabsPage.prototype.ngOnInit = function () {
        this.seeTabs = true;
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
    // public transition(e): void {
    //   let options: NativeTransitionOptions = {
    //     direction: this.getAnimationDirection(e.index),
    //     duration: 250,
    //     slowdownfactor: -1,
    //     slidePixels: 0,
    //     iosdelay: 20,
    //     androiddelay: 0,
    //     fixedPixelsTop: 0,
    //     fixedPixelsBottom: 48
    //   };
    //   if (!this.loaded) {
    //     this.loaded = true;
    //     return;
    //   }
    //   this.nativePageTransitions.slide(options);
    // }
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
            selector: "page-students-tabs",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/students-tabs/students-tabs.html"*/'<ion-content>\n\n  <ion-tabs id="tabs" color="blue">\n    <ion-tab [root]="tab1Root" tabTitle="HOME" tabIcon="customicon-home" tabsHideOnSubPages="true" (swipe)="transition($event)"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="SCHEDULE" tabIcon="customicon-routine" tabsHideOnSubPages="true" (swipe)="transition($event)"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="ATTENDANCE" tabIcon="customicon-attendance" tabsHideOnSubPages="true" (ionChange)="transition($event)"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="NOTICE" tabIcon="customicon-notice-board" tabsHideOnSubPages="true" (ionChange)="transition($event)"></ion-tab>\n  </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/students-tabs/students-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* Jsonp */]])
    ], StudentsTabsPage);
    return StudentsTabsPage;
}());
/* harmony default export */ __webpack_exports__["a"] = (StudentsTabsPage);
//# sourceMappingURL=students-tabs.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attendance_list_attendance_list__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
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
        this.period = '';
        this.department = '';
        this.stream = '';
        this.shift = '';
        this.showTeacherForm = true;
        this.menuCtrl.enable(true);
        this.initLoader();
    }
    GetAttendancePage.prototype.ngOnInit = function () {
        console.log('get attendance page...');
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
        // this.getPeriod();
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
        var currYear = new Date().getFullYear();
        arr.forEach(function (ele) {
            if (ele.year == currYear) {
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
            }
        });
        // console.log(this.sortArray);    
    };
    GetAttendancePage.prototype.getPeriod = function () {
        var _this = this;
        console.log('get period called...');
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
    // onChooseDepartment() {
    // }
    GetAttendancePage.prototype.onPeriodSubmit = function () {
        var _this = this;
        if (this.period == '' || this.department == '' || this.stream == '' || this.shift == '') {
            this.showAlert('Please select all the fields to continue.');
            return;
        }
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
            selector: 'page-get-attendance',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/get-attendance/get-attendance.html"*/'<!--\n  Generated template for the GetAttendancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Attendance</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content *ngIf="showTeacherForm" class="item-center" padding>\n\n		<h4 class="title" text-center text-uppercase margin-bottom>Select Period</h4>\n\n		<ion-list>\n				<ion-item>\n					<ion-label>Choose Shift</ion-label>\n					<ion-select [(ngModel)]="shift" (ionChange)="onChooseShift($event)">\n						<ng-container *ngFor="let shift of orgShiftLists">\n							<ion-option value="{{shift.orgshift[0]?.id}}" *ngIf="shift.orgshift[0]?.id">{{shift.name}}</ion-option>\n						</ng-container>\n					</ion-select>\n				</ion-item>\n		</ion-list>\n\n		<ion-list>\n				<ion-item>\n					<ion-label>Choose Stream</ion-label>\n					<ion-select [(ngModel)]="stream" (ionChange)="onChooseClassStream($event)">\n						<ion-option value="{{classStream.class_id}}" *ngFor="let classStream of sortArray">{{classStream.class_name}}</ion-option>\n					</ion-select>\n				</ion-item>\n		</ion-list>\n\n		<ion-list>\n				<ion-item>\n					<ion-label>Choose Department</ion-label>\n					<ion-select [(ngModel)]="department" (ionChange)="getPeriod()">\n						<ion-option value="{{sec.classSectionIndexId}}" *ngFor="let sec of filteredArrayForSectionList">{{sec.section_name}}</ion-option>\n					</ion-select>\n				</ion-item>\n		</ion-list>		\n\n		<ion-list>\n				<ion-item>\n					<ion-label>Choose Session</ion-label>\n					<ion-select [(ngModel)]="period">\n						<ion-option *ngFor="let period of periodList" value="{{period.id}}">{{period.priod_name}} ({{period.from_time}} {{period.to_time}})</ion-option>\n					</ion-select>\n				</ion-item>\n		</ion-list>\n\n		<button ion-button block outline color="blue" class="mt-10" (click)="onPeriodSubmit()">Submit</button>\n\n</ion-content>\n\n\n\n\n\n\n\n\n<ion-content *ngIf="!showTeacherForm" class="item-center" padding>\n\n		<h3 class="title" text-center text-uppercase margin-bottom style="margin-top: 7rem;">Your Attendance Code</h3>\n		<h4 text-center margin-bottom>{{genAttCode}}</h4>\n		\n		<button ion-button block outline color="blue" class="mt-10" (click)="onStartAttendence()">Start</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/get-attendance/get-attendance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], GetAttendancePage);
    return GetAttendancePage;
}());

//# sourceMappingURL=get-attendance.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComplainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_notice_board_student_notice_board__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_library_list_student_library_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__personal_notice_personal_notice__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__attendance_attendance__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routine_routine__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__staff_info_staff_info__ = __webpack_require__(36);
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
        this.getUserDataFromLocal();
        this.getComplainAndReplys();
        this.countComplain();
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__account_account__["d" /* default */]);
    };
    StaffComplainPage.prototype.goToComplain = function () {
        this.navCtrl.push(StaffComplainPage_1);
    };
    StaffComplainPage.prototype.countComplain = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* apiUrl */].url + "desk/countMsg/" + this.localUserData.master_id).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('complain data : ...', data.data);
            _this.totalcomplain = data.data.length;
        });
    };
    StaffComplainPage.prototype.sendComplain = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, data;
            return __generator(this, function (_a) {
                if (this.totalcomplain >= '3') {
                    this.showAlert('Alert!', 'Sorry, You Have Not Any Complain Left.');
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__staff_info_staff_info__["a" /* StaffInfoPage */]);
                }
                else {
                    header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                    header.set("Content-Type", "application/json");
                    data = {
                        org_id: this.localUserData.org_code,
                        sender_id: this.localUserData.master_id,
                        mssg: this.complainMsg,
                        user_type_id: this.localUserData.user_type_id
                    };
                    // console.log(data);      
                    this.http
                        .post(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* apiUrl */].url + "desk/addmsg", data, { headers: header })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            // console.log(data);
                            if (data.data) {
                                this.complainMsg = '';
                                this.btnDisabled = true;
                                this.countComplain();
                                this.getComplainAndReplys();
                                this.showAlert('Alert!', 'Your Complain has been Submited.');
                            }
                            else {
                                this.showAlert('Alert!', 'Something went wrong. Please try again.');
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
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
            selector: 'page-staff-complain',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-complain/staff-complain.html"*/'\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>The Principal Desk</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<div class="enquiry-form compl-tittle">\n		 <ion-title  color="light" text-center text-uppercase margin-bottom >Complain Directly to<br> Principal</ion-title>\n	 	<form>\n			<ion-list style="background-color: none;">\n\n			  <ion-item>\n			  	<ion-label> <ion-icon ios="ios-text" md="md-text"></ion-icon></ion-label>\n			    <ion-textarea name="complainMsg" [(ngModel)]="complainMsg" placeholder="Complain limit 150 character." (keyup)="onChangeTextValue()"></ion-textarea>\n				</ion-item>\n				\n			  <ion-note text-right float-right style="margin-top: 5px; margin-bottom: 5px;">Left {{totalcomplain-3}} of 3 Complain</ion-note>\n				<button ion-button block outline color="light" class="mt-10" (click)=sendComplain() (click)=goHide() [disabled]="btnDisabled">Submit</button>\n				<!-- <p class="text-blue" *ngIf="isShown">Your Complain has been Submited to the Principal</p> -->\n			</ion-list>\n		</form>\n	</div>\n\n	<div style="    display: flex;flex-direction: column;	height: calc(67vh - 90px); overflow-y: scroll;">\n			<div *ngFor="let msg of allMsgs" class="messages" [ngClass]="(msg.from_id)?\'other\':\'\'">\n				<div class="message">\n					<span class="orinal-text">{{msg.message}}</span>\n				</div>\n			</div>\n			<!-- <div class="messages other">\n				<div class="message" >\n					<span class="orinal-text">{msg.message}</span>\n				</div>\n			</div>\n			<div class="messages">\n				<div class="message" >\n					<span class="orinal-text">h</span>\n				</div>\n			</div>\n			<div class="messages other">\n				<div class="message" >\n					<span class="orinal-text">hiiii</span>\n				</div>\n			</div> -->\n	</div>\n\n</ion-content>\n\n\n\n\n\n\n<!-- <ion-footer class="fixed">\n		<ion-toolbar color="primary">  \n		<ion-grid text-center >\n			<ion-row>\n				<div col-3 (click)=goToHome()>\n					<img src="assets/imgs/white-icon5.png">\n					<p class="footer-p">Home</p>\n				</div>\n				<div col-3 (click)=gotoLiveStream()>\n					<img src="assets/imgs/white-icon1.png">\n					<p class="footer-p">Stream</p>\n				</div>\n				<div col-3 (click)=goToAttendance()>\n					<img src="assets/imgs/white-icon2.png">\n					<p  class="footer-p">Attendance</p>\n				</div>\n				<div col-3 (click)=goToRoutine()>\n					<img src="assets/imgs/white-icon3.png">\n					<p  class="footer-p">Routine</p>\n				</div>\n			</ion-row>\n		</ion-grid>\n		</ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-complain/staff-complain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], StaffComplainPage);
    return StaffComplainPage;
    var StaffComplainPage_1;
}());

//# sourceMappingURL=staff-complain.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__school_details_school_details__ = __webpack_require__(80);
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
    function SchoolListingPage(navCtrl, navParams, http, toastCtrl, loadingController, actionsheetCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.actionsheetCtrl = actionsheetCtrl;
        this.platform = platform;
    }
    SchoolListingPage.prototype.ionViewDidLoad = function () {
        this.initLoader();
        var data = this.navParams.get("data");
        console.log('route data : ...', data);
        this.getOrganization(JSON.parse(data));
        console.log("ionViewDidLoad SchoolListingPage");
    };
    SchoolListingPage.prototype.goToListingDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__school_details_school_details__["a" /* SchoolDetailsPage */], { id: id });
    };
    SchoolListingPage.prototype.getOrganization = function (navdata) {
        var _this = this;
        // this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        // headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            country: navdata.country_id,
            state: navdata.state_id,
            dist: navdata.dist_id,
            org_type: navdata.type_id,
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_5__apiUrl__["a" /* apiUrl */].url + "org/searchApp", data, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // console.log('school list : ', data);        
            if (data.data.length > 0) {
                // this.presentLoading(false);
                _this.orgList = data.data;
                _this.orgList.forEach(function (ele) {
                    ele.org = _this.genOrgName(ele.org_type_id);
                });
                console.log(_this.orgList);
            }
            else {
                console.log('No data...');
                _this.genOrgName(navdata.type_id);
            }
        });
    };
    SchoolListingPage.prototype.genOrgName = function (org_type_id) {
        console.log('Type ID :... ', org_type_id);
        if (org_type_id == '1') {
            this.headTitle = 'School';
            return 'SCHOOL';
        }
        if (org_type_id == '2') {
            this.headTitle = 'College';
            return 'COLLEGE';
        }
        if (org_type_id == '3') {
            this.headTitle = 'University';
            return 'UNIVERSITY';
        }
    };
    SchoolListingPage.prototype.openActionSheet = function (org) {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: "" + org.org_name,
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: "Phone :  " + org.phone_no,
                    // role: 'destructive',
                    icon: !this.platform.is('ios') ? 'call' : 'call',
                    handler: function () {
                        // console.log('Delete clicked');
                        _this.schoolsDetails(org.id);
                    }
                },
                {
                    text: "Website :  " + org.website,
                    icon: !this.platform.is('ios') ? 'cloud' : 'cloud',
                    handler: function () {
                        // console.log('Share clicked');
                        _this.schoolsDetails(org.id);
                    }
                },
                {
                    text: "Email :  " + org.email,
                    icon: !this.platform.is('ios') ? 'mail' : 'mail',
                    handler: function () {
                        // console.log('Play clicked');
                        _this.schoolsDetails(org.id);
                    }
                },
            ]
        });
        actionSheet.present();
    };
    SchoolListingPage.prototype.schoolsDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__school_details_school_details__["a" /* SchoolDetailsPage */], {
            id: id
        }, { animation: "transition", duration: 1000, direction: "forward" });
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
            selector: "page-school-listing",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/school-listing/school-listing.html"*/'<!--\n  Generated template for the SchoolListingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>List of {{headTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- <ion-content padding>\n\n<ion-list>\n  <ion-item *ngFor="let item of orgList" (click)=goToListingDetails(item.id)>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/1-512.png">\n    </ion-thumbnail>\n    <h2>{{item.org_name}}</h2>\n    <p>{{item.org_city}}, {{item.jela}} • {{item.estd}}</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>  \n</ion-list>\n\n\n</ion-content> -->\n\n\n<ion-content padding>\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label>\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </ion-label>\n      <ion-input #search placeholder="Type Your Organisation" (keyup)="getItems($event)" (click)="onSearchButtonClick()"></ion-input>\n    </ion-item>\n  </ion-list> -->\n    \n  <!-- <ion-list class="search-result" [ngStyle]="{\'display\':isSearchbarOpened ? \'block\' : \'none\' }">				 -->\n  <ion-list class="search-result">\n    <ion-item *ngFor="let item of orgList" (click)="openActionSheet(item)">\n      {{ item?.org_name }}\n      <p class="col-result-add">{{ item?.landmark }}, {{ item?.org_city }}</p>\n      <ion-note item-end>\n        {{ item?.org }}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/school-listing/school-listing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], SchoolListingPage);
    return SchoolListingPage;
}());

//# sourceMappingURL=school-listing.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_library_list_student_library_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__student_owndetails_student_owndetails__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__staff_info_staff_info__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(21);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], LibraryListPage);
    return LibraryListPage;
}());

//# sourceMappingURL=library-list.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_info_staff_info__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stuff_examduty_stuff_examduty__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__get_attendance_get_attendance__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__student_notice_board_student_notice_board__ = __webpack_require__(33);
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

// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';








/**
 * Generated class for the StudentsTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffTabsPage = /** @class */ (function () {
    function StaffTabsPage(navCtrl, navParams, 
        // private nativePageTransitions: NativePageTransitions,
        http, loadingController, jsonp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.jsonp = jsonp;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__staff_info_staff_info__["a" /* StaffInfoPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_7__stuff_examduty_stuff_examduty__["a" /* StuffExamdutyPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_8__get_attendance_get_attendance__["a" /* GetAttendancePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_9__student_notice_board_student_notice_board__["b" /* StudentNoticeBoardPage */];
        this.loaded = false;
        this.tabIndex = 0;
        this.seeTabs = true;
        this.initLoader();
    }
    StaffTabsPage.prototype.ngOnInit = function () {
        this.seeTabs = true;
        this.getUserDataFromLocal();
        this.getUserData();
    };
    StaffTabsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad StudentsTabsPage');
    };
    StaffTabsPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: "hide",
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>'
        });
    };
    // public transition(e): void {
    //   let options: NativeTransitionOptions = {
    //     direction: this.getAnimationDirection(e.index),
    //     duration: 250,
    //     slowdownfactor: -1,
    //     slidePixels: 0,
    //     iosdelay: 20,
    //     androiddelay: 0,
    //     fixedPixelsTop: 0,
    //     fixedPixelsBottom: 48
    //   };
    //   if (!this.loaded) {
    //     this.loaded = true;
    //     return;
    //   }
    //   this.nativePageTransitions.slide(options);
    // }
    StaffTabsPage.prototype.getAnimationDirection = function (index) {
        var currentIndex = this.tabIndex;
        this.tabIndex = index;
        switch (true) {
            case currentIndex < index:
                return "left";
            case currentIndex > index:
                return "right";
        }
    };
    StaffTabsPage.prototype.goToLogout = function () {
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    StaffTabsPage.prototype.getUserData = function () {
        var _this = this;
        this.presentLoading(true);
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["f" /* RequestOptions */]({ headers: header });
        var data = {
            org_id: this.localUserData.org_code
            // 'master_id': this.localUserData.master_id
        };
        // console.log('send data : ', data);
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_6__apiUrl__["a" /* apiUrl */].url + "org/getdetail", data, options)
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
    StaffTabsPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem("userData");
        this.localUserData = JSON.parse(data);
        // console.log(this.localUserData);
    };
    StaffTabsPage.prototype.presentLoading = function (load) {
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
    StaffTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-staff-tabs",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-tabs/staff-tabs.html"*/'<ion-content>\n\n  <ion-tabs id="tabs" color="blue">\n    <ion-tab [root]="tab1Root" tabTitle="HOME" tabIcon="customicon-home" tabsHideOnSubPages="true" (swipe)="transition($event)"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="SCHEDULE" tabIcon="customicon-routine" tabsHideOnSubPages="true" (swipe)="transition($event)"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="ATTENDANCE" tabIcon="customicon-attendance" tabsHideOnSubPages="true" (ionChange)="transition($event)"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="NOTICE" tabIcon="customicon-notice-board" tabsHideOnSubPages="true" (ionChange)="transition($event)"></ion-tab>\n  </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-tabs/staff-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Jsonp */]])
    ], StaffTabsPage);
    return StaffTabsPage;
}());

//# sourceMappingURL=staff-tabs.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuffExamdutyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
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
        this.scheduleTab = "class";
        this.dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
                            if (pos < 0) {
                                if (element.rutinedetails.length > 0) {
                                    _this.subject = element.rutinedetails[0].class.section.sec_name;
                                    _this.room = element.rutinedetails[0].room.name;
                                    _this.floor = element.rutinedetails[0].room.floor_name;
                                }
                                else {
                                    _this.subject = 'No Class';
                                    _this.room = 'N/A';
                                    _this.floor = 'N/A';
                                }
                                var new_data = {
                                    id: element.id,
                                    day: element.day,
                                    dayName: _this.dayName[parseInt(element.day) - 1],
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
                        console.log('final array routine list: ', this.routineList);
                        this.presentLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    StuffExamdutyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stuff-examduty',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-examduty/stuff-examduty.html"*/'<!--\n  Generated template for the StuffExamdutyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Schedule</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n      <ion-segment [(ngModel)]="scheduleTab">\n        <ion-segment-button value="class">\n          <p>\n            <img class="notice-img" style="height: 20px" src="assets/imgs/generalNotice.svg">\n          </p>        \n          Class Schedule\n        </ion-segment-button>\n        <ion-segment-button value="exam">\n            <p>\n              <img class="notice-img" style="height: 20px" src="assets/imgs/personalNotice.svg">\n            </p>\n          Exam Schedule\n        </ion-segment-button>\n      </ion-segment>        \n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n    <div [ngSwitch]="scheduleTab">\n      <ion-list *ngSwitchCase="\'class\'">\n          <ion-item *ngFor="let routine of routineList" style="padding-bottom: 0px; margin-bottom: 0px;" (click)="toggleDetails(routine)">\n            <ion-icon color="light" color="primary" item-right [name]="routine?.icon"></ion-icon>\n            {{routine?.dayName}}\n            <!-- <table *ngIf="routine.showDetails">{{routine}}</table> -->\n      \n            <ion-list *ngIf="routine?.showDetails" style="padding-bottom: 0px; margin-bottom: 0px;">\n              <ion-item *ngFor="let r of routine.priods" style="padding-bottom: 0px; margin-bottom: 0px;">\n\n                <ion-card style="background-color: #353434; color: #fff;">\n                    <ion-grid>\n                      <ion-row style="color: #fff;">\n                        <ion-col col-md-12 text-uppercase text-center style="color: #fff;">\n                          <h2 style="color: #fff;"><strong>{{r?.sub}}</strong></h2>\n                      </ion-col>\n                      </ion-row>\n                      <ion-row class="border">\n                        <ion-col col-md-4 >\n                          <p style="color: #fff;font-size: 1.1rem;"><strong>Time</strong>:</p>\n                          <p style="color: #fff;font-size: 1.1rem;">{{r?.from_time}} - {{r?.to_time}}</p>\n                        </ion-col>\n                        <ion-col col-md-4 style="color: #fff;">\n                          <p style="color: #fff;font-size: 1.1rem;"><strong>Room No</strong>:</p>\n                          <p style="color: #fff;font-size: 1.1rem;">{{r?.room}}</p>\n                        </ion-col>\n                        <ion-col col-md-4 style="color: #fff;">\n                          <p style="color: #fff;font-size: 1.1rem;"><strong>Floor</strong>:</p>\n                          <p style="color: #fff;font-size: 1.1rem;">{{r?.floor}}</p>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>  \n                </ion-card>\n              </ion-item>            \n            </ion-list>\n\n\n            <ion-list *ngSwitchCase="\'exam\'"></ion-list>\n          \n          </ion-item>\n\n      </ion-list>\n    </div>\n\n\n\n\n<!-- <ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-12 text-uppercase text-center>\n    	<h2 ><strong>Bengali Honours</strong></h2>\n	</ion-col>\n  </ion-row>\n  <ion-row class="border">\n    <ion-col col-md-4 >\n    	<p><strong>Time</strong>:</p>\n    	<p>12PM-2PM</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Room No</strong>:</p>\n    	<p>12C</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Floor</strong>:</p>\n    	<p>2ND</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>  \n</ion-card>\n\n\n<ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-12 text-uppercase text-center>\n    	<h2 ><strong>Philosophy Honours</strong></h2>\n	</ion-col>\n  </ion-row>\n  <ion-row class="border">\n    <ion-col col-md-4 >\n    	<p><strong>Time</strong>:</p>\n    	<p>2PM-4PM</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Room No</strong>:</p>\n    	<p>10</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Floor</strong>:</p>\n    	<p>3ND</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>  \n</ion-card>\n\n<ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-md-12 text-uppercase text-center>\n    	<h2 ><strong>English Honours</strong></h2>\n	</ion-col>\n  </ion-row>\n  <ion-row class="border">\n    <ion-col col-md-4>\n    	<p><strong>Time</strong>:</p>\n    	<p>4PM-6PM</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Room No</strong>:</p>\n    	<p>12B</p>\n    </ion-col>\n    <ion-col col-md-4>\n    	<p><strong>Floor</strong>:</p>\n    	<p>2ND</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>  \n</ion-card> -->\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-examduty/stuff-examduty.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], StuffExamdutyPage);
    return StuffExamdutyPage;
}());

//# sourceMappingURL=stuff-examduty.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOrganisationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__school_details_school_details__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__student_owndetails_student_owndetails__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__staff_info_staff_info__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__welcome_guest_welcome_guest__ = __webpack_require__(145);
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
 * Generated class for the SearchOrganisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchOrganisationPage = /** @class */ (function () {
    function SearchOrganisationPage(navCtrl, navParams, http, platform, toastCtrl, actionsheetCtrl, alertCtrl, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.list = [];
        this.getUserDataFromLocal();
        // this.getData();
        this.initLoader();
    }
    SearchOrganisationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchOrganisationPage');
        this.showRadio();
    };
    // getData() {
    //   this.http
    //     .get(`${apiUrl.url}org/alllist`)
    //     .map(res => res.json())
    //     .subscribe(data => {
    //       this.allSchoolsList = data;
    //       console.log("student list : ", this.allSchoolsList);
    //       data.data.forEach(ele => {
    //         const obj = {
    //           id: ele.id,
    //           name: ele.org_name,
    //           city: ele.org_city,
    //           landmark: ele.landmark,
    //           org: this.genOrgName(ele.org_type_id),
    //           org_logo: ele.org_logo,
    //           org_text: ele.org_text,
    //           email: ele.email,
    //           phone_no: ele.phone_no,
    //           website: ele.website
    //         };
    //         this.list.push(obj);
    //       });
    //     });
    // }
    SearchOrganisationPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    SearchOrganisationPage.prototype.getData = function (id) {
        var _this = this;
        this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            type: id,
            is_reg: 0,
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* apiUrl */].url + "org/orgsearchbytype", data, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // this.presentLoading(false);
            _this.allSchoolsList = data.data;
            console.log("school list..... : ", _this.allSchoolsList);
            // console.log("school list length..... : ", data.data.length);
            if (_this.allSchoolsList.length > 0) {
                _this.allSchoolsList.forEach(function (ele) {
                    var obj = {
                        id: ele.id,
                        is_registered: _this.getRegisterStatus(ele.is_registered),
                        name: ele.org_name,
                        city: ele.org_city,
                        landmark: ele.landmark,
                        org: _this.genOrgName(ele.org_type_id),
                        org_logo: ele.org_logo,
                        org_text: ele.org_text,
                        email: ele.email,
                        phone_no: ele.phone_no,
                        website: ele.website
                    };
                    _this.list.push(obj);
                });
                _this.presentLoading(false);
                console.log("arr list..... : ", _this.list);
            }
            else {
                _this.presentLoading(false);
                // this.presentToast('Sorry, No Data Found !');
                _this.showAlert('Alert!', 'Sorry, No Data Found !');
            }
        });
    };
    SearchOrganisationPage.prototype.getRegisterStatus = function (val) {
        if (val == '0') {
            return 'Not Registered';
        }
        if (val == '1') {
            return 'Registered';
        }
    };
    SearchOrganisationPage.prototype.presentLoading = function (load) {
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
    SearchOrganisationPage.prototype.genOrgName = function (org_type_id) {
        if (org_type_id == '1') {
            return 'SCHOOL';
        }
        if (org_type_id == '2') {
            return 'COLLEGE';
        }
        if (org_type_id == '3') {
            return 'UNIVERSITY';
        }
    };
    SearchOrganisationPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData);      
    };
    SearchOrganisationPage.prototype.getItems = function (ev) {
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
    SearchOrganisationPage.prototype.initializeItems = function () {
        this.items = this.list;
        console.log('All items', this.items);
    };
    SearchOrganisationPage.prototype.onSearchButtonClick = function () {
        var _this = this;
        this.isSearchbarOpened = true;
        setTimeout(function () {
            _this.searchbox.setFocus();
        }, 150);
    };
    SearchOrganisationPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: 'bottom'
        });
        toast.present();
    };
    SearchOrganisationPage.prototype.schoolsDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__school_details_school_details__["a" /* SchoolDetailsPage */], {
            id: id
        }, { animation: "transition", duration: 1000, direction: "forward" });
    };
    SearchOrganisationPage.prototype.goToHome = function () {
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
    SearchOrganisationPage.prototype.openActionSheet = function (org) {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            // title: `<img [src]="${org.org_logo}"/> ${org.name}`,
            title: org.name + " " + org.landmark + " ",
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: "Status :  " + org.is_registered,
                    // role: 'destructive',
                    icon: !this.platform.is('ios') ? 'checkbox-outline' : 'checkbox-outline',
                    handler: function () {
                        // console.log('Delete clicked');
                        _this.schoolsDetails(org.id);
                    }
                },
                {
                    text: "Phone :  " + org.phone_no,
                    // role: 'destructive',
                    icon: !this.platform.is('ios') ? 'call' : 'call',
                    handler: function () {
                        // console.log('Delete clicked');
                        _this.schoolsDetails(org.id);
                    }
                },
                {
                    text: "Website :  " + org.website,
                    icon: !this.platform.is('ios') ? 'cloud' : 'cloud',
                    handler: function () {
                        // console.log('Share clicked');
                        _this.schoolsDetails(org.id);
                    }
                },
                {
                    text: "Email :  " + org.email,
                    icon: !this.platform.is('ios') ? 'mail' : 'mail',
                    handler: function () {
                        // console.log('Play clicked');
                        _this.schoolsDetails(org.id);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SearchOrganisationPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK'],
        });
        alert.present();
    };
    SearchOrganisationPage.prototype.showRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('SELECT WHAT YOU WANT TO SEARCH');
        alert.addInput({
            type: 'radio',
            label: 'School',
            value: '1',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'College',
            value: '2',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'University',
            value: '3',
            checked: false
        });
        // alert.addButton('Cancel');
        alert.addButton({
            text: 'Cancel',
            handler: function (data) {
                console.log('cancel clicked :...');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__welcome_guest_welcome_guest__["a" /* WelcomeGuestPage */]);
            }
        });
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                // console.log(data);
                _this.getData(data);
            }
        });
        alert.present();
        // alert.onDidDismiss( data => {
        //   if (! data) {
        //     this.getData(0)
        //   }else{
        //     this.getData(data)
        //   }
        // })
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", Object)
    ], SearchOrganisationPage.prototype, "searchbox", void 0);
    SearchOrganisationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-organisation',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/search-organisation/search-organisation.html"*/'<!--\n  Generated template for the SearchOrganisationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search Organisation</ion-title>\n\n    <ion-buttons end (click)=goToHome()>\n				<button ion-button icon-only>\n          <!-- <ion-icon name="home" color="light"></ion-icon> -->\n          <img class="" src="assets/icon/Home_btn.svg" style="height: 18px"/>\n				</button>\n		</ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </ion-label>\n      <ion-input #search placeholder="Type Your Organisation" (keyup)="getItems($event)" (click)="onSearchButtonClick()"></ion-input>\n    </ion-item>\n  </ion-list>\n    \n				\n  <ion-list class="search-result" [ngStyle]="{\'display\':isSearchbarOpened ? \'block\' : \'none\' }">\n    <ion-item *ngFor="let item of items" (click)="openActionSheet(item)">\n      {{ item?.name }}\n      <p class="col-result-add">{{ item?.landmark }}, {{ item?.city }}</p>\n      <ion-note item-end>\n        {{ item?.org }}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/search-organisation/search-organisation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], SearchOrganisationPage);
    return SearchOrganisationPage;
}());

//# sourceMappingURL=search-organisation.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeGuestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guest_enquiry_guest_enquiry__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_organisation_search_organisation__ = __webpack_require__(144);
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
 * Generated class for the WelcomeGuestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomeGuestPage = /** @class */ (function () {
    function WelcomeGuestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.guestTab = 'search';
    }
    WelcomeGuestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomeGuestPage');
    };
    WelcomeGuestPage.prototype.goToFilterOrg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */]);
    };
    WelcomeGuestPage.prototype.goToSearchOrg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_organisation_search_organisation__["a" /* SearchOrganisationPage */]);
    };
    WelcomeGuestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome-guest',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/welcome-guest/welcome-guest.html"*/'<ion-content padding>\n  <div [ngSwitch]="guestTab">\n    <div *ngSwitchCase="\'search\'">\n      <div text-center margin-top style="margin-bottom: 40px;">\n        <h4 style="font-size: 1.9rem;">\n          <img class="login-page-logo" src="assets/icon/cyverhub_logo.svg">\n          <img class="straight-line" src="assets/icon/substract.svg"> Welcome Guest !\n        </h4>\n      </div>\n\n      <div class="sub-line" style="margin-bottom: 40px;">\n        <p class="sub-head">Here you can search for Enrolled <br>Schools & Colleges under this <br>Digital Library.</p>\n        <p class="sub-head"><br>Tap to view Basic information <br>about the institution.</p>\n      </div>\n\n      <!-- <div text-capitalize text-center margin-top>\n        <p class="text-1">Choose one option from below</p>\n      </div> -->\n\n      <div text-uppercase text-center>\n        <p class="text-2"(click)="goToSearchOrg()">I know<br> my organisation</p>\n        <p style="color: #fff">or</p>\n        <p class="text-3" (click)="goToFilterOrg()">help me<br> find my organisation</p>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div [ngSwitch]="guestTab">\n      <div *ngSwitchCase="\'live\'">\n      \n      </div>\n    </div>\n\n\n\n    <div [ngSwitch]="guestTab">\n        <div *ngSwitchCase="\'skill\'">\n        \n        </div>\n    </div>\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar no-border-top>\n        <ion-segment [(ngModel)]="guestTab">\n          <ion-segment-button value="search">\n            <p>\n              <img class="notice-img" style="height: 20px" src="assets/imgs/generalNotice.svg">\n            </p>        \n            Search Organisation\n          </ion-segment-button>\n          <ion-segment-button value="live">\n              <p>\n                <img class="notice-img" style="height: 20px" src="assets/imgs/personalNotice.svg">\n              </p>\n            Live Stream\n          </ion-segment-button>\n        </ion-segment>        \n    </ion-toolbar>\n  \n    <ion-toolbar no-border-top>\n        <ion-segment [(ngModel)]="guestTab">\n          <ion-segment-button value="event">\n            <p>\n              <img class="notice-img" style="height: 20px" src="assets/icon/calender_btn.svg">\n            </p>        \n            Event Viewer\n          </ion-segment-button>\n          <ion-segment-button value="skill">\n              <p>\n                <img class="notice-img" style="height: 20px" src="assets/imgs/departmentalNotice.svg">\n              </p>\n            Skill Development\n          </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n  \n  </ion-footer>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/welcome-guest/welcome-guest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], WelcomeGuestPage);
    return WelcomeGuestPage;
}());

//# sourceMappingURL=welcome-guest.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsStudentViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_notice_board_student_notice_board__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_library_list_student_library_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routine_routine__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_notice_personal_notice__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__attendance_attendance__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parents_account_parents_account__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guest_enquiry_guest_enquiry__ = __webpack_require__(69);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], ParentsStudentViewPage);
    return ParentsStudentViewPage;
}());

//# sourceMappingURL=parents-student-view.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_login_student_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parents_login_parents_login__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_login_staff_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_css_animator__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_guest_welcome_guest__ = __webpack_require__(145);
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
    function HomePage(platform, navCtrl, menuCtrl, animationService) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.splash = true;
        this.seeTabs = false;
        this.menuCtrl.enable(false);
        this.animator = animationService.builder();
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.getViews().length > 1) {
                _this.navCtrl.pop();
            }
        });
        this.seeTabs = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.splash = false;
        }, 200);
        this.animateElem();
    };
    HomePage.prototype.ngOnInit = function () {
        this.hideTabs();
    };
    HomePage.prototype.animateElem = function () {
        this.animator.setType('pulse').show(this.myElem.nativeElement);
    };
    //  constructor(public menuCtrl:MenuController){
    // this.menuCtrl.enable(false);
    // }
    HomePage.prototype.goToGuest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__welcome_guest_welcome_guest__["a" /* WelcomeGuestPage */]);
    };
    HomePage.prototype.goToStudent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__student_login_student_login__["a" /* StudentLoginPage */]);
    };
    HomePage.prototype.goToParents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__parents_login_parents_login__["a" /* ParentsLoginPage */]);
    };
    HomePage.prototype.goToStaff = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__staff_login_staff_login__["a" /* StaffLoginPage */]);
    };
    HomePage.prototype.hideTabs = function () {
        var elements = document.querySelectorAll(".tabbar");
        console.log(Object.keys(elements));
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'none';
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myElement'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "myElem", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/home/home.html"*/'<!-- <ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<!-- \n<div id="custom-overlay" [style.display]="splash ? \'flex\' : \'none\'">\n  <div class="flb">\n    <img class="img-screen" src="assets/imgs/logo.png">\n  </div>\n</div> -->\n\n<ion-content class="item-center" style="padding-top: 100px;">\n  <div class="overley"></div>\n  <img class="logo-school" src="assets/icon/cyverhub_logo.svg" style="margin-top: 50px;">\n  <p class="sub-line">Choose and Tap<br>on your Account</p>\n  <ion-grid style="width: 85%">\n    <ion-row #myElement>\n\n      <ion-row col-6>\n        <ion-card style="background-color: #353434" (click)="goToGuest()">\n          <ion-card-header text-center class="padd-bottom">\n            <!-- <i class="fas fa-user-circle fa-3x" style="color: black"></i> -->\n            <img class="custom-image-size" src="assets/imgs/guest_logo.svg">\n          </ion-card-header>\n          <!-- <ion-card-content> -->\n            <!-- <ion-card-title text-uppercase text-center>\n              Guest\n            </ion-card-title> -->\n          <!-- </ion-card-content> -->\n          <ion-row class="card-button-text">\n            <ion-col>\n              <div text-uppercase style="color: #db3236; font-size: 13px;">Guest</div>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-row>\n\n      <ion-row col-6>\n        <ion-card  style="background-color: #353434" (click)=goToStudent()>\n          <ion-card-header text-center class="padd-bottom">\n            <!-- <i class="fas fa-user fa-3x" style="color: black"></i> -->\n            <img class="custom-image-size" src="assets/imgs/student_logo.svg">\n          </ion-card-header>\n          <!-- <ion-card-content> -->\n            <!-- <ion-card-title text-uppercase text-center>\n              Student\n            </ion-card-title> -->\n          <!-- </ion-card-content> -->\n          <ion-row class="card-button-text">\n            <ion-col>\n              <div text-uppercase style="color: #4885ed; font-size: 13px;">Student</div>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-row>\n\n      <ion-row col-6>\n        <ion-card  style="background-color: #353434" (click)=goToStaff()>\n          <ion-card-header text-center class="padd-bottom">\n            <!-- <i class="fas fa-briefcase fa-3x" style="color: black"></i> -->\n            <img class="custom-image-size" src="assets/imgs/staff_logo.svg">\n          </ion-card-header>\n          <!-- <ion-card-content> -->\n            <!-- <ion-card-title text-uppercase text-center>\n              Staff\n            </ion-card-title> -->\n          <!-- </ion-card-content> -->\n          <ion-row class="card-button-text">\n            <ion-col>\n              <div text-uppercase style="color: #3cba54; font-size: 13px;">Staff</div>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-row>\n\n      <ion-row col-6>\n        <ion-card style="background-color: #353434" (click)=goToParents()>\n          <ion-card-header text-center class="padd-bottom">\n            <!-- <i class="fas fa-users fa-3x" style="color: black"></i> -->\n            <img style="margin-bottom: 8px;" src="assets/imgs/guardians_logo.svg">\n          </ion-card-header>\n          <!-- <ion-card-content> -->\n            <!-- <ion-card-title text-uppercase text-center>\n              Parents\n            </ion-card-title> -->\n          <!-- </ion-card-content> -->\n          <ion-row class="card-button-text">\n            <ion-col>\n              <div text-uppercase style="color: #f4c20d; font-size: 13px;">guardians</div>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5_css_animator__["AnimationService"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuffChangePassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__staff_login_staff_login__ = __webpack_require__(103);
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
                        _this.goToLogout();
                        _this.showAlert('Password Changed Successfully.');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__staff_login_staff_login__["a" /* StaffLoginPage */]);
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
    StuffChangePassPage.prototype.goToLogout = function () {
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    StuffChangePassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stuff-change-pass',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-change-pass/stuff-change-pass.html"*/'<!--\n  Generated template for the StuffChangePassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="enquiry-form">\n    <h2 class="title" text-center text-uppercase margin-bottom>Change Your Password</h2>\n    <form>\n      <!-- or with standalone set to true -->\n      <ion-item class="select-css">\n         <ion-input type="password" name="oldPassword" placeholder="Old Password" [(ngModel)]="oldPassword"></ion-input>\n      </ion-item>\n  \n      <ion-item class="select-css">\n        <ion-input type="password" name="newPassword" placeholder="New Password" [(ngModel)]="newPassword"></ion-input>\n      </ion-item>\n  \n      <ion-item class="select-css">\n         <ion-input type="password" name="confNewPassword" placeholder="Confirm New Password" [(ngModel)]="confNewPassword"></ion-input>\n      </ion-item>\n      \n      <button ion-button type="submit" block outline color="blue" class="mt-10" (click)="onChangePassSubmit()">Submit</button>\n    </form>\n  </div>  \n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-change-pass/stuff-change-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], StuffChangePassPage);
    return StuffChangePassPage;
}());

//# sourceMappingURL=stuff-change-pass.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuffEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parents_account_parents_account__ = __webpack_require__(102);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], StuffEditPage);
    return StuffEditPage;
}());

//# sourceMappingURL=stuff-edit.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_login_student_login__ = __webpack_require__(101);
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
        this.issecurityadded = false;
        this.shownextdiv = false;
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
        // this.securitylocaldata = JSON.parse(localStorage.getItem("securitypinadded"));
        // console.log(this.securitylocaldata);
        // if (!this.securitylocaldata) {
        //   alert("Set a Security Pin");
        //   this.navCtrl.pop();
        // }else{
        //   this.issecurityadded = true;
        // }
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
                        _this.goToLogout();
                        _this.showAlert('Password Changed Successfully.');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__student_login_student_login__["a" /* StudentLoginPage */]);
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
    ChangepasswordPage.prototype.goToLogout = function () {
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    // checkPin(){
    //   if (this.digitpin == ) {
    //   }
    // }
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
            selector: 'page-changepassword',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/changepassword/changepassword.html"*/'<!--\n  Generated template for the ChangepasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<!-- <div class="enquiry-form" *ngIf="issecurityadded">\n	<h1 class="title" text-center text-uppercase margin-bottom>Give Your 6 digit PIN</h1>\n	<form>\n		<ion-item class="select-css">\n			<ion-input type="password" name="digitpin" placeholder="Put 6 digit PIN" [(ngModel)]="digitpin"></ion-input>\n		</ion-item>\n		<div text-center>\n				<button ion-button color="blue" class="btn-size mt-10" (click)=checkPin()>Submit</button>\n		</div>\n	</form>\n</div> -->\n\n<div class="enquiry-form"  >\n		 <ion-title color="light" text-center text-uppercase margin-bottom>Change Your Password</ion-title>\n	 	<form>\n\n		<ion-item class="select-css">\n			<ion-label floating style="color: #969696ff">Old Password</ion-label>\n			<ion-input type="password" name="oldPassword" [(ngModel)]="oldPassword"></ion-input>\n		</ion-item>\n\n		<ion-item class="select-css">\n			<ion-label floating style="color: #969696">New Password</ion-label>\n			<ion-input type="password" name="newPassword" [(ngModel)]="newPassword"></ion-input>\n	 </ion-item>\n\n		<ion-item class="select-css">\n			 <ion-label floating style="color: #969696">Confirm New Password</ion-label>\n		   <ion-input type="password" name="confNewPassword" [(ngModel)]="confNewPassword"></ion-input>\n		</ion-item>\n		\n		<button ion-button type="submit" block outline color="light" class="mt-10" (click)="onChangePassSubmit()">Submit</button>\n	</form>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/changepassword/changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_owndetails_student_owndetails__ = __webpack_require__(26);
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
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__("http://3.84.60.73:3000/");
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__staff_info_staff_info__ = __webpack_require__(36);
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
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__("http://3.84.60.73:3000/");
        this.studentList = [];
        this.attenStudentList = [];
        this.test = false;
    }
    AttendanceListPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('attendence list page...');
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
                // console.log("attendence data : ", data);
                if (data.success) {
                    localStorage.removeItem("atted_id");
                    localStorage.removeItem("attedCode");
                    localStorage.removeItem("department");
                    this.showAlert("Digital Attendance and Manual Check out Successfully Submitted");
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__staff_info_staff_info__["a" /* StaffInfoPage */]);
                }
                else {
                    this.showAlert(data.msg);
                }
                return [2 /*return*/];
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
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

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuffRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__school_listing_school_listing__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__staff_login_staff_login__ = __webpack_require__(103);
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
        // this.getData();
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
            console.log('after stuff reg :... ', data);
            if (data.data) {
                // this.presentLoading(false);
                // console.log('student data : ', data);	
                _this.showAlert('Success!', "Your Username is : " + data.data.username + " and Password is : " + data.data.hint + ". Please login to continue.");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__staff_login_staff_login__["a" /* StaffLoginPage */]);
            }
            else {
                _this.showAlert('Error!', "Sorry, Invalid Credential !.");
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
        this.isSearchbarOpened = false;
        this.inputShowValue = org.name;
        this.college = org.id;
        this.items = [];
    };
    // getData() {
    //   this.http
    //     .get(`${apiUrl.url}org/alllist`)
    //     .map(res => res.json())
    //     .subscribe(data => {
    //       this.presentLoading(false);
    //       this.allSchoolsList = data;
    //       console.log("student list : ", this.allSchoolsList);
    //       data.data.forEach(ele => {
    //         const obj = {
    //           id: ele.id,
    //           name: ele.org_name
    //         };
    //         this.list.push(obj);
    //       });
    //     });
    // }
    StuffRegistrationPage.prototype.getData = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            type: this.type,
            is_reg: true,
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "org/orgsearchbytype", data, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // this.presentLoading(false);
            _this.allSchoolsList = data.data;
            console.log("school list..... : ", _this.allSchoolsList);
            // console.log("school list length..... : ", data.data.length);
            if (_this.allSchoolsList.length > 0) {
                _this.allSchoolsList.forEach(function (ele) {
                    var obj = {
                        id: ele.id,
                        name: ele.org_name
                    };
                    _this.list.push(obj);
                });
                console.log("arr list..... : ", _this.list);
            }
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
    StuffRegistrationPage.prototype.goToStuffLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__staff_login_staff_login__["a" /* StaffLoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", Object)
    ], StuffRegistrationPage.prototype, "searchbox", void 0);
    StuffRegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stuff-registration',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-registration/stuff-registration.html"*/'<ion-content padding>\n    <!-- <h5 class="title" text-center text-uppercase margin-bottom>Stuff Registration</h5> -->\n\n    <div text-center margin-top>\n      <h4 style="font-size: 1.9rem;">\n        <img class="login-page-logo" src="assets/icon/cyverhub_logo.svg">\n        <img class="straight-line" src="assets/icon/substract.svg"> Welcome Stuff !\n      </h4>\n    </div>\n\n\n    <p class="sub-line" style="margin-top: 25px; padding: 10px;">\n			<span>Here you can register with your<br>organisation to get the most out<br>of this application.</span>\n		</p>\n		<p class="" text-center text-capitalize margin-bottom style="text-decoration: underline; font-size: 16px;">Please fill the following details</p>\n\n    <!-- <ion-list>\n      <ion-item> -->\n        <!-- <ion-navbar color="light" [hideBackButton]="isSearchbarOpened ? \'true\' : \'false\'"> -->\n          <!-- <ion-title *ngIf="isSearchbarOpened==false">Submit Enquiry</ion-title>\n          <ion-buttons end *ngIf="isSearchbarOpened==false" (click)="onSearchButtonClick()">\n            <button ion-button icon-only>\n              <ion-icon name="search" color="light"></ion-icon>\n            </button>\n          </ion-buttons> -->\n        <!-- <ion-list>\n          <ion-item>  \n            <ion-label floating>Search</ion-label>\n            <ion-input type="text" name="inputShowValue" [(ngModel)]="inputShowValue" (keyup)="getItems($event)" (click)="onSearchButtonClick()"></ion-input>\n          </ion-item>\n        </ion-list> -->\n\n        <ion-list>\n            <ion-item>\n              <ion-label style="color: #9a9a9a;">Organization Type</ion-label>\n\n              <ion-select [(ngModel)]="type" (ngModelChange)="getData()">\n                <ion-option value="1">School</ion-option>\n                <ion-option value="2">College</ion-option>\n                <ion-option value="3">University</ion-option>                \n              </ion-select>\n\n            </ion-item>\n            \n            <ion-item>  \n              <ion-label floating style="color: #9a9a9a">Organization</ion-label>\n              <ion-input type="text" name="inputShowValue" [(ngModel)]="inputShowValue" (keyup)="getItems($event)"></ion-input>\n            </ion-item>      \n        </ion-list>\n          \n        <ion-list style="background-color: #3f3f3f; color: #fff; font-size: 13px; margin-left: 10px;" class="search-result" [ngStyle]="{\'display\':isSearchbarOpened ? \'block\' : \'none\' }">\n          <ion-item *ngFor="let item of items" (click)="schoolsDetails(item)">\n              {{ item.name }}\n              <p>City : {{ item.city }}, Pin : {{ item.pin }}</p>\n          </ion-item>\n        </ion-list>\n      <!-- </ion-item> \n    </ion-list> -->\n\n    <ion-list>\n        <ion-item>\n          <ion-label floating style="color: #9a9a9a">Phone No</ion-label>\n          <ion-input type="number" name="regNo" [(ngModel)]="mobileNo"></ion-input>\n        </ion-item>      \n    </ion-list>\n\n    <!-- <button ion-button block outline color="blue" class="" (click)=\'registrationSubmit()\'>Submit</button> -->\n\n    <div text-center margin-top style="margin-top: 35px;">\n        <button ion-button color="blue" class="btn-size" (click)=\'registrationSubmit()\'>Submit</button>\n    </div>\n\n    \n    <div text-capitalize text-center margin-top>\n      <p (click)=\'goToStuffLogin()\' style="font-size: 16px; cursor: pointer; font-weight: bold; margin-top: 40px;">already registered?<br> click here to login now.</p>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/stuff-registration/stuff-registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], StuffRegistrationPage);
    return StuffRegistrationPage;
}());

//# sourceMappingURL=stuff-registration.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfDownloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__school_details_school_details__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__library_list_library_list__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__student_notice_board_student_notice_board__ = __webpack_require__(33);
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
    // downloadAndOpenPdf(url: string) {
    //   console.log(url);
    //   let path = null;
    //   if (this.platform.is('ios')) {
    //     path = this.file.documentsDirectory;
    //   } else if (this.platform.is('android')) {
    //     path = this.file.dataDirectory;
    //   }
    //   const transfer = this.transfer.create();
    //   transfer.download(url, path + 'myfile.pdf').then(entry => {
    //     let url = entry.toURL();
    //     this.document.viewDocument(url, 'application/pdf', {});
    //   });
    // }
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
            selector: 'page-pdf-download',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/pdf-download/pdf-download.html"*/'<!--\n  Generated template for the PdfDownloadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Download PDF</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- <ion-list>\n\n    <ion-item *ngFor="let list of noticeList">\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/download-img.png">\n      </ion-thumbnail>\n      <h2>{{list?.title}}</h2>\n      <p>{{list?.subject}}</p>\n      <button ion-button clear item-end (click)="downloadAndOpenPdf(list?.file_url)"><i class="fas fa-download fa-2x"></i></button>\n    </ion-item>\n  </ion-list> -->\n  <!-- (click)="presentProfileModal(notice.id)" -->\n    <ion-list *ngFor="let notice of noticeList">\n      <ion-item *ngIf="notice.notice">\n        <ion-thumbnail item-start (click)="presentProfileModal(notice.id)">\n          <img src="assets/imgs/download-img.png">\n        </ion-thumbnail>\n        <h2>{{notice?.notice?.subject}}</h2>\n        <p>{{notice?.notice?.text}}</p>\n        <p>{{notice?.noticetype?.type_name}}</p>\n        <button ion-button clear item-end (click)="showPdf(notice?.notice?.file_url)">\n          <i class="fas fa-download fa-2x"></i>\n        </button>\n      </ion-item>  \n    </ion-list>\n\n    <ion-list *ngIf="!showList">\n      <ion-item text-center>\n        <p>No Data Found</p>\n      </ion-item>  \n    </ion-list>\n</ion-content>\n\n\n<!-- <ion-footer class="fixed">\n  <ion-toolbar color="primary">\n  <ion-grid text-center >\n    <ion-row>\n      <div col-4 (click)=goToHome()>\n        <i text-center class="fas fa-home fa-inverse fa-lg"></i>\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-4 (click)=gotoLiveStream()>\n        <i text-center class="fas fa-video fa-inverse fa-lg"></i>\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-4>\n        <i text-center class="fas fa-align-justify fa-inverse fa-lg"></i>\n        <p  class="footer-p" (click)=goToLibrary()>Library</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/pdf-download/pdf-download.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], PdfDownloadPage);
    return PdfDownloadPage;
}());

//# sourceMappingURL=pdf-download.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalExamviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PrincipalExamviewPage);
    return PrincipalExamviewPage;
}());

//# sourceMappingURL=principal-examview.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComplaindeskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complain_reply_complain_reply__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PrincipalComplaindeskPage);
    return PrincipalComplaindeskPage;
}());

//# sourceMappingURL=principal-complaindesk.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplainReplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], ComplainReplyPage);
    return ComplainReplyPage;
}());

//# sourceMappingURL=complain-reply.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_notice_board_student_notice_board__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__personal_notice_personal_notice__ = __webpack_require__(60);
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
 * Generated class for the NotificationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationListPage = /** @class */ (function () {
    function NotificationListPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    NotificationListPage.prototype.ionViewDidLoad = function () {
        this.getUserDataFromLocal();
        this.getallNotification();
        console.log('ionViewDidLoad NotificationListPage');
    };
    NotificationListPage.prototype.getUserDataFromLocal = function () {
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
    };
    NotificationListPage.prototype.getallNotification = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "notification/get-all/" + this.localUserData.id).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.allNotification = data.data;
            _this.allNotification.forEach(function (item) {
                item.timeDifference = _this.createJavascriptDate(item.created_at);
            });
        });
    };
    NotificationListPage.prototype.createJavascriptDate = function (strDate) {
        // let date = await new Date();
        var onlyDate = strDate.split(" ");
        var dateArr = onlyDate[0].split('-');
        var date = dateArr[0] + " + " + dateArr[1] + " + " + dateArr[2] + " " + onlyDate[1];
        console.log('date str : ', __WEBPACK_IMPORTED_MODULE_4_moment__(date, "YYYYMMDD HH:mm:ss"));
        return __WEBPACK_IMPORTED_MODULE_4_moment__(date, "YYYY-MM-DDHH:mm:ss").fromNow();
    };
    NotificationListPage.prototype.gotoNotiece = function (id) {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "notification/seen/" + id).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.status) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__student_notice_board_student_notice_board__["b" /* StudentNoticeBoardPage */]);
            }
        });
    };
    NotificationListPage.prototype.gotoPersonalNotiece = function (id) {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "notification/seen/" + id).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.status) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__personal_notice_personal_notice__["a" /* PersonalNoticePage */]);
            }
        });
    };
    NotificationListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification-list',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/notification-list/notification-list.html"*/'<!--\n  Generated template for the NotificationListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notification List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ng-container *ngFor="let noti of allNotification">\n\n    <ion-item [ngStyle]="{\'background-color\':noti.is_seen == 0 ? \'#333333\' : \'#1b1b1b\' }" *ngIf="noti.notification_type_id == 2" (click)="gotoNotiece(noti.id)">\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-buzz.png">\n      </ion-avatar>\n      <h2>{{noti.notification_title}}</h2>\n      <p>{{noti.notification_desc}}</p>\n      <ion-note item-end style="font-size: 12px">{{noti.timeDifference}}</ion-note>\n    </ion-item>\n    <ion-item [ngStyle]="{\'background-color\':noti.is_seen == 0 ? \'#333333\' : \'#1b1b1b\' }" *ngIf="noti.notification_type_id == 1" (click)="gotoPersonalNotiece(noti.id)">\n      <!-- <ion-avatar item-start>\n            <img src="assets/img/avatar-ts-buzz.png">\n          </ion-avatar> -->\n      <h2>{{noti.notification_title}}</h2>\n      <p>{{noti.notification_desc}}</p>\n      <ion-note item-end style="font-size: 12px">{{noti.timeDifference}}</ion-note>\n    </ion-item>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/notification-list/notification-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], NotificationListPage);
    return NotificationListPage;
}());

//# sourceMappingURL=notification-list.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StdRegPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_login_student_login__ = __webpack_require__(101);
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
        // this.getData();
    }
    StdRegPage.prototype.ngOnInit = function () {
        // this.getCollege();
    };
    StdRegPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StdRegPage');
    };
    StdRegPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__student_login_student_login__["a" /* StudentLoginPage */]);
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
            mobile_no: this.mobileNo,
            id_no: this.idNo,
            type: this.type,
        };
        // console.log(data);      
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "user/register", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.data) {
                _this.presentLoading(false);
                console.log('student data : ', data);
                _this.showAlert('Success!', "Your Username is : " + data.data[0].username + " and Password is : " + data.data[0].hint + ". Please login to continue.");
            }
            else {
                _this.presentLoading(false);
                _this.showAlert('Error!', "" + data.Error);
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
        console.log('item arr : ', this.items);
        // console.log('value : ', ev.target.value);
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
    // goToListing() {
    //   if (this.country == null && this.state == null) {
    //     this.presentToast(`State and Country Can't be Blank`)
    //   } else {
    //     let data = {
    //       country: this.country,
    //       state: this.state,
    //       jela: this.jela
    //     };
    //     this.navCtrl.push(SchoolListingPage, {data});
    //   }
    // }
    StdRegPage.prototype.initializeItems = function () {
        this.items = this.list;
    };
    StdRegPage.prototype.schoolsDetails = function (org) {
        this.isSearchbarOpened = false;
        this.inputShowValue = org.name;
        this.college = org.id;
        this.items = [];
    };
    StdRegPage.prototype.getData = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            type: this.type,
            is_reg: true,
        };
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "org/orgsearchbytype", data, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // this.presentLoading(false);
            _this.allSchoolsList = data.data;
            // console.log("school list... : ", this.allSchoolsList);
            // console.log("school list length..... : ", data.data.length);
            if (_this.allSchoolsList.length > 0) {
                _this.list = [];
                _this.allSchoolsList.forEach(function (ele) {
                    var obj = {
                        id: ele.id,
                        name: ele.org_name,
                        city: ele.org_city,
                        pin: ele.pin,
                    };
                    _this.list.push(obj);
                });
                console.log("arr list..... : ", _this.list);
            }
        });
    };
    StdRegPage.prototype.onSearchButtonClick = function () {
        this.isSearchbarOpened = true;
        setTimeout(function () {
            //this.searchbox.setFocus();
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
            selector: 'page-std-reg',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/std-reg/std-reg.html"*/'<ion-content padding>\n    <!-- <h5 class="title" text-center text-uppercase margin-bottom>Student Registration</h5> -->\n    <div text-center margin-top>\n      <h4 style="font-size: 1.9rem;">\n        <img class="login-page-logo" src="assets/icon/cyverhub_logo.svg">\n        <img class="straight-line" src="assets/icon/substract.svg"> Welcome Student !\n      </h4>\n    </div>\n\n\n    <p class="sub-line">\n			<span>Register with your<br>organisation to get the most<br>out of this application.</span>\n		</p>\n		<p class="" text-center text-capitalize margin-bottom style="text-decoration: underline; font-size: 16px;">Please fill the following details</p>\n    <!-- <ion-list>\n      <ion-item> -->\n        <!-- <ion-navbar color="light" [hideBackButton]="isSearchbarOpened ? \'true\' : \'false\'"> -->\n          <!-- <ion-title *ngIf="isSearchbarOpened==false">Submit Enquiry</ion-title>\n          <ion-buttons end *ngIf="isSearchbarOpened==false" (click)="onSearchButtonClick()">\n            <button ion-button icon-only>\n              <ion-icon name="search" color="light"></ion-icon>\n            </button>\n          </ion-buttons> -->\n        <ion-list>\n            <ion-item>\n              <ion-label style="color: #9a9a9a">Organization Type</ion-label>\n\n              <ion-select [(ngModel)]="type" (ngModelChange)="getData()">\n                <ion-option value="1">School</ion-option>\n                <ion-option value="2">College</ion-option>\n                <ion-option value="3">University</ion-option>                \n              </ion-select>\n\n            </ion-item>\n\n            <ion-item>  \n              <ion-label floating style="color: #9a9a9a">Type Your Organization Name</ion-label>\n              <ion-input type="text" name="inputShowValue" [(ngModel)]="inputShowValue" (keyup)="getItems($event)"></ion-input>\n            </ion-item>  \n                \n        </ion-list>\n\n        <ion-list style="background-color: #3f3f3f; color: #fff; font-size: 13px; margin-left: 10px;"  class="search-result" [ngStyle]="{\'display\':isSearchbarOpened ? \'\' : \'none\' }">\n          <ion-item *ngFor="let item of items" (click)="schoolsDetails(item)" style="margin-left: 10px;">\n            {{ item.name }}\n            <p>City : {{ item.city }}, Pin : {{ item.pin }}</p>\n          </ion-item>\n                    \n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label floating style="color: #9a9a9a">Registered Phone No</ion-label>\n            <ion-input type="number" name="regNo" [(ngModel)]="mobileNo"></ion-input>\n          </ion-item>\n          <p class="input-info">Which linked with your organisation</p>\n          <ion-item>\n            <ion-label floating style="color: #9a9a9a">Registered Identity No</ion-label>\n            <ion-input type="text" name="idNo" [(ngModel)]="idNo"></ion-input>\n          </ion-item>\n          <p class="input-info">Which linked with your organisation</p>\n        </ion-list>\n      <!-- </ion-item> \n    </ion-list> -->\n\n    <!-- <ion-list> -->\n        <!-- <ion-item>\n          <ion-label>Phone No</ion-label>\n          <ion-input type="number" name="regNo" [(ngModel)]="mobileNo"></ion-input>\n        </ion-item>  -->\n        <!-- <ion-item>\n          <ion-label floating>Phone No</ion-label>\n          <ion-input type="number" name="regNo" [(ngModel)]="mobileNo"></ion-input>\n        </ion-item>      -->\n    <!-- </ion-list> -->\n\n    <!-- <button ion-button block outline color="blue" class="" (click)=\'registrationSubmit()\'>Submit</button> -->\n    <div text-center margin-top>\n        <button ion-button color="blue" class="btn-size" (click)=\'registrationSubmit()\'>Submit</button>\n    </div>\n\n    \n    <div text-capitalize text-center margin-top>\n      <p (click)=\'goToLogin()\' style="font-size: 16px; cursor: pointer; font-weight: bold;">already registered?<br> click here to login now.</p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/std-reg/std-reg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], StdRegPage);
    return StdRegPage;
}());

//# sourceMappingURL=std-reg.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parents_child_tabs_parents_child_tabs__ = __webpack_require__(248);
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
            selector: 'page-parents-login',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-login/parents-login.html"*/'<ion-content class="item-center" padding color="secondary">\n	<div text-center style="margin-top: 40px;">\n		<h4 style="font-size: 1.9rem;">\n			<img class="login-page-logo" src="assets/icon/cyverhub_logo.svg">\n			<img class="straight-line" src="assets/icon/substract.svg"> Welcome Guardian !\n		</h4>\n	</div>\n\n	<div class="enquiry-form">\n		<p class="sub-line">\n			<span>Here you can login to access all <br>the features your organisation <br>provides you with.</span>\n			</p>\n			<p class="" text-center text-capitalize margin-bottom style="text-decoration: underline; font-size: 16px;">Login with your credentials</p>\n	 	<form>\n			<ion-list style="background-color: none;">\n\n			  <ion-item>\n			  	<ion-label floating style="color: #9a9a9a"> <ion-icon ios="ios-mail" md="md-mail"></ion-icon> Account ID</ion-label>\n			    <ion-input type="text" name="regID" no-margin [(ngModel)]="regID"></ion-input>\n				</ion-item>\n				<p class="input-info">Which Created by Cyberhub</p>\n				\n			  <ion-item>\n			  	<ion-label floating style="color: #9a9a9a"> <ion-icon name="lock"></ion-icon> Account Password</ion-label>\n			    <ion-input type="password" name="pass" no-margin [(ngModel)]="pass"></ion-input>\n				</ion-item>\n				<p class="input-info">Which Created by Cyberhub</p>\n\n				<div text-center style="margin-top: 25px;">\n					<button ion-button color="blue" class="btn-size mt-10">Submit</button>\n				</div>\n\n				<div text-capitalize text-center margin-top>\n						<p style="font-size: 16px; cursor: pointer; margin-top: 40px;">Not registered yet?<br> click here to get registered now.</p>\n				</div>\n			</ion-list>\n		</form>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/parents-login/parents-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ParentsLoginPage);
    return ParentsLoginPage;
}());

//# sourceMappingURL=parents-login.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsChildTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parents_student_view_parents_student_view__ = __webpack_require__(146);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ParentsChildTabsPage);
    return ParentsChildTabsPage;
}());

//# sourceMappingURL=parents-child-tabs.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentOwndetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_library_list_student_library_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_notice_board_student_notice_board__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_notice_personal_notice__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__attendance_attendance__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routine_routine__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__staff_complain_staff_complain__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notification_list_notification_list__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guest_enquiry_guest_enquiry__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__schoolcalender_schoolcalender__ = __webpack_require__(104);
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
    function StudentOwndetailsPage(navCtrl, navParams, menuCtrl, loadingController, http, platform, modalCtrl, viewCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.seeTabs = true;
        this.menuCtrl.enable(false);
        this.initLoader();
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.getViews().length > 1) {
                _this.navCtrl.pop();
            }
        });
        this.getUserDataFromLocal();
        this.getUserData();
    }
    StudentOwndetailsPage.prototype.ngOnInit = function () {
        // this.getUserDataFromLocal();
        // this.getUserData();
        this.getNoticeList();
        // this.getWheatherData();
        this.getStudentDetails();
        this.seeTabs = true;
        this.getnotificationcount();
        // this.getWeatherData();
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
        // this.navCtrl.push(LiveStreamPage);
    };
    StudentOwndetailsPage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__attendance_attendance__["a" /* AttendancePage */]);
    };
    StudentOwndetailsPage.prototype.goToRoutine = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__routine_routine__["a" /* RoutinePage */]);
    };
    StudentOwndetailsPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__account_account__["d" /* default */]);
    };
    StudentOwndetailsPage.prototype.goToComplain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__staff_complain_staff_complain__["a" /* StaffComplainPage */]);
    };
    StudentOwndetailsPage.prototype.goToGuest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */]);
    };
    StudentOwndetailsPage.prototype.goToNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__notification_list_notification_list__["a" /* NotificationListPage */]);
    };
    StudentOwndetailsPage.prototype.goToEvents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__schoolcalender_schoolcalender__["a" /* SchoolcalenderPage */], {
            id: this.localUserData.org_code
        });
    };
    StudentOwndetailsPage.prototype.getUserData = function () {
        var _this = this;
        //this.presentLoading(true);
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: header });
        var data = {
            'org_id': this.localUserData.org_code,
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_9__apiUrl__["a" /* apiUrl */].url + "org/getdetail", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.data) {
                //this.presentLoading(false);
                _this.orgDetails = data.data[0];
                _this.pin = data.data[0].pin;
                // console.log('org details : ...', this.orgDetails);
                // console.log('PIN: ...', this.pin);
                _this.getWeatherData();
            }
        });
    };
    // getWheatherData() {
    //   // this.presentLoading(true);
    // 	var header = new Headers();
    // 	header.append('Content-Type', 'application/json');
    // 	let options = new RequestOptions({headers: header});
    // 	this.http.get(`https://api.openweathermap.org/data/2.5/forecast/daily?zip=94040,us?appid=2335fe6c7bd175d5b8e46bc300783240
    //   `, options).
    // 		map(res => res.json()).subscribe(data => {				
    // 			console.log('api data : ', data);
    // 		});
    // }
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
        if (this.localUserData) {
            // alert('In the student home before modal called.');
            if (this.localUserData.is_app_closed) {
                // console.log('app closed false');
                var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__account_account__["a" /* Modal1Page */]);
                modal.present();
            }
            else {
                // console.log('app closed false');        
            }
        }
        if (this.localUserData.profile_image && this.localUserData.digit_pin != 0) {
            this.profile_image = __WEBPACK_IMPORTED_MODULE_9__apiUrl__["a" /* apiUrl */].url + "public/uploads/profile_pic/" + this.localUserData.profile_image;
            var setdata = {
                u_id: this.localUserData.id,
                pin: this.localUserData.digit_pin,
            };
            localStorage.setItem("securitypinadded", JSON.stringify(setdata));
            this.issecurityadded = JSON.parse(localStorage.getItem("securitypinadded"));
        }
        else {
            this.profile_image = "assets/imgs/student-icon.png";
        }
    };
    StudentOwndetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
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
                            .post(__WEBPACK_IMPORTED_MODULE_9__apiUrl__["a" /* apiUrl */].url + "notice/get", data, { headers: header })
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
    StudentOwndetailsPage.prototype.getStudentDetails = function () {
        var _this = this;
        this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            'master_id': this.localUserData.master_id
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_9__apiUrl__["a" /* apiUrl */].url + "student/studentdetail", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.presentLoading(false);
            // console.log('student detail data : ', data);
            if (data.data[0]) {
                _this.studentDetails = data.data[0];
                _this.studentName = data.data[0].f_name;
                // console.log('student detail data : ', data.data[0]);          
            }
        });
    };
    StudentOwndetailsPage.prototype.getnotificationcount = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_9__apiUrl__["a" /* apiUrl */].url + "notification/count/" + this.localUserData.id).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.count) {
                _this.personalNoticeCount = data.count;
            }
        });
    };
    StudentOwndetailsPage.prototype.goToLogout = function () {
        this.showAlert('Logout !', 'Are you sure ?');
        // localStorage.clear();
        // this.navCtrl.setRoot(HomePage);
    };
    StudentOwndetailsPage.prototype.getWeatherData = function () {
        var _this = this;
        // b60c3e9d5ed15819d78fd18b00e5cfbb
        // https://openweathermap.org/img/w/
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        this.http.get("http://api.openweathermap.org/data/2.5/weather?zip=" + this.pin + ",in&appid=c02a8ac947999e382330611c5f2c508b").
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log('weather data.../',data); 
            _this.weatherdata = data.main;
            _this.temp = Math.round(parseInt(_this.weatherdata.temp) - 273.15);
            _this.weatherIcon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            // console.log('weather img link : ', this.temp );     
        });
    };
    StudentOwndetailsPage.prototype.showAlert = function (title, msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            cssClass: "confirmAlert",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        // console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: "okBtn",
                    handler: function () {
                        // console.log('Agree clicked');
                        localStorage.clear();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
                        // this.navCtrl.push(StudentLoginPage);
                    }
                }
            ]
        });
        alert.present();
    };
    StudentOwndetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-owndetails',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-owndetails/student-owndetails.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <!-- <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>	 -->\n    <ion-title (click)="goToAccount()">Welcome {{studentName}}</ion-title>\n    <ion-buttons end>\n      <button class="bell-icon" (click)=goToNotification()> \n        <!-- <i class="fas fa-bell fa-inverse fa-lg"></i>  -->\n        <img class="" src="assets/icon/notification.svg" style="height: 18px"/>\n      </button>\n      <ion-badge>{{personalNoticeCount}}</ion-badge>\n    </ion-buttons>\n    <ion-buttons end>\n      <button class="bell-icon" (click)=goToLogout()> \n        <!-- <i class="fas fa-sign-out-alt fa-inverse fa-lg"></i>  -->\n        <img class="" src="assets/icon/logout.svg" style="height: 18px"/>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-card style="margin-top: 20px">\n        <p class="card-title-border">Personal Details</p>\n        <!-- <img [src]="orgDetails?.org_img"/> -->\n        <ion-card-content>\n          <div class="back-ground">\n            <div class="profile-container">\n            <div text-center class="mh-container">\n              <img class="profile-image" src="{{profile_image}}" *ngIf="profile_image"/>\n            </div>\n              <!-- <h5 text-center text-uppercase color="light">{{studentDetails?.f_name}} {{studentDetails?.l_name}}</h5> -->\n              <!-- <p text-center text-uppercase no-padding no-margin class="personalDetailfont">{{studentDetails?.user_name}}</p> -->\n            <div class="text-position">\n              <p text-left text-uppercase no-padding no-margin class="stdsmallinfo">{{studentDetails?.nameclass?.class?.class_name}} {{studentDetails?.nameclass?.section?.sec_name}}</p>\n              <p text-left text-uppercase no-padding no-margin class="stdsmallinfo">Semester : {{studentDetails?.nameclass?.sem_id?.sem_no}}</p>\n              <p text-left text-uppercase no-padding no-margin class="stdsmallinfo">Attendance : 60%</p>\n            </div>\n            </div>\n          </div>\n        </ion-card-content>  \n      </ion-card>\n\n      <ion-card style="margin-top: 20px;">\n        <p class="card-title-border1">Organization Details</p>\n        <!-- <img [src]="orgDetails?.org_img"/> -->\n        <ion-card-content>\n          <ion-card-title color="light" style="font-size: 18px; text-align: center">\n            {{orgDetails?.org_name}}\n          </ion-card-title>\n            <!-- <div float-right >\n              <p [ngStyle]="{\'font-size\': \'24px\'}">\n                <ion-icon name="cloud"></ion-icon>\n              17 °C</p>\n            </div> -->\n            <!-- <p ><strong>Email</strong>: demo@gmail.com</p>\n            <p><strong>Mobile</strong>: 1234567890</p> -->\n            <div>                      \n                <!-- <ion-col col-12> -->\n                  <p color="light" class="personalDetailfont">Affiliated by: {{orgDetails?.affileats[0]?.affi_name}}</p>\n                  <p color="light" class="personalDetailfont">Web: <a href="{{orgDetails?.website}}" target="_blank">{{orgDetails?.website}}</a> </p>\n                  <p color="light" class="personalDetailfont">Phone: {{orgDetails?.phone_no}}</p>\n                  <p color="light" class="personalDetailfont">Email: {{orgDetails?.email}}</p>\n                <!-- </ion-col> -->\n              \n                <!-- <ion-col col-12>\n                  <p color="light"> <b>Web:</b> <a href="{{orgDetails?.website}}" target="_blank">{{orgDetails?.website}}</a> </p>\n                </ion-col>\n                <ion-col col-12>\n                  <p color="light"> <b>Phone:</b> <span>{{orgDetails?.phone_no}}</span> </p>\n                </ion-col>\n                <ion-col col-12>\n                  <p color="light"> <b>Email:</b> <span>{{orgDetails?.email}}</span> </p>\n                </ion-col> -->\n              </div>\n\n              <div class="weatherDiv" *ngIf="weatherdata">\n                  <img class="wether-icon1" src="assets/icon/mobileme-logo-of-black-cloud.svg" alt="weather">\n                  <img class="wether-icon" src="{{weatherIcon}}" alt="weather">\n                  <span class="weatherdata">\n                    <label *ngIf="temp" style="font-size: 9px; color: #000;"><span style="font-size: 9px; color: #000;">Now</span> {{temp}} C</label>\n                  </span>              \n              </div>\n            <!-- </ion-grid> -->\n\n            <!-- <p><strong>About</strong> : </p>\n            <div [innerHtml]="orgDetails?.org_about" class="mt-4"></div> -->\n        </ion-card-content>  \n      </ion-card>\n\n<ion-grid>\n\n  <ion-row>\n    <!-- <ion-col col-md-4 class="icon-center" (click)=goToPersonalNotice()>\n      <img class="logo-action" src="assets/icon/personalNotice.svg"/>\n      <p>Personal Notice</p>\n    </ion-col> -->\n    <ion-col col-md-4 class="icon-center" (click)=goToLibrary() style="border-top: 2px solid #fff;">\n      <img class="logo-action" src="assets/imgs/library_logo.svg"/>\n      <p text-uppercase>Library</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToComplain() style="border-top: 2px solid #fff;">\n      <img class="logo-action" src="assets/icon/complaints.svg"/>\n      <p text-uppercase>principal desk</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToAccount() style="border-top: 2px solid #fff;">\n      <img class="logo-action" src="assets/icon/myAccount.svg" />\n      <p text-uppercase>Self Account</p>\n    </ion-col>\n    <!-- <ion-col col-md-4 class="icon-center" (click)=goToAllPdf()>\n      <img class="logo-action" src="assets/imgs/notice_board_logo_colored.svg"/>\n      <p>Notice Board</p>\n    </ion-col> -->\n  </ion-row>\n\n  <ion-row>\n    <!-- <ion-col col-md-4 class="icon-center" (click)=goToPersonalNotice()>\n      <img class="logo-action" src="assets/icon/personalNotice.svg"/>\n      <p>Personal Notice</p>\n    </ion-col> -->\n    <ion-col col-md-4 class="icon-center" (click)=gotoLiveStream() style="border-top: 2px solid #fff;">\n      <img class="logo-action" src="assets/icon/live_stream_btn.svg"/>\n      <p text-uppercase>Live Stream</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToEvents() style="border-top: 2px solid #fff;">\n      <img class="logo-action" src="assets/icon/calender_btn.svg"/>\n      <p text-uppercase>Events</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToChangeLang() style="border-top: 2px solid #fff;">\n      <img class="logo-action" src="assets/icon/changeLanguage.svg" />\n      <p text-uppercase>Change Language</p>\n    </ion-col>\n    <!-- <ion-col col-md-4 class="icon-center" (click)=goToAllPdf()>\n      <img class="logo-action" src="assets/imgs/notice_board_logo_colored.svg"/>\n      <p>Notice Board</p>\n    </ion-col> -->\n  </ion-row>\n<!-- \n  <ion-row>\n    <ion-col col-md-4 class="icon-center" (click)=goToAttendance()>\n      <img src="assets/imgs/icon3.png"/>\n      <p>Attendance</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToRoutine()>\n      <img src="assets/imgs/icon4.png"/>\n      <p>Routine</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToAccount()>\n      <img src="assets/imgs/icon5.png"/>\n      <p>Account</p>\n    </ion-col>\n  </ion-row> -->\n\n  <!-- <ion-row> -->\n    <!-- <ion-col col-md-4 class="icon-center" (click)=goToComplain()>\n      <img class="logo-action" src="assets/imgs/icon7.png"/>\n      <p>Complain</p>\n    </ion-col>\n    <ion-col col-md-4 class="icon-center" (click)=goToAccount()>\n      <img class="logo-action" src="assets/icon/myAccount.svg" />\n      <p>Account</p>\n    </ion-col> -->\n    <!-- <ion-col col-md-4 class="icon-center" (click)=goToLogout()>\n      <img class="logo-action" src="assets/icon/logout.svg"/>\n      <p>Logout</p>\n    </ion-col> -->\n\n  <!-- </ion-row> -->\n\n</ion-grid>\n\n</ion-content>\n\n\n<!-- <ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3>\n        <img src="assets/imgs/white-icon5.png">\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-owndetails/student-owndetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], StudentOwndetailsPage);
    return StudentOwndetailsPage;
}());

//# sourceMappingURL=student-owndetails.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveStreamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LiveStreamPage);
    return LiveStreamPage;
}());

//# sourceMappingURL=live-stream.js.map

/***/ }),

/***/ 283:
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
webpackEmptyAsyncContext.id = 283;

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		799,
		38
	],
	"../pages/attendance-list/attendance-list.module": [
		800,
		37
	],
	"../pages/attendance/attendance.module": [
		801,
		36
	],
	"../pages/changepassword/changepassword.module": [
		802,
		35
	],
	"../pages/complain-reply/complain-reply.module": [
		803,
		34
	],
	"../pages/get-attendance/get-attendance.module": [
		804,
		33
	],
	"../pages/guest-enquiry/guest-enquiry.module": [
		805,
		32
	],
	"../pages/library-list/library-list.module": [
		806,
		31
	],
	"../pages/live-stream/live-stream.module": [
		807,
		0
	],
	"../pages/notification-list/notification-list.module": [
		808,
		30
	],
	"../pages/parents-account/parents-account.module": [
		809,
		29
	],
	"../pages/parents-child-tabs/parents-child-tabs.module": [
		810,
		28
	],
	"../pages/parents-login/parents-login.module": [
		811,
		27
	],
	"../pages/parents-student-view/parents-student-view.module": [
		812,
		26
	],
	"../pages/pdf-download/pdf-download.module": [
		813,
		25
	],
	"../pages/personal-notice/personal-notice.module": [
		814,
		24
	],
	"../pages/principal-complaindesk/principal-complaindesk.module": [
		835,
		23
	],
	"../pages/principal-examview/principal-examview.module": [
		815,
		22
	],
	"../pages/routine/routine.module": [
		816,
		21
	],
	"../pages/school-details/school-details.module": [
		817,
		20
	],
	"../pages/school-listing/school-listing.module": [
		818,
		19
	],
	"../pages/schoolcalender/schoolcalender.module": [
		819,
		18
	],
	"../pages/search-organisation/search-organisation.module": [
		837,
		17
	],
	"../pages/staff-complain/staff-complain.module": [
		836,
		16
	],
	"../pages/staff-info/staff-info.module": [
		820,
		15
	],
	"../pages/staff-login/staff-login.module": [
		821,
		14
	],
	"../pages/staff-tabs/staff-tabs.module": [
		822,
		13
	],
	"../pages/std-reg/std-reg.module": [
		823,
		12
	],
	"../pages/student-library-list/student-library-list.module": [
		824,
		11
	],
	"../pages/student-login/student-login.module": [
		825,
		10
	],
	"../pages/student-notice-board/student-notice-board.module": [
		826,
		9
	],
	"../pages/student-owndetails/student-owndetails.module": [
		827,
		8
	],
	"../pages/students-tabs/students-tabs.module": [
		828,
		7
	],
	"../pages/stuff-change-pass/stuff-change-pass.module": [
		829,
		6
	],
	"../pages/stuff-edit/stuff-edit.module": [
		830,
		5
	],
	"../pages/stuff-examduty/stuff-examduty.module": [
		831,
		4
	],
	"../pages/stuff-registration/stuff-registration.module": [
		832,
		3
	],
	"../pages/test/test.module": [
		833,
		2
	],
	"../pages/welcome-guest/welcome-guest.module": [
		834,
		1
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
webpackAsyncContext.id = 326;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StudentNoticeBoardPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_owndetails_student_owndetails__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attendance_attendance__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routine_routine__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__staff_info_staff_info__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
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
    function StudentNoticeBoardPage(platform, navCtrl, http, navParams, menuCtrl, loadingController, modalCtrl, jsonp, viewCtrl, fileOpener) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.jsonp = jsonp;
        this.viewCtrl = viewCtrl;
        this.fileOpener = fileOpener;
        this.notice = "general";
        this.allNotice = [];
        this.page = 0;
        this.perPage = 4;
        this.totalData = 0;
        this.totalPage = 0;
        this.departmentalNotice = [];
        this.generalNotice = [];
        this.personalNotice = [];
        this.getUserDataFromLocal();
        this.menuCtrl.enable(false);
        this.initLoader();
        for (var i = 0; i < 5; i++) {
            this.allNotice.push(this.allNotice.length);
        }
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.getViews().length > 1) {
                _this.navCtrl.pop();
            }
        });
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
            var _this = this;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(data.data.length > 1)) return [3 /*break*/, 4];
                        // console.log("notice list : ", data.data);
                        _a = this;
                        return [4 /*yield*/, data.data];
                    case 1:
                        // console.log("notice list : ", data.data);
                        _a.allNotice = _d.sent();
                        this.allNotice.forEach(function (item) {
                            item.timeDifference = _this.createJavascriptDate(item.created_at);
                            if (item.notice != null && item.notice.file_url != null) {
                                item.docType = _this.getDocType(item.notice.file_url);
                            }
                        });
                        this.filterAllNotices(this.allNotice);
                        _b = this;
                        return [4 /*yield*/, data.data.length];
                    case 2:
                        _b.totalData = _d.sent();
                        _c = this;
                        return [4 /*yield*/, Math.floor(this.totalData / 5)];
                    case 3:
                        _c.totalPage = _d.sent();
                        this.presentLoading(false);
                        console.log("notice list : ", this.allNotice);
                        return [3 /*break*/, 5];
                    case 4:
                        this.presentLoading(false);
                        _d.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    StudentNoticeBoardPage.prototype.getDocType = function (file) {
        console.log(file);
        if (file != null && file != '') {
            var arr = file.split('.');
            var extention = arr[parseInt(arr.length) - 1];
            return extention;
        }
        else {
            return null;
        }
    };
    StudentNoticeBoardPage.prototype.filterAllNotices = function (arr) {
        var _this = this;
        arr.forEach(function (item) {
            if (item.notiece_type_id == '1') {
                _this.departmentalNotice.push(item);
            }
            if (item.notiece_type_id == '2') {
                _this.generalNotice.push(item);
            }
            if (item.notiece_type_id == '3') {
                _this.personalNotice.push(item);
            }
        });
    };
    StudentNoticeBoardPage.prototype.createJavascriptDate = function (strDate) {
        // let date = await new Date();
        var onlyDate = strDate.substring(0, 10);
        var dateArr = onlyDate.split('-');
        var date = dateArr[0] + dateArr[1] + dateArr[2];
        //console.log('date str : ', date);
        return __WEBPACK_IMPORTED_MODULE_11_moment__(date, "YYYYMMDD").fromNow();
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
                        if (!(data.data.length > 1)) return [3 /*break*/, 4];
                        console.log("guest notice list : ", data.data);
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
            notice: filterNotice[0],
        });
        profileModal.present();
    };
    StudentNoticeBoardPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    StudentNoticeBoardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-student-notice-board",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-notice-board/student-notice-board.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Notice Board</ion-title>\n    <ion-buttons end (click)=goToHome() *ngIf="localUserData == null">\n        <button ion-button icon-only>\n          <ion-icon name="home" color="light"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="notice">\n      <ion-segment-button value="general">\n        <p>\n          <img class="notice-img" style="height: 20px" src="assets/imgs/generalNotice.svg">\n        </p>        \n        GENERAL NOTICE\n      </ion-segment-button>\n      <ion-segment-button value="personal">\n          <p>\n              <img class="notice-img" style="height: 20px" src="assets/imgs/personalNotice.svg">\n            </p>\n        PERSONAL NOTICE\n      </ion-segment-button>\n      <ion-segment-button value="departmental">\n          <p>\n              <img class="notice-img" style="height: 20px" src="assets/imgs/departmentalNotice.svg">\n            </p>\n        DEPARTMENTAL NOTICE\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n  <div [ngSwitch]="notice">\n\n    <ion-list *ngSwitchCase="\'general\'">\n        <ion-item *ngFor="let notice of generalNotice" style="background-color: #1b1b1b; color: #f6f6f6; border-bottom: 1px solid #3b3b3b">\n            <ion-thumbnail item-start (click)="presentProfileModal(notice.id)">\n              <img *ngIf="notice?.docType == \'pdf\'" class="notice-img" src="assets/imgs/pdf_logo.svg">\n              <img *ngIf="!notice?.docType" class="notice-img" src="assets/icon/file.svg">\n              <img *ngIf="notice?.docType == \'docx\'" class="notice-img" src="assets/icon/doc.svg">\n            </ion-thumbnail>\n            <h2 (click)="presentProfileModal(notice.id)">{{notice?.notice?.subject}}</h2>\n            <p style="font-size: 10px; color: #a0a0a0" (click)="presentProfileModal(notice.id)">{{notice?.notice?.text}}</p>\n            <!-- <p>{{notice?.noticetype?.type_name}}</p> -->\n            <ion-note style="font-size: 10px; color: #a0a0a0" item-end>{{notice?.created_at.substring(0,10)}}</ion-note>\n            <!-- <ion-note item-end style="font-size: 11px;">\n              {{notice?.timeDifference}}\n            </ion-note> -->\n            <a style="padding: 0px" *ngIf="notice?.notice?.file_url" ion-button clear target="_blank" href="http://softechs.co.in/school_hub/public/uploads/Notices/{{notice?.notice?.file_url}}">\n              <!-- <i class="fas fa-download fa-2x"></i> -->\n              View Pdf\n            </a>            \n        </ion-item>\n    </ion-list>\n\n\n    <ion-list *ngSwitchCase="\'personal\'">\n      <ion-item *ngFor="let notice of personalNotice" style="background-color: #1b1b1b; color: #f6f6f6; border-bottom: 1px solid #3b3b3b">\n        <ion-thumbnail item-start (click)="presentProfileModal(notice.id)">\n            <img *ngIf="notice?.docType == \'pdf\'" class="notice-img" src="assets/imgs/pdf_logo.svg">\n            <img *ngIf="!notice?.docType" class="notice-img" src="assets/icon/file.svg">\n            <img *ngIf="notice?.docType == \'docx\'" class="notice-img" src="assets/icon/doc.svg">\n        </ion-thumbnail>\n        <h2 (click)="presentProfileModal(notice.id)">{{notice?.notice?.subject}}</h2>\n        <p style="font-size: 10px; color: #a0a0a0" (click)="presentProfileModal(notice.id)">{{notice?.notice?.text}}</p>\n        <!-- <p>{{notice?.noticetype?.type_name}}</p> -->\n        <ion-note style="font-size: 10px; color: #a0a0a0" item-end>{{notice?.created_at.substring(0,10)}}</ion-note>\n        <!-- <p style="font-size: 10px; color: #a0a0a0">{{notice?.created_at}}</p> -->\n        <!-- <ion-note item-end style="font-size: 11px;">\n          {{notice?.timeDifference}}\n        </ion-note> -->\n        <a style="padding: 0px" *ngIf="notice?.notice?.file_url" ion-button clear target="_blank" href="http://softechs.co.in/school_hub/public/uploads/Notices/{{notice?.notice?.file_url}}">\n          <!-- <i class="fas fa-download fa-2x"></i> -->\n          View Pdf\n        </a>\n        \n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'departmental\'">\n        <ion-item *ngFor="let notice of departmentalNotice" style="background-color: #1b1b1b; color: #f6f6f6; border-bottom: 1px solid #3b3b3b">\n            <ion-thumbnail item-start (click)="presentProfileModal(notice.id)">\n                <img *ngIf="notice?.docType == \'pdf\'" class="notice-img" src="assets/imgs/pdf_logo.svg">\n                <img *ngIf="!notice?.docType" class="notice-img" src="assets/icon/file.svg">\n                <img *ngIf="notice?.docType == \'docx\'" class="notice-img" src="assets/icon/doc.svg">\n            </ion-thumbnail>\n            <h2 (click)="presentProfileModal(notice.id)">{{notice?.notice?.subject}}</h2>\n            <p style="font-size: 10px; color: #a0a0a0" (click)="presentProfileModal(notice.id)">{{notice?.notice?.text}}</p>\n            <!-- <p>{{notice?.noticetype?.type_name}}</p> -->\n            <!-- <p style="font-size: 10px; color: #a0a0a0">{{notice?.created_at}}</p> -->\n            <ion-note style="font-size: 10px; color: #a0a0a0" item-end>{{notice?.created_at.substring(0,10)}}</ion-note>\n            <!-- <ion-note item-end style="font-size: 11px;">\n              {{notice?.timeDifference}}\n            </ion-note> -->\n            <a style="padding: 0px" *ngIf="notice?.notice?.file_url" ion-button clear target="_blank" href="http://softechs.co.in/school_hub/public/uploads/Notices/{{notice?.notice?.file_url}}">\n              <!-- <i class="fas fa-download fa-2x"></i> -->\n              View Pdf\n            </a>\n            \n        </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n\n\n\n<ion-content *ngIf="!allNotice">\n    <ion-item>\n        <p text-center><strong>Nothing Found</strong></p>\n    </ion-item>\n</ion-content>\n\n<!-- <pdf-viewer [src]="pdfSrc" [render-text]="true" style="display: block;"></pdf-viewer> -->\n\n\n<!-- <ion-footer class="fixed" *ngIf="localUserData != null">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=goToHome()>\n        <img src="assets/imgs/white-icon5.png">\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-notice-board/student-notice-board.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* Jsonp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-notice-board/notice-modal.html"*/'<ion-header>\n        <ion-toolbar>\n          <ion-title>\n              {{notice?.noticetype?.type_name}}\n          </ion-title>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()" style="\n            width: 61%; font-size: 2.2rem;">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n</ion-header>\n\n\n<ion-content>        \n  <ion-card style="background-color: #353434">       \n    \n    <h4 text-center style="font-size: 18px; color: #fff; padding-top: 10px;"><strong>{{notice?.notice?.subject}}</strong></h4>\n    \n    <ion-card-content>\n      <p style="color: #fff; font-size: 1.2rem"><strong>Title</strong> : {{notice?.notice?.title}}</p>\n      <p style="color: #fff; font-size: 1.2rem"><strong>Details</strong> : {{notice?.notice?.text}}</p>\n      <!-- <p style="color: #fff; font-size: 1.2rem"><strong>Notice Type</strong> : {{notice?.noticetype?.type_name}}</p> -->\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-notice-board/notice-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], NoticeModalPage);
    return NoticeModalPage;
}());

//# sourceMappingURL=student-notice-board.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routine_routine__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_owndetails_student_owndetails__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__test_test__ = __webpack_require__(238);
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
        this.socket = __WEBPACK_IMPORTED_MODULE_7_socket_io_client__("http://3.84.60.73:3000/");
        this.period = '';
        this.menuCtrl.enable(false);
        this.initLoader();
    }
    AttendancePage.prototype.ngOnInit = function () {
        console.log('Attendance page...');
        this.getUserDataFromLocal();
        this.getShiftLists();
        // this.getClassList();
        // this.getPeriod();
        this.showPeriodForm = true;
        this.getStudentDetails();
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
        var _this = this;
        // let todayDate = new Date().toLocaleString().substring(0,9).toString();
        // todayDate = todayDate.toLocaleString();
        if (this.period == '') {
            this.showAlert('Please select your period.');
            return;
        }
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
                    this.showAlert('Sorry, wrong selection.');
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
    AttendancePage.prototype.getStudentDetails = function () {
        var _this = this;
        this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            'master_id': this.localUserData.master_id
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_5__apiUrl__["a" /* apiUrl */].url + "student/studentdetail", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            //console.log('student detail data : ', data);
            if (data.data[0]) {
                _this.presentLoading(false);
                _this.student = data.data[0];
                console.log('student details : ...', _this.student);
                _this.getPeriod(_this.student.shift_id);
                // this.presentLoading(false);
            }
        });
    };
    AttendancePage.prototype.presentLoading = function (load) {
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
    AttendancePage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    AttendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-attendance",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/attendance/attendance.html"*/'\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Attendance</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n<ion-content *ngIf="showPeriodForm" class="item-center" padding>\n	<h4 class="title" text-center text-uppercase margin-bottom>Select Period</h4>\n	 <!-- <ion-list>\n			<ion-item>\n				<ion-label>Shift</ion-label>\n				<ion-select [(ngModel)]="shift" (ionChange)="getPeriod($event)">\n					<ng-container *ngFor="let shift of orgShiftLists">\n						<ion-option value="{{shift.orgshift[0]?.id}}" *ngIf="shift.orgshift[0]?.id">{{shift.name}}</ion-option>\n					</ng-container>\n				</ion-select>\n			</ion-item>\n	</ion-list> -->\n\n	<!--<ion-list>\n			<ion-item>\n				<ion-label>Stream</ion-label>\n				<ion-select [(ngModel)]="stream" (ionChange)="onChooseClassStream($event)">\n					<ion-option value="{{classStream.class_id}}" *ngFor="let classStream of sortArray">{{classStream.class_name}}</ion-option>\n				</ion-select>\n			</ion-item>\n	</ion-list>\n\n	<ion-list>\n			<ion-item>\n				<ion-label>Department</ion-label>\n				<ion-select [(ngModel)]="department">\n					<ion-option value="{{sec.sec_id}}" *ngFor="let sec of filteredArrayForSectionList">{{sec.section_name}}</ion-option>\n				</ion-select>\n			</ion-item>\n	</ion-list>		 -->\n\n	<ion-list>\n			<ion-item>\n				<ion-label>Period</ion-label>\n				<ion-select [(ngModel)]="period">\n					<ion-option *ngFor="let period of periodList" value="{{period.id}}">\n						{{period.priod_name}} ({{period.from_time}} {{period.to_time}})\n					</ion-option>\n				</ion-select>\n			</ion-item>\n	</ion-list>\n\n	<button ion-button block outline color="blue" class="mt-10" (click)="onPeriodSubmit()">Submit</button>\n</ion-content>\n\n\n\n\n\n<ion-content class="item-center" *ngIf="!showPeriodForm" padding>\n	<div class="enquiry-form">\n		<h1 class="title" text-center text-uppercase margin-bottom>Enter Attendance Pin</h1>\n	 	<form>\n		  <ion-item class="select-css">\n		    <ion-input type="text" name="attPin" placeholder="Enter Pin" [(ngModel)]="attPin"></ion-input>\n			</ion-item>\n		 <button ion-button type="submit" block outline color="blue" class="mt-10" (click)="onSubmitStudentAttPin()">Submit</button>\n		</form>\n	</div>\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/attendance/attendance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AttendancePage);
    return AttendancePage;
}());

//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendance_attendance__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_owndetails_student_owndetails__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
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
        this.scheduleTab = "class";
        this.data = [];
        this.dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
                console.log('routine list : ', _this.rawRoutineList);
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
                                var new_data = {
                                    id: element.id,
                                    day: element.day,
                                    dayName: _this.dayName[parseInt(element.day) - 1],
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
            selector: 'page-routine',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/routine/routine.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>Schedule</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n      <ion-segment [(ngModel)]="scheduleTab">\n        <ion-segment-button value="class">\n          <p>\n            <img class="notice-img" style="height: 20px" src="assets/imgs/generalNotice.svg">\n          </p>        \n          Class Schedule\n        </ion-segment-button>\n        <ion-segment-button value="exam">\n            <p>\n              <img class="notice-img" style="height: 20px" src="assets/imgs/personalNotice.svg">\n            </p>\n          Exam Schedule\n        </ion-segment-button>\n      </ion-segment>        \n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n    <div [ngSwitch]="scheduleTab">\n        <ion-list *ngSwitchCase="\'class\'">\n            <ion-item padding *ngFor="let routine of routineList" (click)="toggleDetails(routine)" style="padding-top: 5px; padding-bottom: 5px;">\n              <ion-icon style="color: #fff;" item-right [name]="routine?.icon"></ion-icon>\n              {{routine?.dayName}}\n              <!-- <table *ngIf="routine.showDetails">{{routine}}</table> -->\n        \n              <ion-list *ngIf="routine?.showDetails">\n                <ion-item *ngFor="let r of routine.priods" style="padding-top: 5px; padding-bottom: 5px;">\n                  <p>Priod : {{r?.priod_name}} Priod ({{r?.from_time}} to {{r?.to_time}})</p>\n                  <p *ngIf="r?.rutinedetails[0]">Subject Name : {{r?.rutinedetails[0]?.cc_name}}</p>\n                  <p *ngIf="!r?.rutinedetails[0]">Subject Name : </p>\n                  <!-- <p *ngIf="r?.rutinedetails[0]">Time : {{r?.from_time}} to {{r?.to_time}}</p> -->\n                  <!-- <p *ngIf="!r?.rutinedetails[0]">Time : NA</p> -->\n                  <p *ngIf="r?.rutinedetails[0]">Teacher : {{r?.rutinedetails[0]?.teacher?.name}} ({{r?.rutinedetails[0]?.teacher?.short_name}})</p>\n                  <p *ngIf="r?.rutinedetails[0]">Room Name : {{r?.rutinedetails[0]?.room?.name}}</p>\n                  <p *ngIf="!r?.rutinedetails[0]">Teacher : </p>\n                  <p *ngIf="!r?.rutinedetails[0]">Room Name : </p>\n                </ion-item>\n              </ion-list>\n            \n            </ion-item>\n        </ion-list>\n    \n    \n        <ion-list *ngSwitchCase="\'exam\'"></ion-list>\n      </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/routine/routine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
    ], RoutinePage);
    return RoutinePage;
    var RoutinePage_1;
}());

//# sourceMappingURL=routine.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_library_list_student_library_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_notice_board_student_notice_board__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__personal_notice_personal_notice__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__get_attendance_get_attendance__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__staff_complain_staff_complain__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__parents_account_parents_account__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guest_enquiry_guest_enquiry__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__principal_examview_principal_examview__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__principal_complaindesk_principal_complaindesk__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stuff_examduty_stuff_examduty__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__schoolcalender_schoolcalender__ = __webpack_require__(104);
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
    function StaffInfoPage(navCtrl, navParams, menuCtrl, loadingController, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.getUserDataFromLocal();
        this.menuCtrl.enable(false);
        this.initLoader();
        this.getUserData();
        this.getTeacherDetails();
    }
    StaffInfoPage.prototype.ngOnInit = function () {
        console.log('Stuff info page...');
    };
    StaffInfoPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad StaffInfoPage');
        // this.getWeatherData();
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
        // this.navCtrl.push(LiveStreamPage);
    };
    StaffInfoPage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__get_attendance_get_attendance__["a" /* GetAttendancePage */]);
    };
    StaffInfoPage.prototype.goToComplain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__staff_complain_staff_complain__["a" /* StaffComplainPage */]);
    };
    StaffInfoPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__parents_account_parents_account__["a" /* ParentsAccountPage */]);
    };
    StaffInfoPage.prototype.goToGuest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */]);
    };
    StaffInfoPage.prototype.goToPrincipal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__principal_examview_principal_examview__["a" /* PrincipalExamviewPage */]);
    };
    StaffInfoPage.prototype.goToComplainDesk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__principal_complaindesk_principal_complaindesk__["a" /* PrincipalComplaindeskPage */]);
    };
    StaffInfoPage.prototype.goToStuffDuty = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__stuff_examduty_stuff_examduty__["a" /* StuffExamdutyPage */]);
    };
    StaffInfoPage.prototype.goToEvents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__schoolcalender_schoolcalender__["a" /* SchoolcalenderPage */], {
            id: this.localUserData.org_code
        });
    };
    StaffInfoPage.prototype.getUserData = function () {
        var _this = this;
        // this.presentLoading(true);
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: header });
        var data = {
            'org_id': this.localUserData.org_code,
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "org/getdetail", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // this.presentLoading(false);			
            // console.log('org_details : ', data.data[0]);
            if (data.data) {
                _this.orgDetails = data.data[0];
                _this.pin = data.data[0].pin;
                // console.log('org_details : ', data.data[0]);
                // console.log('PIN : ', this.pin);	
                _this.getWeatherData();
            }
        });
    };
    // getUserData() {
    //   this.presentLoading(true);
    // 	var header = new Headers();
    // 	header.append('Content-Type', 'application/json');
    // 	let options = new RequestOptions({headers: header});
    // 	let data = {
    //     'org_id': this.localUserData.org_code,
    //   }
    // 	this.http.post(`${apiUrl.url}org/getdetail`, data, options).
    // 		map(res => res.json()).subscribe(data => {				
    // 			console.log('org_details : ', data.data[0]);
    // 			if (data.data) {
    //         this.presentLoading(false);
    //         this.orgDetails = data.data[0];					
    //       }
    // 		});
    // }
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
        // this.presentLoading(true);
        var data = localStorage.getItem('userData');
        this.localUserData = JSON.parse(data);
        // console.log('local data : ', this.localUserData); 
        if (this.localUserData.profile_image) {
            this.profile_image = __WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "public/uploads/profile_pic/" + this.localUserData.profile_image;
        }
        else {
            this.profile_image = "assets/imgs/student-icon.png";
        }
    };
    StaffInfoPage.prototype.goToLogout = function () {
        // this.showAlert('Logout', 'Are you sure want to logout ?');
        // localStorage.clear();
        // this.navCtrl.setRoot(HomePage);
        this.showAlert('Logout !', 'Are you sure ?');
    };
    StaffInfoPage.prototype.getTeacherDetails = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            'master_id': this.localUserData.master_id,
            'org_id': this.localUserData.org_code
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* apiUrl */].url + "staff/details", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // this.presentLoading(false);
            if (data.data[0]) {
                _this.teacherDetails = data.data[0];
                // console.log('teacher details : ', data.data[0]);
                // if(data.data[0].nameclass){
                //   this.showSelectDepartmentBtn = false;
                // }else{
                //   this.showSelectDepartmentBtn = true;
                // }
            }
        });
    };
    StaffInfoPage.prototype.getWeatherData = function () {
        var _this = this;
        // b60c3e9d5ed15819d78fd18b00e5cfbb
        // https://openweathermap.org/img/w/
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        this.http.get("http://api.openweathermap.org/data/2.5/weather?zip=" + this.pin + ",in&appid=c02a8ac947999e382330611c5f2c508b").
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log('weather data.../',data); 
            _this.weatherdata = data.main;
            _this.temp = Math.round(parseInt(_this.weatherdata.temp) - 273.15);
            _this.weatherIcon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            // console.log('weather img link : ', this.temp );     
        });
    };
    StaffInfoPage.prototype.showAlert = function (title, msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            cssClass: "confirmAlert",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        // console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: "okBtn",
                    handler: function () {
                        localStorage.clear();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__home_home__["a" /* HomePage */]);
                        // this.navCtrl.push(StaffLoginPage);
                    }
                }
            ]
        });
        alert.present();
    };
    StaffInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-staff-info',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-info/staff-info.html"*/'\n<ion-header>\n  <ion-navbar color="blue">\n    <!-- <button ion-button menuToggle color="light">\n     <ion-icon name="menu"></ion-icon>\n   </button> -->\n    <ion-title>Welcome {{teacherDetails?.f_name}}</ion-title>\n    <ion-buttons end>\n      <button class="bell-icon" (click)=goToPersonalNotice()> \n        <!-- <i class="fas fa-bell fa-inverse fa-lg"></i>  -->\n        <img class="" src="assets/icon/notification.svg" style="height: 18px"/>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n        <button class="bell-icon" (click)=goToLogout()> \n          <!-- <i class="fas fa-sign-out-alt fa-inverse fa-lg"></i>  -->\n          <img class="" src="assets/icon/logout.svg" style="height: 18px"/>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card style="margin-top: 20px">\n        <p class="card-title-border">Personal Details</p>\n        <!-- <img [src]="orgDetails?.org_img"/> -->\n        <ion-card-content>\n            <div class="">\n                <div class="profile-container">\n                <div text-center class="mh-container">\n                  <img class="profile-image" src="{{profile_image}}" *ngIf="profile_image"/>\n                </div>\n                <!-- <button ion-button icon-only round small color="light" class="camera-icon" (click)="getImage()">\n                  <ion-icon name="camera"></ion-icon>\n                </button> -->\n                <div class="text-position">\n                  <h5 text-center text-uppercase color="light">{{teacherDetails?.name}}</h5>\n                  <p text-center text-uppercase class="">Dept: Physics</p>\n                </div>\n                </div>\n            </div>\n        </ion-card-content>  \n      </ion-card>\n\n  <ion-card style="margin-top: 20px">\n    <!-- <img src="{{orgDetails?.org_img}}"/> -->\n    <p class="card-title-border1">Organization Details</p>\n    <ion-card-content>\n      <ion-card-title style="font-size: 18px; text-align: center">\n        {{orgDetails?.org_name}}\n      </ion-card-title>\n\n\n      <!-- <ion-grid>      \n          <ion-row> -->\n            <div>\n              <p class="personalDetailfont"> <b>City:</b> <span>{{orgDetails?.org_city}}</span> </p>\n              <p class="personalDetailfont"> <b>Pin:</b> <span>{{orgDetails?.pin}}</span> </p>\n              <p class="personalDetailfont"> <b>Affiliated by:</b> <span>{{orgDetails?.affileats[0]?.affi_name}}</span> </p>\n              <p class="personalDetailfont"> <b>Web:</b> <a href="{{orgDetails?.website}}" target="_blank">{{orgDetails?.website}}</a> </p>\n              <p class="personalDetailfont"> <b>Phone:</b> <span>{{orgDetails?.phone_no}}</span> </p>\n              <p class="personalDetailfont"> <b>Email:</b> <span>{{orgDetails?.email}}</span> </p>\n            </div>\n\n            <!-- <div class="weatherDiv" *ngIf="weatherdata">\n              <img class="wether-icon" src="{{weatherIcon}}" alt="weather">\n              <span class="weatherdata">\n                <label *ngIf="temp" style="font-size: 10px;">{{temp}} C</label>\n              </span>              \n            </div> -->\n\n            <div class="weatherDiv" *ngIf="weatherdata">\n              <img class="wether-icon1" src="assets/icon/mobileme-logo-of-black-cloud.svg" alt="weather">\n              <img class="wether-icon" src="{{weatherIcon}}" alt="weather">\n              <span class="weatherdata">\n                <label *ngIf="temp" style="font-size: 9px; color: #000;"><span style="font-size: 9px; color: #000;">Now</span> {{temp}} C</label>\n              </span>              \n            </div>\n            \n            <!-- <ion-col>\n              <p> <b>Pin:</b> <span>{{orgDetails?.pin}}</span> </p>\n            </ion-col> -->\n          <!-- </ion-row> -->\n  \n          <!-- <ion-row>\n            <ion-col>\n              <p> <b>Affiliated by:</b> <span>{{orgDetails?.affileats[0]?.affi_name}}</span> </p>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col>\n              <p> <b>Web:</b> <a href="{{orgDetails?.website}}" target="_blank">{{orgDetails?.website}}</a> </p>\n            </ion-col>\n            <ion-col>\n              <p> <b>Phone:</b> <span>{{orgDetails?.phone_no}}</span> </p>\n            </ion-col>\n            <ion-col>\n              <p> <b>Email:</b> <span>{{orgDetails?.email}}</span> </p>\n            </ion-col>\n          </ion-row> -->\n        <!-- </ion-grid> -->\n\n\n        <!-- <div [innerHtml]="orgDetails?.org_text"></div> -->\n        <!-- <p><strong>About</strong> : </p>\n        <div [innerHtml]="orgDetails?.org_about" class="mt-4"></div> -->        \n        <!-- <p (click)=goToPrincipal()>PRINCIPAL</p>  -->\n        <div *ngIf="localUserData?.user_type_id == \'1\'">\n          <button ion-button block outline color="blue" class="mt-10" (click)=goToPrincipal()>PRINCIPAL</button>\n          <!-- <p (click)=goToComplainDesk()>COMPLAIN DESK</p> -->\n          <button ion-button block outline color="blue" class="mt-10" (click)=goToComplainDesk()>COMPLAIN DESK</button>\n          <!-- <p (click)=goToStuffDuty()>STUFF DUTY</p> -->\n          <button ion-button block outline color="blue" class="mt-10" (click)=goToStuffDuty()>STUFF DUTY</button>\n        </div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-md-3 class="icon-center" (click)=goToLibrary()>\n        <img src="assets/icon/library_logo.svg" class="iconSize"/>\n        <p text-uppercase>Library</p>\n      </ion-col>\n      <ion-col col-md-3 class="icon-center" (click)=goToComplain()>\n        <img src="assets/icon/complaints.svg" class="iconSize"/>\n        <p text-uppercase>Principal Desk</p>\n      </ion-col>\n      <!-- <ion-col col-md-3 class="icon-center" (click)=goToAllPdf()>\n        <img src="assets/icon/personalNotice.svg" class="iconSize"/>\n        <p>Notice Board</p>\n      </ion-col> -->\n      <!-- <ion-col col-md-3 class="icon-center" (click)=goToPersonalNotice()>\n        <img src="assets/imgs/icon6.png"/>\n        <p>Personal Notice</p>\n      </ion-col> -->\n      <!-- <ion-col col-md-3 class="icon-center" (click)=goToAttendance()>\n          <img src="assets/icon/attendance.svg" class="iconSize"/>\n          <p>Attendance</p>\n        </ion-col> -->\n      <ion-col col-md-3 class="icon-center" (click)=goToAccount()>\n        <img src="assets/icon/myAccount.svg" class="iconSize"/>\n        <p text-uppercase>Self Account</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <!-- <ion-col col-md-3 class="icon-center" (click)=goToAttendance()>\n        <img src="assets/imgs/icon3.png"/>\n        <p>Attendance</p>\n      </ion-col> -->\n      <!-- <ion-col col-md-3 class="icon-center" (click)=goToStuffDuty()>\n        <img src="assets/icon/staffRoutine.svg" class="iconSize"/>\n        <p>Stuff Duty</p>\n      </ion-col> -->\n      <ion-col col-md-3 class="icon-center" (click)=gotoLiveStream()>\n        <img src="assets/icon/live_stream_btn.svg" class="iconSize"/>\n        <p text-uppercase>Live Stream</p>\n      </ion-col>\n      <ion-col col-md-4 class="icon-center" (click)=goToEvents() style="border-top: 2px solid #fff;">\n        <img class="logo-action iconSize" src="assets/icon/calender_btn.svg"/>\n        <p text-uppercase>Events</p>\n      </ion-col>\n      <ion-col col-md-4 class="icon-center" (click)=goToChangeLang() style="border-top: 2px solid #fff;">\n        <img class="logo-action iconSize" src="assets/icon/changeLanguage.svg" />\n        <p text-uppercase>Change Language</p>\n      </ion-col>\n      \n      <!-- <ion-col col-md-4 class="icon-center" (click)=goToGuest()>\n          <img src="assets/icon/guest_logo.svg" class="iconSize"/>\n          <p>Guest</p>\n        </ion-col> -->\n    </ion-row>\n\n    <ion-row>\n      <!-- <ion-col col-md-4 class="icon-center" (click)=goToGuest()>\n        <img src="assets/imgs/guest.png"/>\n        <p>Guest</p>\n      </ion-col> -->\n\n      <!-- <ion-col col-md-4 class="icon-center" (click)=goToLogout()>\n        <img src="assets/icon/logout.svg" class="iconSize"/>\n        <p>Logout</p>\n      </ion-col> -->\n\n      <!-- <ion-col col-md-4 class="">\n        <img src=""/>\n        <p></p>\n      </ion-col>\n\n      <ion-col col-md-4 class="">\n        <img src=""/>\n        <p></p>\n      </ion-col>\n\n      <ion-col col-md-4 class="">\n        <img src=""/>\n        <p></p>\n      </ion-col> -->\n    </ion-row>\n    \n  </ion-grid>\n</ion-content>\n\n\n<!-- \n\n<ion-footer class="fixed">\n    <ion-toolbar color="primary">  \n    <ion-grid text-center >\n      <ion-row>\n        <div col-3 (click)=goToHome()>\n          <img src="assets/imgs/white-icon5.png">\n          <p class="footer-p">Home</p>\n        </div>\n        <div col-3 (click)=gotoLiveStream()>\n          <img src="assets/imgs/white-icon1.png">\n          <p class="footer-p">Streaming</p>\n        </div>\n        <div col-3 (click)=goToAttendance()>\n          <img src="assets/imgs/white-icon2.png">\n          <p  class="footer-p">Attendance</p>\n        </div>\n        <div col-3 (click)=goToRoutine()>\n          <img src="assets/imgs/white-icon3.png">\n          <p  class="footer-p">Routine</p>\n        </div>\n      </ion-row>\n    </ion-grid>\n    </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/staff-info/staff-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], StaffInfoPage);
    return StaffInfoPage;
}());

//# sourceMappingURL=staff-info.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(646);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StudentLibraryListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_owndetails_student_owndetails__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attendance_attendance__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routine_routine__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
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
        this.showNotFound = false;
        this.menuCtrl.enable(false);
        this.initLoader();
        for (var i = 0; i < 5; i++) {
            this.allBookList.push(this.allBookList.length);
        }
    }
    StudentLibraryListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentLibraryListPage');
        this.setSearchbarPlaceholder();
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
        // this.setSearchbarPlaceholder();
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
                                        console.log("book list : ", data.data);
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
            var tempArr, searchValue, index, matchFound, matchAuthor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showNotFound = false;
                        tempArr = [];
                        searchValue = e.target.value.toLowerCase();
                        if (!(searchValue != "")) return [3 /*break*/, 6];
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < this.allBookList.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.allBookList[index].book_name.toLowerCase().match(searchValue)];
                    case 2:
                        matchFound = _a.sent();
                        return [4 /*yield*/, this.allBookList[index].author.toLowerCase().match(searchValue)];
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
                        // this.showNotFound = false;
                        console.log('book list by search : ', this.allBookList);
                        return [3 /*break*/, 7];
                    case 6:
                        this.allBookList = this.allBook;
                        console.log('all book list : ', this.allBookList);
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
    StudentLibraryListPage.prototype.onFocusSearch = function () {
        // console.log('input is on focus...'); 
        var searchInput = document.querySelector('#booksearch');
        // console.log(searchInput);
        // console.log(searchInput.children[0].childNodes[2]);
        var input = searchInput.children[0].childNodes[2];
        // console.log(input.getAttribute('placeholder'));  
        input.setAttribute('placeholder', '');
    };
    StudentLibraryListPage.prototype.setSearchbarPlaceholder = function () {
        // console.log('input is on focus...'); 
        var searchInput = document.querySelector('#booksearch');
        // console.log(searchInput);
        // console.log(searchInput.children[0].childNodes[2]);
        var input = searchInput.children[0].childNodes[2];
        // console.log(input.getAttribute('placeholder'));  
        input.setAttribute('placeholder', 'Search book through Title/Writer');
    };
    StudentLibraryListPage.prototype.onUnFocusSearch = function () {
        // console.log('input is on focus...'); 
        var searchInput = document.querySelector('#booksearch');
        // console.log(searchInput);
        // console.log(searchInput.children[0].childNodes[2]);
        var input = searchInput.children[0].childNodes[2];
        // console.log(input.getAttribute('placeholder')); 
        var placevalue = input.getAttribute('placeholder');
        if (placevalue == '' || placevalue == null) {
            input.setAttribute('placeholder', 'Search book through Title/Writer');
        }
    };
    StudentLibraryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-library-list',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-library-list/student-library-list.html"*/'<!--\n  Generated template for the StudentLibraryListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="" >\n    <ion-title>List of Books</ion-title>\n      <!-- <ion-buttons end class="search-icon">\n        <i class="fas fa-search fa-lg"></i> </ion-buttons> -->\n  </ion-navbar>\n  <!-- <ion-toolbar>\n    <ion-searchbar (keyup)="onChangeSearch($event)"></ion-searchbar>\n  </ion-toolbar> -->\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list *ngIf="showNotFound">\n        <ion-item text-center>\n          <p>Not Found Any Book</p>\n        </ion-item>\n    </ion-list>\n\n    <!-- <ion-toolbar> -->\n      <ion-searchbar id="booksearch" class="library-book-search" (keyup)="onChangeSearch($event)" (focusin)="onFocusSearch()" (focusout)="onUnFocusSearch()" style="background-color: transparent; border-bottom: 1px solid #b59292; color: #fff;"></ion-searchbar>\n    <!-- </ion-toolbar> -->\n\n    <ion-list>\n      <ion-item *ngFor="let book of allBookList" (click)="presentProfileModal(book.id)" style="background-color: #1b1b1b; color: #f6f6f6; border-bottom: 1px solid #fff">\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/book.png">\n        </ion-thumbnail>\n        <h2 *ngIf="book.book_name" class="book-name"><strong>{{book.book_name}}</strong></h2>\n        <p style="color: #a0a0a0"><strong>Writer </strong>: {{book.author}}</p>\n        <!-- <small><strong>Number of Copies</strong>: {{book.no_copy}}</small> -->\n        <!-- <small>Subject Name : {{book.no_copy}}</small> -->\n      </ion-item>\n    </ion-list>\n\n    <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < totalPage">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll> -->\n<!-- *ngIf="page < totalPage" *ngIf="book.book_name"-->\n\n</ion-content>\n\n\n\n<!-- <ion-footer class="fixed">\n  <ion-toolbar color="primary">  \n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=goToHome()>\n        <img src="assets/imgs/white-icon5.png">\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-library-list/student-library-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-library-list/book-modal.html"*/'<!-- <ion-header>\n        <ion-toolbar>\n          <ion-title>\n            Book Details\n          </ion-title>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header> -->\n\n\n      <ion-header>\n            <ion-toolbar>\n              <ion-title>\n                  Book Details\n              </ion-title>\n              <ion-buttons start>\n                <button ion-button (click)="dismiss()" style="\n                width: 61%; font-size: 2.2rem;">\n                  <span ion-text color="primary" showWhen="ios">Cancel</span>\n                  <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-toolbar>\n    </ion-header>\n\n\n<ion-content>        \n    <ion-card style="background-color: #353434">       \n        \n        <h4 text-center style="font-size: 18px; color: #fff; margin-top: 10px;"><strong>{{book?.book_name}}</strong></h4>\n        <!-- #ececec -->\n        <ion-card-content>\n          <p style="color: #ececec"><strong>Writer</strong> : {{book?.author}}</p>\n          <p style="color: #ececec"><strong>Edition</strong> : {{book?.edition}}</p>\n          <!-- <p><strong>ISBN</strong> : {{book?.isbn_code}}</p> -->\n          <p style="color: #ececec"><strong>Publisher</strong> : {{book?.publisher_name}}</p>\n          <!-- <p><strong>No of Copy</strong> : {{book?.no_copy}}</p> -->\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/student-library-list/book-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=student-library-list.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalNoticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendance_attendance__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routine_routine__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_owndetails_student_owndetails__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_document_viewer__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__student_notice_board_student_notice_board__ = __webpack_require__(33);
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
            selector: 'page-personal-notice',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/personal-notice/personal-notice.html"*/'<!--\n  Generated template for the PersonalNoticePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n  	<button ion-button menuToggle color="light">\n     <ion-icon name="menu"></ion-icon>\n   </button>\n    <ion-title>Personal Notice</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n<ion-content>\n  <ion-card color="light" *ngFor="let personalNotice of allPersonalNotice" (click)="presentProfileModal(personalNotice.id)">\n    <ion-card-header>\n      <strong>{{personalNotice?.notice?.subject}}</strong>\n    </ion-card-header>\n    \n    <ion-card-content>\n      <p>{{personalNotice?.notice?.text}}</p>\n      <ion-note text-right float-right>{{personalNotice?.timeDifference}}</ion-note>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card text-center *ngIf="showNothingMsg">\n    <p>Nothing To Show</p>\n  </ion-card>\n</ion-content>\n\n\n\n\n\n<!-- <ion-footer class="fixed">\n  <ion-toolbar color="primary">\n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=goToHome()>\n        <img src="assets/imgs/white-icon5.png">\n        <p class="footer-p">Home</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <img src="assets/imgs/white-icon1.png">\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToAttendance()>\n        <img src="assets/imgs/white-icon2.png">\n        <p  class="footer-p">Attendance</p>\n      </div>\n      <div col-3 (click)=goToRoutine()>\n        <img src="assets/imgs/white-icon3.png">\n        <p  class="footer-p">Routine</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/personal-notice/personal-notice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]])
    ], PersonalNoticePage);
    return PersonalNoticePage;
}());

//# sourceMappingURL=personal-notice.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_css_animator__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_guest_enquiry_guest_enquiry__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_school_listing_school_listing__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_school_details_school_details__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_expandable_header_expandable_header__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pdf_download_pdf_download__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_student_login_student_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_library_list_library_list__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_student_owndetails_student_owndetails__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_personal_notice_personal_notice__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_attendance_attendance__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_routine_routine__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_parents_login_parents_login__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_parents_student_view_parents_student_view__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_parents_child_tabs_parents_child_tabs__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_student_library_list_student_library_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_student_notice_board_student_notice_board__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_account_account__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_changepassword_changepassword__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_parents_account_parents_account__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_staff_login_staff_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_staff_info_staff_info__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_staff_complain_staff_complain__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_get_attendance_get_attendance__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_attendance_list_attendance_list__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_principal_examview_principal_examview__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_principal_complaindesk_principal_complaindesk__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_complain_reply_complain_reply__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_stuff_examduty_stuff_examduty__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_schoolcalender_schoolcalender__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_students_tabs_students_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_stuff_change_pass_stuff_change_pass__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_notification_list_notification_list__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_status_bar__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_splash_screen__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_chat_serv_chat_serv__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_test_test__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_std_reg_std_reg__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_stuff_edit_stuff_edit__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_platform_browser_dynamic__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_file_transfer__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_file__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_camera__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_file_path__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_file_opener__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_transfer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_stuff_registration_stuff_registration__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_welcome_guest_welcome_guest__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_search_organisation_search_organisation__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_firebase__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_fire__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_fire_firestore__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_fcm_fcm__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_staff_tabs_staff_tabs__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { File } from '@ionic-native/file';
// import { FileTransfer } from '@ionic-native/file-transfer';

// import { NativePageTransitions } from '@ionic-native/native-page-transitions';

































// import { StaffInfoPage } from '../pages/staff-info/staff-info';


// import { AccountPage, ModalPage } from '../pages/account/account';
// import { StudentNoticeBoardPage, NoticeModalPage } from './student-notice-board';


// import { RippleDirective } from 'ng2-ripple-directive';
// import { StreamingMedia } from '@ionic-native/streaming-media';






// import { PdfViewerModule } from 'ng2-pdf-viewer';











// import { AngularFireModule } from 'angularfire2';

// import { AngularFirestoreModule } from 'angularfire2/firestore';



var firebase = {
    // your firebase web config
    apiKey: "AIzaSyDPcwzadP1MQHKAVdrSZ45cXhq_vallj94",
    authDomain: "inunco-app.firebaseapp.com",
    databaseURL: "https://inunco-app.firebaseio.com",
    projectId: "inunco-app",
    storageBucket: "inunco-app.appspot.com",
    messagingSenderId: "1079256060941"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_school_listing_school_listing__["a" /* SchoolListingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_school_details_school_details__["a" /* SchoolDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_expandable_header_expandable_header__["a" /* ExpandableHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pdf_download_pdf_download__["a" /* PdfDownloadPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_student_login_student_login__["a" /* StudentLoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_library_list_library_list__["a" /* LibraryListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_personal_notice_personal_notice__["a" /* PersonalNoticePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_live_stream_live_stream__["a" /* LiveStreamPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_routine_routine__["a" /* RoutinePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_parents_login_parents_login__["a" /* ParentsLoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_parents_student_view_parents_student_view__["a" /* ParentsStudentViewPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_parents_child_tabs_parents_child_tabs__["a" /* ParentsChildTabsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_student_library_list_student_library_list__["b" /* StudentLibraryListPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_student_notice_board_student_notice_board__["b" /* StudentNoticeBoardPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_account_account__["d" /* default */],
                __WEBPACK_IMPORTED_MODULE_27__pages_account_account__["c" /* SecuritypinPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_parents_account_parents_account__["b" /* QuesmodalPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_account_account__["b" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_staff_tabs_staff_tabs__["a" /* StaffTabsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_parents_account_parents_account__["a" /* ParentsAccountPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_staff_login_staff_login__["a" /* StaffLoginPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_staff_info_staff_info__["a" /* StaffInfoPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_staff_complain_staff_complain__["a" /* StaffComplainPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_get_attendance_get_attendance__["a" /* GetAttendancePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_attendance_list_attendance_list__["a" /* AttendanceListPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_principal_examview_principal_examview__["a" /* PrincipalExamviewPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_principal_complaindesk_principal_complaindesk__["a" /* PrincipalComplaindeskPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_complain_reply_complain_reply__["a" /* ComplainReplyPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_stuff_examduty_stuff_examduty__["a" /* StuffExamdutyPage */],
                // RippleDirective,
                __WEBPACK_IMPORTED_MODULE_3_css_animator__["AnimatesDirective"],
                __WEBPACK_IMPORTED_MODULE_39__pages_schoolcalender_schoolcalender__["a" /* SchoolcalenderPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_students_tabs_students_tabs__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_46__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_std_reg_std_reg__["a" /* StdRegPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_student_library_list_student_library_list__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_student_notice_board_student_notice_board__["a" /* NoticeModalPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_stuff_change_pass_stuff_change_pass__["a" /* StuffChangePassPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_stuff_edit_stuff_edit__["a" /* StuffEditPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_stuff_registration_stuff_registration__["a" /* StuffRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_welcome_guest_welcome_guest__["a" /* WelcomeGuestPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_search_organisation_search_organisation__["a" /* SearchOrganisationPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_notification_list_notification_list__["a" /* NotificationListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
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
                        { loadChildren: '../pages/notification-list/notification-list.module#NotificationListPageModule', name: 'NotificationListPage', segment: 'notification-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parents-account/parents-account.module#ParentsAccountPageModule', name: 'ParentsAccountPage', segment: 'parents-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parents-child-tabs/parents-child-tabs.module#ParentsChildTabsPageModule', name: 'ParentsChildTabsPage', segment: 'parents-child-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parents-login/parents-login.module#ParentsLoginPageModule', name: 'ParentsLoginPage', segment: 'parents-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parents-student-view/parents-student-view.module#ParentsStudentViewPageModule', name: 'ParentsStudentViewPage', segment: 'parents-student-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pdf-download/pdf-download.module#PdfDownloadPageModule', name: 'PdfDownloadPage', segment: 'pdf-download', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-notice/personal-notice.module#PersonalNoticePageModule', name: 'PersonalNoticePage', segment: 'personal-notice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal-examview/principal-examview.module#PrincipalExamviewPageModule', name: 'PrincipalExamviewPage', segment: 'principal-examview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/routine/routine.module#RoutinePageModule', name: 'RoutinePage', segment: 'routine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school-details/school-details.module#SchoolDetailsPageModule', name: 'SchoolDetailsPage', segment: 'school-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school-listing/school-listing.module#SchoolListingPageModule', name: 'SchoolListingPage', segment: 'school-listing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schoolcalender/schoolcalender.module#SchoolcalenderPageModule', name: 'SchoolcalenderPage', segment: 'schoolcalender', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/staff-info/staff-info.module#StaffInfoPageModule', name: 'StaffInfoPage', segment: 'staff-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/staff-login/staff-login.module#StaffLoginPageModule', name: 'StaffLoginPage', segment: 'staff-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/staff-tabs/staff-tabs.module#StaffTabsPageModule', name: 'StaffTabsPage', segment: 'staff-tabs', priority: 'low', defaultHistory: [] },
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
                        { loadChildren: '../pages/welcome-guest/welcome-guest.module#WelcomeGuestPageModule', name: 'WelcomeGuestPage', segment: 'welcome-guest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal-complaindesk/principal-complaindesk.module#PrincipalComplaindeskPageModule', name: 'PrincipalComplaindeskPage', segment: 'principal-complaindesk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/staff-complain/staff-complain.module#StaffComplainPageModule', name: 'StaffComplainPage', segment: 'staff-complain', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-organisation/search-organisation.module#SearchOrganisationPageModule', name: 'SearchOrganisationPage', segment: 'search-organisation', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__["a" /* NgCalendarModule */],
                // PdfViewerModule,
                __WEBPACK_IMPORTED_MODULE_60__angular_fire__["a" /* AngularFireModule */].initializeApp(firebase, "inunco-app"),
                __WEBPACK_IMPORTED_MODULE_61__angular_fire_firestore__["b" /* AngularFirestoreModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_school_listing_school_listing__["a" /* SchoolListingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_school_details_school_details__["a" /* SchoolDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pdf_download_pdf_download__["a" /* PdfDownloadPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_student_login_student_login__["a" /* StudentLoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_library_list_library_list__["a" /* LibraryListPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_parents_account_parents_account__["b" /* QuesmodalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_student_owndetails_student_owndetails__["a" /* StudentOwndetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_personal_notice_personal_notice__["a" /* PersonalNoticePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_live_stream_live_stream__["a" /* LiveStreamPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_routine_routine__["a" /* RoutinePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_parents_login_parents_login__["a" /* ParentsLoginPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_staff_tabs_staff_tabs__["a" /* StaffTabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_parents_student_view_parents_student_view__["a" /* ParentsStudentViewPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_parents_child_tabs_parents_child_tabs__["a" /* ParentsChildTabsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_student_library_list_student_library_list__["b" /* StudentLibraryListPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_student_notice_board_student_notice_board__["b" /* StudentNoticeBoardPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_account_account__["d" /* default */],
                __WEBPACK_IMPORTED_MODULE_27__pages_account_account__["c" /* SecuritypinPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_account_account__["b" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_parents_account_parents_account__["a" /* ParentsAccountPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_staff_login_staff_login__["a" /* StaffLoginPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_staff_info_staff_info__["a" /* StaffInfoPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_staff_complain_staff_complain__["a" /* StaffComplainPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_get_attendance_get_attendance__["a" /* GetAttendancePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_attendance_list_attendance_list__["a" /* AttendanceListPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_principal_examview_principal_examview__["a" /* PrincipalExamviewPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_principal_complaindesk_principal_complaindesk__["a" /* PrincipalComplaindeskPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_complain_reply_complain_reply__["a" /* ComplainReplyPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_stuff_examduty_stuff_examduty__["a" /* StuffExamdutyPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_schoolcalender_schoolcalender__["a" /* SchoolcalenderPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_students_tabs_students_tabs__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_46__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_std_reg_std_reg__["a" /* StdRegPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_student_library_list_student_library_list__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_student_notice_board_student_notice_board__["a" /* NoticeModalPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_stuff_change_pass_stuff_change_pass__["a" /* StuffChangePassPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_stuff_edit_stuff_edit__["a" /* StuffEditPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_stuff_registration_stuff_registration__["a" /* StuffRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_welcome_guest_welcome_guest__["a" /* WelcomeGuestPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_search_organisation_search_organisation__["a" /* SearchOrganisationPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_notification_list_notification_list__["a" /* NotificationListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_3_css_animator__["AnimationService"],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_45__providers_chat_serv_chat_serv__["a" /* ChatServProvider */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_59__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_62__providers_fcm_fcm__["a" /* FcmProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_49__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestEnquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__school_listing_school_listing__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__school_details_school_details__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__student_owndetails_student_owndetails__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__staff_info_staff_info__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_organisation_search_organisation__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var GuestEnquiryPage = /** @class */ (function () {
    function GuestEnquiryPage(platform, navCtrl, navParams, http, toastCtrl, loadingController, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.isSearchbarOpened = false;
        this.searchQuery = "";
        this.items = [];
        this.list = [];
        this.idList = [];
        this.country = '';
        this.state = 'aaa';
        this.jela = '';
        this.dist = 'aaa';
        this.type = '';
        this.getUserDataFromLocal();
        // this.getData();
        console.log(this.navCtrl.getViews());
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.getViews().length > 1) {
                _this.navCtrl.pop();
            }
        });
        this.initLoader();
    }
    // loc/states   {country_id: 101}
    // loc/dists    {state_id: }
    // getData() {
    //   this.http
    //     .get(`${apiUrl.url}org/alllist`)
    //     .map(res => res.json())
    //     .subscribe(data => {
    //       this.allSchoolsList = data;
    //       console.log("student list : ", this.allSchoolsList);
    //       data.data.forEach(ele => {
    //         const obj = {
    //           id: ele.id,
    //           name: ele.org_name
    //         };
    //         this.list.push(obj);
    //       });
    //     });
    // }
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
    GuestEnquiryPage.prototype.goToSearchOrg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_organisation_search_organisation__["a" /* SearchOrganisationPage */]);
    };
    GuestEnquiryPage.prototype.goToListing = function () {
        if (this.country != '' && this.type == '') {
            this.showAlert("Sorry, Type should not be blank.");
            return;
        }
        if (this.country == '' || this.type == '') {
            this.showAlert("Sorry, Country and Type should not be blank.");
        }
        else {
            var data = {
                country_id: this.country,
                state_id: this.state,
                dist_id: this.dist,
                type_id: this.type,
            };
            console.log('data : ...', data);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__school_listing_school_listing__["a" /* SchoolListingPage */], { data: JSON.stringify(data) });
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
    GuestEnquiryPage.prototype.onChangeCountry = function () {
        var _this = this;
        // this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            country_id: this.country,
        };
        // loc/states   {country_id: 101}
        this.http.post(__WEBPACK_IMPORTED_MODULE_6__apiUrl__["a" /* apiUrl */].url + "loc/states", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('state data : ', data.data);
            if (data.data.length > 0) {
                // this.presentLoading(false);
                // this.loading.dismiss();
                _this.states = data.data;
                // this.showAlert('Password Changed Successfully.');
                // this.navCtrl.push(AccountPage);
            }
            else {
                // this.presentLoading(false);
                // this.showAlert(data.mssg);
                // this.loading.dismiss();
            }
        });
    };
    GuestEnquiryPage.prototype.onChangeState = function () {
        var _this = this;
        // this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var data = {
            state_id: this.state,
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_6__apiUrl__["a" /* apiUrl */].url + "loc/dists", data, options).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('dist data : ', data.data);
            if (data.data.length > 0) {
                // this.presentLoading(false);
                // this.loading.dismiss();
                _this.dists = data.data;
                // this.showAlert('Password Changed Successfully.');
                // this.navCtrl.push(AccountPage);
            }
            else {
                // this.presentLoading(false);
                // this.loading.dismiss();
                // this.showAlert(data.mssg);
            }
        });
    };
    GuestEnquiryPage.prototype.onChangeDist = function () {
        // this.presentLoading(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpParams */]()
            .set('country_id', this.country)
            .set('state_id', this.state)
            .set('dist_id', this.dist)
            .set('type_id', '2');
        // let data = {
        //     params : {
        //     country_id: this.country,
        //     state_id: this.state,
        //     dist_id: this.dist,
        //     type_id: this.type,
        //   }
        // }
        // let formData = new FormData();
        // formData.append('country_id', this.country);
        // formData.append('state_id', this.state);
        // formData.append('dist_id', this.dist);
        // formData.append('type_id', '2');
        // let urlData = formData.toString();
        console.log(params);
        this.http.get(__WEBPACK_IMPORTED_MODULE_6__apiUrl__["a" /* apiUrl */].url + "org/search/" + this.country + "/" + this.state + "/" + this.dist + "/" + this.type).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('dist data : ', data.data);
            // this.presentLoading(false);      
        });
    };
    GuestEnquiryPage.prototype.presentLoading = function (load) {
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
    GuestEnquiryPage.prototype.initLoader = function () {
        this.loading = this.loadingController.create({
            spinner: 'hide',
            dismissOnPageChange: true,
            content: '<img class="loader-class" src="assets/icon/tail-spin.svg"> <p>Loading please wait...</p>',
        });
    };
    GuestEnquiryPage.prototype.isBtnDisabled = function () {
        if (this.country == '' || this.country == null || this.type == '' || this.type == null) {
            return true;
        }
    };
    GuestEnquiryPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", Object)
    ], GuestEnquiryPage.prototype, "searchbox", void 0);
    GuestEnquiryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-guest-enquiry",template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/guest-enquiry/guest-enquiry.html"*/'<!--\n  Generated template for the GuestEnquiryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		<ion-navbar color="blue">\n			<ion-title>Submit Enquiry</ion-title>\n			\n			<ion-buttons end (click)=goToHome()>\n				<button ion-button icon-only>\n					<ion-icon name="home" color="light"></ion-icon>\n				</button>\n			</ion-buttons>\n			<!-- <ion-searchbar #search (ionInput)="getItems($event)" *ngIf="isSearchbarOpened" showCancelButton="true" (ionCancel)="isSearchbarOpened=false"></ion-searchbar> -->\n		</ion-navbar>\n		<!-- <div class="search-result" [ngStyle]="{\'display\':isSearchbarOpened ? \'block\' : \'none\' }">\n			<ion-list>\n			<ion-item *ngFor="let item of items" (click)="schoolsDetails(item.id)">\n				{{ item.name }}\n			</ion-item>\n		</ion-list>\n		</div> -->\n</ion-header>\n\n\n<ion-content class="item-center" padding color="light">\n	<!-- <img src="assets/imgs/inunco-dark.png" class="img-width"/> -->\n	<!-- <h1 class="heading" text-center text-uppercase>CyberHub</h1> -->\n	<!-- <img src="assets/imgs/bk.png" class="img-width" /> -->\n	<div class="enquiry-form">\n			<!-- <h1 text-center text-uppercase margin-bottom color="blue">Search Organization</h1>\n\n				<ion-input #search placeholder="Search" (keyup)="getItems($event)" (click)="onSearchButtonClick()"></ion-input>\n				\n					<ion-list class="search-result" [ngStyle]="{\'display\':isSearchbarOpened ? \'block\' : \'none\' }">\n						<ion-item *ngFor="let item of items" (click)="schoolsDetails(item.id)">\n								{{ item.name }}\n						</ion-item>\n					</ion-list> -->\n				\n\n		<p text-center text-uppercase margin-bottom class="top-heading" style="margin-top: 30px; text-align: center;">Find Your Organisation</p>\n		 \n	 <!-- <form> -->\n	 	<ion-item class="select-css">\n		  <ion-label>Country</ion-label>\n		  <ion-select [(ngModel)]="country" name="country" (ionChange)="onChangeCountry()">\n		    <ion-option value="101">India</ion-option>		    \n		  </ion-select>\n		</ion-item>\n\n	 	<ion-item class="select-css">\n	 		<ion-label>State</ion-label>\n		  <ion-select [(ngModel)]="state" name="state" (ionChange)="onChangeState()">\n		    <ion-option *ngFor="let state of states" value="{{state.id}}">{{state?.name}}</ion-option>		    \n		  </ion-select>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>District</ion-label>\n			<ion-select [(ngModel)]="dist" name="dist">\n		    <ion-option *ngFor="let dist of dists" value="{{dist.id}}">{{dist?.name}}</ion-option>		    \n		  </ion-select>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>Type</ion-label>\n			<ion-select [(ngModel)]="type" name="type">\n		    <ion-option value = "1" >School</ion-option>		    \n		    <ion-option value = "2" >College</ion-option>		    \n		    <ion-option value = "3" >University</ion-option>		    \n		  </ion-select>\n		</ion-item>\n\n		<!-- <ion-item>\n			<ion-label>City</ion-label>\n			<ion-select [(ngModel)]="city" name="city">\n		    <ion-option value="">West Bangal</ion-option>		    \n		  </ion-select>\n		</ion-item> -->\n\n		<div text-center style="border-bottom: none; margin-top: 40px;">\n		  <button ion-button margin-top type="submit" class="btn-size mt-10" color="blue" (click)="goToListing()">NEXT</button>\n		</div>\n		 <!-- <button ion-button type="submit" block outline color="blue" (click)=goToHome()>Back To Home</button> -->\n\n		 <div text-capitalize text-center>\n			 <p (click)="goToSearchOrg()" style="font-size: 16px; cursor: pointer; font-weight: bold; margin-top: 40px;">Not Sure?<br> Search your organisation name instead</p>\n		 </div>\n	<!-- </form> -->\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/guest-enquiry/guest-enquiry.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], GuestEnquiryPage);
    return GuestEnquiryPage;
}());

//# sourceMappingURL=guest-enquiry.js.map

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 340,
	"./af.js": 340,
	"./ar": 341,
	"./ar-dz": 342,
	"./ar-dz.js": 342,
	"./ar-kw": 343,
	"./ar-kw.js": 343,
	"./ar-ly": 344,
	"./ar-ly.js": 344,
	"./ar-ma": 345,
	"./ar-ma.js": 345,
	"./ar-sa": 346,
	"./ar-sa.js": 346,
	"./ar-tn": 347,
	"./ar-tn.js": 347,
	"./ar.js": 341,
	"./az": 348,
	"./az.js": 348,
	"./be": 349,
	"./be.js": 349,
	"./bg": 350,
	"./bg.js": 350,
	"./bm": 351,
	"./bm.js": 351,
	"./bn": 352,
	"./bn.js": 352,
	"./bo": 353,
	"./bo.js": 353,
	"./br": 354,
	"./br.js": 354,
	"./bs": 355,
	"./bs.js": 355,
	"./ca": 356,
	"./ca.js": 356,
	"./cs": 357,
	"./cs.js": 357,
	"./cv": 358,
	"./cv.js": 358,
	"./cy": 359,
	"./cy.js": 359,
	"./da": 360,
	"./da.js": 360,
	"./de": 361,
	"./de-at": 362,
	"./de-at.js": 362,
	"./de-ch": 363,
	"./de-ch.js": 363,
	"./de.js": 361,
	"./dv": 364,
	"./dv.js": 364,
	"./el": 365,
	"./el.js": 365,
	"./en-SG": 366,
	"./en-SG.js": 366,
	"./en-au": 367,
	"./en-au.js": 367,
	"./en-ca": 368,
	"./en-ca.js": 368,
	"./en-gb": 369,
	"./en-gb.js": 369,
	"./en-ie": 370,
	"./en-ie.js": 370,
	"./en-il": 371,
	"./en-il.js": 371,
	"./en-nz": 372,
	"./en-nz.js": 372,
	"./eo": 373,
	"./eo.js": 373,
	"./es": 374,
	"./es-do": 375,
	"./es-do.js": 375,
	"./es-us": 376,
	"./es-us.js": 376,
	"./es.js": 374,
	"./et": 377,
	"./et.js": 377,
	"./eu": 378,
	"./eu.js": 378,
	"./fa": 379,
	"./fa.js": 379,
	"./fi": 380,
	"./fi.js": 380,
	"./fo": 381,
	"./fo.js": 381,
	"./fr": 382,
	"./fr-ca": 383,
	"./fr-ca.js": 383,
	"./fr-ch": 384,
	"./fr-ch.js": 384,
	"./fr.js": 382,
	"./fy": 385,
	"./fy.js": 385,
	"./ga": 386,
	"./ga.js": 386,
	"./gd": 387,
	"./gd.js": 387,
	"./gl": 388,
	"./gl.js": 388,
	"./gom-latn": 389,
	"./gom-latn.js": 389,
	"./gu": 390,
	"./gu.js": 390,
	"./he": 391,
	"./he.js": 391,
	"./hi": 392,
	"./hi.js": 392,
	"./hr": 393,
	"./hr.js": 393,
	"./hu": 394,
	"./hu.js": 394,
	"./hy-am": 395,
	"./hy-am.js": 395,
	"./id": 396,
	"./id.js": 396,
	"./is": 397,
	"./is.js": 397,
	"./it": 398,
	"./it-ch": 399,
	"./it-ch.js": 399,
	"./it.js": 398,
	"./ja": 400,
	"./ja.js": 400,
	"./jv": 401,
	"./jv.js": 401,
	"./ka": 402,
	"./ka.js": 402,
	"./kk": 403,
	"./kk.js": 403,
	"./km": 404,
	"./km.js": 404,
	"./kn": 405,
	"./kn.js": 405,
	"./ko": 406,
	"./ko.js": 406,
	"./ku": 407,
	"./ku.js": 407,
	"./ky": 408,
	"./ky.js": 408,
	"./lb": 409,
	"./lb.js": 409,
	"./lo": 410,
	"./lo.js": 410,
	"./lt": 411,
	"./lt.js": 411,
	"./lv": 412,
	"./lv.js": 412,
	"./me": 413,
	"./me.js": 413,
	"./mi": 414,
	"./mi.js": 414,
	"./mk": 415,
	"./mk.js": 415,
	"./ml": 416,
	"./ml.js": 416,
	"./mn": 417,
	"./mn.js": 417,
	"./mr": 418,
	"./mr.js": 418,
	"./ms": 419,
	"./ms-my": 420,
	"./ms-my.js": 420,
	"./ms.js": 419,
	"./mt": 421,
	"./mt.js": 421,
	"./my": 422,
	"./my.js": 422,
	"./nb": 423,
	"./nb.js": 423,
	"./ne": 424,
	"./ne.js": 424,
	"./nl": 425,
	"./nl-be": 426,
	"./nl-be.js": 426,
	"./nl.js": 425,
	"./nn": 427,
	"./nn.js": 427,
	"./pa-in": 428,
	"./pa-in.js": 428,
	"./pl": 429,
	"./pl.js": 429,
	"./pt": 430,
	"./pt-br": 431,
	"./pt-br.js": 431,
	"./pt.js": 430,
	"./ro": 432,
	"./ro.js": 432,
	"./ru": 433,
	"./ru.js": 433,
	"./sd": 434,
	"./sd.js": 434,
	"./se": 435,
	"./se.js": 435,
	"./si": 436,
	"./si.js": 436,
	"./sk": 437,
	"./sk.js": 437,
	"./sl": 438,
	"./sl.js": 438,
	"./sq": 439,
	"./sq.js": 439,
	"./sr": 440,
	"./sr-cyrl": 441,
	"./sr-cyrl.js": 441,
	"./sr.js": 440,
	"./ss": 442,
	"./ss.js": 442,
	"./sv": 443,
	"./sv.js": 443,
	"./sw": 444,
	"./sw.js": 444,
	"./ta": 445,
	"./ta.js": 445,
	"./te": 446,
	"./te.js": 446,
	"./tet": 447,
	"./tet.js": 447,
	"./tg": 448,
	"./tg.js": 448,
	"./th": 449,
	"./th.js": 449,
	"./tl-ph": 450,
	"./tl-ph.js": 450,
	"./tlh": 451,
	"./tlh.js": 451,
	"./tr": 452,
	"./tr.js": 452,
	"./tzl": 453,
	"./tzl.js": 453,
	"./tzm": 454,
	"./tzm-latn": 455,
	"./tzm-latn.js": 455,
	"./tzm.js": 454,
	"./ug-cn": 456,
	"./ug-cn.js": 456,
	"./uk": 457,
	"./uk.js": 457,
	"./ur": 458,
	"./ur.js": 458,
	"./uz": 459,
	"./uz-latn": 460,
	"./uz-latn.js": 460,
	"./uz.js": 459,
	"./vi": 461,
	"./vi.js": 461,
	"./x-pseudo": 462,
	"./x-pseudo.js": 462,
	"./yo": 463,
	"./yo.js": 463,
	"./zh-cn": 464,
	"./zh-cn.js": 464,
	"./zh-hk": 465,
	"./zh-hk.js": 465,
	"./zh-tw": 466,
	"./zh-tw.js": 466
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
webpackContext.id = 699;

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_attendance_attendance__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_routine_routine__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_personal_notice_personal_notice__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_guest_enquiry_guest_enquiry__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_students_tabs_students_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_staff_tabs_staff_tabs__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_fcm_fcm__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_operators__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_firebase__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_firestore__ = __webpack_require__(194);
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










// import { Subject } from 'rxjs/Subject';



var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, app, fcm, toastCtrl, firebase, afs) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.fcm = fcm;
        this.toastCtrl = toastCtrl;
        this.firebase = firebase;
        this.afs = afs;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Guest', component: __WEBPACK_IMPORTED_MODULE_9__pages_guest_enquiry_guest_enquiry__["a" /* GuestEnquiryPage */] },
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
            //   this.afs.collection('devices', ref => ref.where('userId', '==','testUser1')).snapshotChanges().subscribe(data => {
            //    data.map(x => console.log(x.payload.doc.data()))
            //  })
            // abcs.subscribe(data => console.log(data))
            // abcs.valueChanges().subscribe(data => console.log(data))
            //  yolo kya baat
            // Listen to incoming messages
            _this.fcm.listenToNotifications().pipe(Object(__WEBPACK_IMPORTED_MODULE_13_rxjs_operators__["tap"])(function (msg) {
                // show a toast
                var toast = _this.toastCtrl.create({
                    message: msg.body,
                    duration: 3000
                });
                toast.present();
            }))
                .subscribe(function (data) {
                console.log('listen to notification : ', data);
            });
            if (localVal) {
                if (localVal.user_type_id == 4) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_students_tabs_students_tabs__["a" /* default */];
                }
                if (localVal.user_type_id == 2) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_staff_tabs_staff_tabs__["a" /* StaffTabsPage */];
                }
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header no-padding no-margin>\n    <ion-toolbar no-padding no-margin class="toolbar-nopadding">\n      <ion-title no-padding no-margin >\n        <img src="assets/imgs/student-icon.png"/>\n        <p color="light" style="color:#fff;">User Name</p>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="content-margin">\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" color="light">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n  \n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" ></ion-nav>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_12__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_15__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 796:
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

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(481);
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

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_download_pdf_download__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_list_library_list__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_stream_live_stream__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__schoolcalender_schoolcalender__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apiUrl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__student_notice_board_student_notice_board__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__student_owndetails_student_owndetails__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__staff_info_staff_info__ = __webpack_require__(36);
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
    function SchoolDetailsPage(navCtrl, navParams, http, loadingController, menuCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.getUserDataFromLocal();
        this.schoolId = navParams.get('id');
        this.getDetails(this.schoolId);
        this.initLoader();
        this.menuCtrl.enable(false);
        this.pet = "about";
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.getViews().length > 1) {
                _this.navCtrl.pop();
            }
        });
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
            selector: 'page-school-details',template:/*ion-inline-start:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/school-details/school-details.html"*/'<!--\n  Generated template for the SchoolDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n     <!--  <expandable-header [scrollArea]="mycontent" headerHeight="125">\n        <img src="assets/imgs/SCHOOLS-Banner-Images.jpg"/>\n      </expandable-header> -->\n      <ion-title>College Details</ion-title>\n      <ion-buttons end (click)=goToHome()>\n          <button ion-button icon-only>\n            <ion-icon name="home" color="light"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content fullscreen="" #mycontent="">\n\n<!-- <ion-card>\n  <img src="assets/imgs/SCHOOLS-Banner-Images.jpg"/>\n  <ion-card-content>\n    <ion-card-title>\n\n      {{ schoolDetails && schoolDetails[0]?.school_name }}\n      </ion-card-title>\n      <p><strong>Address</strong>: {{schoolDetails.org_address}}</p>\n      <p><strong>Email</strong>: {{schoolDetails.org_address}}</p>\n      <p><strong>Mobile</strong>: {{schoolDetails.org_address}}</p>\n\n      <p>The most popular industrial group ever, and largely responsible for bringing the music to a mass audience. The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n      </p>\n  </ion-card-content>\n</ion-card> -->\n\n\n  <!-- <ion-card>\n    <img [src]="schoolDetails?.org_img"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{schoolDetails?.org_name}}\n      </ion-card-title>\n        <div float-right >\n          <p [ngStyle]="{\'font-size\': \'24px\'}">\n            <ion-icon name="cloud"></ion-icon>\n          17 °C</p>\n        </div>\n        <div [innerHtml]="schoolDetails?.org_text"></div>\n        <p><strong>About</strong> : </p>\n        <div [innerHtml]="schoolDetails?.org_about" class="mt-4"></div>\n    </ion-card-content>\n    \n  </ion-card> -->\n\n\n  <ion-card>\n    \n    <ion-card-content>\n        <ion-card-title>\n          <img [src]="schoolDetails?.org_logo"/>\n          <p>{{schoolDetails?.org_name}}</p>\n        </ion-card-title>\n\n        <div class="info" style="padding: 10px;">        \n        <p><strong>Land Mark</strong>: {{schoolDetails?.landmark}}</p>\n        <p><strong>City</strong>: {{schoolDetails?.org_city}}</p>\n        <!-- <div float-right >\n            <p [ngStyle]="{\'font-size\': \'24px\'}">\n              <ion-icon name="cloud"></ion-icon><br>\n            17 °C</p>\n          </div> -->\n        <p><strong>District</strong>: {{schoolDetails?.district?.name}}</p>\n        <p><strong>Country</strong>: {{schoolDetails?.country?.name}}</p>\n        \n        \n        <p ><strong>Email</strong>: {{schoolDetails?.email}}</p>\n        <p><strong>College Phone</strong>: {{schoolDetails?.phone_no}}</p>\n        <p><strong>Website</strong>: {{schoolDetails?.website}}</p>\n      </div>\n\n\n        <div [innerHtml]="schoolDetails?.org_text"></div>\n        <!-- <p><strong>About</strong> : </p>\n        <div [innerHtml]="schoolDetails?.org_about" class="mt-4"></div> -->\n        <ion-toolbar no-border-top *ngIf="schoolDetails?.is_registered == \'1\'">\n          <ion-segment [(ngModel)]="pet">\n            <ion-segment-button value="about">\n              About\n            </ion-segment-button>\n            <ion-segment-button value="affiliations">\n              Affiliations\n            </ion-segment-button>\n            <ion-segment-button value="facitity">\n              Facility\n            </ion-segment-button>\n          </ion-segment>\n        </ion-toolbar>\n      </ion-card-content>  \n  </ion-card>\n\n\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col col-md-4 class="icon-center" (click)=gotoLiveStream()>\n        <img src="assets/imgs/icon6.png"/>\n        <p>Live Streaming</p>\n      </ion-col>\n      <ion-col col-md-4 class="icon-center" (click)=goToAllPdf()>\n        <img src="assets/imgs/icon2.png"/>\n        <p>Notice Board</p>\n      </ion-col>\n      <ion-col col-md-4 class="icon-center" (click)=goToLibrary()>\n        <img src="assets/imgs/icon.png"/>\n        <p>Library</p>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>      \n      <ion-col col-md-4 class="icon-center">\n        <img src=""/>\n        <p></p>\n      </ion-col>\n      <ion-col col-md-4 class="icon-center">\n        <img src=""/>\n        <p></p>\n      </ion-col>\n      <ion-col col-md-4 class="icon-center">\n        <img src=""/>\n        <p></p>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n<!-- <ion-grid text-center>\n  <button ion-button color="blue" (click)=goToAllPdf()>NOTICE BOARD</button>\n  <button ion-button color="blue" (click)=goToLibrary()>LIBRARY MANAGEMENT</button>\n</ion-grid> -->\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'about\'">\n      <div [innerHtml]="schoolDetails?.org_about"></div>\n    </ion-list>\n  \n    <ion-list *ngSwitchCase="\'affiliations\'">\n     \n  \n    </ion-list>\n  \n    <ion-list *ngSwitchCase="\'facitity\'">\n  \n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer class="fixed" *ngIf="schoolDetails?.is_registered == \'1\'">\n  <ion-toolbar color="primary">\n  <ion-grid text-center >\n    <ion-row>\n      <div col-3 (click)=goToNotice()>\n        <i text-center class="fas fa-home fa-inverse fa-lg"></i>\n        <p class="footer-p">Notice</p>\n      </div>\n      <div col-3 (click)=gotoLiveStream()>\n        <i text-center class="fas fa-video fa-inverse fa-lg"></i>\n        <p class="footer-p">Live Streaming</p>\n      </div>\n      <div col-3 (click)=goToLibrary()>\n        <i text-center class="fas fa-align-justify fa-inverse fa-lg"></i>\n        <p  class="footer-p">Library</p>\n      </div>\n      <div col-3 (click)=goToCalender()>\n        <i text-center class="far fa-calendar-alt fa-inverse fa-lg"></i>\n        <p  class="footer-p">Calender</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/wis/sushil/cyberHubApp/cyberhub-ionic/src/pages/school-details/school-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], SchoolDetailsPage);
    return SchoolDetailsPage;
}());

//# sourceMappingURL=school-details.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
var apiUrl = {
    url: 'http://softechs.co.in/school_hub/',
    // node_url : 'http://localhost:3000/',
    // node_url: "https://still-shore-43294.herokuapp.com/",
    node_url: 'http://3.84.60.73:3000/',
};
//# sourceMappingURL=apiUrl.js.map

/***/ })

},[526]);
//# sourceMappingURL=main.js.map