webpackHotUpdate("static/development/pages/clients/[key].js",{

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
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/TableHead.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var TableHeader = function TableHeader(_ref) {
  var fields = _ref.fields,
      sortBy = _ref.sortBy,
      sort = _ref.sort,
      handleCheckAll = _ref.handleCheckAll,
      allCheck = _ref.allCheck;
  var tableHeadings = fields.sort(function (a, b) {
    return (b.fieldPermanent ? 1 : 0) - (a.fieldPermanent ? 1 : 0);
  }).map(function (e) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
      key: uniqid__WEBPACK_IMPORTED_MODULE_1___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: function onClick() {
        return sortBy(e.fieldName);
      },
      startIcon: __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default.a, {
        color: sort.sortBy === e.fieldName ? "secondary" : "primary",
        style: sort.reverse && sort.sortBy === e.fieldName ? {
          transform: "rotate(180deg)"
        } : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, e.fieldName));
  });
  return __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
    key: uniqid__WEBPACK_IMPORTED_MODULE_1___default()(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
    color: "primary",
    checked: allCheck,
    onChange: function onChange() {
      return handleCheckAll();
    },
    inputProps: {
      "aria-label": "primary checkbox"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), tableHeadings, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.clientProfile))));
};

/* harmony default export */ __webpack_exports__["default"] = (TableHeader);

/***/ })

})
//# sourceMappingURL=[key].js.2eea783eed10a7b94af9.hot-update.js.map