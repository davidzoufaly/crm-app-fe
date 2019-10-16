webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/SelectFieldOptions.tsx":
/*!*******************************************!*\
  !*** ./components/SelectFieldOptions.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/SelectFieldOptions.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var SelectFieldOptions = function SelectFieldOptions(_ref) {
  var options = _ref.options,
      fieldMethods = _ref.fieldMethods;
  var items = options.map(function (e) {
    return __jsx("div", {
      key: e.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      onChange: function onChange() {
        return fieldMethods.onOptionChange(e.id, event);
      },
      value: e.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }), __jsx("button", {
      id: e.id,
      onClick: fieldMethods.onOptionDelete,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, "X"));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, items, __jsx("button", {
    onClick: fieldMethods.handleOptionSpawn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "New"));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectFieldOptions);

/***/ })

})
//# sourceMappingURL=settings.js.7d10d265c8cbcefcc520.hot-update.js.map