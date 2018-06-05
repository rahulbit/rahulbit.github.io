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

module.exports = "\n\n<div class=\"conltainer-fluid\" style=\"text-align:center\">\n   <header>\n     <img src=\"assets/home.jpg\" class=\"img-fluid\" style=\"width: 100% ; height:70vh\">\n     </header>\n     <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_view_home_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-view/home-view.component */ "./src/app/home-view/home-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _singlebook_view_singlebook_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singlebook-view/singlebook-view.component */ "./src/app/singlebook-view/singlebook-view.component.ts");
/* harmony import */ var _singlehouse_view_singlehouse_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singlehouse-view/singlehouse-view.component */ "./src/app/singlehouse-view/singlehouse-view.component.ts");
/* harmony import */ var _singlecharacter_view_singlecharacter_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./singlecharacter-view/singlecharacter-view.component */ "./src/app/singlecharacter-view/singlecharacter-view.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _gameofthrones_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gameofthrones.service */ "./src/app/gameofthrones.service.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_view_home_view_component__WEBPACK_IMPORTED_MODULE_3__["HomeViewComponent"],
                _singlebook_view_singlebook_view_component__WEBPACK_IMPORTED_MODULE_5__["SinglebookViewComponent"],
                _singlehouse_view_singlehouse_view_component__WEBPACK_IMPORTED_MODULE_6__["SinglehouseViewComponent"],
                _singlecharacter_view_singlecharacter_view_component__WEBPACK_IMPORTED_MODULE_7__["SinglecharacterViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_10__["OrderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'home', component: _home_view_home_view_component__WEBPACK_IMPORTED_MODULE_3__["HomeViewComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'book/:bookId', component: _singlebook_view_singlebook_view_component__WEBPACK_IMPORTED_MODULE_5__["SinglebookViewComponent"] },
                    { path: 'house/:houseId', component: _singlehouse_view_singlehouse_view_component__WEBPACK_IMPORTED_MODULE_6__["SinglehouseViewComponent"] },
                    { path: 'character/:characterId', component: _singlecharacter_view_singlecharacter_view_component__WEBPACK_IMPORTED_MODULE_7__["SinglecharacterViewComponent"] }
                ])
            ],
            providers: [_gameofthrones_service__WEBPACK_IMPORTED_MODULE_9__["GameofthronesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gameofthrones.service.ts":
/*!******************************************!*\
  !*** ./src/app/gameofthrones.service.ts ***!
  \******************************************/
/*! exports provided: GameofthronesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameofthronesService", function() { return GameofthronesService; });
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


var GameofthronesService = /** @class */ (function () {
    function GameofthronesService(http) {
        this.http = http;
        this.baseUrl = "https://anapioficeandfire.com/api";
        console.log("service is called");
    }
    GameofthronesService.prototype.getBooks = function () {
        var myResponse = this.http.get(this.baseUrl + '/books?page=1&pageSize=10');
        console.log(myResponse);
        return myResponse;
    };
    GameofthronesService.prototype.getHouses = function () {
        var myResponse1 = this.http.get(this.baseUrl + '/houses?page=1&pageSize=10');
        console.log(myResponse1);
        return myResponse1;
    };
    GameofthronesService.prototype.getcharacters = function (pageno) {
        var myResponse2 = this.http.get(this.baseUrl + '/characters' + '?page=' + pageno + '&pageSize=10');
        console.log(myResponse2);
        return myResponse2;
    };
    GameofthronesService.prototype.getSingleBookView = function (bookId) {
        var myResponse3 = this.http.get(this.baseUrl + '/books/' + bookId);
        console.log(myResponse3);
        return myResponse3;
    };
    GameofthronesService.prototype.getSingleCharacterView = function (characterId) {
        var myResponse4 = this.http.get(this.baseUrl + '/characters/' + characterId);
        console.log(myResponse4);
        return myResponse4;
    };
    GameofthronesService.prototype.getSingleHouseView = function (houseId) {
        var myResponse5 = this.http.get(this.baseUrl + '/houses/' + houseId);
        console.log(myResponse5);
        return myResponse5;
    };
    GameofthronesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GameofthronesService);
    return GameofthronesService;
}());



/***/ }),

