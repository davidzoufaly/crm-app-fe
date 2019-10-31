webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./components/settings/webform/WebFormButtons.tsx":
/*!********************************************************!*\
  !*** ./components/settings/webform/WebFormButtons.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/GetApp */ "./node_modules/@material-ui/icons/GetApp.js");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/components/settings/webform/WebFormButtons.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var WebFormButtons = function WebFormButtons(_ref) {
  var webFields = _ref.webFields;
  var user = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var showTip = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var onDownload =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, url, link;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                method: "GET",
                url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].serverURL, "/webform/"),
                params: {
                  key: user.user.userkey
                },
                data: webFields,
                responseType: "blob"
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return window.URL.createObjectURL(new Blob([res.data]));

            case 5:
              url = _context.sent;
              _context.next = 8;
              return document.createElement("a");

            case 8:
              link = _context.sent;
              link.href = url;
              link.setAttribute("download", "crm-form.js");
              document.body.appendChild(link);
              link.click();
              showTip.current.style.display = "block";

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onDownload() {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    ref: showTip,
    style: {
      display: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_6__["default"].en.webFormTip), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    display: "flex",
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: onDownload,
    variant: "contained",
    color: "primary",
    startIcon: __jsx(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_6__["default"].en.donwloadForm)));
};

/* harmony default export */ __webpack_exports__["default"] = (WebFormButtons);

/***/ })

})
//# sourceMappingURL=[key].js.20a455f63ed4a8a255b2.hot-update.js.map