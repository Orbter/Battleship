/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  height: 100vh;
  margin: 0;
}

.home-page {
  height: 100vh;
  background-size: cover; /* Cover ensures the image covers the entire div */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  text-align: center;
  font-family: "Alfa Slab One", serif;
  margin: 20px;
  display: flex;
  flex-direction: column;
}

.welcome {
  font-size: 2.5rem;
}

.logo {
  font-size: 16vw;
  color: transparent;
  font-weight: bold;
}

.enter-name-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 15vh;
  align-items: center;
  justify-content: space-around;
  font-family: "Orbitron", sans-serif;
}

#name {
  width: 80%;
  height: 50px;
  font-size: 2rem;
  font-family: "Orbitron", sans-serif;
}

.label {
  font-weight: bold;
  font-size: 2rem;
}

.button {
  border-radius: 12px;
  background-color: #525252;
  color: white;
  border: 1px solid black;
  width: 55%;
  height: 75%;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  transition: all ease-in 50ms;
  cursor: pointer;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}

.button:active {
  font-size: 1.1rem;
  width: 54%;
  height: 74%;
}

.start-container {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.square {
  width: clamp(30px, 10vw, 500px);
  height: clamp(30px, 10vw, 500px);
  border: 1px solid white;
}

.square-choose {
  width: clamp(30px, 10vw, 500px);
  height: clamp(30px, 10vw, 500px);
  border: 1px solid white;
  transition: background-color 0.3s;
  z-index: 20;
}

.headline {
  text-align: center;
  font-family: "Alfa Slab One", serif;
  margin: 20px;
  display: flex;
  flex-direction: column;
}

.popUp {
  display: flex;
  flex-direction: column;
  background-color: #494953;
  height: 70%; /* Adjusted height to include space for ship-container */
  align-items: center;
  justify-content: space-between; /* Changed to space-between for better alignment */
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px; /* Added for complete border radius */
  border-bottom-right-radius: 12px; /* Added for complete border radius */
  padding: 10px;
  padding-bottom: 0;
}

.ship-container {
  display: flex;
  flex-direction: column;
  background-color: #212529;
  padding: 10px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  width: 100%;
  height: 30%;
}

.board {
  display: flex;
  position: relative;
}

.chooseHead {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  color: white;
}

.main-div {
  background-color: #494953;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-family: "Lato", sans-serif;
  margin: 0;
  color: white;
  font-size: 3.5rem;
  font-weight: bold;
}

.player-board {
  display: flex;
}

.opponent-board {
  display: flex;
}

.main-board {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
}

.headline-game {
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 1.5rem;
}

.message-container {
  width: 70%;
  height: clamp(60px, 10vh, 500px);
  border: 1px solid white;
  background-color: #13141d;
  padding: 5px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
}

.button-container-choose {
  width: 90%;
  height: 5%;
  display: flex;
  justify-content: space-around;
}

.button-rotate {
  border-radius: 8px;
  height: 100%;
  width: 35%;
  background-color: #f48c06;
}

.button-start {
  border-radius: 8px;
  height: 100%;
  width: 35%;
  background-color: #2eae73;
}

.button-start:active {
  font-size: 1.1rem;
  width: 34%;
  height: 99%;
}

.button-rotate:active {
  font-size: 1.1rem;
  width: 34%;
  height: 99%;
}

.carrier {
  width: clamp(150px, 40vw, 500px);
  height: clamp(30px, 10vw, 500px);
}

.battle-ship {
  width: clamp(120px, 30vw, 500px);
  height: clamp(30px, 10vw, 500px);
}

.submarine {
  width: clamp(60px, 20vw, 500px);
  height: clamp(30px, 10vw, 500px);
}

.cruiser {
  width: clamp(60px, 20vw, 500px);
  height: clamp(30px, 10vw, 500px);
}

.destroyer {
  width: clamp(20px, 10vw, 500px);
  height: clamp(30px, 10vw, 500px);
}

.hovered-tile {
  background-color: var(--hover-color);
}

.placed-ship {
  z-index: 10;
}

.enemy-hit {
  background-color: #ef233c;
}

.del {
  width: clamp(20px, 10vw, 500px);
  height: clamp(30px, 10vw, 500px);
}

.enemy-missed {
  background-color: #48bfe3;
}

.enemy-sunk {
  background-color: #f48c06;
}

.message {
  color: white;
  font-size: 1.2rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\nbody {\r\n  height: 100vh;\r\n  margin: 0;\r\n}\r\n.home-page {\r\n  height: 100vh;\r\n  background-size: cover; /* Cover ensures the image covers the entire div */\r\n  background-position: center; /* Centers the background image */\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  // display: none;\r\n}\r\n.header {\r\n  text-align: center;\r\n  font-family: 'Alfa Slab One', serif;\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.welcome {\r\n  font-size: 2.5rem;\r\n}\r\n.logo {\r\n  font-size: 16vw;\r\n  color: transparent;\r\n  font-weight: bold;\r\n}\r\n.enter-name-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 15vh;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  font-family: 'Orbitron', sans-serif;\r\n}\r\n#name {\r\n  width: 80%;\r\n  height: 50px;\r\n  font-size: 2rem;\r\n  font-family: 'Orbitron', sans-serif;\r\n}\r\n.label {\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n}\r\n.button {\r\n  border-radius: 12px;\r\n  background-color: #525252;\r\n  color: white;\r\n  border: 1px solid black;\r\n  width: 55%;\r\n  height: 75%;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  transition: all ease-in 50ms;\r\n  cursor: pointer;\r\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);\r\n}\r\n.button:active {\r\n  font-size: 1.1rem;\r\n  width: 54%;\r\n  height: 74%;\r\n}\r\n.start-container {\r\n  width: 100%;\r\n  height: 10vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.square {\r\n  width: clamp(30px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n  border: 1px solid white;\r\n}\r\n.square-choose {\r\n  width: clamp(30px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n  border: 1px solid white;\r\n  transition: background-color 0.3s;\r\n  z-index: 20;\r\n}\r\n.headline {\r\n  text-align: center;\r\n  font-family: 'Alfa Slab One', serif;\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.popUp {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #494953;\r\n  height: 70%; /* Adjusted height to include space for ship-container */\r\n  align-items: center;\r\n  justify-content: space-between; /* Changed to space-between for better alignment */\r\n  width: 85%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-top-left-radius: 12px;\r\n  border-top-right-radius: 12px;\r\n  border-bottom-left-radius: 12px; /* Added for complete border radius */\r\n  border-bottom-right-radius: 12px; /* Added for complete border radius */\r\n  padding: 10px;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.ship-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #212529;\r\n  padding: 10px;\r\n  border-bottom-left-radius: 12px;\r\n  border-bottom-right-radius: 12px;\r\n  width: 100%;\r\n  height: 30%;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n.chooseHead {\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.main-div {\r\n  background-color: #494953;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.title {\r\n  font-family: 'Lato', sans-serif;\r\n  margin: 0;\r\n  color: white;\r\n  font-size: 3.5rem;\r\n  font-weight: bold;\r\n}\r\n.player-board {\r\n  display: flex;\r\n}\r\n.opponent-board {\r\n  display: flex;\r\n}\r\n.main-board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  height: 80vh;\r\n}\r\n\r\n.headline-game {\r\n  font-family: 'Poppins', sans-serif;\r\n\r\n  color: white;\r\n  font-size: 1.5rem;\r\n}\r\n.message-container {\r\n  width: 70%;\r\n  height: clamp(60px, 10vh, 500px);\r\n  border: 1px solid white;\r\n  background-color: #13141d;\r\n  padding: 5px;\r\n}\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 9;\r\n}\r\n.button-container-choose {\r\n  width: 90%;\r\n  height: 5%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n.button-rotate {\r\n  border-radius: 8px;\r\n  height: 100%;\r\n  width: 35%;\r\n  background-color: #f48c06;\r\n}\r\n.button-start {\r\n  border-radius: 8px;\r\n  height: 100%;\r\n  width: 35%;\r\n  background-color: #2eae73;\r\n}\r\n\r\n.button-start:active {\r\n  font-size: 1.1rem;\r\n  width: 34%;\r\n  height: 99%;\r\n}\r\n.button-rotate:active {\r\n  font-size: 1.1rem;\r\n  width: 34%;\r\n  height: 99%;\r\n}\r\n.carrier {\r\n  width: clamp(150px, 40vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.battle-ship {\r\n  width: clamp(120px, 30vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.submarine {\r\n  width: clamp(60px, 20vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.cruiser {\r\n  width: clamp(60px, 20vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.destroyer {\r\n  width: clamp(20px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.hovered-tile {\r\n  background-color: var(--hover-color);\r\n}\r\n.placed-ship {\r\n  z-index: 10;\r\n}\r\n.enemy-hit {\r\n  background-color: #ef233c;\r\n}\r\n.del {\r\n  width: clamp(20px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.enemy-missed {\r\n  background-color: #48bfe3;\r\n}\r\n.enemy-sunk {\r\n  background-color: #f48c06;\r\n}\r\n.message {\r\n  color: white;\r\n  font-size: 1.2rem;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/related/board.js":
/*!******************************!*\
  !*** ./src/related/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBoardChooseVs: () => (/* binding */ createBoardChooseVs),
/* harmony export */   createBoardVs: () => (/* binding */ createBoardVs),
/* harmony export */   enemyBoardVs: () => (/* binding */ enemyBoardVs)
/* harmony export */ });
function createBoardVs(container) {
  for (let col = 0; col < 8; col++) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    for (let row = 0; row < 8; row++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('square');
      rowDiv.classList.add('player-row');

      rowDiv.dataset.rowNum = row;
      rowDiv.dataset.rowCol = col;
      colDiv.appendChild(rowDiv);
    }
    container.appendChild(colDiv);
  }
}

function createBoardChooseVs(container) {
  for (let col = 0; col < 8; col++) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    for (let row = 0; row < 8; row++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('square-choose');
      rowDiv.dataset.rowNum = row;
      rowDiv.dataset.rowCol = col;
      colDiv.appendChild(rowDiv);
    }
    container.appendChild(colDiv);
  }
}

function enemyBoardVs(container) {
  for (let col = 0; col < 8; col++) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    for (let row = 0; row < 8; row++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('square');
      rowDiv.classList.add('enemy-row');

      rowDiv.dataset.rowNum = row;
      rowDiv.dataset.colNum = col;
      colDiv.appendChild(rowDiv);
    }
    container.appendChild(colDiv);
  }
}




/***/ }),

/***/ "./src/related/chooseVS.js":
/*!*********************************!*\
  !*** ./src/related/chooseVS.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayerChoice: () => (/* binding */ createPlayerChoice)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/related/board.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/related/ship.js");
/* harmony import */ var _photos_battleShip2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photos/battleShip2.png */ "./src/photos/battleShip2.png");
/* harmony import */ var _photos_carrier_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photos/carrier.png */ "./src/photos/carrier.png");
/* harmony import */ var _photos_cruiser_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../photos/cruiser.png */ "./src/photos/cruiser.png");
/* harmony import */ var _photos_destroyer_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../photos/destroyer.png */ "./src/photos/destroyer.png");
/* harmony import */ var _photos_submarine_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../photos/submarine.png */ "./src/photos/submarine.png");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player */ "./src/related/player.js");
/* harmony import */ var _logicGame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logicGame */ "./src/related/logicGame.js");










function addClickedShip(clickedShip) {
  const allShips = document.querySelectorAll('.ship-choose');
  allShips.forEach((ship) => {
    ship.classList.remove('clicked');
  });
  clickedShip.classList.add('clicked');
}

function checkIfShipClicked() {
  const allShips = document.querySelectorAll('.ship-choose');
  let answerShip;
  let answer = false;
  allShips.forEach((ship) => {
    if (ship.classList.contains('clicked')) {
      answer = true;
      answerShip = ship;
    }
  });
  if (answer) return answerShip.dataset.shipLength;
  else return null;
}

function returnShip() {
  const allShips = document.querySelectorAll('.ship-choose');
  let answerShip = null;
  allShips.forEach((ship) => {
    if (ship.classList.contains('clicked')) {
      answerShip = ship;
    }
  });
  return answerShip;
}

