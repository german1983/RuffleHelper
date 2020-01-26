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
        this.state = { config: null };
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
                        "Aca estamos",
                        React.createElement("div", null, JSON.stringify(config)),
                        React.createElement("div", null, lang))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9hc3NldHMvZm9udHMvcmFmZmxlc2xpLndvZmYiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9hc3NldHMvZm9udHMvcmFmZmxlc2xpLndvZmYyIiwid2VicGFjazovLy8uL2FwcC9zcmMvYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaWJvbC53b2ZmIiwid2VicGFjazovLy8uL2FwcC9zcmMvYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaWJvbC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2Fzc2V0cy9mb250cy9yYWZmbGVzbGltX2JsYWNrLndvZmYiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9hc3NldHMvZm9udHMvcmFmZmxlc2xpbV9ibGFjay53b2ZmMiIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2NvbXBvbmVudHMvY29tbW9uL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL21haW4udHN4Iiwid2VicGFjazovLy8uL2FwcC9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL3N0b3JlL2xhbmcvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL3N0b3JlL2xhbmcvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzYzNWEiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtR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WUFDbEMsSUFBSSxFQUFFLHdCQUF3QjtTQUMvQjtLQUNGO0NBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDM0NILDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxpSEFBeUQ7QUFDOUUsc0NBQXNDLG1CQUFPLENBQUMsK0VBQWlDO0FBQy9FLHNDQUFzQyxtQkFBTyxDQUFDLDZFQUFnQztBQUM5RSxzQ0FBc0MsbUJBQU8sQ0FBQyxxRkFBb0M7QUFDbEYsc0NBQXNDLG1CQUFPLENBQUMsbUZBQW1DO0FBQ2pGLHNDQUFzQyxtQkFBTyxDQUFDLDZGQUF3QztBQUN0RixzQ0FBc0MsbUJBQU8sQ0FBQywyRkFBdUM7QUFDckY7QUFDQSxjQUFjLFFBQVMsZUFBZSw4QkFBOEIseUhBQXlILHFCQUFxQix1QkFBdUIsRUFBRSxnQkFBZ0IsOEJBQThCLHlIQUF5SCxxQkFBcUIsdUJBQXVCLEVBQUUsZ0JBQWdCLDhCQUE4Qix5SEFBeUgscUJBQXFCLHVCQUF1QixFQUFFLFVBQVUsNEJBQTRCLEVBQUUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXBwL3NyYy9pbmRleC50c3hcIixcInZlbmRvcnNcIixcInJlYWN0XCIsXCJtYXRlcmlhbC11aVwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9mb250cy9yYWZmbGVzbGkud29mZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9mb250cy9yYWZmbGVzbGkud29mZjJcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvZm9udHMvcmFmZmxlc2xpYm9sLndvZmZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvZm9udHMvcmFmZmxlc2xpYm9sLndvZmYyXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaW1fYmxhY2sud29mZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9mb250cy9yYWZmbGVzbGltX2JsYWNrLndvZmYyXCI7IiwiZXhwb3J0IGVudW0gbGFuZ3VhZ2VzIHtcbiAgRlJFTkNIID0gJ2ZyJyxcbiAgRU5HTElTSCA9ICdlbidcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCBNYWluIGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuLy8gaW1wb3J0ICogYXMgc2VydmljZVdvcmtlciBmcm9tICdzcmMvc2VydmljZVdvcmtlcic7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB3aW5kb3cuSU5JVElBTF9SRURVWF9TVEFURTtcclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxNYWluIHN0b3JlPXtzdG9yZX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xyXG5cclxuLy8gSWYgeW91IHdhbnQgeW91ciBhcHAgdG8gd29yayBvZmZsaW5lIGFuZCBsb2FkIGZhc3RlciwgeW91IGNhbiBjaGFuZ2VcclxuLy8gdW5yZWdpc3RlcigpIHRvIHJlZ2lzdGVyKCkgYmVsb3cuIE5vdGUgdGhpcyBjb21lcyB3aXRoIHNvbWUgcGl0ZmFsbHMuXHJcbi8vIExlYXJuIG1vcmUgYWJvdXQgc2VydmljZSB3b3JrZXJzOiBodHRwczovL2NyZWF0ZS1yZWFjdC1hcHAuZGV2L2RvY3MvbWFraW5nLWEtcHJvZ3Jlc3NpdmUtd2ViLWFwcC9cclxuLy8gc2VydmljZVdvcmtlci51bnJlZ2lzdGVyKCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuL3N0b3JlJztcclxuXHJcbmltcG9ydCB7IERpYWxvZ0NvbnRlbnQsIERpYWxvZ0NvbnRlbnRUZXh0LCBEaWFsb2csIENpcmN1bGFyUHJvZ3Jlc3MsIFRoZW1lUHJvdmlkZXIsIENzc0Jhc2VsaW5lLCBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4vY29tcG9uZW50cy9jb21tb24vQ29uc3RhbnRzJztcclxuXHJcbi8vIEFwcGxpY2F0aW9uIFRoZW1lXHJcbmltcG9ydCBNYWluVGhlbWUgZnJvbSAnLi9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XHJcblxyXG4vLyBBbnkgYWRkaXRpb25hbCBjb21wb25lbnQgcHJvcHMgZ28gaGVyZS5cclxuaW50ZXJmYWNlIE1haW5Qcm9wcyB7XHJcbiAgbGFuZzogbGFuZ3VhZ2VzO1xyXG4gIHN0b3JlOiBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPjtcclxufVxyXG5pbnRlcmZhY2UgTWFpblN0YXRlIHtcclxuICBjb25maWc6IHtcclxuICAgIHdlYkFwaVVybDogc3RyaW5nO1xyXG4gIH0gfCBudWxsO1xyXG59XHJcblxyXG5jbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE1haW5Qcm9wcywgTWFpblN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IE1haW5Qcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgY29uZmlnOiBudWxsIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZmV0Y2hDb25maWcoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbmZpZzogZGF0YX0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmZXRjaENvbmZpZyA9ICgpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy9tYW5pZmVzdC5qc29uJykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGlmICghY29uZmlnKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxEaWFsb2cgb3Blbj5cclxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgTG9hZGluZyBjb25maWd1cmF0aW9uIGZpbGUuLi5cclxuICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9XCI2MFwiIHRoaWNrbmVzcz17NH0gLz5cclxuICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB7c3RvcmUsIGxhbmd9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnNvbGUubG9nKFwiSGV5ISFcIik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtNYWluVGhlbWV9PlxyXG4gICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgZml4ZWQ+XHJcbiAgICAgICAgICAgICAgQWNhIGVzdGFtb3NcclxuICAgICAgICAgICAgICA8ZGl2PntKU09OLnN0cmluZ2lmeShjb25maWcpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e2xhbmd9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxudHlwZSBTdGF0ZVRvUHJvcHMgPSB7XHJcbiAgbGFuZzogbGFuZ3VhZ2VzO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKTogU3RhdGVUb1Byb3BzID0+ICh7XHJcbiAgbGFuZzogc3RhdGUubGFuZ1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNYWluKTtcclxuIiwiaW1wb3J0IHtTdG9yZSwgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5cbi8vIFdlJ2xsIGJlIHVzaW5nIFJlZHV4IERldnRvb2xzLiBXZSBjYW4gdXNlIHRoZSBgY29tcG9zZVdpdGhEZXZUb29scygpYFxuLy8gZGlyZWN0aXZlIHNvIHdlIGNhbiBwYXNzIG91ciBtaWRkbGV3YXJlIGFsb25nIHdpdGggaXRcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcblxuLy8gSW1wb3J0IHRoZSBzdGF0ZSBpbnRlcmZhY2UgYW5kIG91ciBjb21iaW5lZCByZWR1Y2Vycy5cbmltcG9ydCByb290UmVkdWNlciwge0FwcGxpY2F0aW9uU3RhdGV9IGZyb20gJy4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpOiBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPiB7XG4gIC8vIGNyZWF0ZSB0aGUgY29tcG9zaW5nIGZ1bmN0aW9uIGZvciBvdXIgbWlkZGxld2FyZXNcbiAgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoe30pO1xuXG4gIC8vIFdlJ2xsIGNyZWF0ZSBvdXIgc3RvcmUgd2l0aCB0aGUgY29tYmluZWQgcmVkdWNlcnMsIGFuZCB0aGUgaW5pdGlhbCBSZWR1eCBzdGF0ZSB0aGF0XG4gIC8vIHdlJ2xsIGJlIHBhc3NpbmcgZnJvbSBvdXIgZW50cnkgcG9pbnQuXG4gIHJldHVybiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKSk7XG59XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0NvbnN0YW50cyc7XG5pbXBvcnQgeyBsYW5nUmVkdWNlciB9IGZyb20gJy4vbGFuZy9yZWR1Y2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcbiAgcmVhZG9ubHkgbGFuZzogbGFuZ3VhZ2VzO1xufVxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxhbmc6IGxhbmdSZWR1Y2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHtSZWR1Y2VyfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Db25zdGFudHMnO1xuaW1wb3J0IFNXSVRDSF9MQU5HVUFHRSBmcm9tICcuL3R5cGVzJztcblxuLy8gVHlwZS1zYWZlIGluaXRpYWxTdGF0ZVxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogbGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzLkVOR0xJU0g7XG5cbmNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8bGFuZ3VhZ2VzPiA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNXSVRDSF9MQU5HVUFHRToge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59O1xuXG4vLyBJbnN0ZWFkIG9mIHVzaW5nIGRlZmF1bHQgZXhwb3J0LCB3ZSB1c2UgbmFtZWQgZXhwb3J0cy4gVGhhdCB3YXkgd2UgY2FuIGdyb3VwIHRoZXNlIGV4cG9ydHNcbi8vIGluc2lkZSB0aGUgYGluZGV4LmpzYCBmb2xkZXIuXG5leHBvcnQge3JlZHVjZXIgYXMgbGFuZ1JlZHVjZXJ9OyIsImltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Db25zdGFudHNcIjtcblxuY29uc3QgU1dJVENIX0xBTkdVQUdFID0gJ0BAbGFuZ3VhZ2UvU1dJVENIX0xBTkdVQUdFJztcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0Y2hMYW5ndWFnZUFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBTV0lUQ0hfTEFOR1VBR0U7XG4gIHBheWxvYWQ6IGxhbmd1YWdlcztcbn1cblxuZXhwb3J0IHR5cGUgVXNlckFjdGlvblR5cGVzID0gU3dpdGNoTGFuZ3VhZ2VBY3Rpb247XG5cbmV4cG9ydCBkZWZhdWx0IFNXSVRDSF9MQU5HVUFHRTsiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJpbXBvcnQge2NyZWF0ZU11aVRoZW1lfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBjb21tb246IHtcbiAgICAgIGJsYWNrOiAnIzAwMCcsXG4gICAgICB3aGl0ZTogJyNmZmYnXG4gICAgfSxcbiAgICBtb2NrdXA6IHtcbiAgICAgIGxpZ2h0OiAnI2YxZjFmMScsXG4gICAgICBtYWluOiAnI2M1ZDVlZCcsXG4gICAgICBkYXJrOiAnIzdlOTZkNicsXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmJ1xuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgcGFwZXI6ICcjZmZmJyxcbiAgICAgIGRlZmF1bHQ6ICcjZmFmYWZhJ1xuICAgIH0sXG4gICAgcHJpbWFyeToge1xuICAgICAgbGlnaHQ6ICcjODk5NmRiJyxcbiAgICAgIG1haW46ICdyZ2JhKDAsIDg0LCAxNTQsIDEpJyxcbiAgICAgIGRhcms6ICcjNDA0ZmFmJyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGxpZ2h0OiAncmdiYSgxMjIsIDE4OCwgMjU1LCAxKScsXG4gICAgICBtYWluOiAncmdiYSgzLCAxMjgsIDI1NSwgMSknLFxuICAgICAgZGFyazogJ3JnYmEoMCwgNjAsIDEyMCwgMSknLFxuICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZidcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBsaWdodDogJyNmNTgzODMnLFxuICAgICAgbWFpbjogJ3JnYmEoMTg5LCAzMiwgMzcsIDEpJyxcbiAgICAgIGRhcms6ICcjZTMzZjNmJyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBwcmltYXJ5OiAncmdiYSgxNywgMTcsIDE3LCAxKScsXG4gICAgICBzZWNvbmRhcnk6ICdyZ2JhKDg1LCA4NSwgODUsIDEpJyxcbiAgICAgIGRpc2FibGVkOiAncmdiYSgyMTIsIDIxMiwgMjEyLCAxKScsXG4gICAgICBoaW50OiAncmdiYSgxNTMsIDE1MywgMTUzLCAxKSdcbiAgICB9XG4gIH1cbn0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaS53b2ZmMlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9hc3NldHMvZm9udHMvcmFmZmxlc2xpLndvZmZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaWJvbC53b2ZmMlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9hc3NldHMvZm9udHMvcmFmZmxlc2xpYm9sLndvZmZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaW1fYmxhY2sud29mZjJcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaW1fYmxhY2sud29mZlwiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSYWZmbGVTbGltJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSYWZmbGVTbGltJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSYWZmbGVTbGltJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX180X19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX181X19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG5cIiwgXCJcIl0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==