webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div>\r\n\r\n    <header>\r\n        <div class=\"container\">\r\n            <nav class=\"app-menu navbar navbar-default\" role=\"navigation\"></nav>\r\n        </div>\r\n    </header>\r\n    \r\n    <router-outlet></router-outlet>\r\n\r\n    <footer>\r\n        <div class=\"container\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </footer>\r\n    \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  background-color: #2bcbe4; }\n  header .navbar {\n    margin-bottom: 0; }\n  header .navbar-default {\n    background-color: transparent;\n    border: none; }\n\nfooter {\n  background: #232f3e;\n  margin-top: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(route) {
        this.route = route;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__ = __webpack_require__("./src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products_component__ = __webpack_require__("./src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__price_pipe__ = __webpack_require__("./src/app/price.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__scmd_pipe__ = __webpack_require__("./src/app/scmd.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shopping_cart_service__ = __webpack_require__("./src/app/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blankpage_blankpage_component__ = __webpack_require__("./src/app/blankpage/blankpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__btn_add_cart_directive__ = __webpack_require__("./src/app/btn-add-cart.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_11__products_products_component__["a" /* ProductsComponent */] },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_16__blankpage_blankpage_component__["a" /* BlankpageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__price_pipe__["a" /* PricePipe */],
            __WEBPACK_IMPORTED_MODULE_14__scmd_pipe__["a" /* ScmdPipe */],
            __WEBPACK_IMPORTED_MODULE_16__blankpage_blankpage_component__["a" /* BlankpageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__btn_add_cart_directive__["a" /* BtnAddCartDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_15__shopping_cart_service__["a" /* ShoppingCartService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/blankpage/blankpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-products\">\r\n    <div class=\"products-center row\">\r\n      <div class=\"products-img col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <h3>Coding</h3>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/blankpage/blankpage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-products .products-center {\n  min-height: 280px; }\n  .page-products .products-center h3 {\n    font-family: 'Open Sans Condensed', sans-serif;\n    font-size: 40px;\n    text-align: center;\n    line-height: 280px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/blankpage/blankpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankpageComponent = (function () {
    function BlankpageComponent() {
    }
    BlankpageComponent.prototype.ngOnInit = function () {
    };
    return BlankpageComponent;
}());
BlankpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-blankpage',
        template: __webpack_require__("./src/app/blankpage/blankpage.component.html"),
        styles: [__webpack_require__("./src/app/blankpage/blankpage.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BlankpageComponent);

//# sourceMappingURL=blankpage.component.js.map

/***/ }),

/***/ "./src/app/btn-add-cart.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnAddCartDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluebird__ = __webpack_require__("./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bluebird__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BtnAddCartDirective = (function () {
    function BtnAddCartDirective(el) {
        this.el = el;
    }
    BtnAddCartDirective.prototype.onClick = function () {
        var elem = __WEBPACK_IMPORTED_MODULE_1_jquery__(this.el.nativeElement);
        var checkIcon = elem.addClass('is-added').find('path').eq(0);
        this.drawIcon(checkIcon).then(function () {
            return new __WEBPACK_IMPORTED_MODULE_2_bluebird__["Promise"](function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 600);
            });
        }).then(function () {
            return new __WEBPACK_IMPORTED_MODULE_2_bluebird__["Promise"](function (resolve, reject) {
                elem.removeClass('is-added').find('em').on('transitionend', function () {
                    resolve();
                });
            });
        }).then(function () {
            elem.find('path').css('stroke-dashoffset', '19.79');
        });
    };
    BtnAddCartDirective.prototype.drawIcon = function (elementRef) {
        return new __WEBPACK_IMPORTED_MODULE_2_bluebird__["Promise"](function (resolve, reject) {
            elementRef.animate({
                'stroke-dashoffset': 0
            }, 300, function () {
                resolve();
            });
        });
    };
    return BtnAddCartDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BtnAddCartDirective.prototype, "onClick", null);
BtnAddCartDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appBtnAddCart]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], BtnAddCartDirective);