function checkIfRotate() {
  const rotateButton = document.querySelector('.button-rotate');
  if (rotateButton.classList.contains('rotate-on')) {
    return true;
  }
  return false;
}
function placeShipImage(shipElement, tile, isRotated) {
  const shipContainer = document.querySelector('.popUp');
  if (!shipContainer || !shipElement || !tile) {
    console.error('Invalid shipElement, tile, or board container');
    return;
  }

  const shipImg = new Image();
  shipImg.src = shipElement.src;
  shipImg.classList.add('placed-ship');
  shipImg.style.position = 'absolute';
  shipImg.style.zIndex = '10'; // Ensure ships are below the tiles

  const shipTypes = [
    'carrier',
    'battle-ship',
    'submarine',
    'cruiser',
    'destroyer',
  ];
  shipTypes.forEach((type) => {
    if (shipElement.classList.contains(type)) {
      shipImg.classList.add(type);
    }
  });

  const tileRect = tile.getBoundingClientRect();
  const boardRect = shipContainer.getBoundingClientRect();

  const offsetX = tileRect.left - boardRect.left;
  const offsetY = tileRect.top - boardRect.top;

  shipImg.style.left = `${offsetX}px`;
  shipImg.style.top = `${offsetY}px`;

  if (isRotated) {
    shipImg.style.transform = 'rotate(90deg)';
    shipImg.style.transformOrigin = 'top left';
    shipImg.style.left = `${offsetX + tileRect.height}px`;
  }
  shipContainer.appendChild(shipImg);
}

function canYouPlace(board, coordinates, rotate, doesShip) {
  const num = parseInt(doesShip, 10);
  let answer = true;

  for (let index = 0; index < num; index++) {
    const newCoordinates = rotate
      ? [coordinates[0] + index, coordinates[1]]
      : [coordinates[0], coordinates[1] + index];

    if (board.returnPlace(newCoordinates) !== null) {
      answer = false;
      break;
    }
  }

  return answer;
}

function placingShip(tile, board) {
  const doesShip = checkIfShipClicked();
  const shipClicked = returnShip();
  let num = parseInt(doesShip, 10);
  if (doesShip !== null) {
    const row = parseInt(tile.dataset.rowNum, 10);
    const col = parseInt(tile.dataset.rowCol, 10);
    const rotateAnswer = checkIfRotate();

    if (!rotateAnswer) {
      if (col + num > 8) {
        num--;
        return;
      }
    } else {
      if (row + num > 8) {
        num--;
        return;
      }
    }
    const coordinates = [];
    coordinates.push(row, col);
    if (canYouPlace(board, coordinates, rotateAnswer, doesShip)) {
      const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(doesShip);
      board.placeShip(coordinates, ship, rotateAnswer);
      placeShipImage(shipClicked, tile, rotateAnswer); // Place ship image behind the tiles

      shipClicked.remove();
    } else {
      return;
    }
  }
}
function calculateNumber(coordinates) {
  const num = coordinates[1] * 8 + coordinates[0];
  return num;
}
function colorTiles(coordinates, shipLength, color) {
  const col = checkIfRotate();
  let place = calculateNumber(coordinates);
  const allTiles = document.querySelectorAll('.square-choose');

  if (!col) {
    for (let index = 0; index < shipLength; index++) {
      if (place >= allTiles.length) return;
      const tile = allTiles[place];
      tile.classList.add('hovered-tile');
      tile.style.setProperty('--hover-color', color);
      place += 8;
    }
  } else {
    for (let index = 0; index < shipLength; index++) {
      if ((place % 8) + 1 === 8) {
        const tile = allTiles[place];
        tile.classList.add('hovered-tile');
        tile.style.setProperty('--hover-color', color);
        return;
      }
      const tile = allTiles[place];
      tile.classList.add('hovered-tile');
      tile.style.setProperty('--hover-color', color);
      place++;
    }
  }
}

function changeColor(tile) {
  const ship = returnShip();
  const shipLength = checkIfShipClicked();
  if (ship !== null) {
    const color = ship.dataset.shipColor;
    const row = parseInt(tile.dataset.rowNum, 10);
    const col = parseInt(tile.dataset.rowCol, 10);
    const coordinates = [];
    coordinates.push(row, col);
    colorTiles(coordinates, shipLength, color);
  }
}

function removeColor() {
  const allTiles = document.querySelectorAll('.square-choose');
  allTiles.forEach((tile) => {
    if (tile.classList.contains('hovered-tile')) {
      tile.classList.remove('hovered-tile');
      tile.style.removeProperty('--hover-color');
    }
  });
}

function canYouPlay(board, name) {
  const div = document.querySelector('.ship-container');
  if (div.children.length !== 0) (0,_logicGame__WEBPACK_IMPORTED_MODULE_8__.StartingGame)(board, name);
  else return;
}
// bug need to change the can you play to === 0

function addEvent(allTiles, board, name) {
  const allShips = document.querySelectorAll('.ship-choose');
  allShips.forEach((ship) => {
    ship.addEventListener('click', () => addClickedShip(ship));
  });

  allTiles.forEach((tile) => {
    tile.addEventListener('click', () => placingShip(tile, board));
    tile.addEventListener('mouseover', () => changeColor(tile));
    tile.addEventListener('mouseout', () => removeColor(tile));
  });

  const rotate = document.querySelector('.button-rotate');
  rotate.addEventListener('click', () => {
    rotate.classList.toggle('rotate-on');
  });

  const startButton = document.querySelector('.button-start');
  startButton.addEventListener('click', () => {
    canYouPlay(board, name);
  });
}

function createPlayerChoice(name) {
  const homePage = document.querySelector('.home-page');
  homePage.style.display = 'none';
  const chooseContainer = document.createElement('div');
  const boardContainer = document.createElement('div');
  const overlay = document.createElement('div');
  const h2 = document.createElement('h2');
  const headline = document.createElement('div');
  const shipContainer = document.createElement('div');
  const buttonContainer = document.createElement('div');
  const rotateButton = document.createElement('button');
  const startButton = document.createElement('button');
  const body = document.getElementById('body');

  chooseContainer.style.zIndex = '10';
  chooseContainer.classList.add('popUp');
  boardContainer.classList.add('board');
  boardContainer.style.zIndex = '11';
  h2.classList.add('chooseHead');
  overlay.classList.add('overlay');
  shipContainer.classList.add('ship-container');
  shipContainer.style.zIndex = '10';
  rotateButton.classList.add('button');
  startButton.classList.add('button');
  rotateButton.classList.add('button-rotate');
  startButton.classList.add('button-start');
  buttonContainer.classList.add('button-container-choose');

  h2.textContent = `${name} choose where to place your ship`;
  rotateButton.textContent = 'Rotate';
  startButton.textContent = 'Start';

  (0,_ship__WEBPACK_IMPORTED_MODULE_1__.shipVS)(_photos_carrier_png__WEBPACK_IMPORTED_MODULE_3__, _photos_battleShip2_png__WEBPACK_IMPORTED_MODULE_2__, _photos_submarine_png__WEBPACK_IMPORTED_MODULE_6__, _photos_cruiser_png__WEBPACK_IMPORTED_MODULE_4__, _photos_destroyer_png__WEBPACK_IMPORTED_MODULE_5__, shipContainer);

  (0,_board__WEBPACK_IMPORTED_MODULE_0__.createBoardChooseVs)(boardContainer);
  const board = (0,_player__WEBPACK_IMPORTED_MODULE_7__.createPlayerChoiceLogic)(name);

  headline.appendChild(h2);
  buttonContainer.appendChild(rotateButton);
  buttonContainer.appendChild(startButton);

  chooseContainer.appendChild(headline);
  chooseContainer.appendChild(buttonContainer);
  chooseContainer.appendChild(boardContainer);
  chooseContainer.appendChild(shipContainer);

  body.appendChild(overlay);
  body.appendChild(chooseContainer);
  const tiles = document.querySelectorAll('.square-choose');

  addEvent(tiles, board, name);
}




/***/ }),

/***/ "./src/related/gameboard.js":
/*!**********************************!*\
  !*** ./src/related/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/related/ship.js");


function createMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(null); // You can initialize the matrix with any value, here we use 0
    }
    matrix.push(row);
  }
  return matrix;
}
function getRandomNumberBetween0And7() {
  return Math.floor(Math.random() * 8);
}
function trueOrFalse() {
  return Math.random() >= 0.5;
}
function create64() {
  const array = [];
  for (let index = 0; index < 64; index++) {
    array.push(index);
  }
  return array;
}

function GameBoard() {
  let isShipBuilt = false;
  const allShips = [];
  const ship4 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(4);
  const ship3 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(3);
  const ship2Also = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(2);
  const ship2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(2);
  const ship1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(1);
  const list = create64();
  let position;
  allShips.push(ship4, ship3, ship2Also, ship2, ship1);
  const board = createMatrix(8, 8);
  const enemyBoard = createMatrix(8, 8);
  return {
    placeShip(coordinates, ship, col) {
      const lengthShip = ship.getLength();

      for (let index = 0; index < lengthShip; index++) {
        if (!col) {
          board[coordinates[0]][coordinates[1] + index] = ship;
        } else board[coordinates[0] + index][coordinates[1]] = ship;
      }
    },
    savePosition(coordinates) {
      position = coordinates;
    },
    returnPosition() {
      return position;
    },
    placeEnemyShip(coordinates, ship, col) {
      const lengthShip = ship.getLength();
      for (let index = 0; index < lengthShip; index++) {
        const array = [];
        if (!col) {
          enemyBoard[coordinates[0]][coordinates[1] + index] = ship;
          array.push(coordinates[0], coordinates[1] + index);
          ship.enterPosition(array);
        } else {
          enemyBoard[coordinates[0] + index][coordinates[1]] = ship;
          array.push(coordinates[0] + index, coordinates[1]);
          ship.enterPosition(array);
        }
      }
    },
    Attack(coordinates, tile) {
      const place = enemyBoard[coordinates[0]][coordinates[1]];
      if (tile === null) {
        enemyBoard[coordinates[0]][coordinates[1]] = 0;
        return 0;
      } else {
        place.hit();
        enemyBoard[coordinates[0]][coordinates[1]] = 2;
        return place.isSunk();
      }
    },
    getBoard() {
      return board;
    },
    getEnemyBoard() {
      return enemyBoard;
    },
    computerAttack() {
      let doesMiss = true;
    },
    createShip(number) {
      const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(number);
      isShipBuilt = true;
      return [ship, isShipBuilt];
    },
    changeShipStatus() {
      isShipBuilt = false;
    },
    checkShipStatus() {
      return isShipBuilt;
    },
    returnPlace(coordinates) {
      return board[coordinates[0]][coordinates[1]];
    },
    return64list() {
      return list;
    },
    spliceNum(num) {
      list.splice(num, 1);
    },
    createEnemyBoard() {
      while (allShips.length !== 0) {
        let row = getRandomNumberBetween0And7();
        let col = getRandomNumberBetween0And7();
        const horizontal = trueOrFalse();
        const ship = allShips[0];
        let canPlace = true;
        if (horizontal) {
          if (row + ship.getLength() > 8) {
            canPlace = false;
            continue; // Skip the rest of the loop and start with new random coordinates
          }
        } else {
          if (col + ship.getLength() > 8) {
            canPlace = false;
            continue; // Skip the rest of the loop and start with new random coordinates
          }
        }
        for (let index = 0; index < ship.getLength(); index++) {
          if (horizontal) {
            if (enemyBoard[row + index][col] !== null) {
              canPlace = false;
              break;
            }
          } else {
            if (enemyBoard[row][col + index] !== null) {
              canPlace = false;
              break;
            }
          }
        }
        if (canPlace) {
          const coordinates = [row, col];
          this.placeEnemyShip(coordinates, ship, horizontal);
          allShips.shift();
        }
      }
    },
  };
}



/***/ }),

/***/ "./src/related/logicGame.js":
/*!**********************************!*\
  !*** ./src/related/logicGame.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StartingGame: () => (/* binding */ StartingGame),
/* harmony export */   createPLayers: () => (/* binding */ createPLayers)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/related/player.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/related/board.js");
/* harmony import */ var _photos_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photos/delete.png */ "./src/photos/delete.png");




function getRandomNumber64() {
  return Math.floor(Math.random() * 64);
}

