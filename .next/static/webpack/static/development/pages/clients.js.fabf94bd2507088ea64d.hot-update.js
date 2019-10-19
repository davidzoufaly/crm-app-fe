webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/clients/CreateClient.tsx":
/*!*********************************************!*\
  !*** ./components/clients/CreateClient.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _ClientForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ClientForm */ "./components/clients/ClientForm.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! generate-unique-id */ "./node_modules/generate-unique-id/index.js");
/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(generate_unique_id__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);






var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/CreateClient.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;









var CreateClient = function CreateClient(_ref) {
  var fields = _ref.fields,
      isClientAdded = _ref.isClientAdded,
      toggleIsClientAdded = _ref.toggleIsClientAdded,
      addNewClientToState = _ref.addNewClientToState,
      isEmailCreated = _ref.isEmailCreated;
  var initialNewClintState = fields.map(function (e) {
    return e.fieldName;
  }).reduce(function (o, key) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5___default()(o, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, key, ""));
  }, {});

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_6__["useReducer"])(function (state, action) {
    switch (action.type) {
      case "onTextChange":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, action.payload.fieldName, action.payload.fieldType === "number" ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.value) : action.payload.value));

      case "addId":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
          _id: generate_unique_id__WEBPACK_IMPORTED_MODULE_12___default()({
            length: 24,
            useNumbers: true,
            useLetters: false,
            includeSymbols: ["a", "b", "c", "d", "e", "f"]
          })
        });

      case "addDate":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
          dateAdded: moment__WEBPACK_IMPORTED_MODULE_13___default()().format("llll")
        });

      case "clear":
        return {
          initialNewClintState: initialNewClintState
        };

      default:
        return state;
    }
  }, initialNewClintState),
      newClient = _useReducer[0],
      setNewClient = _useReducer[1];

  var onChange = function onChange(fieldType, event) {
    setNewClient({
      type: "onTextChange",
      payload: {
        fieldName: event.target.name,
        value: event.target.value,
        fieldType: fieldType
      }
    });
    setNewClient({
      type: "addDate"
    });
    setNewClient({
      type: "addId"
    });
  };

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var clientRes, clientData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_10___default()({
                method: "post",
                data: newClient,
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].serverURL, "/clients"),
                responseType: "json"
              });

            case 3:
              clientRes = _context.sent;
              _context.next = 6;
              return clientRes.data;

            case 6:
              clientData = _context.sent;

              if (clientData.msg === "Success") {
                addNewClientToState(newClient);
                setNewClient({
                  type: "clear"
                });
                toggleIsClientAdded();
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onCancel = function onCancel() {
    setNewClient({
      type: "clear"
    });
    toggleIsClientAdded();
  };

  return isClientAdded && !isEmailCreated ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h4",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Add new client"), __jsx("form", {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_ClientForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fields: fields,
    onChange: onChange,
    newClient: newClient,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    color: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Save"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: onCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Cancel"))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (CreateClient);

/***/ }),

/***/ "./pages/clients.tsx":
/*!***************************!*\
  !*** ./pages/clients.tsx ***!
  \***************************/
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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_clients_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/clients/TableBody */ "./components/clients/TableBody.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _components_clients_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/clients/TableHead */ "./components/clients/TableHead.tsx");
/* harmony import */ var _components_clients_CreateClient__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/clients/CreateClient */ "./components/clients/CreateClient.tsx");
/* harmony import */ var _components_clients_Buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/clients/Buttons */ "./components/clients/Buttons.tsx");
/* harmony import */ var _components_loadingSpinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/loadingSpinner */ "./components/loadingSpinner.tsx");
/* harmony import */ var _components_EmailForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/EmailForm */ "./components/EmailForm.tsx");




var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/clients.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;











 //TODO: Po odeslání skrýt komponentu

var Clients = function Clients(_ref) {
  var fieldData = _ref.fieldData,
      clientData = _ref.clientData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

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
      setClients = _useReducer[1]; //TODO: SPOJIT DO JEDNOHO STATU


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      reverse = _useState[0],
      setReverseOrder = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("firstName"),
      sort = _useState2[0],
      setSortBy = _useState2[1]; //


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      initialized = _useState3[0],
      setInitialized = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isClientAdded = _useState4[0],
      setIsClientAdded = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isEmailCreated = _useState5[0],
      setIsEmailCreated = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // set title
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__["default"](router.pathname).removeSlash().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].titleSubText).getString();
    document.title = title;
    setInitialized(true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // reset email state, when user uncheck all recievers / clients
    filterCheckedClients().length === 0 && isEmailCreated ? setIsEmailCreated(!isEmailCreated) : null;
  }, [clients]); // create H1

  var h1 = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__["default"](router.pathname).removeSlash().firstCharUpperCase().getString();

  var sortBy = function sortBy(fieldName) {
    setSortBy(fieldName);
    !reverse ? setReverseOrder(true) : setReverseOrder(false);
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
                method: "delete",
                data: filterCheckedClients().map(function (e) {
                  return e._id;
                }),
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].serverURL, "/clients/"),
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

  return !initialized ? __jsx(_components_loadingSpinner__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, h1), __jsx(_components_EmailForm__WEBPACK_IMPORTED_MODULE_15__["default"], {
    to: filterCheckedClients().map(function (e) {
      return e.email;
    }),
    isEmailCreated: isEmailCreated,
    toggleIsEmailCreated: toggleIsEmailCreated,
    unCheckAll: unCheckAll,
    isClientAdded: isClientAdded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx(_components_clients_CreateClient__WEBPACK_IMPORTED_MODULE_12__["default"], {
    fields: fieldData,
    isClientAdded: isClientAdded,
    isEmailCreated: isEmailCreated,
    toggleIsClientAdded: toggleIsClientAdded,
    addNewClientToState: addNewClientToState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), __jsx(_components_clients_Buttons__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: !clients.some(function (client) {
      return client.isChecked;
    }),
    deleteMultipleClients: deleteMultipleClients,
    toggleIsClientAdded: toggleIsClientAdded,
    isClientAdded: isClientAdded,
    toggleIsEmailCreated: toggleIsEmailCreated,
    isEmailCreated: isEmailCreated,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), __jsx("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_components_clients_TableHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fields: fieldData,
    sortBy: sortBy,
    reverse: reverse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_components_clients_TableBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
    clients: clients,
    fields: fieldData,
    sort: sort,
    reverse: reverse,
    handleCheckbox: handleCheckbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }))));
};

Clients.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var clientRes, clientData, fieldRes, fieldData;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_6___default()({
            method: "get",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].serverURL, "/clients"),
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
            method: "get",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].serverURL, "/fields"),
            responseType: "json"
          });

        case 8:
          fieldRes = _context2.sent;
          _context2.next = 11;
          return fieldRes.data;

        case 11:
          fieldData = _context2.sent;
          return _context2.abrupt("return", {
            clientData: clientData,
            fieldData: fieldData
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}));
/* harmony default export */ __webpack_exports__["default"] = (Clients);

/***/ })

})
//# sourceMappingURL=clients.js.fabf94bd2507088ea64d.hot-update.js.map