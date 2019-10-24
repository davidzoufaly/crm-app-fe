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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

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
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = () => {
  const user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard/[key]",
    as: `/dashboard/${user.user.userkey}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.dashboard))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/clients/[key]",
    as: `/clients/${user.user.userkey}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.clients))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/emails/[key]",
    as: `/emails/${user.user.userkey}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.emails))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/settings/[key]",
    as: `/settings/${user.user.userkey}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.settings))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => user.logoutUser(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
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
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/LoadingSpinner.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LoadingSpinner = () => __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
});

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

/***/ "./components/settings/DefaultFields.tsx":
/*!***********************************************!*\
  !*** ./components/settings/DefaultFields.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/DefaultFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const DefaultClientFields = ({
  fields
}) => {
  const defaultFieldNames = fields.filter(({
    fieldPermanent
  }) => fieldPermanent === true).map(({
    fieldName,
    _id
  }) => {
    return __jsx("div", {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, fieldName));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.defaultClientFields), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, defaultFieldNames));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultClientFields);

/***/ }),

/***/ "./components/settings/EmailSettings.tsx":
/*!***********************************************!*\
  !*** ./components/settings/EmailSettings.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/EmailSettings.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const EmailSettings = ({
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

  const onSubmit = async e => {
    e.preventDefault();
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "post",
      url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_4__["default"].serverURL}/emails`,
      params: {
        key: user.user.userkey
      },
      data: {
        username,
        pass
      },
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h4",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.emailAccount), __jsx("form", {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "acc-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.email), __jsx("input", {
    id: "acc-name",
    type: "text",
    name: "username",
    autoComplete: "email",
    value: username,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "acc-pass",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.password), __jsx("input", {
    id: "acc-pass",
    type: "password",
    autoComplete: "current-password",
    name: "pass",
    ref: passEl,
    value: pass,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "contained",
    color: "primary",
    onClick: togglePass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, isPassShown ? _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.hidePassword : _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.showPassword), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "contained",
    color: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.save)));
};

/* harmony default export */ __webpack_exports__["default"] = (EmailSettings);

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
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/AddOrEditField.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AddOrEditField = ({
  editedField,
  displayComponent,
  fieldMethods,
  handleOption
}) => {
  return displayComponent ? __jsx("form", {
    onSubmit: fieldMethods.saveEditedField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, editedField.id ? _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.editCustomField : _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.newCustomField), __jsx("label", {
    htmlFor: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_4__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.fieldName).textToHtmlProp().getString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.fieldName), __jsx("input", {
    type: "text",
    id: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_4__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.fieldName).textToHtmlProp().getString(),
    autoFocus: true,
    value: editedField.fieldName,
    onChange: fieldMethods.onNameChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_4__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.fieldType).textToHtmlProp().getString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.fieldType), __jsx("select", {
    id: new _library_stringMethods__WEBPACK_IMPORTED_MODULE_4__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.fieldType).textToHtmlProp().getString(),
    onChange: fieldMethods.onSelectChange,
    value: editedField.fieldType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("option", {
    value: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.text), __jsx("option", {
    value: "select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.select), __jsx("option", {
    value: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.number)), editedField.fieldType === "select" ? handleOption : null, __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.save), __jsx("button", {
    onClick: fieldMethods.toggleDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.cancel)) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "primary",
    "aria-label": "add",
    onClick: fieldMethods.toggleDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.addNewField));
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
/* harmony import */ var _AddOrEditField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddOrEditField */ "./components/settings/customFields/AddOrEditField.tsx");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _CustomFieldsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomFieldsList */ "./components/settings/customFields/CustomFieldsList.tsx");
/* harmony import */ var _SelectFieldOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectFieldOptions */ "./components/settings/customFields/SelectFieldOptions.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/CustomFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const CustomClientFields = ({
  fields,
  refreshList
}) => {
  const blankFieldObject = {
    fieldName: "",
    fieldType: "text",
    fieldOptions: [],
    fieldFormVisible: null
  };
  const user = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
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
          fieldType: action.payload.options[action.payload.options.selectedIndex].value
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
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
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
          options: event.target.options
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
          id: event.target.id
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
          id
        } = editedField;
        const res = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
          method: "PUT",
          url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].serverURL}/fields/${id}`,
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

      !editedField.id ? fieldIsCreated() : fieldIsUpdated();
    }

  };

  const reset = () => {
    setDisplayComponent(false);
    setEditedField({
      type: "clear"
    });
    refreshList();
  };

  const deleteField = async id => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "DELETE",
      params: {
        key: user.user.userkey
      },
      url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].serverURL}/fields/${id}`,
      responseType: "json"
    });
    const resData = await res.data;
    resData.msg === _library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].msgSuccess ? refreshList() : null;
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h4",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_8__["default"].en.customClientFields), __jsx(_CustomFieldsList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    deleteField: deleteField,
    fields: fields,
    setupEditedField: fieldMethods.setupEditedField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }), __jsx(_AddOrEditField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    editedField: editedField,
    displayComponent: displayComponent,
    fieldMethods: fieldMethods,
    handleOption: __jsx(_SelectFieldOptions__WEBPACK_IMPORTED_MODULE_7__["default"], {
      options: editedField.fieldOptions,
      fieldMethods: fieldMethods,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomClientFields);

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
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/CustomFieldsList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const CustomFields = ({
  fields,
  setupEditedField,
  deleteField
}) => {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
    card: {
      textAlign: "center",
      height: "100%",
      minWidth: "300px"
    },
    list: {
      listStyleType: "disc"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  });
  const classes = useStyles({});
  const separatedCustomFields = fields.filter(({
    fieldPermanent
  }) => !fieldPermanent).map(({
    fieldName,
    _id,
    fieldType,
    fieldOptions
  }) => {
    const options = fieldOptions.map(e => {
      return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
        key: e.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: undefined
      }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
        primary: e.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: undefined
      }));
    });
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
      item: true,
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variant: "h5",
      component: "h3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, fieldName), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.pos,
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }, "(", fieldType.toLowerCase(), ")"), fieldType === "select" && fieldOptions.length > 0 ? __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.list,
      dense: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, options) : null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
      variant: "contained",
      color: "primary",
      onClick: () => setupEditedField({
        fieldName,
        fieldType,
        fieldPermanent: false,
        fieldOptions,
        id: _id
      }),
      startIcon: __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: undefined
      }),
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.edit), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
      variant: "contained",
      onClick: () => deleteField(_id),
      startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: undefined
      }),
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: undefined
    }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.delete))));
  });
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, separatedCustomFields);
};

