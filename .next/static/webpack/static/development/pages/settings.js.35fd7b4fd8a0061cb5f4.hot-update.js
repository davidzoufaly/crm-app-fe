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
  // let items: any = [];
  // for (let i = 0; i < options.length; i++) {
  //   items.push(
  //     <div key={i}>
  //       <input type="text" id={i.toString()}/>
  //       <button id={i.toString()}>
  //         X
  //       </button>
  //     </div>
  //   );
  // }

  options.map(function (e) {
    console.log(e.id); // <div key={e.id}>
    //   <input type="text" />
    //   <button id={e.id}>X</button>
    // </div>;
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SelectFieldOptions);

/***/ })

})
//# sourceMappingURL=settings.js.35fd7b4fd8a0061cb5f4.hot-update.js.map