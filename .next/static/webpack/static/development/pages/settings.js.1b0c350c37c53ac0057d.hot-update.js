webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/AddOrEditField.tsx":
/*!***************************************!*\
  !*** ./components/AddOrEditField.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SelectFieldOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SelectFieldOptions */ "./components/SelectFieldOptions.tsx");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/AddOrEditField.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var AddOrEditField = function AddOrEditField(_ref) {
  var fieldObject = _ref.fieldObject,
      changeDisplayComponent = _ref.changeDisplayComponent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(fieldObject),
      updatedField = _useState[0],
      setUpdatedField = _useState[1];

  var saveField = function saveField() {
    //todo: post req na fields s editedField
    setUpdatedField({});
    changeDisplayComponent();
  };

  var onNameChange = function onNameChange(event) {
    setUpdatedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, updatedField, {
      fieldName: event.target.value
    }));
  };

  var onSelectChange = function onSelectChange(event) {
    setUpdatedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, updatedField, {
      fieldType: event.target.options[event.target.options.selectedIndex].value
    }));
  };

  var handleInputsSpawn = function handleInputsSpawn() {
    setUpdatedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, updatedField, {
      fieldOptions: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(updatedField.fieldOptions), [{
        id: uniqid__WEBPACK_IMPORTED_MODULE_4___default()(),
        value: ""
      }])
    }));
  };

  var onChange = function onChange(event) {
    setUpdatedField(updatedField.fieldOptions.filter(function (e) {
      return event.target.id === e.id ? e.value = event.target.value : e;
    }));
  };

  var onDelete = function onDelete(event) {
    setUpdatedField(updatedField.fieldOptions.filter(function (e) {
      return event.target.id !== e.id ? e : null;
    }));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "field-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Field name"), __jsx("input", {
    type: "text",
    id: "field-name",
    defaultValue: updatedField.fieldName,
    onChange: onNameChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "field-type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Field type"), __jsx("select", {
    id: "field-type",
    onChange: onSelectChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("option", {
    value: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Text"), __jsx("option", {
    value: "select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Select"), __jsx("option", {
    value: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Number")), __jsx(_components_SelectFieldOptions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    options: updatedField.fieldOptions,
    onChange: onChange,
    onDelete: onDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), updatedField.fieldType === "select" ? __jsx("button", {
    onClick: handleInputsSpawn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "New") : null, __jsx("button", {
    onClick: saveField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Save"), __jsx("button", {
    onClick: changeDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Cancel"));
};

/* harmony default export */ __webpack_exports__["default"] = (AddOrEditField);

/***/ })

})
//# sourceMappingURL=settings.js.1b0c350c37c53ac0057d.hot-update.js.map