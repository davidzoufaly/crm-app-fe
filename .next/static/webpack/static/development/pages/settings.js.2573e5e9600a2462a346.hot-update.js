webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/SelectFieldOptions.tsx":
/*!*******************************************!*\
  !*** ./components/SelectFieldOptions.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/SelectFieldOptions.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SelectFieldOptions = function SelectFieldOptions(_ref) {
  var options = _ref.options;
  // const [ options, setOptionObject ] = useState([{}]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // getInputs(options)
    console.log(options);
  }); // const onChange = (e : any) => {
  // setOptionObject([...options, {text: e.target.value, id: e.target.id}])
  // console.log(options);
  // }

  var items = [];

  for (var i = 0; i < options.length; i++) {
    items.push(__jsx("div", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      id: i.toString(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("button", {
      id: i.toString(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "X")));
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, items);
};

/* harmony default export */ __webpack_exports__["default"] = (SelectFieldOptions);

/***/ })

})
//# sourceMappingURL=settings.js.2573e5e9600a2462a346.hot-update.js.map