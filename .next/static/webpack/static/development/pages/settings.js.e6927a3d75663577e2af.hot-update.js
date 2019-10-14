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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      options = _useState2[0],
      setNewOption = _useState2[1];

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
    console.log(fieldObject);
    setUpdatedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, updatedField, {
      fieldType: event.target.options[event.target.options.selectedIndex].value
    }));
  };

  var handleInputsSpawn = function handleInputsSpawn() {
    setNewOption(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, updatedField, {
      fieldOptions: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fieldOptions), [{
        id: uniqid__WEBPACK_IMPORTED_MODULE_4___default()(),
        value: ""
      }])
    }));
  };

  var onChange = function onChange(event) {
    setNewOption(options.filter(function (e) {
      return event.target.id === e.id ? e.value = event.target.value : e;
    }));
  };

  var onDelete = function onDelete(event) {
    setNewOption(options.filter(function (e) {
      return event.target.id !== e.id ? e : null;
    }));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "field-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Field name"), __jsx("input", {
    type: "text",
    id: "field-name",
    defaultValue: updatedField.fieldName,
    onChange: onNameChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "field-type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Field type"), __jsx("select", {
    id: "field-type",
    onChange: onSelectChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("option", {
    value: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Text"), __jsx("option", {
    value: "select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Select"), __jsx("option", {
    value: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Number")), __jsx(_components_SelectFieldOptions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    options: updatedField.fieldOptions,
    onChange: onChange,
    onDelete: onDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), updatedField.fieldType === "select" ? __jsx("button", {
    onClick: handleInputsSpawn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "New") : null, __jsx("button", {
    onClick: saveField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Save"), __jsx("button", {
    onClick: changeDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Cancel"));
};

/* harmony default export */ __webpack_exports__["default"] = (AddOrEditField);

/***/ }),

/***/ "./components/CustomClientFields.tsx":
/*!*******************************************!*\
  !*** ./components/CustomClientFields.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_AddOrEditField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/AddOrEditField */ "./components/AddOrEditField.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/CustomClientFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  card: {
    textAlign: "center",
    height: "100%",
    minWidth: "300px"
  },
  list: {
    listStyleType: "disc"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

var CustomClientFields = function CustomClientFields(_ref) {
  var fields = _ref.fields,
      deleteField = _ref.deleteField;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      displayComponent = _useState[0],
      setDisplayComponent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    fieldName: "",
    fieldType: "text",
    fieldPermanent: false,
    fieldOptions: []
  }),
      editedField = _useState2[0];

  var classes = useStyles({});

  var changeDisplayComponent = function changeDisplayComponent() {
    displayComponent ? setDisplayComponent(false) : setDisplayComponent(true);
  };

  var customFields = fields.filter(function (_ref2) {
    var fieldPermanent = _ref2.fieldPermanent;
    return !fieldPermanent;
  }).map(function (_ref3) {
    var fieldName = _ref3.fieldName,
        _id = _ref3._id,
        fieldType = _ref3.fieldType,
        fieldOptions = _ref3.fieldOptions;
    var customFieldNameFormated = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](fieldName.toLowerCase()).firstCharUpperCase().getString();

    var optionsMap = function optionsMap() {
      return fieldOptions.map(function (e) {
        var optionFormatedKey = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](e).textToCamelString().replaceStringDiacritics().getString();
        return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: optionFormatedKey,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
          primary: e.toLowerCase(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }));
      });
    };

    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
      item: true,
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h5",
      component: "h3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, customFieldNameFormated), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.pos,
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "(", fieldType.toLowerCase(), ")"), fieldType === "select" ? __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.list,
      dense: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, optionsMap()) : null, __jsx("button", {
      onClick: changeDisplayComponent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Edit field"), __jsx("button", {
      onClick: deleteField,
      id: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Delete field"))));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Custom Client Fields"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, customFields), !displayComponent ? __jsx("button", {
    onClick: changeDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Add new field") : __jsx(_components_AddOrEditField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fieldObject: editedField,
    changeDisplayComponent: changeDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomClientFields);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ })

})
//# sourceMappingURL=settings.js.e6927a3d75663577e2af.hot-update.js.map