webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/settings/fields/AddOrEditField.tsx":
/*!*******************************************************!*\
  !*** ./components/settings/fields/AddOrEditField.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/fields/AddOrEditField.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var AddOrEditField = function AddOrEditField(_ref) {
  var editedField = _ref.editedField,
      displayComponent = _ref.displayComponent,
      fieldMethods = _ref.fieldMethods,
      handleOption = _ref.handleOption;
  return displayComponent ? __jsx("form", {
    onSubmit: fieldMethods.saveEditedField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, editedField.id ? _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.editCustomField : _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.newCustomField), __jsx("label", {
    htmlFor: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_4__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.fieldName).textToHtmlProp().getString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.fieldName), __jsx("input", {
    type: "text",
    id: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_4__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.fieldName).textToHtmlProp().getString(),
    autoFocus: true,
    value: editedField.fieldName,
    onChange: fieldMethods.onNameChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "field-type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.fieldType), __jsx("select", {
    id: "field-type",
    onChange: fieldMethods.onSelectChange,
    value: editedField.fieldType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("option", {
    value: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.text), __jsx("option", {
    value: "select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.select), __jsx("option", {
    value: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.number)), editedField.fieldType === "select" ? handleOption : null, __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.save), __jsx("button", {
    onClick: fieldMethods.toggleDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.cancel)) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "primary",
    "aria-label": "add",
    onClick: fieldMethods.toggleDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.addNewField));
};

/* harmony default export */ __webpack_exports__["default"] = (AddOrEditField);

/***/ })

})
//# sourceMappingURL=settings.js.5d64601d8ab9db662c6e.hot-update.js.map