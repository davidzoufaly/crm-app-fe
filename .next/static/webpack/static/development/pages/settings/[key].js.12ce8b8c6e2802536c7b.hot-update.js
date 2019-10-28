webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library/languages */ "./library/languages.tsx");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PeopleAlt */ "./node_modules/@material-ui/icons/PeopleAlt.js");
/* harmony import */ var _material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
    menuButton: {
      marginRight: theme.spacing(2),
      color: "white"
    },
    title: {
      flexGrow: 1
    },
    toolBar: {
      padding: 0
    },
    mobilMenuButton: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: "white",
      display: "none"
    }, theme.breakpoints.down("sm"), {
      display: "block"
    }),
    menuGrid: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      flexDirection: "row"
    }, theme.breakpoints.down("sm"), {
      flexDireciton: "column"
    }),
    navMobil: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down("sm"), {
      position: "absolute",
      left: 0,
      backgroundColor: "black",
      display: "block",
      width: "100%",
      top: "100%",
      zIndex: -1,
      padding: "2rem"
    }),
    navDesktop: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: "relative",
      display: "none"
    }, theme.breakpoints.down("md"), {
      display: "block"
    })
  });
});

var Header = function Header() {
  var classes = useStyles({});
  var user = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_4__["default"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      mobilMenu = _useState[0],
      setMobilMenu = _useState[1];

  var toggleMenu = function toggleMenu() {
    console.log(mobilMenu);
    setMobilMenu(function (prevState) {
      return !prevState;
    });
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["AppBar"], {
    position: "fixed",
    style: {
      zIndex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Toolbar"], {
    className: classes.toolBar,
    style: {
      position: "relative"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["IconButton"], {
    onClick: toggleMenu,
    className: classes.mobilMenuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, !mobilMenu ? __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }) : __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    component: "nav",
    className: mobilMenu ? classes.navMobil : classes.navDesktop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    container: true,
    direction: mobilMenu ? "column" : "row",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/dashboard/[key]",
    as: "/dashboard/".concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    startIcon: __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_3__["default"].en.dashboard))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/clients/[key]",
    as: "/clients/".concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    startIcon: __jsx(_material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_3__["default"].en.clients))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/emails/[key]",
    as: "/emails/".concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    startIcon: __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_3__["default"].en.emails))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/settings/[key]",
    as: "/settings/".concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    startIcon: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_3__["default"].en.settings)))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    className: classes.menuButton,
    onClick: function onClick() {
      return user.logoutUser();
    },
    startIcon: __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_3__["default"].en.logout))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=[key].js.12ce8b8c6e2802536c7b.hot-update.js.map