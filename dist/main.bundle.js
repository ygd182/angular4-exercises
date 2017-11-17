webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__counter_counter_component__ = __webpack_require__("../../../../../src/app/counter/counter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_generator_user_generator_component__ = __webpack_require__("../../../../../src/app/user-generator/user-generator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_generator_user_generator_service__ = __webpack_require__("../../../../../src/app/user-generator/user-generator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artist_list_artist_list_component__ = __webpack_require__("../../../../../src/app/artist-list/artist-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__artist_list_artist_list_service__ = __webpack_require__("../../../../../src/app/artist-list/artist-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__artist_detail_artist_detail_component__ = __webpack_require__("../../../../../src/app/artist-detail/artist-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__artist_detail_artist_detail_service__ = __webpack_require__("../../../../../src/app/artist-detail/artist-detail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ROUTES = [
    { path: '', redirectTo: '/artist-list', pathMatch: 'full' },
    { path: 'artist-list', component: __WEBPACK_IMPORTED_MODULE_8__artist_list_artist_list_component__["a" /* ArtistListComponent */] },
    { path: 'artist-detail/:name', component: __WEBPACK_IMPORTED_MODULE_10__artist_detail_artist_detail_component__["a" /* ArtistDetailComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__counter_counter_component__["a" /* CounterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_generator_user_generator_component__["a" /* UserGeneratorComponent */],
            __WEBPACK_IMPORTED_MODULE_8__artist_list_artist_list_component__["a" /* ArtistListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__artist_detail_artist_detail_component__["a" /* ArtistDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__user_generator_user_generator_service__["a" /* UserGeneratorService */], __WEBPACK_IMPORTED_MODULE_9__artist_list_artist_list_service__["a" /* ArtistListService */], __WEBPACK_IMPORTED_MODULE_11__artist_detail_artist_detail_service__["a" /* ArtistDetailService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/artist-detail/artist-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist-detail/artist-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  artist-detail\n</h1>\n\n<h2>{{artist.name}}</h2>\n\n<div>\n\t<a href=\"{{artist.url}}\">{{artist.url}}</a>\n</div>\n<div>\n\t<img src=\"{{artist.img}}\" height=\"300\" width=\"300\">\n</div>\n\n<h3>Top tracks</h3>\n<ul>\n\t<li *ngFor=\"let track of artist.topTracks\">\t\t\n\t\t{{track.name}}\n\t</li>\n</ul>\n<h3>Top albums</h3>\n<ul>\n\t<li *ngFor=\"let album of artist.topAlbums\">\t\t\n\t\t{{album.name}}\n\t</li>\n</ul>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/artist-detail/artist-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artist_detail_service__ = __webpack_require__("../../../../../src/app/artist-detail/artist-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistDetailComponent = (function () {
    function ArtistDetailComponent(route, artistDetailService) {
        this.route = route;
        this.artistDetailService = artistDetailService;
    }
    ArtistDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observablesArray = [];
        this.artist = {
            topTracks: [],
            topAlbums: []
        };
        this.sub = this.route.params.subscribe(function (params) {
            _this.name = params['name'];
            observablesArray.push(_this.artistDetailService.getArtistDetails(_this.name));
            observablesArray.push(_this.artistDetailService.getArtistTopTracks(_this.name));
            observablesArray.push(_this.artistDetailService.getArtistTopAlbums(_this.name));
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(observablesArray).subscribe(function (data) {
                console.log(data);
                _this.artist = data[0].artist;
                _this.artist.img = data[0].artist.image[0]['#text'];
                _this.artist.topTracks = data[1].toptracks.track;
                _this.artist.topAlbums = data[2].topalbums.album;
            });
        });
    };
    ArtistDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ArtistDetailComponent;
}());
ArtistDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-artist-detail',
        template: __webpack_require__("../../../../../src/app/artist-detail/artist-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/artist-detail/artist-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__artist_detail_service__["a" /* ArtistDetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__artist_detail_service__["a" /* ArtistDetailService */]) === "function" && _b || Object])
], ArtistDetailComponent);

var _a, _b;
//# sourceMappingURL=artist-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/artist-detail/artist-detail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistDetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Observable} from 'rxjs/Observable';

// Import RxJs required methods


var ArtistDetailService = (function () {
    function ArtistDetailService(http) {
        this.http = http;
    }
    ArtistDetailService.prototype.getArtistDetails = function (name) {
        var url = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + name + '&api_key=1514f551e71e2ebe34c098b945c259ca&format=json';
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ArtistDetailService.prototype.getArtistTopTracks = function (name) {
        var url = 'https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' + name + '&api_key=1514f551e71e2ebe34c098b945c259ca&format=json';
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ArtistDetailService.prototype.getArtistTopAlbums = function (name) {
        var url = 'https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + name + '&api_key=1514f551e71e2ebe34c098b945c259ca&format=json';
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return ArtistDetailService;
}());
ArtistDetailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ArtistDetailService);

var _a;
//# sourceMappingURL=artist-detail.service.js.map

/***/ }),

/***/ "../../../../../src/app/artist-list/artist-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist-list/artist-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  artist-list\n</h1>\n\n<ul>\n\t<li *ngFor=\"let artist of artistListArray\">\t\t\n\t\t<a [routerLink]=\"['/artist-detail/',artist.name.replace(' ', '+')]\">{{artist.name}}</a>\n\t</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/artist-list/artist-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_list_service__ = __webpack_require__("../../../../../src/app/artist-list/artist-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistListComponent = (function () {
    function ArtistListComponent(artistListService) {
        this.artistListService = artistListService;
    }
    ArtistListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.artistListArray = [];
        this.artistListService.getArtistList().subscribe(function (data) {
            _this.artistListArray = data.artists.artist;
        });
    };
    return ArtistListComponent;
}());
ArtistListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-artist-list',
        template: __webpack_require__("../../../../../src/app/artist-list/artist-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/artist-list/artist-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__artist_list_service__["a" /* ArtistListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__artist_list_service__["a" /* ArtistListService */]) === "function" && _a || Object])
], ArtistListComponent);

