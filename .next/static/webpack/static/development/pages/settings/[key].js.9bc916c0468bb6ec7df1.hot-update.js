webpackHotUpdate("static/development/pages/settings/[key].js",{

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
var addField = function addField(dispatch, obj) {
  dispatch({
    type: "addNewField",
    payload: {
      obj: obj
    }
  });
};
var deleteField = function deleteField(dispatch, id) {
  dispatch({
    type: "deleteField",
    payload: {
      id: id
    }
  });
};
var handleAddingToWF = function handleAddingToWF(dispatch, state, counter, setCounter, e) {
  state.map(function (field) {
    if (field.fieldName === e.target.getAttribute("data-value")) {
      if (field.fieldType !== "select") {
        dispatch({
          type: "addToWF",
          payload: {
            fieldName: e.target.getAttribute("data-value"),
            counter: counter
          }
        });
        setCounter(function (prevCount) {
          return prevCount + 1;
        });
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
var addVisibleSelect = function addVisibleSelect(dispatch, setCounter, counter) {
  dispatch({
    type: "addVisibleSelectWF",
    payload: {
      counter: counter
    }
  });
  setCounter(function (prevCount) {
    return prevCount + 1;
  });
};
var addHiddenSelect = function addHiddenSelect(dispatch, setCounter, counter, e) {
  dispatch({
    type: "addHiddenSelectWF",
    payload: {
      optionValue: e.target.getAttribute("data-value"),
      counter: counter
    }
  });
  setCounter(function (prevCount) {
    return prevCount + 1;
  });
};
var removeFromList = function removeFromList(dispatch, e) {
  console.log(e.target);
  console.log(e.currentTarget);
  dispatch({
    type: "removeFromWF",
    payload: {
      fieldName: e.target.id
    }
  });
};
var showOptionsOnClick = function showOptionsOnClick(dispatch) {
  dispatch({
    type: "addNotVisibleValue"
  });
};

/***/ }),

/***/ "./components/settings/DefaultFieldsSection.tsx":
/*!******************************************************!*\
  !*** ./components/settings/DefaultFieldsSection.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/DefaultFieldsSection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var DefaultClientFieldsSection = function DefaultClientFieldsSection(_ref) {
  var state = _ref.state,
      toggleSection = _ref.toggleSection,
      sections = _ref.sections;
  var defaultFieldNames = state.filter(function (_ref2) {
    var fieldPermanent = _ref2.fieldPermanent;
    return fieldPermanent === true;
  }).map(function (_ref3) {
    var fieldName = _ref3.fieldName,
        _id = _ref3._id;
    return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h6",
      component: "h3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, fieldName)));
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    my: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
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
        __self: this
      }),
      checkedIcon: __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }),
    label: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h4",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.defaultClientFields),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
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
    __self: this
  }, defaultFieldNames) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultClientFieldsSection);

/***/ }),

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
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");




var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/CustomFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;












var CustomFields = function CustomFields(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch;
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
        // if option with preselected in form being delete, remove field from form
        return state.fieldInForm && state.fieldOptions.some(function (el) {
          return el.id === action.payload.id && el.preselected;
        }) ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
          fieldInForm: false,
          fieldOptions: state.fieldOptions.filter(function (e) {
            return e.id !== action.payload.id;
          })
        }) : Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
          fieldOptions: state.fieldOptions.filter(function (e) {
            return e.id !== action.payload.id;
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

      state.some(function (field) {
        return field._id === editedField._id;
      }) ? fieldIsUpdated() : fieldIsCreated();
    }
  };

  var reset = function reset() {
    setDisplayComponent(false);
    Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_14__["addField"])(dispatch, editedField);
    setEditedField({
      type: "clear"
    });
  };

  var deleteFieldRes =
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
              resData.msg === _library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].msgSuccess ? Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_14__["deleteField"])(dispatch, id) : null;

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteFieldRes(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    mt: "1rem",
    mb: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(_CustomFieldsList__WEBPACK_IMPORTED_MODULE_10__["default"], {
    deleteFieldRes: deleteFieldRes,
    state: state,
    setupEditedField: fieldMethods.setupEditedField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
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
        lineNumber: 193
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/CustomFieldsList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    card: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      textAlign: "center",
      minWidth: "280px"
    }, theme.breakpoints.down("xs"), {
      width: "100%"
    }),
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
  });
});

