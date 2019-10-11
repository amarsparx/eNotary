module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Modals/SignaturePadModal.js":
/*!************************************************!*\
  !*** ./components/Modals/SignaturePadModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _signature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signature */ "./components/signature.js");
var _jsxFileName = "/home/sis075/Documents/signature/components/Modals/SignaturePadModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class SignaturePadModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      style: {
        zIndex: 4000,
        border: '1px solid'
      },
      show: true,
      onHide: this.props.onHide,
      variant: "primary",
      size: "xl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(_signature__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: this.props.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SignaturePadModal);

/***/ }),

/***/ "./components/drawIt.js":
/*!******************************!*\
  !*** ./components/drawIt.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-signature-canvas */ "react-signature-canvas");
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_signature_canvas__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/sis075/Documents/signature/components/drawIt.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const drawIt = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: e => {
      e.preventDefault();
      props.onSubmit();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Draw Signature")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(react_signature_canvas__WEBPACK_IMPORTED_MODULE_2___default.a, {
    ref: props.sigCanvasRef,
    penColor: "black",
    backgroundColor: "#CCCCCC",
    canvasProps: {
      width: 700,
      height: 150,
      className: 'sigCanvas'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Draw Initials")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(react_signature_canvas__WEBPACK_IMPORTED_MODULE_2___default.a, {
    ref: props.initialsSigCanvasRef,
    penColor: "black",
    backgroundColor: "#CCCCCC",
    canvasProps: {
      width: 250,
      height: 150,
      className: 'sigCanvas'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "By clicking Accept and Sign, I agree that the signature wil be the electric representation of my signature for all purposewhen I for my agend use themon documents. Including legallybinding documnets, just the same as pen and paper signature.", ' '))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    color: "primary float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Accept and Sign")))));
};

/* harmony default export */ __webpack_exports__["default"] = (drawIt);

/***/ }),

/***/ "./components/signature.js":
/*!*********************************!*\
  !*** ./components/signature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _typeItIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typeItIn */ "./components/typeItIn.js");
/* harmony import */ var _drawIt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drawIt */ "./components/drawIt.js");



var _jsxFileName = "/home/sis075/Documents/signature/components/signature.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








