(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n    <div class=\"row jumbotron justify-content-between\">\n        <div class=\"col-12\">\n            <h2>Election in Realtime</h2>\n            <p>Realtime visualization of social media about the United States 2020 Presidential Election</p> \n        </div>\n        <div class=\"col-auto\">\n            <iframe src=\"https://ghbtns.com/github-btn.html?user=cpgeier&repo=real-time.ml&type=star&count=true&size=large\" frameborder=\"0\" scrolling=\"0\" width=\"160px\" height=\"30px\"></iframe>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <div class=\"col\">\n            <div class=\"row justify-content-center\">\n                <h5>Election Tweets Per Minute</h5>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div style=\"height: 400px;\">\n                        <app-tweets-line-chart [marketStatus]=\"marketStatusToPlot\"></app-tweets-line-chart>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row justify-content-center mt-5\">\n                <h5>Tweets containing \"Joe Biden\"</h5>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div style=\"height: 400px;\">\n                        <app-tweets-line-chart-biden [tweetCounts]=\"bidenTweetCountToPlot\"></app-tweets-line-chart-biden>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row justify-content-center mt-5\">\n                <h5>Tweets containing \"Donald Trump\"</h5>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div style=\"height: 400px;\">\n                        <app-tweets-line-chart-trump [tweetCounts]=\"trumpTweetCountToPlot\"></app-tweets-line-chart-trump>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"row justify-content-center\">\n                <h5>Live Tweets (and retweets)</h5>\n            </div>\n            <div class=\"row justify-content-center\">\n                <div class=\"col-auto\">\n                    <div style=\"height: 1300px; overflow: hidden;\">\n                        <app-tweet-embed [tweetStatus]=\"tweetToShow\" [tweetId]=\"tweetId\"></app-tweet-embed>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <nav class=\"navbar navbar-light bg-light mt-4\">\n        <div class=\"col-xs-3 ml-auto m-2\">\n            <a class=\"ml-3\" href=\"https://github.com/cpgeier\"> \n                <fa-icon class=\"fa-link\" [icon]=\"faGithub\" size=\"2x\"></fa-icon>\n            </a>\n            <a class=\"ml-3\" href=\"https://www.linkedin.com/in/chris-geier\"> \n                <fa-icon class=\"fa-link\" [icon]=\"faLinkedinIn\" size=\"2x\"></fa-icon>\n            </a>\n            <a class=\"ml-3\" href=\"http://cpgeier.ml/\"> \n                <fa-icon class=\"fa-link\" [icon]=\"faLink\" size=\"2x\"></fa-icon>\n            </a>\n        </div>\n    </nav>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tweet-embed/tweet-embed.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tweet-embed/tweet-embed.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n    <div class=\"col-auto mt-2\">\n        <h6>\n            <fa-icon *ngIf=\"!pause\" [icon]=\"faPause\" size=\"2x\" (click)=\"pause=!pause\" style=\"cursor: pointer\"></fa-icon>\n            <fa-icon *ngIf=\"pause\" [icon]=\"faPlay\" size=\"2x\" (click)=\"pause=!pause\" style=\"cursor: pointer\"></fa-icon>\n        </h6>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col\">\n        <div *ngFor=\"let item of test_tweets.slice().reverse()\">\n            <div id=\"{{ item }}\"></div>   \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tweets-line-chart-biden/tweets-line-chart-biden.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tweets-line-chart-biden/tweets-line-chart-biden.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100\">\n    <ngx-charts-line-chart\n    [animations]=\"animations\"\n    [scheme]=\"colorScheme\"\n    [results]=\"multi\"\n    [gradient]=\"gradient\"\n    [xAxis]=\"showXAxis\"\n    [yAxis]=\"showYAxis\"\n    [legend]=\"showLegend\"\n    [showXAxisLabel]=\"showXAxisLabel\"\n    [showYAxisLabel]=\"showYAxisLabel\"\n    [xAxisLabel]=\"xAxisLabel\"\n    [yAxisLabel]=\"yAxisLabel\"\n    [autoScale]=\"autoScale\"\n    (select)=\"onSelect($event)\">\n    </ngx-charts-line-chart>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tweets-line-chart-trump/tweets-line-chart-trump.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tweets-line-chart-trump/tweets-line-chart-trump.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100\">\n    <ngx-charts-line-chart\n    [animations]=\"animations\"\n    [scheme]=\"colorScheme\"\n    [results]=\"multi\"\n    [gradient]=\"gradient\"\n    [xAxis]=\"showXAxis\"\n    [yAxis]=\"showYAxis\"\n    [legend]=\"showLegend\"\n    [showXAxisLabel]=\"showXAxisLabel\"\n    [showYAxisLabel]=\"showYAxisLabel\"\n    [xAxisLabel]=\"xAxisLabel\"\n    [yAxisLabel]=\"yAxisLabel\"\n    [autoScale]=\"autoScale\"\n    (select)=\"onSelect($event)\">\n    </ngx-charts-line-chart>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tweets-line-chart/tweets-line-chart.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tweets-line-chart/tweets-line-chart.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100\">\n    <ngx-charts-line-chart\n    [animations]=\"animations\"\n    [scheme]=\"colorScheme\"\n    [results]=\"multi\"\n    [gradient]=\"gradient\"\n    [xAxis]=\"showXAxis\"\n    [yAxis]=\"showYAxis\"\n    [legend]=\"showLegend\"\n    [showXAxisLabel]=\"showXAxisLabel\"\n    [showYAxisLabel]=\"showYAxisLabel\"\n    [xAxisLabel]=\"xAxisLabel\"\n    [yAxisLabel]=\"yAxisLabel\"\n    [autoScale]=\"autoScale\"\n    (select)=\"onSelect($event)\">\n    </ngx-charts-line-chart>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a .fa-link {\n  color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NocmlzL0RvY3VtZW50cy9yZWFsLXRpbWUtdHdlZXRzL3NpdGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEgLmZhLWxpbmsge1xuICAgIGNvbG9yOiAjNzc3O1xufSIsImEgLmZhLWxpbmsge1xuICBjb2xvcjogIzc3Nztcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _market_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./market-status.service */ "./src/app/market-status.service.ts");
/* harmony import */ var _tweet_counts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tweet-counts.service */ "./src/app/tweet-counts.service.ts");
/* harmony import */ var _tweet_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tweet-text.service */ "./src/app/tweet-text.service.ts");
/* harmony import */ var _tweet_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tweet-text */ "./src/app/tweet-text.ts");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");










