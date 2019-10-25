webpackHotUpdate("static/development/pages/clients/[key].js",{

/***/ "./components/clients/ClientForm.tsx":
/*!*******************************************!*\
  !*** ./components/clients/ClientForm.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/ClientForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ClientForm = function ClientForm(_ref) {
  var fields = _ref.fields,
      _onChange = _ref.onChange,
      newClient = _ref.newClient;
  var inputs = fields.map(function (e) {
    if (e.fieldName !== _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].permanentFields.dateAdded && e.fieldName !== _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].permanentFields.lastModified) {
      if (e.fieldType === "text") {
        return __jsx("div", {
          key: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }, __jsx("label", {
          htmlFor: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, e.fieldName), __jsx("input", {
          type: "text",
          id: e.fieldName,
          autoFocus: e.fieldName === _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].permanentFields.fistName,
          name: e.fieldName,
          onChange: function onChange() {
            return _onChange(e.fieldType, event);
          },
          defaultValue: newClient[e.fieldName],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }));
      } else if (e.fieldType === "number") {
        return __jsx("div", {
          key: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, __jsx("label", {
          htmlFor: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, e.fieldName), __jsx("input", {
          id: e.fieldName,
          type: "number",
          name: e.fieldName,
          onChange: function onChange() {
            return _onChange(e.fieldType, event);
          },
          defaultValue: newClient[e.fieldName],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }));
      } else if (e.fieldType === "select") {
        return __jsx("div", {
          key: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, __jsx("label", {
          htmlFor: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, e.fieldName), __jsx("select", {
          id: e.fieldName,
          name: e.fieldName,
          onChange: function onChange() {
            return _onChange(e.fieldType, event);
          },
          defaultValue: newClient[e.fieldName],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption), e.fieldOptions.map(function (e) {
          return __jsx("option", {
            value: e.value,
            key: e.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, e.value);
        })));
      }
    }
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, inputs);
};

/* harmony default export */ __webpack_exports__["default"] = (ClientForm);

/***/ })

})
//# sourceMappingURL=[key].js.b271e3eb5af6546bbaf8.hot-update.js.map