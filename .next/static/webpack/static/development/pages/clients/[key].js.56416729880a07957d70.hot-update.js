webpackHotUpdate("static/development/pages/clients/[key].js",{

/***/ "./components/EmailForm.tsx":
/*!**********************************!*\
  !*** ./components/EmailForm.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../library/languages */ "./library/languages.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/EmailForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["createStyles"])({
    formWrapper: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      marginTop: theme.spacing(3),
      borderRadius: theme.spacing(1),
      padding: theme.spacing(3),
      boxShadow: theme.shadows["1"],
      backgroundColor: theme.palette.grey["200"],
      width: "50%"
    }, theme.breakpoints.down("sm"), {
      width: "100%"
    }),
    textField: {
      marginTop: theme.spacing(2)
    }
  });
});

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

  var user = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var classes = useStyles({});
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setEmail(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, email, {
      to: to
    }));
  }, [to]);

  var sendEmail =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setSpinner(true);
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                method: "post",
                data: email,
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/emails/send"),
                params: {
                  key: user.user.userkey
                },
                responseType: "json"
              });

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.data;

            case 7:
              data = _context.sent;
              data ? setSpinner(false) : null;

              if (data === _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].msgSuccess || data === "Setup your email settings first") {
                setEmail(initEmail);
                toggleIsEmailCreated(); // if email is sending from clients page

                unCheckAll ? unCheckAll() : null;
                data === _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].msgSuccess ? alert(_library_languages__WEBPACK_IMPORTED_MODULE_7__["default"].en.yourEmailSentSucces) : alert(_library_languages__WEBPACK_IMPORTED_MODULE_7__["default"].en.setupYourEmailSettings);
              } else {
                alert(_library_languages__WEBPACK_IMPORTED_MODULE_7__["default"].en.somethingWentWrong);
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
    setEmail(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, email, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, e.target.name, e.target.value)));
  };

  return isEmailCreated && to.length > 0 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    className: classes.formWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
    component: "h2",
    variant: "h4",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_7__["default"].en.email), __jsx("form", {
    onSubmit: sendEmail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
    type: "text",
    id: "email-to",
    margin: "normal",
    fullWidth: true,
    multiline: true,
    label: _library_languages__WEBPACK_IMPORTED_MODULE_7__["default"].en.to,
    name: "to",
    value: email.to,
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
    type: "text",
    id: "email-subject",
    name: "subject",
    margin: "normal",
    fullWidth: true,
    label: _library_languages__WEBPACK_IMPORTED_MODULE_7__["default"].en.subject,
    autoFocus: true,
    value: email.subject,
    onChange: onChange,
    disabled: spinner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
    name: "message",
    multiline: true,
    rows: "4",
    fullWidth: true,
    label: _library_languages__WEBPACK_IMPORTED_MODULE_7__["default"].en.message,
    onChange: onChange,
    value: email.message,
    disabled: spinner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    display: "flex",
    justifyContent: "flex-end",
    mt: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, spinner ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }) : null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    onClick: toggleIsEmailCreated,
    color: "secondary",
    variant: "contained",
    style: {
      marginRight: "1rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_7__["default"].en.cancel), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    type: "submit",
    color: "primary",
    variant: "contained",
    startIcon: __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_7__["default"].en.send)))))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (EmailForm);

/***/ }),

/***/ "./components/LoadingSpinner.tsx":
/*!***************************************!*\
  !*** ./components/LoadingSpinner.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/LoadingSpinner.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var LoadingSpinner = function LoadingSpinner() {
  return __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ }),

/***/ "./library/globalVariables.tsx":
/*!*************************************!*\
  !*** ./library/globalVariables.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var globalVars = {
  titleSubText: "| CRM-APP",
  // serverURL: "http://localhost:8080/api",
  serverURL: "https://crm-app-be.herokuapp.com/api",
  permanentFields: {
    fistName: "First name",
    lastName: "Last name",
    email: "Email",
    dateAdded: "Date added",
    lastModified: "Last modified"
  },
  fieldTypes: {
    text: "text",
    number: "number",
    select: "select"
  },
  blankOption: "---",
  msgSuccess: "Success"
};
/* harmony default export */ __webpack_exports__["default"] = (globalVars);

/***/ })

})
//# sourceMappingURL=[key].js.56416729880a07957d70.hot-update.js.map