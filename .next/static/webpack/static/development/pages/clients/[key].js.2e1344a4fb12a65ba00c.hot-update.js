webpackHotUpdate("static/development/pages/clients/[key].js",{

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
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/clients/TableBody.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var TableBody = function TableBody(_ref) {
  var clients = _ref.clients,
      sort = _ref.sort,
      fields = _ref.fields,
      handleCheckbox = _ref.handleCheckbox;
  var sortBy = sort.sortBy,
      reverse = sort.reverse;
  var user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_3__["default"]); // field we want to filter is type number -> return true and filter it correctly -> 23 > 4

  if (fields.some(function (e) {
    return e.fieldName === sortBy && e.fieldType === "number";
  })) {
    clients.sort(function (a, b) {
      return reverse ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy];
    });
  } else {
    clients.sort(function (a, b) {
      return reverse ? b[sortBy] > a[sortBy] ? -1 : 1 : b[sortBy] < a[sortBy] ? -1 : 1;
    });
  }

  var fieldNames = [];
  fields.forEach(function (e) {
    return fieldNames.push(e.fieldName);
  });
  var tableClients = clients.map(function (client) {
    var items = [];

    for (var i = 0; i < fieldNames.length; i++) {
      items[i] = null;
    }

    var tableItem = function tableItem() {
      for (var key in client) {
        //show only clients data with existing fields
        if (client[key] !== client._id && fieldNames.includes(key)) {
          items[fieldNames.indexOf(key)] = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
            key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, client[key]);
        }
      } // add put checkbox at first position


      items.unshift(__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
        padding: "checkbox",
        key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
        color: "primary",
        checked: !!client.isChecked || client.isChecked,
        onChange: function onChange() {
          return handleCheckbox(client._id);
        },
        inputProps: {
          'aria-label': 'primary checkbox'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }))); // add put profile link at last position

      items.push(__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
        key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/client/[id]/?key=".concat(user.user.userkey),
        as: "/client/".concat(client._id, "/?key=").concat(user.user.userkey),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        startIcon: __jsx(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_5___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, _library_languages__WEBPACK_IMPORTED_MODULE_4__["default"].en.go))));
      items = items.map(function (e) {
        return !!!e ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
          key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }) : e;
      });
      return items;
    };

    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableRow"], {
      key: client._id,
      hover: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, tableItem());
  });
  return tableClients;
};

/* harmony default export */ __webpack_exports__["default"] = (TableBody);

/***/ })

})
//# sourceMappingURL=[key].js.2e1344a4fb12a65ba00c.hot-update.js.map