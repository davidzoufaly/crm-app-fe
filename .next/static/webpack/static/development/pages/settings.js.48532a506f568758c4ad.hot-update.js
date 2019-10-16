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
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/SelectFieldOptions.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SelectFieldOptions = function SelectFieldOptions(_ref) {
  var editedField = _ref.editedField,
      fieldMethods = _ref.fieldMethods;
  var items = editedField.fieldOptions.map(function (e) {
    return __jsx("div", {
      key: uniqid__WEBPACK_IMPORTED_MODULE_1___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      onChange: function onChange() {
        return fieldMethods.onOptionChange(e.id, event);
      },
      defaultValue: e.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), __jsx("button", {
      id: e.id,
      onClick: fieldMethods.onOptionDelete,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "X"));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, items, __jsx("button", {
    onClick: fieldMethods.handleOptionSpawn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "New"));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectFieldOptions);

/***/ })

})
//# sourceMappingURL=settings.js.48532a506f568758c4ad.hot-update.js.map