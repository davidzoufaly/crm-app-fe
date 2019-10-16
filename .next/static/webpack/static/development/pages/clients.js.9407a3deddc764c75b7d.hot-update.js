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
/* harmony import */ var _components_clientTable_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/clientTable/TableBody */ "./components/clientTable/TableBody.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _components_clientTable_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/clientTable/TableHead */ "./components/clientTable/TableHead.tsx");
/* harmony import */ var _components_CreateClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CreateClient */ "./components/CreateClient.tsx");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/clients.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var Clients = function Clients(_ref) {
  var fieldData = _ref.fieldData,
      clientData = _ref.clientData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(function (state, action) {}, clientData),
      clients = _useReducer[0],
      setClients = _useReducer[1]; //TODO: SPOJIT DO JEDNOHO STATU


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      reverse = _useState[0],
      setReverseOrder = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("firstName"),
      sort = _useState2[0],
      setSortBy = _useState2[1]; //


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      headingOne = _useState3[0],
      setHeadingOne = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      initialized = _useState4[0],
      setInitialized = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isClientAdded = _useState5[0],
      setIsClientAdded = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setHeadingOne(new _library_stringMethods__WEBPACK_IMPORTED_MODULE_7__["default"](router.pathname).removeSlash().firstCharUpperCase().getString());
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_7__["default"](router.pathname).removeSlash().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].titleSubText).getString();
    document.title = title;
    setInitialized(true);
  });

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
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: "get",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/clients/"),
                responseType: "json"
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.data;

            case 5:
              data = _context.sent;
              setClients(data);

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

  var sortBy = function sortBy(fieldName) {
    setSortBy(fieldName);
    !reverse ? setReverseOrder(true) : setReverseOrder(false);
  };

  var toggleIsClientAdded = function toggleIsClientAdded() {
    isClientAdded ? setIsClientAdded(false) : setIsClientAdded(true);
  };

  if (!initialized) {
    return "Loading";
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, headingOne), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return setIsClientAdded(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Add new client"), __jsx(_components_CreateClient__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fields: fieldData,
    isClientAdded: isClientAdded,
    toggleIsClientAdded: toggleIsClientAdded,
    refreshList: refreshList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_components_clientTable_TableHead__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fields: fieldData,
    sortBy: sortBy,
    reverse: reverse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_components_clientTable_TableBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
    clients: clients,
    fields: fieldData,
    sort: sort,
    reverse: reverse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))));
};

Clients.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var clientRes, clientData, fieldRes, fieldData;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            method: "get",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/clients"),
            responseType: "json"
          });

        case 2:
          clientRes = _context2.sent;
          _context2.next = 5;
          return clientRes.data;

        case 5:
          clientData = _context2.sent;
          _context2.next = 8;
          return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            method: "get",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/fields"),
            responseType: "json"
          });

        case 8:
          fieldRes = _context2.sent;
          _context2.next = 11;
          return fieldRes.data;

        case 11:
          fieldData = _context2.sent;
          return _context2.abrupt("return", {
            clientData: clientData,
            fieldData: fieldData
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}));
/* harmony default export */ __webpack_exports__["default"] = (Clients);

/***/ })

})
//# sourceMappingURL=clients.js.9407a3deddc764c75b7d.hot-update.js.map