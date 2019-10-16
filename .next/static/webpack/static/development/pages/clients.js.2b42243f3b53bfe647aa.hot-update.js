webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/TableHead.tsx":
/*!**********************************!*\
  !*** ./components/TableHead.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/TableHead.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TableHead = function TableHead(_ref) {
  var fields = _ref.fields,
      sortBy = _ref.sortBy,
      reverse = _ref.reverse;
  var tableHeadings = fields.map(function (e) {
    var tableHeading = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](e.fieldName).camelStringToText().firstCharUpperCase().getString();
    return __jsx("th", {
      key: tableHeading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, reverse ? "<" : ">", __jsx("button", {
      onClick: function onClick() {
        return sortBy(e.fieldName);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, tableHeading));
  });
  return __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, tableHeadings));
};

/* harmony default export */ __webpack_exports__["default"] = (TableHead);

/***/ })

})
//# sourceMappingURL=clients.js.2b42243f3b53bfe647aa.hot-update.js.map