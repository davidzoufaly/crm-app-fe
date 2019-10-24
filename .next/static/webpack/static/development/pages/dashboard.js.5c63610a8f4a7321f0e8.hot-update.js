webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/ShowRecordsNumber.tsx":
/*!******************************************!*\
  !*** ./components/ShowRecordsNumber.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library/languages */ "./library/languages.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/ShowRecordsNumber.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ShowRecordsNumber = function ShowRecordsNumber(_ref) {
  var data = _ref.data,
      string = _ref.string,
      buttonString = _ref.buttonString,
      link = _ref.link,
      subData = _ref.subData;
  var user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, data), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, string), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, subData), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link,
    as: "".concat(link, "?Api_KEY=").concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_3__["default"].en.goTo, " ", buttonString.toLowerCase())));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowRecordsNumber);

/***/ })

})
//# sourceMappingURL=dashboard.js.5c63610a8f4a7321f0e8.hot-update.js.map