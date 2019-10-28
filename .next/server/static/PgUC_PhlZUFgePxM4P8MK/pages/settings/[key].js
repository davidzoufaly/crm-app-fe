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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "17+t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PeopleAlt");

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "3bhu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a/jE");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dRT2");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Uynj");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vFf/");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("17+t");
/* harmony import */ var _material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("OL+V");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cPsG");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("XnMA");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("RiyV");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("4D1s");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("j08L");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
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
  mobilMenuButton: {
    color: "white",
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
  const user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
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
    position: "fixed"
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
    maxWidth: "lg"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Toolbar"], {
    className: classes.toolBar,
    style: {
      position: "relative"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["IconButton"], {
    onClick: toggleMenu,
    className: classes.mobilMenuButton
  }, !mobilMenu ? __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, null) : __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default.a, null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    component: "nav",
    className: mobilMenu ? classes.navMobil : classes.navDesktop
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    container: true,
    direction: mobilMenu ? "column" : "row",
    justify: "center"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard/[key]",
    as: `/dashboard/${user.user.userkey}`
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    startIcon: __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6___default.a, null),
    className: classes.menuButton
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].en.dashboard))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/clients/[key]",
    as: `/clients/${user.user.userkey}`
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    startIcon: __jsx(_material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_7___default.a, null),
    className: classes.menuButton
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].en.clients))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/emails/[key]",
    as: `/emails/${user.user.userkey}`
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    startIcon: __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_8___default.a, null),
    className: classes.menuButton
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].en.emails))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/settings/[key]",
    as: `/settings/${user.user.userkey}`
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    startIcon: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default.a, null),
    className: classes.menuButton
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].en.settings)))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    className: classes.menuButton,
    onClick: () => user.logoutUser(),
    startIcon: __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_11___default.a, null)
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].en.logout))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4jCe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eTqC");


/***/ }),

/***/ "8G1H":
/***/ (function(module, exports) {

module.exports = require("generate-unique-id");

/***/ }),

/***/ "8k/1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowDown");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "GRiD":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GetApp");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "OL+V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "RiyV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "W/Kq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "XOgN":
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ }),

/***/ "XnMA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "YkC2":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZX7W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d04V");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vYYK");



