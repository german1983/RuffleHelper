/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/src/index.tsx","vendors","react","material-ui"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/assets/fonts/rafflesli.woff":
/*!*********************************************!*\
  !*** ./app/src/assets/fonts/rafflesli.woff ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/rafflesli.woff";

/***/ }),

/***/ "./app/src/assets/fonts/rafflesli.woff2":
/*!**********************************************!*\
  !*** ./app/src/assets/fonts/rafflesli.woff2 ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/rafflesli.woff2";

/***/ }),

/***/ "./app/src/assets/fonts/raffleslibol.woff":
/*!************************************************!*\
  !*** ./app/src/assets/fonts/raffleslibol.woff ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/raffleslibol.woff";

/***/ }),

/***/ "./app/src/assets/fonts/raffleslibol.woff2":
/*!*************************************************!*\
  !*** ./app/src/assets/fonts/raffleslibol.woff2 ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/raffleslibol.woff2";

/***/ }),

/***/ "./app/src/assets/fonts/raffleslim_black.woff":
/*!****************************************************!*\
  !*** ./app/src/assets/fonts/raffleslim_black.woff ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/raffleslim_black.woff";

/***/ }),

/***/ "./app/src/assets/fonts/raffleslim_black.woff2":
/*!*****************************************************!*\
  !*** ./app/src/assets/fonts/raffleslim_black.woff2 ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/raffleslim_black.woff2";

/***/ }),

/***/ "./app/src/components/common/Constants.ts":
/*!************************************************!*\
  !*** ./app/src/components/common/Constants.ts ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var languages;
(function (languages) {
    languages["FRENCH"] = "fr";
    languages["ENGLISH"] = "en";
})(languages = exports.languages || (exports.languages = {}));


/***/ }),

/***/ "./app/src/index.tsx":
/*!***************************!*\
  !*** ./app/src/index.tsx ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const ReactDOM = __importStar(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
const main_1 = __importDefault(__webpack_require__(/*! ./main */ "./app/src/main.tsx"));
const configureStore_1 = __importDefault(__webpack_require__(/*! ./store/configureStore */ "./app/src/store/configureStore.ts"));
// import * as serviceWorker from 'src/serviceWorker';
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore_1.default(initialState);
ReactDOM.render(React.createElement(main_1.default, { store: store }), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://create-react-app.dev/docs/making-a-progressive-web-app/
// serviceWorker.unregister();


/***/ }),

