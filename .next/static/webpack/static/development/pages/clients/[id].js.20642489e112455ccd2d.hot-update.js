webpackHotUpdate("static/development/pages/clients/[id].js",{

/***/ "./pages/clients/[id].tsx":
/*!********************************!*\
  !*** ./pages/clients/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _components_SingleClientData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/SingleClientData */ "./components/SingleClientData.tsx");
/* harmony import */ var _components_singleClient_ButtonsSingle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/singleClient/ButtonsSingle */ "./components/singleClient/ButtonsSingle.tsx");





var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/clients/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






 //TODO: SKRÝVÁNÍ POLÍ CO NEJSOU V DB

var Client = function Client(_ref) {
  var clientData = _ref.clientData,
      fieldsData = _ref.fieldsData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(clientData),
      client = _useState[0],
      setClient = _useState[1];

  var firstName = clientData.firstName,
      lastName = clientData.lastName;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      initialized = _useState2[0],
      setInitialized = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    document.title = "".concat(firstName, " ").concat(lastName, " ").concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].titleSubText); // console.log(clientData);
    // console.log(fieldsData)

    setInitialized(true);
  });

  var onSave =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var clientSaveRes, clientSaveData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default()({
                method: "post",
                data: client,
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].serverURL, "/client/").concat(router.query),
                responseType: "json"
              });

            case 2:
              clientSaveRes = _context.sent;
              _context.next = 5;
              return clientSaveRes.data;

            case 5:
              clientSaveData = _context.sent;
              clientSaveData.msg === "Success" ? router.push(router.pathname) : console.error("Something went wrong!");

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSave() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onInputChange = function onInputChange(e) {
    setClient(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, client, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.type === "number" ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(e.target.value) : e.target.value)));
  };

  return !initialized ? "Loading..." : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, firstName, " ", lastName), __jsx("form", {
    onSubmit: onSave,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_components_SingleClientData__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fieldsData: fieldsData,
    client: client,
    onInputChange: onInputChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))), __jsx(_components_singleClient_ButtonsSingle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }));
};

Client.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(context) {
    var id, resClient, clientData, resFields, fieldsData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = context.query.id;
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_7___default()({
              method: "get",
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].serverURL, "/clients/").concat(id),
              responseType: "json"
            });

          case 3:
            resClient = _context2.sent;
            _context2.next = 6;
            return resClient.data;

          case 6:
            clientData = _context2.sent;
            _context2.next = 9;
            return axios__WEBPACK_IMPORTED_MODULE_7___default()({
              method: "get",
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].serverURL, "/fields"),
              responseType: "json"
            });

          case 9:
            resFields = _context2.sent;
            _context2.next = 12;
            return resFields.data;

          case 12:
            fieldsData = _context2.sent;
            return _context2.abrupt("return", {
              clientData: clientData,
              fieldsData: fieldsData
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Client);

/***/ })

})
//# sourceMappingURL=[id].js.20642489e112455ccd2d.hot-update.js.map