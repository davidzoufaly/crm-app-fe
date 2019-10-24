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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextInput */ "./components/homepage/TextInput.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./components/homepage/Button.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../library/stringMethods */ "./library/stringMethods.tsx");



var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/homepage/RegisterForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var RegisterForm = function RegisterForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    username: "",
    password: "",
    repeatPassword: ""
  }),
      regUser = _useState[0],
      setRegUser = _useState[1];

  var onChange = function onChange(e) {
    switch (e.target.name) {
      case "username":
        return setRegUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, regUser, {
          username: e.target.value
        }));

      case "password":
        return setRegUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, regUser, {
          password: e.target.value
        }));

      case "repeat-password":
        return setRegUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, regUser, {
          repeatPassword: e.target.value
        }));
    }
  };

  var sentFormToBe =
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
                data: regUser,
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_7__["default"].serverURL, "/users"),
                responseType: "json"
              });

            case 2:
              userRes = _context.sent;
              _context.next = 5;
              return userRes.data;

            case 5:
              userData = _context.sent;

              if (userData.msg === "Success") {
                alert(_library_languages__WEBPACK_IMPORTED_MODULE_8__["default"].en.success);
              } else {
                alert(_library_languages__WEBPACK_IMPORTED_MODULE_8__["default"].en.somethingWentWrong);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sentFormToBe() {
      return _ref.apply(this, arguments);
    };
  }();

  var onRegister = function onRegister() {};

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Register"), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChange: onChange,
    type: "text",
    value: regUser.username,
    text: "username",
    title: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_8__["default"].en.username).firstCharUpperCase().getString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChange: onChange,
    type: "password",
    value: regUser.password,
    text: "password",
    title: _library_languages__WEBPACK_IMPORTED_MODULE_8__["default"].en.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChange: onChange,
    type: "password",
    value: regUser.repeatPassword,
    text: "repeat-password",
    title: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_8__["default"].en.repeatPassword).firstCharUpperCase().getString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: onRegister,
    text: _library_languages__WEBPACK_IMPORTED_MODULE_8__["default"].en.register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ })

})
//# sourceMappingURL=index.js.6d665445540fa62d3f8d.hot-update.js.map