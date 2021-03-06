webpackJsonp([0],{

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveStreamPageModule", function() { return LiveStreamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_stream__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_streaming_media__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LiveStreamPageModule = /** @class */ (function () {
    function LiveStreamPageModule() {
    }
    LiveStreamPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__live_stream__["a" /* LiveStreamPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__live_stream__["a" /* LiveStreamPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_streaming_media__["a" /* StreamingMedia */]]
        })
    ], LiveStreamPageModule);
    return LiveStreamPageModule;
}());

//# sourceMappingURL=live-stream.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamingMedia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(26);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Streaming Media
 * @description
 * This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
 *
 * @usage
 * ```typescript
 * import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
 *
 * constructor(private streamingMedia: StreamingMedia) { }
 *
 * let options: StreamingVideoOptions = {
 *   successCallback: () => { console.log('Video played') },
 *   errorCallback: (e) => { console.log('Error streaming') },
 *   orientation: 'landscape',
 *   shouldAutoClose: true,
 *   controls: false
 * };
 *
 * this.streamingMedia.playVideo('https://path/to/video/stream', options);
 *
 * ```
 * @interfaces
 * StreamingVideoOptions
 * StreamingAudioOptions
 */
var StreamingMedia = (function (_super) {
    __extends(StreamingMedia, _super);
    function StreamingMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Streams a video
     * @param videoUrl {string} The URL of the video
     * @param options {StreamingVideoOptions} Options
     */
    /**
       * Streams a video
       * @param videoUrl {string} The URL of the video
       * @param options {StreamingVideoOptions} Options
       */
    StreamingMedia.prototype.playVideo = /**
       * Streams a video
       * @param videoUrl {string} The URL of the video
       * @param options {StreamingVideoOptions} Options
       */
    function (videoUrl, options) { };
    /**
     * Streams an audio
     * @param audioUrl {string} The URL of the audio stream
     * @param options {StreamingAudioOptions} Options
     */
    /**
       * Streams an audio
       * @param audioUrl {string} The URL of the audio stream
       * @param options {StreamingAudioOptions} Options
       */
    StreamingMedia.prototype.playAudio = /**
       * Streams an audio
       * @param audioUrl {string} The URL of the audio stream
       * @param options {StreamingAudioOptions} Options
       */
    function (audioUrl, options) { };
    /**
     * Stops streaming audio
     */
    /**
       * Stops streaming audio
       */
    StreamingMedia.prototype.stopAudio = /**
       * Stops streaming audio
       */
    function () { };
    /**
     * Pauses streaming audio
     */
    /**
       * Pauses streaming audio
       */
    StreamingMedia.prototype.pauseAudio = /**
       * Pauses streaming audio
       */
    function () { };
    /**
     * Resumes streaming audio
     */
    /**
       * Resumes streaming audio
       */
    StreamingMedia.prototype.resumeAudio = /**
       * Resumes streaming audio
       */
    function () { };
    StreamingMedia.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], StreamingMedia.prototype, "playVideo", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], StreamingMedia.prototype, "playAudio", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StreamingMedia.prototype, "stopAudio", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StreamingMedia.prototype, "pauseAudio", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StreamingMedia.prototype, "resumeAudio", null);
    /**
     * @name Streaming Media
     * @description
     * This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
     *
     * @usage
     * ```typescript
     * import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
     *
     * constructor(private streamingMedia: StreamingMedia) { }
     *
     * let options: StreamingVideoOptions = {
     *   successCallback: () => { console.log('Video played') },
     *   errorCallback: (e) => { console.log('Error streaming') },
     *   orientation: 'landscape',
     *   shouldAutoClose: true,
     *   controls: false
     * };
     *
     * this.streamingMedia.playVideo('https://path/to/video/stream', options);
     *
     * ```
     * @interfaces
     * StreamingVideoOptions
     * StreamingAudioOptions
     */
    StreamingMedia = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'StreamingMedia',
            plugin: 'cordova-plugin-streaming-media',
            pluginRef: 'plugins.streamingMedia',
            repo: 'https://github.com/nchutchind/cordova-plugin-streaming-media',
            platforms: ['Amazon Fire OS', 'Android', 'iOS']
        })
    ], StreamingMedia);
    return StreamingMedia;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.js.map