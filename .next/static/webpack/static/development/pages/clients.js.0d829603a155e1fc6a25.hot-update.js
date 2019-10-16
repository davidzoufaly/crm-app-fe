webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/CreateClient.tsx":
/*!*************************************!*\
  !*** ./components/CreateClient.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _ClientForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientForm */ "./components/ClientForm.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/CreateClient.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var CreateClient = function CreateClient(_ref) {
  var fields = _ref.fields;

  // const [newClient, setNewClient] = useState();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      fieldNames = _useState[0],
      setFieldNames = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setFieldNames(fields.map(function (e) {
      e.fieldName;
    }));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h4",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Add new client"), __jsx(_ClientForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fieldNames: fieldNames,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Save"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Cancel"));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateClient);

/***/ })

})
//# sourceMappingURL=clients.js.0d829603a155e1fc6a25.hot-update.js.map