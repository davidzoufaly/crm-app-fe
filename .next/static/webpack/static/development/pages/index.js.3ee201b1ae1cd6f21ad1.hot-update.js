webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_homepage_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homepage/LoginForm */ "./components/homepage/LoginForm.tsx");
/* harmony import */ var _components_homepage_RegisterForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/homepage/RegisterForm */ "./components/homepage/RegisterForm.tsx");
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../library/languages */ "./library/languages.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Index = function Index() {
  var user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return !user.user.signedIn ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Welcome in my CRM-APP"), __jsx(_components_homepage_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_components_homepage_RegisterForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard?${user.user.userkey}",
    as: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.goTo, " ", _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.dashboard)), __jsx("button", {
    onClick: function onClick() {
      return user.logoutUser();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.logout));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3ee201b1ae1cd6f21ad1.hot-update.js.map