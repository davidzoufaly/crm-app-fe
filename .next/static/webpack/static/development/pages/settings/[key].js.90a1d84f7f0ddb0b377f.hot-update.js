webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./components/settings/webform/WebFormSubSelect.tsx":
/*!**********************************************************!*\
  !*** ./components/settings/webform/WebFormSubSelect.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSubSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var WebFormSubSelect = function WebFormSubSelect(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      addHiddenSelect = _ref.addHiddenSelect,
      setCounter = _ref.setCounter,
      counter = _ref.counter;
  return state.some(function (e) {
    return e.fieldFormVisible === false && e.pause;
  }) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "h4",
    variant: "h6",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.pleaseSelectOption), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputLabel"], {
    htmlFor: "field-sub-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldName), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    id: "field-sub-select",
    onChange: function onChange() {
      return addHiddenSelect(dispatch, setCounter, counter, e);
    },
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, state.map(function (field) {
    return field.pause ? field.fieldOptions.map(function (option) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
        key: option.id,
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, option.value);
    }) : null;
  }))))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormSubSelect);

/***/ })

})
//# sourceMappingURL=[key].js.90a1d84f7f0ddb0b377f.hot-update.js.map