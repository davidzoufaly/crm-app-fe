webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./components/settings/customFields/CustomFields.tsx":
/*!***********************************************************!*\
  !*** ./components/settings/customFields/CustomFields.tsx ***!
  \***********************************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! generate-unique-id */ "./node_modules/generate-unique-id/index.js");
/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(generate_unique_id__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _AddOrEditField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddOrEditField */ "./components/settings/customFields/AddOrEditField.tsx");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _CustomFieldsList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CustomFieldsList */ "./components/settings/customFields/CustomFieldsList.tsx");
/* harmony import */ var _SelectFieldOptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SelectFieldOptions */ "./components/settings/customFields/SelectFieldOptions.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/CustomFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;











var CustomClientFields = function CustomClientFields(_ref) {
  var fields = _ref.fields,
      refreshList = _ref.refreshList,
      addField = _ref.addField;
  var blankFieldObject = {
    fieldName: "",
    fieldType: "text",
    fieldOptions: [],
    fieldFormVisible: null,
    _id: generate_unique_id__WEBPACK_IMPORTED_MODULE_7___default()({
      length: 24,
      useNumbers: true,
      useLetters: false,
      includeSymbols: ["a", "b", "c", "d", "e", "f"]
    })
  };
  var user = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_9__["default"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      displayComponent = _useState[0],
      setDisplayComponent = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(function (state, action) {
    switch (action.type) {
      case "fieldNameChange":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
          fieldName: action.payload.value
        });

      case "selectValueChange":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
          fieldType: action.payload.value
        });

      case "newOptionSpawn":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
          fieldOptions: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.fieldOptions), [{
            id: uniqid__WEBPACK_IMPORTED_MODULE_6___default()(),
            value: ""
          }])
        });

      case "clear":
        return blankFieldObject;

      case "optionValueChange":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
          fieldOptions: state.fieldOptions.map(function (el) {
            return el.id === action.payload.id ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, el, {
              value: action.payload.value
            }) : el;
          })
        });

      case "optionDelete":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
          fieldOptions: state.fieldOptions.filter(function (e) {
            return action.payload.id !== e.id;
          })
        });

      case "setWithPaylod":
        return action.payload.obj;

      default:
        return state;
    }
  }, blankFieldObject),
      editedField = _useReducer[0],
      setEditedField = _useReducer[1];

  var fieldMethods = {
    onNameChange: function onNameChange(event) {
      setEditedField({
        type: "fieldNameChange",
        payload: {
          value: event.target.value
        }
      });
    },
    onSelectChange: function onSelectChange(event) {
      setEditedField({
        type: "selectValueChange",
        payload: {
          value: event.target.value
        }
      });
    },
    handleOptionSpawn: function handleOptionSpawn(e) {
      e.preventDefault();
      setEditedField({
        type: "newOptionSpawn"
      });
    },
    toggleDisplayComponent: function toggleDisplayComponent() {
      displayComponent ? setDisplayComponent(false) : setDisplayComponent(true);
      setEditedField({
        type: "clear"
      });
    },
    onOptionDelete: function onOptionDelete(event) {
      setEditedField({
        type: "optionDelete",
        payload: {
          id: event.currentTarget.id
        }
      });
    },
    onOptionChange: function onOptionChange(id, event) {
      setEditedField({
        type: "optionValueChange",
        payload: {
          value: event.target.value,
          id: id
        }
      });
    },
    setupEditedField: function setupEditedField(obj) {
      setEditedField({
        type: "setWithPaylod",
        payload: {
          obj: obj
        }
      });
      !displayComponent ? setDisplayComponent(true) : null;
    },
    saveEditedField: function saveEditedField(e) {
      e.preventDefault();

      var fieldIsUpdated =
      /*#__PURE__*/
      function () {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var fieldName, fieldType, fieldOptions, _id, res, data;

          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  fieldName = editedField.fieldName, fieldType = editedField.fieldType, fieldOptions = editedField.fieldOptions, _id = editedField._id;
                  _context.next = 3;
                  return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                    method: "PUT",
                    url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].serverURL, "/fields/").concat(_id),
                    params: {
                      key: user.user.userkey
                    },
                    data: {
                      fieldName: fieldName,
                      fieldType: fieldType,
                      fieldOptions: fieldOptions
                    },
                    responseType: "json"
                  });

                case 3:
                  res = _context.sent;
                  _context.next = 6;
                  return res.data;

                case 6:
                  data = _context.sent;

                  if (data.msg === _library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].msgSuccess) {
                    reset();
                  }

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function fieldIsUpdated() {
          return _ref2.apply(this, arguments);
        };
      }();

      var fieldIsCreated =
      /*#__PURE__*/
      function () {
        var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          var res, data;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                    method: "POST",
                    params: {
                      key: user.user.userkey
                    },
                    url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].serverURL, "/fields/"),
                    data: editedField,
                    responseType: "json"
                  });

                case 2:
                  res = _context2.sent;
                  _context2.next = 5;
                  return res.data;

                case 5:
                  data = _context2.sent;

                  if (data.msg === _library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].msgSuccess) {
                    reset();
                  }

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function fieldIsCreated() {
          return _ref3.apply(this, arguments);
        };
      }();

      !editedField.id ? fieldIsCreated() : fieldIsUpdated();
    }
  };

  var reset = function reset() {
    setDisplayComponent(false);
    console.log(editedField);
    addField(editedField);
    setEditedField({
      type: "clear"
    });
  };

  var deleteField =
  /*#__PURE__*/
  function () {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
      var res, resData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                method: "DELETE",
                params: {
                  key: user.user.userkey
                },
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].serverURL, "/fields/").concat(id),
                responseType: "json"
              });

            case 2:
              res = _context3.sent;
              _context3.next = 5;
              return res.data;

            case 5:
              resData = _context3.sent;
              resData.msg === _library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].msgSuccess ? refreshList() : null;

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteField(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    mt: "1rem",
    mb: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(_CustomFieldsList__WEBPACK_IMPORTED_MODULE_10__["default"], {
    deleteField: deleteField,
    fields: fields,
    setupEditedField: fieldMethods.setupEditedField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx(_AddOrEditField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    editedField: editedField,
    displayComponent: displayComponent,
    fieldMethods: fieldMethods,
    handleOption: __jsx(_SelectFieldOptions__WEBPACK_IMPORTED_MODULE_11__["default"], {
      options: editedField.fieldOptions,
      fieldMethods: fieldMethods,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomClientFields);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _components_settings_DefaultFieldsSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/settings/DefaultFieldsSection */ "./components/settings/DefaultFieldsSection.tsx");
/* harmony import */ var _components_settings_customFields_CustomFieldsSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/settings/customFields/CustomFieldsSection */ "./components/settings/customFields/CustomFieldsSection.tsx");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/LoadingSpinner */ "./components/LoadingSpinner.tsx");
/* harmony import */ var _components_settings_emailSettings_EmailSettingsSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/settings/emailSettings/EmailSettingsSection */ "./components/settings/emailSettings/EmailSettingsSection.tsx");
/* harmony import */ var _components_settings_webform_WebFormSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/settings/webform/WebFormSection */ "./components/settings/webform/WebFormSection.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");





