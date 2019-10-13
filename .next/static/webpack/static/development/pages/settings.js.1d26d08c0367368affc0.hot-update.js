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
  var defaultFieldNames = fields.filter(function (_ref2) {
    var fieldPermanent = _ref2.fieldPermanent;
    return fieldPermanent === true;
  }).map(function (_ref3) {
    var fieldName = _ref3.fieldName,
        _id = _ref3._id;
    var defaultFieldNameFormated = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](fieldName).camelStringToText().firstCharUpperCase().getString();
    return __jsx("div", {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, defaultFieldNameFormated));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Default client fields"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, defaultFieldNames));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultClientFields);

/***/ })

})
//# sourceMappingURL=settings.js.1d26d08c0367368affc0.hot-update.js.map