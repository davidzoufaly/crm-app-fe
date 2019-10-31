webpackHotUpdate("static/development/pages/clients/[key].js",{

/***/ "./components/LoadingSpinner.tsx":
/*!***************************************!*\
  !*** ./components/LoadingSpinner.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/LoadingSpinner.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var LoadingSpinner = function LoadingSpinner(_ref) {
  var margin = _ref.margin,
      level = _ref.level;

  var styleSpinner = function styleSpinner(p, l) {
    switch (p) {
      case "r":
        return {
          marginRight: "".concat(l, "rem")
        };

      case "l":
        return {
          marginLeft: "".concat(l, "rem")
        };

      case "t":
        return {
          marginTop: "".concat(l, "rem")
        };

      case "b":
        return {
          marginBottom: "".concat(l, "rem")
        };
    }
  };

  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: styleSpinner(margin, level),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ })

})
//# sourceMappingURL=[key].js.a4f4186c5b6142956eb1.hot-update.js.map