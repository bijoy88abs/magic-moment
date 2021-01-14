(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Prathiksha\projects\magic-moment-ng\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 0, consts: [[1, "add-margin", "clearfix"], [1, "navbar", "fixed-top", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/logo-small.png", 1, "logo"], [1, "form-inline"], [1, "btn"], [1, "bi", "bi-cart"], [1, "badge", "badge-danger"], [1, "bi", "bi-bell"], [1, "badge", "badge-warning"], [1, "bi", "bi-person-lines-fill"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"]], styles: [".center-align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-color: #5f6d79 !important;\n}\n\n.change-background[_ngcontent-%COMP%] {\n  background-color: #fdfcfa;\n  border-color: #5068a9;\n  color: #65686b;\n}\n\n.add-margin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.category-icon-parent[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  border: 1px solid #495057;\n  border-radius: 100px;\n  width: 80px;\n  height: 80px;\n  padding-top: 16px;\n  box-shadow: 2px 0px #7f8082;\n}\n\n.view-all-label[_ngcontent-%COMP%] {\n  font-family: cursive;\n  color: #68696b;\n}\n\n.change-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-top-border[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n\n.remove-side-padding[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.remove-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  margin-top: 22px;\n  padding: 1px;\n}\n\n.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  top: -7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLG9DQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usb0JBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuYmctY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjZkNzkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jaGFuZ2UtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmY2ZhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTA2OGE5O1xyXG4gICAgY29sb3I6ICM2NTY4NmI7XHJcbiAgfVxyXG5cclxuICAuYWRkLW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5tYXJnaW4tdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC5jZW50ZXItYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5LWljb24tcGFyZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnktaWNvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDk1MDU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDBweCAjN2Y4MDgyO1xyXG4gIH1cclxuXHJcbiAgLnZpZXctYWxsLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgY29sb3I6ICM2ODY5NmI7XHJcbiAgfVxyXG5cclxuICAuY2hhbmdlLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnJlbW92ZS10b3AtYm9yZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDBweDtcclxuICB9XHJcblxyXG4gIC5yZW1vdmUtc2lkZS1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAucmVtb3ZlLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1eS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0biAuYmFkZ2Uge1xyXG4gICAgdG9wOiAtN3B4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3nSl":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 5, vars: 0, consts: [[1, "jumbotron"], [1, "display-4"], [1, "my-4"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3x1J":
/*!********************************************************************!*\
  !*** ./src/app/components/main/categories/categories.component.ts ***!
  \********************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CategoriesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goToCategory(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/categories/", item_r1.icon, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CategoriesComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.lists = [];
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.lists = [];
        if (this.categoryList && this.categoryList.length > 0) {
            this.categoryList.forEach((element) => {
                this.lists.push({ id: element.id, name: element.categoryName, icon: element.icon });
            });
        }
    }
    goToCategory(id) {
        this.router.navigate(['magic-moment/categoryList', { id: id }]);
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], inputs: { categoryList: "categoryList" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 1, consts: [[1, "container"], [1, "row", "justify-content-sm-center", "center-align"], ["class", "col col-3 category-icon-parent", 4, "ngFor", "ngForOf"], [1, "col", "col-3", "category-icon-parent"], [1, "category-icon"], [1, "view-all-label"], [1, "category-icon", 3, "click"], ["width", "40", 3, "src"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoriesComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".center-align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.add-margin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.category-icon-parent[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  border: 1px solid #495057;\n  border-radius: 100px;\n  width: 80px;\n  height: 80px;\n  padding-top: 16px;\n  box-shadow: 2px 0px #7f8082;\n}\n\n.change-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-top-border[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n\n.remove-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFHRTtFQUNFLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7QUFBSiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5hZGQtbWFyZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hcmdpbi10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnktaWNvbi1wYXJlbnQge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5LWljb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ5NTA1NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAwcHggIzdmODA4MjtcclxuICB9XHJcblxyXG5cclxuICAuY2hhbmdlLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnJlbW92ZS10b3AtYm9yZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDBweDtcclxuICB9XHJcblxyXG4gIC5yZW1vdmUtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categories',
                templateUrl: './categories.component.html',
                styleUrls: ['./categories.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { categoryList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/main.component */ "IURz");





class HomeComponent {
    constructor(commonService) {
        this.commonService = commonService;
    }
    ngOnInit() {
        this.commonService.getCategoryNameList().subscribe((data) => {
            this.categoryList = data;
        });
        this.commonService.getItemList().subscribe((data) => {
            this.itemList = data;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 2, consts: [[3, "categoryList", "itemList"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categoryList", ctx.categoryList)("itemList", ctx.itemList);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]], styles: [".center-align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-color: #5f6d79 !important;\n}\n\n.change-background[_ngcontent-%COMP%] {\n  background-color: #fdfcfa;\n  border-color: #5068a9;\n  color: #65686b;\n}\n\n.add-margin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.category-icon-parent[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  border: 1px solid #495057;\n  border-radius: 100px;\n  width: 80px;\n  height: 80px;\n  padding-top: 16px;\n  box-shadow: 2px 0px #7f8082;\n}\n\n.view-all-label[_ngcontent-%COMP%] {\n  font-family: cursive;\n  color: #68696b;\n}\n\n.change-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-top-border[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n\n.remove-side-padding[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.remove-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  margin-top: 22px;\n  padding: 1px;\n}\n\n.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  top: -7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ047O0FBRUk7RUFDRSxXQUFBO0FBQ047O0FBRUk7RUFDRSxvQ0FBQTtBQUNOOztBQUVJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFDTjs7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDTjs7QUFFSTtFQUNFLGVBQUE7QUFDTjs7QUFFSTtFQUNFLGtCQUFBO0FBQ047O0FBRUk7RUFDRSxhQUFBO0FBQ047O0FBRUk7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBQ047O0FBRUk7RUFDRSxvQkFBQTtFQUNBLGNBQUE7QUFDTjs7QUFFSTtFQUNFLFdBQUE7QUFDTjs7QUFFSTtFQUNFLGVBQUE7QUFDTjs7QUFFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNOOztBQUVJO0VBQ0UsWUFBQTtBQUNOOztBQUVJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDTjs7QUFFSTtFQUNFLG9CQUFBO0FBQ04iLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuY2VudGVyLWFsaWduIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJnLWN1c3RvbSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjZkNzkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhbmdlLWJhY2tncm91bmQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmY2ZhO1xyXG4gICAgICBib3JkZXItY29sb3I6ICM1MDY4YTk7XHJcbiAgICAgIGNvbG9yOiAjNjU2ODZiO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGQtbWFyZ2luIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFyZ2luLXRvcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2VudGVyLWFsaWduIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeS1pY29uLXBhcmVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LWljb24ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDk1MDU3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDJweCAwcHggIzdmODA4MjtcclxuICAgIH1cclxuXHJcbiAgICAudmlldy1hbGwtbGFiZWwge1xyXG4gICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgY29sb3I6ICM2ODY5NmI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYW5nZS13aWR0aCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZW1vdmUtdG9wLWJvcmRlciB7XHJcbiAgICAgIGJvcmRlci10b3A6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVtb3ZlLXNpZGUtcGFkZGluZyB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAucmVtb3ZlLXBhZGRpbmcge1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1eS1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0biAuYmFkZ2Uge1xyXG4gICAgICB0b3A6IC03cHggIWltcG9ydGFudDtcclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "E5en":
/*!*******************************************************************!*\
  !*** ./src/app/components/item-details/item-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: ItemDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsComponent", function() { return ItemDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ItemDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ItemDetailsComponent.ɵfac = function ItemDetailsComponent_Factory(t) { return new (t || ItemDetailsComponent)(); };
ItemDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemDetailsComponent, selectors: [["app-item-details"]], decls: 2, vars: 0, template: function ItemDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "item-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-details',
                templateUrl: './item-details.component.html',
                styleUrls: ['./item-details.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/banner.component */ "gYFS");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/categories.component */ "3x1J");
/* harmony import */ var _trending_trending_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trending/trending.component */ "KTi6");
/* harmony import */ var _bestselling_bestselling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bestselling/bestselling.component */ "KiGM");






class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], inputs: { categoryList: "categoryList", itemList: "itemList" }, decls: 4, vars: 3, consts: [[3, "categoryList"], [3, "itemList"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-categories", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-trending", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-bestselling", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categoryList", ctx.categoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemList", ctx.itemList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemList", ctx.itemList);
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"], _trending_trending_component__WEBPACK_IMPORTED_MODULE_3__["TrendingComponent"], _bestselling_bestselling_component__WEBPACK_IMPORTED_MODULE_4__["BestsellingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, { categoryList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "KTi6":
/*!****************************************************************!*\
  !*** ./src/app/components/main/trending/trending.component.ts ***!
  \****************************************************************/
/*! exports provided: TrendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingComponent", function() { return TrendingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TrendingComponent_a_12_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/t-shirt/item", list_r1.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TrendingComponent_a_12_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/bag/item", list_r1.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TrendingComponent_a_12_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/ring/item", list_r1.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TrendingComponent_a_12_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/mug/item", list_r1.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TrendingComponent_a_12_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/phone/item", list_r1.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TrendingComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrendingComponent_a_12_img_3_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TrendingComponent_a_12_img_4_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TrendingComponent_a_12_img_5_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TrendingComponent_a_12_img_6_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TrendingComponent_a_12_img_7_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Buy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.categoryId === "1610550397974");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.categoryId === "1610553176922");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.categoryId === "1610553189402");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.categoryId === "1610553197596");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.categoryId === "1610553208772");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("INR ", list_r1.price, ".00");
} }
class TrendingComponent {
    constructor() {
        this.hasItem = false;
        this.lists = [];
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.lists = [];
        if (this.itemList && this.itemList.length > 0) {
            this.itemList.forEach((element) => {
                if (element.state.includes(100)) {
                    this.hasItem = true;
                    this.lists.push({
                        id: element.id,
                        name: element.name,
                        price: element.price,
                        images: element.images,
                        categoryId: element.categoryId
                    });
                }
            });
        }
    }
}
TrendingComponent.ɵfac = function TrendingComponent_Factory(t) { return new (t || TrendingComponent)(); };
TrendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendingComponent, selectors: [["app-trending"]], inputs: { itemList: "itemList" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 1, consts: [[1, "container"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link", "disabled"], [1, "list-group", "list-group-flush"], ["href", "#", "class", "list-group-item list-group-item-action flex-column align-items-start remove-top-border remove-side-padding", 4, "ngFor", "ngForOf"], ["href", "#", 1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", "remove-top-border", "remove-side-padding"], [1, "row", "change-width"], [1, "col-3"], ["width", "60", 3, "src", 4, "ngIf"], [1, "col-7"], [1, "badge", "badge-info"], [1, "col-2", "remove-padding"], ["type", "button", 1, "btn", "btn-outline-success", "btn-sm", "buy-button"], ["width", "60", 3, "src"]], template: function TrendingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Trending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TrendingComponent_a_12_Template, 17, 7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".center-align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-color: #5f6d79 !important;\n}\n\n.change-background[_ngcontent-%COMP%] {\n  background-color: #fdfcfa;\n  border-color: #5068a9;\n  color: #65686b;\n}\n\n.add-margin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.category-icon-parent[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  border: 1px solid #495057;\n  border-radius: 100px;\n  width: 80px;\n  height: 80px;\n  padding-top: 16px;\n  box-shadow: 2px 0px #7f8082;\n}\n\n.view-all-label[_ngcontent-%COMP%] {\n  font-family: cursive;\n  color: #68696b;\n}\n\n.change-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-top-border[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n\n.remove-side-padding[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.remove-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  margin-top: 22px;\n  padding: 1px;\n}\n\n.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  top: -7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdHJlbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLG9DQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usb0JBQUE7QUFDSiIsImZpbGUiOiJ0cmVuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcblxyXG4gIC5iZy1jdXN0b20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNmQ3OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNoYW5nZS1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZjZmE7XHJcbiAgICBib3JkZXItY29sb3I6ICM1MDY4YTk7XHJcbiAgICBjb2xvcjogIzY1Njg2YjtcclxuICB9XHJcblxyXG4gIC5hZGQtbWFyZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hcmdpbi10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnktaWNvbi1wYXJlbnQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC5jYXRlZ29yeS1pY29uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0OTUwNTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMHB4ICM3ZjgwODI7XHJcbiAgfVxyXG5cclxuICAudmlldy1hbGwtbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBjb2xvcjogIzY4Njk2YjtcclxuICB9XHJcblxyXG4gIC5jaGFuZ2Utd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucmVtb3ZlLXRvcC1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlbW92ZS1zaWRlLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5yZW1vdmUtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYnV5LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuIC5iYWRnZSB7XHJcbiAgICB0b3A6IC03cHggIWltcG9ydGFudDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trending',
                templateUrl: './trending.component.html',
                styleUrls: ['./trending.component.scss']
            }]
    }], function () { return []; }, { itemList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "KiGM":
/*!**********************************************************************!*\
  !*** ./src/app/components/main/bestselling/bestselling.component.ts ***!
  \**********************************************************************/
/*! exports provided: BestsellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestsellingComponent", function() { return BestsellingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function BestsellingComponent_a_12_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/t-shirt/item", list_r1.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BestsellingComponent_a_12_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/bag/item", list_r1.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BestsellingComponent_a_12_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/ring/item", list_r1.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BestsellingComponent_a_12_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/mug/item", list_r1.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BestsellingComponent_a_12_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/phone/item", list_r1.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BestsellingComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BestsellingComponent_a_12_img_3_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BestsellingComponent_a_12_img_4_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BestsellingComponent_a_12_img_5_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BestsellingComponent_a_12_img_6_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BestsellingComponent_a_12_img_7_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Buy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.categoryId === "1610550397974");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.categoryId === "1610553176922");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.categoryId === "1610553189402");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.categoryId === "1610553197596");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.categoryId === "1610553208772");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("INR ", list_r1.price, ".00");
} }
class BestsellingComponent {
    constructor() {
        this.hasItem = false;
        this.lists = [];
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.lists = [];
        if (this.itemList && this.itemList.length > 0) {
            this.itemList.forEach((element) => {
                if (element.state.includes(101)) {
                    this.hasItem = true;
                    this.lists.push({
                        id: element.id,
                        name: element.name,
                        price: element.price,
                        images: element.images,
                        categoryId: element.categoryId
                    });
                }
            });
        }
    }
}
BestsellingComponent.ɵfac = function BestsellingComponent_Factory(t) { return new (t || BestsellingComponent)(); };
BestsellingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BestsellingComponent, selectors: [["app-bestselling"]], inputs: { itemList: "itemList" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 1, consts: [[1, "container"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link", "disabled"], [1, "list-group", "list-group-flush"], ["href", "#", "class", "list-group-item list-group-item-action flex-column align-items-start remove-top-border remove-side-padding", 4, "ngFor", "ngForOf"], ["href", "#", 1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", "remove-top-border", "remove-side-padding"], [1, "row", "change-width"], [1, "col-3"], ["width", "60", 3, "src", 4, "ngIf"], [1, "col-7"], [1, "badge", "badge-info"], [1, "col-2", "remove-padding"], ["type", "button", 1, "btn", "btn-outline-success", "btn-sm", "buy-button"], ["width", "60", 3, "src"]], template: function BestsellingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Best Selling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BestsellingComponent_a_12_Template, 17, 7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".center-align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-color: #5f6d79 !important;\n}\n\n.change-background[_ngcontent-%COMP%] {\n  background-color: #fdfcfa;\n  border-color: #5068a9;\n  color: #65686b;\n}\n\n.add-margin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.category-icon-parent[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  border: 1px solid #495057;\n  border-radius: 100px;\n  width: 80px;\n  height: 80px;\n  padding-top: 16px;\n  box-shadow: 2px 0px #7f8082;\n}\n\n.view-all-label[_ngcontent-%COMP%] {\n  font-family: cursive;\n  color: #68696b;\n}\n\n.change-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-top-border[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n\n.remove-side-padding[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.remove-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  margin-top: 22px;\n  padding: 1px;\n}\n\n.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  top: -7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmVzdHNlbGxpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLG9DQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usb0JBQUE7QUFDSiIsImZpbGUiOiJiZXN0c2VsbGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcblxyXG4gIC5iZy1jdXN0b20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNmQ3OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNoYW5nZS1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZjZmE7XHJcbiAgICBib3JkZXItY29sb3I6ICM1MDY4YTk7XHJcbiAgICBjb2xvcjogIzY1Njg2YjtcclxuICB9XHJcblxyXG4gIC5hZGQtbWFyZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hcmdpbi10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnktaWNvbi1wYXJlbnQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC5jYXRlZ29yeS1pY29uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0OTUwNTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMHB4ICM3ZjgwODI7XHJcbiAgfVxyXG5cclxuICAudmlldy1hbGwtbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBjb2xvcjogIzY4Njk2YjtcclxuICB9XHJcblxyXG4gIC5jaGFuZ2Utd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucmVtb3ZlLXRvcC1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlbW92ZS1zaWRlLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5yZW1vdmUtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYnV5LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuIC5iYWRnZSB7XHJcbiAgICB0b3A6IC03cHggIWltcG9ydGFudDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BestsellingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bestselling',
                templateUrl: './bestselling.component.html',
                styleUrls: ['./bestselling.component.scss']
            }]
    }], function () { return []; }, { itemList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OlR4":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CommonService {
    constructor(http) {
        this.http = http;
    }
    adminLogin(data) {
        if (data.username === 'root' && data.password === 'root1234') {
            return true;
        }
        else {
            return false;
        }
    }
    getCategoryNameList() {
        return this.http.get('https://5fff0b86a4a0dd001701b5ec.mockapi.io/categoryList')
            .pipe();
    }
    getItemList() {
        return this.http.get('https://5fff0b86a4a0dd001701b5ec.mockapi.io/itemList')
            .pipe();
    }
    getItemListByCategory(categoryId) {
        return this.http.get('https://5fff0b86a4a0dd001701b5ec.mockapi.io/itemList?categoryId=' + categoryId)
            .pipe();
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'magic-moment-ng';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"), "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css")], [1, ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Magic Moment!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_main_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/banner/banner.component */ "gYFS");
/* harmony import */ var _components_main_trending_trending_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/trending/trending.component */ "KTi6");
/* harmony import */ var _components_main_bestselling_bestselling_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/bestselling/bestselling.component */ "KiGM");
/* harmony import */ var _components_main_categories_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main/categories/categories.component */ "3x1J");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/item-details/item-details.component */ "E5en");
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/category-list/category-list.component */ "uzT2");
/* harmony import */ var _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin/login/login.component */ "rSbB");
/* harmony import */ var _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin/dashboard/dashboard.component */ "3nSl");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
        _components_main_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"],
        _components_main_trending_trending_component__WEBPACK_IMPORTED_MODULE_10__["TrendingComponent"],
        _components_main_bestselling_bestselling_component__WEBPACK_IMPORTED_MODULE_11__["BestsellingComponent"],
        _components_main_categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _components_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_14__["ItemDetailsComponent"],
        _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_15__["CategoryListComponent"],
        _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                    _components_main_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"],
                    _components_main_trending_trending_component__WEBPACK_IMPORTED_MODULE_10__["TrendingComponent"],
                    _components_main_bestselling_bestselling_component__WEBPACK_IMPORTED_MODULE_11__["BestsellingComponent"],
                    _components_main_categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _components_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_14__["ItemDetailsComponent"],
                    _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_15__["CategoryListComponent"],
                    _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                    _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gYFS":
