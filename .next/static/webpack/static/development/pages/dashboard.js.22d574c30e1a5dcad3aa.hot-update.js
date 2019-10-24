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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ShowRecordsNumber */ "./components/ShowRecordsNumber.tsx");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LoadingSpinner */ "./components/LoadingSpinner.tsx");
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _components_CountContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CountContext */ "./components/CountContext.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../library/languages */ "./library/languages.tsx");


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/dashboard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var Dashboard = function Dashboard(_ref) {
  var lastCampaign = _ref.lastCampaign,
      clientsLastWeek = _ref.clientsLastWeek;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      initialized = _useState[0],
      setInitialized = _useState[1];

  var user = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_8__["default"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_CountContext__WEBPACK_IMPORTED_MODULE_9__["default"]),
      emailsCounter = _useContext.emailsCounter,
      clientCounter = _useContext.clientCounter,
      fieldCounter = _useContext.fieldCounter;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_11__["default"](router.pathname).removeSlash().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].titleSubText).getString();
    document.title = title;
    setInitialized(true);
    user.checkUser();
  }, [router]);
  var h1 = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_11__["default"](router.pathname).removeSlash().firstCharUpperCase().getString();
  var campaignStr = "".concat(_library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.last, " ").concat(_library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.sent, " ").concat(lastCampaign[0].date, " ").concat(_library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.to.toLowerCase(), " ").concat(lastCampaign[0].to.length, " ").concat(lastCampaign[0].to.length > 1 ? _library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.clients : _library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.client);
  var lastWeekStr = "".concat(clientsLastWeek > 0 ? "+" : null, " ").concat(clientsLastWeek, " ").concat(_library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.lastWeek);
  return !initialized && !user.user.signedIn ? __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, h1), __jsx(_components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: clientCounter,
    string: _library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.clientsSaved,
    buttonString: _library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.clients,
    subData: lastWeekStr,
    link: "/clients",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: fieldCounter.custom,
    string: _library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.customClientFields,
    buttonString: _library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.customClientFields,
    subData: "".concat(fieldCounter.permanent + fieldCounter.custom, " ").concat(_library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.total),
    link: "/settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: emailsCounter,
    string: _library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.emailsSent,
    buttonString: _library_languages__WEBPACK_IMPORTED_MODULE_12__["default"].en.emails,
    subData: campaignStr,
    link: "/emails",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }));
};

Dashboard.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var resLastCampaign, lastCampaign, resLastWeekNumber, clientsLastWeek;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          __jsx(_components_UserContext__WEBPACK_IMPORTED_MODULE_8__["default"].Consumer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          });

          _context.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_5___default()({
            method: "GET",
            params: {
              user: user.user.username
            },
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].serverURL, "/emails/last"),
            responseType: "json"
          });

        case 3:
          resLastCampaign = _context.sent;
          _context.next = 6;
          return resLastCampaign.data;

        case 6:
          lastCampaign = _context.sent;
          _context.next = 9;
          return axios__WEBPACK_IMPORTED_MODULE_5___default()({
            method: "GET",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].serverURL, "/clients/last-week"),
            responseType: "json"
          });

        case 9:
          resLastWeekNumber = _context.sent;
          _context.next = 12;
          return resLastWeekNumber.data;

        case 12:
          clientsLastWeek = _context.sent;
          return _context.abrupt("return", {
            lastCampaign: lastCampaign,
            clientsLastWeek: clientsLastWeek
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=dashboard.js.22d574c30e1a5dcad3aa.hot-update.js.map