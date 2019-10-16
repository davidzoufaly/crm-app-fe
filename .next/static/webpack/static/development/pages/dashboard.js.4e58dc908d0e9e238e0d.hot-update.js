webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/RecordsNumber.tsx":
false,

/***/ "./components/ShowRecordsNumber.tsx":
/*!******************************************!*\
  !*** ./components/ShowRecordsNumber.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/ShowRecordsNumber.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var ShowRecordsNumber = function ShowRecordsNumber(props) {
  var numberOfRecords = props.data;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, numberOfRecords), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Saved ", props.string));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowRecordsNumber);

/***/ }),

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
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/dashboard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Dashboard = function Dashboard(_ref) {
  var clientData = _ref.clientData,
      fieldData = _ref.fieldData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      headingOne = _useState[0],
      setHeadingOne = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      initialized = _useState2[0],
      setInitialized = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setHeadingOne(new _library_stringMethods__WEBPACK_IMPORTED_MODULE_7__["default"](router.pathname).removeSlash().firstCharUpperCase().getString());
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_7__["default"](router.pathname).removeSlash().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].titleSubText).getString();
    document.title = title;
    setInitialized(true);
  });

  if (!initialized) {
    return "Loading...";
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, headingOne), __jsx(_components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: clientData.data,
    string: "clients",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_components_ShowRecordsNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: fieldData.data,
    string: "fields",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));
};

Dashboard.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var resClientCount, clientData, resFieldsData, fieldData;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            method: "get",
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
            method: "get",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/fields/count"),
            responseType: "json"
          });

        case 8:
          resFieldsData = _context.sent;
          _context.next = 11;
          return resFieldsData.data;

        case 11:
          fieldData = _context.sent;
          return _context.abrupt("return", {
            clientData: clientData,
            fieldData: fieldData
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=dashboard.js.4e58dc908d0e9e238e0d.hot-update.js.map