webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/settings/webform/WebFormList.tsx":
/*!*****************************************************!*\
  !*** ./components/settings/webform/WebFormList.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var WebFormList = function WebFormList(_ref) {
  var webFields = _ref.webFields,
      removeFromList = _ref.removeFromList;
  var list = webFields.map(function (_ref2) {
    var _id = _ref2._id,
        fieldName = _ref2.fieldName,
        fieldInForm = _ref2.fieldInForm,
        fieldFormVisible = _ref2.fieldFormVisible,
        fieldOptions = _ref2.fieldOptions,
        fieldType = _ref2.fieldType;
    return fieldInForm ? __jsx("li", {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, fieldName, fieldFormVisible ? "-> visible in form" : fieldType === "select" ? fieldOptions.some(function (e) {
      return e.preselected;
    }) ? "->Hidden!" : null : null, __jsx("button", {
      id: fieldName,
      onClick: removeFromList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "X")) : null;
  });
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, list);
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormList);

/***/ })

})
//# sourceMappingURL=settings.js.3f61963b21e422c0acbf.hot-update.js.map