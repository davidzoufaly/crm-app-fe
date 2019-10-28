webpackHotUpdate("static/development/pages/client/[id].js",{

/***/ "./pages/client/[id].tsx":
/*!*******************************!*\
  !*** ./pages/client/[id].tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_singleClient_SingleClientData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/singleClient/SingleClientData */ "./components/singleClient/SingleClientData.tsx");
/* harmony import */ var _components_singleClient_ButtonsSingle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/singleClient/ButtonsSingle */ "./components/singleClient/ButtonsSingle.tsx");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/LoadingSpinner */ "./components/LoadingSpinner.tsx");
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _components_EmailForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/EmailForm */ "./components/EmailForm.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");





var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/client/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["createStyles"])({
    boxWrapper: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({
      width: "50%"
    }, theme.breakpoints.down("sm"), {
      width: "100%"
    })
  });
});

var Client = function Client(_ref) {
  var clientData = _ref.clientData,
      fieldsData = _ref.fieldsData;
  var classes = useStyles({});

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(clientData),
      client = _useState[0],
      setClient = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("".concat(clientData["First name"], " ").concat(clientData["Last name"])),
      name = _useState2[0],
      setName = _useState2[1];

  var user = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_13__["default"]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      initialized = _useState3[0],
      setInitialized = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isEmailCreated = _useState4[0],
      setIsEmailCreated = _useState4[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    document.title = "".concat(name, " ").concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_16__["default"].titleSubText);
    setInitialized(true);
  }, [name]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    user.checkUser();
  }, []);

  var onSave =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setName("".concat(client["First name"], " ").concat(client["Last name"]));
              saveToDb();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSave(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var saveToDb =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default()({
                method: "put",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_16__["default"].serverURL, "/clients/").concat(router.query.key, "/").concat(router.query.id),
                data: client,
                responseType: "json"
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function saveToDb() {
      return _ref3.apply(this, arguments);
    };
  }();

  var onDelete =
  /*#__PURE__*/
  function () {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(e) {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default()({
                method: "delete",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_16__["default"].serverURL, "/clients/").concat(router.query.key, "/").concat(router.query.id),
                responseType: "json"
              });

            case 3:
              res = _context3.sent;
              _context3.next = 6;
              return res.data;

            case 6:
              data = _context3.sent;
              _context3.next = 9;
              return data.msg;

            case 9:
              _context3.t0 = _context3.sent;

              if (!(_context3.t0 === "Success")) {
                _context3.next = 14;
                break;
              }

              router.push("/clients/".concat(router.query.key));
              _context3.next = 15;
              break;

            case 14:
              alert(_library_languages__WEBPACK_IMPORTED_MODULE_15__["default"].en.somethingWentWrong);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onDelete(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var onInputChange = function onInputChange(e) {
    var _objectSpread2;

    setClient(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, client, (_objectSpread2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(_objectSpread2, "Last modified", moment__WEBPACK_IMPORTED_MODULE_7___default()().format("llll")), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(_objectSpread2, e.target.name, e.target.type === "number" ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value) : e.target.value), _objectSpread2)));
  };

  var toggleIsEmailCreated = function toggleIsEmailCreated() {
    setIsEmailCreated(isEmailCreated ? false : true);
  };

  return !user.user.signedIn && !initialized ? __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Typography"], {
    component: "h1",
    variant: "h3",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Box"], {
    mb: "1rem",
    maxWidth: "100",
    className: classes.boxWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_components_singleClient_SingleClientData__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fieldsData: fieldsData,
    client: client,
    onInputChange: onInputChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }))), __jsx(_components_EmailForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
    to: [client["Email"]],
    isEmailCreated: isEmailCreated,
    toggleIsEmailCreated: toggleIsEmailCreated,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx(_components_singleClient_ButtonsSingle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onSave: onSave,
    toggleIsEmailCreated: toggleIsEmailCreated,
    onDelete: onDelete,
    isEmailCreated: isEmailCreated,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }));
};

Client.getInitialProps =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(context) {
    var resClient, clientData, resFields, fieldsData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_8___default()({
              method: "GET",
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_16__["default"].serverURL, "/clients/").concat(context.query.key, "/").concat(context.query.id),
              responseType: "json"
            });

          case 2:
            resClient = _context4.sent;
            _context4.next = 5;
            return resClient.data;

          case 5:
            clientData = _context4.sent;
            _context4.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_8___default()({
              method: "GET",
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_16__["default"].serverURL, "/fields"),
              params: {
                key: context.query.key
              },
              responseType: "json"
            });

          case 8:
            resFields = _context4.sent;
            _context4.next = 11;
            return resFields.data;

          case 11:
            fieldsData = _context4.sent;
            return _context4.abrupt("return", {
              clientData: clientData,
              fieldsData: fieldsData
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x3) {
    return _ref5.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Client);

/***/ })

})
//# sourceMappingURL=[id].js.7ea4eee15816c22dc69a.hot-update.js.map