var _a;
//# sourceMappingURL=btn-add-cart.directive.js.map

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-footer row\">\r\n  <div class=\"section col-xs-12 col-sm-4 col-md-4 col-lg-4\">\r\n    <h2>Get to Know Us</h2>\r\n    <ul>\r\n      <li><a>Careers</a></li>\r\n      <li><a>About</a></li>\r\n      <li><a>Investor Relations</a></li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"section col-xs-12 col-sm-4 col-md-4 col-lg-4\">\r\n    <h2>Make Money with Us</h2>\r\n    <ul>\r\n      <li><a>Sell on our store</a></li>\r\n      <li><a>Sell Your Service on our Store</a></li>\r\n      <li><a>Become an Affiliate</a></li>\r\n      <li><a>Advertise Your Products</a></li>\r\n      <li><a>Self-Publish with Us</a></li>\r\n      <li><a>Become a Vendor</a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"section col-xs-12 col-sm-4 col-md-4 col-lg-4\">\r\n    <h2>Let Us Help You</h2>\r\n    <ul>\r\n      <li><a>Your Account</a></li>\r\n      <li><a>Your Orders</a></li>\r\n      <li><a>Shipping Rates &amp; Policies</a></li>\r\n      <li><a>Returns &amp; Replacements</a></li>\r\n      <li><a>Manage Your Contents and Devices</a></li>\r\n      <li><a>Help</a></li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-footer .section {\n  padding: 15px 30px; }\n  .page-footer .section h2 {\n    color: #fff;\n    font-weight: 700;\n    font-size: 16px;\n    margin-bottom: 15px; }\n  .page-footer .section ul {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n    .page-footer .section ul li {\n      list-style: none;\n      padding: 0;\n      margin: 8px 0; }\n      .page-footer .section ul li a {\n        color: #ddd; }\n        .page-footer .section ul li a:hover {\n          text-decoration: none;\n          cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("./src/app/footer/footer.component.html"),
        styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-login container\">\r\n  <div class=\"login-center row\">\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\r\n      <h3>\r\n        Login to Access Amazing Benefits\r\n        <span class=\"color\">!!!</span>\r\n      </h3>\r\n      <img src=\"../../assets/back1.jpg\" class=\"img-thumbnail img-responsive\">\r\n      <p>\r\n        Duis leo risus, vehicula luctus nunc. Quiue rhoncus, a sodales enim arcu quis turpis. Duis leo risus, condimentum ut posuere\r\n        ac, vehicula luctus nunc. Quisque rhoncus, a sodales enim arcu quis turpis.\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\r\n      <div class=\"login-input\">\r\n        <form class=\"form-horizontal\" #f=\"ngForm\" (ngSubmit)=\"doLogin(f)\" novalidate>\r\n          <legend>Login</legend>\r\n          <div class=\"form-group\">\r\n            <label for=\"username\" class=\"form-label col-sm-3\">User name</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" ngModel class=\"form-control\" id=\"username\" name=\"username\"  required/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\" class=\"form-label col-sm-3\">Password</label>\r\n            <div class=\"col-sm-9\">\r\n              <input ngModel type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" required />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label col-sm-3\"></label>\r\n            <div class=\"checkbox col-sm-9 hidden\">\r\n              <label>\r\n                  <input type=\"checkbox\" ngModel name=\"rememberMe\" />\r\n                  Remember me?\r\n                </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label col-sm-3\"></label>\r\n            <div class=\"col-sm-9\">\r\n              <button class=\"btn btn-primary\" type=\"submit\" data-loading-text=\"<i class='fa fa-circle-o-notch fa-spin'></i> We are signing you in\">Sign In</button>\r\n              <button class=\"btn btn-default\" type=\"reset\">Reset</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-login {\n  margin-top: 40px;\n  background-color: #fafafa; }\n  .page-login .login-center h3 {\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 22px; }\n  .page-login .login-center .login-input {\n    background: #fff;\n    border: 1px dashed #aaa;\n    box-shadow: 0px 0px 1px #999;\n    border-radius: 3px;\n    margin: 30px auto;\n    padding: 15px;\n    width: 80%; }\n    .page-login .login-center .login-input .ng-invalid.ng-touched {\n      border-color: #a94442;\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n      .page-login .login-center .login-input .ng-invalid.ng-touched:focus {\n        border-color: #843534;\n        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483; }\n  .page-login .login-center img {\n    width: 100%;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_cart_service__ = __webpack_require__("./src/app/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, elementRef, userSvc, sessionSvc, shoppingCartSvc) {
        this.router = router;
        this.elementRef = elementRef;
        this.userSvc = userSvc;
        this.sessionSvc = sessionSvc;
        this.shoppingCartSvc = shoppingCartSvc;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.sessionSvc.loginUserInfo = null;
        this.shoppingCartSvc.removeAll();
    };
    LoginComponent.prototype.doLogin = function (form) {
        var _this = this;
        var $loginBtn = $('button[type=\'submit\']', this.elementRef.nativeElement);
        if (!form.valid) {
            alert("Please input the User Name and Password.");
            return;
        }
        $loginBtn.button('loading');
        this.userSvc.login(form.value.username, form.value.password)
            .then(function (userInfo) {
            $loginBtn.button('reset');
            _this.sessionSvc.loginUserInfo = userInfo;
            _this.router.navigate(['products']);
        }).catch(function (errorMsg) {
            //TODO: show error message popup
            $loginBtn.button('reset');
            alert(errorMsg);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Brand and toggle get grouped for better mobile display -->\r\n<div class=\"navbar-header\">\r\n  <a class=\"navbar-brand\" href=\"#\">OlsonKart</a>\r\n</div>\r\n\r\n<div class=\"dropdown visible-xs visible-sm col-sm-6\">\r\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu-dropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n    aria-expanded=\"true\">\r\n    {{ activeItem }}\r\n    <span class=\"caret\"></span>\r\n  </button>\r\n  <ul class=\"dropdown-menu\" aria-labelledby=\"menu-dropdown\">\r\n    <li *ngFor=\"let menuItem of menuItems\">\r\n      <a [routerLink]=\"menuItem.url\">{{menuItem.displayName}}</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<div class=\"navbar-buttons\">\r\n  <a routerLink=\"/login\" *ngIf=\"!sessionSvc.userLoginState\" class=\"btn btn-sm btn-primary\">Login</a>\r\n  <a (click)=\"Logout()\" *ngIf=\"sessionSvc.userLoginState\" class=\"btn btn-sm btn-primary\">Logout</a>\r\n  <a routerLink=\"/signup\" class=\"btn btn-sm btn-primary\">Sign up</a>\r\n  <a data-toggle=\"modal\" data-target=\"#shoppingcart\" class=\"btn btn-sm btn-primary\">{{sessionSvc.ShoppingCart | scmd}}</a>\r\n</div>\r\n\r\n\r\n<!-- Collect the nav links, forms, and other content for toggling -->\r\n<div class=\"navbar-collapse hidden-xs hidden-sm\">\r\n  <ul class=\"nav navbar-nav\">\r\n    <!-- <li class=\"active\"><a href=\"/products/apple\">Home</a></li> -->\r\n    <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n      <a [routerLink]=\"menuItem.url\">{{menuItem.displayName}}</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"shoppingcart\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title \">Shopping Cart</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Quantity</th>\r\n              <th>Price</th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let unit of sessionSvc.ShoppingCart.items\">\r\n              <td class=\"color\">\r\n                {{unit.product.name}}\r\n              </td>\r\n              <td class=\"trquantity\">\r\n                <div class=\"quantity\">\r\n                  <div class=\"input-group spinner\">\r\n                    <input type=\"text\" class=\"form-control\" value=\"{{unit.quantity}}\">\r\n                    <div class=\"input-group-btn-vertical\">\r\n                      <button class=\"btn btn-default\" type=\"button\" (click)=\"addToCart(unit.product)\">\r\n                        <i class=\"fa fa-caret-up\"></i>\r\n                      </button>\r\n                      <button class=\"btn btn-default\" type=\"button\" (click)=\"deleteFromCart(unit.product)\">\r\n                        <i class=\"fa fa-caret-down\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                {{unit.price | price:'$'}}\r\n              </td>\r\n              <td>\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"DeletefromShoppingCart(unit.product)\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td></td>\r\n              <td>Total</td>\r\n              <td colspan=\"2\">{{sessionSvc.ShoppingCart.totalPrice | price:'$'}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Continue Shopping</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600);", ""]);

// module
exports.push([module.i, "@charset \"UTF-8\";\n.navbar-header .navbar-brand {\n  color: #fff;\n  font: 600 18px/1 'Source Sans Pro', sans-serif; }\n\n.navbar-nav a {\n  color: #fff; }\n  .navbar-nav a:hover {\n    color: #fff;\n    background-color: #6DCDDA; }\n\n.navbar-nav > .active > a, .navbar-nav > .active > a:hover {\n  background-color: #7BE2F1;\n  color: #fff; }\n\n.dropdown {\n  width: 230px;\n  margin: 10px auto; }\n  .dropdown .dropdown-toggle {\n    width: 100%;\n    text-align: left;\n    position: relative; }\n    .dropdown .dropdown-toggle .caret {\n      position: absolute;\n      right: 15px;\n      top: 50%;\n      margin-top: -2px; }\n\n@media (max-width: 768px) {\n  .navbar-header .navbar-brand {\n    display: block;\n    float: none;\n    margin: 15px auto;\n    text-align: center; } }\n\n.navbar-buttons {\n  padding: 10px 15px;\n  text-align: center; }\n  .navbar-buttons .btn {\n    margin: 0 5px; }\n    .navbar-buttons .btn.btn-primary {\n      background-color: #21a6bb;\n      border: none; }\n\n@media (min-width: 768px) {\n  .navbar-buttons {\n    float: right; } }\n\n.modal h4 {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  color: #777;\n  font-size: 16px; }\n\n.modal-body {\n  font-size: 13px; }\n\n.trquantity {\n  width: 33%；; }\n\n.quantity {\n  width: 50%; }\n\n.spinner input {\n  text-align: center; }\n\n.input-group-btn-vertical {\n  position: relative;\n  white-space: nowrap;\n  width: 2%;\n  vertical-align: middle;\n  display: table-cell; }\n\n.input-group-btn-vertical > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n  padding: 8px;\n  margin-left: -1px;\n  position: relative;\n  border-radius: 0; }\n\n.input-group-btn-vertical > .btn:first-child {\n  border-top-right-radius: 4px; }\n\n.input-group-btn-vertical > .btn:last-child {\n  margin-top: -2px;\n  border-bottom-right-radius: 4px; }\n\n.input-group-btn-vertical i {\n  position: absolute;\n  top: 0;\n  left: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_cart_service__ = __webpack_require__("./src/app/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuItem = (function () {
    function MenuItem() {
    }
    return MenuItem;
}());
var MenuComponent = (function () {
    function MenuComponent(route, sessionSvc, shoppingCartSvc) {
        this.route = route;
        this.sessionSvc = sessionSvc;
        this.shoppingCartSvc = shoppingCartSvc;
        this.activeItem = "Menu";
        this.menuItems = [
            { displayName: "Home", url: "/products" },
            { displayName: "Account", url: "/account" },
            { displayName: "Pages", url: "/pages" },
            { displayName: "Computers", url: "/computers" },
            { displayName: "Contact", url: "/contact" }
        ];
    }
    MenuComponent.prototype.Logout = function () {
        this.sessionSvc.loginUserInfo = null;
        this.shoppingCartSvc.removeAll();
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.events.subscribe(function (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                var findResult = _this.menuItems.find(function (m) { return m.url === e.url; });
                _this.activeItem = findResult ? findResult.displayName : "Menu";
            }
        });
    };
    MenuComponent.prototype.addToCart = function (product) {
        this.shoppingCartSvc.addToCart(product);
    };
    MenuComponent.prototype.deleteFromCart = function (product) {
        this.shoppingCartSvc.removeFormCart(product);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'nav.app-menu',
        template: __webpack_require__("./src/app/menu/menu.component.html"),
        styles: [__webpack_require__("./src/app/menu/menu.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _c || Object])
], MenuComponent);

var _a, _b, _c;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "./src/app/price.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PricePipe = (function () {
    function PricePipe() {
    }
    PricePipe.prototype.transform = function (value, unit) {
        // $ 1,234,567.00
        return unit + '' + value;
    };
    return PricePipe;
}());
PricePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'price'
    })
], PricePipe);