let AppComponent = class AppComponent {
    constructor(marketStatusSvc, tweetsCountsSvc, tweetTextSvc) {
        this.marketStatusSvc = marketStatusSvc;
        this.tweetsCountsSvc = tweetsCountsSvc;
        this.tweetTextSvc = tweetTextSvc;
        this.title = 'app';
        this.faLinkedinIn = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLinkedinIn"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGithub"];
        this.faLink = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLink"];
        this.faPause = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPause"];
        this.marketStatusSvc.getInitialMarketStatus()
            .subscribe(prices => {
            this.MarketStatus = prices;
            let marketUpdateObservable = this.marketStatusSvc.getUpdates();
            marketUpdateObservable.subscribe((latestStatus) => {
                this.MarketStatus = [latestStatus].concat(this.marketStatus);
            });
        });
        this.tweetsCountsSvc.getInitialTweetCountBiden()
            .subscribe(tweet_count => {
            this.BidenTweetCount = tweet_count;
            let tweetUpdatesObservable = this.tweetsCountsSvc.getBidenUpdates();
            tweetUpdatesObservable.subscribe((latestCount) => {
                this.BidenTweetCount = [latestCount].concat(this.bidenTweetCount);
            });
        });
        this.tweetsCountsSvc.getInitialTweetCountTrump()
            .subscribe(tweet_count => {
            this.TrumpTweetCount = tweet_count;
            let tweetUpdatesObservable = this.tweetsCountsSvc.getTrumpUpdates();
            tweetUpdatesObservable.subscribe((latestCount) => {
                this.TrumpTweetCount = [latestCount].concat(this.trumpTweetCount);
            });
        });
        this.tweetTextSvc.getInitialTweetTextStatus()
            .subscribe((tweets) => {
            this.TweetStatus = new _tweet_text__WEBPACK_IMPORTED_MODULE_5__["TweetText"](tweets);
            let tweetStatusObservable = this.tweetTextSvc.getUpdates();
            tweetStatusObservable.subscribe((latestStatus) => {
                this.TweetStatus = latestStatus;
            });
        });
    }
    set MarketStatus(status) {
        this.marketStatus = status;
        this.marketStatusToPlot = this.marketStatus.slice(0, 20);
    }
    set BidenTweetCount(tweetCount) {
        this.bidenTweetCount = tweetCount;
        this.bidenTweetCountToPlot = this.bidenTweetCount.slice(0, 20);
    }
    set TrumpTweetCount(tweetCount) {
        this.trumpTweetCount = tweetCount;
        this.trumpTweetCountToPlot = this.trumpTweetCount.slice(0, 20);
    }
    set TweetStatus(status) {
        this.tweetStatus = status;
        this.tweetId = this.tweetStatus.id_str;
        this.tweetToShow = "https://twitter.com/" + this.tweetStatus.user_screen_name + "/status/" + this.tweetStatus.id_str;
    }
};
AppComponent.ctorParameters = () => [
    { type: _market_status_service__WEBPACK_IMPORTED_MODULE_2__["MarketStatusService"] },
    { type: _tweet_counts_service__WEBPACK_IMPORTED_MODULE_3__["TweetCountsService"] },
    { type: _tweet_text_service__WEBPACK_IMPORTED_MODULE_4__["TweetTextService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tweet_embed_tweet_embed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tweet-embed/tweet-embed.component */ "./src/app/tweet-embed/tweet-embed.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _tweets_line_chart_tweets_line_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tweets-line-chart/tweets-line-chart.component */ "./src/app/tweets-line-chart/tweets-line-chart.component.ts");
/* harmony import */ var _tweets_line_chart_biden_tweets_line_chart_biden_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tweets-line-chart-biden/tweets-line-chart-biden.component */ "./src/app/tweets-line-chart-biden/tweets-line-chart-biden.component.ts");
/* harmony import */ var _tweets_line_chart_trump_tweets_line_chart_trump_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tweets-line-chart-trump/tweets-line-chart-trump.component */ "./src/app/tweets-line-chart-trump/tweets-line-chart-trump.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _tweet_embed_tweet_embed_component__WEBPACK_IMPORTED_MODULE_7__["TweetEmbedComponent"],
            _tweets_line_chart_tweets_line_chart_component__WEBPACK_IMPORTED_MODULE_11__["TweetsLineChartComponent"],
            _tweets_line_chart_biden_tweets_line_chart_biden_component__WEBPACK_IMPORTED_MODULE_12__["TweetsLineChartBidenComponent"],
            _tweets_line_chart_trump_tweets_line_chart_trump_component__WEBPACK_IMPORTED_MODULE_13__["TweetsLineChartTrumpComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/market-status.service.ts":
/*!******************************************!*\
  !*** ./src/app/market-status.service.ts ***!
  \******************************************/
/*! exports provided: MarketStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketStatusService", function() { return MarketStatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);






let MarketStatusService = class MarketStatusService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_base_url;
    }
    getInitialMarketStatus() {
        return this.httpClient.get(`${this.baseUrl}/api/v1/tweet_counts_all`);
    }
    getUpdates() {
        let socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(this.baseUrl);
        let marketSub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        let marketSubObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(marketSub);
        socket.on('tweet_counts_all', (marketStatus) => {
            marketSub.next(marketStatus);
        });
        return marketSubObservable;
    }
};
MarketStatusService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MarketStatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MarketStatusService);



/***/ }),

