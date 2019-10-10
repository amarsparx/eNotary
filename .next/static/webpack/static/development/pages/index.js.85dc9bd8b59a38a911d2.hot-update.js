webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/typeItIn.js":
/*!********************************!*\
  !*** ./components/typeItIn.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







var _jsxFileName = "/home/sis075/Documents/signature/components/typeItIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var TypeItIn =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TypeItIn, _React$Component);

  function TypeItIn() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TypeItIn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TypeItIn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "nameHandler", function (event) {
      console.log(event.target, '[target]');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TypeItIn, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("h2", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Create your Signature"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        "for": "confirm-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Confirm your name"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        type: "text",
        name: "name",
        id: "confirm-name",
        placeholder: "Confirm your name",
        onChange: function onChange(event) {
          return _this2.nameHandler(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        "for": "confirm-initials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Confirm your initials"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        type: "text",
        name: "initials",
        id: "confirm-initials",
        placeholder: "Confirm your initials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        "for": "confirm-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Preview"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("span", {
        style: {
          border: '12px solid #CCCCCC',
          background: '#ffffff',
          padding: '8px 15px',
          display: 'block'
        },
        className: "name-preview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Joseph Bisaillon"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("span", {
        style: {
          border: '12px solid #CCCCCC',
          background: '#ffffff',
          padding: '8px 15px',
          display: 'inline-block'
        },
        className: "initials-preview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "JB")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "By clicking Accept and Sign, I agree that the signature wil be the electric representation of my signature for all purposewhen I for my agend use themon documents. Including legallybinding documnets, just the same as pen and paper signature.", ' '))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        "for": "change-font",
        style: {
          flex: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Change Font:"), __jsx("select", {
        className: "form-control",
        style: {
          flex: 9
        },
        id: "change-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Man Salva"), __jsx("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Times New Roman"), __jsx("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Google Font #12")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Accept and Sign"))))));
    }
  }]);

  return TypeItIn;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TypeItIn);

/***/ })

})
//# sourceMappingURL=index.js.85dc9bd8b59a38a911d2.hot-update.js.map