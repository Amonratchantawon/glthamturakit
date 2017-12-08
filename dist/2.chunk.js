webpackJsonp([2],{

/***/ "../../../../../src/app/layout/account/account-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_component__ = __webpack_require__("../../../../../src/app/layout/account/account.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__account_component__["a" /* AccountComponent */] }
];
var AccountRoutingModule = (function () {
    function AccountRoutingModule() {
    }
    return AccountRoutingModule;
}());
AccountRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AccountRoutingModule);

//# sourceMappingURL=account-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item active\">\r\n            <i class=\"fa fa-list-ul\"></i> {{'account' | translate}}</li>\r\n    </ol>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-center\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [routerLink]=\"['/account-create']\">{{'new-account' | translate}}</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"ui-tree-list\">\r\n                <ui-tree [data]=\"accounts\" [key]=\"key\" (treeCallback)=\"treeReturn($event)\" (treeEditCallback)=\"onEdit($event)\" (treeDeleteCallback)=\"onDelete($event)\"></ui-tree>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/account/account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui-tree-list {\n  padding-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__("../../../../../src/app/layout/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_model__ = __webpack_require__("../../../../../src/app/layout/account.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountComponent = (function () {
    function AccountComponent(accountService, router, translate) {
        this.accountService = accountService;
        this.router = router;
        this.translate = translate;
        this.key = 'children';
        this.data = new __WEBPACK_IMPORTED_MODULE_4__account_model__["b" /* AccountListModel */]();
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getAccount();
    };
    AccountComponent.prototype.getAccount = function () {
        var _this = this;
        this.accountService.getAccount().then(function (data) {
            _this.data.accounts = data;
            _this.data.accounts.sort(function (a, b) { return (a.accountno > b.accountno) ? 1 : ((b.accountno > a.accountno) ? -1 : 0); });
            _this.accounts = _this.listToTree(_this.data.accounts);
        }, function (error) {
            console.error(error);
        });
    };
    AccountComponent.prototype.listToTree = function (data) {
        var ID_KEY = 'accountno';
        var PARENT_KEY = 'parent';
        var CHILDREN_KEY = 'children';
        var tree = [], childrenOf = {};
        var item, id, parentId;
        for (var i = 0, length = data.length; i < length; i++) {
            item = data[i];
            id = item[ID_KEY];
            parentId = item[PARENT_KEY] || 0;
            // every item may have children
            childrenOf[id] = childrenOf[id] || [];
            // init its children
            item[CHILDREN_KEY] = childrenOf[id];
            if (parentId != 0) {
                // init its parent's children object
                childrenOf[parentId] = childrenOf[parentId] || [];
                // push it into its parent's children object
                childrenOf[parentId].push(item);
            }
            else {
                tree.push(item);
            }
        }
        ;
        return tree;
    };
    AccountComponent.prototype.treeReturn = function (event) {
        // console.log('CLICK : ', event);
        alert(JSON.stringify(event));
    };
    AccountComponent.prototype.onEdit = function (event) {
        // console.log('EDIT : ', event);
        this.router.navigate(['/account-create'], { queryParams: { item: JSON.stringify(event) } });
    };
    AccountComponent.prototype.onDelete = function (event) {
        var _this = this;
        this.currentLang = this.translate.currentLang;
        if (this.currentLang === 'th') {
            var res = confirm('คุณต้องการลบรายการนี้?');
            if (!res) {
                return;
            }
        }
        else {
            var res = confirm('Would you like to delete this transaction?');
            if (!res) {
                return;
            }
        }
        this.accountService.deleteAccount(event._id).then(function (data) {
            if (_this.currentLang === 'th') {
                alert('ลบข้อมูล ' + data.name + ' สำเร็จ');
            }
            else {
                alert('Delete ' + data.name + ' success.');
            }
            _this.ngOnInit();
        }, function (error) {
            if (_this.currentLang === 'th') {
                alert('ลบข้อมูลไม่สำเร็จ กรุณาลองใหม่');
            }
            else {
                alert('Delete fail please try again.');
            }
        });
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../src/app/layout/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/account/account.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object])
], AccountComponent);

