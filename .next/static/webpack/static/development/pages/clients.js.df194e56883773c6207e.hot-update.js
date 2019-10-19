webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/clients/TableHead.tsx":
/*!******************************************!*\
  !*** ./components/clients/TableHead.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/TableHead.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





//TODO: Reverse šipka jen aktivního záhlaví
var TableHeader = function TableHeader(_ref) {
  var fields = _ref.fields,
      sortBy = _ref.sortBy,
      reverse = _ref.reverse;
  var tableHeadings = fields.map(function (e) {
    var tableHeading = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](e.fieldName).camelStringToText().firstCharUpperCase().getString();
    var useToolbarStyles = makeStyles(function (theme) {
      return createStyles({
        root: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(1)
        },
        highlight: theme.palette.type === 'light' ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        } : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
        title: {
          flex: '1 1 100%'
        }
      });
    });
    return __jsx("th", {
      key: uniqid__WEBPACK_IMPORTED_MODULE_4___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, reverse ? "<" : ">", __jsx("button", {
      onClick: function onClick() {
        return sortBy(e.fieldName);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, tableHeading));
  });
  return __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), tableHeadings, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Client Profile")));
};

/* harmony default export */ __webpack_exports__["default"] = (TableHeader);

/***/ })

})
//# sourceMappingURL=clients.js.df194e56883773c6207e.hot-update.js.map