//# sourceMappingURL=price.pipe.js.map

/***/ }),

/***/ "./src/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird__ = __webpack_require__("./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.retrieveProduct = function (userInfo) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('RequestVerificationToken', userInfo.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a(function (resolve, reject) {
            _this.http
                .get("https://pwcfrontendtest.azurewebsites.net/getlist", options)
                .subscribe(function (data) {
                var products = new Array();
                products = data.json().res;
                resolve(products);
            });
        });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "./src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-products\">\r\n  <div class=\"products-center\">\r\n    <div class=\"products-img\">\r\n      <img src=\"../../assets/back.png\" class=\"img-responsive\" alt=\"\">\r\n    </div>\r\n    <div class=\"container\">\r\n      <div>\r\n        <h3>\r\n          It <span class=\"color\">'</span> Lorem ipsum <span class=\"color\">dolor</span> sit amet consectetur\r\n        </h3>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique est sit amet diam interdum semper. Vestibulum condimentum\r\n          ante urna, vel interdum odio accumsan id.\r\n        </p>\r\n        <div class=\"products-bor\">\r\n        </div>\r\n        <div class=\"products-list\">\r\n          <div *ngIf=\"!this.sessionSvc.userLoginState\" class=\"NoLogin\">\r\n          Please <a routerLink=\"/login\">Login</a> to view the product list.\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"this.sessionSvc.userLoginState\">\r\n            <div *ngFor=\"let product of products;\" class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n              <div class=\"item\">\r\n                <div class=\"item-img\">\r\n                  <img src=\"{{product.imgurl}}\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"item-name\">\r\n                  <span>{{product.name}}</span>\r\n                </div>\r\n                <div class=\"item-des\">\r\n                  {{product.description}}\r\n                </div>\r\n                <hr>\r\n                <div class=\"item-price\">\r\n                  <div class=\"item-priceshow\">\r\n                    {{product.price | price:'$'}}\r\n                  </div>\r\n                  <div class=\"item-shoppingcart\">\r\n                      <button appBtnAddCart class=\"btn btn-danger btn-sm btn-animate\" (click)=\"addToCart(product)\">\r\n                          <em>Add to Cart</em>\r\n                          <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\r\n                            <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"></path>\r\n                          </svg>\r\n                        </button>\r\n                    <!-- <a appBtnAddCart (click)=\"addToCart(product)\" class=\"btn btn-danger btn-sm\">Add to cart</a> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-products .products-center h3 {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 40px;\n  text-align: center; }\n\n.page-products .products-center p {\n  max-width: 800px;\n  margin: 20px auto !important;\n  padding: 15px;\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: 400;\n  font-style: italic;\n  color: #999;\n  background: #f8f8f8;\n  border-top: 3px solid #eee;\n  border-bottom: 3px solid #eee; }\n\n.page-products .products-center .products-img {\n  max-height: 450px;\n  overflow: hidden; }\n  .page-products .products-center .products-img img {\n    width: 100%;\n    height: 100%; }\n\n.page-products .products-center .products-bor {\n  border-top: 1px dashed #ccc;\n  border-bottom: 1px dashed #ccc;\n  margin: 20px 0px;\n  height: 5px; }\n\n.page-products .products-center .NoLogin {\n  text-align: center;\n  font-size: 20px;\n  color: red; }\n\n.page-products .products-center .adding-to-cart {\n  width: 30px;\n  border-radius: 30px;\n  position: relative;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.page-products .products-center .item {\n  max-width: 250px;\n  max-height: 320px;\n  border: 1px solid #f2f2f2;\n  border-right: 2px solid #eee;\n  border-bottom: 2px solid #eee;\n  border-radius: 7px;\n  background-color: white;\n  margin: 10px auto; }\n  .page-products .products-center .item .item-img {\n    max-height: 150px;\n    margin: 20px auto; }\n    .page-products .products-center .item .item-img img {\n      height: 140px;\n      width: auto;\n      margin: 0 auto; }\n  .page-products .products-center .item .item-name {\n    text-align: center;\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 25px; }\n  .page-products .products-center .item .item-des {\n    line-height: 20px;\n    font-size: 13px;\n    height: 40px;\n    overflow: hidden;\n    text-align: center;\n    margin: 2px 10px; }\n  .page-products .products-center .item hr {\n    margin-top: 0px;\n    margin-bottom: 0px; }\n  .page-products .products-center .item .item-price {\n    margin: 0 10px;\n    display: block; }\n    .page-products .products-center .item .item-price:after {\n      content: '';\n      display: block;\n      clear: both; }\n    .page-products .products-center .item .item-price .item-priceshow {\n      margin: 14px 5px;\n      padding: 0 10px;\n      border-radius: 5px;\n      font-size: 13px;\n      font-weight: bold;\n      background: #16cbe6;\n      color: #fff;\n      text-align: center;\n      float: left; }\n    .page-products .products-center .item .item-price .item-shoppingcart {\n      float: right;\n      margin: 7px 5px;\n      font-size: 13px; }\n\n.page-products .products-center .btn-animate {\n  position: relative;\n  overflow: hidden;\n  width: 95px;\n  height: 32px; }\n  .page-products .products-center .btn-animate em {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    line-height: 32px;\n    font-style: normal;\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s; }\n  .page-products .products-center .btn-animate svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    -webkit-transform: translateX(50%) translateY(-50%);\n            transform: translateX(50%) translateY(-50%);\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s; }\n  .page-products .products-center .btn-animate.is-added em {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    transition: -webkit-transform 0s;\n    transition: transform 0s;\n    transition: transform 0s, -webkit-transform 0s; }\n  .page-products .products-center .btn-animate.is-added svg {\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%);\n    transition: -webkit-transform 0s;\n    transition: transform 0s;\n    transition: transform 0s, -webkit-transform 0s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_cart_service__ = __webpack_require__("./src/app/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = (function () {
    function ProductsComponent(sessionSvc, productservice, shoppingCartSvc) {
        this.sessionSvc = sessionSvc;
        this.productservice = productservice;
        this.shoppingCartSvc = shoppingCartSvc;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.sessionSvc.userLoginState) {
            this.productservice.retrieveProduct(this.sessionSvc.loginUserInfo)
                .then(function (products) {
                _this.products = products;
            }).catch(function (errorMsg) {
                //TODO: show error message popup
                alert(errorMsg);
            });
        }
    };
    ProductsComponent.prototype.addToCart = function (product) {
        this.shoppingCartSvc.addToCart(product);
        //alert("Add Successfully, please view or delete in Shopping Cart.")
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("./src/app/products/products.component.html"),
        styles: [__webpack_require__("./src/app/products/products.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _c || Object])
], ProductsComponent);

var _a, _b, _c;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "./src/app/scmd.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScmdPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// scmd -- Shopping cart menu desplay
var ScmdPipe = (function () {
    function ScmdPipe() {
    }
    ScmdPipe.prototype.transform = function (value) {
        return value.totalCount + " Item" + (value.totalCount == 1 ? "" : "s") + " - $" + value.totalPrice;
    };
    return ScmdPipe;
}());
ScmdPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'scmd'
    })
], ScmdPipe);

