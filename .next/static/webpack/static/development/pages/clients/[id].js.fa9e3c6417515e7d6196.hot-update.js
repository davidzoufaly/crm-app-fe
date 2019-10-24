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
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
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
            lineNumber: 8
          },
          __self: this
        }, field.fieldName, __jsx("textarea", {
          name: field.fieldName,
          value: client[field.fieldName],
          onChange: onInputChange,
          disabled: field.fieldName === "Date added" || field.fieldName === "lastModified",
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
            lineNumber: 15
          },
          __self: this
        }, field.fieldName, __jsx("input", {
          type: "number",
          name: field.fieldName,
          value: client[field.fieldName],
          onChange: onInputChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }));

      case "select":
        return __jsx("div", {
          key: field.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, field.fieldName, __jsx("select", {
          name: field.fieldName,
          value: client[field.fieldName],
          onChange: onInputChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, __jsx("option", {
          key: "---",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption), field.fieldOptions.map(function (option) {
          return __jsx("option", {
            key: option.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
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
//# sourceMappingURL=[id].js.fa9e3c6417515e7d6196.hot-update.js.map