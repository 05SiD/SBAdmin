(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taxi-trips-trips-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/taxi/trips/trips.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taxi/trips/trips.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\n  <div class=\"card-header\">Trips</div>\n  <div class=\"card-body table-responsive\">\n      <table class=\"table table-hover table-striped\">\n          <thead>\n          <tr>\n              <th>Page</th>\n              <th>Visits</th>\n              <th>% New Visits</th>\n              <th>Revenue</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n              <td>/index.html</td>\n              <td>1265</td>\n              <td>32.3%</td>\n              <td>$321.33</td>\n          </tr>\n          <tr>\n              <td>/about.html</td>\n              <td>261</td>\n              <td>33.3%</td>\n              <td>$234.12</td>\n          </tr>\n          <tr>\n              <td>/sales.html</td>\n              <td>665</td>\n              <td>21.3%</td>\n              <td>$16.34</td>\n          </tr>\n          <tr>\n              <td>/blog.html</td>\n              <td>9516</td>\n              <td>89.3%</td>\n              <td>$1644.43</td>\n          </tr>\n          <tr>\n              <td>/404.html</td>\n              <td>23</td>\n              <td>34.3%</td>\n              <td>$23.52</td>\n          </tr>\n          <tr>\n              <td>/services.html</td>\n              <td>421</td>\n              <td>60.3%</td>\n              <td>$724.32</td>\n          </tr>\n          <tr>\n              <td>/blog/post.html</td>\n              <td>1233</td>\n              <td>93.2%</td>\n              <td>$126.34</td>\n          </tr>\n          </tbody>\n      </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/taxi/trips/trips-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/taxi/trips/trips-routing.module.ts ***!
  \****************************************************/
/*! exports provided: TripsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsRoutingModule", function() { return TripsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trips.component */ "./src/app/taxi/trips/trips.component.ts");




const routes = [
    {
        path: '', component: _trips_component__WEBPACK_IMPORTED_MODULE_3__["TripsComponent"]
    }
];
let TripsRoutingModule = class TripsRoutingModule {
};
TripsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TripsRoutingModule);



/***/ }),

/***/ "./src/app/taxi/trips/trips.component.scss":
/*!*************************************************!*\
  !*** ./src/app/taxi/trips/trips.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RheGkvdHJpcHMvdHJpcHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/taxi/trips/trips.component.ts":
/*!***********************************************!*\
  !*** ./src/app/taxi/trips/trips.component.ts ***!
  \***********************************************/
/*! exports provided: TripsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsComponent", function() { return TripsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TripsComponent = class TripsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TripsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trips',
        template: __webpack_require__(/*! raw-loader!./trips.component.html */ "./node_modules/raw-loader/index.js!./src/app/taxi/trips/trips.component.html"),
        styles: [__webpack_require__(/*! ./trips.component.scss */ "./src/app/taxi/trips/trips.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TripsComponent);



/***/ }),

/***/ "./src/app/taxi/trips/trips.module.ts":
/*!********************************************!*\
  !*** ./src/app/taxi/trips/trips.module.ts ***!
  \********************************************/
/*! exports provided: TripsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsModule", function() { return TripsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _trips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trips.component */ "./src/app/taxi/trips/trips.component.ts");
/* harmony import */ var _trips_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trips-routing.module */ "./src/app/taxi/trips/trips-routing.module.ts");





let TripsModule = class TripsModule {
};
TripsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_trips_component__WEBPACK_IMPORTED_MODULE_3__["TripsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _trips_routing_module__WEBPACK_IMPORTED_MODULE_4__["TripsRoutingModule"]]
    })
], TripsModule);



/***/ })

}]);
//# sourceMappingURL=taxi-trips-trips-module-es2015.js.map