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
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/CustomFieldsList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












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
    var options = fieldOptions.map(function (e) {
      return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: e.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
        primary: e.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }));
    });
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
      item: true,
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h5",
      component: "h3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, customFieldNameFormated), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.pos,
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "(", fieldType.toLowerCase(), ")"), fieldType === "select" && fieldOptions.length > 0 ? __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.list,
      dense: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, options) : null, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_11__["default"], {
      "aria-label": "edit",
      color: "primary",
      onClick: function onClick() {
        return setupEditedField({
          fieldName: customFieldNameFormated,
          fieldType: fieldType,
          fieldPermanent: false,
          fieldOptions: fieldOptions,
          id: _id
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Edit field"), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_11__["default"], {
      "aria-label": "delete",
      onClick: deleteField,
      id: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })))));
  });
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, separatedCustomFields);
};

/* harmony default export */ __webpack_exports__["default"] = (CustomFields);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fab/Fab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fab/Fab.js ***!
  \*******************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/esm/utils/helpers.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.button, {
      boxSizing: 'border-box',
      minHeight: 36,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      },
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        },
        textDecoration: 'none'
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // assure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    primary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    secondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="extended"`. */
    extended: {
      borderRadius: 48 / 2,
      padding: '0 16px',
      width: 'auto',
      minHeight: 'auto',
      minWidth: 48,
      height: 48,
      '&$sizeSmall': {
        width: 'auto',
        padding: '0 8px',
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      },
      '&$sizeMedium': {
        width: 'auto',
        padding: '0 16px',
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `size="small"``. */
    sizeSmall: {
      width: 40,
      height: 40
    },

    /* Styles applied to the root element if `size="medium"``. */
    sizeMedium: {
      width: 48,
      height: 48
    }
  };
};
var Fab = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Fab(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$size = props.size,
      size = _props$size === void 0 ? 'large' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'round' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, variant !== "round" && classes.extended, size !== 'large' && classes["size".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["capitalize"])(size))], disabled && classes.disabled, {
      primary: classes.primary,
      secondary: classes.secondary,
      inherit: classes.colorInherit
    }[color]),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.focusVisible, focusVisibleClassName),
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.label
  }, children));
});
 true ? Fab.propTypes = {
  /**
   * The content of the button.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['small', 'medium', 'large']),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['round', 'extended'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiFab'
})(Fab));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fab/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fab/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fab */ "./node_modules/@material-ui/core/esm/Fab/Fab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Fab__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

})
//# sourceMappingURL=settings.js.35b3f0de50cf12dd69a1.hot-update.js.map