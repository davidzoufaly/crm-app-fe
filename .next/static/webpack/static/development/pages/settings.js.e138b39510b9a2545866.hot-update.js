webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/settings/webform/WebFormOptions.tsx":
/*!********************************************************!*\
  !*** ./components/settings/webform/WebFormOptions.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormOptions.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var WebFormOptions = function WebFormOptions(_ref) {
  var addHiddenSelect = _ref.addHiddenSelect,
      webFields = _ref.webFields;
  var options = webFields.map(function (field) {
    return field.pause ? field.fieldOptions.map(function (option) {
      return __jsx("option", {
        key: option.id,
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      }, option.value);
    }) : null;
  });
  return webFields.some(function (e) {
    return e.pause;
  }) ? __jsx("select", {
    onChange: addHiddenSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("option", {
    key: _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption), options) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormOptions);

/***/ })

})
//# sourceMappingURL=settings.js.e138b39510b9a2545866.hot-update.js.map