/***/ "./src/app/tweet-counts.service.ts":
/*!*****************************************!*\
  !*** ./src/app/tweet-counts.service.ts ***!
  \*****************************************/
/*! exports provided: TweetCountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetCountsService", function() { return TweetCountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);






let TweetCountsService = class TweetCountsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_base_url;
    }
    getInitialTweetCountBiden() {
        return this.httpClient.get(`${this.baseUrl}/api/v1/tweet_counts_biden`);
    }
    getInitialTweetCountTrump() {
        return this.httpClient.get(`${this.baseUrl}/api/v1/tweet_counts_trump`);
    }
    getTrumpUpdates() {
        let socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(this.baseUrl);
        let trumpSub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        let trumpSubObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(trumpSub);
        socket.on('tweet_counts_trump', (trumpStatus) => {
            trumpSub.next(trumpStatus);
        });
        return trumpSubObservable;
    }
    getBidenUpdates() {
        let socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(this.baseUrl);
        let marketSub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        let marketSubObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(marketSub);
        socket.on('tweet_counts_biden', (marketStatus) => {
            marketSub.next(marketStatus);
        });
        return marketSubObservable;
    }
};
TweetCountsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TweetCountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TweetCountsService);



/***/ }),

/***/ "./src/app/tweet-embed/tweet-embed.component.scss":
/*!********************************************************!*\
  !*** ./src/app/tweet-embed/tweet-embed.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3ZWV0LWVtYmVkL3R3ZWV0LWVtYmVkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tweet-embed/tweet-embed.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tweet-embed/tweet-embed.component.ts ***!
  \******************************************************/
