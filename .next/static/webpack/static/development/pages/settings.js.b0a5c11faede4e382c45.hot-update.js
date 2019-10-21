webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/settings/webform/WebForm.tsx":
/*!*************************************************!*\
  !*** ./components/settings/webform/WebForm.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebFormSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebFormSelect */ "./components/settings/webform/WebFormSelect.tsx");
/* harmony import */ var _WebFormList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WebFormList */ "./components/settings/webform/WebFormList.tsx");
/* harmony import */ var _WebFormOptionSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebFormOptionSelect */ "./components/settings/webform/WebFormOptionSelect.tsx");

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var WebForm = function WebForm(_ref) {
  var fields = _ref.fields;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      optionSelect = _useState[0],
      setOptionSelect = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(function (state, action) {
    switch (action.type) {
      case "add":
        return state.map(function (field) {
          return field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
            fieldInForm: true
          }) : field;
        });

      case "remove":
        return state.map(function (field) {
          return field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
            fieldInForm: false
          }) : field;
        });

      case "addVisibleSelect":
        return state.map(function (field) {
          return field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
            fieldInForm: true,
            fieldFormVisible: true
          }) : field;
        });

      case "addHiddenSelect":
      default:
        return state;
    }
  }, fields),
      webFields = _useReducer[0],
      setWebFields = _useReducer[1];

  var addNotSelect = function addNotSelect(e) {
    webFields.map(function (field) {
      return field.fieldName === e.target.value ? field.fieldType !== "select" ? setWebFields({
        type: "add",
        payload: {
          fieldName: e.target.value
        }
      }) : setOptionSelect(webFields.filter(function (el) {
        return el.fieldName === e.target.value;
      })) : null;
    });
  };

  var addVisibleSelect = function addVisibleSelect(e) {
    setWebFields({
      type: "addVisibleSelect",
      payload: {
        fieldName: e.target.id
      }
    });
    setOptionSelect(null);
  };

  var addHiddenSelect = function addHiddenSelect(e) {
    setWebFields({
      type: "addHiddenSelect",
      payload: {
        fieldName: e.target.value
      }
    });
    setOptionSelect(null);
  };

  var removeFromList = function removeFromList(e) {
    setWebFields({
      type: "remove",
      payload: {
        fieldName: e.target.id
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(webFields);
  }, [webFields]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Select field:"), __jsx(_WebFormSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
    webFields: webFields,
    addNotSelect: addNotSelect,
    optionSelect: optionSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(_WebFormOptionSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    optionSelect: optionSelect,
    webFields: webFields,
    addVisibleSelect: addVisibleSelect,
    WebFormOptions: __jsx(WebFormOptions, {
      optionSelect: optionSelect,
      addHiddenSelect: addHiddenSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Selected fields:"), __jsx(_WebFormList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    webFields: webFields,
    removeFromList: removeFromList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WebForm);

/***/ }),

/***/ "./components/settings/webform/WebFormOptionSelect.tsx":
/*!*************************************************************!*\
  !*** ./components/settings/webform/WebFormOptionSelect.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormOptionSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var webFormOptionSelect = function webFormOptionSelect(_ref) {
  var optionSelect = _ref.optionSelect,
      webFields = _ref.webFields,
      addVisibleSelect = _ref.addVisibleSelect,
      WebFormOptions = _ref.WebFormOptions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showOptions = _useState[0],
      setShowOptions = _useState[1];

  var showOptionsOnClick = function showOptionsOnClick() {
    setShowOptions(true);
  };

  var insertIntoForm = webFields.map(function (field) {
    return optionSelect !== null && !showOptions ? optionSelect[0].fieldName === field.fieldName ? __jsx("div", {
      key: field.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Should be ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, field.fieldName), " visible in form?"), __jsx("button", {
      id: field.fieldName,
      onClick: addVisibleSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "YES"), __jsx("button", {
      onClick: showOptionsOnClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "NO")) : null : null;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, insertIntoForm, showOptions ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Please select option, that will be auto assigned to clients from this form"), WebFormOptions) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (webFormOptionSelect);

/***/ }),

/***/ "./components/settings/webform/WebFormOptions.tsx":
false

})
//# sourceMappingURL=settings.js.b0a5c11faede4e382c45.hot-update.js.map