class StringMethods {
  constructor(_text) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "text", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "camelStringToText", () => {
      this.text = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(this.text).map(e => e === e.toUpperCase() ? e = `%-%${e.toLowerCase()}` : e).join("").replace(/%-%/g, " ");
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "firstCharUpperCase", () => {
      this.text = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(this.text).map((e, i) => i === 0 ? e.toUpperCase() : e).join("");
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "removeSlash", () => {
      this.text = this.text.replace("/", "");
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "addStringToEnd", text => {
      this.text = this.text + " " + text;
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "textToCamelString", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "textToHtmlProp", () => {
      this.text = this.text.toLowerCase().replace(/ /g, '-');
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "replaceStringDiacritics", () => {
      this.text = this.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "removeSlashAndTextAfter", () => {
      this.text = this.text.substring(0, this.text.indexOf("/"));
      return this;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "getString", () => {
      return this.text;
    });

    this.text = _text;
  } // thisIsText -> This is text


}

/* harmony default export */ __webpack_exports__["a"] = (StringMethods);

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "a/jE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    welcomeH1: "Welcome in lightweight CRM-APP built with next.js, react.js, Material UI, typescript, express and Mongo DB",
    webForm: "Web form",
    onlyGoogleAcc: "Only google accounts are supported.",
    setupeLessSecure: "You also need to provide access to less secure apps in your google settings.",
    setupYourEmailSettings: "Please setup your emails settings first",
    option: "Option",
    deleteOption: "Delete option",
    field: "Field"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (languages);

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");
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

    if (false) {}

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

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dRT2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/* harmony default export */ __webpack_exports__["a"] = (UserContext);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "eTqC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Header.tsx
var Header = __webpack_require__("3bhu");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./components/UserContext.tsx
var UserContext = __webpack_require__("dRT2");

// EXTERNAL MODULE: ./library/languages.tsx
var languages = __webpack_require__("a/jE");

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__("nd8x");
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowDown"
var KeyboardArrowDown_ = __webpack_require__("8k/1");
var KeyboardArrowDown_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowDown_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__("YeXC");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__("thJL");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// CONCATENATED MODULE: ./components/settings/DefaultFieldsSection.tsx

var __jsx = external_react_default.a.createElement;







const DefaultClientFieldsSection = ({
  fields,
  toggleSection,
  sections
}) => {
  const defaultFieldNames = fields.filter(({
    fieldPermanent
  }) => fieldPermanent === true).map(({
    fieldName,
    _id
  }) => {
    return __jsx(Card_default.a, {
      key: _id
    }, __jsx(CardContent_default.a, null, __jsx(core_["Typography"], {
      variant: "h6",
      component: "h3"
    }, fieldName)));
  });
  return __jsx(core_["Box"], {
    my: "2rem"
  }, __jsx(core_["FormControlLabel"], {
    control: __jsx(core_["Checkbox"], {
      name: "defaultFieldNames",
      onChange: toggleSection // toggle visibility of section -> default visible
      ,
      checked: sections.defaultFieldNames !== undefined ? sections.defaultFieldNames : true,
      icon: __jsx(KeyboardArrowRight_default.a, null),
      checkedIcon: __jsx(KeyboardArrowDown_default.a, null)
    }),
    label: __jsx(core_["Typography"], {
      variant: "h4",
      component: "h2"
    }, languages["a" /* default */].en.defaultClientFields)
  }), sections.defaultFieldNames || sections.defaultFieldNames === undefined ? __jsx(core_["Box"], {
    display: "flex",
    flexWrap: "wrap",
    mt: "1rem",
    mb: "5rem",
    textAlign: "center",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gridGap: "1rem"
    }
  }, defaultFieldNames) : null);
};

/* harmony default export */ var DefaultFieldsSection = (DefaultClientFieldsSection);
// EXTERNAL MODULE: external "uniqid"
var external_uniqid_ = __webpack_require__("XOgN");
var external_uniqid_default = /*#__PURE__*/__webpack_require__.n(external_uniqid_);

// EXTERNAL MODULE: external "generate-unique-id"
var external_generate_unique_id_ = __webpack_require__("8G1H");
var external_generate_unique_id_default = /*#__PURE__*/__webpack_require__.n(external_generate_unique_id_);

// EXTERNAL MODULE: ./library/stringMethods.tsx
var stringMethods = __webpack_require__("ZX7W");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__("W/Kq");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);

// CONCATENATED MODULE: ./components/settings/customFields/AddOrEditField.tsx

var AddOrEditField_jsx = external_react_default.a.createElement;






const useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
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
  return displayComponent ? AddOrEditField_jsx(core_["Box"], {
    className: classes.formWrapper
  }, AddOrEditField_jsx(Typography_default.a, {
    component: "h3",
    variant: "h5"
  }, editedField.id ? languages["a" /* default */].en.editCustomField : languages["a" /* default */].en.newCustomField), AddOrEditField_jsx("form", {
    onSubmit: fieldMethods.saveEditedField
  }, AddOrEditField_jsx(core_["Grid"], {
    container: true,
    spacing: 3
  }, AddOrEditField_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    lg: 6
  }, AddOrEditField_jsx(core_["TextField"], {
    id: new stringMethods["a" /* default */](languages["a" /* default */].en.fieldName).textToHtmlProp().getString(),
    autoFocus: true,
    type: "text",
    label: languages["a" /* default */].en.fieldName,
    className: classes.textField,
    value: editedField.fieldName,
    onChange: fieldMethods.onNameChange,
    fullWidth: true
  })), AddOrEditField_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    lg: 6
  }, AddOrEditField_jsx(core_["FormControl"], {
    className: classes.textField,
    fullWidth: true
  }, AddOrEditField_jsx(core_["InputLabel"], {
    htmlFor: new stringMethods["a" /* default */](languages["a" /* default */].en.fieldType).textToHtmlProp().getString()
  }, languages["a" /* default */].en.fieldType), AddOrEditField_jsx(core_["Select"], {
    id: new stringMethods["a" /* default */](languages["a" /* default */].en.fieldType).textToHtmlProp().getString(),
    onChange: fieldMethods.onSelectChange,
    value: editedField.fieldType
  }, AddOrEditField_jsx(core_["MenuItem"], {
    value: "text"
  }, languages["a" /* default */].en.text), AddOrEditField_jsx(core_["MenuItem"], {
    value: "select"
  }, languages["a" /* default */].en.select), AddOrEditField_jsx(core_["MenuItem"], {
    value: "number"
  }, languages["a" /* default */].en.number)))), editedField.fieldType === "select" ? AddOrEditField_jsx(core_["Grid"], {
    item: true,
    xs: 6
  }, handleOption) : null, AddOrEditField_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, AddOrEditField_jsx(core_["Box"], {
    display: "flex",
    justifyContent: "flex-end"
  }, AddOrEditField_jsx(core_["Button"], {
    onClick: fieldMethods.toggleDisplayComponent,
    color: "secondary",
    variant: "contained",
    style: {
      marginRight: "1rem"
    }
  }, languages["a" /* default */].en.cancel), AddOrEditField_jsx(core_["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary"
  }, languages["a" /* default */].en.save)))))) : AddOrEditField_jsx("div", null, AddOrEditField_jsx(core_["Fab"], {
    color: "primary",
    variant: "extended",
    "aria-label": "add",
    className: classes.fab,
    onClick: fieldMethods.toggleDisplayComponent
  }, AddOrEditField_jsx(Add_default.a, null), languages["a" /* default */].en.field));
};

/* harmony default export */ var customFields_AddOrEditField = (AddOrEditField);
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__("ZkBw");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/icons/Edit"
var Edit_ = __webpack_require__("YkC2");
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);

// EXTERNAL MODULE: external "@material-ui/icons/Delete"
var Delete_ = __webpack_require__("ng1p");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);

// CONCATENATED MODULE: ./components/settings/customFields/CustomFieldsList.tsx

var CustomFieldsList_jsx = external_react_default.a.createElement;