/*! exports provided: TweetEmbedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetEmbedComponent", function() { return TweetEmbedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




let TweetEmbedComponent = class TweetEmbedComponent {
    constructor() {
        this.first = 1;
        this.second = 2;
        this.third = 3;
        this.faPause = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPause"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlay"];
    }
    ngOnInit() {
        this.pause = false;
        this.curr_twt = 0;
        this.test_tweets = [];
        for (let i = 0; i < 1; i++) {
            this.test_tweets.push("twt-" + i);
        }
    }
    ngOnChanges() {
        if (this.tweetId && !this.pause) {
            if (this.test_tweets.length > 10) {
                this.test_tweets.shift();
            }
            this.test_tweets.push("twt-" + (1 + this.curr_twt));
            // @ts-ignore
            twttr.widgets.createTweet(this.tweetId, document.getElementById("twt-" + this.curr_twt), {
                cards: "hidden",
                conversation: "none"
            });
            this.curr_twt += 1;
        }
    }
    ngAfterViewInit() {
        // @ts-ignore
        twttr.widgets.load();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TweetEmbedComponent.prototype, "tweetStatus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TweetEmbedComponent.prototype, "tweetId", void 0);
TweetEmbedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tweet-embed',
        template: __webpack_require__(/*! raw-loader!./tweet-embed.component.html */ "./node_modules/raw-loader/index.js!./src/app/tweet-embed/tweet-embed.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./tweet-embed.component.scss */ "./src/app/tweet-embed/tweet-embed.component.scss")]
    })
], TweetEmbedComponent);



/***/ }),

/***/ "./src/app/tweet-text.service.ts":
/*!***************************************!*\
  !*** ./src/app/tweet-text.service.ts ***!
  \***************************************/
/*! exports provided: TweetTextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetTextService", function() { return TweetTextService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _tweet_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tweet-text */ "./src/app/tweet-text.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);







let TweetTextService = class TweetTextService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_base_url;
    }
    getInitialTweetTextStatus() {
        return this.http.get(`${this.baseUrl}/api/v1/tweet_text_all`);
    }
    getUpdates() {
        let socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6__(this.baseUrl);
        let tweettextSub = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        let tweettextSubObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(tweettextSub);
        socket.on('tweet_text_all', (fullTweet) => {
            let tweettextStatus = new _tweet_text__WEBPACK_IMPORTED_MODULE_4__["TweetText"](fullTweet);
            tweettextSub.next(tweettextStatus);
        });
        return tweettextSubObservable;
    }
};
TweetTextService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TweetTextService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TweetTextService);



/***/ }),

/***/ "./src/app/tweet-text.ts":
/*!*******************************!*\
  !*** ./src/app/tweet-text.ts ***!
  \*******************************/
