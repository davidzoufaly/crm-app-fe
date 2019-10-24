webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/homepage/LoginForm.tsx":
/*!*******************************************!*\
  !*** ./components/homepage/LoginForm.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _UsernameInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsernameInput */ "./components/homepage/UsernameInput.tsx");
/* harmony import */ var _PasswordInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PasswordInput */ "./components/homepage/PasswordInput.tsx");
/* harmony import */ var _LoginButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginButton */ "./components/homepage/LoginButton.tsx");

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/homepage/LoginForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var LoginForm = function LoginForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    username: "",
    password: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_2__["default"]);

  var onChange = function onChange(e) {
    e.target.name === "username" ? setUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user, {
      username: e.target.value
    })) : setUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user, {
      password: e.target.value
    }));
  };

  var onLogin = function onLogin() {
    userContext.setUser(user.username);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {// console.log(user);
  }, [user]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_UsernameInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: onChange,
    username: user.username,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_PasswordInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: onChange,
    password: user.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_LoginButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onLogin: onLogin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/homepage/loginForm.tsx":
false,

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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_homepage_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homepage/LoginForm */ "./components/homepage/LoginForm.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //TODO: Odstranit menu
//TODO: Přidat authentizaci

var Index = function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Welcome in my CRM-APP"), __jsx(_components_homepage_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a3367d83ffbc2efb6104.hot-update.js.map