/***/ "./app/src/main.tsx":
/*!**************************!*\
  !*** ./app/src/main.tsx ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
// Application Theme
const theme_1 = __importDefault(__webpack_require__(/*! ./styles/theme */ "./app/src/styles/theme.ts"));
__webpack_require__(/*! ./styles/main.scss */ "./app/src/styles/main.scss");
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.fetchConfig = () => {
            return axios_1.default.get('/manifest.json').then((response) => {
                return response.data;
            });
        };
        this.state = {
            config: null,
            alertDetails: {
                operationType: "B",
                optionFamily: "C",
                ticker: "",
                strike: "",
                quantity: "1",
                price: "",
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendAlert = this.sendAlert.bind(this);
    }
    componentDidMount() {
        this.fetchConfig().then((data) => {
            this.setState({ config: data });
        });
    }
    render() {
        const { config } = this.state;
        if (!config) {
            return (React.createElement(React.Fragment, null,
                React.createElement(core_1.Dialog, { open: true },
                    React.createElement(core_1.DialogContent, null,
                        React.createElement(core_1.DialogContentText, null, "Loading configuration file..."),
                        React.createElement(core_1.CircularProgress, { size: "60", thickness: 4 })))));
        }
        const { store, lang } = this.props;
        console.log("Hey!!");
        return (React.createElement(React.Fragment, null,
            React.createElement(core_1.CssBaseline, null),
            React.createElement(core_1.ThemeProvider, { theme: theme_1.default },
                React.createElement(react_redux_1.Provider, { store: store },
                    React.createElement(core_1.Container, { fixed: true },
                        React.createElement("form", { id: "submitAlert", onSubmit: this.sendAlert },
                            React.createElement("h1", null, "Send Alert"),
                            React.createElement("label", null,
                                "Operation:",
                                React.createElement("select", { value: this.state.alertDetails.operationType, name: "operationType", onChange: this.handleInputChange },
                                    React.createElement("option", { value: "B" }, "BUY"),
                                    React.createElement("option", { value: "S" }, "SELL"))),
                            React.createElement("br", null),
                            React.createElement("label", null,
                                "Ticker: ",
                                React.createElement("input", { type: "text", id: "ticker", name: "ticker", value: this.state.alertDetails.ticker, onChange: this.handleInputChange })),
                            React.createElement("br", null),
                            React.createElement("label", null,
                                "Put/Call?:",
                                React.createElement("select", { value: this.state.alertDetails.optionFamily, name: "optionFamily", onChange: this.handleInputChange },
                                    React.createElement("option", { value: "C" }, "CALL"),
                                    React.createElement("option", { value: "P" }, "PUT"))),
                            React.createElement("br", null),
                            React.createElement("label", null,
                                "Strike: ",
                                React.createElement("input", { type: "text", id: "strike", name: "strike", value: this.state.alertDetails.strike, onChange: this.handleInputChange })),
                            React.createElement("br", null),
                            React.createElement("label", null,
                                "Quantity: ",
                                React.createElement("input", { type: "text", id: "strike", name: "quantity", value: this.state.alertDetails.quantity, onChange: this.handleInputChange })),
                            React.createElement("br", null),
                            React.createElement("label", null,
                                "Price: ",
                                React.createElement("input", { type: "text", id: "strike", name: "price", value: this.state.alertDetails.price, onChange: this.handleInputChange })),
                            React.createElement("br", null),
                            React.createElement("button", { type: "submit" }, "Confirm Alert")),
                        React.createElement("div", null, JSON.stringify(this.state.alertDetails)))))));
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const newAlertDetails = Object.assign({}, this.state.alertDetails, { [name]: value });
        this.setState({
            alertDetails: newAlertDetails,
        });
    }
    sendAlert(data) {
        debugger;
        const axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
        axios.post('/send-alert', this.state.alertDetails);
        // console.log("Hello Alert");
        // console.log(this.state.alertDetails);
        // alert(JSON.stringify(this.state.alertDetails));
    }
}
const mapStateToProps = (state) => ({
    lang: state.lang
});
exports.default = react_redux_1.connect(mapStateToProps)(Main);


/***/ }),

/***/ "./app/src/store/configureStore.ts":
/*!*****************************************!*\
  !*** ./app/src/store/configureStore.ts ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
const redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js"));
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
const redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
// Import the state interface and our combined reducers.
const _1 = __importDefault(__webpack_require__(/*! . */ "./app/src/store/index.ts"));
function configureStore(initialState) {
    // create the composing function for our middlewares
    const composeEnhancers = redux_devtools_extension_1.composeWithDevTools({});
    // We'll create our store with the combined reducers, and the initial Redux state that
    // we'll be passing from our entry point.
    return redux_1.createStore(_1.default, initialState, composeEnhancers(redux_1.applyMiddleware(redux_thunk_1.default)));
}
exports.default = configureStore;


/***/ }),

/***/ "./app/src/store/index.ts":
/*!********************************!*\
  !*** ./app/src/store/index.ts ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
const reducer_1 = __webpack_require__(/*! ./lang/reducer */ "./app/src/store/lang/reducer.ts");
const rootReducer = redux_1.combineReducers({
    lang: reducer_1.langReducer,
});
exports.default = rootReducer;


/***/ }),

/***/ "./app/src/store/lang/reducer.ts":
/*!***************************************!*\
  !*** ./app/src/store/lang/reducer.ts ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __webpack_require__(/*! ../../components/common/Constants */ "./app/src/components/common/Constants.ts");
