webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/EmailForm.tsx":
/*!**********************************!*\
  !*** ./components/EmailForm.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");




var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/EmailForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





var EmailForm = function EmailForm(_ref) {
  var to = _ref.to,
      isEmailCreated = _ref.isEmailCreated,
      toggleIsEmailCreated = _ref.toggleIsEmailCreated,
      unCheckAll = _ref.unCheckAll;
  var initEmail = {
    to: to,
    subject: "",
    message: ""
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initEmail),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      spinner = _useState2[0],
      setSpinner = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setEmail(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, email, {
      to: to
    }));
  }, [to]);

  var sendEmail =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setSpinner(true);
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                method: "post",
                data: email,
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_6__["default"].serverURL, "/emails/send"),
                responseType: "json"
              });

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.data;

            case 7:
              data = _context.sent;

              if (data) {
                setSpinner(false);
              }

              if (data.msg === "Success") {
                alert("Your email has been succesfully sent.");
                setEmail(initEmail); // if email is sending from clients page

                toggleIsEmailCreated();
                unCheckAll ? unCheckAll() : null; // setSpinner(false);
              } else {
                // setSpinner(false);
                alert("Something went wrong!");
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sendEmail(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onChange = function onChange(e) {
    setEmail(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, email, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  };

  return isEmailCreated && to.length > 0 ? __jsx("form", {
    onSubmit: sendEmail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "email-to",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "To"), __jsx("input", {
    type: "text",
    id: "email-to",
    name: "to",
    value: email.to,
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "email-subject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Subject"), __jsx("input", {
    type: "text",
    id: "email-to",
    name: "subject",
    value: email.subject,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "email-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Message"), spinner ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }) : null, __jsx("textarea", {
    name: "message",
    onChange: onChange,
    value: email.message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("button", {
    onClick: toggleIsEmailCreated,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Cancel"), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Send")) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (EmailForm);

/***/ })

})
//# sourceMappingURL=clients.js.01d6c20d22c636038728.hot-update.js.map