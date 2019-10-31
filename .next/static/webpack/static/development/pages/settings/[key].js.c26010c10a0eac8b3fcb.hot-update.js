webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./actions/fieldsAction.tsx":
/*!**********************************!*\
  !*** ./actions/fieldsAction.tsx ***!
  \**********************************/
/*! exports provided: addField, deleteField, handleAddingToWF, addVisibleSelect, addHiddenSelect, removeFromList, showOptionsOnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addField", function() { return addField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteField", function() { return deleteField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleAddingToWF", function() { return handleAddingToWF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVisibleSelect", function() { return addVisibleSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHiddenSelect", function() { return addHiddenSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromList", function() { return removeFromList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOptionsOnClick", function() { return showOptionsOnClick; });
var addField = function addField(dispatch, obj) {
  dispatch({
    type: "addNewField",
    payload: {
      obj: obj
    }
  });
};
var deleteField = function deleteField(dispatch, id) {
  dispatch({
    type: "deleteField",
    payload: {
      id: id
    }
  });
};
var handleAddingToWF = function handleAddingToWF(dispatch, state, counter, setCounter, e) {
  state.map(function (field) {
    if (field.fieldName === e.target.getAttribute("data-value")) {
      if (field.fieldType !== "select") {
        dispatch({
          type: "addToWF",
          payload: {
            fieldName: e.target.getAttribute("data-value"),
            counter: counter
          }
        });
        setCounter(function (prevCount) {
          return prevCount + 1;
        });
      } else {
        dispatch({
          type: "pauseSelect",
          payload: {
            fieldName: e.target.getAttribute("data-value")
          }
        });
      }
    }
  });
};
var addVisibleSelect = function addVisibleSelect(dispatch, setCounter, counter) {
  dispatch({
    type: "addVisibleSelectWF",
    payload: {
      counter: counter
    }
  });
  setCounter(function (prevCount) {
    return prevCount + 1;
  });
};
var addHiddenSelect = function addHiddenSelect(dispatch, setCounter, counter, e) {
  dispatch({
    type: "addHiddenSelectWF",
    payload: {
      optionValue: e.target.getAttribute("data-value"),
      counter: counter
    }
  });
  setCounter(function (prevCount) {
    return prevCount + 1;
  });
};
var removeFromList = function removeFromList(dispatch, e) {
  console.log(e.target);
  console.log(e.currentTarget);
  dispatch({
    type: "removeFromWF",
    payload: {
      fieldName: e.target.id
    }
  });
};
var showOptionsOnClick = function showOptionsOnClick(dispatch) {
  dispatch({
    type: "addNotVisibleValue"
  });
};

/***/ }),

/***/ "./components/settings/webform/WebFormList.tsx":
/*!*****************************************************!*\
  !*** ./components/settings/webform/WebFormList.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/HighlightOff */ "./node_modules/@material-ui/icons/HighlightOff.js");
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var WebFormList = function WebFormList(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch;
  var list = state.filter(function (el) {
    return el.fieldInForm;
  }).sort(function (a, b) {
    return a.order - b.order;
  }).map(function (_ref2) {
    var _id = _ref2._id,
        fieldName = _ref2.fieldName,
        fieldFormVisible = _ref2.fieldFormVisible,
        fieldOptions = _ref2.fieldOptions,
        fieldType = _ref2.fieldType;
    var strFormVisible = fieldFormVisible ? " - ".concat(_library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.visibleInForm) : null;
    var strFormNotVisible1 = !fieldFormVisible ? fieldType === "select" ? " - ".concat(_library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.hiddenInForm) : null : null;
    var strFormNotVisible2 = !fieldFormVisible ? fieldType === "select" ? fieldOptions.map(function (e) {
      return e.preselected ? e.value : null;
    }).join("") : null : null;
    var strFormNotVisible3 = !fieldFormVisible ? fieldType === "select" ? _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.asPreselected : null : null;
    _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.asPreselected;
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      id: fieldName,
      onClick: function onClick() {
        return Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_4__["removeFromList"])(dispatch, event);
      },
      color: "secondary",
      "aria-label": "delete",
      style: {
        marginRight: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, fieldName), strFormVisible, strFormNotVisible1, " ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, strFormNotVisible2), " ", strFormNotVisible3));
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.selectedFields), state.some(function (e) {
    return e.fieldInForm;
  }) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    dense: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, list) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.noFieldsSelected));
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormList);

/***/ }),

/***/ "./components/settings/webform/WebFormSelect.tsx":
/*!*******************************************************!*\
  !*** ./components/settings/webform/WebFormSelect.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var WebFormSelect = function WebFormSelect(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      counter = _ref.counter,
      setCounter = _ref.setCounter;
  var selectOptions = state.map(function (field) {
    return !field.fieldInForm && field.fieldName !== "Date added" && field.fieldName !== "Last modified" ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      key: field._id,
      value: field.fieldName,
      id: field.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, field.fieldName) : null;
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.selectField), selectOptions.some(function (field) {
    return field !== null;
  }) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    fullWidth: true,
    disabled: state.some(function (e) {
      return e.pause;
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    htmlFor: "field-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldName), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    name: "fields",
    id: "field-select",
    onChange: function onChange() {
      return Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__["handleAddingToWF"])(dispatch, state, counter, setCounter, event);
    },
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, selectOptions)) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.allFieldsSelected));
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormSelect);

/***/ }),

/***/ "./components/settings/webform/WebFormSubSelect.tsx":
/*!**********************************************************!*\
  !*** ./components/settings/webform/WebFormSubSelect.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSubSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var WebFormSubSelect = function WebFormSubSelect(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      setCounter = _ref.setCounter,
      counter = _ref.counter;
  return state.some(function (e) {
    return e.fieldFormVisible === false && e.pause;
  }) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h4",
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, state.filter(function (el) {
    return el.pause;
  }).map(function (el) {
    return el.fieldName;
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.pleaseSelectOption), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    htmlFor: "field-sub-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldName), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    id: "field-sub-select",
    onChange: function onChange() {
      return Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__["addHiddenSelect"])(dispatch, setCounter, counter, event);
    },
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, state.map(function (field) {
    return field.pause ? field.fieldOptions.map(function (option) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
        key: option.id,
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, option.value);
    }) : null;
  }))))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormSubSelect);

/***/ })

})
//# sourceMappingURL=[key].js.c26010c10a0eac8b3fcb.hot-update.js.map