const CustomFieldsList_useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
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
  fields,
  setupEditedField,
  deleteField
}) => {
  const classes = CustomFieldsList_useStyles({});
  const separatedCustomFields = fields.filter(({
    fieldPermanent
  }) => !fieldPermanent).map(({
    fieldName,
    _id,
    fieldType,
    fieldOptions
  }) => {
    const options = fieldOptions.map(e => {
      return CustomFieldsList_jsx(ListItem_default.a, {
        key: e.id
      }, CustomFieldsList_jsx(ListItemText_default.a, {
        primary: e.value
      }));
    });
    return CustomFieldsList_jsx(Grid_default.a, {
      item: true,
      key: _id,
      className: classes.card
    }, CustomFieldsList_jsx(Card_default.a, {
      style: {
        height: "100%"
      }
    }, CustomFieldsList_jsx(CardContent_default.a, {
      className: classes.cardWrapper
    }, CustomFieldsList_jsx(Box_default.a, null, CustomFieldsList_jsx(Typography_default.a, {
      variant: "h6",
      component: "h3"
    }, fieldName), CustomFieldsList_jsx(Typography_default.a, {
      className: classes.pos,
      color: "textSecondary"
    }, "(", fieldType.toLowerCase(), ")"), fieldType === "select" && fieldOptions.length > 0 ? CustomFieldsList_jsx(Box_default.a, null, CustomFieldsList_jsx(List_default.a, {
      className: classes.list,
      dense: true
    }, options)) : null), CustomFieldsList_jsx(Box_default.a, null, CustomFieldsList_jsx(Box_default.a, {
      width: "40%",
      mt: "1rem"
    }, CustomFieldsList_jsx(Grid_default.a, {
      container: true,
      spacing: 1
    }, CustomFieldsList_jsx(Grid_default.a, {
      item: true,
      xs: 6
    }, CustomFieldsList_jsx(core_["Fab"], {
      size: "small",
      color: "primary",
      onClick: () => setupEditedField({
        fieldName,
        fieldType,
        fieldPermanent: false,
        fieldOptions,
        _id: _id
      })
    }, CustomFieldsList_jsx(Edit_default.a, null))), CustomFieldsList_jsx(Grid_default.a, {
      item: true,
      xs: 6
    }, CustomFieldsList_jsx(core_["Fab"], {
      size: "small",
      color: "secondary",
      onClick: () => deleteField(_id)
    }, CustomFieldsList_jsx(Delete_default.a, null)))))))));
  });
  return CustomFieldsList_jsx(Grid_default.a, {
    container: true,
    spacing: 2
  }, separatedCustomFields);
};

/* harmony default export */ var CustomFieldsList = (CustomFields);
// EXTERNAL MODULE: external "@material-ui/icons/HighlightOff"
var HighlightOff_ = __webpack_require__("nsCJ");
var HighlightOff_default = /*#__PURE__*/__webpack_require__.n(HighlightOff_);

// CONCATENATED MODULE: ./components/settings/customFields/SelectFieldOptions.tsx

var SelectFieldOptions_jsx = external_react_default.a.createElement;





const SelectFieldOptions_useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
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
  const classes = SelectFieldOptions_useStyles({});
  const items = options.map(e => SelectFieldOptions_jsx("div", {
    key: e.id,
    className: classes.inputWrapper
  }, SelectFieldOptions_jsx(core_["Input"], {
    type: "text",
    id: e.id,
    placeholder: languages["a" /* default */].en.option,
    onChange: () => fieldMethods.onOptionChange(e.id, event),
    value: e.value
  }), SelectFieldOptions_jsx(core_["IconButton"], {
    color: "secondary",
    size: "small",
    id: e.id,
    onClick: fieldMethods.onOptionDelete,
    "aria-label": languages["a" /* default */].en.deleteOption
  }, SelectFieldOptions_jsx(HighlightOff_default.a, null))));
  return SelectFieldOptions_jsx("div", null, items, SelectFieldOptions_jsx(core_["Fab"], {
    onClick: fieldMethods.handleOptionSpawn,
    size: "medium",
    variant: "extended",
    className: classes.addOption
  }, SelectFieldOptions_jsx(Add_default.a, null), languages["a" /* default */].en.option));
};

/* harmony default export */ var customFields_SelectFieldOptions = (SelectFieldOptions);
// EXTERNAL MODULE: ./library/globalVariables.tsx
var globalVariables = __webpack_require__("j4kZ");

// CONCATENATED MODULE: ./components/settings/customFields/CustomFields.tsx


var CustomFields_jsx = external_react_default.a.createElement;











