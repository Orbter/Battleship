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
  width: clamp(30px, 11vw, 500px);
  height: clamp(30px, 11vw, 500px);
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
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\nbody {\r\n  height: 100vh;\r\n  margin: 0;\r\n}\r\n.home-page {\r\n  height: 100vh;\r\n  background-size: cover; /* Cover ensures the image covers the entire div */\r\n  background-position: center; /* Centers the background image */\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  // display: none;\r\n}\r\n.header {\r\n  text-align: center;\r\n  font-family: 'Alfa Slab One', serif;\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.welcome {\r\n  font-size: 2.5rem;\r\n}\r\n.logo {\r\n  font-size: 16vw;\r\n  color: transparent;\r\n  font-weight: bold;\r\n}\r\n.enter-name-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 15vh;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  font-family: 'Orbitron', sans-serif;\r\n}\r\n#name {\r\n  width: 80%;\r\n  height: 50px;\r\n  font-size: 2rem;\r\n  font-family: 'Orbitron', sans-serif;\r\n}\r\n.label {\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n}\r\n.button {\r\n  border-radius: 12px;\r\n  background-color: #525252;\r\n  color: white;\r\n  border: 1px solid black;\r\n  width: 55%;\r\n  height: 75%;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  transition: all ease-in 50ms;\r\n  cursor: pointer;\r\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);\r\n}\r\n.button:active {\r\n  font-size: 1.1rem;\r\n  width: 54%;\r\n  height: 74%;\r\n}\r\n.start-container {\r\n  width: 100%;\r\n  height: 10vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.square {\r\n  width: clamp(30px, 11vw, 500px);\r\n  height: clamp(30px, 11vw, 500px);\r\n  border: 1px solid white;\r\n}\r\n.square-choose {\r\n  width: clamp(30px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n  border: 1px solid white;\r\n  transition: background-color 0.3s;\r\n  z-index: 20;\r\n}\r\n.headline {\r\n  text-align: center;\r\n  font-family: 'Alfa Slab One', serif;\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.popUp {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #494953;\r\n  height: 70%; /* Adjusted height to include space for ship-container */\r\n  align-items: center;\r\n  justify-content: space-between; /* Changed to space-between for better alignment */\r\n  width: 85%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-top-left-radius: 12px;\r\n  border-top-right-radius: 12px;\r\n  border-bottom-left-radius: 12px; /* Added for complete border radius */\r\n  border-bottom-right-radius: 12px; /* Added for complete border radius */\r\n  padding: 10px;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.ship-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #212529;\r\n  padding: 10px;\r\n  border-bottom-left-radius: 12px;\r\n  border-bottom-right-radius: 12px;\r\n  width: 100%;\r\n  height: 30%;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n.chooseHead {\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.main-div {\r\n  background-color: #494953;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.title {\r\n  font-family: 'Lato', sans-serif;\r\n  margin: 0;\r\n  color: white;\r\n  font-size: 3.5rem;\r\n  font-weight: bold;\r\n}\r\n.player-board {\r\n  display: flex;\r\n}\r\n.opponent-board {\r\n  display: flex;\r\n}\r\n.main-board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  height: 80vh;\r\n}\r\n\r\n.headline-game {\r\n  font-family: 'Poppins', sans-serif;\r\n\r\n  color: white;\r\n  font-size: 1.5rem;\r\n}\r\n.message-container {\r\n  width: 70%;\r\n  height: clamp(60px, 10vh, 500px);\r\n  border: 1px solid white;\r\n  background-color: #13141d;\r\n  padding: 5px;\r\n}\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 9;\r\n}\r\n.button-container-choose {\r\n  width: 90%;\r\n  height: 5%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n.button-rotate {\r\n  border-radius: 8px;\r\n  height: 100%;\r\n  width: 35%;\r\n  background-color: #f48c06;\r\n}\r\n.button-start {\r\n  border-radius: 8px;\r\n  height: 100%;\r\n  width: 35%;\r\n  background-color: #2eae73;\r\n}\r\n\r\n.button-start:active {\r\n  font-size: 1.1rem;\r\n  width: 34%;\r\n  height: 99%;\r\n}\r\n.button-rotate:active {\r\n  font-size: 1.1rem;\r\n  width: 34%;\r\n  height: 99%;\r\n}\r\n.carrier {\r\n  width: clamp(150px, 40vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.battle-ship {\r\n  width: clamp(120px, 30vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.submarine {\r\n  width: clamp(60px, 20vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.cruiser {\r\n  width: clamp(60px, 20vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.destroyer {\r\n  width: clamp(20px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.hovered-tile {\r\n  background-color: var(--hover-color);\r\n}\r\n.placed-ship {\r\n  z-index: 10;\r\n}\r\n"],"sourceRoot":""}]);
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
function GameBoard() {
  let isShipBuilt = false;
  const allShips = [];
  const ship4 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(4);
  const ship3 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(3);
  const ship2Also = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(2);
  const ship2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(2);
  const ship1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(1);
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
    placeEnemyShip(coordinates, ship, col) {
      const lengthShip = ship.getLength();

      for (let index = 0; index < lengthShip; index++) {
        if (!col) {
          enemyBoard[coordinates[0]][coordinates[1] + index] = ship;
        } else enemyBoard[coordinates[0] + index][coordinates[1]] = ship;
      }
    },
    Attack(coordinates) {
      const place = enemyBoard[coordinates[0]][coordinates[1]];
      place.hit();
      enemyBoard[coordinates[0]][coordinates[1]] = 2;
      return place.isSunk();
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



function createPLayers(name) {
  const mainPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(name);
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)('computer');
  return [mainPlayer, computer];
}
function canHit(tile, board) {
  const row = parseInt(tile.dataSet.rowNum, 10);
  const col = parseInt(tile.dataSet.colNum, 10);
  const enemyBoardLogic = board.getEnemyBoard();
  if (enemyBoardLogic[row][col] !== 0 && enemyBoardLogic[row][col] !== 2) {
    return true;
  }
  return false;
}
function checkTile(tile, board) {
  const row = parseInt(tile.dataSet.rowNum, 10);
  const col = parseInt(tile.dataSet.colNum, 10);
  const enemyBoardLogic = board.getEnemyBoard();
  return enemyBoardLogic[(row, col)];
}

function playerTurn(tile, board) {
  const answerHit = canHit(tile, board);
  const inTile = checkTile(tile, board);
  const row = parseInt(tile.dataSet.rowNum, 10);
  const col = parseInt(tile.dataSet.colNum, 10);
  const coordinates = [];
  coordinates.push(row, col);
  if (inTile !== 2 && inTile !== 0) {
    board.Attack(coordinates);
  }
}

function checkTurn(tile, board) {
  const divMessage = document.querySelector('.message-container');
  if (divMessage.classList.contains('message-container')) {
    playerTurn(tile, board);
  }
}

function addEvent(board) {
  const allTiles = document.querySelectorAll('.enemy-row');
  allTiles.forEach((tile) => {
    tile.addEventListener('click', () => {
      checkTurn(tile, board);
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
  //addEvent(board);
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
  return {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlJQUF5SSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sNkNBQTZDLHdGQUF3RixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9DQUFvQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNsaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxzQkFBc0Isc0JBQXNCLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcscUJBQXFCLFdBQVcsc0JBQXNCLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsc0JBQXNCLHNCQUFzQixVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekV4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDNEI7QUFDbEI7QUFDVztBQUNEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtREFBVSxDQUFDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx1REFBSyxDQUFDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQWtCO0FBQ2xCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3JlbGF0ZWQvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9jaG9vc2VWUy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9yZWxhdGVkL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9yZWxhdGVkL2xvZ2ljR2FtZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9yZWxhdGVkL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGZhK1NsYWIrT25lJmZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDcwMDsxLDkwMCZmYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmZhbWlseT1PcmJpdHJvbjp3Z2h0QDQwMC4uOTAwJmZhbWlseT1QYWNpZmljbyZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaG9tZS1wYWdlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogQ292ZXIgZW5zdXJlcyB0aGUgaW1hZ2UgY292ZXJzIHRoZSBlbnRpcmUgZGl2ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVycyB0aGUgYmFja2dyb3VuZCBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJBbGZhIFNsYWIgT25lXCIsIHNlcmlmO1xuICBtYXJnaW46IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi53ZWxjb21lIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5sb2dvIHtcbiAgZm9udC1zaXplOiAxNnZ3O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZW50ZXItbmFtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZm9udC1mYW1pbHk6IFwiT3JiaXRyb25cIiwgc2Fucy1zZXJpZjtcbn1cblxuI25hbWUge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3JiaXRyb25cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjUyNTI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiA1NSU7XG4gIGhlaWdodDogNzUlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiA1MG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJ1dHRvbjphY3RpdmUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgd2lkdGg6IDU0JTtcbiAgaGVpZ2h0OiA3NCU7XG59XG5cbi5zdGFydC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNxdWFyZSB7XG4gIHdpZHRoOiBjbGFtcCgzMHB4LCAxMXZ3LCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTF2dywgNTAwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnNxdWFyZS1jaG9vc2Uge1xuICB3aWR0aDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgei1pbmRleDogMjA7XG59XG5cbi5oZWFkbGluZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQWxmYSBTbGFiIE9uZVwiLCBzZXJpZjtcbiAgbWFyZ2luOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucG9wVXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTUzO1xuICBoZWlnaHQ6IDcwJTsgLyogQWRqdXN0ZWQgaGVpZ2h0IHRvIGluY2x1ZGUgc3BhY2UgZm9yIHNoaXAtY29udGFpbmVyICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogQ2hhbmdlZCB0byBzcGFjZS1iZXR3ZWVuIGZvciBiZXR0ZXIgYWxpZ25tZW50ICovXG4gIHdpZHRoOiA4NSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4OyAvKiBBZGRlZCBmb3IgY29tcGxldGUgYm9yZGVyIHJhZGl1cyAqL1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDsgLyogQWRkZWQgZm9yIGNvbXBsZXRlIGJvcmRlciByYWRpdXMgKi9cbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5zaGlwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNob29zZUhlYWQge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbi1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTUzO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wbGF5ZXItYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ub3Bwb25lbnQtYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWFpbi1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbi5oZWFkbGluZS1nYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ubWVzc2FnZS1jb250YWluZXIge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IGNsYW1wKDYwcHgsIDEwdmgsIDUwMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzE0MWQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiA5O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lci1jaG9vc2Uge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmJ1dHRvbi1yb3RhdGUge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDM1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0OGMwNjtcbn1cblxuLmJ1dHRvbi1zdGFydCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVhZTczO1xufVxuXG4uYnV0dG9uLXN0YXJ0OmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB3aWR0aDogMzQlO1xuICBoZWlnaHQ6IDk5JTtcbn1cblxuLmJ1dHRvbi1yb3RhdGU6YWN0aXZlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHdpZHRoOiAzNCU7XG4gIGhlaWdodDogOTklO1xufVxuXG4uY2FycmllciB7XG4gIHdpZHRoOiBjbGFtcCgxNTBweCwgNDB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbn1cblxuLmJhdHRsZS1zaGlwIHtcbiAgd2lkdGg6IGNsYW1wKDEyMHB4LCAzMHZ3LCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xufVxuXG4uc3VibWFyaW5lIHtcbiAgd2lkdGg6IGNsYW1wKDYwcHgsIDIwdncsIDUwMHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XG59XG5cbi5jcnVpc2VyIHtcbiAgd2lkdGg6IGNsYW1wKDYwcHgsIDIwdncsIDUwMHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XG59XG5cbi5kZXN0cm95ZXIge1xuICB3aWR0aDogY2xhbXAoMjBweCwgMTB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbn1cblxuLmhvdmVyZWQtdGlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcbn1cblxuLnBsYWNlZC1zaGlwIHtcbiAgei1pbmRleDogMTA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUEsRUFBQSxrREFBQTtFQUNBLDJCQUFBLEVBQUEsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtBQUtGOztBQUhBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQU9GOztBQUxBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7QUFRRjs7QUFOQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFTRjs7QUFQQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQVdGOztBQVRBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWFGOztBQVhBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBLEVBQUEsd0RBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBLEVBQUEsa0RBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBLEVBQUEscUNBQUE7RUFDQSxnQ0FBQSxFQUFBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBY0Y7O0FBWEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFjRjs7QUFYQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQWNGOztBQVpBO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFlRjs7QUFiQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBZ0JGOztBQWRBO0VBQ0UsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFpQkY7O0FBZkE7RUFDRSxhQUFBO0FBa0JGOztBQWhCQTtFQUNFLGFBQUE7QUFtQkY7O0FBakJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBb0JGOztBQWpCQTtFQUNFLGtDQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0FBbUJGOztBQWpCQTtFQUNFLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBb0JGOztBQWxCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FBcUJGOztBQW5CQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBc0JGOztBQXBCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQXVCRjs7QUFyQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUF3QkY7O0FBckJBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQXdCRjs7QUF0QkE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBeUJGOztBQXZCQTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQTJCRjs7QUF6QkE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FBNEJGOztBQTFCQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUE2QkY7O0FBM0JBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQThCRjs7QUE1QkE7RUFDRSxvQ0FBQTtBQStCRjs7QUE3QkE7RUFDRSxXQUFBO0FBZ0NGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsZmErU2xhYitPbmUmZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PU9yYml0cm9uOndnaHRANDAwLi45MDAmZmFtaWx5PVBhY2lmaWNvJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5ob21lLXBhZ2Uge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIENvdmVyIGVuc3VyZXMgdGhlIGltYWdlIGNvdmVycyB0aGUgZW50aXJlIGRpdiAqL1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlICovXFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLy8gZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ0FsZmEgU2xhYiBPbmUnLCBzZXJpZjtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ud2VsY29tZSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuLmxvZ28ge1xcclxcbiAgZm9udC1zaXplOiAxNnZ3O1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5lbnRlci1uYW1lLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcmJpdHJvbicsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbiNuYW1lIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LWZhbWlseTogJ09yYml0cm9uJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLmxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogNTUlO1xcclxcbiAgaGVpZ2h0OiA3NSU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gNTBtcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuLmJ1dHRvbjphY3RpdmUge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB3aWR0aDogNTQlO1xcclxcbiAgaGVpZ2h0OiA3NCU7XFxyXFxufVxcclxcbi5zdGFydC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc3F1YXJlIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMHB4LCAxMXZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDExdncsIDUwMHB4KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4uc3F1YXJlLWNob29zZSB7XFxyXFxuICB3aWR0aDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbn1cXHJcXG4uaGVhZGxpbmUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdBbGZhIFNsYWIgT25lJywgc2VyaWY7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnBvcFVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk1MztcXHJcXG4gIGhlaWdodDogNzAlOyAvKiBBZGp1c3RlZCBoZWlnaHQgdG8gaW5jbHVkZSBzcGFjZSBmb3Igc2hpcC1jb250YWluZXIgKi9cXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIENoYW5nZWQgdG8gc3BhY2UtYmV0d2VlbiBmb3IgYmV0dGVyIGFsaWdubWVudCAqL1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4OyAvKiBBZGRlZCBmb3IgY29tcGxldGUgYm9yZGVyIHJhZGl1cyAqL1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7IC8qIEFkZGVkIGZvciBjb21wbGV0ZSBib3JkZXIgcmFkaXVzICovXFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5jaG9vc2VIZWFkIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm1haW4tZGl2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NTM7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5wbGF5ZXItYm9hcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLm9wcG9uZW50LWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5tYWluLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZS1nYW1lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuLm1lc3NhZ2UtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDYwcHgsIDEwdmgsIDUwMHB4KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTQxZDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuLm92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgei1pbmRleDogOTtcXHJcXG59XFxyXFxuLmJ1dHRvbi1jb250YWluZXItY2hvb3NlIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG4uYnV0dG9uLXJvdGF0ZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMzUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0OGMwNjtcXHJcXG59XFxyXFxuLmJ1dHRvbi1zdGFydCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMzUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYWU3MztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1zdGFydDphY3RpdmUge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB3aWR0aDogMzQlO1xcclxcbiAgaGVpZ2h0OiA5OSU7XFxyXFxufVxcclxcbi5idXR0b24tcm90YXRlOmFjdGl2ZSB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIHdpZHRoOiAzNCU7XFxyXFxuICBoZWlnaHQ6IDk5JTtcXHJcXG59XFxyXFxuLmNhcnJpZXIge1xcclxcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCA0MHZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG59XFxyXFxuLmJhdHRsZS1zaGlwIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgxMjBweCwgMzB2dywgNTAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxufVxcclxcbi5zdWJtYXJpbmUge1xcclxcbiAgd2lkdGg6IGNsYW1wKDYwcHgsIDIwdncsIDUwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbn1cXHJcXG4uY3J1aXNlciB7XFxyXFxuICB3aWR0aDogY2xhbXAoNjBweCwgMjB2dywgNTAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxufVxcclxcbi5kZXN0cm95ZXIge1xcclxcbiAgd2lkdGg6IGNsYW1wKDIwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbn1cXHJcXG4uaG92ZXJlZC10aWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuLnBsYWNlZC1zaGlwIHtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVCb2FyZFZzKGNvbnRhaW5lcikge1xyXG4gIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDg7IGNvbCsrKSB7XHJcbiAgICBjb25zdCBjb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbERpdi5jbGFzc0xpc3QuYWRkKCdjb2wnKTtcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDg7IHJvdysrKSB7XHJcbiAgICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICByb3dEaXYuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcbiAgICAgIHJvd0Rpdi5kYXRhc2V0LnJvd051bSA9IHJvdztcclxuICAgICAgcm93RGl2LmRhdGFzZXQucm93Q29sID0gY29sO1xyXG4gICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQocm93RGl2KTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQm9hcmRDaG9vc2VWcyhjb250YWluZXIpIHtcclxuICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xyXG4gICAgY29uc3QgY29sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb2xEaXYuY2xhc3NMaXN0LmFkZCgnY29sJyk7XHJcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA4OyByb3crKykge1xyXG4gICAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZS1jaG9vc2UnKTtcclxuICAgICAgcm93RGl2LmRhdGFzZXQucm93TnVtID0gcm93O1xyXG4gICAgICByb3dEaXYuZGF0YXNldC5yb3dDb2wgPSBjb2w7XHJcbiAgICAgIGNvbERpdi5hcHBlbmRDaGlsZChyb3dEaXYpO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmVteUJvYXJkVnMoY29udGFpbmVyKSB7XHJcbiAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcclxuICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29sRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbCcpO1xyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgODsgcm93KyspIHtcclxuICAgICAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoJ2VuZW15LXJvdycpO1xyXG5cclxuICAgICAgcm93RGl2LmRhdGFzZXQucm93TnVtID0gcm93O1xyXG4gICAgICByb3dEaXYuZGF0YXNldC5jb2xOdW0gPSBjb2w7XHJcbiAgICAgIGNvbERpdi5hcHBlbmRDaGlsZChyb3dEaXYpO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVCb2FyZFZzLCBlbmVteUJvYXJkVnMsIGNyZWF0ZUJvYXJkQ2hvb3NlVnMgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQm9hcmRDaG9vc2VWcyB9IGZyb20gJy4vYm9hcmQnO1xyXG5pbXBvcnQgeyBTaGlwLCBzaGlwVlMgfSBmcm9tICcuL3NoaXAnO1xyXG5pbXBvcnQgYmF0dGxlU2hpcCBmcm9tICcuLi9waG90b3MvYmF0dGxlU2hpcDIucG5nJztcclxuaW1wb3J0IGNhcnJpZXIgZnJvbSAnLi4vcGhvdG9zL2NhcnJpZXIucG5nJztcclxuaW1wb3J0IGNydWlzZXIgZnJvbSAnLi4vcGhvdG9zL2NydWlzZXIucG5nJztcclxuaW1wb3J0IGRlc3Ryb3llciBmcm9tICcuLi9waG90b3MvZGVzdHJveWVyLnBuZyc7XHJcbmltcG9ydCBzdWJtYXJpbmUgZnJvbSAnLi4vcGhvdG9zL3N1Ym1hcmluZS5wbmcnO1xyXG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXJDaG9pY2VMb2dpYyB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgU3RhcnRpbmdHYW1lIH0gZnJvbSAnLi9sb2dpY0dhbWUnO1xyXG5cclxuZnVuY3Rpb24gYWRkQ2xpY2tlZFNoaXAoY2xpY2tlZFNoaXApIHtcclxuICBjb25zdCBhbGxTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWNob29zZScpO1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xyXG4gIH0pO1xyXG4gIGNsaWNrZWRTaGlwLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZlNoaXBDbGlja2VkKCkge1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtY2hvb3NlJyk7XHJcbiAgbGV0IGFuc3dlclNoaXA7XHJcbiAgbGV0IGFuc3dlciA9IGZhbHNlO1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XHJcbiAgICAgIGFuc3dlciA9IHRydWU7XHJcbiAgICAgIGFuc3dlclNoaXAgPSBzaGlwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChhbnN3ZXIpIHJldHVybiBhbnN3ZXJTaGlwLmRhdGFzZXQuc2hpcExlbmd0aDtcclxuICBlbHNlIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXR1cm5TaGlwKCkge1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtY2hvb3NlJyk7XHJcbiAgbGV0IGFuc3dlclNoaXAgPSBudWxsO1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XHJcbiAgICAgIGFuc3dlclNoaXAgPSBzaGlwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBhbnN3ZXJTaGlwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUm90YXRlKCkge1xyXG4gIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tcm90YXRlJyk7XHJcbiAgaWYgKHJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZS1vbicpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIHBsYWNlU2hpcEltYWdlKHNoaXBFbGVtZW50LCB0aWxlLCBpc1JvdGF0ZWQpIHtcclxuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XHJcbiAgaWYgKCFzaGlwQ29udGFpbmVyIHx8ICFzaGlwRWxlbWVudCB8fCAhdGlsZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignSW52YWxpZCBzaGlwRWxlbWVudCwgdGlsZSwgb3IgYm9hcmQgY29udGFpbmVyJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaGlwSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgc2hpcEltZy5zcmMgPSBzaGlwRWxlbWVudC5zcmM7XHJcbiAgc2hpcEltZy5jbGFzc0xpc3QuYWRkKCdwbGFjZWQtc2hpcCcpO1xyXG4gIHNoaXBJbWcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gIHNoaXBJbWcuc3R5bGUuekluZGV4ID0gJzEwJzsgLy8gRW5zdXJlIHNoaXBzIGFyZSBiZWxvdyB0aGUgdGlsZXNcclxuXHJcbiAgY29uc3Qgc2hpcFR5cGVzID0gW1xyXG4gICAgJ2NhcnJpZXInLFxyXG4gICAgJ2JhdHRsZS1zaGlwJyxcclxuICAgICdzdWJtYXJpbmUnLFxyXG4gICAgJ2NydWlzZXInLFxyXG4gICAgJ2Rlc3Ryb3llcicsXHJcbiAgXTtcclxuICBzaGlwVHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xyXG4gICAgaWYgKHNoaXBFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0eXBlKSkge1xyXG4gICAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQodHlwZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRpbGVSZWN0ID0gdGlsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBjb25zdCBib2FyZFJlY3QgPSBzaGlwQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICBjb25zdCBvZmZzZXRYID0gdGlsZVJlY3QubGVmdCAtIGJvYXJkUmVjdC5sZWZ0O1xyXG4gIGNvbnN0IG9mZnNldFkgPSB0aWxlUmVjdC50b3AgLSBib2FyZFJlY3QudG9wO1xyXG5cclxuICBzaGlwSW1nLnN0eWxlLmxlZnQgPSBgJHtvZmZzZXRYfXB4YDtcclxuICBzaGlwSW1nLnN0eWxlLnRvcCA9IGAke29mZnNldFl9cHhgO1xyXG5cclxuICBpZiAoaXNSb3RhdGVkKSB7XHJcbiAgICBzaGlwSW1nLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcclxuICAgIHNoaXBJbWcuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ3RvcCBsZWZ0JztcclxuICAgIHNoaXBJbWcuc3R5bGUubGVmdCA9IGAke29mZnNldFggKyB0aWxlUmVjdC5oZWlnaHR9cHhgO1xyXG4gIH1cclxuICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBJbWcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5Zb3VQbGFjZShib2FyZCwgY29vcmRpbmF0ZXMsIHJvdGF0ZSwgZG9lc1NoaXApIHtcclxuICBjb25zdCBudW0gPSBwYXJzZUludChkb2VzU2hpcCwgMTApO1xyXG4gIGxldCBhbnN3ZXIgPSB0cnVlO1xyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbnVtOyBpbmRleCsrKSB7XHJcbiAgICBjb25zdCBuZXdDb29yZGluYXRlcyA9IHJvdGF0ZVxyXG4gICAgICA/IFtjb29yZGluYXRlc1swXSArIGluZGV4LCBjb29yZGluYXRlc1sxXV1cclxuICAgICAgOiBbY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdICsgaW5kZXhdO1xyXG5cclxuICAgIGlmIChib2FyZC5yZXR1cm5QbGFjZShuZXdDb29yZGluYXRlcykgIT09IG51bGwpIHtcclxuICAgICAgYW5zd2VyID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFuc3dlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2luZ1NoaXAodGlsZSwgYm9hcmQpIHtcclxuICBjb25zdCBkb2VzU2hpcCA9IGNoZWNrSWZTaGlwQ2xpY2tlZCgpO1xyXG4gIGNvbnN0IHNoaXBDbGlja2VkID0gcmV0dXJuU2hpcCgpO1xyXG4gIGxldCBudW0gPSBwYXJzZUludChkb2VzU2hpcCwgMTApO1xyXG4gIGlmIChkb2VzU2hpcCAhPT0gbnVsbCkge1xyXG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd051bSwgMTApO1xyXG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd0NvbCwgMTApO1xyXG4gICAgY29uc3Qgcm90YXRlQW5zd2VyID0gY2hlY2tJZlJvdGF0ZSgpO1xyXG5cclxuICAgIGlmICghcm90YXRlQW5zd2VyKSB7XHJcbiAgICAgIGlmIChjb2wgKyBudW0gPiA4KSB7XHJcbiAgICAgICAgbnVtLS07XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocm93ICsgbnVtID4gOCkge1xyXG4gICAgICAgIG51bS0tO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcclxuICAgIGNvb3JkaW5hdGVzLnB1c2gocm93LCBjb2wpO1xyXG4gICAgaWYgKGNhbllvdVBsYWNlKGJvYXJkLCBjb29yZGluYXRlcywgcm90YXRlQW5zd2VyLCBkb2VzU2hpcCkpIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoZG9lc1NoaXApO1xyXG4gICAgICBib2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZXMsIHNoaXAsIHJvdGF0ZUFuc3dlcik7XHJcbiAgICAgIHBsYWNlU2hpcEltYWdlKHNoaXBDbGlja2VkLCB0aWxlLCByb3RhdGVBbnN3ZXIpOyAvLyBQbGFjZSBzaGlwIGltYWdlIGJlaGluZCB0aGUgdGlsZXNcclxuXHJcbiAgICAgIHNoaXBDbGlja2VkLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjYWxjdWxhdGVOdW1iZXIoY29vcmRpbmF0ZXMpIHtcclxuICBjb25zdCBudW0gPSBjb29yZGluYXRlc1sxXSAqIDggKyBjb29yZGluYXRlc1swXTtcclxuICByZXR1cm4gbnVtO1xyXG59XHJcbmZ1bmN0aW9uIGNvbG9yVGlsZXMoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIGNvbG9yKSB7XHJcbiAgY29uc3QgY29sID0gY2hlY2tJZlJvdGF0ZSgpO1xyXG4gIGxldCBwbGFjZSA9IGNhbGN1bGF0ZU51bWJlcihjb29yZGluYXRlcyk7XHJcbiAgY29uc3QgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlLWNob29zZScpO1xyXG5cclxuICBpZiAoIWNvbCkge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNoaXBMZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKHBsYWNlID49IGFsbFRpbGVzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB0aWxlID0gYWxsVGlsZXNbcGxhY2VdO1xyXG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQtdGlsZScpO1xyXG4gICAgICB0aWxlLnN0eWxlLnNldFByb3BlcnR5KCctLWhvdmVyLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICBwbGFjZSArPSA4O1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcExlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoKHBsYWNlICUgOCkgKyAxID09PSA4KSB7XHJcbiAgICAgICAgY29uc3QgdGlsZSA9IGFsbFRpbGVzW3BsYWNlXTtcclxuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQtdGlsZScpO1xyXG4gICAgICAgIHRpbGUuc3R5bGUuc2V0UHJvcGVydHkoJy0taG92ZXItY29sb3InLCBjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRpbGUgPSBhbGxUaWxlc1twbGFjZV07XHJcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZC10aWxlJyk7XHJcbiAgICAgIHRpbGUuc3R5bGUuc2V0UHJvcGVydHkoJy0taG92ZXItY29sb3InLCBjb2xvcik7XHJcbiAgICAgIHBsYWNlKys7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDb2xvcih0aWxlKSB7XHJcbiAgY29uc3Qgc2hpcCA9IHJldHVyblNoaXAoKTtcclxuICBjb25zdCBzaGlwTGVuZ3RoID0gY2hlY2tJZlNoaXBDbGlja2VkKCk7XHJcbiAgaWYgKHNoaXAgIT09IG51bGwpIHtcclxuICAgIGNvbnN0IGNvbG9yID0gc2hpcC5kYXRhc2V0LnNoaXBDb2xvcjtcclxuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dOdW0sIDEwKTtcclxuICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dDb2wsIDEwKTtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XHJcbiAgICBjb29yZGluYXRlcy5wdXNoKHJvdywgY29sKTtcclxuICAgIGNvbG9yVGlsZXMoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIGNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNvbG9yKCkge1xyXG4gIGNvbnN0IGFsbFRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZS1jaG9vc2UnKTtcclxuICBhbGxUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcbiAgICBpZiAodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyZWQtdGlsZScpKSB7XHJcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZC10aWxlJyk7XHJcbiAgICAgIHRpbGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0taG92ZXItY29sb3InKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuWW91UGxheShib2FyZCwgbmFtZSkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xyXG4gIGlmIChkaXYuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSBTdGFydGluZ0dhbWUoYm9hcmQsIG5hbWUpO1xyXG4gIGVsc2UgcmV0dXJuO1xyXG59XHJcbi8vIGJ1ZyBuZWVkIHRvIGNoYW5nZSB0aGUgY2FuIHlvdSBwbGF5IHRvID09PSAwXHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudChhbGxUaWxlcywgYm9hcmQsIG5hbWUpIHtcclxuICBjb25zdCBhbGxTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWNob29zZScpO1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRDbGlja2VkU2hpcChzaGlwKSk7XHJcbiAgfSk7XHJcblxyXG4gIGFsbFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwbGFjaW5nU2hpcCh0aWxlLCBib2FyZCkpO1xyXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiBjaGFuZ2VDb2xvcih0aWxlKSk7XHJcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4gcmVtb3ZlQ29sb3IodGlsZSkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCByb3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXJvdGF0ZScpO1xyXG4gIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJvdGF0ZS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUtb24nKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXN0YXJ0Jyk7XHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjYW5Zb3VQbGF5KGJvYXJkLCBuYW1lKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGxheWVyQ2hvaWNlKG5hbWUpIHtcclxuICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXBhZ2UnKTtcclxuICBob21lUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGNvbnN0IGNob29zZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xyXG5cclxuICBjaG9vc2VDb250YWluZXIuc3R5bGUuekluZGV4ID0gJzEwJztcclxuICBjaG9vc2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9wVXAnKTtcclxuICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xyXG4gIGJvYXJkQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcxMSc7XHJcbiAgaDIuY2xhc3NMaXN0LmFkZCgnY2hvb3NlSGVhZCcpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xyXG4gIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcC1jb250YWluZXInKTtcclxuICBzaGlwQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcxMCc7XHJcbiAgcm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG4gIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG4gIHJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tcm90YXRlJyk7XHJcbiAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXN0YXJ0Jyk7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jb250YWluZXItY2hvb3NlJyk7XHJcblxyXG4gIGgyLnRleHRDb250ZW50ID0gYCR7bmFtZX0gY2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgc2hpcGA7XHJcbiAgcm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XHJcbiAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQnO1xyXG5cclxuICBzaGlwVlMoY2FycmllciwgYmF0dGxlU2hpcCwgc3VibWFyaW5lLCBjcnVpc2VyLCBkZXN0cm95ZXIsIHNoaXBDb250YWluZXIpO1xyXG5cclxuICBjcmVhdGVCb2FyZENob29zZVZzKGJvYXJkQ29udGFpbmVyKTtcclxuICBjb25zdCBib2FyZCA9IGNyZWF0ZVBsYXllckNob2ljZUxvZ2ljKG5hbWUpO1xyXG5cclxuICBoZWFkbGluZS5hcHBlbmRDaGlsZChoMik7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdGF0ZUJ1dHRvbik7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcclxuXHJcbiAgY2hvb3NlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcclxuICBjaG9vc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcclxuICBjaG9vc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xyXG4gIGNob29zZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyKTtcclxuXHJcbiAgYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuICBib2R5LmFwcGVuZENoaWxkKGNob29zZUNvbnRhaW5lcik7XHJcbiAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlLWNob29zZScpO1xyXG5cclxuICBhZGRFdmVudCh0aWxlcywgYm9hcmQsIG5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQbGF5ZXJDaG9pY2UgfTtcclxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYXRyaXgocm93cywgY29scykge1xyXG4gIGNvbnN0IG1hdHJpeCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBbXTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XHJcbiAgICAgIHJvdy5wdXNoKG51bGwpOyAvLyBZb3UgY2FuIGluaXRpYWxpemUgdGhlIG1hdHJpeCB3aXRoIGFueSB2YWx1ZSwgaGVyZSB3ZSB1c2UgMFxyXG4gICAgfVxyXG4gICAgbWF0cml4LnB1c2gocm93KTtcclxuICB9XHJcbiAgcmV0dXJuIG1hdHJpeDtcclxufVxyXG5mdW5jdGlvbiBnZXRSYW5kb21OdW1iZXJCZXR3ZWVuMEFuZDcoKSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xyXG59XHJcbmZ1bmN0aW9uIHRydWVPckZhbHNlKCkge1xyXG4gIHJldHVybiBNYXRoLnJhbmRvbSgpID49IDAuNTtcclxufVxyXG5mdW5jdGlvbiBHYW1lQm9hcmQoKSB7XHJcbiAgbGV0IGlzU2hpcEJ1aWx0ID0gZmFsc2U7XHJcbiAgY29uc3QgYWxsU2hpcHMgPSBbXTtcclxuICBjb25zdCBzaGlwNCA9IFNoaXAoNCk7XHJcbiAgY29uc3Qgc2hpcDMgPSBTaGlwKDMpO1xyXG4gIGNvbnN0IHNoaXAyQWxzbyA9IFNoaXAoMik7XHJcbiAgY29uc3Qgc2hpcDIgPSBTaGlwKDIpO1xyXG4gIGNvbnN0IHNoaXAxID0gU2hpcCgxKTtcclxuICBhbGxTaGlwcy5wdXNoKHNoaXA0LCBzaGlwMywgc2hpcDJBbHNvLCBzaGlwMiwgc2hpcDEpO1xyXG5cclxuICBjb25zdCBib2FyZCA9IGNyZWF0ZU1hdHJpeCg4LCA4KTtcclxuICBjb25zdCBlbmVteUJvYXJkID0gY3JlYXRlTWF0cml4KDgsIDgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwbGFjZVNoaXAoY29vcmRpbmF0ZXMsIHNoaXAsIGNvbCkge1xyXG4gICAgICBjb25zdCBsZW5ndGhTaGlwID0gc2hpcC5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGhTaGlwOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKCFjb2wpIHtcclxuICAgICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXSArIGluZGV4XSA9IHNoaXA7XHJcbiAgICAgICAgfSBlbHNlIGJvYXJkW2Nvb3JkaW5hdGVzWzBdICsgaW5kZXhdW2Nvb3JkaW5hdGVzWzFdXSA9IHNoaXA7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbGFjZUVuZW15U2hpcChjb29yZGluYXRlcywgc2hpcCwgY29sKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aFNoaXAgPSBzaGlwLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aFNoaXA7IGluZGV4KyspIHtcclxuICAgICAgICBpZiAoIWNvbCkge1xyXG4gICAgICAgICAgZW5lbXlCb2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV0gKyBpbmRleF0gPSBzaGlwO1xyXG4gICAgICAgIH0gZWxzZSBlbmVteUJvYXJkW2Nvb3JkaW5hdGVzWzBdICsgaW5kZXhdW2Nvb3JkaW5hdGVzWzFdXSA9IHNoaXA7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBBdHRhY2soY29vcmRpbmF0ZXMpIHtcclxuICAgICAgY29uc3QgcGxhY2UgPSBlbmVteUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV07XHJcbiAgICAgIHBsYWNlLmhpdCgpO1xyXG4gICAgICBlbmVteUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPSAyO1xyXG4gICAgICByZXR1cm4gcGxhY2UuaXNTdW5rKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0Qm9hcmQoKSB7XHJcbiAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH0sXHJcbiAgICBnZXRFbmVteUJvYXJkKCkge1xyXG4gICAgICByZXR1cm4gZW5lbXlCb2FyZDtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlckF0dGFjaygpIHtcclxuICAgICAgbGV0IGRvZXNNaXNzID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVTaGlwKG51bWJlcikge1xyXG4gICAgICBjb25zdCBzaGlwID0gU2hpcChudW1iZXIpO1xyXG4gICAgICBpc1NoaXBCdWlsdCA9IHRydWU7XHJcbiAgICAgIHJldHVybiBbc2hpcCwgaXNTaGlwQnVpbHRdO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVNoaXBTdGF0dXMoKSB7XHJcbiAgICAgIGlzU2hpcEJ1aWx0ID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTaGlwU3RhdHVzKCkge1xyXG4gICAgICByZXR1cm4gaXNTaGlwQnVpbHQ7XHJcbiAgICB9LFxyXG4gICAgcmV0dXJuUGxhY2UoY29vcmRpbmF0ZXMpIHtcclxuICAgICAgcmV0dXJuIGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV07XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZUVuZW15Qm9hcmQoKSB7XHJcbiAgICAgIHdoaWxlIChhbGxTaGlwcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBsZXQgcm93ID0gZ2V0UmFuZG9tTnVtYmVyQmV0d2VlbjBBbmQ3KCk7XHJcbiAgICAgICAgbGV0IGNvbCA9IGdldFJhbmRvbU51bWJlckJldHdlZW4wQW5kNygpO1xyXG4gICAgICAgIGNvbnN0IGhvcml6b250YWwgPSB0cnVlT3JGYWxzZSgpO1xyXG4gICAgICAgIGNvbnN0IHNoaXAgPSBhbGxTaGlwc1swXTtcclxuICAgICAgICBsZXQgY2FuUGxhY2UgPSB0cnVlO1xyXG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XHJcbiAgICAgICAgICBpZiAocm93ICsgc2hpcC5nZXRMZW5ndGgoKSA+IDgpIHtcclxuICAgICAgICAgICAgY2FuUGxhY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29udGludWU7IC8vIFNraXAgdGhlIHJlc3Qgb2YgdGhlIGxvb3AgYW5kIHN0YXJ0IHdpdGggbmV3IHJhbmRvbSBjb29yZGluYXRlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoY29sICsgc2hpcC5nZXRMZW5ndGgoKSA+IDgpIHtcclxuICAgICAgICAgICAgY2FuUGxhY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29udGludWU7IC8vIFNraXAgdGhlIHJlc3Qgb2YgdGhlIGxvb3AgYW5kIHN0YXJ0IHdpdGggbmV3IHJhbmRvbSBjb29yZGluYXRlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgaWYgKGVuZW15Qm9hcmRbcm93ICsgaW5kZXhdW2NvbF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICBjYW5QbGFjZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlCb2FyZFtyb3ddW2NvbCArIGluZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIGNhblBsYWNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhblBsYWNlKSB7XHJcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtyb3csIGNvbF07XHJcbiAgICAgICAgICB0aGlzLnBsYWNlRW5lbXlTaGlwKGNvb3JkaW5hdGVzLCBzaGlwLCBob3Jpem9udGFsKTtcclxuICAgICAgICAgIGFsbFNoaXBzLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IHsgR2FtZUJvYXJkIH07XHJcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgY3JlYXRlQm9hcmRWcywgZW5lbXlCb2FyZFZzIH0gZnJvbSAnLi9ib2FyZCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQTGF5ZXJzKG5hbWUpIHtcclxuICBjb25zdCBtYWluUGxheWVyID0gUGxheWVyKG5hbWUpO1xyXG4gIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKCdjb21wdXRlcicpO1xyXG4gIHJldHVybiBbbWFpblBsYXllciwgY29tcHV0ZXJdO1xyXG59XHJcbmZ1bmN0aW9uIGNhbkhpdCh0aWxlLCBib2FyZCkge1xyXG4gIGNvbnN0IHJvdyA9IHBhcnNlSW50KHRpbGUuZGF0YVNldC5yb3dOdW0sIDEwKTtcclxuICBjb25zdCBjb2wgPSBwYXJzZUludCh0aWxlLmRhdGFTZXQuY29sTnVtLCAxMCk7XHJcbiAgY29uc3QgZW5lbXlCb2FyZExvZ2ljID0gYm9hcmQuZ2V0RW5lbXlCb2FyZCgpO1xyXG4gIGlmIChlbmVteUJvYXJkTG9naWNbcm93XVtjb2xdICE9PSAwICYmIGVuZW15Qm9hcmRMb2dpY1tyb3ddW2NvbF0gIT09IDIpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tUaWxlKHRpbGUsIGJvYXJkKSB7XHJcbiAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhU2V0LnJvd051bSwgMTApO1xyXG4gIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGUuZGF0YVNldC5jb2xOdW0sIDEwKTtcclxuICBjb25zdCBlbmVteUJvYXJkTG9naWMgPSBib2FyZC5nZXRFbmVteUJvYXJkKCk7XHJcbiAgcmV0dXJuIGVuZW15Qm9hcmRMb2dpY1socm93LCBjb2wpXTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheWVyVHVybih0aWxlLCBib2FyZCkge1xyXG4gIGNvbnN0IGFuc3dlckhpdCA9IGNhbkhpdCh0aWxlLCBib2FyZCk7XHJcbiAgY29uc3QgaW5UaWxlID0gY2hlY2tUaWxlKHRpbGUsIGJvYXJkKTtcclxuICBjb25zdCByb3cgPSBwYXJzZUludCh0aWxlLmRhdGFTZXQucm93TnVtLCAxMCk7XHJcbiAgY29uc3QgY29sID0gcGFyc2VJbnQodGlsZS5kYXRhU2V0LmNvbE51bSwgMTApO1xyXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XHJcbiAgY29vcmRpbmF0ZXMucHVzaChyb3csIGNvbCk7XHJcbiAgaWYgKGluVGlsZSAhPT0gMiAmJiBpblRpbGUgIT09IDApIHtcclxuICAgIGJvYXJkLkF0dGFjayhjb29yZGluYXRlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1R1cm4odGlsZSwgYm9hcmQpIHtcclxuICBjb25zdCBkaXZNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UtY29udGFpbmVyJyk7XHJcbiAgaWYgKGRpdk1lc3NhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZXNzYWdlLWNvbnRhaW5lcicpKSB7XHJcbiAgICBwbGF5ZXJUdXJuKHRpbGUsIGJvYXJkKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50KGJvYXJkKSB7XHJcbiAgY29uc3QgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXktcm93Jyk7XHJcbiAgYWxsVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2hlY2tUdXJuKHRpbGUsIGJvYXJkKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdGFydGluZ0dhbWUoYm9hcmQsIG5hbWUpIHtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAnKTtcclxuICBwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcclxuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRsaW5lLXBsYXllcicpO1xyXG4gIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQtYm9hcmQnKTtcclxuXHJcbiAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGAke25hbWV9IGJvYXJkYDtcclxuICBjcmVhdGVCb2FyZFZzKHBsYXllckJvYXJkKTtcclxuICBlbmVteUJvYXJkVnMoZW5lbXlCb2FyZCk7XHJcbiAgYm9hcmQuY3JlYXRlRW5lbXlCb2FyZCgpO1xyXG4gIGNvbnN0IGVuZW15Qm9hcmRMb2dpYyA9IGJvYXJkLmdldEVuZW15Qm9hcmQoKTtcclxuICBjb25zdCBkaXZNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UtY29udGFpbmVyJyk7XHJcbiAgZGl2TWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHVybicpO1xyXG4gIC8vYWRkRXZlbnQoYm9hcmQpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQTGF5ZXJzLCBTdGFydGluZ0dhbWUgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQm9hcmRWcywgZW5lbXlCb2FyZFZzIH0gZnJvbSAnLi9ib2FyZCc7XHJcblxyXG5mdW5jdGlvbiBwYWdlKG5hbWUpIHtcclxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcclxuICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wcG9uZW50LWJvYXJkJyk7XHJcbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkbGluZS1nYW1lJyk7XHJcbiAgY3JlYXRlQm9hcmRWcyhwbGF5ZXJCb2FyZCk7XHJcbiAgZW5lbXlCb2FyZFZzKG9wcG9uZW50Qm9hcmQpO1xyXG4gIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBib2FyZGA7XHJcbn1cclxuZXhwb3J0IHsgcGFnZSB9O1xyXG4iLCJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XHJcblxyXG5mdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xyXG4gIGNvbnN0IGJvYXJkID0gR2FtZUJvYXJkKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gICAgYm9hcmQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGxheWVyQ2hvaWNlTG9naWMobmFtZSkge1xyXG4gIGNvbnN0IGdhbWVCb2FyZCA9IEdhbWVCb2FyZChuYW1lKTtcclxuXHJcbiAgcmV0dXJuIGdhbWVCb2FyZDtcclxufVxyXG5cclxuZXhwb3J0IHsgUGxheWVyLCBjcmVhdGVQbGF5ZXJDaG9pY2VMb2dpYyB9O1xyXG4iLCJmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xyXG4gIGxldCBoaXRzID0gMDtcclxuICBsZXQgc3VuayA9IGZhbHNlO1xyXG4gIHJldHVybiB7XHJcbiAgICBnZXROdW1PZkhpdHMoKSB7XHJcbiAgICAgIHJldHVybiBoaXRzO1xyXG4gICAgfSxcclxuICAgIGhpdCgpIHtcclxuICAgICAgaGl0cyArPSAxO1xyXG4gICAgfSxcclxuICAgIGlzU3VuaygpIHtcclxuICAgICAgcmV0dXJuIGxlbmd0aCA9PT0gaGl0cztcclxuICAgIH0sXHJcbiAgICBnZXRMZW5ndGgoKSB7XHJcbiAgICAgIHJldHVybiBsZW5ndGg7XHJcbiAgICB9LFxyXG4gICAgZ2V0U2hpcCgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsZW5ndGgsXHJcbiAgICAgICAgaGl0cyxcclxuICAgICAgICBzdW5rLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbmZ1bmN0aW9uIHNoaXBWUyhcclxuICBjYXJyaWVyLFxyXG4gIGJhdHRsZVNoaXAsXHJcbiAgc3VibWFyaW5lLFxyXG4gIGNydWlzZXIsXHJcbiAgZGVzdHJveWVyLFxyXG4gIHNoaXBDb250YWluZXJcclxuKSB7XHJcbiAgY29uc3QgY2FycmllckltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IGJhdHRsZVNoaXBJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBzdWJtYXJpbmVJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBjcnVpc2VySW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgZGVzdHJveWVySW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY2FycmllckltZy5jbGFzc0xpc3QuYWRkKCdjYXJyaWVyJywgJ3NoaXAtY2hvb3NlJyk7XHJcbiAgYmF0dGxlU2hpcEltZy5jbGFzc0xpc3QuYWRkKCdiYXR0bGUtc2hpcCcsICdzaGlwLWNob29zZScpO1xyXG4gIHN1Ym1hcmluZUltZy5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmUnLCAnc2hpcC1jaG9vc2UnKTtcclxuICBjcnVpc2VySW1nLmNsYXNzTGlzdC5hZGQoJ2NydWlzZXInLCAnc2hpcC1jaG9vc2UnKTtcclxuICBkZXN0cm95ZXJJbWcuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVyJywgJ3NoaXAtY2hvb3NlJyk7XHJcbiAgY2FycmllckltZy5zcmMgPSBjYXJyaWVyO1xyXG4gIGJhdHRsZVNoaXBJbWcuc3JjID0gYmF0dGxlU2hpcDtcclxuICBzdWJtYXJpbmVJbWcuc3JjID0gc3VibWFyaW5lO1xyXG4gIGNydWlzZXJJbWcuc3JjID0gY3J1aXNlcjtcclxuICBkZXN0cm95ZXJJbWcuc3JjID0gZGVzdHJveWVyO1xyXG4gIGNhcnJpZXJJbWcuZGF0YXNldC5zaGlwTGVuZ3RoID0gNDtcclxuICBiYXR0bGVTaGlwSW1nLmRhdGFzZXQuc2hpcExlbmd0aCA9IDM7XHJcbiAgc3VibWFyaW5lSW1nLmRhdGFzZXQuc2hpcExlbmd0aCA9IDI7XHJcbiAgY3J1aXNlckltZy5kYXRhc2V0LnNoaXBMZW5ndGggPSAyO1xyXG4gIGRlc3Ryb3llckltZy5kYXRhc2V0LnNoaXBMZW5ndGggPSAxO1xyXG5cclxuICBjYXJyaWVySW1nLmRhdGFzZXQuc2hpcENvbG9yID0gJyNmZjRkNmQnO1xyXG4gIGJhdHRsZVNoaXBJbWcuZGF0YXNldC5zaGlwQ29sb3IgPSAnI2ZhYTMwNyc7XHJcbiAgc3VibWFyaW5lSW1nLmRhdGFzZXQuc2hpcENvbG9yID0gJyMwMGI0ZDgnO1xyXG4gIGNydWlzZXJJbWcuZGF0YXNldC5zaGlwQ29sb3IgPSAnI2ZmZGQwMCc7XHJcbiAgZGVzdHJveWVySW1nLmRhdGFzZXQuc2hpcENvbG9yID0gJyM3YmYxYTgnO1xyXG5cclxuICBjYXJyaWVySW1nLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICBiYXR0bGVTaGlwSW1nLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICBzdWJtYXJpbmVJbWcuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gIGNydWlzZXJJbWcuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gIGRlc3Ryb3llckltZy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FycmllckltZyk7XHJcbiAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChiYXR0bGVTaGlwSW1nKTtcclxuICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1hcmluZUltZyk7XHJcbiAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChjcnVpc2VySW1nKTtcclxuICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3Ryb3llckltZyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNoaXAsIHNoaXBWUyB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXJDaG9pY2UgfSBmcm9tICcuL3JlbGF0ZWQvY2hvb3NlVlMnO1xyXG5pbXBvcnQgeyBwYWdlIH0gZnJvbSAnLi9yZWxhdGVkL3BhZ2UnO1xyXG5pbXBvcnQgYmF0dGxlc2hpcCBmcm9tICcuL3Bob3Rvcy9iYXR0bGVzaGlwLnBuZyc7XHJcbmltcG9ydCBtZXRhbCBmcm9tICcuL3Bob3Rvcy9zZWFtbGVzcy1tZXRhbC5qcGcnO1xyXG5cclxuZnVuY3Rpb24gaG9tZXBhZ2UoKSB7XHJcbiAgY29uc3QgaG9tZVBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtcGFnZScpO1xyXG4gIGhvbWVQaG90by5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmF0dGxlc2hpcH0pYDtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG5cclxuICBsb2dvLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHttZXRhbH0pYDtcclxuICBsb2dvLnN0eWxlLndlYmtpdEJhY2tncm91bmRDbGlwID0gJ3RleHQnO1xyXG4gIGxvZ28uc3R5bGUuYmFja2dyb3VuZENsaXAgPSAndGV4dCc7XHJcbn1cclxuaG9tZXBhZ2UoKTtcclxuY3JlYXRlUGxheWVyQ2hvaWNlKCdhbWl0Jyk7XHJcblxyXG5jb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LXJvdycpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=