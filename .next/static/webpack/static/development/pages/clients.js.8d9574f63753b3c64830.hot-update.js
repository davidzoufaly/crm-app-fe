webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/clientTable/Buttons.tsx":
/*!********************************************!*\
  !*** ./components/clientTable/Buttons.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clientTable/Buttons.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Buttons = function Buttons(_ref) {
  var disabled = _ref.disabled,
      toggleIsClientAdded = _ref.toggleIsClientAdded,
      deleteMultipleClients = _ref.deleteMultipleClients,
      isClientAdded = _ref.isClientAdded;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "primary",
    disabled: isClientAdded,
    onClick: toggleIsClientAdded,
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Add new"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "secondary",
    disabled: disabled,
    onClick: deleteMultipleClients,
    startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Delete"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "primary",
    disabled: disabled,
    startIcon: __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Email"));
};

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

/***/ })

})
//# sourceMappingURL=clients.js.8d9574f63753b3c64830.hot-update.js.map