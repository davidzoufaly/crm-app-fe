webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/CreateClient.tsx":
/*!*************************************!*\
  !*** ./components/CreateClient.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _ClientForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClientForm */ "./components/ClientForm.tsx");

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/CreateClient.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import { useEffect } from "react";



var CreateClient = function CreateClient(_ref) {
  var fields = _ref.fields;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      newClient = _useState[0],
      setNewClient = _useState[1];

  var onChange = function onChange(fieldName, e) {
    setNewClient(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, newClient, {
      fieldName: e.target.value
    }));
  }; // useEffect(() => {
  // }, [])


  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h4",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Add new client"), __jsx(_ClientForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fields: fields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Save"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Cancel"));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateClient);

/***/ })

})
//# sourceMappingURL=clients.js.7b4b2a0d3854ed0e6ab8.hot-update.js.map