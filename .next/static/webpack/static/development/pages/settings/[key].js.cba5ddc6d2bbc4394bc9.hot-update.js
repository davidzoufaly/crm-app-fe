webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./components/settings/customFields/AddOrEditField.tsx":
/*!*************************************************************!*\
  !*** ./components/settings/customFields/AddOrEditField.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/AddOrEditField.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
    fab: {
      marginTop: theme.spacing(3),
      color: theme.palette.common.white
    },
    extendedIcon: {
      marginRight: theme.spacing(2)
    },
    formWrapper: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginTop: theme.spacing(3),
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows["1"],
      padding: theme.spacing(3),
      backgroundColor: theme.palette.grey["200"],
      width: "50%"
    }, theme.breakpoints.down("sm"), {
      width: "100%"
    }),
    textField: {
      marginTop: theme.spacing(2)
    }
  });
});

var AddOrEditField = function AddOrEditField(_ref) {
  var editedField = _ref.editedField,
      displayComponent = _ref.displayComponent,
      fieldMethods = _ref.fieldMethods,
      handleOption = _ref.handleOption;
  var classes = useStyles({});
  return displayComponent ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    className: classes.formWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "h3",
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, editedField.id ? _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.editCustomField : _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.newCustomField), __jsx("form", {
    onSubmit: fieldMethods.saveEditedField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    id: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_3__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.fieldName).textToHtmlProp().getString(),
    autoFocus: true,
    type: "text",
    label: _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.fieldName,
    className: classes.textField,
    value: editedField.fieldName,
    onChange: fieldMethods.onNameChange,
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    className: classes.textField,
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    htmlFor: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_3__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.fieldType).textToHtmlProp().getString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.fieldType), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Select"], {
    id: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_3__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.fieldType).textToHtmlProp().getString(),
    onChange: fieldMethods.onSelectChange,
    value: editedField.fieldType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
    value: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.text), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
    value: "select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.select), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
    value: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.number)))), editedField.fieldType === "select" ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, handleOption) : null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    display: "flex",
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: fieldMethods.toggleDisplayComponent,
    color: "secondary",
    variant: "contained",
    style: {
      marginRight: "1rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.cancel), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.save)))))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Fab"], {
    color: "primary",
    variant: "extended",
    "aria-label": "add",
    className: classes.fab,
    onClick: fieldMethods.toggleDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.field));
};

/* harmony default export */ __webpack_exports__["default"] = (AddOrEditField);

/***/ })

})
//# sourceMappingURL=[key].js.cba5ddc6d2bbc4394bc9.hot-update.js.map