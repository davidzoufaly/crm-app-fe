webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/settings/webform/webFormOptionSelect.tsx":
/*!*************************************************************!*\
  !*** ./components/settings/webform/webFormOptionSelect.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/webFormOptionSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var webFormOptionSelect = function webFormOptionSelect(_ref) {
  var optionSelect = _ref.optionSelect,
      webFields = _ref.webFields,
      addVisibleSelect = _ref.addVisibleSelect;
  // vem vybrany select
  // nabidni moznost jestli pridat do formu -> ano -> pridat do listu se stringem -> do stavu
  // ne -> zobraz druhy select s options + string -> vloz do listu se stringem -> do stavu
  var insertIntoForm = webFields.map(function (field) {
    return optionSelect === field.fieldName ? __jsx("div", {
      key: field.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Should be ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, field.fieldName), " visible in form?"), __jsx("button", {
      id: field.fieldName,
      onClick: addVisibleSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "YES"), __jsx("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "NO")) : null;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, insertIntoForm);
};

/* harmony default export */ __webpack_exports__["default"] = (webFormOptionSelect);

/***/ })

})
//# sourceMappingURL=settings.js.fa715c2834a8ff182f88.hot-update.js.map