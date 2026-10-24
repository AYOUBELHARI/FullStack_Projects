/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\n\n/* ---------- TABS ---------- */\nconst pages = { Home: _main_js__WEBPACK_IMPORTED_MODULE_0__.renderHome, Menu: _main_js__WEBPACK_IMPORTED_MODULE_0__.renderMenu, About: _main_js__WEBPACK_IMPORTED_MODULE_0__.renderAbout };\n\nconst showPage = (name) => {\n    _main_js__WEBPACK_IMPORTED_MODULE_0__.content.replaceChildren(pages[name]()) // swap the old page for the new one\n    _main_js__WEBPACK_IMPORTED_MODULE_0__.navButtons.forEach(btn => btn.classList.toggle('active', btn.textContent === name))\n}\n\n_main_js__WEBPACK_IMPORTED_MODULE_0__.navButtons.forEach(btn => {\n    btn.addEventListener('click', () => {\n        showPage(btn.textContent)\n    })\n})\n\nshowPage('Home');   // what you see on first load\n\n//# sourceURL=webpack://restaurantpage/./index.js?\n}");

/***/ },

/***/ "./main.js"
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MENU: () => (/* binding */ MENU),\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   el: () => (/* binding */ el),\n/* harmony export */   navButtons: () => (/* binding */ navButtons),\n/* harmony export */   renderAbout: () => (/* binding */ renderAbout),\n/* harmony export */   renderHome: () => (/* binding */ renderHome),\n/* harmony export */   renderMenu: () => (/* binding */ renderMenu)\n/* harmony export */ });\nconst content = document.querySelector('#content');\nconst navButtons = document.querySelectorAll('nav button');\n \n// small helper: create an element, optionally with a class and text\nconst el = (tag, className, text) => {\n    const node = document.createElement(tag);\n    if (className) node.className = className;\n    if (text) node.textContent = text;\n    return node;\n};\n\n/* ---------- HOME ---------- */\nconst renderHome = () => {\n    const section = el('section', 'hero');\n \n    const img = el('img');\n    img.src = './restaurant.svg';\n    img.alt = 'A steaming plate of food on a warm wooden table';\n \n    const text = el('div');\n    text.append(\n        el('h1', '', 'Wood-fired food, made with love.'),\n        el('p', '', \"Welcome to Olive & Ember, the neighborhood kitchen where every dish is cooked over a real fire and served like it's Sunday dinner at home.\"),\n        el('p', '', \"Our bread is baked each morning, our vegetables come from farms down the road, and our sauces simmer for hours. Come hungry, leave happy.\")\n    );\n \n    section.append(img, text);\n    return section;\n};\n\n/* ---------- MENU ---------- */\nconst MENU = [\n    { name: 'Ember Margherita',   price: '$14', description: 'Wood-fired pizza with tomato, fresh mozzarella and basil.' },\n    { name: 'Smoked Chicken',     price: '$18', description: 'Slow-roasted over the fire with lemon and herbs.' },\n    { name: 'Harvest Salad',      price: '$11', description: 'Seasonal greens, roasted vegetables and house vinaigrette.' },\n    { name: 'Olive Oil Cake',     price: '$8',  description: 'Soft, golden and served with whipped cream.' }\n];\n \nconst renderMenu = () => {\n    const section = el('section', 'menu');\n    section.append(el('h2', '', 'Our Menu'));\n \n    MENU.forEach(item => {\n        const row = el('div', 'item');\n        const head = el('div', 'item-head');\n        head.append(el('h3', '', item.name), el('span', 'price', item.price));\n        row.append(head, el('p', '', item.description));\n        section.append(row);\n    });\n \n    return section;\n};\n\n/* ---------- ABOUT ---------- */\nconst renderAbout = () => {\n    const section = el('section', 'about');\n \n    const info = el('div', 'info');\n    info.append(\n        el('p', '', '123 Market Street'),\n        el('p', '', '(555) 012-3456'),\n        el('p', '', 'Open daily, 11:00 AM - 10:00 PM')\n    );\n \n    section.append(\n        el('h2', '', 'About Us'),\n        el('p', '', 'Olive & Ember started as a small wood oven and a big idea: good food should feel like home. Today we are a family-run kitchen serving our neighbors every day.'),\n        info\n    );\n    return section;\n};\n\n\n//# sourceURL=webpack://restaurantpage/./main.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;