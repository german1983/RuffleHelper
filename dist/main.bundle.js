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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/file-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open 'C:\\Personal\\RuffleHelper\\app\\src\\assets\\fonts\\rafflesli.woff'");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9hc3NldHMvZm9udHMvcmFmZmxlc2xpLndvZmYyIiwid2VicGFjazovLy8uL2FwcC9zcmMvYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaWJvbC53b2ZmIiwid2VicGFjazovLy8uL2FwcC9zcmMvYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaWJvbC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2Fzc2V0cy9mb250cy9yYWZmbGVzbGltX2JsYWNrLndvZmYiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9hc3NldHMvZm9udHMvcmFmZmxlc2xpbV9ibGFjay53b2ZmMiIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2NvbXBvbmVudHMvY29tbW9uL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL21haW4udHN4Iiwid2VicGFjazovLy8uL2FwcC9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL3N0b3JlL2xhbmcvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL3N0b3JlL2xhbmcvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzYzNWEiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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LG1CQUFPLENBQUMsMkdBQXNEO0FBQ3pGO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLGlIQUF5RDtBQUM5RSxzQ0FBc0MsbUJBQU8sQ0FBQywrRUFBaUM7QUFDL0Usc0NBQXNDLG1CQUFPLENBQUMsNkVBQWdDO0FBQzlFLHNDQUFzQyxtQkFBTyxDQUFDLHFGQUFvQztBQUNsRixzQ0FBc0MsbUJBQU8sQ0FBQyxtRkFBbUM7QUFDakYsc0NBQXNDLG1CQUFPLENBQUMsNkZBQXdDO0FBQ3RGLHNDQUFzQyxtQkFBTyxDQUFDLDJGQUF1QztBQUNyRjtBQUNBLGNBQWMsUUFBUyxlQUFlLDhCQUE4Qix5SEFBeUgscUJBQXFCLHVCQUF1QixFQUFFLGdCQUFnQiw4QkFBOEIseUhBQXlILHFCQUFxQix1QkFBdUIsRUFBRSxnQkFBZ0IsOEJBQThCLHlIQUF5SCxxQkFBcUIsdUJBQXVCLEVBQUUsVUFBVSw0QkFBNEIsRUFBRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hcHAvc3JjL2luZGV4LnRzeFwiLFwidmVuZG9yc1wiLFwicmVhY3RcIixcIm1hdGVyaWFsLXVpXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaS53b2ZmMlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9mb250cy9yYWZmbGVzbGlib2wud29mZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9mb250cy9yYWZmbGVzbGlib2wud29mZjJcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvZm9udHMvcmFmZmxlc2xpbV9ibGFjay53b2ZmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ZvbnRzL3JhZmZsZXNsaW1fYmxhY2sud29mZjJcIjsiLCJleHBvcnQgZW51bSBsYW5ndWFnZXMge1xuICBGUkVOQ0ggPSAnZnInLFxuICBFTkdMSVNIID0gJ2VuJ1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluJztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG4vLyBpbXBvcnQgKiBhcyBzZXJ2aWNlV29ya2VyIGZyb20gJ3NyYy9zZXJ2aWNlV29ya2VyJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHdpbmRvdy5JTklUSUFMX1JFRFVYX1NUQVRFO1xyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPE1haW4gc3RvcmU9e3N0b3JlfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcblxyXG4vLyBJZiB5b3Ugd2FudCB5b3VyIGFwcCB0byB3b3JrIG9mZmxpbmUgYW5kIGxvYWQgZmFzdGVyLCB5b3UgY2FuIGNoYW5nZVxyXG4vLyB1bnJlZ2lzdGVyKCkgdG8gcmVnaXN0ZXIoKSBiZWxvdy4gTm90ZSB0aGlzIGNvbWVzIHdpdGggc29tZSBwaXRmYWxscy5cclxuLy8gTGVhcm4gbW9yZSBhYm91dCBzZXJ2aWNlIHdvcmtlcnM6IGh0dHBzOi8vY3JlYXRlLXJlYWN0LWFwcC5kZXYvZG9jcy9tYWtpbmctYS1wcm9ncmVzc2l2ZS13ZWItYXBwL1xyXG4vLyBzZXJ2aWNlV29ya2VyLnVucmVnaXN0ZXIoKTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4vc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQ29udGVudCwgRGlhbG9nQ29udGVudFRleHQsIERpYWxvZywgQ2lyY3VsYXJQcm9ncmVzcywgVGhlbWVQcm92aWRlciwgQ3NzQmFzZWxpbmUsIENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi9Db25zdGFudHMnO1xyXG5cclxuLy8gQXBwbGljYXRpb24gVGhlbWVcclxuaW1wb3J0IE1haW5UaGVtZSBmcm9tICcuL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcclxuXHJcbi8vIEFueSBhZGRpdGlvbmFsIGNvbXBvbmVudCBwcm9wcyBnbyBoZXJlLlxyXG5pbnRlcmZhY2UgTWFpblByb3BzIHtcclxuICBsYW5nOiBsYW5ndWFnZXM7XHJcbiAgc3RvcmU6IFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+O1xyXG59XHJcbmludGVyZmFjZSBNYWluU3RhdGUge1xyXG4gIGNvbmZpZzoge1xyXG4gICAgd2ViQXBpVXJsOiBzdHJpbmc7XHJcbiAgfSB8IG51bGw7XHJcbn1cclxuXHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TWFpblByb3BzLCBNYWluU3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogTWFpblByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBjb25maWc6IG51bGwgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5mZXRjaENvbmZpZygpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29uZmlnOiBkYXRhfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZldGNoQ29uZmlnID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL21hbmlmZXN0Lmpzb24nKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPERpYWxvZyBvcGVuPlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nIGNvbmZpZ3VyYXRpb24gZmlsZS4uLlxyXG4gICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT1cIjYwXCIgdGhpY2tuZXNzPXs0fSAvPlxyXG4gICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHtzdG9yZSwgbGFuZ30gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc29sZS5sb2coXCJIZXkhIVwiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e01haW5UaGVtZX0+XHJcbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBmaXhlZD5cclxuICAgICAgICAgICAgICBBY2EgZXN0YW1vc1xyXG4gICAgICAgICAgICAgIDxkaXY+e0pTT04uc3RyaW5naWZ5KGNvbmZpZyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57bGFuZ308L2Rpdj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG50eXBlIFN0YXRlVG9Qcm9wcyA9IHtcclxuICBsYW5nOiBsYW5ndWFnZXM7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpOiBTdGF0ZVRvUHJvcHMgPT4gKHtcclxuICBsYW5nOiBzdGF0ZS5sYW5nXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE1haW4pO1xyXG4iLCJpbXBvcnQge1N0b3JlLCBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcblxuLy8gV2UnbGwgYmUgdXNpbmcgUmVkdXggRGV2dG9vbHMuIFdlIGNhbiB1c2UgdGhlIGBjb21wb3NlV2l0aERldlRvb2xzKClgXG4vLyBkaXJlY3RpdmUgc28gd2UgY2FuIHBhc3Mgb3VyIG1pZGRsZXdhcmUgYWxvbmcgd2l0aCBpdFxuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuXG4vLyBJbXBvcnQgdGhlIHN0YXRlIGludGVyZmFjZSBhbmQgb3VyIGNvbWJpbmVkIHJlZHVjZXJzLlxuaW1wb3J0IHJvb3RSZWR1Y2VyLCB7QXBwbGljYXRpb25TdGF0ZX0gZnJvbSAnLic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSk6IFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+IHtcbiAgLy8gY3JlYXRlIHRoZSBjb21wb3NpbmcgZnVuY3Rpb24gZm9yIG91ciBtaWRkbGV3YXJlc1xuICBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gY29tcG9zZVdpdGhEZXZUb29scyh7fSk7XG5cbiAgLy8gV2UnbGwgY3JlYXRlIG91ciBzdG9yZSB3aXRoIHRoZSBjb21iaW5lZCByZWR1Y2VycywgYW5kIHRoZSBpbml0aWFsIFJlZHV4IHN0YXRlIHRoYXRcbiAgLy8gd2UnbGwgYmUgcGFzc2luZyBmcm9tIG91ciBlbnRyeSBwb2ludC5cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpKTtcbn1cbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vQ29uc3RhbnRzJztcbmltcG9ydCB7IGxhbmdSZWR1Y2VyIH0gZnJvbSAnLi9sYW5nL3JlZHVjZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xuICByZWFkb25seSBsYW5nOiBsYW5ndWFnZXM7XG59XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgbGFuZzogbGFuZ1JlZHVjZXIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQge1JlZHVjZXJ9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0NvbnN0YW50cyc7XG5pbXBvcnQgU1dJVENIX0xBTkdVQUdFIGZyb20gJy4vdHlwZXMnO1xuXG4vLyBUeXBlLXNhZmUgaW5pdGlhbFN0YXRlXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBsYW5ndWFnZXMgPSBsYW5ndWFnZXMuRU5HTElTSDtcblxuY29uc3QgcmVkdWNlcjogUmVkdWNlcjxsYW5ndWFnZXM+ID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU1dJVENIX0xBTkdVQUdFOiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEluc3RlYWQgb2YgdXNpbmcgZGVmYXVsdCBleHBvcnQsIHdlIHVzZSBuYW1lZCBleHBvcnRzLiBUaGF0IHdheSB3ZSBjYW4gZ3JvdXAgdGhlc2UgZXhwb3J0c1xuLy8gaW5zaWRlIHRoZSBgaW5kZXguanNgIGZvbGRlci5cbmV4cG9ydCB7cmVkdWNlciBhcyBsYW5nUmVkdWNlcn07IiwiaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0NvbnN0YW50c1wiO1xuXG5jb25zdCBTV0lUQ0hfTEFOR1VBR0UgPSAnQEBsYW5ndWFnZS9TV0lUQ0hfTEFOR1VBR0UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXRjaExhbmd1YWdlQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNXSVRDSF9MQU5HVUFHRTtcbiAgcGF5bG9hZDogbGFuZ3VhZ2VzO1xufVxuXG5leHBvcnQgdHlwZSBVc2VyQWN0aW9uVHlwZXMgPSBTd2l0Y2hMYW5ndWFnZUFjdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgU1dJVENIX0xBTkdVQUdFOyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImltcG9ydCB7Y3JlYXRlTXVpVGhlbWV9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIGNvbW1vbjoge1xuICAgICAgYmxhY2s6ICcjMDAwJyxcbiAgICAgIHdoaXRlOiAnI2ZmZidcbiAgICB9LFxuICAgIG1vY2t1cDoge1xuICAgICAgbGlnaHQ6ICcjZjFmMWYxJyxcbiAgICAgIG1haW46ICcjYzVkNWVkJyxcbiAgICAgIGRhcms6ICcjN2U5NmQ2JyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBwYXBlcjogJyNmZmYnLFxuICAgICAgZGVmYXVsdDogJyNmYWZhZmEnXG4gICAgfSxcbiAgICBwcmltYXJ5OiB7XG4gICAgICBsaWdodDogJyM4OTk2ZGInLFxuICAgICAgbWFpbjogJ3JnYmEoMCwgODQsIDE1NCwgMSknLFxuICAgICAgZGFyazogJyM0MDRmYWYnLFxuICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZidcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbGlnaHQ6ICdyZ2JhKDEyMiwgMTg4LCAyNTUsIDEpJyxcbiAgICAgIG1haW46ICdyZ2JhKDMsIDEyOCwgMjU1LCAxKScsXG4gICAgICBkYXJrOiAncmdiYSgwLCA2MCwgMTIwLCAxKScsXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmJ1xuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIGxpZ2h0OiAnI2Y1ODM4MycsXG4gICAgICBtYWluOiAncmdiYSgxODksIDMyLCAzNywgMSknLFxuICAgICAgZGFyazogJyNlMzNmM2YnLFxuICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZidcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgIHByaW1hcnk6ICdyZ2JhKDE3LCAxNywgMTcsIDEpJyxcbiAgICAgIHNlY29uZGFyeTogJ3JnYmEoODUsIDg1LCA4NSwgMSknLFxuICAgICAgZGlzYWJsZWQ6ICdyZ2JhKDIxMiwgMjEyLCAyMTIsIDEpJyxcbiAgICAgIGhpbnQ6ICdyZ2JhKDE1MywgMTUzLCAxNTMsIDEpJ1xuICAgIH1cbiAgfVxufSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgZ2V0VXJsID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9hc3NldHMvZm9udHMvcmFmZmxlc2xpLndvZmYyXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL2Fzc2V0cy9mb250cy9yYWZmbGVzbGkud29mZlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9hc3NldHMvZm9udHMvcmFmZmxlc2xpYm9sLndvZmYyXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL2Fzc2V0cy9mb250cy9yYWZmbGVzbGlib2wud29mZlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX180X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9hc3NldHMvZm9udHMvcmFmZmxlc2xpbV9ibGFjay53b2ZmMlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX181X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9hc3NldHMvZm9udHMvcmFmZmxlc2xpbV9ibGFjay53b2ZmXCIpKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JhZmZsZVNsaW0nO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JhZmZsZVNsaW0nO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JhZmZsZVNsaW0nO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcblwiLCBcIlwiXSk7XG4iXSwic291cmNlUm9vdCI6IiJ9