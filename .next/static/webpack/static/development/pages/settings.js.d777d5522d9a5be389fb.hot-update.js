webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/AddOrEditField.tsx":
/*!***************************************!*\
  !*** ./components/AddOrEditField.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SelectFieldOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SelectFieldOptions */ "./components/SelectFieldOptions.tsx");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");




var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/AddOrEditField.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






var AddOrEditField = function AddOrEditField(_ref) {
  var editedField = _ref.editedField,
      refreshList = _ref.refreshList;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      displayComponent = _useState[0],
      setDisplayComponent = _useState[1];

  var changeDisplayComponent = function changeDisplayComponent() {
    displayComponent ? setDisplayComponent(false) : setDisplayComponent(true);
  };

  var saveField =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default()({
                method: "post",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].serverURL, "/fields/"),
                data: editedField,
                responseType: "json"
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.data;

            case 5:
              data = _context.sent;
              data.msg === "Success" ? changeDisplayComponent() : null;
              console.log(fieldObject);
              refreshList();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function saveField() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onNameChange = function onNameChange(event) {
    seteditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, editedField, {
      fieldName: event.target.value
    }));
    console.log(editedField);
  };

  var onSelectChange = function onSelectChange(event) {
    seteditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, editedField, {
      fieldType: event.target.options[event.target.options.selectedIndex].value
    }));
  };

  var handleOptionSpawn = function handleOptionSpawn() {
    seteditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, editedField, {
      fieldOptions: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(editedField.fieldOptions), [{
        id: uniqid__WEBPACK_IMPORTED_MODULE_6___default()(),
        value: ""
      }])
    }));
  };

  var onChange = function onChange(event) {
    seteditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, editedField, {
      fieldOptions: editedField.fieldOptions.filter(function (e) {
        return event.target.id === e.id ? e.value = event.target.value : e;
      })
    }));
  };

  var onDelete = function onDelete(event) {
    seteditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, editedField, {
      fieldOptions: editedField.fieldOptions.filter(function (e) {
        return event.target.id !== e.id ? e : null;
      })
    }));
  };

  return displayComponent ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "field-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Field name"), __jsx("input", {
    type: "text",
    id: "field-name",
    defaultValue: editedField.fieldName,
    onChange: onNameChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "field-type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Field type"), __jsx("select", {
    id: "field-type",
    onChange: onSelectChange,
    defaultValue: editedField.fieldType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("option", {
    value: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Text"), __jsx("option", {
    value: "select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Select"), __jsx("option", {
    value: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Number")), __jsx(_components_SelectFieldOptions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: editedField.fieldOptions,
    onChange: onChange,
    onDelete: onDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), editedField.fieldType === "select" ? __jsx("button", {
    onClick: handleOptionSpawn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "New") : null, __jsx("button", {
    onClick: saveField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Save"), __jsx("button", {
    onClick: changeDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Cancel")) : __jsx("button", {
    onClick: changeDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Add new field");
};

/* harmony default export */ __webpack_exports__["default"] = (AddOrEditField);

/***/ }),

/***/ "./components/CustomClientFields.tsx":
/*!*******************************************!*\
  !*** ./components/CustomClientFields.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AddOrEditField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddOrEditField */ "./components/AddOrEditField.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _components_CustomFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CustomFields */ "./components/CustomFields.tsx");


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/CustomClientFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var CustomClientFields = function CustomClientFields(_ref) {
  var fields = _ref.fields,
      refreshList = _ref.refreshList;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    fieldName: "",
    fieldType: "text",
    fieldPermanent: false,
    fieldOptions: []
  }),
      editedField = _useState[0],
      setEditedField = _useState[1];

  var deleteField =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var id, res, resData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = event.target.id;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: "delete",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].serverURL, "/fields/").concat(id),
                responseType: "json"
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.data;

            case 6:
              resData = _context.sent;
              resData.msg === "Success" ? refreshList() : null;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function deleteField(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // const setupEditedField = (obj ? : any) => {
  //   setEditedField(obj);
  // }


  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Custom Client Fields"), __jsx(_components_CustomFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
    deleteField: deleteField,
    fields: fields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_components_AddOrEditField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    editedField: editedField,
    refreshList: refreshList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomClientFields);

/***/ })

})
//# sourceMappingURL=settings.js.d777d5522d9a5be389fb.hot-update.js.map