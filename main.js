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
    } }, styles: [".center-align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-color: #5f6d79 !important;\n}\n\n.change-background[_ngcontent-%COMP%] {\n  background-color: #fdfcfa;\n  border-color: #5068a9;\n  color: #65686b;\n}\n\n.add-margin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.category-icon-parent[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  border: 1px solid #495057;\n  border-radius: 100px;\n  width: 80px;\n  height: 80px;\n  padding-top: 16px;\n  box-shadow: 2px 0px #7f8082;\n}\n\n.view-all-label[_ngcontent-%COMP%] {\n  font-family: cursive;\n  color: #68696b;\n}\n\n.change-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-top-border[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n\n.remove-side-padding[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.remove-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  margin-top: 22px;\n  padding: 1px;\n}\n\n.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  top: -7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLG9DQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usb0JBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuYmctY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjZkNzkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jaGFuZ2UtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmY2ZhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTA2OGE5O1xyXG4gICAgY29sb3I6ICM2NTY4NmI7XHJcbiAgfVxyXG5cclxuICAuYWRkLW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5tYXJnaW4tdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC5jZW50ZXItYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5LWljb24tcGFyZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnktaWNvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDk1MDU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDBweCAjN2Y4MDgyO1xyXG4gIH1cclxuXHJcbiAgLnZpZXctYWxsLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgY29sb3I6ICM2ODY5NmI7XHJcbiAgfVxyXG5cclxuICAuY2hhbmdlLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnJlbW92ZS10b3AtYm9yZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDBweDtcclxuICB9XHJcblxyXG4gIC5yZW1vdmUtc2lkZS1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAucmVtb3ZlLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1eS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0biAuYmFkZ2Uge1xyXG4gICAgdG9wOiAtN3B4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
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


class CategoriesComponent {
    constructor() { }
    ngOnInit() {
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 23, vars: 0, consts: [[1, "container"], [1, "row", "justify-content-sm-center", "center-align"], [1, "col", "col-3", "category-icon-parent"], [1, "category-icon"], ["src", "assets/images/categories/t-shirt.jpg", "width", "40"], ["src", "assets/images/categories/bag.png", "width", "40"], [1, "col", "col-sm-3", "category-icon-parent"], ["src", "assets/images/categories/key.jpg", "width", "40"], ["src", "assets/images/categories/mug.jpg", "width", "40"], ["src", "assets/images/categories/mobile.jpg", "width", "40"], [1, "view-all-label"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".center-align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.add-margin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.category-icon-parent[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  border: 1px solid #495057;\n  border-radius: 100px;\n  width: 80px;\n  height: 80px;\n  padding-top: 16px;\n  box-shadow: 2px 0px #7f8082;\n}\n\n.change-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-top-border[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n\n.remove-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFHRTtFQUNFLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7QUFBSiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5hZGQtbWFyZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hcmdpbi10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnktaWNvbi1wYXJlbnQge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5LWljb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ5NTA1NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAwcHggIzdmODA4MjtcclxuICB9XHJcblxyXG5cclxuICAuY2hhbmdlLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnJlbW92ZS10b3AtYm9yZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDBweDtcclxuICB9XHJcblxyXG4gIC5yZW1vdmUtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categories',
                templateUrl: './categories.component.html',
                styleUrls: ['./categories.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/main.component */ "IURz");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]], styles: [".center-align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-color: #5f6d79 !important;\n}\n\n.change-background[_ngcontent-%COMP%] {\n  background-color: #fdfcfa;\n  border-color: #5068a9;\n  color: #65686b;\n}\n\n.add-margin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.category-icon-parent[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  border: 1px solid #495057;\n  border-radius: 100px;\n  width: 80px;\n  height: 80px;\n  padding-top: 16px;\n  box-shadow: 2px 0px #7f8082;\n}\n\n.view-all-label[_ngcontent-%COMP%] {\n  font-family: cursive;\n  color: #68696b;\n}\n\n.change-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-top-border[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n\n.remove-side-padding[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.remove-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  margin-top: 22px;\n  padding: 1px;\n}\n\n.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  top: -7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ047O0FBRUk7RUFDRSxXQUFBO0FBQ047O0FBRUk7RUFDRSxvQ0FBQTtBQUNOOztBQUVJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFDTjs7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDTjs7QUFFSTtFQUNFLGVBQUE7QUFDTjs7QUFFSTtFQUNFLGtCQUFBO0FBQ047O0FBRUk7RUFDRSxhQUFBO0FBQ047O0FBRUk7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBQ047O0FBRUk7RUFDRSxvQkFBQTtFQUNBLGNBQUE7QUFDTjs7QUFFSTtFQUNFLFdBQUE7QUFDTjs7QUFFSTtFQUNFLGVBQUE7QUFDTjs7QUFFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNOOztBQUVJO0VBQ0UsWUFBQTtBQUNOOztBQUVJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDTjs7QUFFSTtFQUNFLG9CQUFBO0FBQ04iLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuY2VudGVyLWFsaWduIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJnLWN1c3RvbSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjZkNzkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhbmdlLWJhY2tncm91bmQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmY2ZhO1xyXG4gICAgICBib3JkZXItY29sb3I6ICM1MDY4YTk7XHJcbiAgICAgIGNvbG9yOiAjNjU2ODZiO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGQtbWFyZ2luIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFyZ2luLXRvcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2VudGVyLWFsaWduIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeS1pY29uLXBhcmVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LWljb24ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDk1MDU3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDJweCAwcHggIzdmODA4MjtcclxuICAgIH1cclxuXHJcbiAgICAudmlldy1hbGwtbGFiZWwge1xyXG4gICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgY29sb3I6ICM2ODY5NmI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYW5nZS13aWR0aCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZW1vdmUtdG9wLWJvcmRlciB7XHJcbiAgICAgIGJvcmRlci10b3A6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVtb3ZlLXNpZGUtcGFkZGluZyB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAucmVtb3ZlLXBhZGRpbmcge1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1eS1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0biAuYmFkZ2Uge1xyXG4gICAgICB0b3A6IC03cHggIWltcG9ydGFudDtcclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
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
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 4, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-trending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-bestselling");
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"], _trending_trending_component__WEBPACK_IMPORTED_MODULE_3__["TrendingComponent"], _bestselling_bestselling_component__WEBPACK_IMPORTED_MODULE_4__["BestsellingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


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


class TrendingComponent {
    constructor() { }
    ngOnInit() {
    }
}
TrendingComponent.ɵfac = function TrendingComponent_Factory(t) { return new (t || TrendingComponent)(); };
TrendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendingComponent, selectors: [["app-trending"]], decls: 78, vars: 0, consts: [[1, "container"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link", "disabled"], [1, "list-group", "list-group-flush"], ["href", "#", 1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", "remove-top-border", "remove-side-padding"], [1, "row", "change-width"], [1, "col-3"], ["src", "assets/images/products/t-shirt/item3.png", "width", "60"], [1, "col-7"], [1, "badge", "badge-info"], [1, "col-2", "remove-padding"], ["type", "button", 1, "btn", "btn-outline-success", "btn-sm", "buy-button"], ["href", "#", 1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", "remove-side-padding"], ["src", "assets/images/products/t-shirt/item4.png", "width", "60"], [1, "badge", "badge-success"], ["src", "assets/images/products/t-shirt/item5.jpg", "width", "60"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "buy-button"], ["src", "assets/images/products/mug/item1.jpeg", "width", "60"], ["src", "assets/images/products/mug/item3.jpg", "width", "60"]], template: function TrendingComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Kook N Keech");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "INR 499.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Buy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Mast And Harbour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "INR 399.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Dressberry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "INR 399.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Happy Unicorn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "INR 249.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Love My Dad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "INR 299.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".center-align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-color: #5f6d79 !important;\n}\n\n.change-background[_ngcontent-%COMP%] {\n  background-color: #fdfcfa;\n  border-color: #5068a9;\n  color: #65686b;\n}\n\n.add-margin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.category-icon-parent[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  border: 1px solid #495057;\n  border-radius: 100px;\n  width: 80px;\n  height: 80px;\n  padding-top: 16px;\n  box-shadow: 2px 0px #7f8082;\n}\n\n.view-all-label[_ngcontent-%COMP%] {\n  font-family: cursive;\n  color: #68696b;\n}\n\n.change-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-top-border[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n\n.remove-side-padding[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.remove-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  margin-top: 22px;\n  padding: 1px;\n}\n\n.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  top: -7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdHJlbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLG9DQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usb0JBQUE7QUFDSiIsImZpbGUiOiJ0cmVuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcblxyXG4gIC5iZy1jdXN0b20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNmQ3OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNoYW5nZS1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZjZmE7XHJcbiAgICBib3JkZXItY29sb3I6ICM1MDY4YTk7XHJcbiAgICBjb2xvcjogIzY1Njg2YjtcclxuICB9XHJcblxyXG4gIC5hZGQtbWFyZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hcmdpbi10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnktaWNvbi1wYXJlbnQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC5jYXRlZ29yeS1pY29uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0OTUwNTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMHB4ICM3ZjgwODI7XHJcbiAgfVxyXG5cclxuICAudmlldy1hbGwtbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBjb2xvcjogIzY4Njk2YjtcclxuICB9XHJcblxyXG4gIC5jaGFuZ2Utd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucmVtb3ZlLXRvcC1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlbW92ZS1zaWRlLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5yZW1vdmUtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYnV5LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuIC5iYWRnZSB7XHJcbiAgICB0b3A6IC03cHggIWltcG9ydGFudDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trending',
                templateUrl: './trending.component.html',
                styleUrls: ['./trending.component.scss']
            }]
    }], function () { return []; }, null); })();


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


class BestsellingComponent {
    constructor() { }
    ngOnInit() {
    }
}
BestsellingComponent.ɵfac = function BestsellingComponent_Factory(t) { return new (t || BestsellingComponent)(); };
BestsellingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BestsellingComponent, selectors: [["app-bestselling"]], decls: 39, vars: 0, consts: [[1, "container"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link", "disabled"], [1, "list-group", "list-group-flush"], ["href", "#", 1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", "remove-top-border", "remove-side-padding"], [1, "row", "change-width"], [1, "col-3"], ["src", "assets/images/products/t-shirt/item1.jpg", "width", "60"], [1, "col-7"], [1, "badge", "badge-success"], [1, "col-2", "remove-padding"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "buy-button"], ["href", "#", 1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", "remove-side-padding"], ["src", "assets/images/products/mug/item2.jpg", "width", "60"], [1, "badge", "badge-info"]], template: function BestsellingComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mast And Harbour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "INR 399.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Love My Dad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "INR 299.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".center-align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-color: #5f6d79 !important;\n}\n\n.change-background[_ngcontent-%COMP%] {\n  background-color: #fdfcfa;\n  border-color: #5068a9;\n  color: #65686b;\n}\n\n.add-margin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.category-icon-parent[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  border: 1px solid #495057;\n  border-radius: 100px;\n  width: 80px;\n  height: 80px;\n  padding-top: 16px;\n  box-shadow: 2px 0px #7f8082;\n}\n\n.view-all-label[_ngcontent-%COMP%] {\n  font-family: cursive;\n  color: #68696b;\n}\n\n.change-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-top-border[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n\n.remove-side-padding[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.remove-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  margin-top: 22px;\n  padding: 1px;\n}\n\n.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  top: -7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmVzdHNlbGxpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLG9DQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usb0JBQUE7QUFDSiIsImZpbGUiOiJiZXN0c2VsbGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcblxyXG4gIC5iZy1jdXN0b20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNmQ3OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNoYW5nZS1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZjZmE7XHJcbiAgICBib3JkZXItY29sb3I6ICM1MDY4YTk7XHJcbiAgICBjb2xvcjogIzY1Njg2YjtcclxuICB9XHJcblxyXG4gIC5hZGQtbWFyZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hcmdpbi10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnktaWNvbi1wYXJlbnQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC5jYXRlZ29yeS1pY29uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0OTUwNTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMHB4ICM3ZjgwODI7XHJcbiAgfVxyXG5cclxuICAudmlldy1hbGwtbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBjb2xvcjogIzY4Njk2YjtcclxuICB9XHJcblxyXG4gIC5jaGFuZ2Utd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucmVtb3ZlLXRvcC1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlbW92ZS1zaWRlLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5yZW1vdmUtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYnV5LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuIC5iYWRnZSB7XHJcbiAgICB0b3A6IC03cHggIWltcG9ydGFudDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BestsellingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bestselling',
                templateUrl: './bestselling.component.html',
                styleUrls: ['./bestselling.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_main_banner_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/banner/banner.component */ "gYFS");
/* harmony import */ var _components_main_trending_trending_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/trending/trending.component */ "KTi6");
/* harmony import */ var _components_main_bestselling_bestselling_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/bestselling/bestselling.component */ "KiGM");
/* harmony import */ var _components_main_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/categories/categories.component */ "3x1J");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        _components_main_banner_banner_component__WEBPACK_IMPORTED_MODULE_7__["BannerComponent"],
        _components_main_trending_trending_component__WEBPACK_IMPORTED_MODULE_8__["TrendingComponent"],
        _components_main_bestselling_bestselling_component__WEBPACK_IMPORTED_MODULE_9__["BestsellingComponent"],
        _components_main_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                    _components_main_banner_banner_component__WEBPACK_IMPORTED_MODULE_7__["BannerComponent"],
                    _components_main_trending_trending_component__WEBPACK_IMPORTED_MODULE_8__["TrendingComponent"],
                    _components_main_bestselling_bestselling_component__WEBPACK_IMPORTED_MODULE_9__["BestsellingComponent"],
                    _components_main_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");





const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'magic-moment', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
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