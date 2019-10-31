webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./reducers/webFormReducer.tsx":
/*!*************************************!*\
  !*** ./reducers/webFormReducer.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");



var webFormReducer = function webFormReducer(state, action) {
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

    case "addVisibleSelectToWF":
      return state.map(function (field) {
        return field.fieldName === action.payload.fieldName ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, {
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

    case "remove":
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

/* harmony default export */ __webpack_exports__["default"] = (webFormReducer);

/***/ })

})
//# sourceMappingURL=[key].js.a308981fb3b1682f3830.hot-update.js.map