var CustomFields = function CustomFields(_ref) {
  var setupEditedField = _ref.setupEditedField,
      deleteFieldRes = _ref.deleteFieldRes,
      state = _ref.state;
  var classes = useStyles({});
  var separatedCustomFields = state.filter(function (_ref2) {
    var fieldPermanent = _ref2.fieldPermanent;
    return !fieldPermanent;
  }).map(function (_ref3) {
    var fieldName = _ref3.fieldName,
        _id = _ref3._id,
        fieldType = _ref3.fieldType,
        fieldOptions = _ref3.fieldOptions,
        fieldInForm = _ref3.fieldInForm,
        fieldFormVisible = _ref3.fieldFormVisible,
        order = _ref3.order;
    var options = fieldOptions.map(function (e) {
      return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: e.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
        primary: e.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }));
    });
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      key: _id,
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        height: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.cardWrapper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h6",
      component: "h3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, fieldName), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.pos,
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "(", fieldType.toLowerCase(), ")"), fieldType === "select" && fieldOptions.length > 0 ? __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.list,
      dense: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, options)) : null), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: "40%",
      mt: "1rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      container: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      xs: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Fab"], {
      size: "small",
      color: "primary",
      onClick: function onClick() {
        return setupEditedField({
          fieldName: fieldName,
          fieldType: fieldType,
          fieldPermanent: false,
          fieldInForm: fieldInForm,
          fieldFormVisible: fieldFormVisible,
          fieldOptions: fieldOptions,
          order: order,
          _id: _id
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      xs: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Fab"], {
      size: "small",
      color: "secondary",
      onClick: function onClick() {
        return deleteFieldRes(_id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    })))))))));
  });
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFields */ "./components/settings/customFields/CustomFields.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/customFields/CustomFieldsSection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var CustomFieldsSection = function CustomFieldsSection(_ref) {
  var toggleSection = _ref.toggleSection,
      sections = _ref.sections,
      dispatch = _ref.dispatch,
      state = _ref.state;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    my: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
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
        __self: this
      }),
      checkedIcon: __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }),
    label: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "h4",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.customClientFields),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), sections.customFields || sections.customFields === undefined ? __jsx(_CustomFields__WEBPACK_IMPORTED_MODULE_1__["default"], {
    state: state,
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (CustomFieldsSection);

/***/ }),

/***/ "./components/settings/webform/WebForm.tsx":
/*!*************************************************!*\
  !*** ./components/settings/webform/WebForm.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _WebFormSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebFormSelect */ "./components/settings/webform/WebFormSelect.tsx");
/* harmony import */ var _WebFormList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WebFormList */ "./components/settings/webform/WebFormList.tsx");
/* harmony import */ var _WebFormVisibleOrNot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebFormVisibleOrNot */ "./components/settings/webform/WebFormVisibleOrNot.tsx");
/* harmony import */ var _WebFormSubSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WebFormSubSelect */ "./components/settings/webform/WebFormSubSelect.tsx");
/* harmony import */ var _WebFormButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WebFormButtons */ "./components/settings/webform/WebFormButtons.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["createStyles"])({
    formWrapper: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      marginTop: theme.spacing(3),
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows["1"],
      padding: theme.spacing(3),
      backgroundColor: theme.palette.grey["200"],
      width: "50%"
    }, theme.breakpoints.down("sm"), {
      width: "100%"
    }),
    textField: {
      marginTop: theme.spacing(2)
    }
  });
});

