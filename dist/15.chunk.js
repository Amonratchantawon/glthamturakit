webpackJsonp([15],{

/***/ "../../../../../src/app/layout/pv-create/pv-create-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pv_create_component__ = __webpack_require__("../../../../../src/app/layout/pv-create/pv-create.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PvCreateRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pv_create_component__["a" /* PvCreateComponent */] }
];
var PvCreateRoutingModule = (function () {
    function PvCreateRoutingModule() {
    }
    return PvCreateRoutingModule;
}());
PvCreateRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], PvCreateRoutingModule);

//# sourceMappingURL=pv-create-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/pv-create/pv-create.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-list-ul\"></i>\n                <a [routerLink]=\"['/pv-list']\">{{'pv-list' | translate}}</a>\n            </li>\n            <li class=\"breadcrumb-item active\">\n                <i class=\"fa fa-file-o\"></i>  {{ getMode() | translate}}{{'pv-list' | translate}}\n            </li>\n        </div>\n        <div class=\"col-md-4\">\n            PV\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keypress)=\"searching($event);\" placeholder=\"{{'search' | translate}} {{'docno' | translate}}\">\n        </div>\n    </div>\n</ol>\n<app-account-header [header]=\"'pv'\" [dataForm]=\"accountForm\" (addNew)=\"addNew()\" (date)=\"docdate($event)\"></app-account-header>\n<app-account-form [accountHeader]=\"'pv-debit'\" [datas]=\"accountForm.debits\" [accountTotal]=\"accountForm.totaldebit\" (accountItems)=\"onDebits($event)\"></app-account-form>\n<hr>\n<app-account-form [accountHeader]=\"'pv-credit'\" [datas]=\"accountForm.credits\" [accountTotal]=\"accountForm.totalcredit\" (accountItems)=\"onCredits($event)\"></app-account-form>\n<hr>\n<div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n        <fieldset class=\"form-group\">\n            <label>{{'remark' | translate}}</label>\n            <textarea class=\"form-control\" rows=\"6\" cols=\"50\" [(ngModel)]=\"accountForm.remark\" [ngModelOptions]=\"{standalone: true}\"\n                placeholder=\"{{'remark-inbox' | translate}}\"></textarea>\n        </fieldset>\n    </div>\n    <div class=\"col-md-3\"></div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n        <button type=\"button\" class=\"btn btn-success full\" [disabled]=\"isSave\" (click)=\"onSave()\">{{'save' | translate}}</button>\n    </div>\n    <div class=\"col-md-3\"></div>\n    <!-- <div class=\"col-md-4\">\n        <button type=\"button\" class=\"btn btn-danger full\" (click)=\"onCancel()\">{{'cancel' | translate}}</button>\n    </div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/pv-create/pv-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full {\n  width: 100%; }\n\n.breadcrumb .col-md-8 {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important; }\n\n.breadcrumb .col-md-4 input {\n  display: inline !important;\n  width: 90% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/pv-create/pv-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_model__ = __webpack_require__("../../../../../src/app/layout/account.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_create_account_create_service__ = __webpack_require__("../../../../../src/app/layout/account-create/account-create.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jv_create_jv_create_service__ = __webpack_require__("../../../../../src/app/layout/jv-create/jv-create.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PvCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PvCreateComponent = (function () {
    function PvCreateComponent(accountCreateService, jvCreateService, translate) {
        this.accountCreateService = accountCreateService;
        this.jvCreateService = jvCreateService;
        this.translate = translate;
        this.accountForm = new __WEBPACK_IMPORTED_MODULE_2__account_model__["a" /* AccountFormModel */]();
        this.account = new __WEBPACK_IMPORTED_MODULE_2__account_model__["c" /* AccountModel */]();
        this.type = 'PV';
        this.searchText = '';
        this.isSave = false;
    }
    PvCreateComponent.prototype.ngOnInit = function () {
    };
    PvCreateComponent.prototype.getMode = function () {
        return this.accountForm._id ? 'update' : 'create';
    };
    PvCreateComponent.prototype.searching = function (e) {
        if (e.keyCode == 13) {
            if (this.accountForm.debits || this.accountForm.credits || this.accountForm.remark) {
                this.currentLang = this.translate.currentLang;
                if (this.currentLang === 'th') {
                    var res = confirm('คุณต้องการยกเลิกการทำรายการนี้?');
                    if (res) {
                        // alert('ค้นหา');
                        this.searchAccount(this.searchText);
                    }
                }
                else {
                    var res = confirm('Would you like to cancel this transaction?');
                    if (res) {
                        // alert('Search');
                        this.searchAccount(this.searchText);
                    }
                }
            }
            else {
                this.searchAccount(this.searchText);
            }
        }
    };
    PvCreateComponent.prototype.searchAccount = function (searchText) {
        var _this = this;
        this.jvCreateService.searchAccount('PV' + searchText).then(function (data) {
            if (data._id) {
                data.docdate = new Date(data.docdate);
                _this.accountForm = data;
            }
            else {
                _this.currentLang = _this.translate.currentLang;
                if (_this.currentLang === 'th') {
                    alert('ไม่พบ เลขที่เอกสาร "PV' + searchText + '"');
                    _this.accountForm = new __WEBPACK_IMPORTED_MODULE_2__account_model__["a" /* AccountFormModel */]();
                    _this.accountForm.docdate = new Date();
                }
                else {
                    alert('"PV' + searchText + '" Not found.');
                }
            }
        }, function (error) {
            // alert();
            console.log(error);
        });
    };
    PvCreateComponent.prototype.docdate = function (date) {
        this.accountForm.docdate = date;
    };
    PvCreateComponent.prototype.onDebits = function (debit) {
        this.accountForm.debits = debit.accounts;
        this.accountForm.totaldebit = debit.totalaccount;
    };
    PvCreateComponent.prototype.onCredits = function (credit) {
        this.accountForm.credits = credit.accounts;
        this.accountForm.totalcredit = credit.totalaccount;
    };
    PvCreateComponent.prototype.onSave = function () {
        this.currentLang = this.translate.currentLang;
        if (!this.accountForm.debits || this.accountForm.debits.length < 1) {
            if (this.currentLang === 'th') {
                alert('กรุณาระบุข้อมูลเดบิต');
            }
            else {
                alert('Please fill debit.');
            }
            return false;
        }
        if (!this.accountForm.credits || this.accountForm.credits.length < 1) {
            if (this.currentLang === 'th') {
                alert('กรุณาระบุข้อมูลเครดิต');
            }
            else {
                alert('Please fill credit.');
            }
            return false;
        }
        if (this.accountForm.totaldebit !== this.accountForm.totalcredit) {
            if (this.currentLang === 'th') {
                alert('แจ้งเตือน : ราคาเดบิตและเครดิตไม่เท่ากัน กรุณาระบุให้เท่ากัน');
            }
            else {
                alert('Warning : Debit and credit prices are not equal. Please specify the same.');
            }
            return false;
        }
        this.accountForm.gltype = this.type;
        if (this.accountForm._id) {
            this.update();
        }
        else {
            this.create();
        }
    };
    PvCreateComponent.prototype.create = function () {
        var _this = this;
        this.isSave = true;
        this.jvCreateService.postJv(this.accountForm).then(function (data) {
            if (_this.currentLang === 'th') {
                alert('สำเร็จ เลขที่เอกสาร "' + data.docno + '"');
            }
            else {
                alert('Complate Docno "' + data.docno + '"');
            }
            _this.isSave = false;
            data.docdate = new Date(data.docdate);
            _this.accountForm = data;
            // window.location.reload();
        }, function (error) {
            _this.isSave = false;
            if (error._body.message) {
                alert(JSON.parse(error._body).message);
            }
            else {
                alert(error);
            }
        });
    };
    PvCreateComponent.prototype.update = function () {
        var _this = this;
        this.isSave = true;
        this.jvCreateService.putJv(this.accountForm).then(function (data) {
            if (_this.currentLang === 'th') {
                alert('อัพเดทสำเร็จ เลขที่เอกสาร "' + data.docno + '"');
            }
            else {
                alert('Update complate Docno "' + data.docno + '"');
            }
            _this.isSave = false;
            data.docdate = new Date(data.docdate);
            _this.accountForm = data;
            // window.location.reload();
        }, function (error) {
            _this.isSave = false;
            if (error._body.message) {
                alert(JSON.parse(error._body).message);
            }
            else {
                alert(error);
            }
        });
    };
    PvCreateComponent.prototype.addNew = function () {
        this.accountForm = new __WEBPACK_IMPORTED_MODULE_2__account_model__["a" /* AccountFormModel */]();
        this.accountForm.docdate = new Date();
        this.searchText = '';
    };
    return PvCreateComponent;
}());
PvCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pv-create',
        template: __webpack_require__("../../../../../src/app/layout/pv-create/pv-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/pv-create/pv-create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__account_create_account_create_service__["a" /* AccountCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__account_create_account_create_service__["a" /* AccountCreateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__jv_create_jv_create_service__["a" /* JvCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__jv_create_jv_create_service__["a" /* JvCreateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object])
], PvCreateComponent);

var _a, _b, _c;
//# sourceMappingURL=pv-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/pv-create/pv-create.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pv_create_routing_module__ = __webpack_require__("../../../../../src/app/layout/pv-create/pv-create-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pv_create_component__ = __webpack_require__("../../../../../src/app/layout/pv-create/pv-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_components_module__ = __webpack_require__("../../../../../src/app/shared/components/components.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PvCreateModule", function() { return PvCreateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PvCreateModule = (function () {
    function PvCreateModule() {
    }
    return PvCreateModule;
}());
PvCreateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__pv_create_routing_module__["a" /* PvCreateRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__shared_components_components_module__["a" /* ComponentModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__pv_create_component__["a" /* PvCreateComponent */]]
    })
], PvCreateModule);

//# sourceMappingURL=pv-create.module.js.map

/***/ })

});
//# sourceMappingURL=15.chunk.js.map