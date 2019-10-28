webpackHotUpdate("static/development/pages/client/[id].js",{

/***/ "./components/singleClient/ButtonsSingle.tsx":
/*!***************************************************!*\
  !*** ./components/singleClient/ButtonsSingle.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/singleClient/ButtonsSingle.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ButtonsSingle = function ButtonsSingle(_ref) {
  var onDelete = _ref.onDelete,
      toggleIsEmailCreated = _ref.toggleIsEmailCreated,
      isEmailCreated = _ref.isEmailCreated,
      onSave = _ref.onSave;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "primary",
    variant: "contained",
    disabled: isEmailCreated,
    onClick: toggleIsEmailCreated,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.email)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "secondary",
    variant: "contained",
    onClick: onDelete,
    startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en["delete"])), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "primary",
    variant: "contained",
    onClick: onSave,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.save)));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonsSingle);

/***/ })

})
//# sourceMappingURL=[id].js.ef8c2641d9a42f81fd5d.hot-update.js.map