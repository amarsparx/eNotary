webpackHotUpdate("static/development/pages/signature.js",{

/***/ "./components/typeItIn.js":
/*!********************************!*\
  !*** ./components/typeItIn.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "/home/sis075/Documents/signature/components/typeItIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var typeItIn = function typeItIn(props) {
  var fontFamily = ['Dancing Script', 'Pacifico', 'Cookie', 'Sacramento', 'Cedarville', 'Homemade Apple', 'Damion'];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h2", {
    className: "text-center",
    style: {
      marginBottom: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Create your Signature"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "confirm-name",
    style: {
      marginBottom: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Confirm your name"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "name",
    id: "confirm-name",
    placeholder: "Confirm your name",
    onChange: function onChange(event) {
      return props.nameChangeHandler(event);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "confirm-initials",
    style: {
      marginBottom: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Confirm your initials"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "initials",
    id: "confirm-initials",
    placeholder: "Confirm your initials",
    onChange: function onChange(event) {
      return props.initialsNameChangeHandler(event);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "confirm-name",
    style: {
      marginBottom: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Preview"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("span", {
    style: {
      border: '12px solid #CCCCCC',
      background: '#ffffff',
      padding: '8px 15px',
      display: 'block',
      fontWeight: 'bolder',
      fontSize: '50px',
      minHeight: '132px',
      fontFamily: "".concat(props.nameFont)
    },
    className: "name-preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, props.name))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("span", {
    style: {
      border: '12px solid #CCCCCC',
      background: '#ffffff',
      padding: '8px 15px',
      display: 'inline-block',
      fontWeight: 'bolder',
      fontSize: '50px',
      minHeight: '132px',
      minWidth: '200px',
      fontFamily: "".concat(props.nameFont)
    },
    className: "initials-preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, props.initialsName)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "By clicking Accept and Sign, I agree that the signature wil be the electric representation of my signature for all purposewhen I for my agend use themon documents. Including legallybinding documnets, just the same as pen and paper signature.", ' '))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "change-font",
    style: {
      flex: 3,
      marginBottom: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Change Font:"), __jsx("select", {
    className: "form-control",
    style: {
      flex: 9
    },
    id: "change-font",
    onChange: function onChange(event) {
      return props.changeFontHandler(event);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, fontFamily.map(function (fontName) {
    return __jsx("option", {
      key: fontName,
      value: fontName + ',cursive',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, fontName);
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    onClick: props.submitTypeInData,
    style: {
      "float": 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Accept and Sign"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (typeItIn);

/***/ })

})
//# sourceMappingURL=signature.js.c62a74625faa17d9387b.hot-update.js.map