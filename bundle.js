/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = watchKeys;
	// Watch for keyEvents on an element
	// Params:
	// inputEl: the element to listen on
	// keyPress: a callback for any key pressed
	// onDelete: a callback for a delete key pressed
	function watchKeys(inputEl, keyPress, onDelete) {
	  inputEl.addEventListener('keypress', function onKeyPress(e) {
	    e.preventDefault();
	    keyPress(e);
	  });
	  inputEl.addEventListener('keydown', function onKeyDown(e) {
	    // Only prevents backspace and delete so the events can fire the keypressed event
	    if (e.keyCode === 8 || e.keyCode === 46) {
	      onDelete(e);
	      e.preventDefault();
	    }
	  });
	}

/***/ }
/******/ ]);