//# sourceMappingURL=scmd.pipe.js.map

/***/ }),

/***/ "./src/app/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_shoppingcart__ = __webpack_require__("./src/models/shoppingcart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionService = (function () {
    function SessionService() {
        this.sessionContext = {};
    }
    Object.defineProperty(SessionService.prototype, "userLoginState", {
        get: function () {
            if (!sessionStorage["LoginUserInfo"])
                return false;
            return JSON.parse(sessionStorage["LoginUserInfo"]) != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "loginUserInfo", {
        get: function () {
            return JSON.parse(sessionStorage["LoginUserInfo"]);
        },
        set: function (value) {
            sessionStorage.setItem("LoginUserInfo", JSON.stringify(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "ShoppingCart", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__models_shoppingcart__["a" /* ShoppingCart */].deserialize(sessionStorage["ShoppingCart"]);
        },
        set: function (value) {
            sessionStorage.setItem("ShoppingCart", __WEBPACK_IMPORTED_MODULE_1__models_shoppingcart__["a" /* ShoppingCart */].serialize(value));
        },
        enumerable: true,
        configurable: true
    });
    return SessionService;
}());
SessionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SessionService);

//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "./src/app/shopping-cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("./src/app/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartService = (function () {
    function ShoppingCartService(sessionSvc) {
        this.sessionSvc = sessionSvc;
    }
    ShoppingCartService.prototype.addToCart = function (product) {
        var obj = this.sessionSvc.ShoppingCart;
        obj.addToCart(product);
        this.sessionSvc.ShoppingCart = obj;
    };
    ShoppingCartService.prototype.removeFormCart = function (product) {
        var obj = this.sessionSvc.ShoppingCart;
        obj.removeFromCart(product);
        this.sessionSvc.ShoppingCart = obj;
    };
    ShoppingCartService.prototype.removeAll = function () {
        var obj = this.sessionSvc.ShoppingCart;
        obj.removeAll();
        this.sessionSvc.ShoppingCart = obj;
    };
    return ShoppingCartService;
}());
ShoppingCartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object])
], ShoppingCartService);

