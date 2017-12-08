webpackJsonp([28],{

/***/ "../../../../../src/app/layout/account-create/account-create-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_create_component__ = __webpack_require__("../../../../../src/app/layout/account-create/account-create.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountCreateRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__account_create_component__["a" /* AccountCreateComponent */] }
];
var AccountCreateRoutingModule = (function () {
    function AccountCreateRoutingModule() {
    }
    return AccountCreateRoutingModule;
}());
AccountCreateRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AccountCreateRoutingModule);

//# sourceMappingURL=account-create-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/account-create/account-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item\">\r\n            <i class=\"fa fa-list-ul\"></i>\r\n            <a [routerLink]=\"['/account']\">{{'account' | translate}}</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item active\">\r\n            <i class=\"fa fa-edit\"></i> {{'new-account' | translate}}</li>\r\n    </ol>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3 col-sm-1\">\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-10\">\r\n            <form role=\"form\">\r\n                <fieldset class=\"form-group\">\r\n                    <label>{{'account-no' | translate}}</label>\r\n                    <span class=\"danger\">*</span>\r\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"account.accountno\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"account._id\">\r\n                </fieldset>\r\n                <fieldset class=\"form-group\">\r\n                    <label>{{'account-name' | translate}}</label>\r\n                    <span class=\"danger\">*</span>\r\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"account.name\" [ngModelOptions]=\"{standalone: true}\">\r\n                </fieldset>\r\n                <fieldset class=\"form-group\">\r\n                    <label>{{'account-type' | translate}}</label>\r\n                    <select [(ngModel)]=\"accounttypeId\" (change)=\"onChangeType(accounttypeId)\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n                        <option *ngFor=\"let type of accountTypeList\" [value]=\"type._id\" [attr.selected]=\"accounttypeId === type._id  ? true : null\">\r\n                            {{type.accounttypeno}} {{type.accounttypename}}\r\n                        </option>\r\n                    </select>\r\n                </fieldset>\r\n                <!-- <fieldset class=\"form-group\">\r\n                    <label>{{'vat' | translate}}</label>\r\n                    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"account.vat\" [ngModelOptions]=\"{standalone: true}\">\r\n                </fieldset>\r\n                <fieldset class=\"form-group\">\r\n                    <label>{{'unit-price' | translate}}</label>\r\n                    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"account.unitprice\" [ngModelOptions]=\"{standalone: true}\">\r\n                </fieldset>\r\n                <fieldset class=\"form-group\">\r\n                    <label>{{'parent' | translate}}</label>\r\n                    <select [(ngModel)]=\"account.parent\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"account._id\" class=\"form-control\">\r\n                        <option *ngFor=\"let parent of parents.accounts\" [ngValue]=\"parent.accountno\" [attr.selected]=\"account.parent === parent.accountno ? true : null\">\r\n                            {{parent.accountno}} {{parent.name}}\r\n                        </option>\r\n                    </select>\r\n                </fieldset>\r\n                <fieldset class=\"form-group\">\r\n                    <label>{{'status' | translate}}</label>\r\n                    <select [(ngModel)]=\"account.status\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n                        <option *ngFor=\"let sta of status\" [ngValue]=\"sta\" [attr.selected]=\"account.parent === sta ? true : null\">\r\n                            {{sta}}\r\n                        </option>\r\n                    </select>\r\n                </fieldset> -->\r\n                <div class=\"col-12 text-center\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveAccount()\">{{'save' | translate}}</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-1\">\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/account-create/account-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".danger {\n  color: #F44336; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/account-create/account-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_create_service__ = __webpack_require__("../../../../../src/app/layout/account-create/account-create.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_model__ = __webpack_require__("../../../../../src/app/layout/account.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_type_list_account_type_list_service__ = __webpack_require__("../../../../../src/app/layout/account-type-list/account-type-list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountCreateComponent = (function () {
    function AccountCreateComponent(accountCreateService, router, route, translate, accountTypeListService) {
        this.accountCreateService = accountCreateService;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.accountTypeListService = accountTypeListService;
        this.parents = new __WEBPACK_IMPORTED_MODULE_4__account_model__["b" /* AccountListModel */]();
        this.account = new __WEBPACK_IMPORTED_MODULE_4__account_model__["c" /* AccountModel */]();
        this.accounttypeId = '';
        this.status = ['active', 'inactive'];
    }
    AccountCreateComponent.prototype.ngOnInit = function () {
        this.getAccount();
        this.getAccountTypeList();
    };
    AccountCreateComponent.prototype.getAccountTypeList = function () {
        var _this = this;
        this.accountTypeListService.getAccountTypeList().then(function (data) {
            _this.accountTypeList = data;
        }, function (error) {
            if (JSON.parse(error._body).message) {
                alert(JSON.parse(error._body).message.split('index:')[1]);
            }
        });
    };
    AccountCreateComponent.prototype.getAccount = function () {
        var _this = this;
        this.accountCreateService.getAccount().then(function (data) {
            _this.parents.accounts = data;
            _this.parents.accounts.unshift({
                _id: '',
                name: '--- No Parent ---',
                accountno: '',
                parent: '',
                status: '',
                accounttype: null
            });
            _this.parents.accounts.sort(function (a, b) { return (a.accountno > b.accountno) ? 1 : ((b.accountno > a.accountno) ? -1 : 0); });
            _this.getParam();
        }, function (error) {
            console.error(error);
        });
    };
    AccountCreateComponent.prototype.getParam = function () {
        var _this = this;
        this.subParams = this.route
            .queryParams
            .subscribe(function (params) {
            var item = params['item'];
            if (item && item !== '') {
                _this.account = JSON.parse(item);
                if (_this.account.accounttype) {
                    _this.accounttypeId = _this.account.accounttype._id;
                }
            }
        });
        this.subParams.unsubscribe();
    };
    AccountCreateComponent.prototype.onChangeType = function (id) {
        var length = this.accountTypeList.length;
        for (var index = 0; index < length; index++) {
            if (id === this.accountTypeList[index]._id) {
                this.account.accounttype = this.accountTypeList[index];
                return;
            }
        }
    };
    AccountCreateComponent.prototype.saveAccount = function () {
        var _this = this;
        this.currentLang = this.translate.currentLang;
        if (!this.account.accounttype || !this.account.accounttype._id) {
            if (this.currentLang === 'th') {
                alert('กรุณาระบุประเภทบัญชี');
            }
            else {
                alert('Please fill account type.');
            }
            return false;
        }
        if (!this.account.accountno) {
            if (this.currentLang === 'th') {
                alert('กรุณาระบุรหัสบัญชี');
            }
            else {
                alert('Please fill account no.');
            }
            return false;
        }
        if (!this.account.name) {
            if (this.currentLang === 'th') {
                alert('กรุณาระบุชื่อบัญชี');
            }
            else {
                alert('Please fill account name.');
            }
            return false;
        }
        if (this.account._id) {
            this.accountCreateService.putAccount(this.account).then(function (data) {
                _this.router.navigate(['/account']);
            }, function (error) {
                _this.error = JSON.parse(error._body).message;
                alert(_this.error);
            });
        }
        else {
            this.accountCreateService.postAccount(this.account).then(function (data) {
                _this.router.navigate(['/account']);
            }, function (error) {
                if (JSON.parse(error._body).message) {
                    alert(JSON.parse(error._body).message.split('index:')[1]);
                }
            });
        }
    };
    return AccountCreateComponent;
}());
AccountCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account-create',
        template: __webpack_require__("../../../../../src/app/layout/account-create/account-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/account-create/account-create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__account_create_service__["a" /* AccountCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__account_create_service__["a" /* AccountCreateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__account_type_list_account_type_list_service__["a" /* AccountTypeListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__account_type_list_account_type_list_service__["a" /* AccountTypeListService */]) === "function" && _e || Object])
], AccountCreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=account-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/account-create/account-create.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_create_routing_module__ = __webpack_require__("../../../../../src/app/layout/account-create/account-create-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_create_component__ = __webpack_require__("../../../../../src/app/layout/account-create/account-create.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCreateModule", function() { return AccountCreateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AccountCreateModule = (function () {
    function AccountCreateModule() {
    }
    return AccountCreateModule;
}());
AccountCreateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__account_create_routing_module__["a" /* AccountCreateRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__account_create_component__["a" /* AccountCreateComponent */]]
    })
], AccountCreateModule);

//# sourceMappingURL=account-create.module.js.map

/***/ })

});
//# sourceMappingURL=28.chunk.js.map