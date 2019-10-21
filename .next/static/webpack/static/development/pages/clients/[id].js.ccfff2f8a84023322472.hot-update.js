webpackHotUpdate("static/development/pages/clients/[id].js",{

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
            lineNumber: 6
          },
          __self: this
        }, field.fieldName, __jsx("textarea", {
          name: field.fieldName,
          value: client[field.fieldName],
          onChange: onInputChange,
          disabled: field.fieldName === "dateAdded" || field.fieldName === "lastModified",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }));

      case "number":
        return __jsx("div", {
          key: field.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, field.fieldName, __jsx("input", {
          type: "number",
          name: field.fieldName,
          value: client[field.fieldName],
          onChange: onInputChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }));

      case "select":
        return __jsx("div", {
          key: field.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, field.fieldName, __jsx("select", {
          name: field.fieldName,
          value: client[field.fieldName],
          onChange: onInputChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, __jsx("option", {
          key: "---",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "---"), field.fieldOptions.map(function (option) {
          return __jsx("option", {
            key: option.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, option.value);
        })));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SingleClientData);

/***/ }),

/***/ "./library/stringMethods.tsx":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false

})
//# sourceMappingURL=[id].js.ccfff2f8a84023322472.hot-update.js.map