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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(newClient);
  });
  var inputs = fields.map(function (e) {
    if (e.fieldName !== "dateAdded" && e.fieldName !== "dateModified") {
      if (e.fieldType === "text") {
        return __jsx("div", {
          key: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
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
            lineNumber: 16
          },
          __self: this
        }));
      } else if (e.fieldType === "number") {
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
        }, e.fieldName), __jsx("input", {
          type: "number",
          id: e.fieldName,
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
            lineNumber: 33
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, e.fieldName), __jsx("select", {
          id: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, e.fieldOptions.map(function (e) {
          return __jsx("option", {
            value: e.value,
            key: e.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
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
      lineNumber: 49
    },
    __self: this
  }, inputs);
};

/* harmony default export */ __webpack_exports__["default"] = (ClientForm);

/***/ })

})
//# sourceMappingURL=clients.js.e65e2fb6720c58ac5c01.hot-update.js.map