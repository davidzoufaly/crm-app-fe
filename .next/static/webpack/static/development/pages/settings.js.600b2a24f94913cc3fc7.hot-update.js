webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/settings/webform/webFormOptionSelect.tsx":
/*!*************************************************************!*\
  !*** ./components/settings/webform/webFormOptionSelect.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/webFormOptionSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var webFormOptionSelect = function webFormOptionSelect(_ref) {
  var optionSelect = _ref.optionSelect,
      webFields = _ref.webFields,
      addVisibleSelect = _ref.addVisibleSelect;
  var fieldOptionsArray = [];
  webFields.map(function (field) {
    return field.fieldType === "select" ? field.fieldOptions.forEach(function (option) {
      return fieldOptionsArray.push(__jsx("option", {
        key: option.id,
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, option.value));
    }) : null;
  });
  var insertIntoForm = webFields.map(function (field) {
    return optionSelect === field.fieldName ? __jsx("div", {
      key: field.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Should be ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, field.fieldName), " visible in form?"), __jsx("button", {
      id: field.fieldName,
      onClick: addVisibleSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "YES"), __jsx("button", {
      id: field.fieldName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "NO")) : null;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, insertIntoForm, __jsx("select", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, fieldOptionsArray));
};

/* harmony default export */ __webpack_exports__["default"] = (webFormOptionSelect);

/***/ })

})
//# sourceMappingURL=settings.js.600b2a24f94913cc3fc7.hot-update.js.map