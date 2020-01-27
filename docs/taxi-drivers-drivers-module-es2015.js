(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taxi-drivers-drivers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/taxi/drivers/drivers.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taxi/drivers/drivers.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\n  <div class=\"card-header\">Drivers</div>\n  <div class=\"card-body table-responsive\">\n      <table class=\"table table-hover table-striped\">\n          <thead>\n          <tr>\n              <th>Page</th>\n              <th>Visits</th>\n              <th>% New Visits</th>\n              <th>Revenue</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n              <td>/index.html</td>\n              <td>1265</td>\n              <td>32.3%</td>\n              <td>$321.33</td>\n          </tr>\n          <tr>\n              <td>/about.html</td>\n              <td>261</td>\n              <td>33.3%</td>\n              <td>$234.12</td>\n          </tr>\n          <tr>\n              <td>/sales.html</td>\n              <td>665</td>\n              <td>21.3%</td>\n              <td>$16.34</td>\n          </tr>\n          <tr>\n              <td>/blog.html</td>\n              <td>9516</td>\n              <td>89.3%</td>\n              <td>$1644.43</td>\n          </tr>\n          <tr>\n              <td>/404.html</td>\n              <td>23</td>\n              <td>34.3%</td>\n              <td>$23.52</td>\n          </tr>\n          <tr>\n              <td>/services.html</td>\n              <td>421</td>\n              <td>60.3%</td>\n              <td>$724.32</td>\n          </tr>\n          <tr>\n              <td>/blog/post.html</td>\n              <td>1233</td>\n              <td>93.2%</td>\n              <td>$126.34</td>\n          </tr>\n          </tbody>\n      </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/taxi/drivers/drivers-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/taxi/drivers/drivers-routing.module.ts ***!
  \********************************************************/
/*! exports provided: DriversRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversRoutingModule", function() { return DriversRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _drivers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drivers.component */ "./src/app/taxi/drivers/drivers.component.ts");




const routes = [
    {
        path: '', component: _drivers_component__WEBPACK_IMPORTED_MODULE_3__["DriversComponent"]
    }
];
let DriversRoutingModule = class DriversRoutingModule {
};
DriversRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DriversRoutingModule);



/***/ }),

/***/ "./src/app/taxi/drivers/drivers.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/taxi/drivers/drivers.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RheGkvZHJpdmVycy9kcml2ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/taxi/drivers/drivers.component.ts":
/*!***************************************************!*\
  !*** ./src/app/taxi/drivers/drivers.component.ts ***!
  \***************************************************/
/*! exports provided: DriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversComponent", function() { return DriversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DriversComponent = class DriversComponent {
    constructor() { }
    ngOnInit() {
    }
};
DriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drivers',
        template: __webpack_require__(/*! raw-loader!./drivers.component.html */ "./node_modules/raw-loader/index.js!./src/app/taxi/drivers/drivers.component.html"),
        styles: [__webpack_require__(/*! ./drivers.component.scss */ "./src/app/taxi/drivers/drivers.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DriversComponent);



/***/ }),

/***/ "./src/app/taxi/drivers/drivers.module.ts":
/*!************************************************!*\
  !*** ./src/app/taxi/drivers/drivers.module.ts ***!
  \************************************************/
/*! exports provided: DriversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversModule", function() { return DriversModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _drivers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drivers.component */ "./src/app/taxi/drivers/drivers.component.ts");
/* harmony import */ var _drivers_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drivers-routing.module */ "./src/app/taxi/drivers/drivers-routing.module.ts");





let DriversModule = class DriversModule {
};
DriversModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _drivers_routing_module__WEBPACK_IMPORTED_MODULE_4__["DriversRoutingModule"]],
        declarations: [_drivers_component__WEBPACK_IMPORTED_MODULE_3__["DriversComponent"]],
    })
], DriversModule);



/***/ })

}]);
//# sourceMappingURL=taxi-drivers-drivers-module-es2015.js.map