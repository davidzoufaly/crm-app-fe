webpackHotUpdate("static/development/pages/clients/[id].js",{

/***/ "./pages/clients/[id].tsx":
/*!********************************!*\
  !*** ./pages/clients/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_stringMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions/stringMethods */ "./functions/stringMethods.tsx");


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/clients/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 //TODO: SKRÝVÁNÍ POLÍ CO NEJSOU V DB

var Client = function Client(props) {
  var name = props.data.name;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.title = "".concat(name, " | CRM-APP");
  });

  var fce = function fce() {
    var data = props.data;
    var list = [];

    for (var key in data) {
      var convertedKey = new _functions_stringMethods__WEBPACK_IMPORTED_MODULE_5__["default"](key).splitCamelString().firstCharUpperCase();

      if (key !== "_id" && key !== "name") {
        list.push(__jsx("li", {
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, convertedKey.text, ": ", data[key]));
      }
    }

    return list;
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, name), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, fce()));
};

Client.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_4___default()({
              method: "get",
              url: "http://localhost:8080/api/clients/".concat(id),
              responseType: "json"
            });

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.data;

          case 6:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Client);

/***/ })

})
//# sourceMappingURL=[id].js.0a0435ff3064c9917eea.hot-update.js.map