var _a, _b, _c;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_component__ = __webpack_require__("../../../../../src/app/layout/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_routing_module__ = __webpack_require__("../../../../../src/app/layout/account/account-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_ui_tree_ui_tree__ = __webpack_require__("../../../../../src/app/shared/components/ui-tree/ui-tree.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 //importing the module

var AccountModule = (function () {
    function AccountModule() {
    }
    return AccountModule;
}());
AccountModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__account_routing_module__["a" /* AccountRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__["Ng2SearchPipeModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__account_component__["a" /* AccountComponent */], __WEBPACK_IMPORTED_MODULE_7__shared_components_ui_tree_ui_tree__["a" /* UiTree */]]
    })
], AccountModule);

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/ui-tree/ui-tree.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"just-padding\" *ngIf=\"items\"> -->\r\n    <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4\" text-center>\r\n            <nav class=\"navbar\">\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'search' | translate}}\" name=\"search\" [(ngModel)]=\"filter\">\r\n            </nav>\r\n        </div>\r\n        <div class=\"col-4\"></div>\r\n    </div>\r\n    <div class=\"card-block table-responsive\">\r\n        <table class=\"table\">\r\n            <thead class=\"thead-default\">\r\n                <tr>\r\n                    <th>รหัสบัญชี</th>\r\n                    <th>ชื่อบัญชี</th>\r\n                    <th>ประเภทบัญชี</th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items | filter:filter; let i = index\" (click)=\"clickItem(item)\">\r\n                    <th scope=\"row\">{{item.accountno}}</th>\r\n                    <td>{{item.name}}</td>\r\n                    <td>{{ item.accounttype.accounttypeno }}-{{item.accounttype.accounttypename}}</td>\r\n                    <td><i class=\"fa fa-trash icon-trash\" (click)=\"onDeleteItem(item)\"></i></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <div class=\"list-group list-group-root\" class=\"main-list\" *ngFor=\"let item of items | filter:filter; let i = index\" (click)=\"clickItem(item)\">\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 \">\r\n                    <i class=\"fa fa-caret-right none\" [ngClass]=\"{'show': !item.expand && item[key].length}\"></i>\r\n                    <i class=\"fa fa-caret-down none\" [ngClass]=\"{'show': item.expand && item[key].length}\"></i>\r\n                    &nbsp; {{item.accountno}} &nbsp; {{item.name}} &nbsp;\r\n                    <span class=\"{{item.status === 'active' ? 'active': 'inactive'}}\">({{item.status}})</span>\r\n\r\n\r\n                </div>\r\n                <div class=\"col-4\">\r\n                    {{ item.accounttype.accounttypeno }}-{{item.accounttype.accounttypename}}\r\n                </div>\r\n                <div class=\"col-sm-1\">\r\n                    <i class=\"fa fa-edit icon-edit\" (click)=\"onEditItem(item)\"></i>\r\n                </div>\r\n                <div class=\"col-1\">\r\n                    <i class=\"fa fa-trash icon-trash\" (click)=\"onDeleteItem(item)\"></i>\r\n                </div>\r\n\r\n            </div>\r\n            <hr>\r\n\r\n        </div>\r\n        <ui-tree *ngIf=\"item[key].length && item.expand == true\" [key]=\"key\" [data]=\"item[key]\" (treeCallback)=\"treeReturn($event)\"\r\n            (treeEditCallback)=\"onEdit($event)\"></ui-tree>\r\n    </div> -->\r\n<!-- </div> -->"

/***/ }),

/***/ "../../../../../src/app/shared/components/ui-tree/ui-tree.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".just-padding {\n  padding-left: 30px; }\n\nhr {\n  margin-top: -15px; }\n\n.icon-edit {\n  position: absolute !important;\n  right: 30px !important;\n  color: #4CAF50;\n  margin-top: 1px; }\n\n.icon-trash {\n  position: absolute !important;\n  right: 60px !important;\n  color: #f44336; }\n\n.none {\n  color: transparent; }\n\n.show {\n  color: #666666 !important; }\n\n.active {\n  color: #4CAF50 !important; }\n\n.inactive {\n  color: #F44336 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/ui-tree/ui-tree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiTree; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiTree = (function () {
    function UiTree() {
        this.treeCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.treeEditCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.treeDeleteCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UiTree.prototype.clickItem = function (item) {
        window.event.stopPropagation();
        // item.expand = item.expand ? false : true;
        // this.treeCallback.emit(item);
        this.treeEditCallback.emit(item);
    };
    UiTree.prototype.onEditItem = function (item) {
        window.event.stopPropagation();
        this.treeEditCallback.emit(item);
    };
    UiTree.prototype.onDeleteItem = function (item) {
        window.event.stopPropagation();
        this.treeDeleteCallback.emit(item);
    };
    UiTree.prototype.onEdit = function (event) {
        window.event.stopPropagation();
        this.treeEditCallback.emit(event);
    };
    UiTree.prototype.treeReturn = function (event) {
        this.treeCallback.emit(event);
    };
    return UiTree;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
    __metadata("design:type", Object)
], UiTree.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('key'),
    __metadata("design:type", String)
], UiTree.prototype, "key", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UiTree.prototype, "treeCallback", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UiTree.prototype, "treeEditCallback", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UiTree.prototype, "treeDeleteCallback", void 0);
UiTree = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "ui-tree",
        template: __webpack_require__("../../../../../src/app/shared/components/ui-tree/ui-tree.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/ui-tree/ui-tree.scss")]
    })
], UiTree);

//# sourceMappingURL=ui-tree.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map