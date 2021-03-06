webpackHotUpdate("static/development/pages/clients/[key].js",{

/***/ "./components/clients/Buttons.tsx":
/*!****************************************!*\
  !*** ./components/clients/Buttons.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/Buttons.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Buttons = function Buttons(_ref) {
  var clientsAreNotChecked = _ref.clientsAreNotChecked,
      toggleIsClientAdded = _ref.toggleIsClientAdded,
      deleteMultipleClients = _ref.deleteMultipleClients,
      isClientAdded = _ref.isClientAdded,
      isEmailCreated = _ref.isEmailCreated,
      toggleIsEmailCreated = _ref.toggleIsEmailCreated;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    my: "1rem",
    display: "flex",
    width: "320px",
    maxWidth: "1",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "primary",
    disabled: isClientAdded || isEmailCreated,
    onClick: toggleIsClientAdded,
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.add), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "primary",
    onClick: toggleIsEmailCreated,
    disabled: clientsAreNotChecked || isEmailCreated || isClientAdded,
    startIcon: __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en.email), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "secondary",
    disabled: clientsAreNotChecked,
    onClick: deleteMultipleClients,
    startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_5__["default"].en["delete"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

/***/ }),

/***/ "./components/clients/TableBody.tsx":
/*!******************************************!*\
  !*** ./components/clients/TableBody.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/TableBody.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var TableBody = function TableBody(_ref) {
  var clients = _ref.clients,
      sort = _ref.sort,
      fields = _ref.fields,
      handleCheckbox = _ref.handleCheckbox;
  var sortBy = sort.sortBy,
      reverse = sort.reverse;
  var user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_3__["default"]); // field we want to filter is type number -> return true and filter it correctly -> 23 > 4

  if (fields.some(function (e) {
    return e.fieldName === sortBy && e.fieldType === "number";
  })) {
    clients.sort(function (a, b) {
      return reverse ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy];
    });
  } else {
    clients.sort(function (a, b) {
      return reverse ? b[sortBy] > a[sortBy] ? -1 : 1 : b[sortBy] < a[sortBy] ? -1 : 1;
    });
  }

  var fieldNames = [];
  fields.forEach(function (e) {
    return fieldNames.push(e.fieldName);
  });
  var tableClients = clients.map(function (client) {
    var items = [];

    for (var i = 0; i < fieldNames.length; i++) {
      items[i] = null;
    }

    var tableItem = function tableItem() {
      for (var key in client) {
        //show only clients data with existing fields
        if (client[key] !== client._id && fieldNames.includes(key)) {
          items[fieldNames.indexOf(key)] = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
            key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, client[key]);
        }
      } // add put checkbox at first position


      items.unshift(__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
        padding: "checkbox",
        key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
        color: "primary",
        checked: !!client.isChecked || client.isChecked,
        onChange: function onChange() {
          return handleCheckbox(client._id);
        },
        inputProps: {
          'aria-label': 'primary checkbox'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }))); // add put profile link at last position

      items.push(__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
        key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/client/[id]/?key=".concat(user.user.userkey),
        as: "/client/".concat(client._id, "/?key=").concat(user.user.userkey),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        startIcon: __jsx(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_5___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, _library_languages__WEBPACK_IMPORTED_MODULE_4__["default"].en.go))));
      items = items.map(function (e) {
        return !!!e ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
          key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }) : e;
      });
      return items;
    };

    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableRow"], {
      key: client._id,
      hover: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, tableItem());
  });
  return tableClients;
};

/* harmony default export */ __webpack_exports__["default"] = (TableBody);

/***/ }),

/***/ "./components/clients/TableHead.tsx":
/*!******************************************!*\
  !*** ./components/clients/TableHead.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/TableHead.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var TableHeader = function TableHeader(_ref) {
  var fields = _ref.fields,
      sortBy = _ref.sortBy,
      sort = _ref.sort,
      handleCheckAll = _ref.handleCheckAll,
      allCheck = _ref.allCheck;
  var tableHeadings = fields.map(function (e) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
      key: uniqid__WEBPACK_IMPORTED_MODULE_1___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: function onClick() {
        return sortBy(e.fieldName);
      },
      startIcon: __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default.a, {
        color: sort.sortBy === e.fieldName ? "secondary" : "primary",
        style: sort.reverse && sort.sortBy === e.fieldName ? {
          transform: "rotate(180deg)"
        } : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, e.fieldName));
  });
  return __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
    key: uniqid__WEBPACK_IMPORTED_MODULE_1___default()(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
    color: "primary",
    checked: allCheck,
    onChange: function onChange() {
      return handleCheckAll();
    },
    inputProps: {
      "aria-label": "primary checkbox"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), tableHeadings, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.clientProfile))));
};

/* harmony default export */ __webpack_exports__["default"] = (TableHeader);

/***/ }),

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
      clientData = _ref.clientData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var user = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_9__["default"]);

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(function (state, action) {
    switch (action.type) {
      case "handleCheckedClients":
        return state.map(function (client) {
          return client._id === action.payload.id ? !!!client.isChecked ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, client, {
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
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, client, {
            isChecked: false
          });
        });

      case "toggleCheckAll":
        return state.map(function (client) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, client, {
            isChecked: !action.payload.checked
          });
        });

      default:
        return state;
    }
  }, clientData),
      clients = _useReducer[0],
      setClients = _useReducer[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    //default sort by "date added"
    sortBy: "Date added",
    reverse: true
  }),
      sort = _useState[0],
      setSort = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      allCheck = _useState2[0],
      setAllCheck = _useState2[1];

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
      reverse: fieldName === sort.sortBy ? // if clicked again on same field -> reverse sort based on current reverse state
      !sort.reverse ? true : false : // if new field being clicked -> set reverse true to immediately sort column ASC
      true
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

  var handleCheckAll = function handleCheckAll() {
    setAllCheck(function (state) {
      return !state;
    });
    setClients({
      type: "toggleCheckAll",
      payload: {
        checked: allCheck
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
      lineNumber: 148
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Typography"], {
    component: "h1",
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, h1), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Typography"], {
    variant: "h5",
    gutterBottom: true,
    style: {
      color: "#535658"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
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
      lineNumber: 158
    },
    __self: this
  }), __jsx(_components_clients_CreateClient__WEBPACK_IMPORTED_MODULE_13__["default"], {
    fields: fieldData,
    isClientAdded: isClientAdded,
    toggleIsClientAdded: toggleIsClientAdded,
    addNewClientToState: addNewClientToState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
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
      lineNumber: 170
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Box"], {
    width: "1",
    overflow: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Table"], {
    "aria-label": "clients table",
    size: "small",
    style: {
      backgroundColor: "white",
      border: "1px solid #e0e0e0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(_components_clients_TableHead__WEBPACK_IMPORTED_MODULE_12__["default"], {
    fields: fieldData,
    handleCheckAll: handleCheckAll,
    allCheck: allCheck,
    sortBy: sortBy,
    sort: sort,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx(_components_clients_TableBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
    clients: clients,
    fields: fieldData,
    sort: sort,
    handleCheckbox: handleCheckbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  })))));
};

Clients.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {
    var clientRes, clientData, fieldRes, fieldData;
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

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Clients);

/***/ })

})
//# sourceMappingURL=[key].js.1cd6003cb771daad3980.hot-update.js.map