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
/* harmony import */ var _reducers_fieldsReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../reducers/fieldsReducer */ "./reducers/fieldsReducer.tsx");
/* harmony import */ var _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../actions/fieldsAction */ "./actions/fieldsAction.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["createStyles"])({
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
  var user = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_5__["default"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initCounterValue + 1),
      counter = _useState[0],
      setCounter = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(_reducers_fieldsReducer__WEBPACK_IMPORTED_MODULE_11__["default"], fields),
      state = _useReducer[0],
      dispatch = _useReducer[1];

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
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_13__["default"].serverURL, "/fields"),
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
    console.log(counter);
  }, [counter]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //save fields (form) on change
    state !== fields ? saveFormAuto() : null;
  }, [state]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Box"], {
    className: classes.formWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_WebFormSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
    state: state,
    handleAddingToWF: _actions_fieldsAction__WEBPACK_IMPORTED_MODULE_12__["handleAddingToWF"],
    counter: counter,
    setCounter: setCounter,
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_WebFormVisibleOrNot__WEBPACK_IMPORTED_MODULE_8__["default"], {
    state: state,
    dispatch: dispatch,
    counter: counter,
    setCounter: setCounter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_WebFormSubSelect__WEBPACK_IMPORTED_MODULE_9__["default"], {
    state: state,
    dispatch: dispatch,
    counter: counter,
    setCounter: setCounter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx(_WebFormList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    state: state,
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(_WebFormButtons__WEBPACK_IMPORTED_MODULE_10__["default"], {
    state: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (WebForm);

/***/ })

})
//# sourceMappingURL=[key].js.31bda3b24bba413222c0.hot-update.js.map