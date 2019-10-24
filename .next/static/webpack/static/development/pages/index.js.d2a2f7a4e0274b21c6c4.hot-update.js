webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/homepage/LoginForm.tsx":
/*!*******************************************!*\
  !*** ./components/homepage/LoginForm.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextInput */ "./components/homepage/TextInput.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./components/homepage/Button.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");



var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/homepage/LoginForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var LoginForm = function LoginForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    username: "",
    password: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_5__["default"]);

  var onChange = function onChange(e) {
    e.target.name === "username" ? setUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, user, {
      username: e.target.value
    })) : setUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, user, {
      password: e.target.value
    }));
  };

  var onLogin =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var userRes, userData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: "POST",
                data: user,
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/users"),
                responseType: "json"
              });

            case 2:
              userRes = _context.sent;
              _context.next = 5;
              return userRes.data;

            case 5:
              userData = _context.sent;

              if (userData.msg === "Success") {
                userContext.setUser(user.username);
              } else {
                alert("Incorrect username or password");
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onLogin() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Login"), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.username), __jsx(_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: onChange,
    username: user.username,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.password), __jsx(PasswordInput, {
    onChange: onChange,
    password: user.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onLogin,
    text: _library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.login,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/homepage/PasswordInput.tsx":
false,

/***/ "./components/homepage/RegisterForm.tsx":
/*!**********************************************!*\
  !*** ./components/homepage/RegisterForm.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextInput */ "./components/homepage/TextInput.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./components/homepage/Button.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");



var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/homepage/RegisterForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var RegisterForm = function RegisterForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    username: "",
    password: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_5__["default"]);

  var onChange = function onChange(e) {
    e.target.name === "username" ? setUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, user, {
      username: e.target.value
    })) : setUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, user, {
      password: e.target.value
    }));
  };

  var onRegister =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var userRes, userData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: "POST",
                data: user,
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/users"),
                responseType: "json"
              });

            case 2:
              userRes = _context.sent;
              _context.next = 5;
              return userRes.data;

            case 5:
              userData = _context.sent;

              if (userData.msg === "Success") {
                userContext.setUser(user.username);
              } else {
                alert("Incorrect username or password");
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onRegister() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Register"), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: onChange,
    type: "text",
    value: user.username,
    text: "username",
    title: _library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.username,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: onChange,
    type: "password",
    value: user.password,
    text: "password",
    title: _library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: onChange,
    type: "password",
    value: user.password,
    text: "password",
    title: _library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onRegister,
    text: _library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ }),

/***/ "./components/homepage/TextInput.tsx":
/*!*******************************************!*\
  !*** ./components/homepage/TextInput.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/homepage/TextInput.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var TextInput = function TextInput(_ref) {
  var onChange = _ref.onChange,
      text = _ref.text,
      value = _ref.value,
      type = _ref.type,
      title = _ref.title;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("label", {
    htmlFor: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, title), __jsx("input", {
    type: type,
    autoComplete: text,
    name: text,
    id: text,
    onChange: onChange,
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ })

})
//# sourceMappingURL=index.js.d2a2f7a4e0274b21c6c4.hot-update.js.map