webpackHotUpdate("static/development/pages/settings.js",{

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
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/CustomClientFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var CustomClientFields = function CustomClientFields(_ref) {
  var fields = _ref.fields;
  var customFields = fields.filter(function (_ref2) {
    var fieldPermanent = _ref2.fieldPermanent;
    return !fieldPermanent;
  }).map(function (_ref3) {
    var fieldName = _ref3.fieldName,
        _id = _ref3._id,
        fieldType = _ref3.fieldType,
        fieldOptions = _ref3.fieldOptions;
    var customFieldNameFormated = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](fieldName).camelStringToText().firstCharUpperCase().getString();
    var customFieldTypeFormated = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](fieldType).camelStringToText().getString();

    if (fieldType === "select") {
      var _fieldOptionsFormated = function _fieldOptionsFormated() {
        fieldOptions.forEach(function (e) {
          var customFieldOptionFormated = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](e).firstCharUpperCase().getString();
          return __jsx("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }, customFieldOptionFormated);
        });
      };
    }

    return __jsx("div", {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, customFieldNameFormated), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "(", customFieldTypeFormated, ")"), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, fieldOptionsFormated));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Custom Client Fields"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, customFields));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomClientFields);

/***/ })

})
//# sourceMappingURL=settings.js.013b80067d6b288201bf.hot-update.js.map