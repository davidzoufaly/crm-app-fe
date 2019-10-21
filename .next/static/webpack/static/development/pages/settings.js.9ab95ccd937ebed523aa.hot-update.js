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
      webFields = _ref.webFields;
  // vem vybrany select
  // nabidni moznost jestli pridat do formu -> ano -> pridat do listu se stringem -> do stavu
  // ne -> zobraz druhy select s options + string -> vloz do listu se stringem -> do stavu
  var insertIntoForm = webFields.map(function (field) {
    return optionSelect === field.fieldName ? __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, "Insert into form ", field.fieldName, "?") : null;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, insertIntoForm);
};

/* harmony default export */ __webpack_exports__["default"] = (webFormOptionSelect);

/***/ })

})
//# sourceMappingURL=settings.js.9ab95ccd937ebed523aa.hot-update.js.map