function createPLayers(name) {
  const mainPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(name);
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)('computer');
  return [mainPlayer, computer];
}
function canHit(tile, board) {
  const row = parseInt(tile.dataset.rowNum, 10);
  const col = parseInt(tile.dataset.colNum, 10);
  const enemyBoardLogic = board.getEnemyBoard();
  if (enemyBoardLogic[row][col] !== 0 && enemyBoardLogic[row][col] !== 2) {
    return true;
  }
  return false;
}
function checkTile(tile, board) {
  const row = parseInt(tile.dataset.rowNum, 10);
  const col = parseInt(tile.dataset.colNum, 10);
  const enemyBoardLogic = board.getEnemyBoard();
  return enemyBoardLogic[row][col];
}

function calculateNumber(coordinates) {
  const num = coordinates[1] * 8 + coordinates[0];
  return num;
}
function addClasses(status, tile, ship, className) {
  if (status === false) {
    const delImg = new Image();
    delImg.classList.add('del');
    delImg.src = _photos_delete_png__WEBPACK_IMPORTED_MODULE_2__;

    tile.classList.add('enemy-hit');
    tile.appendChild(delImg);
  } else if (status === 0) {
    tile.classList.add('enemy-missed');
  } else {
    const shipLength = ship.getLength();
    for (let index = 0; index < shipLength; index++) {
      const element = ship.returnPlace();
      const allTiles = document.querySelectorAll(className);
      const num = calculateNumber(element);
      const currentTile = allTiles[num];

      if (currentTile && currentTile.firstChild) {
        currentTile.removeChild(currentTile.firstChild);
      }
      if (currentTile.classList.contains('enemy-hit')) {
        currentTile.classList.remove('enemy-hit');
      }

      currentTile.classList.add('enemy-sunk');

      const delImgAgain = new Image();
      delImgAgain.classList.add('del');
      delImgAgain.src = _photos_delete_png__WEBPACK_IMPORTED_MODULE_2__;
      currentTile.appendChild(delImgAgain);
    }
  }
}
function playerTurn(tile, board, name) {
  const messageContainer = document.querySelector('.message');
  const inTile = checkTile(tile, board);
  const row = parseInt(tile.dataset.rowNum, 10);
  const col = parseInt(tile.dataset.colNum, 10);
  const coordinates = [];
  let sunk;
  coordinates.push(row, col);
  if (inTile !== 2 && inTile !== 0) {
    sunk = board.Attack(coordinates, inTile);
    if (sunk === false) {
      messageContainer.textContent = `${name} hit a ship!`;
      addClasses(sunk, tile, inTile);
    } else if (sunk === true) {
      messageContainer.textContent = `${name} sunken a ship!`;
      addClasses(sunk, tile, inTile, '.enemy-row');
    } else {
      messageContainer.textContent = `${name} missed! try again`;
      addClasses(sunk, tile, inTile);
      const divMessage = document.querySelector('.message-container');
      divMessage.classList.remove('player-turn');
      divMessage.classList.add('enemy-turn');
    }
  } else {
    if (inTile === 2) {
      messageContainer.textContent = `you can't hit it again!`;
    } else {
      messageContainer.textContent = `you can't miss again`;
    }
  }
}

function enemyAttackUntilEnd(coordinates, allTiles, tileLogic, number, board) {
  const directions = tileLogic.returnDirections();
  const newCoordinates = [];

  if (directions[0] === 'down') {
    if (coordinates[0] !== 7) {
      const row = coordinates[0] + 1;
      newCoordinates.push(row, coordinates[1]);
      number++;
      const newTileVs = allTiles[number];
      enemyAttack(board, number, newCoordinates, allTiles, newTileVs);
    }
    tileLogic.shiftDirections();
    return;
  }
  if (directions[0] === 'up') {
    coordinates = board.returnPosition();
    number = calculateNumber(coordinates);

    if (coordinates[0] !== 0) {
      const row = coordinates[0] - 1;
      newCoordinates.push(row, coordinates[1]);
      number--;
      const newTileVs = allTiles[number];
      enemyAttack(board, number, newCoordinates, allTiles, newTileVs);
    }
    tileLogic.shiftDirections();
    return;
  }
  if (directions[0] === 'right') {
    coordinates = board.returnPosition();
    number = calculateNumber(coordinates);
    if (coordinates[1] !== 7) {
      const col = coordinates[1] + 1;
      newCoordinates.push(coordinates[0], col);
      number += 8;
      const newTileVs = allTiles[number];
      enemyAttack(board, number, newCoordinates, allTiles, newTileVs);
    }
    tileLogic.shiftDirections();
    return;
  }
  if (directions[0] === 'left') {
    coordinates = board.returnPosition();
    number = calculateNumber(coordinates);
    if (coordinates[1] !== 0) {
      const col = coordinates[1] - 1;
      newCoordinates.push(coordinates[0], col);
      number -= 8;
      const newTileVs = allTiles[number];
      enemyAttack(board, number, newCoordinates, allTiles, newTileVs);
    }
  }
  tileLogic.shiftDirections();
  return;
}

function enemyAttack(board, number, coordinates, allTiles, tile) {
  const tileLogic = board.returnPlace(coordinates);
  if (tileLogic === null) {
    addClasses(0, tile, tileLogic);
    return;
  }
  if ((tileLogic !== 0) & (tileLogic !== 2)) {
    tileLogic.hit();
    const status = tileLogic.isSunk();
    if (!status) {
      addClasses(status, tile, tileLogic);
      enemyAttackUntilEnd(coordinates, allTiles, tileLogic, number, board);
    } else {
      addClasses(status, tile, tileLogic, '.player-row');
      // i need to add a random attack here
    }
  }
}

function enemyTurn(board) {
  const list = board.return64list();
  let number;
  let answer = false;
  while (answer) {
    const randomNum = getRandomNumber64();
    const index = list.indexOf(randomNum);
    if (index !== -1) {
      number = randomNum;
      board.spliceNum(randomNum);
      answer = true;
    }
  }
  const allTiles = document.querySelectorAll('.player-row');
  const tile = allTiles[number];
  const row = tile.dataset.rowNum;
  const col = tile.dataset.rowCol;
  let coordinates = [];
  coordinates.push(row, col);
  board.savePosition(coordinates);

  enemyAttack(board, number, coordinates, allTiles, tile);
}

function checkTurn(tile, board, name) {
  const divMessage = document.querySelector('.message-container');
  if (divMessage.classList.contains('win')) {
    console.log('win');
  } else if (divMessage.classList.contains('player-turn')) {
    playerTurn(tile, board, name);
  } else {
    enemyTurn(board);
  }
}

function addEvent(board, name) {
  const allTiles = document.querySelectorAll('.enemy-row');
  allTiles.forEach((tile) => {
    tile.addEventListener('click', () => {
      checkTurn(tile, board, name);
    });
  });
}

function StartingGame(board, name) {
  const overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
  const popUp = document.querySelector('.popUp');
  popUp.style.display = 'none';

  const playerBoard = document.querySelector('.player-board');
  const playerName = document.querySelector('.headline-player');
  const enemyBoard = document.querySelector('.opponent-board');

  playerName.textContent = `${name} board`;
  (0,_board__WEBPACK_IMPORTED_MODULE_1__.createBoardVs)(playerBoard);
  (0,_board__WEBPACK_IMPORTED_MODULE_1__.enemyBoardVs)(enemyBoard);
  board.createEnemyBoard();
  const enemyBoardLogic = board.getEnemyBoard();
  const divMessage = document.querySelector('.message-container');
  divMessage.classList.add('player-turn');
  addEvent(board, name);
}




/***/ }),

/***/ "./src/related/page.js":
/*!*****************************!*\
  !*** ./src/related/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   page: () => (/* binding */ page)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/related/board.js");


function page(name) {
  const playerBoard = document.querySelector('.player-board');
  const opponentBoard = document.querySelector('.opponent-board');
  const playerName = document.querySelector('.headline-game');
  (0,_board__WEBPACK_IMPORTED_MODULE_0__.createBoardVs)(playerBoard);
  (0,_board__WEBPACK_IMPORTED_MODULE_0__.enemyBoardVs)(opponentBoard);
  playerName.textContent = `${name} board`;
}



/***/ }),

/***/ "./src/related/player.js":
/*!*******************************!*\
  !*** ./src/related/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   createPlayerChoiceLogic: () => (/* binding */ createPlayerChoiceLogic)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/related/gameboard.js");


function Player(name) {
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();

  return {
    name,
    board,
  };
}

function createPlayerChoiceLogic(name) {
  const gameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)(name);

  return gameBoard;
}




/***/ }),

/***/ "./src/related/ship.js":
/*!*****************************!*\
  !*** ./src/related/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   shipVS: () => (/* binding */ shipVS)
/* harmony export */ });
function Ship(length) {
  let hits = 0;
  let sunk = false;
  const directions = ['down', 'up', 'right', 'left'];
  const position = [];
  return {
    returnPlace() {
      return position.shift();
    },
    returnDirections() {
      return directions;
    },
    shiftDirections() {
      directions.shift();
    },
    enterPosition(coordinates) {
      position.push(coordinates);
    },
    getNumOfHits() {
      return hits;
    },
    hit() {
      hits += 1;
    },
    isSunk() {
      return length === hits;
    },
    getLength() {
      return length;
    },
    getShip() {
      return {
        length,
        hits,
        sunk,
      };
    },
  };
}
function shipVS(
  carrier,
  battleShip,
  submarine,
  cruiser,
  destroyer,
  shipContainer
) {
  const carrierImg = new Image();
  const battleShipImg = new Image();
  const submarineImg = new Image();
  const cruiserImg = new Image();
  const destroyerImg = new Image();
  carrierImg.classList.add('carrier', 'ship-choose');
  battleShipImg.classList.add('battle-ship', 'ship-choose');
  submarineImg.classList.add('submarine', 'ship-choose');
  cruiserImg.classList.add('cruiser', 'ship-choose');
  destroyerImg.classList.add('destroyer', 'ship-choose');
  carrierImg.src = carrier;
  battleShipImg.src = battleShip;
  submarineImg.src = submarine;
  cruiserImg.src = cruiser;
  destroyerImg.src = destroyer;
  carrierImg.dataset.shipLength = 4;
  battleShipImg.dataset.shipLength = 3;
  submarineImg.dataset.shipLength = 2;
  cruiserImg.dataset.shipLength = 2;
  destroyerImg.dataset.shipLength = 1;

  carrierImg.dataset.shipColor = '#ff4d6d';
  battleShipImg.dataset.shipColor = '#faa307';
  submarineImg.dataset.shipColor = '#00b4d8';
  cruiserImg.dataset.shipColor = '#ffdd00';
  destroyerImg.dataset.shipColor = '#7bf1a8';

  carrierImg.style.cursor = 'pointer';
  battleShipImg.style.cursor = 'pointer';
  submarineImg.style.cursor = 'pointer';
  cruiserImg.style.cursor = 'pointer';
  destroyerImg.style.cursor = 'pointer';

  shipContainer.appendChild(carrierImg);
  shipContainer.appendChild(battleShipImg);
  shipContainer.appendChild(submarineImg);
  shipContainer.appendChild(cruiserImg);
  shipContainer.appendChild(destroyerImg);
}




/***/ }),

/***/ "./src/photos/battleShip2.png":
/*!************************************!*\
  !*** ./src/photos/battleShip2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "battleShip2.png";

/***/ }),

/***/ "./src/photos/battleship.png":
/*!***********************************!*\
  !*** ./src/photos/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "battleship.png";

/***/ }),

/***/ "./src/photos/carrier.png":
/*!********************************!*\
  !*** ./src/photos/carrier.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "carrier.png";

/***/ }),

/***/ "./src/photos/cruiser.png":
/*!********************************!*\
  !*** ./src/photos/cruiser.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cruiser.png";

/***/ }),

/***/ "./src/photos/delete.png":
/*!*******************************!*\
  !*** ./src/photos/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "delete.png";

/***/ }),

/***/ "./src/photos/destroyer.png":
/*!**********************************!*\
  !*** ./src/photos/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "destroyer.png";

/***/ }),

/***/ "./src/photos/seamless-metal.jpg":
/*!***************************************!*\
  !*** ./src/photos/seamless-metal.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "seamless-metal.jpg";

/***/ }),

