webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./components/settings/customFields/CustomFieldsSection.tsx":
/*!******************************************************************!*\
  !*** ./components/settings/customFields/CustomFieldsSection.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFields */ "./components/settings/customFields/CustomFields.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/CustomFieldsSection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var CustomFieldsSection = function CustomFieldsSection(_ref) {
  var toggleSection = _ref.toggleSection,
      addField = _ref.addField,
      sections = _ref.sections,
      fields = _ref.fields,
      refreshList = _ref.refreshList;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    my: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
      onChange: toggleSection,
      name: "customFields",
      id: "custom-fields" // toggle visibility of section
      ,
      checked: sections.customFields !== undefined ? sections.customFields : true,
      icon: __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }),
      checkedIcon: __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }),
    label: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "h4",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.customClientFields),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), sections.customFields || sections.customFields === undefined ? __jsx(_CustomFields__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fields: fields,
    refreshList: refreshList,
    addField: addField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (CustomFieldsSection);

/***/ })

})
//# sourceMappingURL=[key].js.a74b0505a0c98f3a62df.hot-update.js.map