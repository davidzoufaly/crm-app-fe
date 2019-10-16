webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/TableBody.tsx":
/*!**********************************!*\
  !*** ./components/TableBody.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/TableBody.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //TODO Filtrují se i polé které neexistujou na straně body

var TableBody = function TableBody(_ref) {
  var clients = _ref.clients,
      reverse = _ref.reverse,
      sort = _ref.sort,
      fields = _ref.fields;
  reverse ? clients.sort(function (a, b) {
    return b[sort] > a[sort] ? 1 : -1;
  }) : clients.sort(function (a, b) {
    return b[sort] > a[sort] ? -1 : 1;
  });
  var fieldNames = [];
  fields.forEach(function (e) {
    return fieldNames.push(e.fieldName);
  });
  var tableClients = clients.map(function (e) {
    var tableItem = function tableItem() {
      var items = [];

      for (var key in e) {
        //show only existing fields clients data
        e[key] !== e._id && fieldNames.includes(key) ? items.push(__jsx("td", {
          key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, e[key])) : null;
      }

      return items;
    };

    return __jsx("tr", {
      key: e._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, tableItem(), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/clients/[id]",
      as: "/clients/".concat(e._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Go to client"))));
  });
  return tableClients;
};

/* harmony default export */ __webpack_exports__["default"] = (TableBody);

/***/ })

})
//# sourceMappingURL=clients.js.437380285e79e24e060f.hot-update.js.map