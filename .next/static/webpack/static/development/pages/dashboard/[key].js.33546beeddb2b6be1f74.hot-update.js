webpackHotUpdate("static/development/pages/dashboard/[key].js",{

/***/ "./components/dashboard/ShowRecordsNumber.tsx":
/*!****************************************************!*\
  !*** ./components/dashboard/ShowRecordsNumber.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/dashboard/ShowRecordsNumber.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ShowRecordsNumber = function ShowRecordsNumber(_ref) {
  var data = _ref.data,
      string = _ref.string,
      buttonString = _ref.buttonString,
      link = _ref.link,
      subData = _ref.subData;
  var user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    style: {
      padding: "2rem 2rem",
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "h2",
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, data), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    gutterBottom: true,
    style: {
      color: "#333"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, subData), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, string), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "".concat(link, "/[key]"),
    as: "".concat(link, "/").concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_3__["default"].en.goTo, " ", buttonString.toLowerCase()))));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowRecordsNumber);

/***/ })

})
//# sourceMappingURL=[key].js.33546beeddb2b6be1f74.hot-update.js.map