webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/CustomClientFields.tsx":
/*!*******************************************!*\
  !*** ./components/CustomClientFields.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/CustomClientFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var CustomClientFields = function CustomClientFields(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Custom Client Fields"));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomClientFields);

/***/ }),

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
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_DefaultClientFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DefaultClientFields */ "./components/DefaultClientFields.tsx");
/* harmony import */ var _components_CustomClientFields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CustomClientFields */ "./components/CustomClientFields.tsx");


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/settings.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var Settings = function Settings(_ref) {
  var data = _ref.data;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      fields = _useState[0],
      setField = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      headingOne = _useState2[0],
      setHeadingOne = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setField(data);
    setHeadingOne(new _library_stringMethods__WEBPACK_IMPORTED_MODULE_5__["default"](router.pathname).removeSlash().firstCharUpperCase().getString());
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_5__["default"](router.pathname).removeSlash().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_6__["default"].titleSubText).getString();
    document.title = title;
  }, [router]);

  if (fields.length === 0) {
    return "Loading...";
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, headingOne), __jsx(_components_DefaultClientFields__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fields: fields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_components_CustomClientFields__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fields: fields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
};

Settings.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_7___default()({
            method: "get",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_6__["default"].serverURL, "/fields"),
            responseType: "json"
          });

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.data;

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ })

})
//# sourceMappingURL=settings.js.bf6d3e9cd35c65e5d51d.hot-update.js.map