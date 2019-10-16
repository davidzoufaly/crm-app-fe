webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/ClientList.tsx":
/*!***********************************!*\
  !*** ./components/ClientList.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/ClientList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ClientsList = function ClientsList(_ref) {
  var clients = _ref.clients,
      reverse = _ref.reverse,
      sort = _ref.sort;
  reverse ? clients.sort(function (a, b) {
    return b[sort] > a[sort] ? 1 : -1;
  }) : clients.sort(function (a, b) {
    return b[sort] > a[sort] ? -1 : 1;
  });
  var tableClients = clients.map(function (e) {
    var tableItem = function tableItem() {
      for (var key in e) {
        return e[key];
      }
    };

    return __jsx("tr", {
      key: e._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, tableItem()), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/clients/[id]",
      as: "/clients/".concat(e._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Go to client"))));
  });
  return tableClients;
};

/* harmony default export */ __webpack_exports__["default"] = (ClientsList);

/***/ })

})
//# sourceMappingURL=clients.js.de77b924772736c575f0.hot-update.js.map