webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/DefaultClientFields.tsx":
/*!********************************************!*\
  !*** ./components/DefaultClientFields.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/DefaultClientFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var DefaultClientFields = function DefaultClientFields(_ref) {
  var fields = _ref.fields;
  var fieldNames = fields.filter(function (_ref2) {
    var fieldPermanent = _ref2.fieldPermanent;
    return console.log(typeof fieldPermanent);
  }).map(function (e) {
    var fieldName = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](e.fieldName).camelStringToText().firstCharUpperCase().getString();
    return __jsx("div", {
      key: e._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, fieldName);
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Default client fields"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, fieldNames));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultClientFields);

/***/ })

})
//# sourceMappingURL=settings.js.ce400b5452dc3ec9a622.hot-update.js.map