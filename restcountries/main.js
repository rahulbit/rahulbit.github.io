(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \">\r\n            <a class=\"navbar-brand\" href=\"#\">Explore The World </a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n              <div class=\"navbar-nav\">\r\n                <a class=\"nav-item nav-link active\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n                \r\n                \r\n              </div>\r\n            </div>\r\n          </nav>\r\n    \r\n        <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\r\n            <div class=\"carousel-inner\">\r\n              <div class=\"carousel-item active\">\r\n                <img class=\"d-block w-100\" src=\"assets/header1.jpg\" alt=\"First slide\">\r\n              </div>\r\n          </div>\r\n        \r\n      </div>\r\n      </div>\r\n\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_views_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/views.module */ "./src/app/views/views.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_region_view_region_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/region-view/region-view.component */ "./src/app/views/region-view/region-view.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { SharedModule } from './shared/shared.module';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _views_views_module__WEBPACK_IMPORTED_MODULE_6__["ViewsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _views_region_view_region_view_component__WEBPACK_IMPORTED_MODULE_8__["RegionViewComponent"], pathMatch: 'full' },
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: '*', component: _views_region_view_region_view_component__WEBPACK_IMPORTED_MODULE_8__["RegionViewComponent"] },
                    { path: '**', component: _views_region_view_region_view_component__WEBPACK_IMPORTED_MODULE_8__["RegionViewComponent"] },
                ])
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.url = 'https://restcountries.eu/rest/v2';
        this.regionWiseView = function () {
            var response = _this.http.get(_this.url + "/all?fields=region");
            return response;
        };
        this.regionWiseCountryView = function (name) {
            console.log(name);
            var myresponse = _this.http.get(_this.url + '/region/' + name);
            console.log(myresponse);
            return myresponse;
        };
        this.singleCountryView = function (name) {
            console.log(name);
            var myresponse = _this.http.get(_this.url + "/name/" + name);
            return myresponse;
        };
        this.currencyFilter = function (code) {
            console.log(code);
            var response1 = _this.http.get(_this.url + "/currency/" + code);
            return response1;
        };
        this.langjuageFilter = function (name) {
            console.log(name);
            var response = _this.http.get(_this.url + "/lang/" + name);
            return response;
        };
    }
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/shared/all-countries/all-countries.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/all-countries/all-countries.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n      \r\n    background:url('https://www.planwallpaper.com/static/images/6909249-black-hd-background.jpg');\r\n        background-size:cover;\r\n        width: 100%;\r\n        color:#DEB887;\r\n        \r\n}"

/***/ }),