/* harmony default export */ __webpack_exports__["default"] = (CustomFields);

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
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/SelectFieldOptions.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SelectFieldOptions = ({
  options,
  fieldMethods
}) => {
  const items = options.map(e => __jsx("div", {
    key: e.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    onChange: () => fieldMethods.onOptionChange(e.id, event),
    value: e.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("button", {
    id: e.id,
    onClick: fieldMethods.onOptionDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "X")));
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, items, __jsx("button", {
    onClick: fieldMethods.handleOptionSpawn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.add));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectFieldOptions);

/***/ }),

/***/ "./components/settings/webform/WebForm.tsx":
/*!*************************************************!*\
  !*** ./components/settings/webform/WebForm.tsx ***!
  \*************************************************/
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
/* harmony import */ var _WebFormSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebFormSelect */ "./components/settings/webform/WebFormSelect.tsx");
/* harmony import */ var _WebFormList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebFormList */ "./components/settings/webform/WebFormList.tsx");
/* harmony import */ var _WebFormVisibleOrNot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebFormVisibleOrNot */ "./components/settings/webform/WebFormVisibleOrNot.tsx");
/* harmony import */ var _WebFormFieldOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WebFormFieldOptions */ "./components/settings/webform/WebFormFieldOptions.tsx");
/* harmony import */ var _WebFormSubSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebFormSubSelect */ "./components/settings/webform/WebFormSubSelect.tsx");
/* harmony import */ var _WebFormButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WebFormButtons */ "./components/settings/webform/WebFormButtons.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const WebForm = ({
  fields
}) => {
  const initCounterValue = fields.map(e => e.order).sort((a, b) => b > a ? 1 : -1)[0];
  const user = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    0: counter,
    1: setCounter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initCounterValue);
  const {
    0: webFields,
    1: setWebFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((state, action) => {
    switch (action.type) {
      case "add":
        return state.map(field => field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
          fieldInForm: true,
          order: counter
        }) : field);

      case "addVisibleSelect":
        return state.map(field => field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
          fieldInForm: true,
          fieldFormVisible: true,
          pause: false,
          order: counter
        }) : field);

      case "addNotVisibleValue":
        return state.map(field => field.pause ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
          fieldFormVisible: false
        }) : field);

      case "addHiddenSelect":
        return state.map(field => field.pause ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
          fieldInForm: true,
          pause: false,
          order: counter,
          fieldOptions: field.fieldOptions.map(option => option.value === action.payload.optionValue ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, option, {
            preselected: true
          }) : option)
        }) : field);

      case "pauseSelect":
        return state.map(field => field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
          pause: true
        }) : field);

      case "remove":
        return state.map(field => field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
          fieldInForm: false,
          fieldFormVisible: null,
          fieldOptions: field.fieldOptions.map(option => option.preselected ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, option, {
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
        fieldName: e.target.id
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
        fieldName: e.target.id
      }
    });
  };

  const showOptionsOnClick = () => {
    setWebFields({
      type: "addNotVisibleValue"
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //save fields (form) on change
    const saveFormAuto = async () => {
      await axios__WEBPACK_IMPORTED_MODULE_2___default()({
        method: "PUT",
        url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].serverURL}/fields`,
        params: {
          key: user.user.userkey
        },
        data: webFields,
        responseType: "json"
      });
    };

    saveFormAuto();
  }, [webFields]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, "Web form"), __jsx(_WebFormSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    webFields: webFields,
    addNotSelect: addNotSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }), __jsx(_WebFormVisibleOrNot__WEBPACK_IMPORTED_MODULE_6__["default"], {
    webFields: webFields,
    addVisibleSelect: addVisibleSelect,
    showOptionsOnClick: showOptionsOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }), __jsx(_WebFormSubSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
    webFields: webFields,
    addHiddenSelect: addHiddenSelect,
    webFormOptions: __jsx(_WebFormFieldOptions__WEBPACK_IMPORTED_MODULE_7__["default"], {
      webFields: webFields,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }), __jsx(_WebFormList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    webFields: webFields,
    removeFromList: removeFromList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }), __jsx(_WebFormButtons__WEBPACK_IMPORTED_MODULE_9__["default"], {
    webFields: webFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }));
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
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormButtons.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const WebFormButtons = ({
  webFields
}) => {
  const user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const onDownload = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "GET",
      url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_3__["default"].serverURL}/webform/`,
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

  return __jsx("button", {
    onClick: onDownload,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_4__["default"].en.donwloadForm);
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormButtons);

/***/ }),

/***/ "./components/settings/webform/WebFormFieldOptions.tsx":
/*!*************************************************************!*\
  !*** ./components/settings/webform/WebFormFieldOptions.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormFieldOptions.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const WebFormFieldOptions = ({
  webFields
}) => {
  const options = webFields.map(field => field.pause ? field.fieldOptions.map(option => __jsx("option", {
    key: option.id,
    value: option.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, option.value)) : null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("option", {
    key: _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption), options);
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormFieldOptions);

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
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


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
    const strFormVisible = fieldFormVisible ? ` - ${_library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.visibleInForm}` : null;
    const strFormNotVisible1 = !fieldFormVisible ? fieldType === "select" ? ` - ${_library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.hiddenInForm}` : null : null;
    const strFormNotVisible2 = !fieldFormVisible ? fieldType === "select" ? fieldOptions.map(e => e.preselected ? e.value : null).join("") : null : null;
    const strFormNotVisible3 = !fieldFormVisible ? fieldType === "select" ? _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.asPreselected : null : null;
    _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.asPreselected;
    fieldInForm ? list[order] = __jsx("li", {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, fieldName), strFormVisible, strFormNotVisible1, " ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, strFormNotVisible2), " ", strFormNotVisible3, __jsx("button", {
      id: fieldName,
      onClick: removeFromList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, "X")) : [];
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.selectedFields, ":"), webFields.some(e => e.fieldInForm) ? __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, list) : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "No fields selected"));
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormList);

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
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const WebFormSelect = ({
  webFields,
  addNotSelect
}) => {
  const selectOptions = webFields.map(field => {
    return !field.fieldInForm && field.fieldName !== _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].permanentFields.dateAdded && field.fieldName !== _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].permanentFields.lastModified ? __jsx("option", {
      key: field._id,
      value: field.fieldName,
      id: field.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, field.fieldName) : null;
  });
  return selectOptions.some(field => field !== null) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.selectField, ":"), __jsx("select", {
    name: "fields",
    onChange: addNotSelect,
    disabled: webFields.some(e => e.pause),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("option", {
    key: _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, _library_globalVariables__WEBPACK_IMPORTED_MODULE_1__["default"].blankOption), selectOptions)) : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.allFieldsSelected);
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
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSubSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const WebFormSubSelect = ({
  webFormOptions,
  webFields,
  addHiddenSelect
}) => {
  return webFields.some(e => e.fieldFormVisible === false && e.pause) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.pleaseSelectOption), __jsx("select", {
    onChange: addHiddenSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, webFormOptions)) : null;
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
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormVisibleOrNot.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


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
  }) => fieldFormVisible === null ? pause ? __jsx("div", {
    key: _id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.shouldBe, " ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, fieldName), " ", _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.visibleInForm, "?"), __jsx("button", {
    id: fieldName,
    onClick: addVisibleSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.yes), __jsx("button", {
    onClick: showOptionsOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.no)) : null : null);
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
    addNewField: "Add new field",
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
    lastWeek: "last week",
    total: "total",
    logout: "logout",
    username: "username",
    repeatPassword: "repeat password",
    login: "login",
    register: "register",
    success: "success",
    passwordsDoesNotMatch: "Passwords do not match",
    userAlreadyExists: "User already exists"
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getString", () => {
      return this.text;
    });

    this.text = _text;
  }

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _components_settings_DefaultFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/settings/DefaultFields */ "./components/settings/DefaultFields.tsx");
/* harmony import */ var _components_settings_customFields_CustomFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/settings/customFields/CustomFields */ "./components/settings/customFields/CustomFields.tsx");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/LoadingSpinner */ "./components/LoadingSpinner.tsx");
/* harmony import */ var _components_settings_EmailSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/settings/EmailSettings */ "./components/settings/EmailSettings.tsx");
/* harmony import */ var _components_settings_webform_WebForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/settings/webform/WebForm */ "./components/settings/webform/WebForm.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/settings/[key].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const Settings = ({
  dataFields,
  username,
  pass
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: fields,
    1: setField
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dataFields);
  const {
    0: initialized,
    1: setInitialized
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_4__["default"]);

  const refreshList = async () => {
    //get data from DB after change
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default()({
      method: "get",
      url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].serverURL}/fields/`,
      responseType: "json"
    });
    const data = await res.data;
    setField(data);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //title from url
    const title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_11__["default"](router.pathname).removeSlash().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].titleSubText).getString();
    document.title = title; //componendDidMount effect

    setInitialized(true);
    user.checkUser();
  }, [router]);
  const h1 = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_11__["default"](router.pathname).removeSlash().firstCharUpperCase().getString();
  return !user.user.signedIn && !initialized ? __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "h3",
    component: "h1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, h1), __jsx(_components_settings_DefaultFields__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fields: fields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx(_components_settings_customFields_CustomFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fields: fields,
    refreshList: refreshList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx(_components_settings_EmailSettings__WEBPACK_IMPORTED_MODULE_8__["default"], {
    username: username,
    pass: pass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx(_components_settings_webform_WebForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fields: fields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }));
};

Settings.getInitialProps = async context => {
  const resFields = await axios__WEBPACK_IMPORTED_MODULE_3___default()({
    method: "GET",
    params: {
      key: context.query.key
    },
    url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].serverURL}/fields`,
    responseType: "json"
  });
  const dataFields = await resFields.data;
  const resEmailSettings = await axios__WEBPACK_IMPORTED_MODULE_3___default()({
    method: "GET",
    params: {
      key: context.query.key
    },
    url: `${_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].serverURL}/emails/email-settings`,
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

/***/ 6:
/*!****************************************!*\
  !*** multi ./pages/settings/[key].tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidzoufaly/code/dp/crm-app-fe/pages/settings/[key].tsx */"./pages/settings/[key].tsx");


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

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

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

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

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