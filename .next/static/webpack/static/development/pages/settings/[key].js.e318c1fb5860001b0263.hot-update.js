webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./pages/settings/[key].tsx":
/*!**********************************!*\
  !*** ./pages/settings/[key].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _components_settings_DefaultFieldsSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/settings/DefaultFieldsSection */ "./components/settings/DefaultFieldsSection.tsx");
/* harmony import */ var _components_settings_customFields_CustomFieldsSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/settings/customFields/CustomFieldsSection */ "./components/settings/customFields/CustomFieldsSection.tsx");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/LoadingSpinner */ "./components/LoadingSpinner.tsx");
/* harmony import */ var _components_settings_emailSettings_EmailSettingsSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/settings/emailSettings/EmailSettingsSection */ "./components/settings/emailSettings/EmailSettingsSection.tsx");
/* harmony import */ var _components_settings_webform_WebFormSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/settings/webform/WebFormSection */ "./components/settings/webform/WebFormSection.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");






var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/settings/[key].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;














var Settings = function Settings(_ref) {
  var dataFields = _ref.dataFields,
      username = _ref.username,
      pass = _ref.pass;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      initialized = _useState[0],
      setInitialized = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      sections = _useState2[0],
      setSection = _useState2[1];

  var user = Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_10__["default"]);

  var _useReducer = useReducer(function (state, action) {
    switch (action) {
      default:
        return state;
    }
  }, dataFields),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useReducer, 2),
      fields = _useReducer2[0],
      setField = _useReducer2[1];

  var toggleSection = function toggleSection(e) {
    setSection(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, sections, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, e.target.name, e.target.checked)));
  };

  var addField = function addField(obj) {
    setField(fields.some(function (field) {
      return field._id === obj._id;
    }) ? fields.map(function (field) {
      return field._id === obj._id ? obj : field;
    }) : [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(fields), [obj]));
  };

  var removeField = function removeField(id) {
    setField(fields.filter(function (field) {
      return field._id !== id;
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    //title from url
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_17__["default"](router.pathname).removeSlash().removeSlashAndTextAfter().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_16__["default"].titleSubText).getString();
    document.title = title; //componendDidMount effect

    setInitialized(true);
    user.checkUser();
  }, [router]);
  var h1 = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_17__["default"](router.pathname).removeSlash().removeSlashAndTextAfter().firstCharUpperCase().getString();
  return !user.user.signedIn && !initialized ? __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "h3",
    component: "h1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, h1), __jsx(_components_settings_DefaultFieldsSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fields: fields,
    toggleSection: toggleSection,
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_components_settings_customFields_CustomFieldsSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    fields: fields,
    removeField: removeField,
    addField: addField,
    sections: sections,
    toggleSection: toggleSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(_components_settings_emailSettings_EmailSettingsSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
    username: username,
    pass: pass,
    toggleSection: toggleSection,
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(_components_settings_webform_WebFormSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
    fields: fields,
    toggleSection: toggleSection,
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }));
};

Settings.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var resFields, dataFields, resEmailSettings, dataEmailSettings, _ref3, username, pass;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_9___default()({
              method: "GET",
              params: {
                key: context.query.key
              },
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_16__["default"].serverURL, "/fields"),
              responseType: "json"
            });

          case 2:
            resFields = _context.sent;
            _context.next = 5;
            return resFields.data;

          case 5:
            dataFields = _context.sent;
            _context.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_9___default()({
              method: "GET",
              params: {
                key: context.query.key
              },
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_16__["default"].serverURL, "/emails/email-settings"),
              responseType: "json"
            });

          case 8:
            resEmailSettings = _context.sent;
            _context.next = 11;
            return resEmailSettings.data;

          case 11:
            dataEmailSettings = _context.sent;
            _context.next = 14;
            return dataEmailSettings;

          case 14:
            _ref3 = _context.sent;
            username = _ref3.username;
            pass = _ref3.pass;
            return _context.abrupt("return", {
              dataFields: dataFields,
              username: username,
              pass: pass
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ })

})
//# sourceMappingURL=[key].js.e318c1fb5860001b0263.hot-update.js.map