/*!************************************************************!*\
  !*** ./src/app/components/main/banner/banner.component.ts ***!
  \************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 12, vars: 0, consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "clearfix"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/images/banner2.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "assets/images/banner3.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "assets/images/banner1.jpg", "alt", "Third slide", 1, "d-block", "w-100"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".center-align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-color: #5f6d79 !important;\n}\n\n.change-background[_ngcontent-%COMP%] {\n  background-color: #fdfcfa;\n  border-color: #5068a9;\n  color: #65686b;\n}\n\n.add-margin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.category-icon-parent[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  border: 1px solid #495057;\n  border-radius: 100px;\n  width: 80px;\n  height: 80px;\n  padding-top: 16px;\n  box-shadow: 2px 0px #7f8082;\n}\n\n.view-all-label[_ngcontent-%COMP%] {\n  font-family: cursive;\n  color: #68696b;\n}\n\n.change-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-top-border[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n\n.remove-side-padding[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.remove-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  margin-top: 22px;\n  padding: 1px;\n}\n\n.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  top: -7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQ0FBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0FBQ0oiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJnLWN1c3RvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY2ZDc5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2hhbmdlLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmNmYTtcclxuICAgIGJvcmRlci1jb2xvcjogIzUwNjhhOTtcclxuICAgIGNvbG9yOiAjNjU2ODZiO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luLXRvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyLWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXRlZ29yeS1pY29uLXBhcmVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5LWljb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ5NTA1NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAwcHggIzdmODA4MjtcclxuICB9XHJcblxyXG4gIC52aWV3LWFsbC1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiAjNjg2OTZiO1xyXG4gIH1cclxuXHJcbiAgLmNoYW5nZS13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yZW1vdmUtdG9wLWJvcmRlciB7XHJcbiAgICBib3JkZXItdG9wOiAwcHg7XHJcbiAgfVxyXG5cclxuICAucmVtb3ZlLXNpZGUtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLnJlbW92ZS1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcblxyXG4gIC5idXktYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICB9XHJcblxyXG4gIC5idG4gLmJhZGdlIHtcclxuICAgIHRvcDogLTdweCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rSbB":
/*!***********************************************************!*\
  !*** ./src/app/components/admin/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class LoginComponent {
    constructor(formBuilder, commonService, router) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.router = router;
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    logiProcess() {
        if (this.loginForm.invalid) {
            return;
        }
        else {
            console.log('====', this.loginForm.value);
            if (this.commonService.adminLogin(this.loginForm.value)) {
                this.router.navigate(['magic-moment/adminDashboard']);
            }
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 1, consts: [[1, "jumbotron"], [1, "display-4"], [1, "my-4"], [3, "formGroup"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "text", "formControlName", "username", 1, "form-control"], ["for", "exampleInputPassword1"], ["type", "password", "formControlName", "password", 1, "form-control"], [1, "btn", "btn-primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin Login!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_13_listener() { return ctx.logiProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "uzT2":
/*!*********************************************************************!*\
  !*** ./src/app/components/category-list/category-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CategoryListComponent_a_7_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const list_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/t-shirt/item", list_r2.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CategoryListComponent_a_7_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const list_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/bag/item", list_r2.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CategoryListComponent_a_7_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const list_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/ring/item", list_r2.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CategoryListComponent_a_7_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const list_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/mug/item", list_r2.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CategoryListComponent_a_7_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const list_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/products/phone/item", list_r2.images[0], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CategoryListComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryListComponent_a_7_img_3_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryListComponent_a_7_img_4_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CategoryListComponent_a_7_img_5_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoryListComponent_a_7_img_6_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CategoryListComponent_a_7_img_7_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Buy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r2.categoryId === "1610550397974");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r2.categoryId === "1610553176922");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r2.categoryId === "1610553189402");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r2.categoryId === "1610553197596");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r2.categoryId === "1610553208772");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("INR ", list_r2.price, ".00");
} }
function CategoryListComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Item found so far.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CategoryListComponent {
    constructor(commonService, route, router) {
        this.commonService = commonService;
        this.route = route;
        this.router = router;
        this.itemList = [];
        this.hasData = false;
        this.title = '';
    }
    ngOnInit() {
        const categoryId = this.route.snapshot.paramMap.get('id');
        if (categoryId) {
            this.getTitle(categoryId);
            this.commonService.getItemListByCategory(categoryId).subscribe((data) => {
                if (data && data.length > 0) {
                    this.hasData = true;
                    data.forEach((element) => {
                        this.itemList.push({
                            id: element.id,
                            name: element.name,
                            price: element.price,
                            images: element.images,
                            categoryId: element.categoryId
                        });
                    });
                }
                else {
                    this.hasData = false;
                }
            });
        }
    }
    getTitle(id) {
        switch (id) {
            case '1610550397974':
                this.title = 't-shirt';
                break;
            case '1610553176922':
                this.title = 'Bag';
                break;
            case '1610553189402':
                this.title = 'Key ring';
                break;
            case '1610553197596':
                this.title = 'Mug';
                break;
            case '1610553197596':
                this.title = 'Mobile Cover';
                break;
        }
    }
    goToItem(id) {
        // this.router.navigate(['magic-moment/categoryList', { id: id }]);
    }
    goToHome() {
        this.router.navigate(['magic-moment']);
    }
}
CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) { return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CategoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryListComponent, selectors: [["app-category-list"]], decls: 10, vars: 3, consts: [[1, "container"], [1, "display-4"], [1, "bi", "bi-signpost-2"], [1, "list-group", "list-group-flush"], ["href", "javascript:void(0)", "class", "list-group-item list-group-item-action flex-column align-items-start remove-side-padding", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["href", "javascript:void(0)", 1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", "remove-side-padding"], [1, "row", "change-width"], [1, "col-3"], ["width", "60", 3, "src", 4, "ngIf"], [1, "col-7"], [1, "badge", "badge-info"], [1, "col-2", "remove-padding"], ["type", "button", 1, "btn", "btn-outline-success", "btn-sm", "buy-button"], ["width", "60", 3, "src"], [1, "bi", "bi-emoji-frown"]], template: function CategoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CategoryListComponent_a_7_Template, 17, 7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CategoryListComponent_a_8_Template, 4, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasData);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".center-align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-color: #5f6d79 !important;\n}\n\n.change-background[_ngcontent-%COMP%] {\n  background-color: #fdfcfa;\n  border-color: #5068a9;\n  color: #65686b;\n}\n\n.add-margin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.category-icon-parent[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  border: 1px solid #495057;\n  border-radius: 100px;\n  width: 80px;\n  height: 80px;\n  padding-top: 16px;\n  box-shadow: 2px 0px #7f8082;\n}\n\n.view-all-label[_ngcontent-%COMP%] {\n  font-family: cursive;\n  color: #68696b;\n}\n\n.change-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-top-border[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n\n.remove-side-padding[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.remove-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  margin-top: 22px;\n  padding: 1px;\n}\n\n.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  top: -7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoiY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uYmctY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjZkNzkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNoYW5nZS1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZjZmE7XHJcbiAgICBib3JkZXItY29sb3I6ICM1MDY4YTk7XHJcbiAgICBjb2xvcjogIzY1Njg2YjtcclxufVxyXG5cclxuLmFkZC1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmNlbnRlci1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1pY29uLXBhcmVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnktaWNvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDk1MDU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDBweCAjN2Y4MDgyO1xyXG59XHJcblxyXG4udmlldy1hbGwtbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBjb2xvcjogIzY4Njk2YjtcclxufVxyXG5cclxuLmNoYW5nZS13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlbW92ZS10b3AtYm9yZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDBweDtcclxufVxyXG5cclxuLnJlbW92ZS1zaWRlLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLnJlbW92ZS1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmJ1eS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG4uYnRuIC5iYWRnZSB7XHJcbiAgICB0b3A6IC03cHggIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-list',
                templateUrl: './category-list.component.html',
                styleUrls: ['./category-list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin/dashboard/dashboard.component */ "3nSl");
/* harmony import */ var _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/login/login.component */ "rSbB");
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/category-list/category-list.component */ "uzT2");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/item-details/item-details.component */ "E5en");









const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'magic-moment', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'magic-moment/categoryList/:id', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'magic-moment/itemDetails', component: _components_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsComponent"] },
    { path: 'magic-moment/categoryList', component: _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListComponent"] },
    { path: 'magic-moment/adminLogin', component: _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'magic-moment/adminDashboard', component: _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map