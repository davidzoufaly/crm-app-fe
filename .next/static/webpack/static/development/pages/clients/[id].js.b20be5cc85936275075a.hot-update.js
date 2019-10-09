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

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "helperArray", void 0);

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getIndexUpperCase", function () {
    var textInArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(_this.text);

    for (var i = 0; i < textInArray.length; i++) {
      if (textInArray[i] === textInArray[i].toUpperCase()) {
        _this.helperArray.push(i);
      }
    }

    return _this;
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "splitStringByIndex", function () {
    var arrayText = [];

    for (var i = 0; i <= _this.helperArray.length; i++) {
      if (i === 0) {
        //first iteration
        arrayText.push(_this.text.substr(0, _this.helperArray[i]));
      } else if (i > 0 && i < _this.helperArray.length) {
        //iteration in the middle
        arrayText.push(_this.text.substr(_this.helperArray[i - 1], _this.helperArray[i] - _this.helperArray[i - 1]));
      } else if (i === _this.helperArray.length) {
        //last iteration
        arrayText.push(_this.text.substr(_this.helperArray[i - 1]));
      }
    }

    _this.text = arrayText.join(" ");
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
    _this.text = _this.text.replace('/', '');
    return _this;
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "addStringToEnd", function (text) {
    _this.text = _this.text.concat(" ".concat(text));
    return _this;
  });

  this.text = _text;
  this.helperArray = [];
};

;
/* harmony default export */ __webpack_exports__["default"] = (stringMethods);

/***/ })

})
//# sourceMappingURL=[id].js.b20be5cc85936275075a.hot-update.js.map