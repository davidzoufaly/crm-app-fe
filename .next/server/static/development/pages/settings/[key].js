module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/fieldsAction.tsx":
/*!**********************************!*\
  !*** ./actions/fieldsAction.tsx ***!
  \**********************************/
/*! exports provided: addField, deleteField, handleAddingToWF, addVisibleSelect, addHiddenSelect, removeFromList, showOptionsOnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addField", function() { return addField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteField", function() { return deleteField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleAddingToWF", function() { return handleAddingToWF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVisibleSelect", function() { return addVisibleSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHiddenSelect", function() { return addHiddenSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromList", function() { return removeFromList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOptionsOnClick", function() { return showOptionsOnClick; });
const addField = (dispatch, obj) => {
  dispatch({
    type: "addNewField",
    payload: {
      obj
    }
  });
};
const deleteField = (dispatch, id) => {
  dispatch({
    type: "deleteField",
    payload: {
      id
    }
  });
};
const handleAddingToWF = (dispatch, state, counter, setCounter, e) => {
  state.map(field => {
    if (field.fieldName === e.target.getAttribute("data-value")) {
      if (field.fieldType !== "select") {
        dispatch({
          type: "addToWF",
          payload: {
            fieldName: e.target.getAttribute("data-value"),
            counter
          }
        });
        setCounter(prevCount => prevCount + 1);
      } else {
        dispatch({
          type: "pauseSelect",
          payload: {
            fieldName: e.target.getAttribute("data-value")
          }
        });
      }
    }
  });
};
const addVisibleSelect = (dispatch, setCounter, counter) => {
  dispatch({
    type: "addVisibleSelectWF",
    payload: {
      counter
    }
  });
  setCounter(prevCount => prevCount + 1);
};
const addHiddenSelect = (dispatch, setCounter, counter, e) => {
  dispatch({
    type: "addHiddenSelectWF",
    payload: {
      optionValue: e.target.getAttribute("data-value"),
      counter
    }
  });
  setCounter(prevCount => prevCount + 1);
};
const removeFromList = (dispatch, e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  dispatch({
    type: "removeFromWF",
    payload: {
      fieldName: e.target.id
    }
  });
};
const showOptionsOnClick = dispatch => {
  dispatch({
    type: "addNotVisibleValue"
  });
};

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/languages */ "./library/languages.tsx");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/PeopleAlt */ "@material-ui/icons/PeopleAlt");
/* harmony import */ var _material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "@material-ui/icons/ExitToApp");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
  menuButton: {
    color: theme.palette.grey["50"],
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
  mobilMenuButton: {
    color: theme.palette.grey["50"],
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  menuGrid: {
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDireciton: "column"
    }
  },
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
  navDesktop: {
    position: "relative",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  }
}));

const Header = () => {
  const classes = useStyles({});
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const matches = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9___default()(theme.breakpoints.down('sm'));
  const {
    0: mobilMenu,
    1: setMobilMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleMenu = () => {
    setMobilMenu(prevState => !prevState);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    !matches ? setMobilMenu(false) : null;
  }, [matches]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["AppBar"], {
    position: "fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
    maxWidth: "xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Toolbar"], {
    className: classes.toolBar,
    style: {
      position: "relative"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["IconButton"], {
    onClick: toggleMenu,
    className: classes.mobilMenuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, !mobilMenu ? __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }) : __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    component: "nav",
    className: mobilMenu ? classes.navMobil : classes.navDesktop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    container: true,
    direction: mobilMenu ? "column" : "row",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard/[key]",
    as: `/dashboard/${user.user.userkey}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    startIcon: __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: undefined
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.dashboard))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/clients/[key]",
    as: `/clients/${user.user.userkey}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    startIcon: __jsx(_material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: undefined
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.clients))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/emails/[key]",
    as: `/emails/${user.user.userkey}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    startIcon: __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.emails))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/settings/[key]",
    as: `/settings/${user.user.userkey}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    startIcon: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: undefined
    }),
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.settings)))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    className: classes.menuButton,
    onClick: () => user.logoutUser(),
    startIcon: __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.logout))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/LoadingSpinner.tsx":
/*!***************************************!*\
  !*** ./components/LoadingSpinner.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/LoadingSpinner.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LoadingSpinner = ({
  margin,
  level
}) => {
  const styleSpinner = (p, l) => {
    switch (p) {
      case `r`:
        return {
          marginRight: `${l}rem`
        };

      case `l`:
        return {
          marginLeft: `${l}rem`
        };

      case `t`:
        return {
          marginTop: `${l}rem`
        };

      case `b`:
        return {
          marginBottom: `${l}rem`
        };
    }
  };

  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: styleSpinner(margin, level),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ }),

/***/ "./components/UserContext.tsx":
/*!************************************!*\
  !*** ./components/UserContext.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/* harmony default export */ __webpack_exports__["default"] = (UserContext);

/***/ }),

