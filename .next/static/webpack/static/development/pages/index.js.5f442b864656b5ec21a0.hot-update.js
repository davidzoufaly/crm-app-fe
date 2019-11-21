webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextInput */ "./components/homepage/TextInput.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./components/homepage/Button.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../LoadingSpinner */ "./components/LoadingSpinner.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/homepage/RegisterForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;










var RegisterForm = function RegisterForm(_ref) {
  var changeToLogin = _ref.changeToLogin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    username: "",
    password: "",
    repeatPassword: ""
  }),
      regUser = _useState[0],
      setRegUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isReg = _useState2[0],
      setIsReg = _useState2[1];

  var onChange = function onChange(e) {
    setRegUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, regUser, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    console.log(isReg);
  }, [isReg]);

  var sentFormToBe =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var username, password, userRes, userData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = regUser.username, password = regUser.password;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                method: "POST",
                data: {
                  username: username,
                  password: password
                },
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/users"),
                responseType: "json"
              });

            case 3:
              userRes = _context.sent;
              _context.next = 6;
              return userRes.data;

            case 6:
              userData = _context.sent;
              //! refactor
              !!userData ? setIsReg(false) : null;
              _context.t0 = userData.msg;
              _context.next = _context.t0 === _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].msgSuccess ? 11 : _context.t0 === "Exist" ? 14 : 16;
              break;

            case 11:
              alert(_library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.success);
              changeToLogin();
              return _context.abrupt("break", 17);

            case 14:
              alert(_library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.userAlreadyExists);
              return _context.abrupt("break", 17);

            case 16:
              alert(_library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.somethingWentWrong);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sentFormToBe() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onRegister = function onRegister() {
    setTimeout(function () {
      setIsReg(true);
      regUser.password === regUser.repeatPassword ? sentFormToBe() : alert(_library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.passwordsDoesNotMatch);
    }, 4000);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
    component: "h2",
    variant: "h4",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, new _library_stringMethods__WEBPACK_IMPORTED_MODULE_10__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.register).firstCharUpperCase().getString()), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: onChange,
    type: "text",
    value: regUser.username,
    text: "username",
    title: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_10__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.username).firstCharUpperCase().getString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: onChange,
    type: "password",
    value: regUser.password,
    text: "password",
    title: _library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: onChange,
    type: "password",
    value: regUser.repeatPassword,
    text: "repeatPassword",
    title: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_10__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.repeatPassword).firstCharUpperCase().getString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    display: "flex",
    justifyContent: "flex-end",
    mt: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, isReg ? __jsx(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_11__["default"], {
    margin: "r",
    level: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }) : null, __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onRegister,
    text: _library_languages__WEBPACK_IMPORTED_MODULE_9__["default"].en.register,
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ })

})
//# sourceMappingURL=index.js.5f442b864656b5ec21a0.hot-update.js.map