/***/ "./src/photos/submarine.png":
/*!**********************************!*\
  !*** ./src/photos/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "submarine.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _related_chooseVS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./related/chooseVS */ "./src/related/chooseVS.js");
/* harmony import */ var _related_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./related/page */ "./src/related/page.js");
/* harmony import */ var _photos_battleship_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos/battleship.png */ "./src/photos/battleship.png");
/* harmony import */ var _photos_seamless_metal_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photos/seamless-metal.jpg */ "./src/photos/seamless-metal.jpg");






function homepage() {
  const homePhoto = document.querySelector('.home-page');
  homePhoto.style.backgroundImage = `url(${_photos_battleship_png__WEBPACK_IMPORTED_MODULE_3__})`;
  const logo = document.querySelector('.logo');
  const title = document.querySelector('.title');

  logo.style.backgroundImage = `url(${_photos_seamless_metal_jpg__WEBPACK_IMPORTED_MODULE_4__})`;
  logo.style.webkitBackgroundClip = 'text';
  logo.style.backgroundClip = 'text';
}
homepage();
(0,_related_chooseVS__WEBPACK_IMPORTED_MODULE_1__.createPlayerChoice)('amit');

const opponentBoard = document.querySelectorAll('.enemy-row');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlJQUF5SSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sNkNBQTZDLHdGQUF3RixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9DQUFvQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNsaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxzQkFBc0Isc0JBQXNCLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcscUJBQXFCLFdBQVcsc0JBQXNCLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsc0JBQXNCLHNCQUFzQixVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9B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Q0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0EsTUFBTTtBQUNOLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0EsTUFBTTtBQUNOLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLE1BQU07QUFDcEMsRUFBRSxxREFBYTtBQUNmLEVBQUUsb0RBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1Qzs7Ozs7Ozs7Ozs7Ozs7OztBQy9PZTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBYTtBQUNmLEVBQUUsb0RBQVk7QUFDZCw4QkFBOEIsTUFBTTtBQUNwQztBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWd0I7QUFDeEM7QUFDQTtBQUNBLGdCQUFnQixxREFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQzJDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZGeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQzRCO0FBQ2xCO0FBQ1c7QUFDRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbURBQVUsQ0FBQztBQUN0RDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsdURBQUssQ0FBQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFrQjtBQUNsQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9yZWxhdGVkL2JvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3JlbGF0ZWQvY2hvb3NlVlMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9sb2dpY0dhbWUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9wYWdlLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3JlbGF0ZWQvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3JlbGF0ZWQvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxmYStTbGFiK09uZSZmYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZmYW1pbHk9T3JiaXRyb246d2dodEA0MDAuLjkwMCZmYW1pbHk9UGFjaWZpY28mZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhvbWUtcGFnZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIENvdmVyIGVuc3VyZXMgdGhlIGltYWdlIGNvdmVycyB0aGUgZW50aXJlIGRpdiAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlcnMgdGhlIGJhY2tncm91bmQgaW1hZ2UgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQWxmYSBTbGFiIE9uZVwiLCBzZXJpZjtcbiAgbWFyZ2luOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud2VsY29tZSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4ubG9nbyB7XG4gIGZvbnQtc2l6ZTogMTZ2dztcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVudGVyLW5hbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTV2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNuYW1lIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogNTUlO1xuICBoZWlnaHQ6IDc1JTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gNTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHdpZHRoOiA1NCU7XG4gIGhlaWdodDogNzQlO1xufVxuXG4uc3RhcnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zcXVhcmUge1xuICB3aWR0aDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5zcXVhcmUtY2hvb3NlIHtcbiAgd2lkdGg6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uaGVhZGxpbmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZmEgU2xhYiBPbmVcIiwgc2VyaWY7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBvcFVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk1MztcbiAgaGVpZ2h0OiA3MCU7IC8qIEFkanVzdGVkIGhlaWdodCB0byBpbmNsdWRlIHNwYWNlIGZvciBzaGlwLWNvbnRhaW5lciAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIENoYW5nZWQgdG8gc3BhY2UtYmV0d2VlbiBmb3IgYmV0dGVyIGFsaWdubWVudCAqL1xuICB3aWR0aDogODUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDsgLyogQWRkZWQgZm9yIGNvbXBsZXRlIGJvcmRlciByYWRpdXMgKi9cbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7IC8qIEFkZGVkIGZvciBjb21wbGV0ZSBib3JkZXIgcmFkaXVzICovXG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uc2hpcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jaG9vc2VIZWFkIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW4tZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk1MztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucGxheWVyLWJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm9wcG9uZW50LWJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1haW4tYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuXG4uaGVhZGxpbmUtZ2FtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBjbGFtcCg2MHB4LCAxMHZoLCA1MDBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxNDFkO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogOTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXItY2hvb3NlIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5idXR0b24tcm90YXRlIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDhjMDY7XG59XG5cbi5idXR0b24tc3RhcnQge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDM1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYWU3Mztcbn1cblxuLmJ1dHRvbi1zdGFydDphY3RpdmUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgd2lkdGg6IDM0JTtcbiAgaGVpZ2h0OiA5OSU7XG59XG5cbi5idXR0b24tcm90YXRlOmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB3aWR0aDogMzQlO1xuICBoZWlnaHQ6IDk5JTtcbn1cblxuLmNhcnJpZXIge1xuICB3aWR0aDogY2xhbXAoMTUwcHgsIDQwdncsIDUwMHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XG59XG5cbi5iYXR0bGUtc2hpcCB7XG4gIHdpZHRoOiBjbGFtcCgxMjBweCwgMzB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbn1cblxuLnN1Ym1hcmluZSB7XG4gIHdpZHRoOiBjbGFtcCg2MHB4LCAyMHZ3LCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xufVxuXG4uY3J1aXNlciB7XG4gIHdpZHRoOiBjbGFtcCg2MHB4LCAyMHZ3LCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xufVxuXG4uZGVzdHJveWVyIHtcbiAgd2lkdGg6IGNsYW1wKDIwcHgsIDEwdncsIDUwMHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XG59XG5cbi5ob3ZlcmVkLXRpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XG59XG5cbi5wbGFjZWQtc2hpcCB7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uZW5lbXktaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMjMzYztcbn1cblxuLmRlbCB7XG4gIHdpZHRoOiBjbGFtcCgyMHB4LCAxMHZ3LCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xufVxuXG4uZW5lbXktbWlzc2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4YmZlMztcbn1cblxuLmVuZW15LXN1bmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4YzA2O1xufVxuXG4ubWVzc2FnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUEsRUFBQSxrREFBQTtFQUNBLDJCQUFBLEVBQUEsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtBQUtGOztBQUhBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQU9GOztBQUxBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7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Q0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFxQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxmYStTbGFiK09uZSZmYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZmYW1pbHk9T3JiaXRyb246d2dodEA0MDAuLjkwMCZmYW1pbHk9UGFjaWZpY28mZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLmhvbWUtcGFnZSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogQ292ZXIgZW5zdXJlcyB0aGUgaW1hZ2UgY292ZXJzIHRoZSBlbnRpcmUgZGl2ICovXFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlcnMgdGhlIGJhY2tncm91bmQgaW1hZ2UgKi9cXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAvLyBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQWxmYSBTbGFiIE9uZScsIHNlcmlmO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi53ZWxjb21lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuICBmb250LXNpemU6IDE2dnc7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLmVudGVyLW5hbWUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDE1dmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmb250LWZhbWlseTogJ09yYml0cm9uJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuI25hbWUge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3JiaXRyb24nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4ubGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbi5idXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjUyNTI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiA1NSU7XFxyXFxuICBoZWlnaHQ6IDc1JTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiA1MG1zO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG4uYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIHdpZHRoOiA1NCU7XFxyXFxuICBoZWlnaHQ6IDc0JTtcXHJcXG59XFxyXFxuLnN0YXJ0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zcXVhcmUge1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5zcXVhcmUtY2hvb3NlIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgei1pbmRleDogMjA7XFxyXFxufVxcclxcbi5oZWFkbGluZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ0FsZmEgU2xhYiBPbmUnLCBzZXJpZjtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ucG9wVXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTUzO1xcclxcbiAgaGVpZ2h0OiA3MCU7IC8qIEFkanVzdGVkIGhlaWdodCB0byBpbmNsdWRlIHNwYWNlIGZvciBzaGlwLWNvbnRhaW5lciAqL1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogQ2hhbmdlZCB0byBzcGFjZS1iZXR3ZWVuIGZvciBiZXR0ZXIgYWxpZ25tZW50ICovXFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7IC8qIEFkZGVkIGZvciBjb21wbGV0ZSBib3JkZXIgcmFkaXVzICovXFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDsgLyogQWRkZWQgZm9yIGNvbXBsZXRlIGJvcmRlciByYWRpdXMgKi9cXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmNob29zZUhlYWQge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ubWFpbi1kaXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk1MztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi50aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnBsYXllci1ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4ub3Bwb25lbnQtYm9hcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLm1haW4tYm9hcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGhlaWdodDogODB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRsaW5lLWdhbWUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG4ubWVzc2FnZS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGhlaWdodDogY2xhbXAoNjBweCwgMTB2aCwgNTAwcHgpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxNDFkO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB6LWluZGV4OiA5O1xcclxcbn1cXHJcXG4uYnV0dG9uLWNvbnRhaW5lci1jaG9vc2Uge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcbi5idXR0b24tcm90YXRlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAzNSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4YzA2O1xcclxcbn1cXHJcXG4uYnV0dG9uLXN0YXJ0IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAzNSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVhZTczO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLXN0YXJ0OmFjdGl2ZSB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIHdpZHRoOiAzNCU7XFxyXFxuICBoZWlnaHQ6IDk5JTtcXHJcXG59XFxyXFxuLmJ1dHRvbi1yb3RhdGU6YWN0aXZlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgd2lkdGg6IDM0JTtcXHJcXG4gIGhlaWdodDogOTklO1xcclxcbn1cXHJcXG4uY2FycmllciB7XFxyXFxuICB3aWR0aDogY2xhbXAoMTUwcHgsIDQwdncsIDUwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbn1cXHJcXG4uYmF0dGxlLXNoaXAge1xcclxcbiAgd2lkdGg6IGNsYW1wKDEyMHB4LCAzMHZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG59XFxyXFxuLnN1Ym1hcmluZSB7XFxyXFxuICB3aWR0aDogY2xhbXAoNjBweCwgMjB2dywgNTAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxufVxcclxcbi5jcnVpc2VyIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCg2MHB4LCAyMHZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG59XFxyXFxuLmRlc3Ryb3llciB7XFxyXFxuICB3aWR0aDogY2xhbXAoMjBweCwgMTB2dywgNTAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxufVxcclxcbi5ob3ZlcmVkLXRpbGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG4ucGxhY2VkLXNoaXAge1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcbi5lbmVteS1oaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMjMzYztcXHJcXG59XFxyXFxuLmRlbCB7XFxyXFxuICB3aWR0aDogY2xhbXAoMjBweCwgMTB2dywgNTAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxufVxcclxcbi5lbmVteS1taXNzZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4YmZlMztcXHJcXG59XFxyXFxuLmVuZW15LXN1bmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0OGMwNjtcXHJcXG59XFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZUJvYXJkVnMoY29udGFpbmVyKSB7XHJcbiAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcclxuICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29sRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbCcpO1xyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgODsgcm93KyspIHtcclxuICAgICAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoJ3BsYXllci1yb3cnKTtcclxuXHJcbiAgICAgIHJvd0Rpdi5kYXRhc2V0LnJvd051bSA9IHJvdztcclxuICAgICAgcm93RGl2LmRhdGFzZXQucm93Q29sID0gY29sO1xyXG4gICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQocm93RGl2KTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQm9hcmRDaG9vc2VWcyhjb250YWluZXIpIHtcclxuICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xyXG4gICAgY29uc3QgY29sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb2xEaXYuY2xhc3NMaXN0LmFkZCgnY29sJyk7XHJcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA4OyByb3crKykge1xyXG4gICAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZS1jaG9vc2UnKTtcclxuICAgICAgcm93RGl2LmRhdGFzZXQucm93TnVtID0gcm93O1xyXG4gICAgICByb3dEaXYuZGF0YXNldC5yb3dDb2wgPSBjb2w7XHJcbiAgICAgIGNvbERpdi5hcHBlbmRDaGlsZChyb3dEaXYpO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmVteUJvYXJkVnMoY29udGFpbmVyKSB7XHJcbiAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcclxuICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29sRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbCcpO1xyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgODsgcm93KyspIHtcclxuICAgICAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoJ2VuZW15LXJvdycpO1xyXG5cclxuICAgICAgcm93RGl2LmRhdGFzZXQucm93TnVtID0gcm93O1xyXG4gICAgICByb3dEaXYuZGF0YXNldC5jb2xOdW0gPSBjb2w7XHJcbiAgICAgIGNvbERpdi5hcHBlbmRDaGlsZChyb3dEaXYpO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVCb2FyZFZzLCBlbmVteUJvYXJkVnMsIGNyZWF0ZUJvYXJkQ2hvb3NlVnMgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQm9hcmRDaG9vc2VWcyB9IGZyb20gJy4vYm9hcmQnO1xyXG5pbXBvcnQgeyBTaGlwLCBzaGlwVlMgfSBmcm9tICcuL3NoaXAnO1xyXG5pbXBvcnQgYmF0dGxlU2hpcCBmcm9tICcuLi9waG90b3MvYmF0dGxlU2hpcDIucG5nJztcclxuaW1wb3J0IGNhcnJpZXIgZnJvbSAnLi4vcGhvdG9zL2NhcnJpZXIucG5nJztcclxuaW1wb3J0IGNydWlzZXIgZnJvbSAnLi4vcGhvdG9zL2NydWlzZXIucG5nJztcclxuaW1wb3J0IGRlc3Ryb3llciBmcm9tICcuLi9waG90b3MvZGVzdHJveWVyLnBuZyc7XHJcbmltcG9ydCBzdWJtYXJpbmUgZnJvbSAnLi4vcGhvdG9zL3N1Ym1hcmluZS5wbmcnO1xyXG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXJDaG9pY2VMb2dpYyB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgU3RhcnRpbmdHYW1lIH0gZnJvbSAnLi9sb2dpY0dhbWUnO1xyXG5cclxuZnVuY3Rpb24gYWRkQ2xpY2tlZFNoaXAoY2xpY2tlZFNoaXApIHtcclxuICBjb25zdCBhbGxTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWNob29zZScpO1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xyXG4gIH0pO1xyXG4gIGNsaWNrZWRTaGlwLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZlNoaXBDbGlja2VkKCkge1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtY2hvb3NlJyk7XHJcbiAgbGV0IGFuc3dlclNoaXA7XHJcbiAgbGV0IGFuc3dlciA9IGZhbHNlO1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XHJcbiAgICAgIGFuc3dlciA9IHRydWU7XHJcbiAgICAgIGFuc3dlclNoaXAgPSBzaGlwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChhbnN3ZXIpIHJldHVybiBhbnN3ZXJTaGlwLmRhdGFzZXQuc2hpcExlbmd0aDtcclxuICBlbHNlIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXR1cm5TaGlwKCkge1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtY2hvb3NlJyk7XHJcbiAgbGV0IGFuc3dlclNoaXAgPSBudWxsO1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XHJcbiAgICAgIGFuc3dlclNoaXAgPSBzaGlwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBhbnN3ZXJTaGlwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUm90YXRlKCkge1xyXG4gIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tcm90YXRlJyk7XHJcbiAgaWYgKHJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZS1vbicpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIHBsYWNlU2hpcEltYWdlKHNoaXBFbGVtZW50LCB0aWxlLCBpc1JvdGF0ZWQpIHtcclxuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XHJcbiAgaWYgKCFzaGlwQ29udGFpbmVyIHx8ICFzaGlwRWxlbWVudCB8fCAhdGlsZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignSW52YWxpZCBzaGlwRWxlbWVudCwgdGlsZSwgb3IgYm9hcmQgY29udGFpbmVyJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaGlwSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgc2hpcEltZy5zcmMgPSBzaGlwRWxlbWVudC5zcmM7XHJcbiAgc2hpcEltZy5jbGFzc0xpc3QuYWRkKCdwbGFjZWQtc2hpcCcpO1xyXG4gIHNoaXBJbWcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gIHNoaXBJbWcuc3R5bGUuekluZGV4ID0gJzEwJzsgLy8gRW5zdXJlIHNoaXBzIGFyZSBiZWxvdyB0aGUgdGlsZXNcclxuXHJcbiAgY29uc3Qgc2hpcFR5cGVzID0gW1xyXG4gICAgJ2NhcnJpZXInLFxyXG4gICAgJ2JhdHRsZS1zaGlwJyxcclxuICAgICdzdWJtYXJpbmUnLFxyXG4gICAgJ2NydWlzZXInLFxyXG4gICAgJ2Rlc3Ryb3llcicsXHJcbiAgXTtcclxuICBzaGlwVHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xyXG4gICAgaWYgKHNoaXBFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0eXBlKSkge1xyXG4gICAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQodHlwZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRpbGVSZWN0ID0gdGlsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBjb25zdCBib2FyZFJlY3QgPSBzaGlwQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICBjb25zdCBvZmZzZXRYID0gdGlsZVJlY3QubGVmdCAtIGJvYXJkUmVjdC5sZWZ0O1xyXG4gIGNvbnN0IG9mZnNldFkgPSB0aWxlUmVjdC50b3AgLSBib2FyZFJlY3QudG9wO1xyXG5cclxuICBzaGlwSW1nLnN0eWxlLmxlZnQgPSBgJHtvZmZzZXRYfXB4YDtcclxuICBzaGlwSW1nLnN0eWxlLnRvcCA9IGAke29mZnNldFl9cHhgO1xyXG5cclxuICBpZiAoaXNSb3RhdGVkKSB7XHJcbiAgICBzaGlwSW1nLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcclxuICAgIHNoaXBJbWcuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ3RvcCBsZWZ0JztcclxuICAgIHNoaXBJbWcuc3R5bGUubGVmdCA9IGAke29mZnNldFggKyB0aWxlUmVjdC5oZWlnaHR9cHhgO1xyXG4gIH1cclxuICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBJbWcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5Zb3VQbGFjZShib2FyZCwgY29vcmRpbmF0ZXMsIHJvdGF0ZSwgZG9lc1NoaXApIHtcclxuICBjb25zdCBudW0gPSBwYXJzZUludChkb2VzU2hpcCwgMTApO1xyXG4gIGxldCBhbnN3ZXIgPSB0cnVlO1xyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbnVtOyBpbmRleCsrKSB7XHJcbiAgICBjb25zdCBuZXdDb29yZGluYXRlcyA9IHJvdGF0ZVxyXG4gICAgICA/IFtjb29yZGluYXRlc1swXSArIGluZGV4LCBjb29yZGluYXRlc1sxXV1cclxuICAgICAgOiBbY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdICsgaW5kZXhdO1xyXG5cclxuICAgIGlmIChib2FyZC5yZXR1cm5QbGFjZShuZXdDb29yZGluYXRlcykgIT09IG51bGwpIHtcclxuICAgICAgYW5zd2VyID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFuc3dlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2luZ1NoaXAodGlsZSwgYm9hcmQpIHtcclxuICBjb25zdCBkb2VzU2hpcCA9IGNoZWNrSWZTaGlwQ2xpY2tlZCgpO1xyXG4gIGNvbnN0IHNoaXBDbGlja2VkID0gcmV0dXJuU2hpcCgpO1xyXG4gIGxldCBudW0gPSBwYXJzZUludChkb2VzU2hpcCwgMTApO1xyXG4gIGlmIChkb2VzU2hpcCAhPT0gbnVsbCkge1xyXG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd051bSwgMTApO1xyXG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd0NvbCwgMTApO1xyXG4gICAgY29uc3Qgcm90YXRlQW5zd2VyID0gY2hlY2tJZlJvdGF0ZSgpO1xyXG5cclxuICAgIGlmICghcm90YXRlQW5zd2VyKSB7XHJcbiAgICAgIGlmIChjb2wgKyBudW0gPiA4KSB7XHJcbiAgICAgICAgbnVtLS07XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocm93ICsgbnVtID4gOCkge1xyXG4gICAgICAgIG51bS0tO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcclxuICAgIGNvb3JkaW5hdGVzLnB1c2gocm93LCBjb2wpO1xyXG4gICAgaWYgKGNhbllvdVBsYWNlKGJvYXJkLCBjb29yZGluYXRlcywgcm90YXRlQW5zd2VyLCBkb2VzU2hpcCkpIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoZG9lc1NoaXApO1xyXG4gICAgICBib2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZXMsIHNoaXAsIHJvdGF0ZUFuc3dlcik7XHJcbiAgICAgIHBsYWNlU2hpcEltYWdlKHNoaXBDbGlja2VkLCB0aWxlLCByb3RhdGVBbnN3ZXIpOyAvLyBQbGFjZSBzaGlwIGltYWdlIGJlaGluZCB0aGUgdGlsZXNcclxuXHJcbiAgICAgIHNoaXBDbGlja2VkLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjYWxjdWxhdGVOdW1iZXIoY29vcmRpbmF0ZXMpIHtcclxuICBjb25zdCBudW0gPSBjb29yZGluYXRlc1sxXSAqIDggKyBjb29yZGluYXRlc1swXTtcclxuICByZXR1cm4gbnVtO1xyXG59XHJcbmZ1bmN0aW9uIGNvbG9yVGlsZXMoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIGNvbG9yKSB7XHJcbiAgY29uc3QgY29sID0gY2hlY2tJZlJvdGF0ZSgpO1xyXG4gIGxldCBwbGFjZSA9IGNhbGN1bGF0ZU51bWJlcihjb29yZGluYXRlcyk7XHJcbiAgY29uc3QgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlLWNob29zZScpO1xyXG5cclxuICBpZiAoIWNvbCkge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNoaXBMZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKHBsYWNlID49IGFsbFRpbGVzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB0aWxlID0gYWxsVGlsZXNbcGxhY2VdO1xyXG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQtdGlsZScpO1xyXG4gICAgICB0aWxlLnN0eWxlLnNldFByb3BlcnR5KCctLWhvdmVyLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICBwbGFjZSArPSA4O1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcExlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoKHBsYWNlICUgOCkgKyAxID09PSA4KSB7XHJcbiAgICAgICAgY29uc3QgdGlsZSA9IGFsbFRpbGVzW3BsYWNlXTtcclxuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQtdGlsZScpO1xyXG4gICAgICAgIHRpbGUuc3R5bGUuc2V0UHJvcGVydHkoJy0taG92ZXItY29sb3InLCBjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRpbGUgPSBhbGxUaWxlc1twbGFjZV07XHJcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZC10aWxlJyk7XHJcbiAgICAgIHRpbGUuc3R5bGUuc2V0UHJvcGVydHkoJy0taG92ZXItY29sb3InLCBjb2xvcik7XHJcbiAgICAgIHBsYWNlKys7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDb2xvcih0aWxlKSB7XHJcbiAgY29uc3Qgc2hpcCA9IHJldHVyblNoaXAoKTtcclxuICBjb25zdCBzaGlwTGVuZ3RoID0gY2hlY2tJZlNoaXBDbGlja2VkKCk7XHJcbiAgaWYgKHNoaXAgIT09IG51bGwpIHtcclxuICAgIGNvbnN0IGNvbG9yID0gc2hpcC5kYXRhc2V0LnNoaXBDb2xvcjtcclxuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dOdW0sIDEwKTtcclxuICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dDb2wsIDEwKTtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XHJcbiAgICBjb29yZGluYXRlcy5wdXNoKHJvdywgY29sKTtcclxuICAgIGNvbG9yVGlsZXMoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIGNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNvbG9yKCkge1xyXG4gIGNvbnN0IGFsbFRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZS1jaG9vc2UnKTtcclxuICBhbGxUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcbiAgICBpZiAodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyZWQtdGlsZScpKSB7XHJcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZC10aWxlJyk7XHJcbiAgICAgIHRpbGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0taG92ZXItY29sb3InKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuWW91UGxheShib2FyZCwgbmFtZSkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xyXG4gIGlmIChkaXYuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSBTdGFydGluZ0dhbWUoYm9hcmQsIG5hbWUpO1xyXG4gIGVsc2UgcmV0dXJuO1xyXG59XHJcbi8vIGJ1ZyBuZWVkIHRvIGNoYW5nZSB0aGUgY2FuIHlvdSBwbGF5IHRvID09PSAwXHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudChhbGxUaWxlcywgYm9hcmQsIG5hbWUpIHtcclxuICBjb25zdCBhbGxTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWNob29zZScpO1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRDbGlja2VkU2hpcChzaGlwKSk7XHJcbiAgfSk7XHJcblxyXG4gIGFsbFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwbGFjaW5nU2hpcCh0aWxlLCBib2FyZCkpO1xyXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiBjaGFuZ2VDb2xvcih0aWxlKSk7XHJcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4gcmVtb3ZlQ29sb3IodGlsZSkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCByb3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXJvdGF0ZScpO1xyXG4gIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJvdGF0ZS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUtb24nKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXN0YXJ0Jyk7XHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjYW5Zb3VQbGF5KGJvYXJkLCBuYW1lKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGxheWVyQ2hvaWNlKG5hbWUpIHtcclxuICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXBhZ2UnKTtcclxuICBob21lUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGNvbnN0IGNob29zZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xyXG5cclxuICBjaG9vc2VDb250YWluZXIuc3R5bGUuekluZGV4ID0gJzEwJztcclxuICBjaG9vc2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9wVXAnKTtcclxuICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xyXG4gIGJvYXJkQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcxMSc7XHJcbiAgaDIuY2xhc3NMaXN0LmFkZCgnY2hvb3NlSGVhZCcpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xyXG4gIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcC1jb250YWluZXInKTtcclxuICBzaGlwQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcxMCc7XHJcbiAgcm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG4gIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG4gIHJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tcm90YXRlJyk7XHJcbiAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXN0YXJ0Jyk7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jb250YWluZXItY2hvb3NlJyk7XHJcblxyXG4gIGgyLnRleHRDb250ZW50ID0gYCR7bmFtZX0gY2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgc2hpcGA7XHJcbiAgcm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XHJcbiAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQnO1xyXG5cclxuICBzaGlwVlMoY2FycmllciwgYmF0dGxlU2hpcCwgc3VibWFyaW5lLCBjcnVpc2VyLCBkZXN0cm95ZXIsIHNoaXBDb250YWluZXIpO1xyXG5cclxuICBjcmVhdGVCb2FyZENob29zZVZzKGJvYXJkQ29udGFpbmVyKTtcclxuICBjb25zdCBib2FyZCA9IGNyZWF0ZVBsYXllckNob2ljZUxvZ2ljKG5hbWUpO1xyXG5cclxuICBoZWFkbGluZS5hcHBlbmRDaGlsZChoMik7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdGF0ZUJ1dHRvbik7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcclxuXHJcbiAgY2hvb3NlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcclxuICBjaG9vc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcclxuICBjaG9vc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xyXG4gIGNob29zZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyKTtcclxuXHJcbiAgYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuICBib2R5LmFwcGVuZENoaWxkKGNob29zZUNvbnRhaW5lcik7XHJcbiAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlLWNob29zZScpO1xyXG5cclxuICBhZGRFdmVudCh0aWxlcywgYm9hcmQsIG5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQbGF5ZXJDaG9pY2UgfTtcclxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYXRyaXgocm93cywgY29scykge1xyXG4gIGNvbnN0IG1hdHJpeCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBbXTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XHJcbiAgICAgIHJvdy5wdXNoKG51bGwpOyAvLyBZb3UgY2FuIGluaXRpYWxpemUgdGhlIG1hdHJpeCB3aXRoIGFueSB2YWx1ZSwgaGVyZSB3ZSB1c2UgMFxyXG4gICAgfVxyXG4gICAgbWF0cml4LnB1c2gocm93KTtcclxuICB9XHJcbiAgcmV0dXJuIG1hdHJpeDtcclxufVxyXG5mdW5jdGlvbiBnZXRSYW5kb21OdW1iZXJCZXR3ZWVuMEFuZDcoKSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xyXG59XHJcbmZ1bmN0aW9uIHRydWVPckZhbHNlKCkge1xyXG4gIHJldHVybiBNYXRoLnJhbmRvbSgpID49IDAuNTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGU2NCgpIHtcclxuICBjb25zdCBhcnJheSA9IFtdO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA2NDsgaW5kZXgrKykge1xyXG4gICAgYXJyYXkucHVzaChpbmRleCk7XHJcbiAgfVxyXG4gIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUJvYXJkKCkge1xyXG4gIGxldCBpc1NoaXBCdWlsdCA9IGZhbHNlO1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gW107XHJcbiAgY29uc3Qgc2hpcDQgPSBTaGlwKDQpO1xyXG4gIGNvbnN0IHNoaXAzID0gU2hpcCgzKTtcclxuICBjb25zdCBzaGlwMkFsc28gPSBTaGlwKDIpO1xyXG4gIGNvbnN0IHNoaXAyID0gU2hpcCgyKTtcclxuICBjb25zdCBzaGlwMSA9IFNoaXAoMSk7XHJcbiAgY29uc3QgbGlzdCA9IGNyZWF0ZTY0KCk7XHJcbiAgbGV0IHBvc2l0aW9uO1xyXG4gIGFsbFNoaXBzLnB1c2goc2hpcDQsIHNoaXAzLCBzaGlwMkFsc28sIHNoaXAyLCBzaGlwMSk7XHJcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGVNYXRyaXgoOCwgOCk7XHJcbiAgY29uc3QgZW5lbXlCb2FyZCA9IGNyZWF0ZU1hdHJpeCg4LCA4KTtcclxuICByZXR1cm4ge1xyXG4gICAgcGxhY2VTaGlwKGNvb3JkaW5hdGVzLCBzaGlwLCBjb2wpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoU2hpcCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoU2hpcDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmICghY29sKSB7XHJcbiAgICAgICAgICBib2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV0gKyBpbmRleF0gPSBzaGlwO1xyXG4gICAgICAgIH0gZWxzZSBib2FyZFtjb29yZGluYXRlc1swXSArIGluZGV4XVtjb29yZGluYXRlc1sxXV0gPSBzaGlwO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2F2ZVBvc2l0aW9uKGNvb3JkaW5hdGVzKSB7XHJcbiAgICAgIHBvc2l0aW9uID0gY29vcmRpbmF0ZXM7XHJcbiAgICB9LFxyXG4gICAgcmV0dXJuUG9zaXRpb24oKSB7XHJcbiAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgIH0sXHJcbiAgICBwbGFjZUVuZW15U2hpcChjb29yZGluYXRlcywgc2hpcCwgY29sKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aFNoaXAgPSBzaGlwLmdldExlbmd0aCgpO1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoU2hpcDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XHJcbiAgICAgICAgaWYgKCFjb2wpIHtcclxuICAgICAgICAgIGVuZW15Qm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdICsgaW5kZXhdID0gc2hpcDtcclxuICAgICAgICAgIGFycmF5LnB1c2goY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdICsgaW5kZXgpO1xyXG4gICAgICAgICAgc2hpcC5lbnRlclBvc2l0aW9uKGFycmF5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZW5lbXlCb2FyZFtjb29yZGluYXRlc1swXSArIGluZGV4XVtjb29yZGluYXRlc1sxXV0gPSBzaGlwO1xyXG4gICAgICAgICAgYXJyYXkucHVzaChjb29yZGluYXRlc1swXSArIGluZGV4LCBjb29yZGluYXRlc1sxXSk7XHJcbiAgICAgICAgICBzaGlwLmVudGVyUG9zaXRpb24oYXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIEF0dGFjayhjb29yZGluYXRlcywgdGlsZSkge1xyXG4gICAgICBjb25zdCBwbGFjZSA9IGVuZW15Qm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXTtcclxuICAgICAgaWYgKHRpbGUgPT09IG51bGwpIHtcclxuICAgICAgICBlbmVteUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPSAwO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBsYWNlLmhpdCgpO1xyXG4gICAgICAgIGVuZW15Qm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9IDI7XHJcbiAgICAgICAgcmV0dXJuIHBsYWNlLmlzU3VuaygpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0Qm9hcmQoKSB7XHJcbiAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH0sXHJcbiAgICBnZXRFbmVteUJvYXJkKCkge1xyXG4gICAgICByZXR1cm4gZW5lbXlCb2FyZDtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlckF0dGFjaygpIHtcclxuICAgICAgbGV0IGRvZXNNaXNzID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVTaGlwKG51bWJlcikge1xyXG4gICAgICBjb25zdCBzaGlwID0gU2hpcChudW1iZXIpO1xyXG4gICAgICBpc1NoaXBCdWlsdCA9IHRydWU7XHJcbiAgICAgIHJldHVybiBbc2hpcCwgaXNTaGlwQnVpbHRdO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVNoaXBTdGF0dXMoKSB7XHJcbiAgICAgIGlzU2hpcEJ1aWx0ID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTaGlwU3RhdHVzKCkge1xyXG4gICAgICByZXR1cm4gaXNTaGlwQnVpbHQ7XHJcbiAgICB9LFxyXG4gICAgcmV0dXJuUGxhY2UoY29vcmRpbmF0ZXMpIHtcclxuICAgICAgcmV0dXJuIGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV07XHJcbiAgICB9LFxyXG4gICAgcmV0dXJuNjRsaXN0KCkge1xyXG4gICAgICByZXR1cm4gbGlzdDtcclxuICAgIH0sXHJcbiAgICBzcGxpY2VOdW0obnVtKSB7XHJcbiAgICAgIGxpc3Quc3BsaWNlKG51bSwgMSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlRW5lbXlCb2FyZCgpIHtcclxuICAgICAgd2hpbGUgKGFsbFNoaXBzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGxldCByb3cgPSBnZXRSYW5kb21OdW1iZXJCZXR3ZWVuMEFuZDcoKTtcclxuICAgICAgICBsZXQgY29sID0gZ2V0UmFuZG9tTnVtYmVyQmV0d2VlbjBBbmQ3KCk7XHJcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbCA9IHRydWVPckZhbHNlKCk7XHJcbiAgICAgICAgY29uc3Qgc2hpcCA9IGFsbFNoaXBzWzBdO1xyXG4gICAgICAgIGxldCBjYW5QbGFjZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGhvcml6b250YWwpIHtcclxuICAgICAgICAgIGlmIChyb3cgKyBzaGlwLmdldExlbmd0aCgpID4gOCkge1xyXG4gICAgICAgICAgICBjYW5QbGFjZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGUgcmVzdCBvZiB0aGUgbG9vcCBhbmQgc3RhcnQgd2l0aCBuZXcgcmFuZG9tIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjb2wgKyBzaGlwLmdldExlbmd0aCgpID4gOCkge1xyXG4gICAgICAgICAgICBjYW5QbGFjZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGUgcmVzdCBvZiB0aGUgbG9vcCBhbmQgc3RhcnQgd2l0aCBuZXcgcmFuZG9tIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmdldExlbmd0aCgpOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlCb2FyZFtyb3cgKyBpbmRleF1bY29sXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIGNhblBsYWNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbmVteUJvYXJkW3Jvd11bY29sICsgaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgY2FuUGxhY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FuUGxhY2UpIHtcclxuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW3JvdywgY29sXTtcclxuICAgICAgICAgIHRoaXMucGxhY2VFbmVteVNoaXAoY29vcmRpbmF0ZXMsIHNoaXAsIGhvcml6b250YWwpO1xyXG4gICAgICAgICAgYWxsU2hpcHMuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5leHBvcnQgeyBHYW1lQm9hcmQgfTtcclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVCb2FyZFZzLCBlbmVteUJvYXJkVnMgfSBmcm9tICcuL2JvYXJkJztcclxuaW1wb3J0IGRlbCBmcm9tICcuLi9waG90b3MvZGVsZXRlLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21OdW1iZXI2NCgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQTGF5ZXJzKG5hbWUpIHtcclxuICBjb25zdCBtYWluUGxheWVyID0gUGxheWVyKG5hbWUpO1xyXG4gIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKCdjb21wdXRlcicpO1xyXG4gIHJldHVybiBbbWFpblBsYXllciwgY29tcHV0ZXJdO1xyXG59XHJcbmZ1bmN0aW9uIGNhbkhpdCh0aWxlLCBib2FyZCkge1xyXG4gIGNvbnN0IHJvdyA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dOdW0sIDEwKTtcclxuICBjb25zdCBjb2wgPSBwYXJzZUludCh0aWxlLmRhdGFzZXQuY29sTnVtLCAxMCk7XHJcbiAgY29uc3QgZW5lbXlCb2FyZExvZ2ljID0gYm9hcmQuZ2V0RW5lbXlCb2FyZCgpO1xyXG4gIGlmIChlbmVteUJvYXJkTG9naWNbcm93XVtjb2xdICE9PSAwICYmIGVuZW15Qm9hcmRMb2dpY1tyb3ddW2NvbF0gIT09IDIpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tUaWxlKHRpbGUsIGJvYXJkKSB7XHJcbiAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd051bSwgMTApO1xyXG4gIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5jb2xOdW0sIDEwKTtcclxuICBjb25zdCBlbmVteUJvYXJkTG9naWMgPSBib2FyZC5nZXRFbmVteUJvYXJkKCk7XHJcbiAgcmV0dXJuIGVuZW15Qm9hcmRMb2dpY1tyb3ddW2NvbF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZU51bWJlcihjb29yZGluYXRlcykge1xyXG4gIGNvbnN0IG51bSA9IGNvb3JkaW5hdGVzWzFdICogOCArIGNvb3JkaW5hdGVzWzBdO1xyXG4gIHJldHVybiBudW07XHJcbn1cclxuZnVuY3Rpb24gYWRkQ2xhc3NlcyhzdGF0dXMsIHRpbGUsIHNoaXAsIGNsYXNzTmFtZSkge1xyXG4gIGlmIChzdGF0dXMgPT09IGZhbHNlKSB7XHJcbiAgICBjb25zdCBkZWxJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGRlbEltZy5jbGFzc0xpc3QuYWRkKCdkZWwnKTtcclxuICAgIGRlbEltZy5zcmMgPSBkZWw7XHJcblxyXG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdlbmVteS1oaXQnKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZGVsSW1nKTtcclxuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMCkge1xyXG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdlbmVteS1taXNzZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcExlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gc2hpcC5yZXR1cm5QbGFjZSgpO1xyXG4gICAgICBjb25zdCBhbGxUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKTtcclxuICAgICAgY29uc3QgbnVtID0gY2FsY3VsYXRlTnVtYmVyKGVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBjdXJyZW50VGlsZSA9IGFsbFRpbGVzW251bV07XHJcblxyXG4gICAgICBpZiAoY3VycmVudFRpbGUgJiYgY3VycmVudFRpbGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGN1cnJlbnRUaWxlLnJlbW92ZUNoaWxkKGN1cnJlbnRUaWxlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjdXJyZW50VGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15LWhpdCcpKSB7XHJcbiAgICAgICAgY3VycmVudFRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnZW5lbXktaGl0Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnJlbnRUaWxlLmNsYXNzTGlzdC5hZGQoJ2VuZW15LXN1bmsnKTtcclxuXHJcbiAgICAgIGNvbnN0IGRlbEltZ0FnYWluID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGRlbEltZ0FnYWluLmNsYXNzTGlzdC5hZGQoJ2RlbCcpO1xyXG4gICAgICBkZWxJbWdBZ2Fpbi5zcmMgPSBkZWw7XHJcbiAgICAgIGN1cnJlbnRUaWxlLmFwcGVuZENoaWxkKGRlbEltZ0FnYWluKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gcGxheWVyVHVybih0aWxlLCBib2FyZCwgbmFtZSkge1xyXG4gIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG4gIGNvbnN0IGluVGlsZSA9IGNoZWNrVGlsZSh0aWxlLCBib2FyZCk7XHJcbiAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd051bSwgMTApO1xyXG4gIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5jb2xOdW0sIDEwKTtcclxuICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xyXG4gIGxldCBzdW5rO1xyXG4gIGNvb3JkaW5hdGVzLnB1c2gocm93LCBjb2wpO1xyXG4gIGlmIChpblRpbGUgIT09IDIgJiYgaW5UaWxlICE9PSAwKSB7XHJcbiAgICBzdW5rID0gYm9hcmQuQXR0YWNrKGNvb3JkaW5hdGVzLCBpblRpbGUpO1xyXG4gICAgaWYgKHN1bmsgPT09IGZhbHNlKSB7XHJcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBoaXQgYSBzaGlwIWA7XHJcbiAgICAgIGFkZENsYXNzZXMoc3VuaywgdGlsZSwgaW5UaWxlKTtcclxuICAgIH0gZWxzZSBpZiAoc3VuayA9PT0gdHJ1ZSkge1xyXG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7bmFtZX0gc3Vua2VuIGEgc2hpcCFgO1xyXG4gICAgICBhZGRDbGFzc2VzKHN1bmssIHRpbGUsIGluVGlsZSwgJy5lbmVteS1yb3cnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBtaXNzZWQhIHRyeSBhZ2FpbmA7XHJcbiAgICAgIGFkZENsYXNzZXMoc3VuaywgdGlsZSwgaW5UaWxlKTtcclxuICAgICAgY29uc3QgZGl2TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLWNvbnRhaW5lcicpO1xyXG4gICAgICBkaXZNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci10dXJuJyk7XHJcbiAgICAgIGRpdk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZW5lbXktdHVybicpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaW5UaWxlID09PSAyKSB7XHJcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgeW91IGNhbid0IGhpdCBpdCBhZ2FpbiFgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGB5b3UgY2FuJ3QgbWlzcyBhZ2FpbmA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmVteUF0dGFja1VudGlsRW5kKGNvb3JkaW5hdGVzLCBhbGxUaWxlcywgdGlsZUxvZ2ljLCBudW1iZXIsIGJvYXJkKSB7XHJcbiAgY29uc3QgZGlyZWN0aW9ucyA9IHRpbGVMb2dpYy5yZXR1cm5EaXJlY3Rpb25zKCk7XHJcbiAgY29uc3QgbmV3Q29vcmRpbmF0ZXMgPSBbXTtcclxuXHJcbiAgaWYgKGRpcmVjdGlvbnNbMF0gPT09ICdkb3duJykge1xyXG4gICAgaWYgKGNvb3JkaW5hdGVzWzBdICE9PSA3KSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVzWzBdICsgMTtcclxuICAgICAgbmV3Q29vcmRpbmF0ZXMucHVzaChyb3csIGNvb3JkaW5hdGVzWzFdKTtcclxuICAgICAgbnVtYmVyKys7XHJcbiAgICAgIGNvbnN0IG5ld1RpbGVWcyA9IGFsbFRpbGVzW251bWJlcl07XHJcbiAgICAgIGVuZW15QXR0YWNrKGJvYXJkLCBudW1iZXIsIG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgbmV3VGlsZVZzKTtcclxuICAgIH1cclxuICAgIHRpbGVMb2dpYy5zaGlmdERpcmVjdGlvbnMoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGRpcmVjdGlvbnNbMF0gPT09ICd1cCcpIHtcclxuICAgIGNvb3JkaW5hdGVzID0gYm9hcmQucmV0dXJuUG9zaXRpb24oKTtcclxuICAgIG51bWJlciA9IGNhbGN1bGF0ZU51bWJlcihjb29yZGluYXRlcyk7XHJcblxyXG4gICAgaWYgKGNvb3JkaW5hdGVzWzBdICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVzWzBdIC0gMTtcclxuICAgICAgbmV3Q29vcmRpbmF0ZXMucHVzaChyb3csIGNvb3JkaW5hdGVzWzFdKTtcclxuICAgICAgbnVtYmVyLS07XHJcbiAgICAgIGNvbnN0IG5ld1RpbGVWcyA9IGFsbFRpbGVzW251bWJlcl07XHJcbiAgICAgIGVuZW15QXR0YWNrKGJvYXJkLCBudW1iZXIsIG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgbmV3VGlsZVZzKTtcclxuICAgIH1cclxuICAgIHRpbGVMb2dpYy5zaGlmdERpcmVjdGlvbnMoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGRpcmVjdGlvbnNbMF0gPT09ICdyaWdodCcpIHtcclxuICAgIGNvb3JkaW5hdGVzID0gYm9hcmQucmV0dXJuUG9zaXRpb24oKTtcclxuICAgIG51bWJlciA9IGNhbGN1bGF0ZU51bWJlcihjb29yZGluYXRlcyk7XHJcbiAgICBpZiAoY29vcmRpbmF0ZXNbMV0gIT09IDcpIHtcclxuICAgICAgY29uc3QgY29sID0gY29vcmRpbmF0ZXNbMV0gKyAxO1xyXG4gICAgICBuZXdDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVzWzBdLCBjb2wpO1xyXG4gICAgICBudW1iZXIgKz0gODtcclxuICAgICAgY29uc3QgbmV3VGlsZVZzID0gYWxsVGlsZXNbbnVtYmVyXTtcclxuICAgICAgZW5lbXlBdHRhY2soYm9hcmQsIG51bWJlciwgbmV3Q29vcmRpbmF0ZXMsIGFsbFRpbGVzLCBuZXdUaWxlVnMpO1xyXG4gICAgfVxyXG4gICAgdGlsZUxvZ2ljLnNoaWZ0RGlyZWN0aW9ucygpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoZGlyZWN0aW9uc1swXSA9PT0gJ2xlZnQnKSB7XHJcbiAgICBjb29yZGluYXRlcyA9IGJvYXJkLnJldHVyblBvc2l0aW9uKCk7XHJcbiAgICBudW1iZXIgPSBjYWxjdWxhdGVOdW1iZXIoY29vcmRpbmF0ZXMpO1xyXG4gICAgaWYgKGNvb3JkaW5hdGVzWzFdICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IGNvbCA9IGNvb3JkaW5hdGVzWzFdIC0gMTtcclxuICAgICAgbmV3Q29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlc1swXSwgY29sKTtcclxuICAgICAgbnVtYmVyIC09IDg7XHJcbiAgICAgIGNvbnN0IG5ld1RpbGVWcyA9IGFsbFRpbGVzW251bWJlcl07XHJcbiAgICAgIGVuZW15QXR0YWNrKGJvYXJkLCBudW1iZXIsIG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgbmV3VGlsZVZzKTtcclxuICAgIH1cclxuICB9XHJcbiAgdGlsZUxvZ2ljLnNoaWZ0RGlyZWN0aW9ucygpO1xyXG4gIHJldHVybjtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5lbXlBdHRhY2soYm9hcmQsIG51bWJlciwgY29vcmRpbmF0ZXMsIGFsbFRpbGVzLCB0aWxlKSB7XHJcbiAgY29uc3QgdGlsZUxvZ2ljID0gYm9hcmQucmV0dXJuUGxhY2UoY29vcmRpbmF0ZXMpO1xyXG4gIGlmICh0aWxlTG9naWMgPT09IG51bGwpIHtcclxuICAgIGFkZENsYXNzZXMoMCwgdGlsZSwgdGlsZUxvZ2ljKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKCh0aWxlTG9naWMgIT09IDApICYgKHRpbGVMb2dpYyAhPT0gMikpIHtcclxuICAgIHRpbGVMb2dpYy5oaXQoKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IHRpbGVMb2dpYy5pc1N1bmsoKTtcclxuICAgIGlmICghc3RhdHVzKSB7XHJcbiAgICAgIGFkZENsYXNzZXMoc3RhdHVzLCB0aWxlLCB0aWxlTG9naWMpO1xyXG4gICAgICBlbmVteUF0dGFja1VudGlsRW5kKGNvb3JkaW5hdGVzLCBhbGxUaWxlcywgdGlsZUxvZ2ljLCBudW1iZXIsIGJvYXJkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFkZENsYXNzZXMoc3RhdHVzLCB0aWxlLCB0aWxlTG9naWMsICcucGxheWVyLXJvdycpO1xyXG4gICAgICAvLyBpIG5lZWQgdG8gYWRkIGEgcmFuZG9tIGF0dGFjayBoZXJlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmVteVR1cm4oYm9hcmQpIHtcclxuICBjb25zdCBsaXN0ID0gYm9hcmQucmV0dXJuNjRsaXN0KCk7XHJcbiAgbGV0IG51bWJlcjtcclxuICBsZXQgYW5zd2VyID0gZmFsc2U7XHJcbiAgd2hpbGUgKGFuc3dlcikge1xyXG4gICAgY29uc3QgcmFuZG9tTnVtID0gZ2V0UmFuZG9tTnVtYmVyNjQoKTtcclxuICAgIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHJhbmRvbU51bSk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIG51bWJlciA9IHJhbmRvbU51bTtcclxuICAgICAgYm9hcmQuc3BsaWNlTnVtKHJhbmRvbU51bSk7XHJcbiAgICAgIGFuc3dlciA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGFsbFRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1yb3cnKTtcclxuICBjb25zdCB0aWxlID0gYWxsVGlsZXNbbnVtYmVyXTtcclxuICBjb25zdCByb3cgPSB0aWxlLmRhdGFzZXQucm93TnVtO1xyXG4gIGNvbnN0IGNvbCA9IHRpbGUuZGF0YXNldC5yb3dDb2w7XHJcbiAgbGV0IGNvb3JkaW5hdGVzID0gW107XHJcbiAgY29vcmRpbmF0ZXMucHVzaChyb3csIGNvbCk7XHJcbiAgYm9hcmQuc2F2ZVBvc2l0aW9uKGNvb3JkaW5hdGVzKTtcclxuXHJcbiAgZW5lbXlBdHRhY2soYm9hcmQsIG51bWJlciwgY29vcmRpbmF0ZXMsIGFsbFRpbGVzLCB0aWxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tUdXJuKHRpbGUsIGJvYXJkLCBuYW1lKSB7XHJcbiAgY29uc3QgZGl2TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLWNvbnRhaW5lcicpO1xyXG4gIGlmIChkaXZNZXNzYWdlLmNsYXNzTGlzdC5jb250YWlucygnd2luJykpIHtcclxuICAgIGNvbnNvbGUubG9nKCd3aW4nKTtcclxuICB9IGVsc2UgaWYgKGRpdk1lc3NhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5ZXItdHVybicpKSB7XHJcbiAgICBwbGF5ZXJUdXJuKHRpbGUsIGJvYXJkLCBuYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZW5lbXlUdXJuKGJvYXJkKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50KGJvYXJkLCBuYW1lKSB7XHJcbiAgY29uc3QgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXktcm93Jyk7XHJcbiAgYWxsVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2hlY2tUdXJuKHRpbGUsIGJvYXJkLCBuYW1lKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdGFydGluZ0dhbWUoYm9hcmQsIG5hbWUpIHtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAnKTtcclxuICBwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcclxuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRsaW5lLXBsYXllcicpO1xyXG4gIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQtYm9hcmQnKTtcclxuXHJcbiAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGAke25hbWV9IGJvYXJkYDtcclxuICBjcmVhdGVCb2FyZFZzKHBsYXllckJvYXJkKTtcclxuICBlbmVteUJvYXJkVnMoZW5lbXlCb2FyZCk7XHJcbiAgYm9hcmQuY3JlYXRlRW5lbXlCb2FyZCgpO1xyXG4gIGNvbnN0IGVuZW15Qm9hcmRMb2dpYyA9IGJvYXJkLmdldEVuZW15Qm9hcmQoKTtcclxuICBjb25zdCBkaXZNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UtY29udGFpbmVyJyk7XHJcbiAgZGl2TWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHVybicpO1xyXG4gIGFkZEV2ZW50KGJvYXJkLCBuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlUExheWVycywgU3RhcnRpbmdHYW1lIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUJvYXJkVnMsIGVuZW15Qm9hcmRWcyB9IGZyb20gJy4vYm9hcmQnO1xyXG5cclxuZnVuY3Rpb24gcGFnZShuYW1lKSB7XHJcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XHJcbiAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHBvbmVudC1ib2FyZCcpO1xyXG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGxpbmUtZ2FtZScpO1xyXG4gIGNyZWF0ZUJvYXJkVnMocGxheWVyQm9hcmQpO1xyXG4gIGVuZW15Qm9hcmRWcyhvcHBvbmVudEJvYXJkKTtcclxuICBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gYCR7bmFtZX0gYm9hcmRgO1xyXG59XHJcbmV4cG9ydCB7IHBhZ2UgfTtcclxuIiwiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xyXG5cclxuZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcclxuICBjb25zdCBib2FyZCA9IEdhbWVCb2FyZCgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIGJvYXJkLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBsYXllckNob2ljZUxvZ2ljKG5hbWUpIHtcclxuICBjb25zdCBnYW1lQm9hcmQgPSBHYW1lQm9hcmQobmFtZSk7XHJcblxyXG4gIHJldHVybiBnYW1lQm9hcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllciwgY3JlYXRlUGxheWVyQ2hvaWNlTG9naWMgfTtcclxuIiwiZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcclxuICBsZXQgaGl0cyA9IDA7XHJcbiAgbGV0IHN1bmsgPSBmYWxzZTtcclxuICBjb25zdCBkaXJlY3Rpb25zID0gWydkb3duJywgJ3VwJywgJ3JpZ2h0JywgJ2xlZnQnXTtcclxuICBjb25zdCBwb3NpdGlvbiA9IFtdO1xyXG4gIHJldHVybiB7XHJcbiAgICByZXR1cm5QbGFjZSgpIHtcclxuICAgICAgcmV0dXJuIHBvc2l0aW9uLnNoaWZ0KCk7XHJcbiAgICB9LFxyXG4gICAgcmV0dXJuRGlyZWN0aW9ucygpIHtcclxuICAgICAgcmV0dXJuIGRpcmVjdGlvbnM7XHJcbiAgICB9LFxyXG4gICAgc2hpZnREaXJlY3Rpb25zKCkge1xyXG4gICAgICBkaXJlY3Rpb25zLnNoaWZ0KCk7XHJcbiAgICB9LFxyXG4gICAgZW50ZXJQb3NpdGlvbihjb29yZGluYXRlcykge1xyXG4gICAgICBwb3NpdGlvbi5wdXNoKGNvb3JkaW5hdGVzKTtcclxuICAgIH0sXHJcbiAgICBnZXROdW1PZkhpdHMoKSB7XHJcbiAgICAgIHJldHVybiBoaXRzO1xyXG4gICAgfSxcclxuICAgIGhpdCgpIHtcclxuICAgICAgaGl0cyArPSAxO1xyXG4gICAgfSxcclxuICAgIGlzU3VuaygpIHtcclxuICAgICAgcmV0dXJuIGxlbmd0aCA9PT0gaGl0cztcclxuICAgIH0sXHJcbiAgICBnZXRMZW5ndGgoKSB7XHJcbiAgICAgIHJldHVybiBsZW5ndGg7XHJcbiAgICB9LFxyXG4gICAgZ2V0U2hpcCgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsZW5ndGgsXHJcbiAgICAgICAgaGl0cyxcclxuICAgICAgICBzdW5rLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbmZ1bmN0aW9uIHNoaXBWUyhcclxuICBjYXJyaWVyLFxyXG4gIGJhdHRsZVNoaXAsXHJcbiAgc3VibWFyaW5lLFxyXG4gIGNydWlzZXIsXHJcbiAgZGVzdHJveWVyLFxyXG4gIHNoaXBDb250YWluZXJcclxuKSB7XHJcbiAgY29uc3QgY2FycmllckltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IGJhdHRsZVNoaXBJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBzdWJtYXJpbmVJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBjcnVpc2VySW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgZGVzdHJveWVySW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY2FycmllckltZy5jbGFzc0xpc3QuYWRkKCdjYXJyaWVyJywgJ3NoaXAtY2hvb3NlJyk7XHJcbiAgYmF0dGxlU2hpcEltZy5jbGFzc0xpc3QuYWRkKCdiYXR0bGUtc2hpcCcsICdzaGlwLWNob29zZScpO1xyXG4gIHN1Ym1hcmluZUltZy5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmUnLCAnc2hpcC1jaG9vc2UnKTtcclxuICBjcnVpc2VySW1nLmNsYXNzTGlzdC5hZGQoJ2NydWlzZXInLCAnc2hpcC1jaG9vc2UnKTtcclxuICBkZXN0cm95ZXJJbWcuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVyJywgJ3NoaXAtY2hvb3NlJyk7XHJcbiAgY2FycmllckltZy5zcmMgPSBjYXJyaWVyO1xyXG4gIGJhdHRsZVNoaXBJbWcuc3JjID0gYmF0dGxlU2hpcDtcclxuICBzdWJtYXJpbmVJbWcuc3JjID0gc3VibWFyaW5lO1xyXG4gIGNydWlzZXJJbWcuc3JjID0gY3J1aXNlcjtcclxuICBkZXN0cm95ZXJJbWcuc3JjID0gZGVzdHJveWVyO1xyXG4gIGNhcnJpZXJJbWcuZGF0YXNldC5zaGlwTGVuZ3RoID0gNDtcclxuICBiYXR0bGVTaGlwSW1nLmRhdGFzZXQuc2hpcExlbmd0aCA9IDM7XHJcbiAgc3VibWFyaW5lSW1nLmRhdGFzZXQuc2hpcExlbmd0aCA9IDI7XHJcbiAgY3J1aXNlckltZy5kYXRhc2V0LnNoaXBMZW5ndGggPSAyO1xyXG4gIGRlc3Ryb3llckltZy5kYXRhc2V0LnNoaXBMZW5ndGggPSAxO1xyXG5cclxuICBjYXJyaWVySW1nLmRhdGFzZXQuc2hpcENvbG9yID0gJyNmZjRkNmQnO1xyXG4gIGJhdHRsZVNoaXBJbWcuZGF0YXNldC5zaGlwQ29sb3IgPSAnI2ZhYTMwNyc7XHJcbiAgc3VibWFyaW5lSW1nLmRhdGFzZXQuc2hpcENvbG9yID0gJyMwMGI0ZDgnO1xyXG4gIGNydWlzZXJJbWcuZGF0YXNldC5zaGlwQ29sb3IgPSAnI2ZmZGQwMCc7XHJcbiAgZGVzdHJveWVySW1nLmRhdGFzZXQuc2hpcENvbG9yID0gJyM3YmYxYTgnO1xyXG5cclxuICBjYXJyaWVySW1nLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICBiYXR0bGVTaGlwSW1nLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICBzdWJtYXJpbmVJbWcuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gIGNydWlzZXJJbWcuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gIGRlc3Ryb3llckltZy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FycmllckltZyk7XHJcbiAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChiYXR0bGVTaGlwSW1nKTtcclxuICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1hcmluZUltZyk7XHJcbiAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChjcnVpc2VySW1nKTtcclxuICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3Ryb3llckltZyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNoaXAsIHNoaXBWUyB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXJDaG9pY2UgfSBmcm9tICcuL3JlbGF0ZWQvY2hvb3NlVlMnO1xyXG5pbXBvcnQgeyBwYWdlIH0gZnJvbSAnLi9yZWxhdGVkL3BhZ2UnO1xyXG5pbXBvcnQgYmF0dGxlc2hpcCBmcm9tICcuL3Bob3Rvcy9iYXR0bGVzaGlwLnBuZyc7XHJcbmltcG9ydCBtZXRhbCBmcm9tICcuL3Bob3Rvcy9zZWFtbGVzcy1tZXRhbC5qcGcnO1xyXG5cclxuZnVuY3Rpb24gaG9tZXBhZ2UoKSB7XHJcbiAgY29uc3QgaG9tZVBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtcGFnZScpO1xyXG4gIGhvbWVQaG90by5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmF0dGxlc2hpcH0pYDtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG5cclxuICBsb2dvLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHttZXRhbH0pYDtcclxuICBsb2dvLnN0eWxlLndlYmtpdEJhY2tncm91bmRDbGlwID0gJ3RleHQnO1xyXG4gIGxvZ28uc3R5bGUuYmFja2dyb3VuZENsaXAgPSAndGV4dCc7XHJcbn1cclxuaG9tZXBhZ2UoKTtcclxuY3JlYXRlUGxheWVyQ2hvaWNlKCdhbWl0Jyk7XHJcblxyXG5jb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LXJvdycpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=