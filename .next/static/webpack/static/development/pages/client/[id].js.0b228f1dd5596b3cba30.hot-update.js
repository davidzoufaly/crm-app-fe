webpackHotUpdate("static/development/pages/client/[id].js",{

/***/ "./components/singleClient/SingleClientData.tsx":
/*!******************************************************!*\
  !*** ./components/singleClient/SingleClientData.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/singleClient/SingleClientData.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SingleClientData = function SingleClientData(_ref) {
  var fieldsData = _ref.fieldsData,
      client = _ref.client,
      onInputChange = _ref.onInputChange;
  return fieldsData.map(function (field) {
    switch (field.fieldType) {
      case "text":
        return __jsx("div", {
          key: field.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
          name: field.fieldName,
          label: field.fieldName,
          value: client[field.fieldName],
          onChange: onInputChange,
          disabled: field.fieldName === "Date added" || field.fieldName === "Last modified",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }));

      case "number":
        return __jsx("div", {
          key: field.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, field.fieldName, __jsx("input", {
          type: "number",
          name: field.fieldName,
          value: client[field.fieldName],
          onChange: onInputChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }));

      case "select":
        return __jsx("div", {
          key: field.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, field.fieldName, __jsx("select", {
          name: field.fieldName,
          value: client[field.fieldName],
          onChange: onInputChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, __jsx("option", {
          key: "---",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption), field.fieldOptions.map(function (option) {
          return __jsx("option", {
            key: option.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, option.value);
        })));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SingleClientData);

/***/ })

})
//# sourceMappingURL=[id].js.0b228f1dd5596b3cba30.hot-update.js.map