/***/ "./src/app/home-view/home-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-view/home-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-view/home-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-view/home-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align: center\">\n  <div class=\"row \">\n    <div clas=\"row\" *ngIf=\"allbooks.length>0\">\n      <div class=\"col-md-4 m-4 p-3 \" *ngFor=\"let books of allbooks|orderBy:released\">\n\n        <div class=\"card\" style=\"width: 18rem;background-color:blue;color: beige  \">\n          <img class=\"card-img-top\" src=\"assets/Book.jpg\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Title:{{books.name}}</h5>\n            <p class=\"card-text\">Released on {{books.released|date}}</p>\n            <a [routerLink]=\"['/book', books.url.replace('https://anapioficeandfire.com/api/books/' ,'')]\" class=\"btn btn-primary\">More info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div clas=\"row\" *ngIf=\"allhouse.length>0\">\n      <div class=\"col-md-4  m-4 p-3\" *ngFor=\"let houses of allhouse|orderBy:name\">\n\n        <div class=\"card\" style=\"width: 18rem;background-color:blueviolet;color: beige  \">\n          <img class=\"card-img-top\" src=\"assets/house1.jpg\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n\n            <h5 class=\"card-title\">{{houses.name}}</h5>\n            <p class=\"card-text\">\n              <span *ngIf=\"houses.coatOfArms.length>0\"> {{houses.coatOfArms}}</span>\n              <span *ngIf=\"houses.coatOfArms.length<1\">not available</span>\n            </p>\n            <a [routerLink]=\"['/house', houses.url.replace('https://anapioficeandfire.com/api/houses/','')]\" class=\"btn btn-primary\">More Info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div clas=\"row\" *ngIf=\"allcharacter.length>0\">\n      <div class=\"col-md-4  m-4 p-3\" *ngFor=\"let characters of allcharacter|orderBy:name\">\n\n        <div class=\"card\" style=\"width: 18rem;background-color:brown;color: beige  \">\n          <img class=\"card-img-top\" src=\"assets/character.jpg\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Name:{{characters.name}}</h5>\n            <p class=\"card-text\"></p>\n            <a [routerLink]=\"['/character', characters.url.replace('https://anapioficeandfire.com/api/characters/' ,'')]\" class=\"btn btn-primary\">More Info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home-view/home-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-view/home-view.component.ts ***!
  \**************************************************/
/*! exports provided: HomeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewComponent", function() { return HomeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gameofthrones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameofthrones.service */ "./src/app/gameofthrones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeViewComponent = /** @class */ (function () {
    function HomeViewComponent(got) {
        this.got = got;
        this.allbooks = [];
        this.allhouse = [];
        this.allcharacter = [];
        this.charactersize = 50;
        console.log("home-view component is called");
    }
    HomeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allbooks = this.got.getBooks().subscribe(function (data) {
            console.log(data);
            _this.allbooks = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        console.log(this.allbooks);
        this.allhouse = this.got.getHouses().subscribe(function (data) {
            console.log(data);
            _this.allhouse = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        console.log(this.allhouse);
        for (var i = 0; i < this.charactersize; i++) {
            this.allcharacter = this.got.getcharacters([i]).subscribe(function (data) {
                console.log(data);
                _this.allcharacter = data;
            }, function (error) {
                console.log("some error occured");
                console.log(error.errorMessage);
            });
        }
        console.log(this.allcharacter);
    };
    HomeViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-view',
            template: __webpack_require__(/*! ./home-view.component.html */ "./src/app/home-view/home-view.component.html"),
            styles: [__webpack_require__(/*! ./home-view.component.css */ "./src/app/home-view/home-view.component.css")]
        }),
        __metadata("design:paramtypes", [_gameofthrones_service__WEBPACK_IMPORTED_MODULE_1__["GameofthronesService"]])
    ], HomeViewComponent);
    return HomeViewComponent;
}());



/***/ }),

