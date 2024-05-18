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
  display: none;
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
  width: clamp(90px, 20vw, 500px);
  height: clamp(30px, 10vw, 500px);
}

.cruiser {
  width: clamp(90px, 20vw, 500px);
  height: clamp(30px, 10vw, 500px);
}

.destroyer {
  width: clamp(60px, 11vw, 500px);
  height: clamp(30px, 10vw, 500px);
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\nbody {\r\n  height: 100vh;\r\n  margin: 0;\r\n}\r\n.home-page {\r\n  height: 100vh;\r\n  background-size: cover; /* Cover ensures the image covers the entire div */\r\n  background-position: center; /* Centers the background image */\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  display: none;\r\n}\r\n.header {\r\n  text-align: center;\r\n  font-family: 'Alfa Slab One', serif;\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.welcome {\r\n  font-size: 2.5rem;\r\n}\r\n.logo {\r\n  font-size: 16vw;\r\n  color: transparent;\r\n  font-weight: bold;\r\n}\r\n.enter-name-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 15vh;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  font-family: 'Orbitron', sans-serif;\r\n}\r\n#name {\r\n  width: 80%;\r\n  height: 50px;\r\n  font-size: 2rem;\r\n  font-family: 'Orbitron', sans-serif;\r\n}\r\n.label {\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n}\r\n.button {\r\n  border-radius: 12px;\r\n  background-color: #525252;\r\n  color: white;\r\n  border: 1px solid black;\r\n  width: 55%;\r\n  height: 75%;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  transition: all ease-in 50ms;\r\n  cursor: pointer;\r\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);\r\n}\r\n.button:active {\r\n  font-size: 1.1rem;\r\n  width: 54%;\r\n  height: 74%;\r\n}\r\n.start-container {\r\n  width: 100%;\r\n  height: 10vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.square {\r\n  width: clamp(30px, 11vw, 500px);\r\n  height: clamp(30px, 11vw, 500px);\r\n  border: 1px solid white;\r\n}\r\n.square-choose {\r\n  width: clamp(30px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n  border: 1px solid white;\r\n}\r\n.headline {\r\n  text-align: center;\r\n  font-family: 'Alfa Slab One', serif;\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.popUp {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #494953;\r\n  height: 70%; /* Adjusted height to include space for ship-container */\r\n  align-items: center;\r\n  justify-content: space-between; /* Changed to space-between for better alignment */\r\n  width: 85%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-top-left-radius: 12px;\r\n  border-top-right-radius: 12px;\r\n  border-bottom-left-radius: 12px; /* Added for complete border radius */\r\n  border-bottom-right-radius: 12px; /* Added for complete border radius */\r\n  padding: 10px;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.ship-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #212529;\r\n  padding: 10px;\r\n  border-bottom-left-radius: 12px;\r\n  border-bottom-right-radius: 12px;\r\n  width: 100%;\r\n  height: 30%;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n}\r\n.chooseHead {\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.main-div {\r\n  background-color: #494953;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.title {\r\n  font-family: 'Lato', sans-serif;\r\n  margin: 0;\r\n  color: white;\r\n  font-size: 3.5rem;\r\n  font-weight: bold;\r\n}\r\n.player-board {\r\n  display: flex;\r\n}\r\n.opponent-board {\r\n  display: flex;\r\n}\r\n.main-board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  height: 80vh;\r\n}\r\n\r\n.headline-game {\r\n  font-family: 'Poppins', sans-serif;\r\n\r\n  color: white;\r\n  font-size: 1.5rem;\r\n}\r\n.message-container {\r\n  width: 70%;\r\n  height: clamp(60px, 10vh, 500px);\r\n  border: 1px solid white;\r\n  background-color: #13141d;\r\n  padding: 5px;\r\n}\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 9;\r\n}\r\n.button-container-choose {\r\n  width: 90%;\r\n  height: 5%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n.button-rotate {\r\n  border-radius: 8px;\r\n  height: 100%;\r\n  width: 35%;\r\n  background-color: #f48c06;\r\n}\r\n.button-start {\r\n  border-radius: 8px;\r\n  height: 100%;\r\n  width: 35%;\r\n  background-color: #2eae73;\r\n}\r\n\r\n.button-start:active {\r\n  font-size: 1.1rem;\r\n  width: 34%;\r\n  height: 99%;\r\n}\r\n.button-rotate:active {\r\n  font-size: 1.1rem;\r\n  width: 34%;\r\n  height: 99%;\r\n}\r\n.carrier {\r\n  width: clamp(150px, 40vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.battle-ship {\r\n  width: clamp(120px, 30vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.submarine {\r\n  width: clamp(90px, 20vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.cruiser {\r\n  width: clamp(90px, 20vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.destroyer {\r\n  width: clamp(60px, 11vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gameboard */ "./src/related/gameboard.js");










function createPlayerChoiceLogic(name) {
  const gameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_7__.GameBoard)(name);

  return gameBoard;
}

