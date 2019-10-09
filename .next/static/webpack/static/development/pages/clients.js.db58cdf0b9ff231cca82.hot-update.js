webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./functions/stringMethods.tsx":
/*!*************************************!*\
  !*** ./functions/stringMethods.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




var stringMethods = function stringMethods(_text) {
  var _this = this;

  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, stringMethods);

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "text", void 0);

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "splitStringByIndex", function () {
    _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(_this.text).map(function (e) {
      return e === e.toUpperCase() ? e = "%ff%".concat(e.toLowerCase()) : e;
    }).join("").replace(/%ff%/g, " ");

    return _this;
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "firstCharUpperCase", function () {
    var str = _this.text.toLowerCase();

    var firstCharString = str.substr(0, 1).toUpperCase();
    var restString = str.substr(1);
    _this.text = firstCharString + restString;
    return _this;
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "removeSlash", function () {
    _this.text = _this.text.replace("/", "");
    return _this;
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "addStringToEnd", function (text) {
    _this.text = _this.text.concat(" ".concat(text));
    return _this;
  });

  this.text = _text;
};

/* harmony default export */ __webpack_exports__["default"] = (stringMethods);

/***/ })

})
//# sourceMappingURL=clients.js.db58cdf0b9ff231cca82.hot-update.js.map