var _a;
//# sourceMappingURL=artist-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/artist-list/artist-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Observable} from 'rxjs/Observable';

// Import RxJs required methods


var ArtistListService = (function () {
    function ArtistListService(http) {
        this.http = http;
    }
    ArtistListService.prototype.getArtistList = function () {
        return this.http.get('https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=1514f551e71e2ebe34c098b945c259ca&format=json')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return ArtistListService;
}());
ArtistListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ArtistListService);

var _a;
//# sourceMappingURL=artist-list.service.js.map

/***/ }),

/***/ "../../../../../src/app/counter/counter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/counter/counter.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  counter works!\n</p>\n<span>{{counterService.countdown$ | async}}</span>\n<button (click)=\"restart()\">Restart</button>"

/***/ }),

/***/ "../../../../../src/app/counter/counter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counter_service__ = __webpack_require__("../../../../../src/app/counter/counter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CounterComponent = (function () {
    function CounterComponent(counterService) {
        this.counterService = counterService;
        this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.countdownEndRef = null;
        this.countdown = null;
    }
    CounterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.counterService.restartCountdown(this.value);
        this.countdownEndRef = this.counterService.countdownEnd$.subscribe(function () {
            _this.complete();
        });
        this.countdown = this.counterService.countdown$.subscribe(function (value) {
            console.log(value);
            _this.value = value;
        });
    };
    CounterComponent.prototype.restart = function () {
        this.counterService.restartCountdown(5);
    };
    CounterComponent.prototype.complete = function () {
        this.onComplete.emit();
    };
    CounterComponent.prototype.ngOnDestroy = function () {
        this.counterService.destroy();
    };
    return CounterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CounterComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], CounterComponent.prototype, "onComplete", void 0);
CounterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'counter',
        template: __webpack_require__("../../../../../src/app/counter/counter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/counter/counter.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__counter_service__["a" /* CounterService */]],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__counter_service__["a" /* CounterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__counter_service__["a" /* CounterService */]) === "function" && _a || Object])
], CounterComponent);

var _a;
//# sourceMappingURL=counter.component.js.map

/***/ }),

/***/ "../../../../../src/app/counter/counter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CounterService = (function () {
    function CounterService() {
        this.countdownTimerRef = null;
        this.init = 0;
        this.countdown = 0;
        this.countdownEndSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.countdownEnd$ = this.countdownEndSource.asObservable();
        this.countdownSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        this.countdown$ = this.countdownSource.asObservable();
    }
    CounterService.prototype.restartCountdown = function (init) {
        this.countdown = init;
        //restart the countdown
        this.countdownSource.next(this.countdown);
        this.doCountdown();
    };
    CounterService.prototype.destroy = function () {
        //clean timeout reference
    };
    CounterService.prototype.doCountdown = function () {
        //call process countdown after 1 second
        //this.countdown--;
        this.countdownSource.next(this.countdownSource.getValue() - 1);
        console.log(this.countdown);
        this.processCountdown();
    };
    CounterService.prototype.processCountdown = function () {
        var _this = this;
        //check if countdown has finished
        //HERE I SHOULD EMIT THE EVENT
        if (this.countdownSource.getValue() > 0)
            setTimeout(function () { return _this.doCountdown(); }, 1000);
        else {
            this.countdownEndSource.next();
        }
    };
    CounterService.prototype.clearTimeout = function () {
        //remove countdown reference
    };
    return CounterService;
}());
CounterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CounterService);

//# sourceMappingURL=counter.service.js.map

/***/ }),

/***/ "../../../../../src/app/models/userModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel(name, age) {
        this.name = name;
        this.age = age;
    }
    UserModel.prototype.getName = function () { return this.name; };
    UserModel.prototype.getAge = function () { return this.age; };
    return UserModel;
}());

//# sourceMappingURL=userModel.js.map

/***/ }),

/***/ "../../../../../src/app/user-generator/user-generator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-generator/user-generator.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-generator works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user-generator/user-generator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGeneratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_generator_service__ = __webpack_require__("../../../../../src/app/user-generator/user-generator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserGeneratorComponent = (function () {
    function UserGeneratorComponent(userGeneratorService) {
        this.userGeneratorService = userGeneratorService;
    }
    UserGeneratorComponent.prototype.ngOnInit = function () {
        this.userGeneratorService.userObservable$.subscribe(function (value) { return console.log(value); });
    };
    return UserGeneratorComponent;
}());
UserGeneratorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-generator',
        template: __webpack_require__("../../../../../src/app/user-generator/user-generator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-generator/user-generator.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_generator_service__["a" /* UserGeneratorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_generator_service__["a" /* UserGeneratorService */]) === "function" && _a || Object])
], UserGeneratorComponent);

var _a;
//# sourceMappingURL=user-generator.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-generator/user-generator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGeneratorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_userModel__ = __webpack_require__("../../../../../src/app/models/userModel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGeneratorService = (function () {
    function UserGeneratorService() {
        var _this = this;
        this.userGeneratorSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.userObservable$ = this.userGeneratorSource.asObservable();
        setInterval(function () { return _this.userGeneratorSource.next(new __WEBPACK_IMPORTED_MODULE_2__models_userModel__["a" /* UserModel */]('pepe', 1)); }, 1000);
    }
    return UserGeneratorService;
}());
UserGeneratorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserGeneratorService);

//# sourceMappingURL=user-generator.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map