function addClickedShip(clickedShip) {
  const allShips = document.querySelectorAll('.ship-choose');
  allShips.forEach((ship) => {
    ship.classList.remove('clicked');
  });
  clickedShip.classList.add('clicked');
}
//ship.dataset.shipLength;
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
function checkIfRotate() {
  const rotateButton = document.querySelector('.button-rotate');
  if (rotateButton.classList.contains('button-rotate')) {
    return true;
  }
  return false;
}
function placingShip(tile, board) {
  const shipClicked = checkIfShipClicked();
  if (shipClicked !== null) {
    const row = parseInt(tile.dataset.rowNum, 10);
    const col = parseInt(tile.dataset.rowCol, 10);
    const coordinates = [];
    coordinates.push(row, col);
    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(shipClicked);
    const rotateAnswer = checkIfRotate();
    board.placeShip(coordinates, ship, rotateAnswer);
    console.log(board.getBoard());
  }
}

function addEvent(allTiles, board) {
  const allShips = document.querySelectorAll('.ship-choose');
  allShips.forEach((ship) => {
    ship.addEventListener('click', () => addClickedShip(ship));
  });

  allTiles.forEach((tile) => {
    tile.addEventListener('click', () => placingShip(tile, board));
  });
  const rotate = document.querySelector('.button-rotate');
  rotate.addEventListener('click', () => {
    rotate.classList.toggle('rotate-on');
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
  const carrierImg = new Image();
  const battleShipImg = new Image();
  const submarineImg = new Image();
  const cruiserImg = new Image();
  const destroyerImg = new Image();
  // classes
  chooseContainer.style.zIndex = '10';
  chooseContainer.classList.add('popUp');
  boardContainer.classList.add('board');
  h2.classList.add('chooseHead');
  overlay.classList.add('overlay');
  shipContainer.classList.add('ship-container');
  shipContainer.style.zIndex = '10';
  rotateButton.classList.add('button');
  startButton.classList.add('button');
  rotateButton.classList.add('button-rotate');
  startButton.classList.add('button-start');
  buttonContainer.classList.add('button-container-choose');
  carrierImg.classList.add('carrier', 'ship-choose');
  battleShipImg.classList.add('battle-ship', 'ship-choose');
  submarineImg.classList.add('submarine', 'ship-choose');
  cruiserImg.classList.add('cruiser', 'ship-choose');
  destroyerImg.classList.add('destroyer', 'ship-choose');

  // text contact
  h2.textContent = `${name} choose where to place your ship`;
  rotateButton.textContent = 'Rotate';
  startButton.textContent = 'Start';

  // Append ship images
  carrierImg.src = _photos_carrier_png__WEBPACK_IMPORTED_MODULE_3__;
  battleShipImg.src = _photos_battleShip2_png__WEBPACK_IMPORTED_MODULE_2__;
  submarineImg.src = _photos_submarine_png__WEBPACK_IMPORTED_MODULE_6__;
  cruiserImg.src = _photos_cruiser_png__WEBPACK_IMPORTED_MODULE_4__;
  destroyerImg.src = _photos_destroyer_png__WEBPACK_IMPORTED_MODULE_5__;

  carrierImg.dataset.shipLength = 4;
  battleShipImg.dataset.shipLength = 3;
  submarineImg.dataset.shipLength = 2;
  cruiserImg.dataset.shipLength = 2;
  destroyerImg.dataset.shipLength = 1;

  // adding a logic functions
  (0,_board__WEBPACK_IMPORTED_MODULE_0__.createBoardChooseVs)(boardContainer);
  const board = createPlayerChoiceLogic(name);

  shipContainer.appendChild(carrierImg);
  shipContainer.appendChild(battleShipImg);
  shipContainer.appendChild(submarineImg);
  shipContainer.appendChild(cruiserImg);
  shipContainer.appendChild(destroyerImg);

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

  addEvent(tiles, board);
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
function GameBoard() {
  let isShipBuilt = false;
  const allShips = [];
  const ship5 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(5);
  const ship4 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(4);
  const ship3 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(3);
  const ship3Also = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(3);
  const ship2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(2);
  const ship1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(1);
  allShips.push(ship5, ship4, ship3, ship3Also, ship2, ship1);

  const board = createMatrix(9, 9);
  return {
    placeShip(coordinates, ship, row) {
      let num = coordinates[0];
      const lengthShip = ship.getLength();

      for (let index = 0; index < lengthShip; index++) {
        if (row) {
          board[(coordinates[0], num)] = ship;
          num++;
        } else {
          board[(num, coordinates)] = ship;
          num++;
        }
      }
    },
    receiveAttack(coordinates) {
      const place = board[coordinates[0]][coordinates[1]];

      if (place === null) {
        board[coordinates[0]][coordinates[1]] = 0;
        return console.log('missed');
      }
      if (place === 0) {
        return console.log('why try miss again');
      }
      if (place === 2) {
        return console.log('you already hit the ship');
      }
      place.hit();
      board[coordinates[0]][coordinates[1]] = 2;
      return place.isSunk();
    },
    getBoard() {
      return board;
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
/* harmony export */   addEvent: () => (/* binding */ addEvent),
/* harmony export */   createPLayers: () => (/* binding */ createPLayers),
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/related/player.js");


function createPLayers(name) {
  const mainPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(name);
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)('computer');
  return [mainPlayer, computer];
}
function startGame(board, div) {
  console.log(board.getBoard());
  console.log(div);
  const row = parseInt(div.dataset.rowNum, 10);
  const col = parseInt(div.dataset.colNum, 10);
  const coordinates = [];
  coordinates.push(row, col);
  board.receiveAttack(coordinates);
}
function addEvent(containerBoard, matrixBoard) {
  containerBoard.forEach((square) => {
    square.addEventListener('click', () => startGame(matrixBoard, square));
  });
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
/* harmony import */ var _logicGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logicGame */ "./src/related/logicGame.js");



function page(name) {
  const playerBoard = document.querySelector('.player-board');
  const opponentBoard = document.querySelector('.opponent-board');
  const playerName = document.querySelector('.headline-game');
  const [human, opponent] = (0,_logicGame__WEBPACK_IMPORTED_MODULE_1__.createPLayers)(name);
  (0,_board__WEBPACK_IMPORTED_MODULE_0__.createBoardVs)(playerBoard);
  (0,_board__WEBPACK_IMPORTED_MODULE_0__.enemyBoardVs)(opponentBoard);
  playerName.textContent = `${name} board`;
  return [human, opponent];
}



/***/ }),

/***/ "./src/related/player.js":
/*!*******************************!*\
  !*** ./src/related/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/related/gameboard.js");


function Player(name) {
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();

  return {
    name,
    board,
  };
}



/***/ }),

/***/ "./src/related/ship.js":
/*!*****************************!*\
  !*** ./src/related/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
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
/* harmony import */ var _related_logicGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./related/logicGame */ "./src/related/logicGame.js");







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
const [human, opponent] = (0,_related_page__WEBPACK_IMPORTED_MODULE_2__.page)('Orbter');
(0,_related_chooseVS__WEBPACK_IMPORTED_MODULE_1__.createPlayerChoice)('amit');