/*! exports provided: TweetText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetText", function() { return TweetText; });
class TweetText {
    constructor(fullTweet) {
        let tweet = fullTweet['_source'];
        this.text = tweet['text'];
        this.id_str = tweet['id_str'];
        this.user_screen_name = tweet['user']['screen_name'];
        if (tweet['extended_tweet']) {
            this.text = tweet['extended_tweet']['full_text'];
        }
        if (tweet['retweeted_status']) {
            this.text = tweet['retweeted_status']['text'];
            if (tweet['retweeted_status']['extended_tweet']) {
                this.text = tweet['retweeted_status']['extended_tweet']['full_text'];
            }
        }
    }
}
TweetText.ctorParameters = () => [
    { type: Object }
];


/***/ }),

/***/ "./src/app/tweets-line-chart-biden/data.ts":
/*!*************************************************!*\
  !*** ./src/app/tweets-line-chart-biden/data.ts ***!
  \*************************************************/
/*! exports provided: multi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
var multi = [
    {
        "name": "Biden election Tweets",
        "series": []
    }
];


/***/ }),

/***/ "./src/app/tweets-line-chart-biden/tweets-line-chart-biden.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/tweets-line-chart-biden/tweets-line-chart-biden.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3ZWV0cy1saW5lLWNoYXJ0LWJpZGVuL3R3ZWV0cy1saW5lLWNoYXJ0LWJpZGVuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tweets-line-chart-biden/tweets-line-chart-biden.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/tweets-line-chart-biden/tweets-line-chart-biden.component.ts ***!
  \******************************************************************************/
/*! exports provided: TweetsLineChartBidenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetsLineChartBidenComponent", function() { return TweetsLineChartBidenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/tweets-line-chart-biden/data.ts");



let TweetsLineChartBidenComponent = class TweetsLineChartBidenComponent {
    constructor() {
        // options
        this.animations = false;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Time';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Tweets per minute';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // line, area
        this.autoScale = true;
        Object.assign(this, { multi: _data__WEBPACK_IMPORTED_MODULE_2__["multi"] });
    }
    ngOnChanges() {
        if (this.tweetCounts) { // Variable undefined on first ngOnChanges call
            this.updateChart();
        }
    }
    updateChart() {
        let now = new Date(this.tweetCounts[0].date);
        this.multi[0].series.push({
            "name": now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
            "value": this.tweetCounts[0].num_tweets
        });
        if (_data__WEBPACK_IMPORTED_MODULE_2__["multi"][0].series.length > 50) {
            _data__WEBPACK_IMPORTED_MODULE_2__["multi"][0].series.shift();
        }
        this.multi = [...this.multi];
    }
    onSelect(event) {
        //console.log(event);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TweetsLineChartBidenComponent.prototype, "tweetCounts", void 0);
TweetsLineChartBidenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tweets-line-chart-biden',
        template: __webpack_require__(/*! raw-loader!./tweets-line-chart-biden.component.html */ "./node_modules/raw-loader/index.js!./src/app/tweets-line-chart-biden/tweets-line-chart-biden.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./tweets-line-chart-biden.component.scss */ "./src/app/tweets-line-chart-biden/tweets-line-chart-biden.component.scss")]
    })
], TweetsLineChartBidenComponent);



/***/ }),

/***/ "./src/app/tweets-line-chart-trump/data.ts":
/*!*************************************************!*\
  !*** ./src/app/tweets-line-chart-trump/data.ts ***!
  \*************************************************/
/*! exports provided: multi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
var multi = [
    {
        "name": "Trump election Tweets",
        "series": []
    }
];


/***/ }),

/***/ "./src/app/tweets-line-chart-trump/tweets-line-chart-trump.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/tweets-line-chart-trump/tweets-line-chart-trump.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3ZWV0cy1saW5lLWNoYXJ0LXRydW1wL3R3ZWV0cy1saW5lLWNoYXJ0LXRydW1wLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tweets-line-chart-trump/tweets-line-chart-trump.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/tweets-line-chart-trump/tweets-line-chart-trump.component.ts ***!
  \******************************************************************************/
