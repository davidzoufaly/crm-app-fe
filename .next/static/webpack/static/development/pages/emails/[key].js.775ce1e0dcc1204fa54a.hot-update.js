webpackHotUpdate("static/development/pages/emails/[key].js",{

/***/ "./pages/emails/[key].tsx":
/*!********************************!*\
  !*** ./pages/emails/[key].tsx ***!
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! generate-unique-id */ "./node_modules/generate-unique-id/index.js");
/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(generate_unique_id__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/LoadingSpinner */ "./components/LoadingSpinner.tsx");
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/UserContext */ "./components/UserContext.tsx");
/* harmony import */ var _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../library/stringMethods */ "./library/stringMethods.tsx");
/* harmony import */ var _library_globalVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../library/globalVariables */ "./library/globalVariables.tsx");
/* harmony import */ var _library_languages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../library/languages */ "./library/languages.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "/Users/davidzoufaly/code/dp/crm-app-fe/pages/emails/[key].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var Emails = function Emails(_ref) {
  var data = _ref.data,
      emailsCount = _ref.emailsCount;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      initialized = _useState[0],
      setInitialized = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var user = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_8__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var title = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__["default"](router.pathname).removeSlash().removeSlashAndTextAfter().firstCharUpperCase().addStringToEnd(_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].titleSubText).getString();
    document.title = title;
    setInitialized(true);
    user.checkUser();
  }, [router]);
  var tableBody = data.map(function (email) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], {
      key: generate_unique_id__WEBPACK_IMPORTED_MODULE_5___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, email.date), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, email.to.map(function (e) {
      return __jsx("p", {
        key: generate_unique_id__WEBPACK_IMPORTED_MODULE_5___default()(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, e);
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, email.subject), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, email.message.length > 50 ? "".concat(email.message.slice(0, 50), "...") : email.message));
  }).reverse();
  var h1 = new _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__["default"](router.pathname).removeSlash().removeSlashAndTextAfter().firstCharUpperCase().getString();
  return !user.user.signedIn && !initialized ? __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
    component: "h1",
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, h1), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
    variant: "h5",
    gutterBottom: true,
    style: {
      color: "#535658"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, new _library_stringMethods__WEBPACK_IMPORTED_MODULE_9__["default"](_library_languages__WEBPACK_IMPORTED_MODULE_11__["default"].en.sent).firstCharUpperCase().getString(), " ", emailsCount), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    width: "1",
    overflow: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Table"], {
    size: "small",
    style: {
      backgroundColor: "white",
      border: "1px solid #e0e0e0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableHead"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
    variant: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_11__["default"].en.dateAndTime)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
    variant: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_11__["default"].en.to)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
    variant: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_11__["default"].en.subject)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
    variant: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, _library_languages__WEBPACK_IMPORTED_MODULE_11__["default"].en.message)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, tableBody))));
};

Emails.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var res, resEmailsCount, emailsCount, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default()({
              method: "get",
              params: {
                key: context.query.key
              },
              url: "".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].serverURL, "/emails"),
              responseType: "json"
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_4___default()("".concat(_library_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].serverURL, "/emails/count?key=").concat(context.query.key));

          case 5:
            resEmailsCount = _context.sent;
            _context.next = 8;
            return resEmailsCount.data;

          case 8:
            emailsCount = _context.sent;
            _context.next = 11;
            return res.data;

          case 11:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data,
              emailsCount: emailsCount
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Emails);

/***/ })

})
//# sourceMappingURL=[key].js.775ce1e0dcc1204fa54a.hot-update.js.map