/***/ "./src/app/singlebook-view/singlebook-view.component.css":
/*!***************************************************************!*\
  !*** ./src/app/singlebook-view/singlebook-view.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/singlebook-view/singlebook-view.component.html":
/*!****************************************************************!*\
  !*** ./src/app/singlebook-view/singlebook-view.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div clas=\"row \" *ngIf=\"singleViewBook\">\n    <div class=\"col-md-12 m-5  p-5\" style=\"text-align: center\">\n\n      <div class=\"card\" style=\"background-color:blue;color: beige  \">\n        <img class=\"card-img-top\" src=\"assets/Book.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <p class=\"card-title\" style=\"font-size:20px\">Title:{{ singleViewBook.name}}</p>\n\n          <p class=\"card-text\" style=\"font-size:15px\">Released on: {{singleViewBook.released|date}} </p>\n\n          <p class=\"card-text\" style=\"font-size:15px\">Isbn no:{{singleViewBook.isbn}} </p>\n\n          <p class=\"card-text\" style=\"font-size:15px\">Country: {{singleViewBook.country}} </p>\n\n          <p class=\"card-text\" style=\"font-size:15px\">Publisher:{{singleViewBook.publisher}}\n          </p>\n\n          <p class=\"card-text\" style=\"font-size:15px\" *ngIf=\"singleViewBook.authors.length>0\">Authors:\n            <span *ngFor=\"let author of singleViewBook.authors , let first = first,  let last = last\"> {{author}}{{last?'':','}}</span>\n          </p>\n\n          <p class=\"card-text\" style=\"font-size:15px\">MediaType: {{singleViewBook.mediaType}} </p>\n\n          <p class=\"card-text\" style=\"font-size:15px\" *ngIf=\"singleViewBook.povCharacters.length>0\">povCharacters:\n            <br>\n            <br>\n            <span *ngFor=\"let pov of singleViewBook.povCharacters\" style=\"font-size:15px; color:beige\">{{pov}}\n              <br>\n              <br>\n            </span>\n          </p>\n\n\n\n          <a class=\"btn btn-primary\" (click)= goBack()>Go Back</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/singlebook-view/singlebook-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/singlebook-view/singlebook-view.component.ts ***!
  \**************************************************************/
/*! exports provided: SinglebookViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglebookViewComponent", function() { return SinglebookViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gameofthrones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameofthrones.service */ "./src/app/gameofthrones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SinglebookViewComponent = /** @class */ (function () {
    function SinglebookViewComponent(_route, router, got, location) {
        this._route = _route;
        this.router = router;
        this.got = got;
        this.location = location;
    }
    SinglebookViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myBookId = this._route.snapshot.paramMap.get('bookId');
        console.log(myBookId);
        this.singleViewBook = this.got.getSingleBookView(myBookId).subscribe(function (data) {
            console.log(data);
            _this.singleViewBook = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        console.log(this.singleViewBook);
    };
    SinglebookViewComponent.prototype.goBack = function () {
        this.location.back();
    };
    SinglebookViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-singlebook-view',
            template: __webpack_require__(/*! ./singlebook-view.component.html */ "./src/app/singlebook-view/singlebook-view.component.html"),
            styles: [__webpack_require__(/*! ./singlebook-view.component.css */ "./src/app/singlebook-view/singlebook-view.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _gameofthrones_service__WEBPACK_IMPORTED_MODULE_1__["GameofthronesService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SinglebookViewComponent);
    return SinglebookViewComponent;
}());



/***/ }),

/***/ "./src/app/singlecharacter-view/singlecharacter-view.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/singlecharacter-view/singlecharacter-view.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/singlecharacter-view/singlecharacter-view.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/singlecharacter-view/singlecharacter-view.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div clas=\"row\" *ngIf=\"singleViewCharacter\">\n    <div class=\"col-md-12  m-5 p-5\">\n\n      <div class=\"card\" style=\"background-color:brown;color: beige  \">\n        <img class=\"card-img-top\" src=\"assets/character.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Name:{{singleViewCharacter.name}}</h5>\n\n          <p class=\"card-text\">Gender:\n            <span *ngIf=\"singleViewCharacter.gender.length>0\"> {{singleViewCharacter.gender}}</span>\n            <span *ngIf=\"singleViewCharacter.gender.length<1\">not Available</span>\n          </p>\n\n          <p class=\"card-text\">Culture:\n            <span *ngIf=\"singleViewCharacter.culture.length>0\">{{singleViewCharacter.culture}}</span>\n            <span *ngIf=\"singleViewCharacter.culture.length<1\">Not Available</span>\n\n          </p>\n          <p class=\"card-text\">Born:\n            <span *ngIf=\"singleViewCharacter.born.length>0\">{{singleViewCharacter.born}}</span>\n            <span *ngIf=\"singleViewCharacter.born.length<1\">Not Available</span>\n          </p>\n          <p class=\"card-text\">Died:\n            <span *ngIf=\"singleViewCharacter.died.length>0\">\n              {{singleViewCharacter.died}}</span>\n            <span *ngIf=\"singleViewCharacter.died.length <1\">Not Available</span>\n          </p>\n          <p class=\"card-text\">Father:\n            <br>\n            <span *ngIf=\"singleViewCharacter.father.length>0\">{{singleViewCharacter.father}}</span>\n            <span *ngIf=\"singleViewCharacter.father.length<1\">Not Available</span>\n          </p>\n          <p class=\"card-text\">Mother:\n            <br>\n            <span *ngIf=\"singleViewCharacter.mother.length>0\">\n              <a>{{singleViewCharacter.mother}}</a>\n            </span>\n            <span *ngIf=\"singleViewCharacter.mother.length<1\">Not Available</span>\n          </p>\n          <p class=\"card-text\">Titles:\n            <br>\n            <span *ngIf=\"singleViewCharacter.titles.length>0\">{{singleViewCharacter.titles}}\n              <br>\n            </span>\n            <span *ngIf=\"singleViewCharacter.titles.length<1\">Not Available</span>\n          </p>\n          <p class=\"card-text\">Spouse:\n            <br>\n            <span *ngIf=\"singleViewCharacter.spouse.length>0\">{{singleViewCharacter.spouse}}</span>\n            <span *ngIf=\"singleViewCharacter.spouse.length<1\">Not Available</span>\n          </p>\n          <p class=\"card-text\">Aliases:\n            <br>\n            <span *ngIf=\"singleViewCharacter.aliases.length>0\">{{singleViewCharacter.aliases}}</span>\n            <span *ngIf=\"singleViewCharacter.aliases.length<1\">Not Available</span>\n          </p>\n          <p class=\"card-text\">Tv-Series:\n            <br>\n            <span *ngIf=\"singleViewCharacter.tvSeries.length>0\">{{singleViewCharacter.tvSeries}}</span>\n            <span *ngIf=\"singleViewCharacter.tvSeries.length<1\">Not Available</span>\n          </p>\n\n          <a class=\"btn btn-primary\" (click)= goBack()>Go back</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/singlecharacter-view/singlecharacter-view.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/singlecharacter-view/singlecharacter-view.component.ts ***!
  \************************************************************************/
