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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/ClientForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ClientForm = function ClientForm(_ref) {
  var fields = _ref.fields,
      onChange = _ref.onChange,
      newClient = _ref.newClient;
  var inputs = fields.map(function (e) {
    if (e.fieldName !== _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].permanentFields.dateAdded && e.fieldName !== _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].permanentFields.lastModified) {
      if (e.fieldType === "text") {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 6,
          key: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
          type: "text",
          key: e.fieldName,
          label: e.fieldName,
          id: e.fieldName,
          autoFocus: e.fieldName === _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].permanentFields.fistName,
          name: e.fieldName,
          margin: "normal",
          fullWidth: true,
          onChange: onChange,
          defaultValue: newClient[e.fieldName],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }));
      } else if (e.fieldType === "number") {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 6,
          key: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
          id: e.fieldName,
          key: e.fieldName,
          label: e.fieldName,
          margin: "normal",
          fullWidth: true,
          type: "number",
          name: e.fieldName,
          onChange: onChange,
          defaultValue: newClient[e.fieldName],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }));
      } else if (e.fieldType === "select") {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 6,
          key: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
          margin: "normal",
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputLabel"], {
          htmlFor: e.fieldName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, e.fieldName), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          name: e.fieldName,
          id: e.fieldName,
          onChange: onChange,
          value: newClient[e.fieldName] ? newClient[e.fieldName] : "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
          value: "",
          key: _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption), e.fieldOptions.map(function (e) {
          return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
            value: e.value,
            key: e.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, e.value);
        }))));
      }
    }
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, inputs);
};

/* harmony default export */ __webpack_exports__["default"] = (ClientForm);

/***/ })

})
//# sourceMappingURL=[key].js.f56c26669a4512142fda.hot-update.js.map