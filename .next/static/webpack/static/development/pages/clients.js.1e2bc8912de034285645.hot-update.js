webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/clients/TableHead.tsx":
/*!******************************************!*\
  !*** ./components/clients/TableHead.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/TableHead.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



//TODO: Reverse šipka jen aktivního záhlaví
var TableHead = function TableHead(_ref) {
  var fields = _ref.fields,
      sortBy = _ref.sortBy,
      reverse = _ref.reverse;
  var tableHeadings = fields.map(function (e) {
    var tableHeading = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](e.fieldName).camelStringToText().firstCharUpperCase().getString();
    return __jsx("th", {
      key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, reverse ? "<" : ">", __jsx("button", {
      onClick: function onClick() {
        return sortBy(e.fieldName);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, tableHeading));
  });
  return __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), tableHeadings, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Client Profile")));
};

/* harmony default export */ __webpack_exports__["default"] = (TableHead);

/***/ })

})
//# sourceMappingURL=clients.js.1e2bc8912de034285645.hot-update.js.map