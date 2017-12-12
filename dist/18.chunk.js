webpackJsonp([18],{

/***/ "../../../../../src/app/layout/jv-list/jv-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jv_list_component__ = __webpack_require__("../../../../../src/app/layout/jv-list/jv-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JvListRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__jv_list_component__["a" /* JvListComponent */] }
];
var JvListRoutingModule = (function () {
    function JvListRoutingModule() {
    }
    return JvListRoutingModule;
}());
JvListRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], JvListRoutingModule);

//# sourceMappingURL=jv-list-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/jv-list/jv-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item active\">\r\n            <i class=\"fa fa-list-ul\"></i> {{'jv-list' | translate}}</li>\r\n    </ol>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-center\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [routerLink]=\"['/jv-create']\">{{'jv' | translate}}</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/jv-list/jv-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/jv-list/jv-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JvListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JvListComponent = (function () {
    function JvListComponent() {
    }
    JvListComponent.prototype.ngOnInit = function () {
    };
    return JvListComponent;
}());
JvListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-jv-list',
        template: __webpack_require__("../../../../../src/app/layout/jv-list/jv-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/jv-list/jv-list.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], JvListComponent);

//# sourceMappingURL=jv-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/jv-list/jv-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_components_module__ = __webpack_require__("../../../../../src/app/shared/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jv_list_component__ = __webpack_require__("../../../../../src/app/layout/jv-list/jv-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jv_list_routing_module__ = __webpack_require__("../../../../../src/app/layout/jv-list/jv-list-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JvListModule", function() { return JvListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var JvListModule = (function () {
    function JvListModule() {
    }
    return JvListModule;
}());
JvListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__jv_list_routing_module__["a" /* JvListRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_components_components_module__["a" /* ComponentModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__jv_list_component__["a" /* JvListComponent */]]
    })
], JvListModule);

//# sourceMappingURL=jv-list.module.js.map

/***/ })

});
//# sourceMappingURL=18.chunk.js.map