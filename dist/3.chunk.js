webpackJsonp([3],{

/***/ "../../../../../src/app/layout/company/company-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_component__ = __webpack_require__("../../../../../src/app/layout/company/company.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__company_component__["a" /* CompanyComponent */] }
];
var CompanyRoutingModule = (function () {
    function CompanyRoutingModule() {
    }
    return CompanyRoutingModule;
}());
CompanyRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CompanyRoutingModule);

//# sourceMappingURL=company-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <ol class=\"breadcrumb\">\n        <!-- <li class=\"breadcrumb-item\">\n            <i class=\"fa fa-list-ul\"></i>\n            <a [routerLink]=\"['/account-type-list']\">{{'account-type' | translate}}</a>\n        </li> -->\n        <li class=\"breadcrumb-item active\">\n            <i class=\"fa fa-edit\"></i> {{'company' | translate}}</li>\n    </ol>\n\n    <div class=\"row\">\n        <div class=\"col-md-3 col-sm-1\">\n        </div>\n        <div class=\"col-md-6 col-sm-10\">\n            <form role=\"form\">\n                <fieldset class=\"form-group\">\n                    <label>{{'company' | translate}}</label>\n                    <span class=\"danger\">*</span>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"companyData.name\" [ngModelOptions]=\"{standalone: true}\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>{{'address' | translate}}</label>\n                    <span class=\"danger\">*</span>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"companyData.address\" [ngModelOptions]=\"{standalone: true}\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>{{'subDistrict' | translate}}</label>\n                    <span class=\"danger\">*</span>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"companyData.subDistrict\" [ngModelOptions]=\"{standalone: true}\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>{{'district' | translate}}</label>\n                    <span class=\"danger\">*</span>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"companyData.district\" [ngModelOptions]=\"{standalone: true}\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>{{'province' | translate}}</label>\n                    <span class=\"danger\">*</span>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"companyData.province\" [ngModelOptions]=\"{standalone: true}\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>{{'postalCode' | translate}}</label>\n                    <span class=\"danger\">*</span>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"companyData.postCode\" [ngModelOptions]=\"{standalone: true}\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>{{'phone' | translate}}</label>\n                    <span class=\"danger\">*</span>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"companyData.phone\" [ngModelOptions]=\"{standalone: true}\">\n                </fieldset>\n\n                <!-- <fieldset class=\"form-group\">\n                    <label>{{'account-type' | translate}}</label>\n                    <select [(ngModel)]=\"accounttypeId\" (change)=\"onChangeType(accounttypeId)\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                        <option *ngFor=\"let type of accountTypeList\" [value]=\"type._id\" [attr.selected]=\"accounttypeId === type._id  ? true : null\">\n                            {{type.accounttypeno}} {{type.accounttypename}}\n                        </option>\n                    </select>\n                </fieldset> -->\n\n                <div class=\"col-12 text-center\">\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveCompany(companyData)\">{{'save' | translate}}</button>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-md-3 col-sm-1\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/company/company.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__company_service__ = __webpack_require__("../../../../../src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_models_company_model__ = __webpack_require__("../../../../../src/assets/models/company.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyComponent = (function () {
    function CompanyComponent(companyService) {
        this.companyService = companyService;
        this.companyData = new __WEBPACK_IMPORTED_MODULE_2_assets_models_company_model__["a" /* CompanyModel */]();
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.getCompany();
    };
    CompanyComponent.prototype.getCompany = function () {
        var _this = this;
        this.companyService.getCompany().then(function (res) {
            _this.companyData = (res[0]) ? res[0] : {};
            console.log(_this.companyData);
        }).catch(function (err) {
            console.log(err);
        });
    };
    CompanyComponent.prototype.saveCompany = function (companyData) {
        var _this = this;
        console.log(companyData);
        if (companyData._id) {
            this.companyService.upDateCompany(companyData).then(function (res) {
                _this.companyData = res;
                console.log(res);
            });
        }
        else {
            this.companyService.postCompany(companyData).then(function (res) {
                _this.companyData = res;
                console.log(res);
            });
        }
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-company',
        template: __webpack_require__("../../../../../src/app/layout/company/company.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/company/company.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__company_service__["a" /* CompanyService */]) === "function" && _a || Object])
], CompanyComponent);

var _a;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/company/company.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_routing_module__ = __webpack_require__("../../../../../src/app/layout/company/company-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__company_component__ = __webpack_require__("../../../../../src/app/layout/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_layout_company_company_service__ = __webpack_require__("../../../../../src/app/layout/company/company.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponentModule", function() { return CompanyComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CompanyComponentModule = (function () {
    function CompanyComponentModule() {
    }
    return CompanyComponentModule;
}());
CompanyComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__company_routing_module__["a" /* CompanyRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["a" /* TranslateModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__company_component__["a" /* CompanyComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6_app_layout_company_company_service__["a" /* CompanyService */]
        ]
    })
], CompanyComponentModule);

//# sourceMappingURL=company.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/company/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
    }
    CompanyService.prototype.getCompany = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */].URL + 'api/companies').toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.postCompany = function (company) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */].URL + 'api/companies', company).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.upDateCompany = function (company) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */].URL + 'api/companies/' + company._id, company).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return CompanyService;
}());
CompanyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CompanyService);

var _a;
//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ "../../../../../src/assets/models/company.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyModel; });
var CompanyModel = (function () {
    function CompanyModel() {
    }
    return CompanyModel;
}());

//# sourceMappingURL=company.model.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map