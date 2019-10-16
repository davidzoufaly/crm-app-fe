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
      onOptionChange = _ref.onOptionChange,
      onOptionDelete = _ref.onOptionDelete;
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
      onChange: onOptionChange,
      id: e.id,
      defaultValue: e.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }), __jsx("button", {
      id: e.id,
      onClick: onOptionDelete,
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
      lineNumber: 13
    },
    __self: this
  }, items);
};

/* harmony default export */ __webpack_exports__["default"] = (SelectFieldOptions);

/***/ })

})
//# sourceMappingURL=settings.js.8ff750f7a469b63de68c.hot-update.js.map