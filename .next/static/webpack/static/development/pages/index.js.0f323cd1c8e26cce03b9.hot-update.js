webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/homepage/Button.tsx":
/*!****************************************!*\
  !*** ./components/homepage/Button.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/homepage/Button.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var LoginButton = function LoginButton(_ref) {
  var onClick = _ref.onClick;
  return __jsx("button", {
    type: "button",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, "Login");
};

/* harmony default export */ __webpack_exports__["default"] = (LoginButton);

/***/ }),

/***/ "./components/homepage/LoginButton.tsx":
false,

/***/ "./components/homepage/login/LoginForm.tsx":
/*!*************************************************!*\
  !*** ./components/homepage/login/LoginForm.tsx ***!
  \*************************************************/
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
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _UsernameInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UsernameInput */ "./components/homepage/UsernameInput.tsx");
/* harmony import */ var _PasswordInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PasswordInput */ "./components/homepage/PasswordInput.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Button */ "./components/homepage/Button.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");



var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/homepage/login/LoginForm.tsx";

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
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].serverURL, "/users"),
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_UsernameInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: onChange,
    username: user.username,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_PasswordInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: onChange,
    password: user.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: onLogin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ })

})
//# sourceMappingURL=index.js.0f323cd1c8e26cce03b9.hot-update.js.map