var WebForm = function WebForm(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch;
  var initCounterValue = state.map(function (e) {
    return e.order;
  }).sort(function (a, b) {
    return b > a ? 1 : -1;
  })[0];
  var classes = useStyles({});
  var user = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_5__["default"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initCounterValue + 1),
      counter = _useState[0],
      setCounter = _useState[1];

  var saveFormAuto =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: "PUT",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].serverURL, "/fields"),
                params: {
                  key: user.user.userkey
                },
                data: state,
                responseType: "json"
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function saveFormAuto() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // save fields (form) on change
    saveFormAuto();
  }, [state]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    className: classes.formWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_WebFormSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
    state: state,
    counter: counter,
    setCounter: setCounter,
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(_WebFormVisibleOrNot__WEBPACK_IMPORTED_MODULE_8__["default"], {
    state: state,
    dispatch: dispatch,
    counter: counter,
    setCounter: setCounter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx(_WebFormSubSelect__WEBPACK_IMPORTED_MODULE_9__["default"], {
    state: state,
    dispatch: dispatch,
    counter: counter,
    setCounter: setCounter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_WebFormList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    state: state,
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_WebFormButtons__WEBPACK_IMPORTED_MODULE_10__["default"], {
    state: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/GetApp */ "./node_modules/@material-ui/icons/GetApp.js");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormButtons.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var WebFormButtons = function WebFormButtons(_ref) {
  var state = _ref.state;
  var user = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var showTip = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var onDownload =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, url, link;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                method: "GET",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].serverURL, "/webform/"),
                params: {
                  key: user.user.userkey
                },
                data: state,
                responseType: "blob"
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return window.URL.createObjectURL(new Blob([res.data]));

            case 5:
              url = _context.sent;
              _context.next = 8;
              return document.createElement("a");

            case 8:
              link = _context.sent;
              link.href = url;
              link.setAttribute("download", "crm-form.js");
              document.body.appendChild(link);
              link.click();
              showTip.current.style.display = "block";

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onDownload() {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    ref: showTip,
    style: {
      display: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_6__["default"].en.webFormTip), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    display: "flex",
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: onDownload,
    variant: "contained",
    color: "primary",
    startIcon: __jsx(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_6__["default"].en.donwloadForm)));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/HighlightOff */ "./node_modules/@material-ui/icons/HighlightOff.js");
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var WebFormList = function WebFormList(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch;
  var list = state.filter(function (el) {
    return el.fieldInForm;
  }).sort(function (a, b) {
    return a.order - b.order;
  }).map(function (_ref2) {
    var _id = _ref2._id,
        fieldName = _ref2.fieldName,
        fieldFormVisible = _ref2.fieldFormVisible,
        fieldOptions = _ref2.fieldOptions,
        fieldType = _ref2.fieldType;
    var strFormVisible = fieldFormVisible ? " - ".concat(_library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.visibleInForm) : null;
    var strFormNotVisible1 = !fieldFormVisible ? fieldType === "select" ? " - ".concat(_library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.hiddenInForm) : null : null;
    var strFormNotVisible2 = !fieldFormVisible ? fieldType === "select" ? fieldOptions.map(function (e) {
      return e.preselected ? e.value : null;
    }).join("") : null : null;
    var strFormNotVisible3 = !fieldFormVisible ? fieldType === "select" ? _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.asPreselected : null : null;
    _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.asPreselected;
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      id: fieldName,
      onClick: function onClick() {
        return Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_4__["removeFromList"])(dispatch, event);
      },
      color: "secondary",
      "aria-label": "delete",
      style: {
        marginRight: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, fieldName), strFormVisible, strFormNotVisible1, " ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, strFormNotVisible2), " ", strFormNotVisible3));
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.selectedFields), state.some(function (e) {
    return e.fieldInForm;
  }) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    dense: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, list) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WebForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebForm */ "./components/settings/webform/WebForm.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var WebFormSection = function WebFormSection(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      toggleSection = _ref.toggleSection,
      sections = _ref.sections;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    my: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
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
        __self: this
      }),
      checkedIcon: __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }),
    label: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      variant: "h4",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.webForm),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), sections.webForm || sections.webForm === undefined ? __jsx(_WebForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    state: state,
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }) : null);
};

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var WebFormSelect = function WebFormSelect(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      counter = _ref.counter,
      setCounter = _ref.setCounter;
  var selectOptions = state.map(function (field) {
    return !field.fieldInForm && field.fieldName !== "Date added" && field.fieldName !== "Last modified" ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      key: field._id,
      value: field.fieldName,
      id: field.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, field.fieldName) : null;
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.selectField), selectOptions.some(function (field) {
    return field !== null;
  }) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    fullWidth: true,
    disabled: state.some(function (e) {
      return e.pause;
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    htmlFor: "field-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldName), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    name: "fields",
    id: "field-select",
    onChange: function onChange() {
      return Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__["handleAddingToWF"])(dispatch, state, counter, setCounter, event);
    },
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, selectOptions)) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormSubSelect.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var WebFormSubSelect = function WebFormSubSelect(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      setCounter = _ref.setCounter,
      counter = _ref.counter;
  return state.some(function (e) {
    return e.fieldFormVisible === false && e.pause;
  }) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h4",
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, state.filter(function (el) {
    return el.pause;
  }).map(function (el) {
    return el.fieldName;
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.pleaseSelectOption), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    htmlFor: "field-sub-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en.fieldName), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    id: "field-sub-select",
    onChange: function onChange() {
      return Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_2__["addHiddenSelect"])(dispatch, setCounter, counter, event);
    },
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, state.map(function (field) {
    return field.pause ? field.fieldOptions.map(function (option) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
        key: option.id,
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, option.value);
    }) : null;
  }))))) : null;
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormVisibleOrNot.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var WebFormVisibleOrNot = function WebFormVisibleOrNot(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      counter = _ref.counter,
      setCounter = _ref.setCounter;
  var VisibleOrNot = state.map(function (_ref2) {
    var fieldName = _ref2.fieldName,
        fieldFormVisible = _ref2.fieldFormVisible,
        _id = _ref2._id,
        pause = _ref2.pause;
    return fieldFormVisible === null ? pause ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      key: _id,
      mb: "2rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      gutterBottom: true,
      component: "h4",
      variant: "h6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.shouldBe, " ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, fieldName), " ", _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.visibleInForm, "?"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      id: fieldName,
      variant: "contained",
      color: "primary",
      style: {
        marginRight: "1rem"
      },
      onClick: function onClick() {
        return Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_1__["addVisibleSelect"])(dispatch, setCounter, counter);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.yes), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "contained",
      color: "secondary",
      onClick: function onClick() {
        return Object(_actions_fieldsAction__WEBPACK_IMPORTED_MODULE_1__["showOptionsOnClick"])(dispatch);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, _library_languages__WEBPACK_IMPORTED_MODULE_2__["default"].en.no)) : null : null;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, VisibleOrNot);
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormVisibleOrNot);