/***/ "./components/settings/DefaultFieldsSection.tsx":
/*!******************************************************!*\
  !*** ./components/settings/DefaultFieldsSection.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "@material-ui/icons/KeyboardArrowRight");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "@material-ui/icons/KeyboardArrowDown");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/DefaultFieldsSection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const DefaultClientFieldsSection = ({
  state,
  toggleSection,
  sections
}) => {
  const defaultFieldNames = state.filter(({
    fieldPermanent
  }) => fieldPermanent === true).map(({
    fieldName,
    _id
  }) => {
    return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h6",
      component: "h3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, fieldName)));
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    my: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
      name: "defaultFieldNames",
      onChange: toggleSection // toggle visibility of section -> default visible
      ,
      checked: sections.defaultFieldNames !== undefined ? sections.defaultFieldNames : true,
      icon: __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: undefined
      }),
      checkedIcon: __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: undefined
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }),
    label: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h4",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.defaultClientFields),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), sections.defaultFieldNames || sections.defaultFieldNames === undefined ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    flexWrap: "wrap",
    mt: "1rem",
    mb: "5rem",
    textAlign: "center",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gridGap: "1rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, defaultFieldNames) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultClientFieldsSection);

/***/ }),

/***/ "./components/settings/customFields/AddOrEditField.tsx":
/*!*************************************************************!*\
  !*** ./components/settings/customFields/AddOrEditField.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/AddOrEditField.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
  fab: {
    marginTop: theme.spacing(3),
    color: theme.palette.common.white
  },
  extendedIcon: {
    marginRight: theme.spacing(2)
  },
  formWrapper: {
    marginTop: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows["1"],
    padding: theme.spacing(3),
    backgroundColor: theme.palette.grey["200"],
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  textField: {
    marginTop: theme.spacing(2)
  }
}));

const AddOrEditField = ({
  editedField,
  displayComponent,
  fieldMethods,
  handleOption
}) => {
  const classes = useStyles({});
  return displayComponent ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    className: classes.formWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "h3",
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, editedField.id ? _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.editCustomField : _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.newCustomField), __jsx("form", {
    onSubmit: fieldMethods.saveEditedField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    id: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_2__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldName).textToHtmlProp().getString(),
    autoFocus: true,
    type: "text",
    label: _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldName,
    className: classes.textField,
    value: editedField.fieldName,
    onChange: fieldMethods.onNameChange,
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    className: classes.textField,
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
    htmlFor: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_2__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldType).textToHtmlProp().getString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldType), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Select"], {
    id: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_2__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldType).textToHtmlProp().getString(),
    onChange: fieldMethods.onSelectChange,
    value: editedField.fieldType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    value: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.text), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    value: "select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.select), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    value: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.number)))), editedField.fieldType === "select" ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, handleOption) : null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    display: "flex",
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: fieldMethods.toggleDisplayComponent,
    color: "secondary",
    variant: "contained",
    style: {
      marginRight: "1rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.cancel), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.save)))))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Fab"], {
    color: "primary",
    variant: "extended",
    "aria-label": "add",
    className: classes.fab,
    onClick: fieldMethods.toggleDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }), _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.field));
};

/* harmony default export */ __webpack_exports__["default"] = (AddOrEditField);

/***/ }),

/***/ "./components/settings/customFields/CustomFields.tsx":
/*!***********************************************************!*\
  !*** ./components/settings/customFields/CustomFields.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniqid */ "uniqid");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! generate-unique-id */ "generate-unique-id");
