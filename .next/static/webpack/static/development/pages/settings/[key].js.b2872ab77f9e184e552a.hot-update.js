webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./components/settings/webform/WebFormSection.tsx":
/*!********************************************************!*\
  !*** ./components/settings/webform/WebFormSection.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WebForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebForm */ "./components/settings/webform/WebForm.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var WebFormSection = function WebFormSection(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      toggleSection = _ref.toggleSection,
      sections = _ref.sections;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    my: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
      name: "webForm",
      onChange: toggleSection // toggle visibility of section
      ,
      checked: sections.webForm !== undefined ? sections.webForm : true,
      icon: __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }),
      checkedIcon: __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }),
    label: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      variant: "h4",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.webForm),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), sections.webForm || sections.webForm === undefined ? __jsx(_WebForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    state: state,
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormSection);

/***/ })

})
//# sourceMappingURL=[key].js.b2872ab77f9e184e552a.hot-update.js.map