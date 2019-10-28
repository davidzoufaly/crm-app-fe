webpackHotUpdate("static/development/pages/emails/[key].js",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/languages */ "./library/languages.tsx");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/PeopleAlt */ "./node_modules/@material-ui/icons/PeopleAlt.js");
/* harmony import */ var _material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
    menuButton: {
      marginRight: theme.spacing(2),
      color: "white"
    },
    title: {
      flexGrow: 1
    },
    toolBar: {
      padding: 0
    }
  });
});

var Header = function Header() {
  var classes = useStyles({});
  var user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.toolBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(ButtonIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
    width: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard/[key]",
    as: "/dashboard/".concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    startIcon: __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.dashboard))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/clients/[key]",
    as: "/clients/".concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    startIcon: __jsx(_material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.clients))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/emails/[key]",
    as: "/emails/".concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    startIcon: __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.emails))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/settings/[key]",
    as: "/settings/".concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    startIcon: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.settings)))))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.menuButton,
    onClick: function onClick() {
      return user.logoutUser();
    },
    startIcon: __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.logout))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=[key].js.dddda8904d7d8d28f0bd.hot-update.js.map