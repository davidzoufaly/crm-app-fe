webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./pages/settings.tsx":
/*!****************************!*\
  !*** ./pages/settings.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _components_settings_DefaultFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/settings/DefaultFields */ "./components/settings/DefaultFields.tsx");
/* harmony import */ var _components_settings_customFields_CustomFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/settings/customFields/CustomFields */ "./components/settings/customFields/CustomFields.tsx");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LoadingSpinner */ "./components/LoadingSpinner.tsx");
/* harmony import */ var _components_settings_EmailSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/settings/EmailSettings */ "./components/settings/EmailSettings.tsx");
/* harmony import */ var _components_settings_webform_WebForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/settings/webform/WebForm */ "./components/settings/webform/WebForm.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/settings.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














var Settings = function Settings(_ref) {
  var dataFields = _ref.dataFields,
      dataEmailSettings = _ref.dataEmailSettings;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(dataFields),
      fields = _useState[0],
      setField = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      initialized = _useState2[0],
      setInitialized = _useState2[1];

  var user = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_6__["default"]);

  var refreshList =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                method: "get",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].serverURL, "/fields/"),
                responseType: "json"
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.data;

            case 5:
              data = _context.sent;
              setField(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function refreshList() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //title from url
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_13__["default"](router.pathname).removeSlash().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].titleSubText).getString();
    document.title = title; //componendDidMount effect

    setInitialized(true);
    user.checkUser();
  }, [router]);
  var h1 = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_13__["default"](router.pathname).removeSlash().firstCharUpperCase().getString();
  return !user.user.signedIn && !initialized ? __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "h3",
    component: "h1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, h1), __jsx(_components_settings_DefaultFields__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fields: fields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(_components_settings_customFields_CustomFields__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fields: fields,
    refreshList: refreshList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_components_settings_EmailSettings__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: (username, pass),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(_components_settings_webform_WebForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fields: fields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }));
};

Settings.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {
    var resFields, dataFields, resEmailSettings, dataEmailSettings, _ref4, username, pass;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_5___default()({
              method: "GET",
              params: {
                key: context.query.Api_KEY
              },
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].serverURL, "/fields"),
              responseType: "json"
            });

          case 2:
            resFields = _context2.sent;
            _context2.next = 5;
            return resFields.data;

          case 5:
            dataFields = _context2.sent;
            _context2.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_5___default()({
              method: "GET",
              params: {
                key: context.query.Api_KEY
              },
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].serverURL, "/emails/email-settings"),
              responseType: "json"
            });

          case 8:
            resEmailSettings = _context2.sent;
            _context2.next = 11;
            return resEmailSettings.data;

          case 11:
            dataEmailSettings = _context2.sent;
            _context2.next = 14;
            return dataEmailSettings;

          case 14:
            _ref4 = _context2.sent;
            username = _ref4.username;
            pass = _ref4.pass;
            return _context2.abrupt("return", {
              dataFields: dataFields,
              username: username,
              pass: pass
            });

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ })

})
//# sourceMappingURL=settings.js.e9f7ed5708db7214a0af.hot-update.js.map