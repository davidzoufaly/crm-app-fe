webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/clients/TableBody.tsx":
/*!******************************************!*\
  !*** ./components/clients/TableBody.tsx ***!
  \******************************************/
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
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/TableBody.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //TODO Filtrují se i polé které neexistujou na straně body

var TableBody = function TableBody(_ref) {
  var clients = _ref.clients,
      reverse = _ref.reverse,
      sort = _ref.sort,
      fields = _ref.fields,
      handleCheckbox = _ref.handleCheckbox;

  if (fields.some(function (e) {
    return e.fieldName === sort && e.fieldType === "number";
  })) {
    if (reverse) {
      clients.sort(function (a, b) {
        return b[sort] - a[sort];
      });
    } else {
      clients.sort(function (a, b) {
        return a[sort] - b[sort];
      });
    }
  } else {
    if (reverse) {
      clients.sort(function (a, b) {
        return b[sort] > a[sort] ? -1 : 1;
      });
    } else {
      clients.sort(function (a, b) {
        return b[sort] < a[sort] ? -1 : 1;
      });
    }
  }

  var fieldNames = [];
  fields.forEach(function (e) {
    return fieldNames.push(e.fieldName, e.fieldType);
  });
  var tableClients = clients.map(function (client) {
    var tableItem = function tableItem() {
      var items = [];

      for (var key in client) {
        //show only clients data with existing fields
        if (client[key] !== client._id && fieldNames.includes(key)) {
          items.push(__jsx("td", {
            key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, client[key]));
        } else if (!fieldNames.includes(key)) {
          items.push(__jsx("td", {
            key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }));
        }
      }

      for (var _key in client) {
        //show only clients data with existing fields
        client[_key] !== client._id && fieldNames.includes(_key) ? items.push(__jsx("td", {
          key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, client[_key])) : null;
      } // add checkbox at first position


      items.unshift(__jsx("td", {
        key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("input", {
        type: "checkbox",
        checked: client.isChecked === undefined ? false : client.isChecked,
        onChange: function onChange() {
          return handleCheckbox(client._id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }))); // add profile link at last position

      items.push(__jsx("td", {
        key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/clients/[id]",
        as: "/clients/".concat(client._id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Go"))));
      return items;
    };

    return __jsx("tr", {
      key: client._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, tableItem());
  });
  return tableClients;
};

/* harmony default export */ __webpack_exports__["default"] = (TableBody);

/***/ })

})
//# sourceMappingURL=clients.js.15a62815d6bf39f0bcac.hot-update.js.map