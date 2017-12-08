webpackJsonp([20],{

/***/ "../../../../../src/app/layout/gl-report-view/gl-report-view-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_report_view_component__ = __webpack_require__("../../../../../src/app/layout/gl-report-view/gl-report-view.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlReportViewRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__gl_report_view_component__["a" /* GlReportViewComponent */] }
];
var GlReportViewRoutingModule = (function () {
    function GlReportViewRoutingModule() {
    }
    return GlReportViewRoutingModule;
}());
GlReportViewRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], GlReportViewRoutingModule);

//# sourceMappingURL=gl-report-view-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/gl-report-view/gl-report-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item active\">\n            <i class=\"fa fa-file-o\"></i>\n            {{'get-gl-report' | translate}}\n        </li>\n    </ol>\n    <ngb-tabset>\n        <ngb-tab>\n            <ng-template ngbTabTitle>\n                {{ 'gl-month' | translate }}\n            </ng-template>\n            <ng-template ngbTabContent>\n                <div class=\"card-block table-responsive\" *ngIf=\"glReportMonth && glReportMonth.length > 0\">\n                    <table class=\"table\">\n                        <thead class=\"thead-default\">\n                            <tr>\n                                <th style=\"width:20%;\">{{ 'month' | translate }}</th>\n                                <th>{{ 'gl-name' | translate }}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr style=\"cursor:pointer\" *ngFor=\"let item of glReportMonth\" (click)=\"glReportDetail(item._id,'month')\">\n                                <th scope=\"row\">{{ item.enddate | date:'MM-yyyy'}}</th>\n                                <td>{{item.statementname}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div *ngIf=\"glReportMonth && glReportMonth.length === 0\">\n                    <div class=\"row\">\n                        <div class=\"col-12 text-center\">\n                            <br>\n                            <p> {{'no-gl' | translate}}</p>\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n            <ng-template ngbTabTitle>\n                {{ 'gl-year' | translate }}\n            </ng-template>\n            <ng-template ngbTabContent>\n                <div class=\"card-block table-responsive\" *ngIf=\"glReportyear && glReportyear.length > 0\">\n                    <table class=\"table\">\n                        <thead class=\"thead-default\">\n                            <tr>\n                                <th style=\"width:20%;\">{{ 'year' | translate }}</th>\n                                <th>{{ 'gl-name' | translate }}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr style=\"cursor:pointer\" *ngFor=\"let item of glReportyear\" (click)=\"glReportDetail(item._id,'year')\">\n                                <th scope=\"row\">{{ item.enddate | date:'yyyy'}}</th>\n                                <td>{{item.statementname}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div *ngIf=\"glReportyear && glReportyear.length === 0\">\n                    <div class=\"row\">\n                        <div class=\"col-12 text-center\">\n                            <br>\n                            <p> {{'no-gl' | translate}}</p>\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n        </ngb-tab>\n    </ngb-tabset>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/gl-report-view/gl-report-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/gl-report-view/gl-report-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_report_view_service__ = __webpack_require__("../../../../../src/app/layout/gl-report-view/gl-report-view.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlReportViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlReportViewComponent = (function () {
    function GlReportViewComponent(glReportViewService, router) {
        this.glReportViewService = glReportViewService;
        this.router = router;
    }
    GlReportViewComponent.prototype.ngOnInit = function () {
        this.getGlReportMonth();
        this.getGlReportYear();
    };
    GlReportViewComponent.prototype.getGlReportMonth = function () {
        var _this = this;
        this.glReportViewService.getGlReportMonth().then(function (data) {
            _this.glReportMonth = data;
        }, function (error) {
            if (JSON.parse(error._body).message) {
                alert(JSON.parse(error._body).message);
            }
        });
    };
    GlReportViewComponent.prototype.getGlReportYear = function () {
        var _this = this;
        this.glReportViewService.getGlReportYear().then(function (data) {
            _this.glReportyear = data;
        }, function (error) {
            if (JSON.parse(error._body).message) {
                alert(JSON.parse(error._body).message);
            }
        });
    };
    GlReportViewComponent.prototype.glReportDetail = function (_id, type) {
        this.router.navigate(['/gl-report-detail'], { queryParams: { _id: _id, type: type } });
    };
    return GlReportViewComponent;
}());
GlReportViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gl-report-view',
        template: __webpack_require__("../../../../../src/app/layout/gl-report-view/gl-report-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/gl-report-view/gl-report-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__gl_report_view_service__["a" /* GlReportViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__gl_report_view_service__["a" /* GlReportViewService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GlReportViewComponent);

var _a, _b;
//# sourceMappingURL=gl-report-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/gl-report-view/gl-report-view.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_report_view_routing_module__ = __webpack_require__("../../../../../src/app/layout/gl-report-view/gl-report-view-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_report_view_component__ = __webpack_require__("../../../../../src/app/layout/gl-report-view/gl-report-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlReportViewModule", function() { return GlReportViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GlReportViewModule = (function () {
    function GlReportViewModule() {
    }
    return GlReportViewModule;
}());
GlReportViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__gl_report_view_routing_module__["a" /* GlReportViewRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__gl_report_view_component__["a" /* GlReportViewComponent */]]
    })
], GlReportViewModule);

//# sourceMappingURL=gl-report-view.module.js.map

/***/ })

});
//# sourceMappingURL=20.chunk.js.map