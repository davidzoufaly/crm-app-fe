webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/CustomClientFields.tsx":
false,

/***/ "./components/CustomFields.tsx":
/*!*************************************!*\
  !*** ./components/CustomFields.tsx ***!
  \*************************************/
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
/* harmony import */ var _AddOrEditField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddOrEditField */ "./components/AddOrEditField.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CustomFieldsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CustomFieldsList */ "./components/CustomFieldsList.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _SelectFieldOptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SelectFieldOptions */ "./components/SelectFieldOptions.tsx");




var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/CustomFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







 //TODO: EDIT OPTIONU SE PRERENDEROVAVA
//TODO: TO much baskspace u optionu uplne odstraní pole

var CustomClientFields = function CustomClientFields(_ref) {
  var fields = _ref.fields,
      refreshList = _ref.refreshList;
  var blankFieldObject = {
    fieldName: "",
    fieldType: "text",
    fieldOptions: []
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(blankFieldObject),
      editedField = _useState[0],
      setEditedField = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      displayComponent = _useState2[0],
      setDisplayComponent = _useState2[1];

  var fieldMethods = {
    onNameChange: function onNameChange(event) {
      setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, editedField, {
        fieldName: event.target.value
      }));
    },
    onSelectChange: function onSelectChange(event) {
      setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, editedField, {
        fieldType: event.target.options[event.target.options.selectedIndex].value
      }));
    },
    handleOptionSpawn: function handleOptionSpawn() {
      setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, editedField, {
        fieldOptions: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(editedField.fieldOptions), [{
          id: uniqid__WEBPACK_IMPORTED_MODULE_8___default()(),
          value: ""
        }])
      }));
    },
    toggleDisplayComponent: function toggleDisplayComponent() {
      displayComponent ? setDisplayComponent(false) : setDisplayComponent(true);
      setEditedField(blankFieldObject);
    },
    saveEditedField: function saveEditedField() {
      var fieldIsUpdated =
      /*#__PURE__*/
      function () {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var fieldName, fieldType, fieldOptions, id, res, data;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  fieldName = editedField.fieldName, fieldType = editedField.fieldType, fieldOptions = editedField.fieldOptions, id = editedField.id;
                  _context.next = 3;
                  return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                    method: "put",
                    url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_7__["default"].serverURL, "/fields/").concat(id),
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

                  if (data.msg === "Success") {
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
                  return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                    method: "post",
                    url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_7__["default"].serverURL, "/fields/"),
                    data: editedField,
                    responseType: "json"
                  });

                case 2:
                  res = _context2.sent;
                  _context2.next = 5;
                  return res.data;

                case 5:
                  data = _context2.sent;

                  if (data.msg === "Success") {
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
    setEditedField(blankFieldObject);
    refreshList();
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
              return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                method: "delete",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_7__["default"].serverURL, "/fields/").concat(id),
                responseType: "json"
              });

            case 2:
              res = _context3.sent;
              _context3.next = 5;
              return res.data;

            case 5:
              resData = _context3.sent;
              resData.msg === "Success" ? refreshList() : null;

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

  var onOptionChange = function onOptionChange(event) {
    setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, editedField, {
      fieldOptions: editedField.fieldOptions.filter(function (e) {
        return event.target.id === e.id ? e.value = event.target.value : e;
      })
    }));
  };

  var onOptionDelete = function onOptionDelete(event) {
    setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, editedField, {
      fieldOptions: editedField.fieldOptions.filter(function (e) {
        return event.target.id !== e.id ? e : null;
      })
    }));
  };

  var setupEditedField = function setupEditedField(obj) {
    setEditedField(obj);
    !displayComponent ? setDisplayComponent(true) : null;
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h4",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Custom Client Fields"), __jsx(_CustomFieldsList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    deleteField: deleteField,
    fields: fields,
    setupEditedField: setupEditedField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx(_AddOrEditField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    editedField: editedField,
    displayComponent: displayComponent,
    fieldMethods: fieldMethods,
    handleOption: __jsx(_SelectFieldOptions__WEBPACK_IMPORTED_MODULE_11__["default"], {
      options: editedField.fieldOptions,
      onOptionChange: onOptionChange,
      onOptionDelete: onOptionDelete,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomClientFields);

/***/ }),

/***/ "./components/DefaultClientFields.tsx":
false,

/***/ "./components/DefaultFields.tsx":
/*!**************************************!*\
  !*** ./components/DefaultFields.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/DefaultFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var DefaultClientFields = function DefaultClientFields(_ref) {
  var fields = _ref.fields;
  var defaultFieldNames = fields.filter(function (_ref2) {
    var fieldPermanent = _ref2.fieldPermanent;
    return fieldPermanent === true;
  }).map(function (_ref3) {
    var fieldName = _ref3.fieldName,
        _id = _ref3._id;
    var defaultFieldNameFormated = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](fieldName).camelStringToText().firstCharUpperCase().getString();
    return __jsx("div", {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, defaultFieldNameFormated));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h4",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Default client fields"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, defaultFieldNames));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultClientFields);

/***/ }),

/***/ "./pages/settings.tsx":
/*!****************************!*\
  !*** ./pages/settings.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_DefaultFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DefaultFields */ "./components/DefaultFields.tsx");
/* harmony import */ var _components_CustomFields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CustomFields */ "./components/CustomFields.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/settings.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var Settings = function Settings(_ref) {
  var data = _ref.data;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(data),
      fields = _useState[0],
      setField = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      headingOne = _useState2[0],
      setHeadingOne = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      initialized = _useState3[0],
      setInitialized = _useState3[1];

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
              return axios__WEBPACK_IMPORTED_MODULE_7___default()({
                method: "get",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_6__["default"].serverURL, "/fields/"),
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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //H1 from url
    setHeadingOne(new _library_stringMethods__WEBPACK_IMPORTED_MODULE_5__["default"](router.pathname).removeSlash().firstCharUpperCase().getString()); //title from url

    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_5__["default"](router.pathname).removeSlash().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_6__["default"].titleSubText).getString();
    document.title = title; //componendDidMount effect

    setInitialized(true);
  });

  if (!initialized) {
    return "Loading...";
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h3",
    component: "h1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, headingOne), __jsx(_components_DefaultFields__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fields: fields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_components_CustomFields__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fields: fields,
    refreshList: refreshList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }));
};

Settings.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_7___default()({
            method: "get",
            url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_6__["default"].serverURL, "/fields"),
            responseType: "json"
          });

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return res.data;

        case 5:
          data = _context2.sent;
          return _context2.abrupt("return", {
            data: data
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}));
/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ })

})
//# sourceMappingURL=settings.js.a39c4d75397017db1ba5.hot-update.js.map