/***/ }),

/***/ "./library/languages.tsx":
/*!*******************************!*\
  !*** ./library/languages.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var languages = {
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
    "delete": "Delete",
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_fieldsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/fieldsReducer */ "./reducers/fieldsReducer.tsx");
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;















var Settings = function Settings(_ref) {
  var dataFields = _ref.dataFields,
      username = _ref.username,
      pass = _ref.pass;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      initialized = _useState[0],
      setInitialized = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      sections = _useState2[0],
      setSection = _useState2[1];

  var user = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_9__["default"]);

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(_reducers_fieldsReducer__WEBPACK_IMPORTED_MODULE_8__["default"], dataFields),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var toggleSection = function toggleSection(e) {
    setSection(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, sections, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.checked)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
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
      lineNumber: 52
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "h3",
    component: "h1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, h1), __jsx(_components_settings_DefaultFieldsSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    state: state,
    toggleSection: toggleSection,
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_components_settings_customFields_CustomFieldsSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
    state: state,
    dispatch: dispatch,
    sections: sections,
    toggleSection: toggleSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx(_components_settings_emailSettings_EmailSettingsSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
    username: username,
    pass: pass,
    toggleSection: toggleSection,
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_components_settings_webform_WebFormSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
    state: state,
    dispatch: dispatch,
    toggleSection: toggleSection,
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
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
            return axios__WEBPACK_IMPORTED_MODULE_7___default()({
              method: "GET",
              params: {
                key: context.query.key
              },
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_15__["default"].serverURL, "/fields"),
              responseType: "json"
            });

          case 2:
            resFields = _context.sent;
            _context.next = 5;
            return resFields.data;

          case 5:
            dataFields = _context.sent;
            _context.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_7___default()({
              method: "GET",
              params: {
                key: context.query.key
              },
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_15__["default"].serverURL, "/emails/email-settings"),
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");



var fieldsReducer = function fieldsReducer(state, action) {
  switch (action.type) {
    case "addNewField":
      return state.some(function (field) {
        return field._id === action.payload.obj._id;
      }) ? state.map(function (field) {
        return field._id === action.payload.obj._id ? action.payload.obj : field;
      }) : [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state), [action.payload.obj]);

    case "deleteField":
      return state.filter(function (field) {
        return field._id !== action.payload.id;
      });

    case "addToWF":
      return state.map(function (field) {
        return field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
          fieldInForm: true,
          order: action.payload.counter
        }) : field;
      });

    case "addVisibleSelectWF":
      return state.map(function (field) {
        return field.pause ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
          fieldInForm: true,
          fieldFormVisible: true,
          pause: false,
          order: action.payload.counter
        }) : field;
      });

    case "addNotVisibleValue":
      return state.map(function (field) {
        return field.pause ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
          fieldFormVisible: false
        }) : field;
      });

    case "addHiddenSelectWF":
      return state.map(function (field) {
        return field.pause ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
          fieldInForm: true,
          pause: false,
          order: action.payload.counter,
          fieldOptions: field.fieldOptions.map(function (option) {
            return option.value === action.payload.optionValue ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, option, {
              preselected: true
            }) : option;
          })
        }) : field;
      });

    case "pauseSelect":
      return state.map(function (field) {
        return field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
          pause: true
        }) : field;
      });

    case "removeFromWF":
      return state.map(function (field) {
        return field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
          fieldInForm: false,
          fieldFormVisible: null,
          fieldOptions: field.fieldOptions.map(function (option) {
            return option.preselected ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, option, {
              preselected: null
            }) : option;
          })
        }) : field;
      });

    default:
      throw new Error();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (fieldsReducer);

/***/ })

})
//# sourceMappingURL=[key].js.9bc916c0468bb6ec7df1.hot-update.js.map