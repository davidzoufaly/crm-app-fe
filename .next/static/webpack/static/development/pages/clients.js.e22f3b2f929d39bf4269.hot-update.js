webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/clientTable/TableBody.tsx":
/*!**********************************************!*\
  !*** ./components/clientTable/TableBody.tsx ***!
  \**********************************************/
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
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clientTable/TableBody.tsx";

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
  var tableClients = clients.map(function (e) {
    var tableItem = function tableItem() {
      var items = [];

      for (var key in e) {
        //show only clients data with existing fields
        e[key] !== e._id && fieldNames.includes(key) ? items.push(__jsx("td", {
          key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
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
        lineNumber: 43
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("input", {
      type: "checkbox",
      checked: e.isChecked,
      onChange: function onChange() {
        return handleCheckbox(e._id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), tableItem(), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/clients/[id]",
      as: "/clients/".concat(e._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Go"))));
  });
  return tableClients;
};

/* harmony default export */ __webpack_exports__["default"] = (TableBody);

/***/ })

})
//# sourceMappingURL=clients.js.e22f3b2f929d39bf4269.hot-update.js.map