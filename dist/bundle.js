/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bf */ \"./my_modules/bf/index.js\");\n// import phb from 'posthtml-beautify';\n\nvar text = \"lorem\\nipsum \".concat(Object(bf__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('test'));\nvar object1 = {\n  a: 'somestring',\n  b: 42,\n  c: false\n};\nconsole.log(Object.values(object1));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz80MWY1Il0sIm5hbWVzIjpbInRleHQiLCJiZiIsIm9iamVjdDEiLCJhIiwiYiIsImMiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0IiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1BLElBQUksMEJBQ0ZDLGtEQUFFLENBQUMsTUFBRCxDQURBLENBQVY7QUFHQSxJQUFNQyxPQUFPLEdBQUc7QUFDZEMsR0FBQyxFQUFFLFlBRFc7QUFFZEMsR0FBQyxFQUFFLEVBRlc7QUFHZEMsR0FBQyxFQUFFO0FBSFcsQ0FBaEI7QUFLQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxPQUFkLENBQVoiLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBwaGIgZnJvbSAncG9zdGh0bWwtYmVhdXRpZnknO1xuaW1wb3J0IGJmIGZyb20gJ2JmJztcblxuY29uc3QgdGV4dCA9IGBsb3JlbVxuaXBzdW0gJHtiZigndGVzdCcpfWA7XG5cbmNvbnN0IG9iamVjdDEgPSB7XG4gIGE6ICdzb21lc3RyaW5nJyxcbiAgYjogNDIsXG4gIGM6IGZhbHNlXG59O1xuY29uc29sZS5sb2coT2JqZWN0LnZhbHVlcyhvYmplY3QxKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./my_modules/bf/index.js":
/*!********************************!*\
  !*** ./my_modules/bf/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (text) {\n  return \"Hello \".concat(text);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9teV9tb2R1bGVzL2JmL2luZGV4LmpzPzBjZTQiXSwibmFtZXMiOlsidGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSx5RUFBQUEsSUFBSTtBQUFBLHlCQUFhQSxJQUFiO0FBQUEsQ0FBbkIiLCJmaWxlIjoiLi9teV9tb2R1bGVzL2JmL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgdGV4dCA9PiBgSGVsbG8gJHt0ZXh0fWA7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./my_modules/bf/index.js\n");

/***/ })

/******/ });