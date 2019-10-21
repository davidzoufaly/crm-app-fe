webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/settings/webform/WebFormOptionSelect.tsx":
/*!*************************************************************!*\
  !*** ./components/settings/webform/WebFormOptionSelect.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WebFormOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebFormOptions */ "./components/settings/webform/WebFormOptions.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormOptionSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var webFormOptionSelect = function webFormOptionSelect(_ref) {
  var optionSelect = _ref.optionSelect,
      webFields = _ref.webFields,
      addVisibleSelect = _ref.addVisibleSelect;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showOptions = _useState[0],
      setShowOptions = _useState[1];

  var showOptionsOnClick = function showOptionsOnClick() {
    setShowOptions(true);
  };

  var insertIntoForm = webFields.map(function (field) {
    return optionSelect !== null ? optionSelect[0].fieldName === field.fieldName ? __jsx("div", {
      key: field.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Should be ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, field.fieldName), " visible in form?"), __jsx("button", {
      id: field.fieldName,
      onClick: addVisibleSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "YES"), __jsx("button", {
      onClick: showOptionsOnClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "NO")) : null : null;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, insertIntoForm, showOptions ? __jsx(_WebFormOptions__WEBPACK_IMPORTED_MODULE_1__["default"], {
    optionSelect: optionSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (webFormOptionSelect);

/***/ })

})
//# sourceMappingURL=settings.js.4ff25cb7c41f6e871eb4.hot-update.js.map