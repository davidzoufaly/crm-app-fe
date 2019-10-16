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
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/ClientForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import { useEffect } from "react";


var ClientForm = function ClientForm(_ref) {
  var fields = _ref.fields;
  console.log(fields);
  var inputs = fields.map(function (e) {
    var inputType = function inputType() {
      if (e.fieldType === "text") {
        return __jsx("input", {
          type: "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        });
      } else if (e.fieldType === "number") {
        return __jsx("input", {
          type: "number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        });
      } else if (e.fieldType === "select") {
        return __jsx("select", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, e.fieldOptions.map(function (e) {
          return __jsx("option", {
            value: e.value,
            key: uniqid__WEBPACK_IMPORTED_MODULE_1___default()(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          }, e.value);
        }));
      }
    };

    return __jsx("div", {
      key: uniqid__WEBPACK_IMPORTED_MODULE_1___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, e.fieldName), inputType());
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, inputs);
};

/* harmony default export */ __webpack_exports__["default"] = (ClientForm);

/***/ })

})
//# sourceMappingURL=clients.js.3baecc9ab378f73a071a.hot-update.js.map