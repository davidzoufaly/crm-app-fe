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
/* harmony import */ var _webFormOptionSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webFormOptionSelect */ "./components/settings/webform/webFormOptionSelect.tsx");

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var WebForm = function WebForm(_ref) {
  var fields = _ref.fields;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
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

      case "addSelect":
        return state;

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
      }) : setOptionSelect(e.target.value) : null;
    });
  };

  var addSelect = function addSelect(e) {
    setWebFields({
      type: "addSelect",
      payload: {
        fieldName: e.target.id
      }
    });
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
      lineNumber: 62
    },
    __self: this
  }, "Select field:"), __jsx(_WebFormSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
    webFields: webFields,
    addNotSelect: addNotSelect // optionSelect={optionSelect}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(_webFormOptionSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    optionSelect: optionSelect,
    webFields: webFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Selected fields:"), __jsx(_WebFormList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    webFields: webFields,
    removeFromList: removeFromList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WebForm);

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
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var WebFormSelect = function WebFormSelect(_ref) {
  var webFields = _ref.webFields,
      addNotSelect = _ref.addNotSelect;
  var selectOptions = webFields.map(function (field) {
    return !field.fieldInForm && field.fieldName !== _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].permanentFields.dateAdded && field.fieldName !== _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].permanentFields.lastModified ? __jsx("option", {
      key: field._id,
      value: field.fieldName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, field.fieldName) : null;
  });
  return selectOptions.some(function (field) {
    return field !== null;
  }) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("select", {
    name: "fields",
    onChange: addNotSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("option", {
    key: _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption), selectOptions)) : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "All fields selected");
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormSelect);

/***/ })

})
//# sourceMappingURL=settings.js.f3131e89ecfc01a279e8.hot-update.js.map