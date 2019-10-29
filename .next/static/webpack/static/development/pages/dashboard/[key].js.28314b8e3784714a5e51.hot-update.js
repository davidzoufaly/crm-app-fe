webpackHotUpdate("static/development/pages/dashboard/[key].js",{

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
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
    menuButton: {
      color: theme.palette.grey["300"],
      padding: "0.5rem 1.5rem",
      margin: theme.spacing(1)
    },
    active: {},
    title: {
      flexGrow: 1
    },
    toolBar: {
      padding: 0
    },
    mobilMenuButton: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: theme.palette.grey["50"],
      display: "none"
    }, theme.breakpoints.down("sm"), {
      display: "block"
    }),
    menuGrid: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      flexDirection: "row"
    }, theme.breakpoints.down("sm"), {
      flexDireciton: "column"
    }),
    navMobil: {
      position: "absolute",
      left: 0,
      backgroundColor: "black",
      display: "block",
      width: "100%",
      top: "100%",
      zIndex: -1,
      padding: "2rem"
    },
    navDesktop: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: "relative",
      display: "none"
    }, theme.breakpoints.up("md"), {
      display: "block"
    })
  });
});

var Header = function Header() {
  var classes = useStyles({});
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var user = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__["default"])(theme.breakpoints.down('sm'));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      mobilMenu = _useState[0],
      setMobilMenu = _useState[1];

  var toggleMenu = function toggleMenu() {
    setMobilMenu(function (prevState) {
      return !prevState;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    !matches ? setMobilMenu(false) : null;
  }, [matches]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["AppBar"], {
    position: "fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    maxWidth: "xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Toolbar"], {
    className: classes.toolBar,
    style: {
      position: "relative"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["IconButton"], {
    onClick: toggleMenu,
    className: classes.mobilMenuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, !mobilMenu ? __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }) : __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    component: "nav",
    className: mobilMenu ? classes.navMobil : classes.navDesktop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
    container: true,
    direction: mobilMenu ? "column" : "row",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    activeClassName: "active",
    href: "/dashboard/[key]",
    as: "/dashboard/".concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    startIcon: __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_3__["default"].en.dashboard))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/clients/[key]",
    as: "/clients/".concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    startIcon: __jsx(_material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_3__["default"].en.clients))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/emails/[key]",
    as: "/emails/".concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    startIcon: __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_3__["default"].en.emails))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/settings/[key]",
    as: "/settings/".concat(user.user.userkey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    startIcon: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_3__["default"].en.settings)))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    className: classes.menuButton,
    onClick: function onClick() {
      return user.logoutUser();
    },
    startIcon: __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_3__["default"].en.logout))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=[key].js.28314b8e3784714a5e51.hot-update.js.map