const opponentBoard = document.querySelectorAll('.enemy-row');
(0,_related_logicGame__WEBPACK_IMPORTED_MODULE_5__.addEvent)(opponentBoard, opponent.board);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlJQUF5SSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sNkNBQTZDLHdGQUF3RixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9DQUFvQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNsaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxzQkFBc0Isc0JBQXNCLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixXQUFXLHNCQUFzQixVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLHNCQUFzQixzQkFBc0IsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsMEhBQTBILE1BQU0sTUFBTSxNQUFNLE1B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TDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUM0QjtBQUNsQjtBQUNXO0FBQ0Q7QUFDVTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbURBQVUsQ0FBQztBQUN0RDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsdURBQUssQ0FBQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtREFBSTtBQUM5QixxRUFBa0I7QUFDbEI7QUFDQTtBQUNBLDREQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9yZWxhdGVkL2JvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3JlbGF0ZWQvY2hvb3NlVlMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9sb2dpY0dhbWUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9wYWdlLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3JlbGF0ZWQvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3JlbGF0ZWQvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxmYStTbGFiK09uZSZmYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZmYW1pbHk9T3JiaXRyb246d2dodEA0MDAuLjkwMCZmYW1pbHk9UGFjaWZpY28mZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhvbWUtcGFnZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIENvdmVyIGVuc3VyZXMgdGhlIGltYWdlIGNvdmVycyB0aGUgZW50aXJlIGRpdiAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlcnMgdGhlIGJhY2tncm91bmQgaW1hZ2UgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQWxmYSBTbGFiIE9uZVwiLCBzZXJpZjtcbiAgbWFyZ2luOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud2VsY29tZSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4ubG9nbyB7XG4gIGZvbnQtc2l6ZTogMTZ2dztcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVudGVyLW5hbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTV2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNuYW1lIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogNTUlO1xuICBoZWlnaHQ6IDc1JTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gNTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHdpZHRoOiA1NCU7XG4gIGhlaWdodDogNzQlO1xufVxuXG4uc3RhcnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zcXVhcmUge1xuICB3aWR0aDogY2xhbXAoMzBweCwgMTF2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDExdncsIDUwMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5zcXVhcmUtY2hvb3NlIHtcbiAgd2lkdGg6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uaGVhZGxpbmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZmEgU2xhYiBPbmVcIiwgc2VyaWY7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBvcFVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk1MztcbiAgaGVpZ2h0OiA3MCU7IC8qIEFkanVzdGVkIGhlaWdodCB0byBpbmNsdWRlIHNwYWNlIGZvciBzaGlwLWNvbnRhaW5lciAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIENoYW5nZWQgdG8gc3BhY2UtYmV0d2VlbiBmb3IgYmV0dGVyIGFsaWdubWVudCAqL1xuICB3aWR0aDogODUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDsgLyogQWRkZWQgZm9yIGNvbXBsZXRlIGJvcmRlciByYWRpdXMgKi9cbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7IC8qIEFkZGVkIGZvciBjb21wbGV0ZSBib3JkZXIgcmFkaXVzICovXG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uc2hpcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2hvb3NlSGVhZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NTM7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBsYXllci1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5vcHBvbmVudC1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYWluLWJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGhlaWdodDogODB2aDtcbn1cblxuLmhlYWRsaW5lLWdhbWUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5tZXNzYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogY2xhbXAoNjBweCwgMTB2aCwgNTAwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTQxZDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5idXR0b24tY29udGFpbmVyLWNob29zZSB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYnV0dG9uLXJvdGF0ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4YzA2O1xufVxuXG4uYnV0dG9uLXN0YXJ0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWFlNzM7XG59XG5cbi5idXR0b24tc3RhcnQ6YWN0aXZlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHdpZHRoOiAzNCU7XG4gIGhlaWdodDogOTklO1xufVxuXG4uYnV0dG9uLXJvdGF0ZTphY3RpdmUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgd2lkdGg6IDM0JTtcbiAgaGVpZ2h0OiA5OSU7XG59XG5cbi5jYXJyaWVyIHtcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCA0MHZ3LCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xufVxuXG4uYmF0dGxlLXNoaXAge1xuICB3aWR0aDogY2xhbXAoMTIwcHgsIDMwdncsIDUwMHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XG59XG5cbi5zdWJtYXJpbmUge1xuICB3aWR0aDogY2xhbXAoOTBweCwgMjB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbn1cblxuLmNydWlzZXIge1xuICB3aWR0aDogY2xhbXAoOTBweCwgMjB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbn1cblxuLmRlc3Ryb3llciB7XG4gIHdpZHRoOiBjbGFtcCg2MHB4LCAxMXZ3LCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIl0s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VUFBQTtFQUNBLHlCQUFBO0FBd0JGOztBQXRCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQXlCRjs7QUF0QkE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBeUJGOztBQXZCQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQTJCRjs7QUF6QkE7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FBNEJGOztBQTFCQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUE2QkY7O0FBM0JBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQThCRjs7QUE1QkE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FBK0JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsZmErU2xhYitPbmUmZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PU9yYml0cm9uOndnaHRANDAwLi45MDAmZmFtaWx5PVBhY2lmaWNvJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5ob21lLXBhZ2Uge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIENvdmVyIGVuc3VyZXMgdGhlIGltYWdlIGNvdmVycyB0aGUgZW50aXJlIGRpdiAqL1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlICovXFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ0FsZmEgU2xhYiBPbmUnLCBzZXJpZjtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ud2VsY29tZSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuLmxvZ28ge1xcclxcbiAgZm9udC1zaXplOiAxNnZ3O1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5lbnRlci1uYW1lLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcmJpdHJvbicsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbiNuYW1lIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LWZhbWlseTogJ09yYml0cm9uJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLmxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogNTUlO1xcclxcbiAgaGVpZ2h0OiA3NSU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gNTBtcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuLmJ1dHRvbjphY3RpdmUge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB3aWR0aDogNTQlO1xcclxcbiAgaGVpZ2h0OiA3NCU7XFxyXFxufVxcclxcbi5zdGFydC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc3F1YXJlIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMHB4LCAxMXZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDExdncsIDUwMHB4KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4uc3F1YXJlLWNob29zZSB7XFxyXFxuICB3aWR0aDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuLmhlYWRsaW5lIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQWxmYSBTbGFiIE9uZScsIHNlcmlmO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5wb3BVcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NTM7XFxyXFxuICBoZWlnaHQ6IDcwJTsgLyogQWRqdXN0ZWQgaGVpZ2h0IHRvIGluY2x1ZGUgc3BhY2UgZm9yIHNoaXAtY29udGFpbmVyICovXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBDaGFuZ2VkIHRvIHNwYWNlLWJldHdlZW4gZm9yIGJldHRlciBhbGlnbm1lbnQgKi9cXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDsgLyogQWRkZWQgZm9yIGNvbXBsZXRlIGJvcmRlciByYWRpdXMgKi9cXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4OyAvKiBBZGRlZCBmb3IgY29tcGxldGUgYm9yZGVyIHJhZGl1cyAqL1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4uY2hvb3NlSGVhZCB7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5tYWluLWRpdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTUzO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ucGxheWVyLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5vcHBvbmVudC1ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4ubWFpbi1ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUtZ2FtZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcbi5tZXNzYWdlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCg2MHB4LCAxMHZoLCA1MDBweCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzE0MWQ7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbi5vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHotaW5kZXg6IDk7XFxyXFxufVxcclxcbi5idXR0b24tY29udGFpbmVyLWNob29zZSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuLmJ1dHRvbi1yb3RhdGUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDhjMDY7XFxyXFxufVxcclxcbi5idXR0b24tc3RhcnQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWFlNzM7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tc3RhcnQ6YWN0aXZlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgd2lkdGg6IDM0JTtcXHJcXG4gIGhlaWdodDogOTklO1xcclxcbn1cXHJcXG4uYnV0dG9uLXJvdGF0ZTphY3RpdmUge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB3aWR0aDogMzQlO1xcclxcbiAgaGVpZ2h0OiA5OSU7XFxyXFxufVxcclxcbi5jYXJyaWVyIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgxNTBweCwgNDB2dywgNTAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxufVxcclxcbi5iYXR0bGUtc2hpcCB7XFxyXFxuICB3aWR0aDogY2xhbXAoMTIwcHgsIDMwdncsIDUwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbn1cXHJcXG4uc3VibWFyaW5lIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCg5MHB4LCAyMHZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG59XFxyXFxuLmNydWlzZXIge1xcclxcbiAgd2lkdGg6IGNsYW1wKDkwcHgsIDIwdncsIDUwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbn1cXHJcXG4uZGVzdHJveWVyIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCg2MHB4LCAxMXZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlQm9hcmRWcyhjb250YWluZXIpIHtcclxuICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xyXG4gICAgY29uc3QgY29sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb2xEaXYuY2xhc3NMaXN0LmFkZCgnY29sJyk7XHJcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA4OyByb3crKykge1xyXG4gICAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xyXG4gICAgICByb3dEaXYuZGF0YXNldC5yb3dOdW0gPSByb3c7XHJcbiAgICAgIHJvd0Rpdi5kYXRhc2V0LnJvd0NvbCA9IGNvbDtcclxuICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHJvd0Rpdik7XHJcbiAgICB9XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sRGl2KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkQ2hvb3NlVnMoY29udGFpbmVyKSB7XHJcbiAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcclxuICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29sRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbCcpO1xyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgODsgcm93KyspIHtcclxuICAgICAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUtY2hvb3NlJyk7XHJcbiAgICAgIHJvd0Rpdi5kYXRhc2V0LnJvd051bSA9IHJvdztcclxuICAgICAgcm93RGl2LmRhdGFzZXQucm93Q29sID0gY29sO1xyXG4gICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQocm93RGl2KTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW5lbXlCb2FyZFZzKGNvbnRhaW5lcikge1xyXG4gIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDg7IGNvbCsrKSB7XHJcbiAgICBjb25zdCBjb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbERpdi5jbGFzc0xpc3QuYWRkKCdjb2wnKTtcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDg7IHJvdysrKSB7XHJcbiAgICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICByb3dEaXYuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcbiAgICAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdlbmVteS1yb3cnKTtcclxuXHJcbiAgICAgIHJvd0Rpdi5kYXRhc2V0LnJvd051bSA9IHJvdztcclxuICAgICAgcm93RGl2LmRhdGFzZXQuY29sTnVtID0gY29sO1xyXG4gICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQocm93RGl2KTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQm9hcmRWcywgZW5lbXlCb2FyZFZzLCBjcmVhdGVCb2FyZENob29zZVZzIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUJvYXJkQ2hvb3NlVnMgfSBmcm9tICcuL2JvYXJkJztcclxuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XHJcbmltcG9ydCBiYXR0bGVTaGlwIGZyb20gJy4uL3Bob3Rvcy9iYXR0bGVTaGlwMi5wbmcnO1xyXG5pbXBvcnQgY2FycmllciBmcm9tICcuLi9waG90b3MvY2Fycmllci5wbmcnO1xyXG5pbXBvcnQgY3J1aXNlciBmcm9tICcuLi9waG90b3MvY3J1aXNlci5wbmcnO1xyXG5pbXBvcnQgZGVzdHJveWVyIGZyb20gJy4uL3Bob3Rvcy9kZXN0cm95ZXIucG5nJztcclxuaW1wb3J0IHN1Ym1hcmluZSBmcm9tICcuLi9waG90b3Mvc3VibWFyaW5lLnBuZyc7XHJcblxyXG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXJDaG9pY2VMb2dpYyhuYW1lKSB7XHJcbiAgY29uc3QgZ2FtZUJvYXJkID0gR2FtZUJvYXJkKG5hbWUpO1xyXG5cclxuICByZXR1cm4gZ2FtZUJvYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbGlja2VkU2hpcChjbGlja2VkU2hpcCkge1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtY2hvb3NlJyk7XHJcbiAgYWxsU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XHJcbiAgfSk7XHJcbiAgY2xpY2tlZFNoaXAuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xyXG59XHJcbi8vc2hpcC5kYXRhc2V0LnNoaXBMZW5ndGg7XHJcbmZ1bmN0aW9uIGNoZWNrSWZTaGlwQ2xpY2tlZCgpIHtcclxuICBjb25zdCBhbGxTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWNob29zZScpO1xyXG4gIGxldCBhbnN3ZXJTaGlwO1xyXG4gIGxldCBhbnN3ZXIgPSBmYWxzZTtcclxuICBhbGxTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsaWNrZWQnKSkge1xyXG4gICAgICBhbnN3ZXIgPSB0cnVlO1xyXG4gICAgICBhbnN3ZXJTaGlwID0gc2hpcDtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoYW5zd2VyKSByZXR1cm4gYW5zd2VyU2hpcC5kYXRhc2V0LnNoaXBMZW5ndGg7XHJcbiAgZWxzZSByZXR1cm4gbnVsbDtcclxufVxyXG5mdW5jdGlvbiBjaGVja0lmUm90YXRlKCkge1xyXG4gIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tcm90YXRlJyk7XHJcbiAgaWYgKHJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi1yb3RhdGUnKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBwbGFjaW5nU2hpcCh0aWxlLCBib2FyZCkge1xyXG4gIGNvbnN0IHNoaXBDbGlja2VkID0gY2hlY2tJZlNoaXBDbGlja2VkKCk7XHJcbiAgaWYgKHNoaXBDbGlja2VkICE9PSBudWxsKSB7XHJcbiAgICBjb25zdCByb3cgPSBwYXJzZUludCh0aWxlLmRhdGFzZXQucm93TnVtLCAxMCk7XHJcbiAgICBjb25zdCBjb2wgPSBwYXJzZUludCh0aWxlLmRhdGFzZXQucm93Q29sLCAxMCk7XHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xyXG4gICAgY29vcmRpbmF0ZXMucHVzaChyb3csIGNvbCk7XHJcbiAgICBjb25zdCBzaGlwID0gU2hpcChzaGlwQ2xpY2tlZCk7XHJcbiAgICBjb25zdCByb3RhdGVBbnN3ZXIgPSBjaGVja0lmUm90YXRlKCk7XHJcbiAgICBib2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZXMsIHNoaXAsIHJvdGF0ZUFuc3dlcik7XHJcbiAgICBjb25zb2xlLmxvZyhib2FyZC5nZXRCb2FyZCgpKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50KGFsbFRpbGVzLCBib2FyZCkge1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtY2hvb3NlJyk7XHJcbiAgYWxsU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZENsaWNrZWRTaGlwKHNoaXApKTtcclxuICB9KTtcclxuXHJcbiAgYWxsVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYWNpbmdTaGlwKHRpbGUsIGJvYXJkKSk7XHJcbiAgfSk7XHJcbiAgY29uc3Qgcm90YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1yb3RhdGUnKTtcclxuICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByb3RhdGUuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlLW9uJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBsYXllckNob2ljZShuYW1lKSB7XHJcbiAgY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1wYWdlJyk7XHJcbiAgaG9tZVBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBjb25zdCBjaG9vc2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcclxuICBjb25zdCBjYXJyaWVySW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgYmF0dGxlU2hpcEltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IHN1Ym1hcmluZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IGNydWlzZXJJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBkZXN0cm95ZXJJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAvLyBjbGFzc2VzXHJcbiAgY2hvb3NlQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcxMCc7XHJcbiAgY2hvb3NlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcFVwJyk7XHJcbiAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcclxuICBoMi5jbGFzc0xpc3QuYWRkKCdjaG9vc2VIZWFkJyk7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XHJcbiAgc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlwLWNvbnRhaW5lcicpO1xyXG4gIHNoaXBDb250YWluZXIuc3R5bGUuekluZGV4ID0gJzEwJztcclxuICByb3RhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XHJcbiAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XHJcbiAgcm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1yb3RhdGUnKTtcclxuICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tc3RhcnQnKTtcclxuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lci1jaG9vc2UnKTtcclxuICBjYXJyaWVySW1nLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXInLCAnc2hpcC1jaG9vc2UnKTtcclxuICBiYXR0bGVTaGlwSW1nLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZS1zaGlwJywgJ3NoaXAtY2hvb3NlJyk7XHJcbiAgc3VibWFyaW5lSW1nLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZScsICdzaGlwLWNob29zZScpO1xyXG4gIGNydWlzZXJJbWcuY2xhc3NMaXN0LmFkZCgnY3J1aXNlcicsICdzaGlwLWNob29zZScpO1xyXG4gIGRlc3Ryb3llckltZy5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZXInLCAnc2hpcC1jaG9vc2UnKTtcclxuXHJcbiAgLy8gdGV4dCBjb250YWN0XHJcbiAgaDIudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBjaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBzaGlwYDtcclxuICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnUm90YXRlJztcclxuICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdGFydCc7XHJcblxyXG4gIC8vIEFwcGVuZCBzaGlwIGltYWdlc1xyXG4gIGNhcnJpZXJJbWcuc3JjID0gY2FycmllcjtcclxuICBiYXR0bGVTaGlwSW1nLnNyYyA9IGJhdHRsZVNoaXA7XHJcbiAgc3VibWFyaW5lSW1nLnNyYyA9IHN1Ym1hcmluZTtcclxuICBjcnVpc2VySW1nLnNyYyA9IGNydWlzZXI7XHJcbiAgZGVzdHJveWVySW1nLnNyYyA9IGRlc3Ryb3llcjtcclxuXHJcbiAgY2FycmllckltZy5kYXRhc2V0LnNoaXBMZW5ndGggPSA0O1xyXG4gIGJhdHRsZVNoaXBJbWcuZGF0YXNldC5zaGlwTGVuZ3RoID0gMztcclxuICBzdWJtYXJpbmVJbWcuZGF0YXNldC5zaGlwTGVuZ3RoID0gMjtcclxuICBjcnVpc2VySW1nLmRhdGFzZXQuc2hpcExlbmd0aCA9IDI7XHJcbiAgZGVzdHJveWVySW1nLmRhdGFzZXQuc2hpcExlbmd0aCA9IDE7XHJcblxyXG4gIC8vIGFkZGluZyBhIGxvZ2ljIGZ1bmN0aW9uc1xyXG4gIGNyZWF0ZUJvYXJkQ2hvb3NlVnMoYm9hcmRDb250YWluZXIpO1xyXG4gIGNvbnN0IGJvYXJkID0gY3JlYXRlUGxheWVyQ2hvaWNlTG9naWMobmFtZSk7XHJcblxyXG4gIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FycmllckltZyk7XHJcbiAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChiYXR0bGVTaGlwSW1nKTtcclxuICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1hcmluZUltZyk7XHJcbiAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChjcnVpc2VySW1nKTtcclxuICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3Ryb3llckltZyk7XHJcblxyXG4gIGhlYWRsaW5lLmFwcGVuZENoaWxkKGgyKTtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQocm90YXRlQnV0dG9uKTtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xyXG5cclxuICBjaG9vc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG4gIGNob29zZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xyXG4gIGNob29zZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XHJcbiAgY2hvb3NlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDb250YWluZXIpO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY2hvb3NlQ29udGFpbmVyKTtcclxuICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUtY2hvb3NlJyk7XHJcblxyXG4gIGFkZEV2ZW50KHRpbGVzLCBib2FyZCk7XHJcbn1cclxuZXhwb3J0IHsgY3JlYXRlUGxheWVyQ2hvaWNlIH07XHJcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWF0cml4KHJvd3MsIGNvbHMpIHtcclxuICBjb25zdCBtYXRyaXggPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gW107XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xyXG4gICAgICByb3cucHVzaChudWxsKTsgLy8gWW91IGNhbiBpbml0aWFsaXplIHRoZSBtYXRyaXggd2l0aCBhbnkgdmFsdWUsIGhlcmUgd2UgdXNlIDBcclxuICAgIH1cclxuICAgIG1hdHJpeC5wdXNoKHJvdyk7XHJcbiAgfVxyXG4gIHJldHVybiBtYXRyaXg7XHJcbn1cclxuZnVuY3Rpb24gR2FtZUJvYXJkKCkge1xyXG4gIGxldCBpc1NoaXBCdWlsdCA9IGZhbHNlO1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gW107XHJcbiAgY29uc3Qgc2hpcDUgPSBTaGlwKDUpO1xyXG4gIGNvbnN0IHNoaXA0ID0gU2hpcCg0KTtcclxuICBjb25zdCBzaGlwMyA9IFNoaXAoMyk7XHJcbiAgY29uc3Qgc2hpcDNBbHNvID0gU2hpcCgzKTtcclxuICBjb25zdCBzaGlwMiA9IFNoaXAoMik7XHJcbiAgY29uc3Qgc2hpcDEgPSBTaGlwKDEpO1xyXG4gIGFsbFNoaXBzLnB1c2goc2hpcDUsIHNoaXA0LCBzaGlwMywgc2hpcDNBbHNvLCBzaGlwMiwgc2hpcDEpO1xyXG5cclxuICBjb25zdCBib2FyZCA9IGNyZWF0ZU1hdHJpeCg5LCA5KTtcclxuICByZXR1cm4ge1xyXG4gICAgcGxhY2VTaGlwKGNvb3JkaW5hdGVzLCBzaGlwLCByb3cpIHtcclxuICAgICAgbGV0IG51bSA9IGNvb3JkaW5hdGVzWzBdO1xyXG4gICAgICBjb25zdCBsZW5ndGhTaGlwID0gc2hpcC5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGhTaGlwOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKHJvdykge1xyXG4gICAgICAgICAgYm9hcmRbKGNvb3JkaW5hdGVzWzBdLCBudW0pXSA9IHNoaXA7XHJcbiAgICAgICAgICBudW0rKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYm9hcmRbKG51bSwgY29vcmRpbmF0ZXMpXSA9IHNoaXA7XHJcbiAgICAgICAgICBudW0rKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XHJcbiAgICAgIGNvbnN0IHBsYWNlID0gYm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXTtcclxuXHJcbiAgICAgIGlmIChwbGFjZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPSAwO1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnbWlzc2VkJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBsYWNlID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCd3aHkgdHJ5IG1pc3MgYWdhaW4nKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGxhY2UgPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ3lvdSBhbHJlYWR5IGhpdCB0aGUgc2hpcCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHBsYWNlLmhpdCgpO1xyXG4gICAgICBib2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dID0gMjtcclxuICAgICAgcmV0dXJuIHBsYWNlLmlzU3VuaygpO1xyXG4gICAgfSxcclxuICAgIGdldEJvYXJkKCkge1xyXG4gICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZXJBdHRhY2soKSB7XHJcbiAgICAgIGxldCBkb2VzTWlzcyA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlU2hpcChudW1iZXIpIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IFNoaXAobnVtYmVyKTtcclxuICAgICAgaXNTaGlwQnVpbHQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gW3NoaXAsIGlzU2hpcEJ1aWx0XTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTaGlwU3RhdHVzKCkge1xyXG4gICAgICBpc1NoaXBCdWlsdCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGNoZWNrU2hpcFN0YXR1cygpIHtcclxuICAgICAgcmV0dXJuIGlzU2hpcEJ1aWx0O1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCB7IEdhbWVCb2FyZCB9O1xyXG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQTGF5ZXJzKG5hbWUpIHtcclxuICBjb25zdCBtYWluUGxheWVyID0gUGxheWVyKG5hbWUpO1xyXG4gIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKCdjb21wdXRlcicpO1xyXG4gIHJldHVybiBbbWFpblBsYXllciwgY29tcHV0ZXJdO1xyXG59XHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZShib2FyZCwgZGl2KSB7XHJcbiAgY29uc29sZS5sb2coYm9hcmQuZ2V0Qm9hcmQoKSk7XHJcbiAgY29uc29sZS5sb2coZGl2KTtcclxuICBjb25zdCByb3cgPSBwYXJzZUludChkaXYuZGF0YXNldC5yb3dOdW0sIDEwKTtcclxuICBjb25zdCBjb2wgPSBwYXJzZUludChkaXYuZGF0YXNldC5jb2xOdW0sIDEwKTtcclxuICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xyXG4gIGNvb3JkaW5hdGVzLnB1c2gocm93LCBjb2wpO1xyXG4gIGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEV2ZW50KGNvbnRhaW5lckJvYXJkLCBtYXRyaXhCb2FyZCkge1xyXG4gIGNvbnRhaW5lckJvYXJkLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3RhcnRHYW1lKG1hdHJpeEJvYXJkLCBzcXVhcmUpKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgc3RhcnRHYW1lLCBjcmVhdGVQTGF5ZXJzLCBhZGRFdmVudCB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZFZzLCBlbmVteUJvYXJkVnMgfSBmcm9tICcuL2JvYXJkJztcclxuaW1wb3J0IHsgY3JlYXRlUExheWVycyB9IGZyb20gJy4vbG9naWNHYW1lJztcclxuXHJcbmZ1bmN0aW9uIHBhZ2UobmFtZSkge1xyXG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xyXG4gIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQtYm9hcmQnKTtcclxuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRsaW5lLWdhbWUnKTtcclxuICBjb25zdCBbaHVtYW4sIG9wcG9uZW50XSA9IGNyZWF0ZVBMYXllcnMobmFtZSk7XHJcbiAgY3JlYXRlQm9hcmRWcyhwbGF5ZXJCb2FyZCk7XHJcbiAgZW5lbXlCb2FyZFZzKG9wcG9uZW50Qm9hcmQpO1xyXG4gIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBib2FyZGA7XHJcbiAgcmV0dXJuIFtodW1hbiwgb3Bwb25lbnRdO1xyXG59XHJcbmV4cG9ydCB7IHBhZ2UgfTtcclxuIiwiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xyXG5cclxuZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcclxuICBjb25zdCBib2FyZCA9IEdhbWVCb2FyZCgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIGJvYXJkLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IHsgUGxheWVyIH07XHJcbiIsImZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XHJcbiAgbGV0IGhpdHMgPSAwO1xyXG4gIGxldCBzdW5rID0gZmFsc2U7XHJcbiAgcmV0dXJuIHtcclxuICAgIGdldE51bU9mSGl0cygpIHtcclxuICAgICAgcmV0dXJuIGhpdHM7XHJcbiAgICB9LFxyXG4gICAgaGl0KCkge1xyXG4gICAgICBoaXRzICs9IDE7XHJcbiAgICB9LFxyXG4gICAgaXNTdW5rKCkge1xyXG4gICAgICByZXR1cm4gbGVuZ3RoID09PSBoaXRzO1xyXG4gICAgfSxcclxuICAgIGdldExlbmd0aCgpIHtcclxuICAgICAgcmV0dXJuIGxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBnZXRTaGlwKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlbmd0aCxcclxuICAgICAgICBoaXRzLFxyXG4gICAgICAgIHN1bmssXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IHsgU2hpcCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXJDaG9pY2UgfSBmcm9tICcuL3JlbGF0ZWQvY2hvb3NlVlMnO1xyXG5pbXBvcnQgeyBwYWdlIH0gZnJvbSAnLi9yZWxhdGVkL3BhZ2UnO1xyXG5pbXBvcnQgYmF0dGxlc2hpcCBmcm9tICcuL3Bob3Rvcy9iYXR0bGVzaGlwLnBuZyc7XHJcbmltcG9ydCBtZXRhbCBmcm9tICcuL3Bob3Rvcy9zZWFtbGVzcy1tZXRhbC5qcGcnO1xyXG5pbXBvcnQgeyBzdGFydEdhbWUsIGFkZEV2ZW50IH0gZnJvbSAnLi9yZWxhdGVkL2xvZ2ljR2FtZSc7XHJcblxyXG5mdW5jdGlvbiBob21lcGFnZSgpIHtcclxuICBjb25zdCBob21lUGhvdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1wYWdlJyk7XHJcbiAgaG9tZVBob3RvLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYXR0bGVzaGlwfSlgO1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcblxyXG4gIGxvZ28uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke21ldGFsfSlgO1xyXG4gIGxvZ28uc3R5bGUud2Via2l0QmFja2dyb3VuZENsaXAgPSAndGV4dCc7XHJcbiAgbG9nby5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9ICd0ZXh0JztcclxufVxyXG5ob21lcGFnZSgpO1xyXG5jb25zdCBbaHVtYW4sIG9wcG9uZW50XSA9IHBhZ2UoJ09yYnRlcicpO1xyXG5jcmVhdGVQbGF5ZXJDaG9pY2UoJ2FtaXQnKTtcclxuXHJcbmNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXktcm93Jyk7XHJcbmFkZEV2ZW50KG9wcG9uZW50Qm9hcmQsIG9wcG9uZW50LmJvYXJkKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9