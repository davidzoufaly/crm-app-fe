webpackHotUpdate("static/development/pages/clients.js",{

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
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/stringMethods */ "./library/stringMethods.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/ClientForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ClientForm = function ClientForm(_ref) {
  var fields = _ref.fields,
      _onChange = _ref.onChange,
      newClient = _ref.newClient;
  var inputs = fields.map(function (e) {
    if (e.fieldName !== "dateAdded" && e.fieldName !== "lastModified") {
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
        }, new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](e.fieldName).camelStringToText().firstCharUpperCase().getString()), __jsx("input", {
          type: "text",
          id: e.fieldName // autoFocus={e.fieldName === "firstName"}
          ,
          name: e.fieldName,
          onChange: function onChange() {
            return _onChange(e.fieldType, event);
          },
          defaultValue: newClient[e.fieldName],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }));
      } else if (e.fieldType === "number") {
        return __jsx("div", {
          key: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, __jsx("label", {
          htmlFor: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, " ", new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](e.fieldName).camelStringToText().firstCharUpperCase().getString()), __jsx("input", {
          id: e.fieldName,
          type: "number",
          name: e.fieldName,
          onChange: function onChange() {
            return _onChange(e.fieldType, event);
          },
          defaultValue: newClient[e.fieldName],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }));
      } else if (e.fieldType === "select") {
        return __jsx("div", {
          key: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, __jsx("label", {
          htmlFor: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, " ", new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](e.fieldName).camelStringToText().firstCharUpperCase().getString()), __jsx("select", {
          id: e.fieldName,
          name: e.fieldName,
          onChange: function onChange() {
            return _onChange(e.fieldType, event);
          },
          defaultValue: newClient[e.fieldName],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, __jsx("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "---"), e.fieldOptions.map(function (e) {
          return __jsx("option", {
            value: e.value,
            key: e.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
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
      lineNumber: 74
    },
    __self: this
  }, inputs);
};

/* harmony default export */ __webpack_exports__["default"] = (ClientForm);

/***/ })

})
//# sourceMappingURL=clients.js.ed3d3ad8ef6d12bdadbd.hot-update.js.map