const types_1 = __importDefault(__webpack_require__(/*! ./types */ "./app/src/store/lang/types.ts"));
// Type-safe initialState
exports.initialState = Constants_1.languages.ENGLISH;
const reducer = (state = exports.initialState, action) => {
    switch (action.type) {
        case types_1.default: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
exports.langReducer = reducer;


/***/ }),

/***/ "./app/src/store/lang/types.ts":
/*!*************************************!*\
  !*** ./app/src/store/lang/types.ts ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const SWITCH_LANGUAGE = '@@language/SWITCH_LANGUAGE';
exports.default = SWITCH_LANGUAGE;


/***/ }),

/***/ "./app/src/styles/main.scss":
/*!**********************************!*\
  !*** ./app/src/styles/main.scss ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/src/styles/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/src/styles/theme.ts":
/*!*********************************!*\
  !*** ./app/src/styles/theme.ts ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
exports.default = styles_1.createMuiTheme({
    palette: {
        common: {
            black: '#000',
            white: '#fff'
        },
        mockup: {
            light: '#f1f1f1',
            main: '#c5d5ed',
            dark: '#7e96d6',
            contrastText: '#fff'
        },
        background: {
            paper: '#fff',
            default: '#fafafa'
        },
        primary: {
            light: '#8996db',
            main: 'rgba(0, 84, 154, 1)',
            dark: '#404faf',
            contrastText: '#fff'
        },
        secondary: {
            light: 'rgba(122, 188, 255, 1)',
            main: 'rgba(3, 128, 255, 1)',
            dark: 'rgba(0, 60, 120, 1)',
            contrastText: '#fff'
        },
        error: {
            light: '#f58383',
            main: 'rgba(189, 32, 37, 1)',
            dark: '#e33f3f',
            contrastText: '#fff'
        },
        text: {
            primary: 'rgba(17, 17, 17, 1)',
            secondary: 'rgba(85, 85, 85, 1)',
            disabled: 'rgba(212, 212, 212, 1)',
            hint: 'rgba(153, 153, 153, 1)'
        }
    }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/src/styles/main.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/src/styles/main.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../assets/fonts/rafflesli.woff2 */ "./app/src/assets/fonts/rafflesli.woff2"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../assets/fonts/rafflesli.woff */ "./app/src/assets/fonts/rafflesli.woff"));
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../assets/fonts/raffleslibol.woff2 */ "./app/src/assets/fonts/raffleslibol.woff2"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../assets/fonts/raffleslibol.woff */ "./app/src/assets/fonts/raffleslibol.woff"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../assets/fonts/raffleslim_black.woff2 */ "./app/src/assets/fonts/raffleslim_black.woff2"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../assets/fonts/raffleslim_black.woff */ "./app/src/assets/fonts/raffleslim_black.woff"));
// Module
exports.push([module.i, "@font-face {\n  font-family: 'RaffleSlim';\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff\");\n  font-weight: 200;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'RaffleSlim';\n  src: url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\");\n  font-weight: 400;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'RaffleSlim';\n  src: url(" + ___CSS_LOADER_URL___4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"woff\");\n  font-weight: 900;\n  font-style: normal; }\n\nbody {\n  background-color: white; }\n", ""]);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9hc3NldHMvZm9udHMvcmFmZmxlc2xpLndvZmYiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9hc3NldHMvZm9udHMvcmFmZmxlc2xpLndvZmYyIiwid2VicGFjazovLy8uL2FwcC9zcmMvYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaWJvbC53b2ZmIiwid2VicGFjazovLy8uL2FwcC9zcmMvYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaWJvbC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2Fzc2V0cy9mb250cy9yYWZmbGVzbGltX2JsYWNrLndvZmYiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9hc3NldHMvZm9udHMvcmFmZmxlc2xpbV9ibGFjay53b2ZmMiIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2NvbXBvbmVudHMvY29tbW9uL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL21haW4udHN4Iiwid2VicGFjazovLy8uL2FwcC9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL3N0b3JlL2xhbmcvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL3N0b3JlL2xhbmcvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzYzNWEiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtR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QXFCO1lBQzNCLElBQUksRUFBRSxTQUFTO1lBQ2YsWUFBWSxFQUFFLE1BQU07U0FDckI7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsd0JBQXdCO1lBQy9CLElBQUksRUFBRSxzQkFBc0I7WUFDNUIsSUFBSSxFQUFFLHFCQUFxQjtZQUMzQixZQUFZLEVBQUUsTUFBTTtTQUNyQjtRQUNELEtBQUssRUFBRTtZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxzQkFBc0I7WUFDNUIsSUFBSSxFQUFFLFNBQVM7WUFDZixZQUFZLEVBQUUsTUFBTTtTQUNyQjtRQUNELElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsU0FBUyxFQUFFLHFCQUFxQjtZQUNoQyxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLElBQUksRUFBRSx3QkFBd0I7U0FDL0I7S0FDRjtDQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzNDSCwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxhQUFhLG1CQUFPLENBQUMsaUhBQXlEO0FBQzlFLHNDQUFzQyxtQkFBTyxDQUFDLCtFQUFpQztBQUMvRSxzQ0FBc0MsbUJBQU8sQ0FBQyw2RUFBZ0M7QUFDOUUsc0NBQXNDLG1CQUFPLENBQUMscUZBQW9DO0FBQ2xGLHNDQUFzQyxtQkFBTyxDQUFDLG1GQUFtQztBQUNqRixzQ0FBc0MsbUJBQU8sQ0FBQyw2RkFBd0M7QUFDdEYsc0NBQXNDLG1CQUFPLENBQUMsMkZBQXVDO0FBQ3JGO0FBQ0EsY0FBYyxRQUFTLGVBQWUsOEJBQThCLHlIQUF5SCxxQkFBcUIsdUJBQXVCLEVBQUUsZ0JBQWdCLDhCQUE4Qix5SEFBeUgscUJBQXFCLHVCQUF1QixFQUFFLGdCQUFnQiw4QkFBOEIseUhBQXlILHFCQUFxQix1QkFBdUIsRUFBRSxVQUFVLDRCQUE0QixFQUFFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2FwcC9zcmMvaW5kZXgudHN4XCIsXCJ2ZW5kb3JzXCIsXCJyZWFjdFwiLFwibWF0ZXJpYWwtdWlcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvZm9udHMvcmFmZmxlc2xpLndvZmZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvZm9udHMvcmFmZmxlc2xpLndvZmYyXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaWJvbC53b2ZmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaWJvbC53b2ZmMlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9mb250cy9yYWZmbGVzbGltX2JsYWNrLndvZmZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvZm9udHMvcmFmZmxlc2xpbV9ibGFjay53b2ZmMlwiOyIsImV4cG9ydCBlbnVtIGxhbmd1YWdlcyB7XG4gIEZSRU5DSCA9ICdmcicsXG4gIEVOR0xJU0ggPSAnZW4nXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4nO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbi8vIGltcG9ydCAqIGFzIHNlcnZpY2VXb3JrZXIgZnJvbSAnc3JjL3NlcnZpY2VXb3JrZXInO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gd2luZG93LklOSVRJQUxfUkVEVVhfU1RBVEU7XHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8TWFpbiBzdG9yZT17c3RvcmV9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxuXHJcbi8vIElmIHlvdSB3YW50IHlvdXIgYXBwIHRvIHdvcmsgb2ZmbGluZSBhbmQgbG9hZCBmYXN0ZXIsIHlvdSBjYW4gY2hhbmdlXHJcbi8vIHVucmVnaXN0ZXIoKSB0byByZWdpc3RlcigpIGJlbG93LiBOb3RlIHRoaXMgY29tZXMgd2l0aCBzb21lIHBpdGZhbGxzLlxyXG4vLyBMZWFybiBtb3JlIGFib3V0IHNlcnZpY2Ugd29ya2VyczogaHR0cHM6Ly9jcmVhdGUtcmVhY3QtYXBwLmRldi9kb2NzL21ha2luZy1hLXByb2dyZXNzaXZlLXdlYi1hcHAvXHJcbi8vIHNlcnZpY2VXb3JrZXIudW5yZWdpc3RlcigpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDb250ZW50LCBEaWFsb2dDb250ZW50VGV4dCwgRGlhbG9nLCBDaXJjdWxhclByb2dyZXNzLCBUaGVtZVByb3ZpZGVyLCBDc3NCYXNlbGluZSwgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9uL0NvbnN0YW50cyc7XHJcblxyXG4vLyBBcHBsaWNhdGlvbiBUaGVtZVxyXG5pbXBvcnQgTWFpblRoZW1lIGZyb20gJy4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5cclxuLy8gQW55IGFkZGl0aW9uYWwgY29tcG9uZW50IHByb3BzIGdvIGhlcmUuXHJcbmludGVyZmFjZSBNYWluUHJvcHMge1xyXG4gIGxhbmc6IGxhbmd1YWdlcztcclxuICBzdG9yZTogU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XHJcbn1cclxuaW50ZXJmYWNlIE1haW5TdGF0ZSB7XHJcbiAgY29uZmlnOiB7XHJcbiAgICB3ZWJBcGlVcmw6IHN0cmluZztcclxuICB9IHwgbnVsbDtcclxuICBhbGVydERldGFpbHM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TWFpblByb3BzLCBNYWluU3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogTWFpblByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb25maWc6IG51bGwsXHJcbiAgICAgIGFsZXJ0RGV0YWlsczoge1xyXG4gICAgICAgIG9wZXJhdGlvblR5cGU6IFwiQlwiLFxyXG4gICAgICAgIG9wdGlvbkZhbWlseTogXCJDXCIsXHJcbiAgICAgICAgdGlja2VyOiBcIlwiLFxyXG4gICAgICAgIHN0cmlrZTogXCJcIixcclxuICAgICAgICBxdWFudGl0eTogXCIxXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiXCIsXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VuZEFsZXJ0ID0gdGhpcy5zZW5kQWxlcnQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5mZXRjaENvbmZpZygpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29uZmlnOiBkYXRhfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZldGNoQ29uZmlnID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL21hbmlmZXN0Lmpzb24nKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPERpYWxvZyBvcGVuPlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nIGNvbmZpZ3VyYXRpb24gZmlsZS4uLlxyXG4gICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT1cIjYwXCIgdGhpY2tuZXNzPXs0fSAvPlxyXG4gICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHtzdG9yZSwgbGFuZ30gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc29sZS5sb2coXCJIZXkhIVwiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e01haW5UaGVtZX0+XHJcbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBmaXhlZD5cclxuICAgICAgICAgICAgICA8Zm9ybSBpZD1cInN1Ym1pdEFsZXJ0XCIgb25TdWJtaXQ9e3RoaXMuc2VuZEFsZXJ0fT5cclxuICAgICAgICAgICAgICAgIDxoMT5TZW5kIEFsZXJ0PC9oMT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgT3BlcmF0aW9uOlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLmFsZXJ0RGV0YWlscy5vcGVyYXRpb25UeXBlfSBuYW1lPVwib3BlcmF0aW9uVHlwZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQlwiPkJVWTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTXCI+U0VMTDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5UaWNrZXI6IDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGlja2VyXCIgbmFtZT1cInRpY2tlclwiIHZhbHVlPXt0aGlzLnN0YXRlLmFsZXJ0RGV0YWlscy50aWNrZXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSAvPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgUHV0L0NhbGw/OlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLmFsZXJ0RGV0YWlscy5vcHRpb25GYW1pbHl9IG5hbWU9XCJvcHRpb25GYW1pbHlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNcIj5DQUxMPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBcIj5QVVQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RyaWtlOiA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInN0cmlrZVwiIG5hbWU9XCJzdHJpa2VcIiB2YWx1ZT17dGhpcy5zdGF0ZS5hbGVydERldGFpbHMuc3RyaWtlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gLz48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UXVhbnRpdHk6IDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic3RyaWtlXCIgbmFtZT1cInF1YW50aXR5XCIgdmFsdWU9e3RoaXMuc3RhdGUuYWxlcnREZXRhaWxzLnF1YW50aXR5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gLz48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJpY2U6IDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic3RyaWtlXCIgbmFtZT1cInByaWNlXCIgdmFsdWU9e3RoaXMuc3RhdGUuYWxlcnREZXRhaWxzLnByaWNlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gLz48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtIEFsZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXY+e0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuYWxlcnREZXRhaWxzKX08L2Rpdj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dENoYW5nZShldmVudDogYW55KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcblxyXG4gICAgY29uc3QgbmV3QWxlcnREZXRhaWxzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5hbGVydERldGFpbHMsIHsgW25hbWVdOiB2YWx1ZSB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhbGVydERldGFpbHM6IG5ld0FsZXJ0RGV0YWlscyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIFxyXG5cclxuXHJcbiAgc2VuZEFsZXJ0KGRhdGE6IGFueSkge1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbiAgICBheGlvcy5wb3N0KCcvc2VuZC1hbGVydCcsIHRoaXMuc3RhdGUuYWxlcnREZXRhaWxzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiSGVsbG8gQWxlcnRcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFsZXJ0RGV0YWlscyk7XHJcbiAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmFsZXJ0RGV0YWlscykpO1xyXG4gIH1cclxufVxyXG5cclxudHlwZSBTdGF0ZVRvUHJvcHMgPSB7XHJcbiAgbGFuZzogbGFuZ3VhZ2VzO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKTogU3RhdGVUb1Byb3BzID0+ICh7XHJcbiAgbGFuZzogc3RhdGUubGFuZ1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNYWluKTtcclxuIiwiaW1wb3J0IHtTdG9yZSwgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5cbi8vIFdlJ2xsIGJlIHVzaW5nIFJlZHV4IERldnRvb2xzLiBXZSBjYW4gdXNlIHRoZSBgY29tcG9zZVdpdGhEZXZUb29scygpYFxuLy8gZGlyZWN0aXZlIHNvIHdlIGNhbiBwYXNzIG91ciBtaWRkbGV3YXJlIGFsb25nIHdpdGggaXRcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcblxuLy8gSW1wb3J0IHRoZSBzdGF0ZSBpbnRlcmZhY2UgYW5kIG91ciBjb21iaW5lZCByZWR1Y2Vycy5cbmltcG9ydCByb290UmVkdWNlciwge0FwcGxpY2F0aW9uU3RhdGV9IGZyb20gJy4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpOiBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPiB7XG4gIC8vIGNyZWF0ZSB0aGUgY29tcG9zaW5nIGZ1bmN0aW9uIGZvciBvdXIgbWlkZGxld2FyZXNcbiAgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoe30pO1xuXG4gIC8vIFdlJ2xsIGNyZWF0ZSBvdXIgc3RvcmUgd2l0aCB0aGUgY29tYmluZWQgcmVkdWNlcnMsIGFuZCB0aGUgaW5pdGlhbCBSZWR1eCBzdGF0ZSB0aGF0XG4gIC8vIHdlJ2xsIGJlIHBhc3NpbmcgZnJvbSBvdXIgZW50cnkgcG9pbnQuXG4gIHJldHVybiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKSk7XG59XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0NvbnN0YW50cyc7XG5pbXBvcnQgeyBsYW5nUmVkdWNlciB9IGZyb20gJy4vbGFuZy9yZWR1Y2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcbiAgcmVhZG9ubHkgbGFuZzogbGFuZ3VhZ2VzO1xufVxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxhbmc6IGxhbmdSZWR1Y2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHtSZWR1Y2VyfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Db25zdGFudHMnO1xuaW1wb3J0IFNXSVRDSF9MQU5HVUFHRSBmcm9tICcuL3R5cGVzJztcblxuLy8gVHlwZS1zYWZlIGluaXRpYWxTdGF0ZVxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogbGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzLkVOR0xJU0g7XG5cbmNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8bGFuZ3VhZ2VzPiA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNXSVRDSF9MQU5HVUFHRToge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59O1xuXG4vLyBJbnN0ZWFkIG9mIHVzaW5nIGRlZmF1bHQgZXhwb3J0LCB3ZSB1c2UgbmFtZWQgZXhwb3J0cy4gVGhhdCB3YXkgd2UgY2FuIGdyb3VwIHRoZXNlIGV4cG9ydHNcbi8vIGluc2lkZSB0aGUgYGluZGV4LmpzYCBmb2xkZXIuXG5leHBvcnQge3JlZHVjZXIgYXMgbGFuZ1JlZHVjZXJ9OyIsImltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Db25zdGFudHNcIjtcblxuY29uc3QgU1dJVENIX0xBTkdVQUdFID0gJ0BAbGFuZ3VhZ2UvU1dJVENIX0xBTkdVQUdFJztcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0Y2hMYW5ndWFnZUFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBTV0lUQ0hfTEFOR1VBR0U7XG4gIHBheWxvYWQ6IGxhbmd1YWdlcztcbn1cblxuZXhwb3J0IHR5cGUgVXNlckFjdGlvblR5cGVzID0gU3dpdGNoTGFuZ3VhZ2VBY3Rpb247XG5cbmV4cG9ydCBkZWZhdWx0IFNXSVRDSF9MQU5HVUFHRTsiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJpbXBvcnQge2NyZWF0ZU11aVRoZW1lfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBjb21tb246IHtcbiAgICAgIGJsYWNrOiAnIzAwMCcsXG4gICAgICB3aGl0ZTogJyNmZmYnXG4gICAgfSxcbiAgICBtb2NrdXA6IHtcbiAgICAgIGxpZ2h0OiAnI2YxZjFmMScsXG4gICAgICBtYWluOiAnI2M1ZDVlZCcsXG4gICAgICBkYXJrOiAnIzdlOTZkNicsXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmJ1xuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgcGFwZXI6ICcjZmZmJyxcbiAgICAgIGRlZmF1bHQ6ICcjZmFmYWZhJ1xuICAgIH0sXG4gICAgcHJpbWFyeToge1xuICAgICAgbGlnaHQ6ICcjODk5NmRiJyxcbiAgICAgIG1haW46ICdyZ2JhKDAsIDg0LCAxNTQsIDEpJyxcbiAgICAgIGRhcms6ICcjNDA0ZmFmJyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGxpZ2h0OiAncmdiYSgxMjIsIDE4OCwgMjU1LCAxKScsXG4gICAgICBtYWluOiAncmdiYSgzLCAxMjgsIDI1NSwgMSknLFxuICAgICAgZGFyazogJ3JnYmEoMCwgNjAsIDEyMCwgMSknLFxuICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZidcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBsaWdodDogJyNmNTgzODMnLFxuICAgICAgbWFpbjogJ3JnYmEoMTg5LCAzMiwgMzcsIDEpJyxcbiAgICAgIGRhcms6ICcjZTMzZjNmJyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBwcmltYXJ5OiAncmdiYSgxNywgMTcsIDE3LCAxKScsXG4gICAgICBzZWNvbmRhcnk6ICdyZ2JhKDg1LCA4NSwgODUsIDEpJyxcbiAgICAgIGRpc2FibGVkOiAncmdiYSgyMTIsIDIxMiwgMjEyLCAxKScsXG4gICAgICBoaW50OiAncmdiYSgxNTMsIDE1MywgMTUzLCAxKSdcbiAgICB9XG4gIH1cbn0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaS53b2ZmMlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9hc3NldHMvZm9udHMvcmFmZmxlc2xpLndvZmZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaWJvbC53b2ZmMlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9hc3NldHMvZm9udHMvcmFmZmxlc2xpYm9sLndvZmZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaW1fYmxhY2sud29mZjJcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaW1fYmxhY2sud29mZlwiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSYWZmbGVTbGltJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSYWZmbGVTbGltJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSYWZmbGVTbGltJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX180X19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX181X19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG5cIiwgXCJcIl0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==