/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(generate_unique_id__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AddOrEditField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddOrEditField */ "./components/settings/customFields/AddOrEditField.tsx");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _CustomFieldsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomFieldsList */ "./components/settings/customFields/CustomFieldsList.tsx");
/* harmony import */ var _SelectFieldOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SelectFieldOptions */ "./components/settings/customFields/SelectFieldOptions.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/CustomFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const CustomFields = ({
  state,
  dispatch
}) => {
  const blankFieldObject = {
    fieldName: "",
    fieldType: "text",
    fieldOptions: [],
    fieldFormVisible: null,
    _id: generate_unique_id__WEBPACK_IMPORTED_MODULE_4___default()({
      length: 24,
      useNumbers: true,
      useLetters: false,
      includeSymbols: ["a", "b", "c", "d", "e", "f"]
    })
  };
  const user = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const {
    0: displayComponent,
    1: setDisplayComponent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: editedField,
    1: setEditedField
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((state, action) => {
    switch (action.type) {
      case "fieldNameChange":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          fieldName: action.payload.value
        });

      case "selectValueChange":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          fieldType: action.payload.value
        });

      case "newOptionSpawn":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          fieldOptions: [...state.fieldOptions, {
            id: uniqid__WEBPACK_IMPORTED_MODULE_3___default()(),
            value: ""
          }]
        });

      case "clear":
        return blankFieldObject;

      case "optionValueChange":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          fieldOptions: state.fieldOptions.map(el => el.id === action.payload.id ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, el, {
            value: action.payload.value
          }) : el)
        });

      case "optionDelete":
        // if option with preselected in form being delete, remove field from form
        return state.fieldInForm && state.fieldOptions.some(el => el.id === action.payload.id && el.preselected) ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          fieldInForm: false,
          fieldOptions: state.fieldOptions.filter(e => e.id !== action.payload.id)
        }) : Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          fieldOptions: state.fieldOptions.filter(e => e.id !== action.payload.id)
        });

      case "setWithPaylod":
        return action.payload.obj;

      default:
        return state;
    }
  }, blankFieldObject);
  const fieldMethods = {
    onNameChange(event) {
      setEditedField({
        type: "fieldNameChange",
        payload: {
          value: event.target.value
        }
      });
    },

    onSelectChange(event) {
      setEditedField({
        type: "selectValueChange",
        payload: {
          value: event.target.value
        }
      });
    },

    handleOptionSpawn(e) {
      e.preventDefault();
      setEditedField({
        type: "newOptionSpawn"
      });
    },

    toggleDisplayComponent() {
      displayComponent ? setDisplayComponent(false) : setDisplayComponent(true);
      setEditedField({
        type: "clear"
      });
    },

    onOptionDelete(event) {
      setEditedField({
        type: "optionDelete",
        payload: {
          id: event.currentTarget.id
        }
      });
    },

    onOptionChange(id, event) {
      setEditedField({
        type: "optionValueChange",
        payload: {
          value: event.target.value,
          id
        }
      });
    },

    setupEditedField(obj) {
      setEditedField({
        type: "setWithPaylod",
        payload: {
          obj
        }
      });
      !displayComponent ? setDisplayComponent(true) : null;
    },

    saveEditedField(e) {
      e.preventDefault();

      const fieldIsUpdated = async () => {
        const {
          fieldName,
          fieldType,
          fieldOptions,
          _id
        } = editedField;
        const res = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
          method: "PUT",
          url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].serverURL}/fields/${_id}`,
          params: {
            key: user.user.userkey
          },
          data: {
            fieldName,
            fieldType,
            fieldOptions
          },
          responseType: "json"
        });
        const data = await res.data;

        if (data.msg === _library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].msgSuccess) {
          reset();
        }
      };

      const fieldIsCreated = async () => {
        const res = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
          method: "POST",
          params: {
            key: user.user.userkey
          },
          url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].serverURL}/fields/`,
          data: editedField,
          responseType: "json"
        });
        const data = await res.data;

        if (data.msg === _library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].msgSuccess) {
          reset();
        }
      };

      state.some(field => field._id === editedField._id) ? fieldIsUpdated() : fieldIsCreated();
    }

  };

  const reset = () => {
    setDisplayComponent(false);
    Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_11__["addField"])(dispatch, editedField);
    setEditedField({
      type: "clear"
    });
  };

  const deleteFieldRes = async id => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "DELETE",
      params: {
        key: user.user.userkey
      },
      url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].serverURL}/fields/${id}`,
      responseType: "json"
    });
    const resData = await res.data;
    resData.msg === _library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].msgSuccess ? Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_11__["deleteField"])(dispatch, id) : null;
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Box"], {
    mt: "1rem",
    mb: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, __jsx(_CustomFieldsList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    deleteFieldRes: deleteFieldRes,
    state: state,
    setupEditedField: fieldMethods.setupEditedField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }), __jsx(_AddOrEditField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    editedField: editedField,
    displayComponent: displayComponent,
    fieldMethods: fieldMethods,
    handleOption: __jsx(_SelectFieldOptions__WEBPACK_IMPORTED_MODULE_8__["default"], {
      options: editedField.fieldOptions,
      fieldMethods: fieldMethods,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomFields);

/***/ }),

/***/ "./components/settings/customFields/CustomFieldsList.tsx":
/*!***************************************************************!*\
  !*** ./components/settings/customFields/CustomFieldsList.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/CustomFieldsList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  card: {
    textAlign: "center",
    minWidth: "280px",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  list: {
    padding: 0,
    lineHeight: "14px",
    margin: "auto",
    marginBottom: theme.spacing(1)
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
  },
  listItemIcon: {
    minWidth: 0,
    paddingRight: theme.spacing(1),
    color: "black"
  }
}));

const CustomFields = ({
  setupEditedField,
  deleteFieldRes,
  state
}) => {
  const classes = useStyles({});
  const separatedCustomFields = state.filter(({
    fieldPermanent
  }) => !fieldPermanent).map(({
    fieldName,
    _id,
    fieldType,
    fieldOptions,
    fieldInForm,
    fieldFormVisible,
    order
  }) => {
    const options = fieldOptions.map(e => {
      return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
        key: e.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: undefined
      }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
        primary: e.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: undefined
      }));
    });
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
      item: true,
      key: _id,
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        height: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.cardWrapper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: undefined
    }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      component: "h3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, fieldName), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.pos,
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, "(", fieldType.toLowerCase(), ")"), fieldType === "select" && fieldOptions.length > 0 ? __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.list,
      dense: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, options)) : null), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
      width: "40%",
      mt: "1rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
      container: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
      item: true,
      xs: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Fab"], {
      size: "small",
      color: "primary",
      onClick: () => setupEditedField({
        fieldName,
        fieldType,
        fieldPermanent: false,
        fieldInForm,
        fieldFormVisible,
        fieldOptions,
        order,
        _id: _id
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
      item: true,
      xs: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Fab"], {
      size: "small",
      color: "secondary",
      onClick: () => deleteFieldRes(_id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: undefined
    })))))))));
  });
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, separatedCustomFields);
};

/* harmony default export */ __webpack_exports__["default"] = (CustomFields);

/***/ }),

/***/ "./components/settings/customFields/CustomFieldsSection.tsx":
/*!******************************************************************!*\
  !*** ./components/settings/customFields/CustomFieldsSection.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFields */ "./components/settings/customFields/CustomFields.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "@material-ui/icons/KeyboardArrowRight");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "@material-ui/icons/KeyboardArrowDown");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/CustomFieldsSection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const CustomFieldsSection = ({
  toggleSection,
  sections,
  dispatch,
  state
}) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  my: "2rem",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControlLabel"], {
  control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    onChange: toggleSection,
    name: "customFields",
    id: "custom-fields" // toggle visibility of section
    ,
    checked: sections.customFields !== undefined ? sections.customFields : true,
    icon: __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }),
    checkedIcon: __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }),
  label: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h4",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.customClientFields),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), sections.customFields || sections.customFields === undefined ? __jsx(_CustomFields__WEBPACK_IMPORTED_MODULE_1__["default"], {
  state: state,
  dispatch: dispatch,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}) : null);

/* harmony default export */ __webpack_exports__["default"] = (CustomFieldsSection);

/***/ }),

/***/ "./components/settings/customFields/SelectFieldOptions.tsx":
/*!*****************************************************************!*\
  !*** ./components/settings/customFields/SelectFieldOptions.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/HighlightOff */ "@material-ui/icons/HighlightOff");
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/SelectFieldOptions.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
  addOption: {
    margin: theme.spacing(3),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white
  },
  inputWrapper: {
    marginBottom: theme.spacing(1)
  }
}));

const SelectFieldOptions = ({
  options,
  fieldMethods
}) => {
  const classes = useStyles({});
  const items = options.map(e => __jsx("div", {
    key: e.id,
    className: classes.inputWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    id: e.id,
    placeholder: _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.option,
    onChange: () => fieldMethods.onOptionChange(e.id, event),
    value: e.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    color: "secondary",
    size: "small",
    id: e.id,
    onClick: fieldMethods.onOptionDelete,
    "aria-label": _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.deleteOption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }))));
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, items, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Fab"], {
    onClick: fieldMethods.handleOptionSpawn,
    size: "medium",
    variant: "extended",
    className: classes.addOption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.option));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectFieldOptions);

/***/ }),

/***/ "./components/settings/emailSettings/EmailSettingsForm.tsx":
/*!*****************************************************************!*\
  !*** ./components/settings/emailSettings/EmailSettingsForm.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "@material-ui/icons/VisibilityOff");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/emailSettings/EmailSettingsForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
  formWrapper: {
    marginTop: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows["1"],
    padding: theme.spacing(3),
    backgroundColor: theme.palette.grey["200"],
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  textField: {
    marginTop: theme.spacing(2)
  }
}));

const EmailSettingsForm = ({
  username,
  pass
}) => {
  const {
    0: emailSettings,
    1: setEmailSettings
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    username,
    pass
  });
  const {
    0: isPassShown,
    1: setIsPassShown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const passEl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const user = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const classes = useStyles({});

  const onSubmit = async e => {
    e.preventDefault();
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "post",
      url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_4__["default"].serverURL}/emails`,
      params: {
        key: user.user.userkey
      },
      data: emailSettings,
      responseType: "json"
    });
    const data = res.data;

    if (data === "Success") {
      alert(_library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.emailSettingsUpdatedSuccess);
    } else {
      alert(_library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.somethingWentWrong);
    }
  };

  const togglePass = e => {
    e.preventDefault();

    if (!isPassShown) {
      passEl.current.type = "text";
      setIsPassShown(true);
    } else {
      passEl.current.type = "password";
      setIsPassShown(false);
    }
  };

  const onChange = e => {
    setEmailSettings(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, emailSettings, {
      [e.target.name]: e.target.value
    }));
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    mt: "1rem",
    mb: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "body1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.onlyGoogleAcc), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "body1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.setupeLessSecure), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    className: classes.formWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("form", {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    item: true,
    xs: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
    id: "acc-name",
    type: "text",
    name: "username",
    autoComplete: "email",
    value: emailSettings.username,
    onChange: onChange,
    margin: "normal",
    label: _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.email,
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    item: true,
    xs: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
    id: "acc-pass",
    type: "password",
    autoComplete: "current-password",
    name: "pass",
    margin: "normal",
    inputRef: passEl,
    value: emailSettings.pass,
    onChange: onChange,
    label: _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.password,
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    display: "flex",
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "primary",
    style: {
      marginRight: "1rem"
    },
    onClick: togglePass,
    startIcon: isPassShown ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: undefined
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, isPassShown ? _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.password : _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.password), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.save)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (EmailSettingsForm);

