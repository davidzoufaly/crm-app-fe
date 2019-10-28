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
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
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
            lineNumber: 16
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
          name: field.fieldName,
          label: field.fieldName,
          fullWidth: true,
          margin: "normal",
          value: client[field.fieldName],
          onChange: onInputChange,
          disabled: field.fieldName === "Date added" || field.fieldName === "Last modified",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }));

      case "number":
        return __jsx("div", {
          key: field.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, field.fieldName, __jsx("input", {
          type: "number",
          name: field.fieldName,
          value: client[field.fieldName],
          onChange: onInputChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }));

      case "select":
        var fieldNameAsHtml = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_2__["default"](field.fieldName).textToHtmlProp().getString();
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
          key: field.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
          htmlFor: fieldNameAsHtml,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, field.fieldName), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
          name: field.fieldName,
          value: client[field.fieldName],
          onChange: onInputChange,
          id: fieldNameAsHtml,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
          key: _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption), field.fieldOptions.map(function (option) {
          return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
            key: option.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
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
//# sourceMappingURL=[id].js.ec228b817b015d09f1d0.hot-update.js.map