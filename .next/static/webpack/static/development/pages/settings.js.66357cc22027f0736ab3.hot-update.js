webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/CustomFieldsList.tsx":
/*!*****************************************!*\
  !*** ./components/CustomFieldsList.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/CustomFieldsList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import ListItemText from "@material-ui/core/ListItemText";

 // import ListItem from "@material-ui/core/ListItem";



var CustomFields = function CustomFields(_ref) {
  var fields = _ref.fields,
      setupEditedField = _ref.setupEditedField,
      deleteField = _ref.deleteField;
  var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
    card: {
      textAlign: "center",
      height: "100%",
      minWidth: "300px"
    },
    list: {
      listStyleType: "disc"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  });
  var classes = useStyles({});
  var separatedCustomFields = fields.filter(function (_ref2) {
    var fieldPermanent = _ref2.fieldPermanent;
    return !fieldPermanent;
  }).map(function (_ref3) {
    var fieldName = _ref3.fieldName,
        _id = _ref3._id,
        fieldType = _ref3.fieldType,
        fieldOptions = _ref3.fieldOptions;
    var customFieldNameFormated = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_1__["default"](fieldName.toLowerCase()).firstCharUpperCase().getString();

    var optionsMap = function optionsMap() {
      return fieldOptions.length > 0 ? fieldOptions.map(function (e) {
        return __jsx(ListItem, {
          key: e.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, __jsx(ListItemText, {
          primary: e.value.toLowerCase(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }));
      }) : null;
    };

    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
      item: true,
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h5",
      component: "h3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, customFieldNameFormated), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.pos,
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "(", fieldType.toLowerCase(), ")"), fieldType === "select" ? __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.list,
      dense: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }) : null, __jsx("button", {
      onClick: function onClick() {
        return setupEditedField({
          fieldName: customFieldNameFormated,
          fieldType: fieldType,
          fieldPermanent: false,
          fieldOptions: fieldOptions
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Edit field"), __jsx("button", {
      onClick: deleteField,
      id: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Delete field"))));
  });
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, separatedCustomFields);
};

/* harmony default export */ __webpack_exports__["default"] = (CustomFields);

/***/ })

})
//# sourceMappingURL=settings.js.66357cc22027f0736ab3.hot-update.js.map