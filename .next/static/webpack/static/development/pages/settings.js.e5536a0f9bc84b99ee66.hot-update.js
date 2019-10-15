webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/CustomClientFields.tsx":
/*!*******************************************!*\
  !*** ./components/CustomClientFields.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AddOrEditField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AddOrEditField */ "./components/AddOrEditField.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _CustomFieldsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomFieldsList */ "./components/CustomFieldsList.tsx");



var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/CustomClientFields.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var CustomClientFields = function CustomClientFields(_ref) {
  var fields = _ref.fields,
      refreshList = _ref.refreshList;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    fieldName: "",
    fieldType: "text",
    fieldPermanent: false,
    fieldOptions: []
  }),
      editedField = _useState[0],
      setEditedField = _useState[1];

  var saveEditedField =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                method: "post",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_6__["default"].serverURL, "/fields/"),
                data: editedField,
                responseType: "json"
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.data;

            case 5:
              data = _context.sent;
              // data.msg === "Success" ? changeDisplayComponent() : null;
              console.log(data);
              refreshList();

            case 8:
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
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(event) {
      var id, res, resData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = event.target.id;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                method: "delete",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_6__["default"].serverURL, "/fields/").concat(id),
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
    setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, editedField, {
      fieldName: event.target.value
    }));
    console.log(editedField);
  };

  var onSelectChange = function onSelectChange(event) {
    setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, editedField, {
      fieldType: event.target.options[event.target.options.selectedIndex].value
    }));
  }; // const handleOptionSpawn = () => {
  //   setEditedField({
  //     ...editedField,
  //     fieldOptions: [...editedField.fieldOptions, { id: uniqid(), value: "" }]
  //   });
  // };


  var onOptionChange = function onOptionChange(event) {
    setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, editedField, {
      fieldOptions: editedField.fieldOptions.filter(function (e) {
        return event.target.id === e.id ? e.value = event.target.value : e;
      })
    }));
  };

  var onOptionDelete = function onOptionDelete(event) {
    setEditedField(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, editedField, {
      fieldOptions: editedField.fieldOptions.filter(function (e) {
        return event.target.id !== e.id ? e : null;
      })
    }));
  }; // const setupEditedField = (obj ? : any) => {
  //   setEditedField(obj);
  // }


  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Custom Client Fields"), __jsx(_CustomFieldsList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    deleteField: deleteField,
    fields: fields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(_components_AddOrEditField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    editedField: editedField,
    refreshList: refreshList,
    saveEditedField: saveEditedField,
    onNameChange: onNameChange,
    onSelectChange: onSelectChange,
    handleOptionSpawn: handleOptionSpawn,
    onOptionChange: onOptionChange,
    onOptionDelete: onOptionDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomClientFields);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/uniqid/index.js":
false

})
//# sourceMappingURL=settings.js.e5536a0f9bc84b99ee66.hot-update.js.map