/***/ }),

/***/ "./components/settings/emailSettings/EmailSettingsSection.tsx":
/*!********************************************************************!*\
  !*** ./components/settings/emailSettings/EmailSettingsSection.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EmailSettingsForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailSettingsForm */ "./components/settings/emailSettings/EmailSettingsForm.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "@material-ui/icons/KeyboardArrowRight");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "@material-ui/icons/KeyboardArrowDown");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/emailSettings/EmailSettingsSection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const EmailSettingsSection = ({
  username,
  pass,
  toggleSection,
  sections
}) => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    my: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
      onChange: toggleSection,
      name: "emailSettings" // toggle visibility of section -> default visible
      ,
      checked: sections.emailSettings !== undefined ? sections.emailSettings : true,
      icon: __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: undefined
      }),
      checkedIcon: __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: undefined
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }),
    label: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      variant: "h4",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.emailAccount),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), sections.emailSettings || sections.emailSettings === undefined ? __jsx(_EmailSettingsForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    username: username,
    pass: pass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (EmailSettingsSection);

/***/ }),

/***/ "./components/settings/webform/WebForm.tsx":
/*!*************************************************!*\
  !*** ./components/settings/webform/WebForm.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _WebFormSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WebFormSelect */ "./components/settings/webform/WebFormSelect.tsx");
