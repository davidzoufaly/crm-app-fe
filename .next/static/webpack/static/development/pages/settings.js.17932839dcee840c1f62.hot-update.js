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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/CustomClientFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import CardActions from "@material-ui/core/CardActions";

 // import Button from "@material-ui/core/Button";


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

var CustomClientFields = function CustomClientFields(_ref) {
  var fields = _ref.fields;
  var classes = useStyles();
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

    var optionsMap = function optionsMap() {
      return fieldOptions.map(function (e) {
        var optionFormatedKey = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](e).textToCamelString().replaceStringDiacritics().getString();
        return __jsx("li", {
          key: optionFormatedKey,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, e.toLowerCase());
      });
    };

    return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.card,
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h5",
      component: "h3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, customFieldNameFormated), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.pos,
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "(", customFieldTypeFormated.toLowerCase(), ")"), fieldType === "select" ? __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, optionsMap()) : null));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Custom Client Fields"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, customFields));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomClientFields);

/***/ })

})
//# sourceMappingURL=settings.js.17932839dcee840c1f62.hot-update.js.map