var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/settings/[key].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;














var Settings = function Settings(_ref) {
  var dataFields = _ref.dataFields,
      username = _ref.username,
      pass = _ref.pass;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(dataFields),
      fields = _useState[0],
      setField = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      initialized = _useState2[0],
      setInitialized = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      sections = _useState3[0],
      setSection = _useState3[1];

  var user = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_9__["default"]);

  var toggleSection = function toggleSection(e) {
    setSection(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, sections, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, e.target.name, e.target.checked)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    console.log(fields);
  }, [fields]);

  var addField = function addField(obj) {
    setField(fields.some(function (field) {
      return field._id === obj.id;
    }) ? fields.map(function (field) {
      return field._id === obj._id ? obj : field;
    }) : [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(fields), [obj]));
  };

  var refreshList =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default()({
                method: "get",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_15__["default"].serverURL, "/fields/"),
                responseType: "json"
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.data;

            case 5:
              data = _context.sent;
              setField(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function refreshList() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    //title from url
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_16__["default"](router.pathname).removeSlash().removeSlashAndTextAfter().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_15__["default"].titleSubText).getString();
    document.title = title; //componendDidMount effect

    setInitialized(true);
    user.checkUser();
  }, [router]);
  var h1 = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_16__["default"](router.pathname).removeSlash().removeSlashAndTextAfter().firstCharUpperCase().getString();
  return !user.user.signedIn && !initialized ? __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "h3",
    component: "h1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, h1), __jsx(_components_settings_DefaultFieldsSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fields: fields,
    toggleSection: toggleSection,
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(_components_settings_customFields_CustomFieldsSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fields: fields,
    refreshList: refreshList,
    addField: addField,
    sections: sections,
    toggleSection: toggleSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(_components_settings_emailSettings_EmailSettingsSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
    username: username,
    pass: pass,
    toggleSection: toggleSection,
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(_components_settings_webform_WebFormSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
    fields: fields,
    toggleSection: toggleSection,
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }));
};

Settings.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {
    var resFields, dataFields, resEmailSettings, dataEmailSettings, _ref4, username, pass;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_8___default()({
              method: "GET",
              params: {
                key: context.query.key
              },
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_15__["default"].serverURL, "/fields"),
              responseType: "json"
            });

          case 2:
            resFields = _context2.sent;
            _context2.next = 5;
            return resFields.data;

          case 5:
            dataFields = _context2.sent;
            _context2.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_8___default()({
              method: "GET",
              params: {
                key: context.query.key
              },
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_15__["default"].serverURL, "/emails/email-settings"),
              responseType: "json"
            });

          case 8:
            resEmailSettings = _context2.sent;
            _context2.next = 11;
            return resEmailSettings.data;

          case 11:
            dataEmailSettings = _context2.sent;
            _context2.next = 14;
            return dataEmailSettings;

          case 14:
            _ref4 = _context2.sent;
            username = _ref4.username;
            pass = _ref4.pass;
            return _context2.abrupt("return", {
              dataFields: dataFields,
              username: username,
              pass: pass
            });

          case 18:
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

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ })

})
//# sourceMappingURL=[key].js.ee8f87959f0e9cb68165.hot-update.js.map