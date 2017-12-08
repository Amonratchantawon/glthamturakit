webpackJsonp([19],{

/***/ "../../../../../src/app/layout/gl-report/gl-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_report_component__ = __webpack_require__("../../../../../src/app/layout/gl-report/gl-report.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlReportRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__gl_report_component__["a" /* GlReportComponent */] }
];
var GlReportRoutingModule = (function () {
    function GlReportRoutingModule() {
    }
    return GlReportRoutingModule;
}());
GlReportRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], GlReportRoutingModule);

//# sourceMappingURL=gl-report-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/gl-report/gl-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom: 15px;\">\r\n    <div class=\"col-12 center\">\r\n        <div class=\"radio\">\r\n            <label>\r\n                <input type=\"radio\" [(ngModel)]=\"glType\" value=\"month\"> รายเดือน\r\n            </label>\r\n            <label>\r\n                <input type=\"radio\" [(ngModel)]=\"glType\" value=\"year\"> รายปี\r\n            </label>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" style=\"margin-bottom: 15px;\">\r\n    <div class=\"col-4 center\"></div>\r\n    <div class=\"col-4 center\">\r\n        <div *ngIf=\"glType === 'month'\">\r\n            <input class=\"form-control\" type=\"month\" [(ngModel)]=\"month\">\r\n        </div>\r\n        <div *ngIf=\"glType === 'year'\">\r\n            <input class=\"form-control\" type=\"number\" [(ngModel)]=\"year\" min=\"1997\" max=\"3000\">\r\n        </div>\r\n    </div>\r\n    <div class=\"col-4 center\"></div>\r\n</div>\r\n<div class=\"row\" style=\"margin-bottom: 15px;\">\r\n    <div class=\"col-12 center\">\r\n        <div>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"genGlReport()\">ทำงบ</button>\r\n            <button type=\"button\" class=\"btn btn-default\" *ngIf=\"glReport.type\" (click)=\"closeGlReport()\">ปิดงบ</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-gl [glReport]=\"glReport\"></app-gl>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/gl-report/gl-report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\n  text-align: center; }\n\n.right {\n  text-align: right; }\n\n.left {\n  text-align: left; }\n\n[type=\"date\"] {\n  background: #fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat; }\n\n[type=\"date\"]::-webkit-inner-spin-button {\n  display: none; }\n\n[type=\"date\"]::-webkit-calendar-picker-indicator {\n  opacity: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/gl-report/gl-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_models_gl_report_model__ = __webpack_require__("../../../../../src/assets/models/gl-report.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_report_service__ = __webpack_require__("../../../../../src/app/layout/gl-report/gl-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlReportComponent = (function () {
    function GlReportComponent(glReportService, translate) {
        this.glReportService = glReportService;
        this.translate = translate;
        this.glReport = new __WEBPACK_IMPORTED_MODULE_0__assets_models_gl_report_model__["a" /* GlReportModel */];
        this.glType = 'month';
        this.year = new Date().getFullYear();
    }
    GlReportComponent.prototype.ngOnInit = function () {
    };
    GlReportComponent.prototype.genGlReport = function () {
        this.getGlReport();
    };
    GlReportComponent.prototype.getGlReport = function () {
        var _this = this;
        var glDate;
        if (this.glType === 'month') {
            if (!this.month) {
                this.currentLang = this.translate.currentLang;
                if (this.currentLang === 'th') {
                    alert('กรุณาระบุเดือน');
                }
                else {
                    alert('Please fill month');
                }
                return false;
            }
            glDate = this.month;
        }
        else {
            glDate = new Date(this.year, 1, 1);
        }
        this.glReportService.getGlReport(this.glType, glDate).then(function (gl) {
            _this.glReport = gl;
        }, function (error) {
            alert(JSON.stringify(error));
        });
    };
    GlReportComponent.prototype.closeGlReport = function () {
        this.currentLang = this.translate.currentLang;
        var statementname;
        if (this.currentLang === 'th') {
            var res = confirm('คุณต้องการปิดงบรายการนี้?');
            if (!res) {
                return;
            }
            statementname = prompt("กรุณาระบุชื่อรายการ", "");
        }
        else {
            var res = confirm('Would you like to closing statements?');
            if (!res) {
                return;
            }
            statementname = prompt("Please enter your statements name", "");
        }
        if (statementname === '') {
            if (this.currentLang === 'th') {
                alert('กรุณาระบุชื่อรายการ');
            }
            else {
                alert('Please enter your statements name');
            }
            return;
        }
        else if (statementname) {
            this.glReport.statementname = statementname;
            if (this.glType === 'month') {
                this.closeCreateMonth();
            }
            else {
                this.closeCreateYear();
            }
        }
    };
    GlReportComponent.prototype.closeCreateMonth = function () {
        var _this = this;
        this.glReportService.postGlReportMonth(this.glReport).then(function (data) {
            _this.glReport = data;
            _this.currentLang = _this.translate.currentLang;
            if (_this.currentLang === 'th') {
                alert('ปิดงบรายเดือนสำเร็จ');
            }
            else {
                alert('Closing statements complete.');
            }
        }, function (error) {
            if (JSON.parse(error._body).message) {
                alert(JSON.parse(error._body).message);
            }
        });
    };
    GlReportComponent.prototype.closeCreateYear = function () {
        var _this = this;
        this.glReportService.postGlReportYear(this.glReport).then(function (data) {
            _this.glReport = data;
            _this.currentLang = _this.translate.currentLang;
            if (_this.currentLang === 'th') {
                alert('ปิดงบรายปีสำเร็จ');
            }
            else {
                alert('Closing statements complete.');
            }
        }, function (error) {
            if (JSON.parse(error._body).message) {
                alert(JSON.parse(error._body).message);
            }
        });
    };
    return GlReportComponent;
}());
GlReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-gl-report',
        template: __webpack_require__("../../../../../src/app/layout/gl-report/gl-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/gl-report/gl-report.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gl_report_service__["a" /* GlReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gl_report_service__["a" /* GlReportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
], GlReportComponent);

var _a, _b;
//# sourceMappingURL=gl-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/gl-report/gl-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_report_component__ = __webpack_require__("../../../../../src/app/layout/gl-report/gl-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_report_routing_module__ = __webpack_require__("../../../../../src/app/layout/gl-report/gl-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_components_module__ = __webpack_require__("../../../../../src/app/shared/components/components.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlReportModule", function() { return GlReportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GlReportModule = (function () {
    function GlReportModule() {
    }
    return GlReportModule;
}());
GlReportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__gl_report_routing_module__["a" /* GlReportRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_components_components_module__["a" /* ComponentModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__gl_report_component__["a" /* GlReportComponent */]]
    })
], GlReportModule);

//# sourceMappingURL=gl-report.module.js.map

/***/ })

});
//# sourceMappingURL=19.chunk.js.map