const CustomClientFields = ({
  fields,
  addField,
  removeField
}) => {
  const blankFieldObject = {
    fieldName: "",
    fieldType: "text",
    fieldOptions: [],
    fieldFormVisible: null,
    _id: external_generate_unique_id_default()({
      length: 24,
      useNumbers: true,
      useLetters: false,
      includeSymbols: ["a", "b", "c", "d", "e", "f"]
    })
  };
  const user = Object(external_react_["useContext"])(UserContext["a" /* default */]);
  const {
    0: displayComponent,
    1: setDisplayComponent
  } = Object(external_react_["useState"])(false);
  const {
    0: editedField,
    1: setEditedField
  } = Object(external_react_["useReducer"])((state, action) => {
    switch (action.type) {
      case "fieldNameChange":
        return Object(objectSpread["a" /* default */])({}, state, {
          fieldName: action.payload.value
        });

      case "selectValueChange":
        return Object(objectSpread["a" /* default */])({}, state, {
          fieldType: action.payload.value
        });

      case "newOptionSpawn":
        return Object(objectSpread["a" /* default */])({}, state, {
          fieldOptions: [...state.fieldOptions, {
            id: external_uniqid_default()(),
            value: ""
          }]
        });

      case "clear":
        return blankFieldObject;

      case "optionValueChange":
        return Object(objectSpread["a" /* default */])({}, state, {
          fieldOptions: state.fieldOptions.map(el => el.id === action.payload.id ? Object(objectSpread["a" /* default */])({}, el, {
            value: action.payload.value
          }) : el)
        });

      case "optionDelete":
        return Object(objectSpread["a" /* default */])({}, state, {
          fieldOptions: state.fieldOptions.filter(e => action.payload.id !== e.id)
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
        const res = await external_axios_default()({
          method: "PUT",
          url: `${globalVariables["a" /* default */].serverURL}/fields/${_id}`,
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

        if (data.msg === globalVariables["a" /* default */].msgSuccess) {
          reset();
        }
      };

      const fieldIsCreated = async () => {
        const res = await external_axios_default()({
          method: "POST",
          params: {
            key: user.user.userkey
          },
          url: `${globalVariables["a" /* default */].serverURL}/fields/`,
          data: editedField,
          responseType: "json"
        });
        const data = await res.data;

        if (data.msg === globalVariables["a" /* default */].msgSuccess) {
          reset();
        }
      };

      fields.some(field => field._id === editedField._id) ? fieldIsUpdated() : fieldIsCreated();
    }

  };

  const reset = () => {
    setDisplayComponent(false);
    addField(editedField);
    setEditedField({
      type: "clear"
    });
  };

  const deleteField = async id => {
    const res = await external_axios_default()({
      method: "DELETE",
      params: {
        key: user.user.userkey
      },
      url: `${globalVariables["a" /* default */].serverURL}/fields/${id}`,
      responseType: "json"
    });
    const resData = await res.data;
    resData.msg === globalVariables["a" /* default */].msgSuccess ? removeField(id) : null;
  };

  return CustomFields_jsx(core_["Box"], {
    mt: "1rem",
    mb: "5rem"
  }, CustomFields_jsx(CustomFieldsList, {
    deleteField: deleteField,
    fields: fields,
    setupEditedField: fieldMethods.setupEditedField
  }), CustomFields_jsx(customFields_AddOrEditField, {
    editedField: editedField,
    displayComponent: displayComponent,
    fieldMethods: fieldMethods,
    handleOption: CustomFields_jsx(customFields_SelectFieldOptions, {
      options: editedField.fieldOptions,
      fieldMethods: fieldMethods
    })
  }));
};

/* harmony default export */ var customFields_CustomFields = (CustomClientFields);
// CONCATENATED MODULE: ./components/settings/customFields/CustomFieldsSection.tsx

var CustomFieldsSection_jsx = external_react_default.a.createElement;






const CustomFieldsSection = ({
  toggleSection,
  addField,
  removeField,
  sections,
  fields
}) => CustomFieldsSection_jsx(core_["Box"], {
  my: "2rem"
}, CustomFieldsSection_jsx(core_["FormControlLabel"], {
  control: CustomFieldsSection_jsx(core_["Checkbox"], {
    onChange: toggleSection,
    name: "customFields",
    id: "custom-fields" // toggle visibility of section
    ,
    checked: sections.customFields !== undefined ? sections.customFields : true,
    icon: CustomFieldsSection_jsx(KeyboardArrowRight_default.a, null),
    checkedIcon: CustomFieldsSection_jsx(KeyboardArrowDown_default.a, null)
  }),
  label: CustomFieldsSection_jsx(core_["Typography"], {
    variant: "h4",
    component: "h2"
  }, languages["a" /* default */].en.customClientFields)
}), sections.customFields || sections.customFields === undefined ? CustomFieldsSection_jsx(customFields_CustomFields, {
  fields: fields,
  addField: addField,
  removeField: removeField
}) : null);

/* harmony default export */ var customFields_CustomFieldsSection = (CustomFieldsSection);
// EXTERNAL MODULE: ./components/LoadingSpinner.tsx
var LoadingSpinner = __webpack_require__("irv3");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/icons/Visibility"
var Visibility_ = __webpack_require__("4jCe");
var Visibility_default = /*#__PURE__*/__webpack_require__.n(Visibility_);

// EXTERNAL MODULE: external "@material-ui/icons/VisibilityOff"
var VisibilityOff_ = __webpack_require__("gGTQ");
var VisibilityOff_default = /*#__PURE__*/__webpack_require__.n(VisibilityOff_);

// CONCATENATED MODULE: ./components/settings/emailSettings/EmailSettingsForm.tsx


var EmailSettingsForm_jsx = external_react_default.a.createElement;











const EmailSettingsForm_useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
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
  } = Object(external_react_["useState"])({
    username,
    pass
  });
  const {
    0: isPassShown,
    1: setIsPassShown
  } = Object(external_react_["useState"])(false);
  const passEl = Object(external_react_["useRef"])(null);
  const user = Object(external_react_["useContext"])(UserContext["a" /* default */]);
  const classes = EmailSettingsForm_useStyles({});

  const onSubmit = async e => {
    e.preventDefault();
    const res = await external_axios_default()({
      method: "post",
      url: `${globalVariables["a" /* default */].serverURL}/emails`,
      params: {
        key: user.user.userkey
      },
      data: emailSettings,
      responseType: "json"
    });
    const data = res.data;

    if (data === "Success") {
      alert(languages["a" /* default */].en.emailSettingsUpdatedSuccess);
    } else {
      alert(languages["a" /* default */].en.somethingWentWrong);
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
    setEmailSettings(Object(objectSpread["a" /* default */])({}, emailSettings, {
      [e.target.name]: e.target.value
    }));
  };

  return EmailSettingsForm_jsx(core_["Box"], {
    mt: "1rem",
    mb: "5rem"
  }, EmailSettingsForm_jsx(Typography_default.a, {
    variant: "body1",
    gutterBottom: true
  }, languages["a" /* default */].en.onlyGoogleAcc), EmailSettingsForm_jsx(Typography_default.a, {
    variant: "body1",
    gutterBottom: true
  }, languages["a" /* default */].en.setupeLessSecure), EmailSettingsForm_jsx(core_["Box"], {
    className: classes.formWrapper
  }, EmailSettingsForm_jsx("form", {
    onSubmit: onSubmit
  }, EmailSettingsForm_jsx(core_["Grid"], {
    container: true,
    spacing: 3
  }, EmailSettingsForm_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    lg: 6
  }, EmailSettingsForm_jsx(core_["TextField"], {
    id: "acc-name",
    type: "text",
    name: "username",
    autoComplete: "email",
    value: emailSettings.username,
    onChange: onChange,
    margin: "normal",
    label: languages["a" /* default */].en.email,
    fullWidth: true
  })), EmailSettingsForm_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    lg: 6
  }, EmailSettingsForm_jsx(core_["TextField"], {
    id: "acc-pass",
    type: "password",
    autoComplete: "current-password",
    name: "pass",
    margin: "normal",
    inputRef: passEl,
    value: emailSettings.pass,
    onChange: onChange,
    label: languages["a" /* default */].en.password,
    fullWidth: true
  })), EmailSettingsForm_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, EmailSettingsForm_jsx(core_["Box"], {
    display: "flex",
    justifyContent: "flex-end"
  }, EmailSettingsForm_jsx(Button_default.a, {
    variant: "contained",
    color: "primary",
    style: {
      marginRight: "1rem"
    },
    onClick: togglePass,
    startIcon: isPassShown ? EmailSettingsForm_jsx(VisibilityOff_default.a, null) : EmailSettingsForm_jsx(Visibility_default.a, null)
  }, isPassShown ? languages["a" /* default */].en.password : languages["a" /* default */].en.password), EmailSettingsForm_jsx(Button_default.a, {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, languages["a" /* default */].en.save)))))));
};