/*! exports provided: TweetsLineChartTrumpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetsLineChartTrumpComponent", function() { return TweetsLineChartTrumpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/tweets-line-chart-trump/data.ts");



let TweetsLineChartTrumpComponent = class TweetsLineChartTrumpComponent {
    constructor() {
        // options
        this.animations = false;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Time';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Tweets per minute';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // line, area
        this.autoScale = true;
        Object.assign(this, { multi: _data__WEBPACK_IMPORTED_MODULE_2__["multi"] });
    }
    ngOnChanges() {
        if (this.tweetCounts) { // Variable undefined on first ngOnChanges call
            this.updateChart();
        }
    }
    updateChart() {
        let now = new Date(this.tweetCounts[0].date);
        this.multi[0].series.push({
            "name": now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
            "value": this.tweetCounts[0].num_tweets
        });
        if (_data__WEBPACK_IMPORTED_MODULE_2__["multi"][0].series.length > 50) {
            _data__WEBPACK_IMPORTED_MODULE_2__["multi"][0].series.shift();
        }
        this.multi = [...this.multi];
    }
    onSelect(event) {
        //console.log(event);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TweetsLineChartTrumpComponent.prototype, "tweetCounts", void 0);
TweetsLineChartTrumpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tweets-line-chart-trump',
        template: __webpack_require__(/*! raw-loader!./tweets-line-chart-trump.component.html */ "./node_modules/raw-loader/index.js!./src/app/tweets-line-chart-trump/tweets-line-chart-trump.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./tweets-line-chart-trump.component.scss */ "./src/app/tweets-line-chart-trump/tweets-line-chart-trump.component.scss")]
    })
], TweetsLineChartTrumpComponent);



/***/ }),

/***/ "./src/app/tweets-line-chart/data.ts":
/*!*******************************************!*\
  !*** ./src/app/tweets-line-chart/data.ts ***!
  \*******************************************/
/*! exports provided: multi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
var multi = [
    {
        "name": "Election Tweets",
        "series": []
    }
];


/***/ }),

/***/ "./src/app/tweets-line-chart/tweets-line-chart.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/tweets-line-chart/tweets-line-chart.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3ZWV0cy1saW5lLWNoYXJ0L3R3ZWV0cy1saW5lLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tweets-line-chart/tweets-line-chart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tweets-line-chart/tweets-line-chart.component.ts ***!
  \******************************************************************/
/*! exports provided: TweetsLineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetsLineChartComponent", function() { return TweetsLineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/tweets-line-chart/data.ts");



let TweetsLineChartComponent = class TweetsLineChartComponent {
    constructor() {
        // options
        this.animations = false;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Time';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Tweets per minute';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // line, area
        this.autoScale = true;
        Object.assign(this, { multi: _data__WEBPACK_IMPORTED_MODULE_2__["multi"] });
    }
    ngOnChanges() {
        if (this.marketStatus) { // Variable undefined on first ngOnChanges call
            this.updateChart();
        }
    }
    updateChart() {
        let now = new Date(this.marketStatus[0].date);
        console.log(now.toISOString());
        this.multi[0].series.push({
            "name": now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
            "value": this.marketStatus[0].num_tweets
        });
        if (_data__WEBPACK_IMPORTED_MODULE_2__["multi"][0].series.length > 50) {
            _data__WEBPACK_IMPORTED_MODULE_2__["multi"][0].series.shift();
        }
        this.multi = [...this.multi];
    }
    onSelect(event) {
        //console.log(event);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TweetsLineChartComponent.prototype, "marketStatus", void 0);
TweetsLineChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tweets-line-chart',
        template: __webpack_require__(/*! raw-loader!./tweets-line-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/tweets-line-chart/tweets-line-chart.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./tweets-line-chart.component.scss */ "./src/app/tweets-line-chart/tweets-line-chart.component.scss")]
    })
], TweetsLineChartComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api_base_url: "http://35.244.141.174"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chris/Documents/real-time-tweets/site/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map