/* harmony import */ var _WebFormList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebFormList */ "./components/settings/webform/WebFormList.tsx");
/* harmony import */ var _WebFormVisibleOrNot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebFormVisibleOrNot */ "./components/settings/webform/WebFormVisibleOrNot.tsx");
/* harmony import */ var _WebFormSubSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebFormSubSelect */ "./components/settings/webform/WebFormSubSelect.tsx");
/* harmony import */ var _WebFormButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WebFormButtons */ "./components/settings/webform/WebFormButtons.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["createStyles"])({
  formWrapper: {
    marginTop: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows["1"],
    padding: theme.spacing(3),
    backgroundColor: theme.palette.grey["200"],
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  textField: {
    marginTop: theme.spacing(2)
  }
}));

const WebForm = ({
  state,
  dispatch
}) => {
  const initCounterValue = state.map(e => e.order).sort((a, b) => b > a ? 1 : -1)[0];
  const classes = useStyles({});
  const user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const {
    0: counter,
    1: setCounter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initCounterValue + 1);

  const saveFormAuto = async () => {
    await axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "PUT",
      url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL}/fields`,
      params: {
        key: user.user.userkey
      },
      data: state,
      responseType: "json"
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // save fields (form) on change
    saveFormAuto();
  }, [state]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Box"], {
    className: classes.formWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_WebFormSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
    state: state,
    counter: counter,
    setCounter: setCounter,
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx(_WebFormVisibleOrNot__WEBPACK_IMPORTED_MODULE_5__["default"], {
    state: state,
    dispatch: dispatch,
    counter: counter,
    setCounter: setCounter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx(_WebFormSubSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
    state: state,
    dispatch: dispatch,
    counter: counter,
    setCounter: setCounter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx(_WebFormList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    state: state,
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx(_WebFormButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    state: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (WebForm);

/***/ }),

/***/ "./components/settings/webform/WebFormButtons.tsx":
/*!********************************************************!*\
  !*** ./components/settings/webform/WebFormButtons.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/GetApp */ "@material-ui/icons/GetApp");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormButtons.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const WebFormButtons = ({
  state
}) => {
  const user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const showTip = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const onDownload = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "GET",
      url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_3__["default"].serverURL}/webform/`,
      params: {
        key: user.user.userkey
      },
      data: state,
      responseType: "blob"
    });
    const url = await window.URL.createObjectURL(new Blob([res.data]));
    const link = await document.createElement("a");
    link.href = url;
    link.setAttribute("download", "crm-form.js");
    document.body.appendChild(link);
    link.click();
    showTip.current.style.display = "block";
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    ref: showTip,
    style: {
      display: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_4__["default"].en.webFormTip), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    display: "flex",
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: onDownload,
    variant: "contained",
    color: "primary",
    startIcon: __jsx(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_4__["default"].en.donwloadForm)));
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormButtons);

/***/ }),

/***/ "./components/settings/webform/WebFormList.tsx":
/*!*****************************************************!*\
  !*** ./components/settings/webform/WebFormList.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/HighlightOff */ "@material-ui/icons/HighlightOff");
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const WebFormList = ({
  state,
  dispatch
}) => {
  const list = state.filter(el => el.fieldInForm).sort((a, b) => a.order - b.order).map(({
    _id,
    fieldName,
    fieldFormVisible,
    fieldOptions,
    fieldType
  }) => {
    const strFormVisible = fieldFormVisible ? ` - ${_library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.visibleInForm}` : null;
    const strFormNotVisible1 = !fieldFormVisible ? fieldType === "select" ? ` - ${_library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.hiddenInForm}` : null : null;
    const strFormNotVisible2 = !fieldFormVisible ? fieldType === "select" ? fieldOptions.map(e => e.preselected ? e.value : null).join("") : null : null;
    const strFormNotVisible3 = !fieldFormVisible ? fieldType === "select" ? _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.asPreselected : null : null;
    _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.asPreselected;
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      id: fieldName,
      onClick: () => Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_4__["removeFromList"])(dispatch, event),
      color: "secondary",
      "aria-label": "delete",
      style: {
        marginRight: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }, __jsx(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    })), __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }, fieldName), strFormVisible, strFormNotVisible1, " ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, strFormNotVisible2), " ", strFormNotVisible3));
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.selectedFields), state.some(e => e.fieldInForm) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    dense: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, list) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.noFieldsSelected));
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormList);

