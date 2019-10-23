webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard.tsx":
/*!*****************************!*\
  !*** ./pages/dashboard.tsx ***!
  \*****************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ShowRecordsNumber */ "./components/ShowRecordsNumber.tsx");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LoadingSpinner */ "./components/LoadingSpinner.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../library/languages */ "./library/languages.tsx");


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/dashboard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var Dashboard = function Dashboard(_ref) {
  var clientData = _ref.clientData,
      fieldData = _ref.fieldData,
      emailsData = _ref.emailsData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      initialized = _useState[0],
      setInitialized = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__["default"](router.pathname).removeSlash().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].titleSubText).getString();
    document.title = title;
    setInitialized(true);
  }, [router]);
  var h1 = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__["default"](router.pathname).removeSlash().firstCharUpperCase().getString();
  return !initialized ? __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, h1), __jsx(_components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: clientData.data,
    string: _library_languages__WEBPACK_IMPORTED_MODULE_10__["default"].en.saved + "clients",
    link: "/clients",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: fieldData.data,
    string: "fields",
    link: "/settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: emailsData.data,
    string: "emails",
    link: "/emails",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
};

Dashboard.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var resClientCount, clientData, resFieldsData, fieldData, resEmailsCount, emailsData;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            method: "GET",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/clients/count"),
            responseType: "json"
          });

        case 2:
          resClientCount = _context.sent;
          _context.next = 5;
          return resClientCount.data;

        case 5:
          clientData = _context.sent;
          _context.next = 8;
          return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            method: "GET",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/fields/count"),
            responseType: "json"
          });

        case 8:
          resFieldsData = _context.sent;
          _context.next = 11;
          return resFieldsData.data;

        case 11:
          fieldData = _context.sent;
          _context.next = 14;
          return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            method: "GET",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/emails/count"),
            responseType: "json"
          });

        case 14:
          resEmailsCount = _context.sent;
          _context.next = 17;
          return resEmailsCount;

        case 17:
          emailsData = _context.sent;
          return _context.abrupt("return", {
            clientData: clientData,
            fieldData: fieldData,
            emailsData: emailsData
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=dashboard.js.d318c6a375ebaf26ee4f.hot-update.js.map