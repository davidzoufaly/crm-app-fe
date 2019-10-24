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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ShowRecordsNumber */ "./components/ShowRecordsNumber.tsx");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LoadingSpinner */ "./components/LoadingSpinner.tsx");
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _components_CountContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CountContext */ "./components/CountContext.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../library/languages */ "./library/languages.tsx");



var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/dashboard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;












var Dashboard = function Dashboard(_ref) {
  var lastCampaign = _ref.lastCampaign,
      clientsLastWeek = _ref.clientsLastWeek;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      initialized = _useState[0],
      setInitialized = _useState[1];

  var user = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_9__["default"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_CountContext__WEBPACK_IMPORTED_MODULE_10__["default"]),
      emailsCounter = _useContext.emailsCounter,
      clientCounter = _useContext.clientCounter,
      fieldCounter = _useContext.fieldCounter;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_12__["default"](router.pathname).removeSlash().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].titleSubText).getString();
    document.title = title;
    setInitialized(true);
    user.checkUser();
    console.log(lastCampaign);
  }, [router]);
  var h1 = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_12__["default"](router.pathname).removeSlash().firstCharUpperCase().getString(); // const campaignStr = `${languages.en.last} ${languages.en.sent} ${lastCampaign[0].date} ${languages.en.to.toLowerCase()} ${lastCampaign[0].to.length} ${lastCampaign[0].to.length > 1 ? languages.en.clients : languages.en.client}`

  var lastWeekStr = "".concat(clientsLastWeek > 0 ? "+" : null, " ").concat(clientsLastWeek, " ").concat(_library_languages__WEBPACK_IMPORTED_MODULE_13__["default"].en.lastWeek);
  return !initialized && !user.user.signedIn ? __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, h1), __jsx(_components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: clientCounter,
    string: _library_languages__WEBPACK_IMPORTED_MODULE_13__["default"].en.clientsSaved,
    buttonString: _library_languages__WEBPACK_IMPORTED_MODULE_13__["default"].en.clients,
    subData: lastWeekStr,
    link: "/clients",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(_components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: fieldCounter.custom,
    string: _library_languages__WEBPACK_IMPORTED_MODULE_13__["default"].en.customClientFields,
    buttonString: _library_languages__WEBPACK_IMPORTED_MODULE_13__["default"].en.customClientFields,
    subData: "".concat(fieldCounter.permanent + fieldCounter.custom, " ").concat(_library_languages__WEBPACK_IMPORTED_MODULE_13__["default"].en.total),
    link: "/settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(_components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: emailsCounter,
    string: _library_languages__WEBPACK_IMPORTED_MODULE_13__["default"].en.emailsSent,
    buttonString: _library_languages__WEBPACK_IMPORTED_MODULE_13__["default"].en.emails // subData={campaignStr}
    ,
    link: "/emails",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }));
};

Dashboard.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var _axios;

    var resLastCampaign, lastCampaign, resLastWeekNumber, clientsLastWeek;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_6___default()((_axios = {
              method: "GET",
              params: {
                user: context.query.Api_KEY
              }
            }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_axios, "params", {
              user: "crm-app"
            }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_axios, "url", "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].serverURL, "/emails/last")), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_axios, "responseType", "json"), _axios));

          case 2:
            resLastCampaign = _context.sent;
            _context.next = 5;
            return resLastCampaign.data;

          case 5:
            lastCampaign = _context.sent;
            _context.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_6___default()({
              method: "GET",
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].serverURL, "/clients/last-week"),
              responseType: "json"
            });

          case 8:
            resLastWeekNumber = _context.sent;
            _context.next = 11;
            return resLastWeekNumber.data;

          case 11:
            clientsLastWeek = _context.sent;
            return _context.abrupt("return", {
              lastCampaign: lastCampaign,
              clientsLastWeek: clientsLastWeek
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=dashboard.js.3d67543d0b5e910a1f57.hot-update.js.map