/***/ }),

/***/ "./components/settings/webform/WebFormSection.tsx":
/*!********************************************************!*\
  !*** ./components/settings/webform/WebFormSection.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WebForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebForm */ "./components/settings/webform/WebForm.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "@material-ui/icons/KeyboardArrowRight");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "@material-ui/icons/KeyboardArrowDown");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const WebFormSection = ({
  state,
  dispatch,
  toggleSection,
  sections
}) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
  my: "2rem",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControlLabel"], {
  control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
    name: "webForm",
    onChange: toggleSection // toggle visibility of section
    ,
    checked: sections.webForm !== undefined ? sections.webForm : true,
    icon: __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }),
    checkedIcon: __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }),
  label: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h4",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.webForm),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), sections.webForm || sections.webForm === undefined ? __jsx(_WebForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
  state: state,
  dispatch: dispatch,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}) : null);

/* harmony default export */ __webpack_exports__["default"] = (WebFormSection);

/***/ }),

/***/ "./components/settings/webform/WebFormSelect.tsx":
/*!*******************************************************!*\
  !*** ./components/settings/webform/WebFormSelect.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const WebFormSelect = ({
  state,
  dispatch,
  counter,
  setCounter
}) => {
  const selectOptions = state.map(field => {
    return !field.fieldInForm && field.fieldName !== "Date added" && field.fieldName !== "Last modified" ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      key: field._id,
      value: field.fieldName,
      id: field.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, field.fieldName) : null;
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.selectField), selectOptions.some(field => field !== null) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    fullWidth: true,
    disabled: state.some(e => e.pause),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    htmlFor: "field-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldName), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    name: "fields",
    id: "field-select",
    onChange: () => Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__["handleAddingToWF"])(dispatch, state, counter, setCounter, event),
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, selectOptions)) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.allFieldsSelected));
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormSelect);

/***/ }),

/***/ "./components/settings/webform/WebFormSubSelect.tsx":
/*!**********************************************************!*\
  !*** ./components/settings/webform/WebFormSubSelect.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSubSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const WebFormSubSelect = ({
  state,
  dispatch,
  setCounter,
  counter
}) => {
  return state.some(e => e.fieldFormVisible === false && e.pause) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h4",
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, state.filter(el => el.pause).map(el => el.fieldName)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.pleaseSelectOption), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    htmlFor: "field-sub-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldName), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    id: "field-sub-select",
    onChange: () => Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__["addHiddenSelect"])(dispatch, setCounter, counter, event),
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, state.map(field => field.pause ? field.fieldOptions.map(option => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    key: option.id,
    value: option.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, option.value)) : null))))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormSubSelect);

/***/ }),

/***/ "./components/settings/webform/WebFormVisibleOrNot.tsx":
/*!*************************************************************!*\
  !*** ./components/settings/webform/WebFormVisibleOrNot.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormVisibleOrNot.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const WebFormVisibleOrNot = ({
  state,
  dispatch,
  counter,
  setCounter
}) => {
  const VisibleOrNot = state.map(({
    fieldName,
    fieldFormVisible,
    _id,
    pause
  }) => fieldFormVisible === null ? pause ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    key: _id,
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    component: "h4",
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.shouldBe, " ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, fieldName), " ", _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.visibleInForm, "?"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    id: fieldName,
    variant: "contained",
    color: "primary",
    style: {
      marginRight: "1rem"
    },
    onClick: () => Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_1__["addVisibleSelect"])(dispatch, setCounter, counter),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.yes), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "secondary",
    onClick: () => Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_1__["showOptionsOnClick"])(dispatch),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.no)) : null : null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, VisibleOrNot);
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormVisibleOrNot);

/***/ }),

/***/ "./library/globalVariables.tsx":
/*!*************************************!*\
  !*** ./library/globalVariables.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const globalVars = {
  titleSubText: "| CRM-APP",
  serverURL: "http://localhost:8080/api",
  // serverURL: "https://crm-app-be.herokuapp.com/api",
  permanentFields: {
    fistName: "First name",
    lastName: "Last name",
    email: "Email",
    dateAdded: "Date added",
    lastModified: "Last modified"
  },
  fieldTypes: {
    text: "text",
    number: "number",
    select: "select"
  },
  blankOption: "---",
  msgSuccess: "Success"
};
/* harmony default export */ __webpack_exports__["default"] = (globalVars);

/***/ }),

/***/ "./library/languages.tsx":
/*!*******************************!*\
  !*** ./library/languages.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const languages = {
  en: {
    editCustomField: "Edit custom field",
    newCustomField: "New custom field",
    fieldName: "Field name",
    fieldType: "FieldType",
    text: "Text",
    select: "Select",
    number: "Number",
    save: "Save",
    cancel: "Cancel",
    addNew: "Add new",
    delete: "Delete",
    email: "Email",
    addNewClient: "Add new client",
    clientProfile: "Client profile",
    customClientFields: "Custom client fields",
    edit: "Edit",
    defaultClientFields: "Default client fields",
    emailSettingsUpdatedSuccess: "Your email settings has been successfully changed!",
    somethingWentWrong: "Something went wrong!",
    emailAccount: "Email account",
    password: "Password",
    showPassword: "Show Password",
    hidePassword: "Hide Password",
    add: "Add",
    yourEmailSentSucces: "Your email has been succesfully sent.",
    to: "To",
    subject: "Subject",
    message: "Message",
    send: "Send",
    dashboard: "Dashboard",
    client: "client",
    clients: "Clients",
    emails: "Emails",
    settings: "Settings",
    saved: "Saved",
    goTo: "Go to",
    go: "Go",
    dateAndTime: "Date and time",
    selectField: "Select field",
    selectedFields: "Selected fields",
    visibleInForm: "visible in form",
    hiddenInForm: "hidden in form with",
    asPreselected: "as preselected",
    shouldBe: "Should be",
    yes: "yes",
    no: "no",
    pleaseSelectOption: "Please select option, that will be auto assigned to clients from this form.",
    allFieldsSelected: "All fields are already selected",
    noFieldsSelected: "No fields selected",
    donwloadForm: "Download form",
    clientsSaved: "Saved clients",
    emailsSent: "Emails sent",
    fieldsSaved: "Fields saved",
    last: "Last",
    sent: "sent",
    pastSevenDays: "past seven days",
    total: "total",
    logout: "logout",
    username: "username",
    repeatPassword: "repeat password",
    login: "login",
    register: "register",
    success: "success",
    passwordsDoesNotMatch: "Passwords do not match",
    userAlreadyExists: "User already exists",
    indexTitle: "CRM-APP - Where your business gets efficiency",
    welcomeH1: "Welcome in lightweight CRM-APP built on Next.js, React.js, Material UI, Typescript, Express and Mongo DB",
    webForm: "Web form",
    onlyGoogleAcc: "Only google accounts are supported.",
    setupeLessSecure: "You also need to provide access to less secure apps in your google settings.",
    setupYourEmailSettings: "Please setup your emails settings first",
    option: "Option",
    deleteOption: "Delete option",
    field: "Field",
    webFormTip: "Downloaded script add to your website and create element with id '#crm-form-hook' where you want form to display. Form takes 100% width of the parent."
  }
};
/* harmony default export */ __webpack_exports__["default"] = (languages);

/***/ }),

/***/ "./library/stringMethods.tsx":
/*!***********************************!*\
  !*** ./library/stringMethods.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");



class StringMethods {
  constructor(_text) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "text", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "camelStringToText", () => {
      this.text = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(this.text).map(e => e === e.toUpperCase() ? e = `%-%${e.toLowerCase()}` : e).join("").replace(/%-%/g, " ");
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "firstCharUpperCase", () => {
      this.text = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(this.text).map((e, i) => i === 0 ? e.toUpperCase() : e).join("");
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "removeSlash", () => {
      this.text = this.text.replace("/", "");
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "addStringToEnd", text => {
      this.text = this.text + " " + text;
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "textToCamelString", () => {
      let array = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(this.text.toLowerCase());

      for (let i = 0; i < array.length; i++) {
        if (array[i] === " ") {
          array[i + 1] = array[i + 1].toUpperCase();
          array.splice(i, 1);
        }
      }

      this.text = array.join("");
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "textToHtmlProp", () => {
      this.text = this.text.toLowerCase().replace(/ /g, '-');
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "replaceStringDiacritics", () => {
      this.text = this.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "removeSlashAndTextAfter", () => {
      this.text = this.text.substring(0, this.text.indexOf("/"));
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getString", () => {
      return this.text;
    });

    this.text = _text;
  } // thisIsText -> This is text


}

/* harmony default export */ __webpack_exports__["default"] = (StringMethods);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/settings/[key].tsx":
/*!**********************************!*\
  !*** ./pages/settings/[key].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_fieldsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/fieldsReducer */ "./reducers/fieldsReducer.tsx");
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _components_settings_DefaultFieldsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/settings/DefaultFieldsSection */ "./components/settings/DefaultFieldsSection.tsx");
/* harmony import */ var _components_settings_customFields_CustomFieldsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/settings/customFields/CustomFieldsSection */ "./components/settings/customFields/CustomFieldsSection.tsx");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/LoadingSpinner */ "./components/LoadingSpinner.tsx");
/* harmony import */ var _components_settings_emailSettings_EmailSettingsSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/settings/emailSettings/EmailSettingsSection */ "./components/settings/emailSettings/EmailSettingsSection.tsx");
/* harmony import */ var _components_settings_webform_WebFormSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/settings/webform/WebFormSection */ "./components/settings/webform/WebFormSection.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/settings/[key].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const Settings = ({
  dataFields,
  username,
  pass
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: initialized,
    1: setInitialized
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: sections,
    1: setSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const user = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_reducers_fieldsReducer__WEBPACK_IMPORTED_MODULE_5__["default"], dataFields);

  const toggleSection = e => {
    setSection(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sections, {
      [e.target.name]: e.target.checked
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //title from url
    const title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_13__["default"](router.pathname).removeSlash().removeSlashAndTextAfter().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].titleSubText).getString();
    document.title = title; //componendDidMount effect

    setInitialized(true);
    user.checkUser();
  }, [router]);
  const h1 = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_13__["default"](router.pathname).removeSlash().removeSlashAndTextAfter().firstCharUpperCase().getString();
  return !user.user.signedIn && !initialized ? __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
    variant: "h3",
    component: "h1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, h1), __jsx(_components_settings_DefaultFieldsSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    state: state,
    toggleSection: toggleSection,
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx(_components_settings_customFields_CustomFieldsSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    state: state,
    dispatch: dispatch,
    sections: sections,
    toggleSection: toggleSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx(_components_settings_emailSettings_EmailSettingsSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    username: username,
    pass: pass,
    toggleSection: toggleSection,
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx(_components_settings_webform_WebFormSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
    state: state,
    dispatch: dispatch,
    toggleSection: toggleSection,
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }));
};

Settings.getInitialProps = async context => {
  const resFields = await axios__WEBPACK_IMPORTED_MODULE_4___default()({
    method: "GET",
    params: {
      key: context.query.key
    },
    url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].serverURL}/fields`,
    responseType: "json"
  });
  const dataFields = await resFields.data;
  const resEmailSettings = await axios__WEBPACK_IMPORTED_MODULE_4___default()({
    method: "GET",
    params: {
      key: context.query.key
    },
    url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].serverURL}/emails/email-settings`,
    responseType: "json"
  });
  const dataEmailSettings = await resEmailSettings.data;
  const {
    username,
    pass
  } = await dataEmailSettings;
  return {
    dataFields,
    username,
    pass
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./reducers/fieldsReducer.tsx":
/*!************************************!*\
  !*** ./reducers/fieldsReducer.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


const fieldsReducer = (state, action) => {
  switch (action.type) {
    case "addNewField":
      return state.some(field => field._id === action.payload.obj._id) ? state.map(field => field._id === action.payload.obj._id ? action.payload.obj : field) : [...state, action.payload.obj];

    case "deleteField":
      return state.filter(field => field._id !== action.payload.id);

    case "addToWF":
      return state.map(field => field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
        fieldInForm: true,
        order: action.payload.counter
      }) : field);

    case "addVisibleSelectWF":
      return state.map(field => field.pause ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
        fieldInForm: true,
        fieldFormVisible: true,
        pause: false,
        order: action.payload.counter
      }) : field);

    case "addNotVisibleValue":
      return state.map(field => field.pause ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
        fieldFormVisible: false
      }) : field);

    case "addHiddenSelectWF":
      return state.map(field => field.pause ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
        fieldInForm: true,
        pause: false,
        order: action.payload.counter,
        fieldOptions: field.fieldOptions.map(option => option.value === action.payload.optionValue ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, option, {
          preselected: true
        }) : option)
      }) : field);

    case "pauseSelect":
      return state.map(field => field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
        pause: true
      }) : field);

    case "removeFromWF":
      return state.map(field => field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
        fieldInForm: false,
        fieldFormVisible: null,
        fieldOptions: field.fieldOptions.map(option => option.preselected ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, option, {
          preselected: null
        }) : option)
      }) : field);

    default:
      throw new Error();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (fieldsReducer);

/***/ }),

/***/ 3:
/*!****************************************!*\
  !*** multi ./pages/settings/[key].tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidzoufaly/code/dp/crm-app-fe/pages/settings/[key].tsx */"./pages/settings/[key].tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "@material-ui/icons/Email":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Email" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/GetApp":
/*!********************************************!*\
  !*** external "@material-ui/icons/GetApp" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GetApp");

/***/ }),

/***/ "@material-ui/icons/HighlightOff":
/*!**************************************************!*\
  !*** external "@material-ui/icons/HighlightOff" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HighlightOff");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowDown":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowDown" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowDown");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowRight":
/*!********************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowRight" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/PeopleAlt":
/*!***********************************************!*\
  !*** external "@material-ui/icons/PeopleAlt" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PeopleAlt");

/***/ }),

/***/ "@material-ui/icons/Settings":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "@material-ui/icons/Visibility":
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "@material-ui/icons/VisibilityOff":
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "generate-unique-id":
/*!*************************************!*\
  !*** external "generate-unique-id" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("generate-unique-id");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "uniqid":
/*!*************************!*\
  !*** external "uniqid" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[key].js.map