webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/ClientForm.tsx":
/*!***********************************!*\
  !*** ./components/ClientForm.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/ClientForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var ClientForm = function ClientForm(_ref) {
  var fields = _ref.fields,
      _onChange = _ref.onChange,
      newClient = _ref.newClient;
  var inputs = fields.map(function (e) {
    if (e.fieldName !== "dateAdded" && e.fieldName !== "dateModified") {
      if (e.fieldType === "text") {
        return __jsx("div", {
          key: e.fieldName,
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
        }, e.fieldName), __jsx("input", {
          type: "text",
          id: e.fieldName,
          onChange: function onChange() {
            return _onChange(e.fieldName, event);
          },
          value: newClient[e.fieldName],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }));
      } else if (e.fieldType === "number") {
        return __jsx("div", {
          key: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, e.fieldName), __jsx("input", {
          type: "number",
          id: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }));
      } else if (e.fieldType === "select") {
        return __jsx("div", {
          key: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, e.fieldName), __jsx("select", {
          id: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, e.fieldOptions.map(function (e) {
          return __jsx("option", {
            value: e.value,
            key: e.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
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
      lineNumber: 42
    },
    __self: this
  }, inputs);
};

/* harmony default export */ __webpack_exports__["default"] = (ClientForm);

/***/ })

})
//# sourceMappingURL=clients.js.405f6a23cf06d1019274.hot-update.js.map