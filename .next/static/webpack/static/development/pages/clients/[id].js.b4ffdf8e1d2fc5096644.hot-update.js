webpackHotUpdate("static/development/pages/clients/[id].js",{

/***/ "./components/SingleClientData.tsx":
/*!*****************************************!*\
  !*** ./components/SingleClientData.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/SingleClientData.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SingleClientData = function SingleClientData(_ref) {
  var fieldsData = _ref.fieldsData,
      client = _ref.client;
  return fieldsData.map(function (field) {
    switch (field.fieldType) {
      case "text":
        return __jsx("li", {
          key: field.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }, new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](field.fieldName).camelStringToText().firstCharUpperCase().getString(), __jsx("textarea", {
          value: client[field.fieldName],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }));

      case "number":
        return __jsx("li", {
          key: field.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](field.fieldName).camelStringToText().firstCharUpperCase().getString(), __jsx("input", {
          type: "number",
          value: client[field.fieldName],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }));

      case "select":
        return __jsx("li", {
          key: field.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](field.fieldName).camelStringToText().firstCharUpperCase().getString(), __jsx("select", {
          value: client[field.fieldName],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, field.fieldOptions.map(function (option) {
          return __jsx("option", {
            key: option.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
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
//# sourceMappingURL=[id].js.b4ffdf8e1d2fc5096644.hot-update.js.map