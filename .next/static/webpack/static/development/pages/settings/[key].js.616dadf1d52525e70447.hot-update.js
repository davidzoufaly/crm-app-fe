webpackHotUpdate("static/development/pages/settings/[key].js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _WebFormSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WebFormSelect */ "./components/settings/webform/WebFormSelect.tsx");
/* harmony import */ var _WebFormList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebFormList */ "./components/settings/webform/WebFormList.tsx");
/* harmony import */ var _WebFormVisibleOrNot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WebFormVisibleOrNot */ "./components/settings/webform/WebFormVisibleOrNot.tsx");
/* harmony import */ var _WebFormSubSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WebFormSubSelect */ "./components/settings/webform/WebFormSubSelect.tsx");
/* harmony import */ var _WebFormButtons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WebFormButtons */ "./components/settings/webform/WebFormButtons.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;












var reducer = function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state.map(function (field) {
        return field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, field, {
          fieldInForm: true,
          order: action.payload.counter
        }) : field;
      });

    case "addVisibleSelect":
      return state.map(function (field) {
        return field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, field, {
          fieldInForm: true,
          fieldFormVisible: true,
          pause: false,
          order: action.payload.counter
        }) : field;
      });

    case "addNotVisibleValue":
      return state.map(function (field) {
        return field.pause ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, field, {
          fieldFormVisible: false
        }) : field;
      });

    case "addHiddenSelect":
      return state.map(function (field) {
        return field.pause ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, field, {
          fieldInForm: true,
          pause: false,
          order: action.payload.counter,
          fieldOptions: field.fieldOptions.map(function (option) {
            return option.value === action.payload.optionValue ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, option, {
              preselected: true
            }) : option;
          })
        }) : field;
      });

    case "pauseSelect":
      return state.map(function (field) {
        return field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, field, {
          pause: true
        }) : field;
      });

    case "remove":
      return state.map(function (field) {
        return field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, field, {
          fieldInForm: false,
          fieldFormVisible: null,
          fieldOptions: field.fieldOptions.map(function (option) {
            return option.preselected ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, option, {
              preselected: null
            }) : option;
          })
        }) : field;
      });

    default:
      throw new Error();
  }
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["createStyles"])({
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
  var fields = _ref.fields;
  var initCounterValue = fields.map(function (e) {
    return e.order;
  }).sort(function (a, b) {
    return b > a ? 1 : -1;
  })[0];
  var classes = useStyles({});
  var user = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_6__["default"]);

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(reducer, fields),
      webFields = _useReducer[0],
      dispatch = _useReducer[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initCounterValue),
      counter = _useState[0],
      setCounter = _useState[1];

  var addNotSelect = function addNotSelect(e) {
    webFields.map(function (field) {
      if (field.fieldName === e.target.value) {
        if (field.fieldType !== "select") {
          dispatch({
            type: "add",
            payload: {
              fieldName: e.target.value,
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
              fieldName: e.target.value
            }
          });
        }
      }
    });
  };

  var addVisibleSelect = function addVisibleSelect(e) {
    dispatch({
      type: "addVisibleSelect",
      payload: {
        fieldName: e.currentTarget.id,
        counter: counter
      }
    });
    setCounter(function (prevCount) {
      return prevCount + 1;
    });
  };

  var addHiddenSelect = function addHiddenSelect(e) {
    dispatch({
      type: "addHiddenSelect",
      payload: {
        optionValue: e.target.value,
        counter: counter
      }
    });
    setCounter(function (prevCount) {
      return prevCount + 1;
    });
  };

  var removeFromList = function removeFromList(e) {
    dispatch({
      type: "remove",
      payload: {
        fieldName: e.currentTarget.id
      }
    });
  };

  var showOptionsOnClick = function showOptionsOnClick() {
    dispatch({
      type: "addNotVisibleValue"
    });
  };

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
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                method: "PUT",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].serverURL, "/fields"),
                params: {
                  key: user.user.userkey
                },
                data: webFields,
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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    //save fields (form) on change
    webFields !== fields ? saveFormAuto() : null;
  }, [webFields]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Box"], {
    className: classes.formWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(_WebFormSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
    webFields: webFields,
    addNotSelect: addNotSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), __jsx(_WebFormVisibleOrNot__WEBPACK_IMPORTED_MODULE_9__["default"], {
    webFields: webFields,
    addVisibleSelect: addVisibleSelect,
    showOptionsOnClick: showOptionsOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), __jsx(_WebFormSubSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    webFields: webFields,
    addHiddenSelect: addHiddenSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }), __jsx(_WebFormList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    webFields: webFields,
    removeFromList: removeFromList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }), __jsx(_WebFormButtons__WEBPACK_IMPORTED_MODULE_11__["default"], {
    webFields: webFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (WebForm);

/***/ })

})
//# sourceMappingURL=[key].js.616dadf1d52525e70447.hot-update.js.map