/* harmony default export */ var emailSettings_EmailSettingsForm = (EmailSettingsForm);
// CONCATENATED MODULE: ./components/settings/emailSettings/EmailSettingsSection.tsx

var EmailSettingsSection_jsx = external_react_default.a.createElement;






const EmailSettingsSection = ({
  username,
  pass,
  toggleSection,
  sections
}) => {
  return EmailSettingsSection_jsx(core_["Box"], {
    my: "2rem"
  }, EmailSettingsSection_jsx(core_["FormControlLabel"], {
    control: EmailSettingsSection_jsx(core_["Checkbox"], {
      onChange: toggleSection,
      name: "emailSettings" // toggle visibility of section -> default visible
      ,
      checked: sections.emailSettings !== undefined ? sections.emailSettings : true,
      icon: EmailSettingsSection_jsx(KeyboardArrowRight_default.a, null),
      checkedIcon: EmailSettingsSection_jsx(KeyboardArrowDown_default.a, null)
    }),
    label: EmailSettingsSection_jsx(core_["Typography"], {
      variant: "h4",
      component: "h2"
    }, languages["a" /* default */].en.emailAccount)
  }), sections.emailSettings || sections.emailSettings === undefined ? EmailSettingsSection_jsx(emailSettings_EmailSettingsForm, {
    username: username,
    pass: pass
  }) : null);
};

/* harmony default export */ var emailSettings_EmailSettingsSection = (EmailSettingsSection);
// CONCATENATED MODULE: ./components/settings/webform/WebFormSelect.tsx

var WebFormSelect_jsx = external_react_default.a.createElement;



const WebFormSelect = ({
  webFields,
  addNotSelect
}) => {
  const selectOptions = webFields.map(field => {
    return !field.fieldInForm && field.fieldName !== "Date added" && field.fieldName !== "Last modified" ? WebFormSelect_jsx(core_["MenuItem"], {
      key: field._id,
      value: field.fieldName,
      id: field.id
    }, field.fieldName) : null;
  });
  return WebFormSelect_jsx(core_["Box"], {
    mb: "2rem"
  }, WebFormSelect_jsx(core_["Typography"], {
    component: "h3",
    variant: "h5",
    gutterBottom: true
  }, languages["a" /* default */].en.selectField), selectOptions.some(field => field !== null) ? WebFormSelect_jsx(core_["FormControl"], {
    fullWidth: true,
    disabled: webFields.some(e => e.pause)
  }, WebFormSelect_jsx(core_["InputLabel"], {
    htmlFor: "field-select"
  }, languages["a" /* default */].en.fieldName), WebFormSelect_jsx(core_["Select"], {
    name: "fields",
    id: "field-select",
    onChange: addNotSelect,
    value: ""
  }, selectOptions)) : WebFormSelect_jsx(core_["Typography"], null, languages["a" /* default */].en.allFieldsSelected));
};

/* harmony default export */ var webform_WebFormSelect = (WebFormSelect);
// CONCATENATED MODULE: ./components/settings/webform/WebFormList.tsx

