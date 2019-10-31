webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./components/settings/DefaultFieldsSection.tsx":
/*!******************************************************!*\
  !*** ./components/settings/DefaultFieldsSection.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/DefaultFieldsSection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var DefaultClientFieldsSection = function DefaultClientFieldsSection(_ref) {
  var state = _ref.state,
      toggleSection = _ref.toggleSection,
      sections = _ref.sections;
  var defaultFieldNames = state.filter(function (_ref2) {
    var fieldPermanent = _ref2.fieldPermanent;
    return fieldPermanent === true;
  }).map(function (_ref3) {
    var fieldName = _ref3.fieldName,
        _id = _ref3._id;
    return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h6",
      component: "h3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, fieldName)));
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    my: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
      name: "defaultFieldNames",
      onChange: toggleSection // toggle visibility of section -> default visible
      ,
      checked: sections.defaultFieldNames !== undefined ? sections.defaultFieldNames : true,
      icon: __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }),
      checkedIcon: __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }),
    label: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h4",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.defaultClientFields),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), sections.defaultFieldNames || sections.defaultFieldNames === undefined ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    flexWrap: "wrap",
    mt: "1rem",
    mb: "5rem",
    textAlign: "center",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gridGap: "1rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, defaultFieldNames) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultClientFieldsSection);

/***/ })

})
//# sourceMappingURL=[key].js.37f5fca3c700e6c51bee.hot-update.js.map