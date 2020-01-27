(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taxi-cars-cars-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/taxi/cars/cars.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taxi/cars/cars.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table [value]=\"cars\">\n  <ng-template pTemplate=\"header\">\n      <tr>\n          <th>Vin</th>\n          <th>Year</th>\n          <th>Brand</th>\n          <th>Color</th>\n      </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-car>\n      <tr>\n          <td>{{car.vin}}</td>\n          <td>{{car.year}}</td>\n          <td>{{car.brand}}</td>\n          <td>{{car.color}}</td>\n      </tr>\n  </ng-template>\n</p-table>\n\n<div class=\"card mb-3\">\n    <div class=\"card-header\">Cars</div>\n    <div class=\"card-body table-responsive\">\n        <table class=\"table table-hover table-striped\">\n            <thead>\n            <tr>\n                <th>Page</th>\n                <th>Visits</th>\n                <th>% New Visits</th>\n                <th>Revenue</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n                <td>/index.html</td>\n                <td>1265</td>\n                <td>32.3%</td>\n                <td>$321.33</td>\n            </tr>\n            <tr>\n                <td>/about.html</td>\n                <td>261</td>\n                <td>33.3%</td>\n                <td>$234.12</td>\n            </tr>\n            <tr>\n                <td>/sales.html</td>\n                <td>665</td>\n                <td>21.3%</td>\n                <td>$16.34</td>\n            </tr>\n            <tr>\n                <td>/blog.html</td>\n                <td>9516</td>\n                <td>89.3%</td>\n                <td>$1644.43</td>\n            </tr>\n            <tr>\n                <td>/404.html</td>\n                <td>23</td>\n                <td>34.3%</td>\n                <td>$23.52</td>\n            </tr>\n            <tr>\n                <td>/services.html</td>\n                <td>421</td>\n                <td>60.3%</td>\n                <td>$724.32</td>\n            </tr>\n            <tr>\n                <td>/blog/post.html</td>\n                <td>1233</td>\n                <td>93.2%</td>\n                <td>$126.34</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/taxi/cars/cars-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/taxi/cars/cars-routing.module.ts ***!
  \**************************************************/
/*! exports provided: CarsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsRoutingModule", function() { return CarsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cars_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cars.component */ "./src/app/taxi/cars/cars.component.ts");




const routes = [
    {
        path: '', component: _cars_component__WEBPACK_IMPORTED_MODULE_3__["CarsComponent"]
    }
];
let CarsRoutingModule = class CarsRoutingModule {
};
CarsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CarsRoutingModule);



/***/ }),

/***/ "./src/app/taxi/cars/cars.component.scss":
/*!***********************************************!*\
  !*** ./src/app/taxi/cars/cars.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RheGkvY2Fycy9jYXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/taxi/cars/cars.component.ts":
/*!*********************************************!*\
  !*** ./src/app/taxi/cars/cars.component.ts ***!
  \*********************************************/
/*! exports provided: CarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsComponent", function() { return CarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarsComponent = class CarsComponent {
    constructor() {
        this.cars = [{ vin: '', year: '', brand: '', color: '' }];
    }
    ngOnInit() {
    }
};
CarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cars',
        template: __webpack_require__(/*! raw-loader!./cars.component.html */ "./node_modules/raw-loader/index.js!./src/app/taxi/cars/cars.component.html"),
        styles: [__webpack_require__(/*! ./cars.component.scss */ "./src/app/taxi/cars/cars.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CarsComponent);



/***/ }),

/***/ "./src/app/taxi/cars/cars.module.ts":
/*!******************************************!*\
  !*** ./src/app/taxi/cars/cars.module.ts ***!
  \******************************************/
/*! exports provided: CarsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsModule", function() { return CarsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cars_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cars.component */ "./src/app/taxi/cars/cars.component.ts");
/* harmony import */ var _cars_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cars-routing.module */ "./src/app/taxi/cars/cars-routing.module.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");






let CarsModule = class CarsModule {
};
CarsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
            _cars_routing_module__WEBPACK_IMPORTED_MODULE_4__["CarsRoutingModule"]],
        declarations: [_cars_component__WEBPACK_IMPORTED_MODULE_3__["CarsComponent"]],
    })
], CarsModule);



/***/ })

}]);
//# sourceMappingURL=taxi-cars-cars-module-es2015.js.map