var WebFormList_jsx = external_react_default.a.createElement;




const WebFormList = ({
  webFields,
  removeFromList
}) => {
  const list = [];
  webFields.map(({
    _id,
    fieldName,
    fieldInForm,
    fieldFormVisible,
    fieldOptions,
    fieldType,
    order
  }) => {
    const strFormVisible = fieldFormVisible ? ` - ${languages["a" /* default */].en.visibleInForm}` : null;
    const strFormNotVisible1 = !fieldFormVisible ? fieldType === "select" ? ` - ${languages["a" /* default */].en.hiddenInForm}` : null : null;
    const strFormNotVisible2 = !fieldFormVisible ? fieldType === "select" ? fieldOptions.map(e => e.preselected ? e.value : null).join("") : null : null;
    const strFormNotVisible3 = !fieldFormVisible ? fieldType === "select" ? languages["a" /* default */].en.asPreselected : null : null;
    languages["a" /* default */].en.asPreselected;
    fieldInForm ? list[order] = WebFormList_jsx(core_["ListItem"], {
      key: _id
    }, WebFormList_jsx(core_["Typography"], null, WebFormList_jsx(core_["IconButton"], {
      id: fieldName,
      onClick: removeFromList,
      color: "secondary",
      style: {
        marginRight: "1rem"
      }
    }, WebFormList_jsx(HighlightOff_default.a, null)), WebFormList_jsx("strong", null, fieldName), strFormVisible, strFormNotVisible1, " ", WebFormList_jsx("strong", null, strFormNotVisible2), " ", strFormNotVisible3)) : [];
  });
  return WebFormList_jsx(core_["Box"], {
    mb: "2rem"
  }, WebFormList_jsx(core_["Typography"], {
    component: "h3",
    variant: "h5",
    gutterBottom: true
  }, languages["a" /* default */].en.selectedFields), webFields.some(e => e.fieldInForm) ? WebFormList_jsx(core_["List"], {
    dense: true
  }, list) : WebFormList_jsx(core_["Typography"], null, languages["a" /* default */].en.noFieldsSelected));
};

/* harmony default export */ var webform_WebFormList = (WebFormList);
// CONCATENATED MODULE: ./components/settings/webform/WebFormVisibleOrNot.tsx

var WebFormVisibleOrNot_jsx = external_react_default.a.createElement;



const WebFormVisibleOrNot = ({
  webFields,
  addVisibleSelect,
  showOptionsOnClick
}) => {
  const VisibleOrNot = webFields.map(({
    fieldName,
    fieldFormVisible,
    _id,
    pause
  }) => fieldFormVisible === null ? pause ? WebFormVisibleOrNot_jsx(core_["Box"], {
    key: _id,
    mb: "2rem"
  }, WebFormVisibleOrNot_jsx(core_["Typography"], {
    gutterBottom: true,
    component: "h4",
    variant: "h6"
  }, languages["a" /* default */].en.shouldBe, " ", WebFormVisibleOrNot_jsx("strong", null, fieldName), " ", languages["a" /* default */].en.visibleInForm, "?"), WebFormVisibleOrNot_jsx(core_["Button"], {
    id: fieldName,
    variant: "contained",
    color: "primary",
    style: {
      marginRight: "1rem"
    },
    onClick: addVisibleSelect
  }, languages["a" /* default */].en.yes), WebFormVisibleOrNot_jsx(core_["Button"], {
    variant: "contained",
    color: "secondary",
    onClick: showOptionsOnClick
  }, languages["a" /* default */].en.no)) : null : null);
  return WebFormVisibleOrNot_jsx(external_react_default.a.Fragment, null, VisibleOrNot);
};

/* harmony default export */ var webform_WebFormVisibleOrNot = (WebFormVisibleOrNot);
// CONCATENATED MODULE: ./components/settings/webform/WebFormSubSelect.tsx

var WebFormSubSelect_jsx = external_react_default.a.createElement;



const WebFormSubSelect = ({
  webFields,
  addHiddenSelect
}) => {
  return webFields.some(e => e.fieldFormVisible === false && e.pause) ? WebFormSubSelect_jsx(core_["Box"], {
    mb: "2rem"
  }, WebFormSubSelect_jsx(core_["Typography"], {
    component: "h4",
    variant: "h6",
    gutterBottom: true
  }, languages["a" /* default */].en.pleaseSelectOption), WebFormSubSelect_jsx(core_["Box"], {
    width: "50%"
  }, WebFormSubSelect_jsx(core_["FormControl"], {
    fullWidth: true
  }, WebFormSubSelect_jsx(core_["InputLabel"], {
    htmlFor: "field-sub-select"
  }, languages["a" /* default */].en.fieldName), WebFormSubSelect_jsx(core_["Select"], {
    id: "field-sub-select",
    onChange: addHiddenSelect,
    value: ""
  }, webFields.map(field => field.pause ? field.fieldOptions.map(option => WebFormSubSelect_jsx(core_["MenuItem"], {
    key: option.id,
    value: option.value
  }, option.value)) : null))))) : null;
};

/* harmony default export */ var webform_WebFormSubSelect = (WebFormSubSelect);
// EXTERNAL MODULE: external "@material-ui/icons/GetApp"
var GetApp_ = __webpack_require__("GRiD");
var GetApp_default = /*#__PURE__*/__webpack_require__.n(GetApp_);