class Signature extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  // static defaultProps = {
  //   middleName: ''
  // };
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "toggle", tab => {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "nameChangeHandler", event => {
      this.setState({
        name: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "initialsNameChangeHandler", event => {
      this.setState({
        initialsName: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "changeFontHandler", event => {
      this.setState({
        nameFont: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "submitTypeInData", () => {
      const payloadData = {
        signature: {
          text: this.state.name,
          font: this.state.nameFont
        },
        initials: {
          text: this.state.initialsName,
          font: this.state.nameFont
        }
      };
      return payloadData; // console.log('[TYPE IN DATA PAYLOAD]', payloadData);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "submitDrawSignature", () => {
      try {
        const sigCanvas = this.sigCanvas.current.toDataURL();
        const initialsSigCanvas = this.initialsSigCanvas.current.toDataURL();
        const payloadData = {
          signature: sigCanvas,
          initials: initialsSigCanvas
        };
        this.sigCanvas.current.clear();
        this.initialsSigCanvas.current.clear();
        return payloadData;
      } catch (err) {
        console.error('error caught', err);
      }
    });

    this.tabs = _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()({
      TYPE_IN_IT: _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default()('type-it-in'),
      DRAW_IT: _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default()('draw-it')
    });
    this.sigCanvas = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
    this.initialsSigCanvas = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
    this.state = {
      activeTab: this.tabs.TYPE_IN_IT,
      name: '',
      initialsName: '',
      nameFont: 'Dancing Script, cursive'
    };
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Cedarville+Cursive|Cookie|Damion|Dancing+Script|Homemade+Apple|Pacifico&display=swap",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "/static/css/bootstrap.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: "3",
      style: {
        marginTop: '77px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroupItem"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        active: this.state.activeTab === this.tabs.TYPE_IN_IT
      }),
      onClick: () => {
        this.toggle(this.tabs.TYPE_IN_IT);
      },
      tag: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Type it in"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroupItem"], {
      tag: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        active: this.state.activeTab === this.tabs.DRAW_IT
      }),
      onClick: () => {
        this.toggle(this.tabs.DRAW_IT);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Draw It"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabContent"], {
      activeTab: this.state.activeTab,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
      tabId: this.tabs.TYPE_IN_IT,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx(_typeItIn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      nameChangeHandler: this.nameChangeHandler,
      initialsNameChangeHandler: this.initialsNameChangeHandler,
      changeFontHandler: this.changeFontHandler,
      nameFont: this.state.nameFont,
      name: this.state.name,
      initialsName: this.state.initialsName,
      onSubmit: () => this.props.onSubmit(this.submitTypeInData()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
      tabId: this.tabs.DRAW_IT,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      style: {
        marginBottom: '30px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      sm: "12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("h2", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, "Create your Signature"))), __jsx(_drawIt__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sigCanvasRef: this.sigCanvas,
      initialsSigCanvasRef: this.initialsSigCanvas,
      onSubmit: () => this.props.onSubmit(this.submitDrawSignature()) // onSubmit={this.submitDrawSignature}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    })))))));
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Signature, "propTypes", {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  show: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
});

/* harmony default export */ __webpack_exports__["default"] = (Signature);

/***/ }),

/***/ "./components/typeItIn.js":
/*!********************************!*\
  !*** ./components/typeItIn.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/sis075/Documents/signature/components/typeItIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const typeItIn = props => {
  const fontFamily = ['Dancing Script', 'Pacifico', 'Cookie', 'Cedarville Cursive', 'Homemade Apple', 'Damion'];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("h2", {
    className: "text-center",
    style: {
      marginBottom: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Create your Signature"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: e => {
      e.preventDefault();
      props.onSubmit();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "confirm-name",
    style: {
      marginBottom: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Confirm your name"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "name",
    id: "confirm-name",
    placeholder: "Confirm your name",
    onChange: event => props.nameChangeHandler(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "confirm-initials",
    style: {
      marginBottom: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Confirm your initials"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "initials",
    id: "confirm-initials",
    placeholder: "Confirm your initials",
    onChange: event => props.initialsNameChangeHandler(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "confirm-name",
    style: {
      marginBottom: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Preview"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("span", {
    style: {
      border: '12px solid #CCCCCC',
      background: '#ffffff',
      padding: '8px 15px',
      display: 'block',
      fontWeight: 'bolder',
      fontSize: '50px',
      minHeight: '132px',
      fontFamily: `${props.nameFont}`
    },
    className: "name-preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, props.name))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
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
      fontFamily: `${props.nameFont}`
    },
    className: "initials-preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, props.initialsName)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "By clicking Accept and Sign, I agree that the signature wil be the electric representation of my signature for all purposewhen I for my agend use themon documents. Including legallybinding documnets, just the same as pen and paper signature.", ' '))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "change-font",
    style: {
      flex: 3,
      marginBottom: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "Change Font:"), __jsx("select", {
    className: "form-control",
    style: {
      flex: 9
    },
    id: "change-font",
    onChange: event => props.changeFontHandler(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, fontFamily.map(fontName => {
    return __jsx("option", {
      key: fontName,
      value: fontName + ',cursive',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: undefined
    }, fontName);
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    className: "btn btn-lg btn-primary col-lg-12",
    style: {
      float: 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "Accept and Sign"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (typeItIn);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/signature.js":
/*!****************************!*\
  !*** ./pages/signature.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Modals_SignaturePadModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Modals/SignaturePadModal */ "./components/Modals/SignaturePadModal.js");

var _jsxFileName = "/home/sis075/Documents/signature/pages/signature.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Signature extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", ({
      signature,
      initials
    }) => {
      if (typeof signature === 'string' && typeof initials === 'string') {
        // signature/initials were drawn
        console.log('[DRAW IT DATA]', signature, initials);
      } else {
        // signature/initials were typed
        console.log('[TYPEIN DATA]', signature, initials);
      }
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Modals_SignaturePadModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      show: true,
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signature);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/signature.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sis075/Documents/signature/pages/signature.js */"./pages/signature.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-signature-canvas":
/*!*****************************************!*\
  !*** external "react-signature-canvas" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-signature-canvas");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=signature.js.map