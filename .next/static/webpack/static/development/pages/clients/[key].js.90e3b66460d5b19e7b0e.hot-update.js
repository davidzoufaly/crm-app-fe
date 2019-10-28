webpackHotUpdate("static/development/pages/clients/[key].js",{

/***/ "./pages/clients/[key].tsx":
/*!*********************************!*\
  !*** ./pages/clients/[key].tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_clients_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/clients/TableBody */ "./components/clients/TableBody.tsx");
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _components_clients_TableHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/clients/TableHead */ "./components/clients/TableHead.tsx");
/* harmony import */ var _components_clients_CreateClient__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/clients/CreateClient */ "./components/clients/CreateClient.tsx");
/* harmony import */ var _components_EmailForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/EmailForm */ "./components/EmailForm.tsx");
/* harmony import */ var _components_clients_Buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/clients/Buttons */ "./components/clients/Buttons.tsx");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/LoadingSpinner */ "./components/LoadingSpinner.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");




var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/clients/[key].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

















var Clients = function Clients(_ref) {
  var fieldData = _ref.fieldData,
      clientData = _ref.clientData,
      clientCount = _ref.clientCount;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var user = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_9__["default"]);

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(function (state, action) {
    switch (action.type) {
      case "handleCheckedClients":
        return state.map(function (client) {
          return client._id === action.payload.id ? client.isChecked === false || client.isChecked === undefined ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, client, {
            isChecked: true
          }) : Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, client, {
            isChecked: false
          }) : client;
        });

      case "addClient":
        return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state), [action.payload.newClient]);

      case "deleteCheckedClients":
        return state.filter(function (client) {
          return !client.isChecked;
        });

      case "unCheckAll":
        return state.map(function (client) {
          return client = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, client, {
            isChecked: false
          });
        });

      default:
        return state;
    }
  }, clientData),
      clients = _useReducer[0],
      setClients = _useReducer[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    sortBy: "First name",
    reverse: true
  }),
      sort = _useState[0],
      setSort = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      initialized = _useState2[0],
      setInitialized = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isClientAdded = _useState3[0],
      setIsClientAdded = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isEmailCreated = _useState4[0],
      setIsEmailCreated = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // set page title
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_10__["default"](router.pathname).removeSlash().removeSlashAndTextAfter().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].titleSubText).getString();
    document.title = title;
    setInitialized(true);
    user.checkUser();
  }, [router]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // reset email state, when user uncheck all recievers / clients
    filterCheckedClients().length === 0 && isEmailCreated ? setIsEmailCreated(!isEmailCreated) : null;
  }, [clients]); // create H1

  var h1 = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_10__["default"](router.pathname).removeSlash().removeSlashAndTextAfter().firstCharUpperCase().getString();

  var sortBy = function sortBy(fieldName) {
    setSort(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, sort, {
      sortBy: fieldName,
      reverse: fieldName === sort.sortBy // if clicked again on same field -> reverse sort based on current reverse state
      ? !sort.reverse ? true : false // if new field being clicked -> set reverse true to immediately sort column ASC 
      : true
    }));
  };

  var handleCheckbox = function handleCheckbox(id) {
    setClients({
      type: "handleCheckedClients",
      payload: {
        id: id
      }
    });
  };

  var addNewClientToState = function addNewClientToState(newClient) {
    setClients({
      type: "addClient",
      payload: {
        newClient: newClient
      }
    });
  };

  var filterCheckedClients = function filterCheckedClients() {
    return clients.filter(function (client) {
      return client.isChecked;
    });
  };

  var unCheckAll = function unCheckAll() {
    setClients({
      type: "unCheckAll"
    });
  };

  var toggleIsEmailCreated = function toggleIsEmailCreated() {
    setIsEmailCreated(isEmailCreated ? false : true);
  };

  var toggleIsClientAdded = function toggleIsClientAdded() {
    isClientAdded ? setIsClientAdded(false) : setIsClientAdded(true);
  };

  var deleteMultipleClients =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setClients({
                type: "deleteCheckedClients"
              });
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                method: "DELETE",
                data: filterCheckedClients().map(function (e) {
                  return e._id;
                }),
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].serverURL, "/clients/"),
                params: {
                  key: user.user.userkey
                },
                responseType: "json"
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function deleteMultipleClients() {
      return _ref2.apply(this, arguments);
    };
  }();

  return !user.user.signedIn && !initialized ? __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Typography"], {
    component: "h1",
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, h1), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Typography"], {
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_19__["default"].en.saved, " ", clients.length), __jsx(_components_EmailForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
    to: filterCheckedClients().map(function (e) {
      return e["Email"];
    }),
    isEmailCreated: isEmailCreated,
    toggleIsEmailCreated: toggleIsEmailCreated,
    unCheckAll: unCheckAll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), __jsx(_components_clients_CreateClient__WEBPACK_IMPORTED_MODULE_13__["default"], {
    fields: fieldData,
    isClientAdded: isClientAdded,
    toggleIsClientAdded: toggleIsClientAdded,
    addNewClientToState: addNewClientToState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx(_components_clients_Buttons__WEBPACK_IMPORTED_MODULE_15__["default"], {
    clientsAreNotChecked: !clients.some(function (client) {
      return client.isChecked;
    }),
    deleteMultipleClients: deleteMultipleClients,
    toggleIsClientAdded: toggleIsClientAdded,
    isClientAdded: isClientAdded,
    toggleIsEmailCreated: toggleIsEmailCreated,
    isEmailCreated: isEmailCreated,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Table"], {
    "aria-label": "clients table",
    size: "small",
    style: {
      backgroundColor: "white",
      border: "1px solid #e0e0e0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(_components_clients_TableHead__WEBPACK_IMPORTED_MODULE_12__["default"], {
    fields: fieldData,
    sortBy: sortBy,
    sort: sort,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx(_components_clients_TableBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
    clients: clients,
    fields: fieldData,
    sort: sort,
    handleCheckbox: handleCheckbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }))));
};

Clients.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {
    var clientRes, clientData, fieldRes, fieldData, resClientCount, clientCount;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_6___default()({
              method: "GET",
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].serverURL, "/clients/"),
              params: {
                key: context.query.key
              },
              responseType: "json"
            });

          case 2:
            clientRes = _context2.sent;
            _context2.next = 5;
            return clientRes.data;

          case 5:
            clientData = _context2.sent;
            _context2.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_6___default()({
              method: "GET",
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].serverURL, "/fields"),
              params: {
                key: context.query.key
              },
              responseType: "json"
            });

          case 8:
            fieldRes = _context2.sent;
            _context2.next = 11;
            return fieldRes.data;

          case 11:
            fieldData = _context2.sent;
            _context2.next = 14;
            return axios__WEBPACK_IMPORTED_MODULE_6___default()("".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].serverURL, "/clients/count?key=").concat(context.query.key));

          case 14:
            resClientCount = _context2.sent;
            _context2.next = 17;
            return resClientCount.data;

          case 17:
            clientCount = _context2.sent;
            return _context2.abrupt("return", {
              clientData: clientData,
              fieldData: fieldData,
              clientCount: clientCount
            });

          case 19:
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

/* harmony default export */ __webpack_exports__["default"] = (Clients);

/***/ })

})
//# sourceMappingURL=[key].js.90e3b66460d5b19e7b0e.hot-update.js.map