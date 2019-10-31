webpackHotUpdate("static/development/pages/settings/[key].js",{

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
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var WebFormList = function WebFormList(_ref) {
  var state = _ref.state,
      removeFromList = _ref.removeFromList,
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

    __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      id: fieldName,
      onClick: function onClick() {
        return removeFromList(dispatch, event);
      },
      color: "secondary",
      style: {
        marginRight: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(list);
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.selectedFields), state.some(function (e) {
    return e.fieldInForm;
  }) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    dense: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.noFieldsSelected));
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormList);

/***/ })

})
//# sourceMappingURL=[key].js.a815829afddfd86ced20.hot-update.js.map