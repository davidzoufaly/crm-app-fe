webpackHotUpdate("static/development/pages/settings/[key].js",{

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
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var WebFormSelect = function WebFormSelect(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      counter = _ref.counter,
      setCounter = _ref.setCounter;
  var selectOptions = state.map(function (field) {
    return !field.fieldInForm && field.fieldName !== "Date added" && field.fieldName !== "Last modified" ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      key: field._id,
      value: field.fieldName,
      id: field.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, field.fieldName) : null;
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.selectField), selectOptions.some(function (field) {
    return field !== null;
  }) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    fullWidth: true,
    disabled: state.some(function (e) {
      return e.pause;
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    htmlFor: "field-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldName), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    name: "fields",
    id: "field-select",
    onChange: function onChange() {
      return Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__["handleAddingToWF"])(dispatch, state, counter, setCounter, event);
    },
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, selectOptions)) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.allFieldsSelected));
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormSelect);

/***/ })

})
//# sourceMappingURL=[key].js.ced4e75d9eed0c00dffe.hot-update.js.map