/*! exports provided: SinglecharacterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglecharacterViewComponent", function() { return SinglecharacterViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gameofthrones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameofthrones.service */ "./src/app/gameofthrones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SinglecharacterViewComponent = /** @class */ (function () {
    function SinglecharacterViewComponent(_route, router, got, location) {
        this._route = _route;
        this.router = router;
        this.got = got;
        this.location = location;
    }
    SinglecharacterViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myId = this._route.snapshot.paramMap.get('characterId');
        console.log(myId);
        this.singleViewCharacter = this.got.getSingleCharacterView(myId).subscribe(function (data) {
            console.log(data);
            _this.singleViewCharacter = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        console.log(this.singleViewCharacter);
    };
    SinglecharacterViewComponent.prototype.goBack = function () {
        this.location.back();
    };
    SinglecharacterViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-singlecharacter-view',
            template: __webpack_require__(/*! ./singlecharacter-view.component.html */ "./src/app/singlecharacter-view/singlecharacter-view.component.html"),
            styles: [__webpack_require__(/*! ./singlecharacter-view.component.css */ "./src/app/singlecharacter-view/singlecharacter-view.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _gameofthrones_service__WEBPACK_IMPORTED_MODULE_1__["GameofthronesService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SinglecharacterViewComponent);
    return SinglecharacterViewComponent;
}());



/***/ }),

