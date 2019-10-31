webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./components/settings/webform/WebFormVisibleOrNot.tsx":
/*!*************************************************************!*\
  !*** ./components/settings/webform/WebFormVisibleOrNot.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormVisibleOrNot.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var WebFormVisibleOrNot = function WebFormVisibleOrNot(_ref) {
  var webFields = _ref.webFields,
      dispatch = _ref.dispatch,
      addVisibleSelect = _ref.addVisibleSelect,
      showOptionsOnClick = _ref.showOptionsOnClick;
  var VisibleOrNot = webFields.map(function (_ref2) {
    var fieldName = _ref2.fieldName,
        fieldFormVisible = _ref2.fieldFormVisible,
        _id = _ref2._id,
        pause = _ref2.pause;
    return fieldFormVisible === null ? pause ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      key: _id,
      mb: "2rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      gutterBottom: true,
      component: "h4",
      variant: "h6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.shouldBe, " ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, fieldName), " ", _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.visibleInForm, "?"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      id: fieldName,
      variant: "contained",
      color: "primary",
      style: {
        marginRight: "1rem"
      },
      onClick: function onClick() {
        return addVisibleSelect(dispatch);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.yes), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "contained",
      color: "secondary",
      onClick: function onClick() {
        return showOptionsOnClick(dispatch);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.no)) : null : null;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, VisibleOrNot);
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormVisibleOrNot);

/***/ })

})
//# sourceMappingURL=[key].js.3fbd113e84f9d8998efd.hot-update.js.map