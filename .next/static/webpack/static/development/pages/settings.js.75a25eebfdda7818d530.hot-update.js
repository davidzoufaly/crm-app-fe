webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/settings/webform/WebFormSelect.tsx":
/*!*******************************************************!*\
  !*** ./components/settings/webform/WebFormSelect.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var WebFormSelect = function WebFormSelect(_ref) {
  var webFields = _ref.webFields,
      addNotSelect = _ref.addNotSelect;
  var selectOptions = webFields.map(function (field) {
    return !field.fieldInForm && field.fieldName !== _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].permanentFields.dateAdded && field.fieldName !== _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].permanentFields.lastModified ? __jsx("option", {
      key: field._id,
      value: field.fieldName,
      id: field._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, field.fieldName) : null;
  });
  return selectOptions.some(function (field) {
    return field !== null;
  }) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("select", {
    name: "fields",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("option", {
    key: _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption), selectOptions)) : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "All fields selected");
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormSelect);

/***/ })

})
//# sourceMappingURL=settings.js.75a25eebfdda7818d530.hot-update.js.map