webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./pages/clients.tsx":
/*!***************************!*\
  !*** ./pages/clients.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_ClientList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ClientList */ "./components/ClientList.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _components_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TableHead */ "./components/TableHead.tsx");


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/clients.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







 //TODO: TABULKA DYNAMICKÉ ZÁHLAVÍ
//TODO: PŘIDAT NOVÉHO KLIENTA

var Clients = function Clients(_ref) {
  var fieldData = _ref.fieldData,
      clientData = _ref.clientData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(clientData),
      clients = _useState[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      reverse = _useState2[0],
      setReverseOrder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("name"),
      sort = _useState3[0],
      setSortBy = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      headingOne = _useState4[0],
      setHeadingOne = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      initialized = _useState5[0],
      setInitialized = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setHeadingOne(new _library_stringMethods__WEBPACK_IMPORTED_MODULE_7__["default"](router.pathname).removeSlash().firstCharUpperCase().getString());
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_7__["default"](router.pathname).removeSlash().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].titleSubText).getString();
    document.title = title;
    console.log(clientData);
    setInitialized(true);
  });

  var sortBy = function sortBy() {
    setSortBy("age");
    reverse === false ? setReverseOrder(true) : setReverseOrder(false);
  };

  if (!initialized) {
    return "Loading";
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, headingOne), __jsx("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_components_TableHead__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fields: fieldData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_components_ClientList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    clients: clients,
    sort: sort,
    reverse: reverse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))));
};

Clients.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var clientRes, clientData, fieldRes, fieldData;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            method: "get",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/clients"),
            responseType: "json"
          });

        case 2:
          clientRes = _context.sent;
          _context.next = 5;
          return clientRes.data;

        case 5:
          clientData = _context.sent;
          _context.next = 8;
          return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            method: "get",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/fields"),
            responseType: "json"
          });

        case 8:
          fieldRes = _context.sent;
          _context.next = 11;
          return fieldRes.data;

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
/* harmony default export */ __webpack_exports__["default"] = (Clients);

/***/ })

})
//# sourceMappingURL=clients.js.88a44691462611226d0e.hot-update.js.map