// CONCATENATED MODULE: ./components/settings/webform/WebFormButtons.tsx

var WebFormButtons_jsx = external_react_default.a.createElement;








const WebFormButtons = ({
  webFields
}) => {
  const user = Object(external_react_["useContext"])(UserContext["a" /* default */]);

  const onDownload = async () => {
    const res = await external_axios_default()({
      method: "GET",
      url: `${globalVariables["a" /* default */].serverURL}/webform/`,
      params: {
        key: user.user.userkey
      },
      data: webFields,
      responseType: "blob"
    });
    const url = await window.URL.createObjectURL(new Blob([res.data]));
    const link = await document.createElement("a");
    link.href = url;
    link.setAttribute("download", "crm-form.js");
    document.body.appendChild(link);
    link.click();
  };

  return WebFormButtons_jsx(core_["Box"], {
    display: "flex",
    justifyContent: "flex-end"
  }, WebFormButtons_jsx(core_["Button"], {
    onClick: onDownload,
    variant: "contained",
    color: "primary",
    startIcon: WebFormButtons_jsx(GetApp_default.a, null)
  }, languages["a" /* default */].en.donwloadForm));
};

/* harmony default export */ var webform_WebFormButtons = (WebFormButtons);
// CONCATENATED MODULE: ./components/settings/webform/WebForm.tsx


var WebForm_jsx = external_react_default.a.createElement;











const WebForm_useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
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
  fields
}) => {
  const initCounterValue = fields.map(e => e.order).sort((a, b) => b > a ? 1 : -1)[0];
  const classes = WebForm_useStyles({});
  const user = Object(external_react_["useContext"])(UserContext["a" /* default */]);
  const {
    0: counter,
    1: setCounter
  } = Object(external_react_["useState"])(initCounterValue);
  const {
    0: webFields,
    1: setWebFields
  } = Object(external_react_["useReducer"])((state, action) => {
    switch (action.type) {
      case "add":
        return state.map(field => field.fieldName === action.payload.fieldName ? Object(objectSpread["a" /* default */])({}, field, {
          fieldInForm: true,
          order: counter
        }) : field);

      case "addVisibleSelect":
        return state.map(field => field.fieldName === action.payload.fieldName ? Object(objectSpread["a" /* default */])({}, field, {
          fieldInForm: true,
          fieldFormVisible: true,
          pause: false,
          order: counter
        }) : field);

      case "addNotVisibleValue":
        return state.map(field => field.pause ? Object(objectSpread["a" /* default */])({}, field, {
          fieldFormVisible: false
        }) : field);

      case "addHiddenSelect":
        return state.map(field => field.pause ? Object(objectSpread["a" /* default */])({}, field, {
          fieldInForm: true,
          pause: false,
          order: counter,
          fieldOptions: field.fieldOptions.map(option => option.value === action.payload.optionValue ? Object(objectSpread["a" /* default */])({}, option, {
            preselected: true
          }) : option)
        }) : field);

      case "pauseSelect":
        return state.map(field => field.fieldName === action.payload.fieldName ? Object(objectSpread["a" /* default */])({}, field, {
          pause: true
        }) : field);

      case "remove":
        return state.map(field => field.fieldName === action.payload.fieldName ? Object(objectSpread["a" /* default */])({}, field, {
          fieldInForm: false,
          fieldFormVisible: null,
          fieldOptions: field.fieldOptions.map(option => option.preselected ? Object(objectSpread["a" /* default */])({}, option, {
            preselected: null
          }) : option)
        }) : field);

      default:
        return state;
    }
  }, fields);

  const addNotSelect = e => {
    webFields.map(field => {
      if (field.fieldName === e.target.value) {
        if (field.fieldType !== "select") {
          setWebFields({
            type: "add",
            payload: {
              fieldName: e.target.value
            }
          });
          setCounter(prevCount => prevCount + 1);
        } else {
          setWebFields({
            type: "pauseSelect",
            payload: {
              fieldName: e.target.value
            }
          });
        }
      }
    });
  };

  const addVisibleSelect = e => {
    setWebFields({
      type: "addVisibleSelect",
      payload: {
        fieldName: e.currentTarget.id
      }
    });
    setCounter(prevCount => prevCount + 1);
  };

  const addHiddenSelect = e => {
    setWebFields({
      type: "addHiddenSelect",
      payload: {
        optionValue: e.target.value
      }
    });
    setCounter(prevCount => prevCount + 1);
  };

  const removeFromList = e => {
    setWebFields({
      type: "remove",
      payload: {
        fieldName: e.currentTarget.id
      }
    });
  };

  const showOptionsOnClick = () => {
    setWebFields({
      type: "addNotVisibleValue"
    });
  };

  const saveFormAuto = async () => {
    await external_axios_default()({
      method: "PUT",
      url: `${globalVariables["a" /* default */].serverURL}/fields`,
      params: {
        key: user.user.userkey
      },
      data: webFields,
      responseType: "json"
    });
  };

  Object(external_react_["useEffect"])(() => {
    //save fields (form) on change
    webFields !== fields ? saveFormAuto() : null;
  }, [webFields]);
  return WebForm_jsx(core_["Box"], {
    className: classes.formWrapper
  }, WebForm_jsx("form", null, WebForm_jsx(webform_WebFormSelect, {
    webFields: webFields,
    addNotSelect: addNotSelect
  }), WebForm_jsx(webform_WebFormVisibleOrNot, {
    webFields: webFields,
    addVisibleSelect: addVisibleSelect,
    showOptionsOnClick: showOptionsOnClick
  }), WebForm_jsx(webform_WebFormSubSelect, {
    webFields: webFields,
    addHiddenSelect: addHiddenSelect
  }), WebForm_jsx(webform_WebFormList, {
    webFields: webFields,
    removeFromList: removeFromList
  }), WebForm_jsx(webform_WebFormButtons, {
    webFields: webFields
  })));
};