/***/ "./src/app/shared/all-countries/all-countries.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/all-countries/all-countries.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n   \n    \n<div class=\"card\"  >\n   \n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Name: {{name}}</h5>\n    <p class=\"card-text\">Region: {{region}}</p>\n    <p class=\"card-text\"> Capital: {{capital}}</p>\n    <p class=\"card-text\">subregion: {{subregion}}</p>\n    <p class=\"card-text\">{{code}}</p>\n    <p class=\"card-text\">{{language}}</p>\n  \n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/all-countries/all-countries.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/all-countries/all-countries.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllCountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCountriesComponent", function() { return AllCountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllCountriesComponent = /** @class */ (function () {
    function AllCountriesComponent() {
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AllCountriesComponent.prototype.ngOnInit = function () {
    };
    AllCountriesComponent.prototype.codeClicked = function () {
        this.notify.emit(this.code);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AllCountriesComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AllCountriesComponent.prototype, "capital", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AllCountriesComponent.prototype, "region", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AllCountriesComponent.prototype, "subregion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AllCountriesComponent.prototype, "code", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AllCountriesComponent.prototype, "language", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AllCountriesComponent.prototype, "notify", void 0);
    AllCountriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-countries',
            template: __webpack_require__(/*! ./all-countries.component.html */ "./src/app/shared/all-countries/all-countries.component.html"),
            styles: [__webpack_require__(/*! ./all-countries.component.css */ "./src/app/shared/all-countries/all-countries.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AllCountriesComponent);
    return AllCountriesComponent;
}());



/***/ }),

/***/ "./src/app/shared/goback/goback.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/goback/goback.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/goback/goback.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/goback/goback.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div   style=\"text-align: center\">\r\n<button   type=\"button\" class=\"btn btn-primary btn-block\"  (click)=  goBack() >Go Back</button>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/goback/goback.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/goback/goback.component.ts ***!
  \***************************************************/
/*! exports provided: GobackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GobackComponent", function() { return GobackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GobackComponent = /** @class */ (function () {
    function GobackComponent(location) {
        this.location = location;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GobackComponent.prototype.ngOnInit = function () {
    };
    GobackComponent.prototype.goBack = function () {
        this.location.back();
        this.notify.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GobackComponent.prototype, "notify", void 0);
    GobackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goback',
            template: __webpack_require__(/*! ./goback.component.html */ "./src/app/shared/goback/goback.component.html"),
            styles: [__webpack_require__(/*! ./goback.component.css */ "./src/app/shared/goback/goback.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], GobackComponent);
    return GobackComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-countries/all-countries.component */ "./src/app/shared/all-countries/all-countries.component.ts");
/* harmony import */ var _goback_goback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goback/goback.component */ "./src/app/shared/goback/goback.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_3__["AllCountriesComponent"], _goback_goback_component__WEBPACK_IMPORTED_MODULE_4__["GobackComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_3__["AllCountriesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _goback_goback_component__WEBPACK_IMPORTED_MODULE_4__["GobackComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/views/currency/currency.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/currency/currency.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/currency/currency.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/currency/currency.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-5\">\n    <app-goback     (click)= goBack($event)></app-goback>\n</div>\n  \n<div class=\"row container p-5 ml-5 \"  *ngIf= \"currency\" style=\"text-align:  center; \">\n   \n  <div class=\"col-md-3  \"  *ngFor=\"let all of currency \">\n\n    <img class=\"card-img-top\"  src=\"{{all.flag}}\"  alt=\"img-top\"> \n \n    <app-all-countries   [name] =\" all.name \"  [region] =\" all.region  \"  [capital] =\" all.capital\"  [subregion] =\"all.subregion\" [code]=\"''\" ></app-all-countries>\n  \n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/views/currency/currency.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/currency/currency.component.ts ***!
  \******************************************************/
/*! exports provided: CurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return CurrencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrencyComponent = /** @class */ (function () {
    function CurrencyComponent(service, toastr, route) {
        this.service = service;
        this.toastr = toastr;
        this.route = route;
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var code = this.route.snapshot.paramMap.get('code');
        this.toastr.success(" currency  code" + code);
        console.log(code);
        this.service.currencyFilter(code).subscribe(function (data) {
            _this.currency = data;
        }, function (error) {
            _this.toastr.warning("some error occured");
        });
    };
    CurrencyComponent.prototype.goBack = function () {
        this.toastr.success("go back button triggered");
    };
    CurrencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currency',
            template: __webpack_require__(/*! ./currency.component.html */ "./src/app/views/currency/currency.component.html"),
            styles: [__webpack_require__(/*! ./currency.component.css */ "./src/app/views/currency/currency.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CurrencyComponent);
    return CurrencyComponent;
}());



/***/ }),

/***/ "./src/app/views/language/language.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/language/language.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/language/language.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/language/language.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"p-5\">\n    <app-goback   (click)= goBack($event)></app-goback>\n    </div>\n    \n\n \n    \n<div class=\"row container p-5 m-5 \"  *ngIf= \"language\" >\n\n        <div class=\"col-md-3 \"  *ngFor=\"let all of language \"  style=\"text-align: center\">\n    <img class=\"card-img-top\"  src=\"{{all.flag}}\"  alt=\"img-top\"> \n   <app-all-countries    [name] =\" all.name \"  [region] =\" all.region \"  [capital] =\" all.capital\"  [subregion] =\" all.subregion \" [code]=\"''\" [language]=\"''\"></app-all-countries>\n  \n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/views/language/language.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/language/language.component.ts ***!
  \******************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguageComponent = /** @class */ (function () {
    function LanguageComponent(service, toastr, route) {
        this.service = service;
        this.toastr = toastr;
        this.route = route;
    }
    LanguageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.route.snapshot.paramMap.get('name');
        this.toastr.success("language spoken by these countries " + ':' + name);
        console.log(name);
        this.service.langjuageFilter(name).subscribe(function (data) {
            _this.language = data;
        }, function (error) {
            _this.toastr.error("some error occured");
        });
    };
    LanguageComponent.prototype.goBack = function () {
        this.toastr.success("go back button triggered");
    };
    LanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-language',
            template: __webpack_require__(/*! ./language.component.html */ "./src/app/views/language/language.component.html"),
            styles: [__webpack_require__(/*! ./language.component.css */ "./src/app/views/language/language.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "./src/app/views/region-view/region-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/region-view/region-view.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    .bg{\r\n        \r\n        background-color: LightGray;\r\n        \r\n      }\r\n\r\n      .jumbotron{\r\n        background:url('https://www.planwallpaper.com/static/images/6909249-black-hd-background.jpg');\r\n        background-size:cover;\r\n        width: 100%;\r\n        \r\n      }\r\n\r\n      \r\n      "

/***/ }),

/***/ "./src/app/views/region-view/region-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/region-view/region-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n  <div  class=\"bg\">\n<div class=\"row\" *ngIf =\"region\">\n  <div class=\"col-md-3 p-5 m-5 \" *ngFor =\"let all of region\" >\n\n      <div class=\"jumbotron jumbotron-fluid\">\n          <div class=\"container\" >\n            <h5 class=\"display-5\" style=\"text-align:center\"><a [routerLink]=\"['/allcountry' , all.region]\">Region:{{all.region}}</a></h5>\n           \n        </div>\n\n  \n</div>\n</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/region-view/region-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/region-view/region-view.component.ts ***!
  \************************************************************/
/*! exports provided: RegionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionViewComponent", function() { return RegionViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegionViewComponent = /** @class */ (function () {
    function RegionViewComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    RegionViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.regionWiseView().subscribe(function (data) {
            _this.region = data;
        }, function (error) {
            _this.toastr.warning("some  error occured");
        });
    };
    RegionViewComponent.prototype.showCountry = function () {
    };
    RegionViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region-view',
            template: __webpack_require__(/*! ./region-view.component.html */ "./src/app/views/region-view/region-view.component.html"),
            styles: [__webpack_require__(/*! ./region-view.component.css */ "./src/app/views/region-view/region-view.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], RegionViewComponent);
    return RegionViewComponent;
}());



/***/ }),

/***/ "./src/app/views/regionwisecountry-view/regionwisecountry-view.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/views/regionwisecountry-view/regionwisecountry-view.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/regionwisecountry-view/regionwisecountry-view.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/views/regionwisecountry-view/regionwisecountry-view.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"m-5\">\n    <app-goback   (click)= goBack($event) ></app-goback>\n</div>\n<div class=\"bg\">   \n<div class=\"row container  p-5  \"  *ngIf= \"countries\"   style=\"margin: 8%\" >\n  \n  <div class=\"col-md-3\" style=\"text-align: center\" *ngFor=\"let all of countries\">\n      \n\n  <a [routerLink]=\"['/single', all.name]\"><img class=\"card-img-top\"  src=\"{{all.flag}}\"  alt=\"img-top\"> </a>\n \n    <app-all-countries [name] =\"all.name\"  [region] =\"all.region\"  [capital] =\"all.capital\"  [subregion] =\"all.subregion\"></app-all-countries>\n    \n  </div>\n</div>\n</div>\n\n\n    \n    \n    \n\n"

/***/ }),

/***/ "./src/app/views/regionwisecountry-view/regionwisecountry-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/regionwisecountry-view/regionwisecountry-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegionwisecountryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionwisecountryViewComponent", function() { return RegionwisecountryViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegionwisecountryViewComponent = /** @class */ (function () {
    function RegionwisecountryViewComponent(route, http, toastr, service) {
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.service = service;
    }
    RegionwisecountryViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myId = this.route.snapshot.paramMap.get('name');
        console.log(myId);
        this.service.regionWiseCountryView(myId).subscribe(function (data) {
            _this.countries = data;
        }, function (error) {
            _this.toastr.warning("some error occured");
        });
    };
    RegionwisecountryViewComponent.prototype.goBack = function () {
        this.toastr.success("go back button triggered");
    };
    RegionwisecountryViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regionwisecountry-view',
            template: __webpack_require__(/*! ./regionwisecountry-view.component.html */ "./src/app/views/regionwisecountry-view/regionwisecountry-view.component.html"),
            styles: [__webpack_require__(/*! ./regionwisecountry-view.component.css */ "./src/app/views/regionwisecountry-view/regionwisecountry-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], RegionwisecountryViewComponent);
    return RegionwisecountryViewComponent;
}());



/***/ }),

/***/ "./src/app/views/singlecountry-view/singlecountry-view.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/singlecountry-view/singlecountry-view.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img{\r\n   width:100%;\r\n   height:100%;\r\n}\r\n\r\n.a{\r\n    color: brown;\r\n}"

/***/ }),

/***/ "./src/app/views/singlecountry-view/singlecountry-view.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/singlecountry-view/singlecountry-view.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row container m-4 \"  *ngIf= \"singleView\"  style=\"text-align: center\" >\n    <div   *ngFor=\"let all of singleView\">\n        <div class=\"card bg-dark text-white\" style=\"width: 80rem ; height:auto\">\n        <img class=\"card-img\" src=\"{{all.flag}}\" alt=\"Card image\">\n        <div class=\"card-img-overlay\">\n\n          <div class=\"row p-3 \">\n            <div class=\"col-md-3\">\n                <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                <div class=\"card-header\">Name</div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\" style=\"color:black\">:{{all.name}}</h5>\n                  </div>\n              </div>\n              </div>\n\n              <div class=\"col-md-3\">\n                  <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                      <div class=\"card-header\">Capital</div>\n                      <div class=\"card-body\">\n                          <p class=\"card-text\" style=\"color:black\"><b>{{all.capital}}</b></p>\n                        </div>\n                    </div>\n               </div>\n\n              <div class=\"col-md-3\">\n                  <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                      <div class=\"card-header\">Region</div>\n                      <div class=\"card-body\">\n                          <p class=\"card-text\" style=\"color:black\">{{all.region}}</p>\n                        </div>\n                    </div>\n              </div>\n              <div class=\"col-md-3\">\n                  <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                      <div class=\"card-header\">Population</div>\n                      <div class=\"card-body\">\n                          <p class=\"card-text\" style=\"color:black\">{{all.population}}</p>\n                        </div>\n                    </div>\n                  </div>\n            </div>\n\n            <div class=\"row p-3\">\n\n                \n\n                    <div class=\"col-md-3\">\n                        <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                            <div class=\"card-header\">altSpellings:</div>\n                            <div class=\"card-body\">\n                                <p class=\"card-text\" style=\"color:black\">{{all.altSpellings}}</p>\n                              </div>\n                          </div>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                            <div class=\"card-header\">Population:</div>\n                            <div class=\"card-body\">\n                                <p class=\"card-text\" style=\"color:black\">{{all.population}}</p>\n                              </div>\n                          </div>\n                     </div>\n                     <div class=\"col-md-3\">\n                        <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                            <div class=\"card-header\">demonym:</div>\n                            <div class=\"card-body\">\n                                <p class=\"card-text\" style=\"color:black\">{{all.demonym}}</p>\n                              </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                                <div class=\"card-header\">Area:</div>\n                                <div class=\"card-body\">\n                                    <p class=\"card-text\" style=\"color:black\">{{all.area}}</p>\n                                  </div>\n                              </div>\n                        </div>\n                </div>\n\n                <div class=\"row p-3\">\n                    \n\n                        \n\n\n                        <div class=\"col-md-3\">\n                            <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                                <div class=\"card-header\">Borders:</div>\n                                <div class=\"card-body\">\n                        <p class=\"card-text\"style=\"color:black\">{{all.borders}}</p>\n                        </div>\n                      </div>\n                      </div>\n\n                      <div class=\"col-md-3\">\n                          <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                              <div class=\"card-header\">nativeName:</div>\n                              <div class=\"card-body\">\n                             <p class=\"card-text\"style=\"color:black\">{{all.nativeName}}</p>\n                      </div>\n                    </div>\n                      </div>\n                      <div class=\"col-md-3\">\n                          <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                              <div class=\"card-header\">Currency Name:</div>\n                              <div class=\"card-body\">\n                                  <p class=\"card-text\" style=\"color:black\" *ngIf=\"all.currencies.length>0\">\n                                      <span *ngFor=\"let Currency of all.currencies\"> {{Currency.name}}</span>\n                                   <span *ngIf=\"all.currencies.length<1\">Not Available</span> </p>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                          <div class=\"card-header\">Currency Code:</div>\n                          <div class=\"card-body\">\n                              <p class=\"card-text\" style=\"color:black\" *ngIf =\"all.currencies.length>0\">\n                                  <span *ngFor=\"let Currency of all.currencies \"><a [routerLink]=\"['/currency',Currency.code] \"  style=\"color: brown\">{{Currency.code}}</a></span>\n                                  <span *ngIf=\"all.currencies.length<1\">Not Available</span> </p>\n                         \n                  </div>\n                </div>\n                 \n                </div>\n                      \n                    </div>\n\n                    \n\n                        <div class=\"row p-3\">\n\n                            <div class=\"col-md-3\">\n                                <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                                    <div class=\"card-header\">Currency symbol:</div>\n                                    <div class=\"card-body\">\n                                        <p class=\"card-text\"  style=\"color:black\" *ngIf=\"all.currencies.length>0\">\n                                            <span *ngFor=\"let Currency of all.currencies\"> {{Currency.symbol}}</span>\n                                            <span *ngIf=\"all.currencies.length<1\">Not Available</span> </p>\n                            </div>\n                          </div>\n\n                              \n                                </div>\n\n                                <div class=\"col-md-3\">\n\n                                    <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                                        <div class=\"card-header\">Language:</div>\n                                        <div class=\"card-body\">\n                                            <p class=\"card-text\" style=\"color:black\" *ngIf =\"all.languages.length>0\">\n                                                <span *ngFor =\"let lang of all.languages , let first =first , let last =last\" >{{lang.name}}{{last?'':','}}</span>\n                                                <span *ngIf=\"all.languages.length<1\">Not Available</span> </p>\n                                      \n                                </div>\n                              </div>\n         \n                              </div>\n\n                              <div class=\"col-md-3\">\n\n                                <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n                                    <div class=\"card-header\">Language Code:</div>\n                                    <div class=\"card-body\">\n                                        <p class=\"card-text\" style=\"color:black\" *ngIf =\"all.languages.length>0\">\n                                            <span *ngFor =\"let lang of all.languages , let first =first , let last =last\" ><a [routerLink]=\"['/language',lang.iso639_1]\"  style=\"color: brown\">{{lang.iso639_1}}{{last?'':','}}</a></span>\n                                            <span *ngIf=\"all.languages.length<1\">Not Available</span> </p>\n                                  \n                            </div>\n                          </div>\n     \n                          </div>\n                            </div>\n\n                \n           \n            \n        \n                            <app-goback     (click)= goBack($event)></app-goback>\n        </div>\n      </div>\n  </div>\n  </div>\n\n\n  "

/***/ }),

/***/ "./src/app/views/singlecountry-view/singlecountry-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/singlecountry-view/singlecountry-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: SinglecountryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglecountryViewComponent", function() { return SinglecountryViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SinglecountryViewComponent = /** @class */ (function () {
    function SinglecountryViewComponent(http, toastr, route, service) {
        this.http = http;
        this.toastr = toastr;
        this.route = route;
        this.service = service;
    }
    SinglecountryViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myId = this.route.snapshot.paramMap.get('countryId');
        console.log(myId);
        this.service.singleCountryView(myId).subscribe(function (data) {
            _this.singleView = data;
        }, function (error) {
            _this.toastr.warning("some error occured");
        });
    };
    SinglecountryViewComponent.prototype.goBack = function () {
        this.toastr.success("go back button triggered");
    };
    SinglecountryViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-singlecountry-view',
            template: __webpack_require__(/*! ./singlecountry-view.component.html */ "./src/app/views/singlecountry-view/singlecountry-view.component.html"),
            styles: [__webpack_require__(/*! ./singlecountry-view.component.css */ "./src/app/views/singlecountry-view/singlecountry-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], SinglecountryViewComponent);
    return SinglecountryViewComponent;
}());



/***/ }),

/***/ "./src/app/views/views.module.ts":
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region-view/region-view.component */ "./src/app/views/region-view/region-view.component.ts");
/* harmony import */ var _regionwisecountry_view_regionwisecountry_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./regionwisecountry-view/regionwisecountry-view.component */ "./src/app/views/regionwisecountry-view/regionwisecountry-view.component.ts");
/* harmony import */ var _singlecountry_view_singlecountry_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./singlecountry-view/singlecountry-view.component */ "./src/app/views/singlecountry-view/singlecountry-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./currency/currency.component */ "./src/app/views/currency/currency.component.ts");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./language/language.component */ "./src/app/views/language/language.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { AllCountriesComponent } from '../shared/all-countries/all-countries.component';
var ViewsModule = /** @class */ (function () {
    function ViewsModule() {
    }
    ViewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'single/:countryId', component: _singlecountry_view_singlecountry_view_component__WEBPACK_IMPORTED_MODULE_4__["SinglecountryViewComponent"] },
                    { path: 'allcountry/:name', component: _regionwisecountry_view_regionwisecountry_view_component__WEBPACK_IMPORTED_MODULE_3__["RegionwisecountryViewComponent"] },
                    { path: 'currency/:code', component: _currency_currency_component__WEBPACK_IMPORTED_MODULE_7__["CurrencyComponent"] },
                    { path: 'language/:name', component: _language_language_component__WEBPACK_IMPORTED_MODULE_8__["LanguageComponent"] }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_region_view_region_view_component__WEBPACK_IMPORTED_MODULE_2__["RegionViewComponent"], _regionwisecountry_view_regionwisecountry_view_component__WEBPACK_IMPORTED_MODULE_3__["RegionwisecountryViewComponent"], _singlecountry_view_singlecountry_view_component__WEBPACK_IMPORTED_MODULE_4__["SinglecountryViewComponent"], _currency_currency_component__WEBPACK_IMPORTED_MODULE_7__["CurrencyComponent"], _language_language_component__WEBPACK_IMPORTED_MODULE_8__["LanguageComponent"]],
        })
    ], ViewsModule);
    return ViewsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rahul parmar\Desktop\New  edwisor\angularprojects\countries-view\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map