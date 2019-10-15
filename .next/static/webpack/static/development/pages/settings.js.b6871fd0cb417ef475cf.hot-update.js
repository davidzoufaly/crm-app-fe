webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/CustomClientFields.tsx":
/*!*******************************************!*\
  !*** ./components/CustomClientFields.tsx ***!
  \*******************************************/
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
/* harmony import */ var _components_AddOrEditField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AddOrEditField */ "./components/AddOrEditField.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CustomFieldsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CustomFieldsList */ "./components/CustomFieldsList.tsx");




var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/CustomClientFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







var CustomClientFields = function CustomClientFields(_ref) {
  var fields = _ref.fields,
      refreshList = _ref.refreshList;
  var blankFieldObject = {
    fieldName: "",
    fieldType: "text",
    fieldPermanent: false,
    fieldOptions: []
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(blankFieldObject),
      editedField = _useState[0],
      setEditedField = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      displayComponent = _useState2[0],
      setDisplayComponent = _useState2[1];

  var changeDisplayComponent = function changeDisplayComponent() {
    displayComponent ? setDisplayComponent(false) : setDisplayComponent(true);
  };

  var saveEditedField =
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
              return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                method: "post",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_7__["default"].serverURL, "/fields/"),
                data: editedField,
                responseType: "json"
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.data;

            case 5:
              data = _context.sent;

              if (data.msg === "Success") {
                refreshList();
                setDisplayComponent(false);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function saveEditedField() {
      return _ref2.apply(this, arguments);
    };
  }();

  var deleteField =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(event) {
      var id, res, resData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = event.target.id;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                method: "delete",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_7__["default"].serverURL, "/fields/").concat(id),
                responseType: "json"
              });

            case 3:
              res = _context2.sent;
              _context2.next = 6;
              return res.data;

            case 6:
              resData = _context2.sent;
              resData.msg === "Success" ? refreshList() : null;

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function deleteField(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var onNameChange = function onNameChange(event) {
    setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, editedField, {
      fieldName: event.target.value
    }));
    console.log(editedField);
  };

  var onSelectChange = function onSelectChange(event) {
    setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, editedField, {
      fieldType: event.target.options[event.target.options.selectedIndex].value
    }));
  };

  var handleOptionSpawn = function handleOptionSpawn() {
    setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, editedField, {
      fieldOptions: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(editedField.fieldOptions), [{
        id: uniqid__WEBPACK_IMPORTED_MODULE_8___default()(),
        value: ""
      }])
    }));
  };

  var onOptionChange = function onOptionChange(event) {
    setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, editedField, {
      fieldOptions: editedField.fieldOptions.filter(function (e) {
        return event.target.id === e.id ? e.value = event.target.value : e;
      })
    }));
  };

  var onOptionDelete = function onOptionDelete(event) {
    setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, editedField, {
      fieldOptions: editedField.fieldOptions.filter(function (e) {
        return event.target.id !== e.id ? e : null;
      })
    }));
  };

  var setupEditedField = function setupEditedField(obj) {
    setEditedField(obj);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Custom Client Fields"), __jsx(_CustomFieldsList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    deleteField: deleteField,
    fields: fields,
    setupEditedField: setupEditedField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(_components_AddOrEditField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    editedField: editedField,
    refreshList: refreshList,
    saveEditedField: saveEditedField,
    onNameChange: onNameChange,
    onSelectChange: onSelectChange,
    handleOptionSpawn: handleOptionSpawn,
    onOptionChange: onOptionChange,
    onOptionDelete: onOptionDelete,
    displayComponent: displayComponent,
    changeDisplayComponent: changeDisplayComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomClientFields);

/***/ })

})
//# sourceMappingURL=settings.js.b6871fd0cb417ef475cf.hot-update.js.map