/* harmony default export */ var webform_WebForm = (WebForm);
// CONCATENATED MODULE: ./components/settings/webform/WebFormSection.tsx

var WebFormSection_jsx = external_react_default.a.createElement;






const WebFormSection = ({
  fields,
  toggleSection,
  sections
}) => WebFormSection_jsx(core_["Box"], {
  my: "2rem"
}, WebFormSection_jsx(core_["FormControlLabel"], {
  control: WebFormSection_jsx(core_["Checkbox"], {
    name: "webForm",
    onChange: toggleSection // toggle visibility of section
    ,
    checked: sections.webForm !== undefined ? sections.webForm : true,
    icon: WebFormSection_jsx(KeyboardArrowRight_default.a, null),
    checkedIcon: WebFormSection_jsx(KeyboardArrowDown_default.a, null)
  }),
  label: WebFormSection_jsx(core_["Typography"], {
    variant: "h4",
    component: "h2"
  }, languages["a" /* default */].en.webForm)
}), sections.webForm || sections.webForm === undefined ? WebFormSection_jsx(webform_WebForm, {
  fields: fields
}) : null);

/* harmony default export */ var webform_WebFormSection = (WebFormSection);
// CONCATENATED MODULE: ./pages/settings/[key].tsx


var _key_jsx = external_react_default.a.createElement;














const Settings = ({
  dataFields,
  username,
  pass
}) => {
  const router = Object(router_["useRouter"])();
  const {
    0: fields,
    1: setField
  } = Object(external_react_["useState"])(dataFields);
  const {
    0: initialized,
    1: setInitialized
  } = Object(external_react_["useState"])(false);
  const {
    0: sections,
    1: setSection
  } = Object(external_react_["useState"])({});
  const user = Object(external_react_["useContext"])(UserContext["a" /* default */]);

  const toggleSection = e => {
    setSection(Object(objectSpread["a" /* default */])({}, sections, {
      [e.target.name]: e.target.checked
    }));
  };

  const addField = obj => {
    setField(fields.some(field => field._id === obj._id) ? fields.map(field => field._id === obj._id ? obj : field) : [...fields, obj]);
  };

  const removeField = id => {
    setField(fields.filter(field => field._id !== id));
  };

  Object(external_react_["useEffect"])(() => {
    //title from url
    const title = new stringMethods["a" /* default */](router.pathname).removeSlash().removeSlashAndTextAfter().firstCharUpperCase().addStringToEnd(globalVariables["a" /* default */].titleSubText).getString();
    document.title = title; //componendDidMount effect

    setInitialized(true);
    user.checkUser();
  }, [router]);
  const h1 = new stringMethods["a" /* default */](router.pathname).removeSlash().removeSlashAndTextAfter().firstCharUpperCase().getString();
  return !user.user.signedIn && !initialized ? _key_jsx(LoadingSpinner["a" /* default */], null) : _key_jsx("div", null, _key_jsx(Header["a" /* default */], null), _key_jsx(Typography_default.a, {
    variant: "h3",
    component: "h1",
    gutterBottom: true
  }, h1), _key_jsx(DefaultFieldsSection, {
    fields: fields,
    toggleSection: toggleSection,
    sections: sections
  }), _key_jsx(customFields_CustomFieldsSection, {
    fields: fields,
    removeField: removeField,
    addField: addField,
    sections: sections,
    toggleSection: toggleSection
  }), _key_jsx(emailSettings_EmailSettingsSection, {
    username: username,
    pass: pass,
    toggleSection: toggleSection,
    sections: sections
  }), _key_jsx(webform_WebFormSection, {
    fields: fields,
    toggleSection: toggleSection,
    sections: sections
  }));
};

Settings.getInitialProps = async context => {
  const resFields = await external_axios_default()({
    method: "GET",
    params: {
      key: context.query.key
    },
    url: `${globalVariables["a" /* default */].serverURL}/fields`,
    responseType: "json"
  });
  const dataFields = await resFields.data;
  const resEmailSettings = await external_axios_default()({
    method: "GET",
    params: {
      key: context.query.key
    },
    url: `${globalVariables["a" /* default */].serverURL}/emails/email-settings`,
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

/* harmony default export */ var _key_ = __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const is_dynamic_1 = __webpack_require__("/jkW");

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

      if (false) {}

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
        if (false) {}

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

        if (false) {} // @ts-ignore pathname is always defined


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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

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
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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
  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gGTQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "irv3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1imS");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LoadingSpinner = () => __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default.a, null);

/* harmony default export */ __webpack_exports__["a"] = (LoadingSpinner);

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "j4kZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const globalVars = {
  titleSubText: "| CRM-APP",
  serverURL: "http://localhost:8080/api",
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
/* harmony default export */ __webpack_exports__["a"] = (globalVars);

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "nd8x":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ "ng1p":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "nsCJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HighlightOff");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "vFf/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });