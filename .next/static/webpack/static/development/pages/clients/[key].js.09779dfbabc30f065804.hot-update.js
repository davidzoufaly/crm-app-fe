webpackHotUpdate("static/development/pages/clients/[key].js",{

/***/ "./components/clients/Buttons.tsx":
/*!****************************************!*\
  !*** ./components/clients/Buttons.tsx ***!
  \****************************************/
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
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/Buttons.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Buttons = function Buttons(_ref) {
  var clientsAreNotChecked = _ref.clientsAreNotChecked,
      toggleIsClientAdded = _ref.toggleIsClientAdded,
      deleteMultipleClients = _ref.deleteMultipleClients,
      isClientAdded = _ref.isClientAdded,
      isEmailCreated = _ref.isEmailCreated,
      toggleIsEmailCreated = _ref.toggleIsEmailCreated;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    my: "1rem",
    display: "flex",
    width: "320px",
    maxWidth: "1",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "primary",
    disabled: isClientAdded || isEmailCreated,
    onClick: toggleIsClientAdded,
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.add), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "primary",
    onClick: toggleIsEmailCreated,
    disabled: clientsAreNotChecked || isEmailCreated || isClientAdded,
    startIcon: __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.email), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "secondary",
    disabled: clientsAreNotChecked,
    onClick: deleteMultipleClients,
    startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en["delete"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

/***/ })

})
//# sourceMappingURL=[key].js.09779dfbabc30f065804.hot-update.js.map