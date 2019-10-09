webpackHotUpdate("static/development/pages/clients/[id].js",{

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

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "camelStringToText", function () {
    _this.text = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(_this.text).map(function (e) {
      return e === e.toUpperCase() ? e = "%-%".concat(e.toLowerCase()) : e;
    }).join("").replace(/%-%/g, " ");
    return _this;
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "firstCharUpperCase", function () {
    _this.text = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(_this.text).map(function (e, i) {
      return i === 0 ? e.toUpperCase() : e;
    }).join("");
    return _this;
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "removeSlash", function () {
    _this.text = _this.text.replace("/", "");
    return _this;
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "addStringToEnd", function (text) {
    _this.text = _this.text + " " + text;
    return _this;
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "textToCamelString", function () {
    var array = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(_this.text.toLowerCase());

    for (var i = 0; i < array.length; i++) {
      if (array[i] === " ") {
        array[i + 1] = array[i + 1].toUpperCase();
        array.splice(i, 1);
      }
    }

    _this.text = array.join("");
    return _this;
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "replaceStringDiacritics", function () {
    _this.text = _this.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return _this;
  });

  this.text = _text;
};

/* harmony default export */ __webpack_exports__["default"] = (stringMethods);

/***/ })

})
//# sourceMappingURL=[id].js.801acb4c3c814bc01553.hot-update.js.map