var _a;
//# sourceMappingURL=shopping-cart.service.js.map

/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird__ = __webpack_require__("./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_userinfo__ = __webpack_require__("./src/models/userinfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (username, password) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a(function (resolve, reject) {
            _this.http
                .post("https://pwcfrontendtest.azurewebsites.net/login", { username: username, psd: password })
                .subscribe(function (data) {
                var userInfo = new __WEBPACK_IMPORTED_MODULE_2__models_userinfo__["a" /* UserInfo */]();
                userInfo.status = data.json().status;
                userInfo.token = data.json().token;
                if (userInfo.status == "success") {
                    resolve(userInfo);
                    //sessionStorage.setItem('currentuser',JSON.stringify(userInfo));
                }
                else {
                    reject("Username or password is incorrect");
                }
            });
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_js_bootstrap__ = __webpack_require__("./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_js_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_js_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");






if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./src/models/shoppingcart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
var ShoppingCartUnit = (function () {
    function ShoppingCartUnit(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    Object.defineProperty(ShoppingCartUnit.prototype, "price", {
        get: function () {
            if (!this.product) {
                return 0;
            }
            return this.product.price * this.quantity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCartUnit.prototype, "identifier", {
        get: function () {
            if (!this.product) {
                return '';
            }
            return this.product.name;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCartUnit;
}());
var ShoppingCart = (function () {
    function ShoppingCart() {
        this.items = new Array();
    }
    ShoppingCart.serialize = function (obj) {
        var o = obj.items.map(function (i) {
            return {
                product: i.product,
                quantity: i.quantity
            };
        });
        return JSON.stringify(o);
    };
    ShoppingCart.deserialize = function (str) {
        var obj = new ShoppingCart();
        if (!str)
            return obj;
        var o = JSON.parse(str);
        for (var _i = 0, o_1 = o; _i < o_1.length; _i++) {
            var i = o_1[_i];
            obj.items.push(new ShoppingCartUnit(i.product, i.quantity));
        }
        return obj;
    };
    Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
        get: function () {
            return this.items.map(function (i) { return i.price; })
                .reduce(function (i, j) {
                return i + j;
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalCount", {
        get: function () {
            return this.items.map(function (i) { return i.quantity; })
                .reduce(function (i, j) {
                return i + j;
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCart.prototype.addToCart = function (product) {
        var unit = this.items.find(function (i) { return i.identifier === product.name; });
        if (unit) {
            unit.quantity++;
        }
        else {
            this.items.push(new ShoppingCartUnit(product, 1));
        }
    };
    ShoppingCart.prototype.removeFromCart = function (product) {
        var unit = this.items.find(function (i) { return i.identifier === product.name; });
        if (!unit) {
            return;
        }
        if (unit.quantity > 1) {
            unit.quantity--;
        }
        else {
            console.log(this.items.indexOf(unit));
            this.items.splice(this.items.indexOf(unit), 1);
        }
    };
    ShoppingCart.prototype.removeAll = function () {
        this.items.splice(0, this.items.length);
    };
    return ShoppingCart;
}());

//# sourceMappingURL=shoppingcart.js.map

/***/ }),

/***/ "./src/models/userinfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserCredentials */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
var UserCredentials = (function () {
    function UserCredentials() {
    }
    return UserCredentials;
}());

var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

//# sourceMappingURL=userinfo.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map