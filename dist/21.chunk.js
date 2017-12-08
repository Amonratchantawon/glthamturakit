webpackJsonp([21],{

/***/ "../../../../../src/app/layout/gl-report-detail/gl-report-detail-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_report_detail_component__ = __webpack_require__("../../../../../src/app/layout/gl-report-detail/gl-report-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlReportDetailRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__gl_report_detail_component__["a" /* GlReportDetailComponent */] }
];
var GlReportDetailRoutingModule = (function () {
    function GlReportDetailRoutingModule() {
    }
    return GlReportDetailRoutingModule;
}());
GlReportDetailRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], GlReportDetailRoutingModule);

//# sourceMappingURL=gl-report-detail-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/gl-report-detail/gl-report-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n            <i class=\"fa fa-file-o\"></i>\n            <a [routerLink]=\"['/gl-report-view']\">{{'get-gl-report' | translate}}</a>\n        </li>\n        <li class=\"breadcrumb-item active\">\n            <!-- <i class=\"fa fa-edit\"></i> {{'gl-report' | translate}}</li> -->\n            <i class=\"fa fa-edit\"></i> {{ glReport.statementname }}</li>\n    </ol>\n</div>\n\n<app-gl [glReport]=\"glReport\"></app-gl>\n"

/***/ }),

/***/ "../../../../../src/app/layout/gl-report-detail/gl-report-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/gl-report-detail/gl-report-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_report_detail_service__ = __webpack_require__("../../../../../src/app/layout/gl-report-detail/gl-report-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_models_gl_report_model__ = __webpack_require__("../../../../../src/assets/models/gl-report.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlReportDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlReportDetailComponent = (function () {
    function GlReportDetailComponent(route, glReportDetailService) {
        this.route = route;
        this.glReportDetailService = glReportDetailService;
        this.glReport = new __WEBPACK_IMPORTED_MODULE_3_assets_models_gl_report_model__["a" /* GlReportModel */]();
    }
    GlReportDetailComponent.prototype.ngOnInit = function () {
        this.getParam();
    };
    GlReportDetailComponent.prototype.getParam = function () {
        var _this = this;
        this.subParams = this.route
            .queryParams
            .subscribe(function (params) {
            var id = params['_id'];
            var type = params['type'];
            if ((id && id !== '') && (type && type !== '')) {
                if (type === 'month') {
                    _this.getGLMonthById(id);
                }
                else {
                    _this.getGLYearById(id);
                }
            }
        });
        this.subParams.unsubscribe();
    };
    GlReportDetailComponent.prototype.getGLMonthById = function (id) {
        var _this = this;
        this.glReportDetailService.getGlReportMonthById(id).then(function (data) {
            _this.glReport = data;
        }, function (error) {
            alert(error);
        });
    };
    GlReportDetailComponent.prototype.getGLYearById = function (id) {
        var _this = this;
        this.glReportDetailService.getGlReportYearById(id).then(function (data) {
            _this.glReport = data;
        }, function (error) {
            alert(error);
        });
    };
    return GlReportDetailComponent;
}());
GlReportDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gl-report-detail',
        template: __webpack_require__("../../../../../src/app/layout/gl-report-detail/gl-report-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/gl-report-detail/gl-report-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__gl_report_detail_service__["a" /* GlReportDetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__gl_report_detail_service__["a" /* GlReportDetailService */]) === "function" && _b || Object])
], GlReportDetailComponent);

var _a, _b;
//# sourceMappingURL=gl-report-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/gl-report-detail/gl-report-detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_report_detail_routing_module__ = __webpack_require__("../../../../../src/app/layout/gl-report-detail/gl-report-detail-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_report_detail_component__ = __webpack_require__("../../../../../src/app/layout/gl-report-detail/gl-report-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_components_module__ = __webpack_require__("../../../../../src/app/shared/components/components.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlReportDetailModule", function() { return GlReportDetailModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GlReportDetailModule = (function () {
    function GlReportDetailModule() {
    }
    return GlReportDetailModule;
}());
GlReportDetailModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__gl_report_detail_routing_module__["a" /* GlReportDetailRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_components_components_module__["a" /* ComponentModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__gl_report_detail_component__["a" /* GlReportDetailComponent */]]
    })
], GlReportDetailModule);

//# sourceMappingURL=gl-report-detail.module.js.map

/***/ })

});
//# sourceMappingURL=21.chunk.js.map