/***/ "./src/app/singlehouse-view/singlehouse-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/singlehouse-view/singlehouse-view.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/singlehouse-view/singlehouse-view.component.html":
/*!******************************************************************!*\
  !*** ./src/app/singlehouse-view/singlehouse-view.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div clas=\"row\" *ngIf=\"singleHouseView\">\n    <div class=\"col-md-12 m-5 p-5 \">\n\n      <div class=\"card  text-center\" style=\"background-color:brown;color: beige  \">\n        <img class=\"card-img-top\" src=\"assets/house1.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Name:{{singleHouseView.name}}</h5>\n\n          <p class=\"card-text\">region:\n            <span *ngIf=\"singleHouseView.region.length>0\"> {{singleHouseView.region}}</span>\n            <span *ngIf=\"singleHouseView.region.length<1\">not Available</span>\n          </p>\n\n          <p class=\"card-text\">coatOfArms:\n            <span *ngIf=\"singleHouseView.coatOfArms.length>0\">{{singleHouseView.coatOfArms}}</span>\n            <span *ngIf=\"singleHouseView.coatOfArms.length<1\">Not Available</span>\n\n          </p>\n          <p class=\"card-text\">Words:\n            <span *ngIf=\"singleHouseView.words.length>0\">{{singleHouseView.words}}</span>\n            <span *ngIf=\"singleHouseView.words.length<1\">Not Available</span>\n          </p>\n          <p class=\"card-text\">Titles:\n            <span *ngIf=\"singleHouseView.titles.length>0   \">\n              {{singleHouseView.titles}}</span>\n            <span *ngIf=\"singleHouseView.titles.length <1\">Not Available</span>\n          </p>\n\n          <p class=\"card-text\">Seats:\n            <br>\n            <span *ngIf=\"singleHouseView.seats.length>0\">{{singleHouseView.seats}}</span>\n            <span *ngIf=\"singleHouseView.seats.length<1\">Not Available</span>\n          </p>\n\n          <p class=\"card-text\">CurrentLord:\n            <br>\n            <span *ngIf=\"singleHouseView.currentLord.length>0\">{{singleHouseView.currentLord}}</span>\n            <span *ngIf=\"singleHouseView.currentLord.length<1\">Not Available</span>\n          </p>\n          <p class=\"card-text\">Heir:\n            <br>\n            <span *ngIf=\"singleHouseView.heir.length>0\">{{singleHouseView.heir}}</span>\n            <span *ngIf=\"singleHouseView.heir.length<1\">Not Available</span>\n          </p>\n          <p class=\"card-text\">overlord:\n            <br>\n            <span *ngIf=\"singleHouseView.overlord.length>0\">{{singleHouseView.overlord}}</span>\n            <span *ngIf=\"singleHouseView.overlord.length<1\">Not Available</span>\n          </p>\n          <p class=\"card-text\">founded:\n            <br>\n            <span *ngIf=\"singleHouseView.founded.length>0\">{{singleHouseView.founded}}</span>\n            <span *ngIf=\"singleHouseView.founded.length<1\">Not Available</span>\n          </p>\n\n          <p class=\"card-text\">founder:\n            <br>\n            <span *ngIf=\"singleHouseView.founder.length>0\">{{singleHouseView.founder}}</span>\n            <span *ngIf=\"singleHouseView.founder.length<1\">Not Available</span>\n          </p>\n\n          <p class=\"card-text\">diedOut:\n            <br>\n            <span *ngIf=\"singleHouseView.diedOut.length>0\">{{singleHouseView.diedOut}}</span>\n            <span *ngIf=\"singleHouseView.diedOut.length<1\">Not Available</span>\n          </p>\n\n          <p class=\"card-text\">ancestralWeapons:\n            <br>\n            <span *ngIf=\"singleHouseView.ancestralWeapons.length>0\">{{singleHouseView.ancestralWeapons}}</span>\n            <span *ngIf=\"singleHouseView.ancestralWeapons.length<1\">Not Available</span>\n          </p>\n\n          <p class=\"card-text\" *ngIf=\"singleHouseView.swornMembers.length>0\">swornMembers:\n            <br>\n            <br>\n            <span *ngFor=\"let Member of singleHouseView.swornMembers\">{{Member}}\n              <br> </span>\n            <span *ngIf=\"singleHouseView.swornMembers.length<1\">Not Available</span>\n          </p>\n\n\n          <a class=\"btn btn-primary\" (click)= goBack()>Go back</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/singlehouse-view/singlehouse-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/singlehouse-view/singlehouse-view.component.ts ***!
  \****************************************************************/
/*! exports provided: SinglehouseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglehouseViewComponent", function() { return SinglehouseViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gameofthrones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameofthrones.service */ "./src/app/gameofthrones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SinglehouseViewComponent = /** @class */ (function () {
    function SinglehouseViewComponent(route, router, got, location) {
        this.route = route;
        this.router = router;
        this.got = got;
        this.location = location;
    }
    SinglehouseViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myId = this.route.snapshot.paramMap.get('houseId');
        console.log(myId);
        this.singleHouseView = this.got.getSingleHouseView(myId).subscribe(function (data) {
            console.log(data);
            _this.singleHouseView = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMesage);
        });
    };
    SinglehouseViewComponent.prototype.goBack = function () {
        this.location.back();
    };
    SinglehouseViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-singlehouse-view',
            template: __webpack_require__(/*! ./singlehouse-view.component.html */ "./src/app/singlehouse-view/singlehouse-view.component.html"),
            styles: [__webpack_require__(/*! ./singlehouse-view.component.css */ "./src/app/singlehouse-view/singlehouse-view.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _gameofthrones_service__WEBPACK_IMPORTED_MODULE_1__["GameofthronesService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SinglehouseViewComponent);
    return SinglehouseViewComponent;
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

module.exports = __webpack_require__(/*! C:\Users\rahul parmar\Desktop\New  edwisor\angularprojects\gameOfThrones\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map