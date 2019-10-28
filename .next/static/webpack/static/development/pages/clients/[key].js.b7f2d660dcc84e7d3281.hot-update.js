webpackHotUpdate("static/development/pages/clients/[key].js",{

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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! generate-unique-id */ "./node_modules/generate-unique-id/index.js");
/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(generate_unique_id__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _ClientForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ClientForm */ "./components/clients/ClientForm.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");






var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/CreateClient.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__["createStyles"])({
    formWrapper: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      marginTop: theme.spacing(3),
      borderRadius: theme.spacing(1),
      padding: theme.spacing(3),
      backgroundColor: theme.palette.grey["200"],
      boxShadow: theme.shadows["1"],
      width: "50%"
    }, theme.breakpoints.down("sm"), {
      width: "100%"
    }),
    textField: {
      marginTop: theme.spacing(2)
    }
  });
});

var CreateClient = function CreateClient(_ref) {
  var fields = _ref.fields,
      isClientAdded = _ref.isClientAdded,
      toggleIsClientAdded = _ref.toggleIsClientAdded,
      addNewClientToState = _ref.addNewClientToState;
  var classes = useStyles({});
  var initialNewClientState = fields.map(function (e) {
    return e.fieldName;
  }).reduce(function (o, key) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(o, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, key, ""));
  }, {});
  var user = Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_10__["default"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      submitting = _useState[0],
      setSubmitting = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_6__["useReducer"])(function (state, action) {
    switch (action.type) {
      case "onTextChange":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, action.payload.fieldName, action.payload.fieldType === _library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].fieldTypes.number ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.value) : action.payload.value));

      case "addId":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
          _id: generate_unique_id__WEBPACK_IMPORTED_MODULE_9___default()({
            length: 24,
            useNumbers: true,
            useLetters: false,
            includeSymbols: ["a", "b", "c", "d", "e", "f"]
          })
        });

      case "addDate":
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, "Date added", moment__WEBPACK_IMPORTED_MODULE_7___default()().format("llll")));

      case "clear":
        return {
          initialNewClientState: initialNewClientState
        };

      default:
        return state;
    }
  }, initialNewClientState),
      newClient = _useReducer[0],
      setNewClient = _useReducer[1];

  var onChange = function onChange(event) {
    console.log(event.target);
    console.log(newClient);
    setNewClient({
      type: "onTextChange",
      payload: {
        fieldName: event.target.name,
        value: event.target.value,
        fieldType: event.target.type
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    //trigger side effect when submitting state is changed and its is true
    submitting ? submitNewClient() : null;
  }, [submitting]);

  var onSubmit = function onSubmit(e) {
    // on Button Click prepare client object to be ready to send
    e.preventDefault();
    setNewClient({
      type: "addDate"
    });
    setNewClient({
      type: "addId"
    }); // change submitting state to trigger effect with POST req.

    setSubmitting(true);
  };

  var submitNewClient =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var clientRes, clientData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default()({
                method: "POST",
                data: newClient,
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].serverURL, "/clients"),
                params: {
                  key: user.user.userkey
                },
                responseType: "json"
              });

            case 2:
              clientRes = _context.sent;
              _context.next = 5;
              return clientRes.data;

            case 5:
              clientData = _context.sent;

              if (clientData.msg === _library_globalVariables__WEBPACK_IMPORTED_MODULE_12__["default"].msgSuccess) {
                // add client data to clients state for table update
                addNewClientToState(newClient); // reset newClient state

                setNewClient({
                  type: "clear"
                }); // hide form

                toggleIsClientAdded(); //reset submitting

                setSubmitting(false);
              } else {
                alert(_library_languages__WEBPACK_IMPORTED_MODULE_13__["default"].en.somethingWentWrong);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submitNewClient() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onCancel = function onCancel() {
    setNewClient({
      type: "clear"
    });
    toggleIsClientAdded();
  };

  return isClientAdded ? __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.formWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "h4",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_13__["default"].en.addNewClient), __jsx("form", {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_ClientForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fields: fields,
    onChange: onChange,
    newClient: newClient,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_15__["default"], {
    display: "flex",
    justifyContent: "flex-end",
    mt: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "contained",
    color: "secondary",
    style: {
      marginRight: "1rem"
    },
    onClick: onCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_13__["default"].en.cancel), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "contained",
    color: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_13__["default"].en.save)))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (CreateClient);

/***/ })

})
//# sourceMappingURL=[key].js.b7f2d660dcc84e7d3281.hot-update.js.map