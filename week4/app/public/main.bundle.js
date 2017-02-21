webpackJsonp([0,4],{

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UrlService = (function () {
    function UrlService(http) {
        this.http = http;
        this.urlApi = 'api/v1/urls';
    }
    UrlService.prototype.getShortUrl = function (longUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.urlApi, { longUrl: longUrl }, options)
            .map(this.extractUrlSet)
            .catch(this.handleError);
    };
    UrlService.prototype.getLongUrl = function (shortUrl) {
        var getUrl = this.urlApi + "/" + shortUrl;
        return this.http.get(getUrl)
            .map(this.extractUrlSet)
            .catch(this.handleError);
    };
    UrlService.prototype.getStatsInfo = function (shortUrl, info) {
        var getUrl = this.urlApi + "/" + shortUrl + "/" + info;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(getUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UrlService.prototype.extractUrlSet = function (res) {
        var body = res.json();
        return body || {};
    };
    UrlService.prototype.extractData = function (res) {
        var body = res.json();
        return body; //// notes: if body is 0, then 0 || {} => {}
    };
    UrlService.prototype.handleError = function (error) {
        //TODO: add error handling
        //console.log('error');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    UrlService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], UrlService);
    return UrlService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Xuerong.hupodeshuo/Desktop/tinyUrl/week4/app/tinyUrlClient/src/url.service.js.map

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 428;


/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(547);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Xuerong.hupodeshuo/Desktop/tinyUrl/week4/app/tinyUrlClient/src/main.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(711),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Xuerong.hupodeshuo/Desktop/tinyUrl/week4/app/tinyUrlClient/src/app.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_index__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_url_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_index__["a" /* HomeComponent */] },
    { path: 'client/about', component: __WEBPACK_IMPORTED_MODULE_6__components_index__["b" /* AboutComponent */] },
    { path: 'client/home', redirectTo: '/' },
    { path: 'client/urls/:shortUrl', component: __WEBPACK_IMPORTED_MODULE_6__components_index__["c" /* UrlComponent */] },
    { path: 'client/404', component: __WEBPACK_IMPORTED_MODULE_6__components_index__["d" /* NotFoundComponent */] },
    { path: '**', redirectTo: 'client/404' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_index__["b" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_index__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_index__["c" /* UrlComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_index__["d" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["ChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_url_service__["a" /* UrlService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Xuerong.hupodeshuo/Desktop/tinyUrl/week4/app/tinyUrlClient/src/app.module.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(712),
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/Users/Xuerong.hupodeshuo/Desktop/tinyUrl/week4/app/tinyUrlClient/src/404.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(713),
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/Xuerong.hupodeshuo/Desktop/tinyUrl/week4/app/tinyUrlClient/src/about.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_url_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(238);
/* unused harmony export UrlSet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UrlSet = (function () {
    function UrlSet() {
    }
    return UrlSet;
}());
var HomeComponent = (function () {
    function HomeComponent(urlService, router) {
        this.urlService = urlService;
        this.router = router;
    }
    HomeComponent.prototype.onSubmit = function () {
        var _this = this;
        //console.log('happy new year  ' + this.longUrl);
        this.urlService.getShortUrl(this.longUrl)
            .subscribe(function (result) {
            _this.shortUrl = result.shortUrl;
            _this.router.navigateByUrl('client/urls/' + _this.shortUrl);
        }, function (error) {
            console.log(error); //TODO: debug only
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(714)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_url_service__["a" /* UrlService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_url_service__["a" /* UrlService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Xuerong.hupodeshuo/Desktop/tinyUrl/week4/app/tinyUrlClient/src/home.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(550);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_component__ = __webpack_require__(549);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__about_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__url_component__ = __webpack_require__(552);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__url_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__404_component__ = __webpack_require__(548);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__404_component__["a"]; });




//# sourceMappingURL=C:/Users/Xuerong.hupodeshuo/Desktop/tinyUrl/week4/app/tinyUrlClient/src/index.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_url_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UrlComponent = (function () {
    function UrlComponent(route, urlService) {
        this.route = route;
        this.urlService = urlService;
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.lineChartType = 'line';
    }
    UrlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.shortUrl = params['shortUrl'];
            _this.shortUrlToShow = 'http://localhost/' + _this.shortUrl;
            _this.urlService.getLongUrl(_this.shortUrl).subscribe(function (result) {
                _this.longUrl = result.longUrl;
            }, function (error) {
                console.log(error);
            });
            //get total clicks
            _this.urlService.getStatsInfo(_this.shortUrl, 'totalClicks').subscribe(function (result) {
                _this.totalClicks = result;
                //TODO: when totalClicks is 0, there is a bug
            }, function (error) { return console.log(error); });
            //render 4 charts
            _this.renderChart(_this.shortUrl, 'referer', 'pie');
            _this.renderChart(_this.shortUrl, 'countryOrRegion', 'doughnut');
            _this.renderChart(_this.shortUrl, 'platform', 'polarArea');
            _this.renderChart(_this.shortUrl, 'browser', 'radar');
            _this.getTime('hour');
        }, function (error) {
            console.log(error);
        });
    };
    UrlComponent.prototype.renderChart = function (shortUrl, info, chartType) {
        this[chartType + 'ChartLabels'] = [];
        this[chartType + 'ChartData'] = [];
        this[chartType + 'ChartType'] = chartType;
        var that = this;
        this.urlService.getStatsInfo(shortUrl, info).subscribe(function (results) {
            results.forEach(function (item) {
                that[chartType + 'ChartLabels'].push(item._id);
                that[chartType + 'ChartData'].push(item.count);
            });
            that.updateChart();
        }, function (error) { return console.log(error); });
    };
    UrlComponent.prototype.updateChart = function () {
        this.charts.forEach(function (chart) {
            chart.ngOnChanges({});
        });
    };
    UrlComponent.prototype.getTime = function (time) {
        this.time = time;
        this.lineChartData = [];
        this.lineChartLabels = [];
        var that = this;
        this.urlService.getStatsInfo(this.shortUrl, time).subscribe(function (results) {
            results.forEach(function (item) {
                var legend = '';
                if (time === 'hour') {
                    if (item._id.minutes < 10) {
                        item._id.minutes = '0' + item._id.minutes;
                    }
                    legend = item._id.hour + ":" + item._id.minutes;
                }
                if (time === 'day') {
                    legend = item._id.hour + ":00";
                }
                if (time === 'month') {
                    legend = item._id.month + '/' + item._id.day;
                }
                that.lineChartLabels.push(legend);
                that.lineChartData.push(item.count);
            });
            that.updateChart();
        }, function (error) { return console.log(error); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["BaseChartDirective"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _a) || Object)
    ], UrlComponent.prototype, "charts", void 0);
    UrlComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-url',
            template: __webpack_require__(715),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_url_service__["a" /* UrlService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_url_service__["a" /* UrlService */]) === 'function' && _c) || Object])
    ], UrlComponent);
    return UrlComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Xuerong.hupodeshuo/Desktop/tinyUrl/week4/app/tinyUrlClient/src/url.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Xuerong.hupodeshuo/Desktop/tinyUrl/week4/app/tinyUrlClient/src/environment.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Xuerong.hupodeshuo/Desktop/tinyUrl/week4/app/tinyUrlClient/src/polyfills.js.map

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" routerLink=\"client/home\">TinyUrl</a>\r\n      </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a routerLink=\"/client/about\">About us</a></li>\r\n        </ul>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <p>Page not found</p>\r\n    <h6>Please try it again</h6>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <p>Contact us</p>\r\n    <h6>hupodeshuo@gmail.com</h6>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <h4 for=\"longUrlInput\">Input your Long Url</h4>\r\n        <input name=\"longUrlInput\" type=\"text\" [(ngModel)]=\"longUrl\" class=\"form-control\" placeholder=\"Please enter your long url\" required>\r\n      </div>\r\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Get your Short Url\"/>\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5 col-md-offset-2\">\r\n    <div class=\"row\">\r\n      <h4>Your Long Url is: </h4>\r\n      <a target=\"_blank\" [href] = \"longUrl\">{{longUrl}}</a>\r\n    </div>\r\n    <div class=\"row\">\r\n      <h4>Your Short Url is: </h4>\r\n      <a target=\"_blank\" [href] = \"shortUrl\">{{shortUrlToShow}}</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        Total Clicks\r\n      </div>\r\n      <div class=\"panel-body\">\r\n         {{ totalClicks }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- time line chart -->\r\n<div class=\"row\">\r\n  <div class=\"col-md-8 col-md-offset-2\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        Click for the past\r\n        <a href=\"javascript:void(0);\" (click)=\"getTime('hour')\" [ngClass]=\"{'text-muted': time === 'hour'}\">Hour</a>\r\n        <a href=\"javascript:void(0);\" (click)=\"getTime('day')\" [ngClass]=\"{'text-muted': time === 'day'}\">Day</a>\r\n        <a href=\"javascript:void(0);\" (click)=\"getTime('month')\" [ngClass]=\"{'text-muted': time === 'month'}\">Month</a>\r\n      </div>\r\n      <div class=\"panel-body\" style=\"display: block; width: 100%;\">\r\n            <canvas baseChart\r\n                [data]=\"lineChartData\"\r\n                [labels]=\"lineChartLabels\"\r\n                [chartType]=\"lineChartType\">\r\n            </canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><!-- time line chart -->\r\n\r\n<!-- referer and countryOrRegion chart -->\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        Referer\r\n      </div>\r\n      <div class=\"panel-body\" style=\"display: block; width: 100%;\">\r\n        <canvas baseChart\r\n          [data]=\"pieChartData\"\r\n          [labels]=\"pieChartLabels\"\r\n          [chartType]=\"pieChartType\">\r\n        </canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        Country Or Region\r\n      </div>\r\n      <div class=\"panel-body\" style=\"display: block; width: 100%;\">\r\n        <canvas baseChart\r\n          [data]=\"doughnutChartData\"\r\n          [labels]=\"doughnutChartLabels\"\r\n          [chartType]=\"doughnutChartType\">\r\n        </canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><!-- referer and countryOrRegion chart -->\r\n\r\n\r\n<!-- platform and browser chart -->\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        Platform\r\n       </div>\r\n      <div class=\"panel-body\" style=\"display: block; width: 100%;\">\r\n        <canvas baseChart\r\n        [data]=\"polarAreaChartData\"\r\n        [labels]=\"polarAreaChartLabels\"\r\n        [chartType]=\"polarAreaChartType\">\r\n        </canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        Browser\r\n      </div>\r\n      <div class=\"panel-body\" style=\"display: block; width: 100%;\">\r\n        <canvas baseChart\r\n          [data]=\"radarChartData\"\r\n          [labels]=\"radarChartLabels\"\r\n          [chartType]=\"radarChartType\">\r\n        </canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><!-- platform and browser chart -->\r\n"

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(429);


/***/ })

},[987]);
//# sourceMappingURL=main.bundle.map