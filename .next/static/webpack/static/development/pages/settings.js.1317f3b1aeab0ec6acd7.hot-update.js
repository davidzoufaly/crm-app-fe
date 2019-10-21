webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/settings/webform/webFormOptionSelect.tsx":
/*!*************************************************************!*\
  !*** ./components/settings/webform/webFormOptionSelect.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/webFormOptionSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var webFormOptionSelect = function webFormOptionSelect(_ref) {
  var optionSelect = _ref.optionSelect,
      webFields = _ref.webFields,
      addVisibleSelect = _ref.addVisibleSelect;
  // vem vybrany select
  // nabidni moznost jestli pridat do formu -> ano -> pridat do listu se stringem -> do stavu
  // ne -> zobraz druhy select s options + string -> vloz do listu se stringem -> do stavu
  var fieldOptionsArray = [];

  var showPreselectOptions = function showPreselectOptions(e) {
    webFields.map(function (field) {
      return field.fieldName === e.target.id ? field.fieldOptions.forEach(function (option) {
        return fieldOptionsArray.push(__jsx("option", {
          key: option.id,
          value: option.value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, option.value));
      }) : null;
    });
    console.log(fieldOptionsArray);
  };

  var insertIntoForm = webFields.map(function (field) {
    return optionSelect === field.fieldName ? __jsx("div", {
      key: field.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Should be ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, field.fieldName), " visible in form?"), __jsx("button", {
      id: field.fieldName,
      onClick: addVisibleSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "YES"), __jsx("button", {
      id: field.fieldName,
      onClick: showPreselectOptions,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "NO")) : null;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, insertIntoForm, __jsx("select", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, fieldOptionsArray));
};

/* harmony default export */ __webpack_exports__["default"] = (webFormOptionSelect);

/***/ })

})
//# sourceMappingURL=settings.js.1317f3b1aeab0ec6acd7.hot-update.js.map