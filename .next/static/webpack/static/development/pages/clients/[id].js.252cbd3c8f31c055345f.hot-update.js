webpackHotUpdate("static/development/pages/clients/[id].js",{

/***/ "./library/stringMethods.tsx":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./pages/clients/[id].tsx":
/*!********************************!*\
  !*** ./pages/clients/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/clients/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 //TODO: SKRÝVÁNÍ POLÍ CO NEJSOU V DB

var Client = function Client(_ref) {
  var clientData = _ref.clientData,
      fieldsData = _ref.fieldsData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(clientData),
      client = _useState[0],
      setEditedClient = _useState[1];

  var firstName = client.firstName,
      lastName = client.lastName;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.title = "".concat(firstName, " ").concat(lastName, " ").concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].titleSubText); // console.log(clientData);
    // console.log(fieldsData);
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, firstName, " ", lastName), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, showAllProperities()));
};

Client.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, resClient, clientData, resFields, fieldsData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_4___default()({
              method: "get",
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].serverURL, "/clients/").concat(id),
              responseType: "json"
            });

          case 3:
            resClient = _context.sent;
            _context.next = 6;
            return resClient.data;

          case 6:
            clientData = _context.sent;
            _context.next = 9;
            return axios__WEBPACK_IMPORTED_MODULE_4___default()({
              method: "get",
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].serverURL, "/fields"),
              responseType: "json"
            });

          case 9:
            resFields = _context.sent;
            _context.next = 12;
            return resFields.data;

          case 12:
            fieldsData = _context.sent;
            return _context.abrupt("return", {
              clientData: clientData,
              fieldsData: fieldsData
            });

          case 14:
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

/* harmony default export */ __webpack_exports__["default"] = (Client);

/***/ })

})
//# sourceMappingURL=[id].js.252cbd3c8f31c055345f.hot-update.js.map