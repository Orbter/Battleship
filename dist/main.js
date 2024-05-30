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
  height: 70%;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
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
  z-index: 6;
  position: relative;
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
}

.player-row {
  z-index: 12; /* Ensure tiles are in front */
}

.placed-ship-player {
  z-index: 5; /* Ensure ships are behind tiles */
  position: absolute;
}

.col {
  z-index: 11;
}

.win-container {
  display: flex;
  flex-direction: column;
  background-color: #494953;
  height: 40%;
  align-items: center;
  justify-content: space-evenly;
  width: 85%;
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.winMessage {
  color: white;
  font-size: 3rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
}

.button-play-again {
  width: clamp(155px, 50%, 300px);
  height: clamp(45px, 11%, 70px);
  background-color: #06bc68;
}

.button-play-again:active {
  width: clamp(153px, 49%, 298px);
  height: clamp(44px, 10%, 69px);
}

.opponent-main {
  z-index: 8;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\nbody {\r\n  height: 100vh;\r\n  margin: 0;\r\n}\r\n.home-page {\r\n  height: 100vh;\r\n  background-size: cover; /* Cover ensures the image covers the entire div */\r\n  background-position: center; /* Centers the background image */\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.header {\r\n  text-align: center;\r\n  font-family: 'Alfa Slab One', serif;\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.welcome {\r\n  font-size: 2.5rem;\r\n}\r\n.logo {\r\n  font-size: 16vw;\r\n  color: transparent;\r\n  font-weight: bold;\r\n}\r\n.enter-name-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 15vh;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  font-family: 'Orbitron', sans-serif;\r\n}\r\n#name {\r\n  width: 80%;\r\n  height: 50px;\r\n  font-size: 2rem;\r\n  font-family: 'Orbitron', sans-serif;\r\n}\r\n.label {\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n}\r\n.button {\r\n  border-radius: 12px;\r\n  background-color: #525252;\r\n  color: white;\r\n  border: 1px solid black;\r\n  width: 55%;\r\n  height: 75%;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  transition: all ease-in 50ms;\r\n  cursor: pointer;\r\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);\r\n}\r\n.button:active {\r\n  font-size: 1.1rem;\r\n  width: 54%;\r\n  height: 74%;\r\n}\r\n.start-container {\r\n  width: 100%;\r\n  height: 10vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.square {\r\n  width: clamp(30px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n  border: 1px solid white;\r\n}\r\n.square-choose {\r\n  width: clamp(30px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n  border: 1px solid white;\r\n  transition: background-color 0.3s;\r\n  z-index: 20;\r\n}\r\n.headline {\r\n  text-align: center;\r\n  font-family: 'Alfa Slab One', serif;\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.popUp {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #494953;\r\n  height: 70%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 85%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-top-left-radius: 12px;\r\n  border-top-right-radius: 12px;\r\n  border-bottom-left-radius: 12px;\r\n  border-bottom-right-radius: 12px;\r\n  padding: 10px;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.ship-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #212529;\r\n  padding: 10px;\r\n  border-bottom-left-radius: 12px;\r\n  border-bottom-right-radius: 12px;\r\n  width: 100%;\r\n  height: 30%;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n.chooseHead {\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.main-div {\r\n  background-color: #494953;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.title {\r\n  font-family: 'Lato', sans-serif;\r\n  margin: 0;\r\n  color: white;\r\n  font-size: 3.5rem;\r\n  font-weight: bold;\r\n}\r\n.player-board {\r\n  display: flex;\r\n  z-index: 6;\r\n  position: relative;\r\n}\r\n.opponent-board {\r\n  display: flex;\r\n}\r\n.main-board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  height: 80vh;\r\n}\r\n\r\n.headline-game {\r\n  font-family: 'Poppins', sans-serif;\r\n\r\n  color: white;\r\n  font-size: 1.5rem;\r\n}\r\n.message-container {\r\n  width: 70%;\r\n  height: clamp(60px, 10vh, 500px);\r\n  border: 1px solid white;\r\n  background-color: #13141d;\r\n  padding: 5px;\r\n}\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 9;\r\n}\r\n.button-container-choose {\r\n  width: 90%;\r\n  height: 5%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n.button-rotate {\r\n  border-radius: 8px;\r\n  height: 100%;\r\n  width: 35%;\r\n  background-color: #f48c06;\r\n}\r\n.button-start {\r\n  border-radius: 8px;\r\n  height: 100%;\r\n  width: 35%;\r\n  background-color: #2eae73;\r\n}\r\n\r\n.button-start:active {\r\n  font-size: 1.1rem;\r\n  width: 34%;\r\n  height: 99%;\r\n}\r\n.button-rotate:active {\r\n  font-size: 1.1rem;\r\n  width: 34%;\r\n  height: 99%;\r\n}\r\n.carrier {\r\n  width: clamp(150px, 40vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.battle-ship {\r\n  width: clamp(120px, 30vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.submarine {\r\n  width: clamp(60px, 20vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.cruiser {\r\n  width: clamp(60px, 20vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.destroyer {\r\n  width: clamp(20px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.hovered-tile {\r\n  background-color: var(--hover-color);\r\n}\r\n.placed-ship {\r\n  z-index: 10;\r\n}\r\n.enemy-hit {\r\n  background-color: #ef233c;\r\n}\r\n.del {\r\n  width: clamp(20px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.enemy-missed {\r\n  background-color: #48bfe3;\r\n}\r\n.enemy-sunk {\r\n  background-color: #f48c06;\r\n}\r\n.message {\r\n  color: white;\r\n  font-size: 1.2rem;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n}\r\n.player-row {\r\n  z-index: 12; /* Ensure tiles are in front */\r\n}\r\n.placed-ship-player {\r\n  z-index: 5; /* Ensure ships are behind tiles */\r\n  position: absolute;\r\n}\r\n.col {\r\n  z-index: 11;\r\n}\r\n.win-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #494953;\r\n  height: 40%;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  width: 85%;\r\n  width: 85%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-top-left-radius: 12px;\r\n  border-top-right-radius: 12px;\r\n  border-bottom-left-radius: 12px;\r\n  border-bottom-right-radius: 12px;\r\n}\r\n.winMessage {\r\n  color: white;\r\n  font-size: 3rem;\r\n  font-family: 'Poppins', sans-serif;\r\n  text-align: center;\r\n}\r\n.button-play-again {\r\n  width: clamp(155px, 50%, 300px);\r\n  height: clamp(45px, 11%, 70px);\r\n  background-color: #06bc68;\r\n}\r\n.button-play-again:active {\r\n  width: clamp(153px, 49%, 298px);\r\n  height: clamp(44px, 10%, 69px);\r\n}\r\n.opponent-main {\r\n  z-index: 8;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   enemyBoardVs: () => (/* binding */ enemyBoardVs),
/* harmony export */   updatePlayerBoardVs: () => (/* binding */ updatePlayerBoardVs)
/* harmony export */ });
/* harmony import */ var _logicGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logicGame */ "./src/related/logicGame.js");


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
      rowDiv.style.cursor = 'pointer';
      rowDiv.dataset.rowNum = row;
      rowDiv.dataset.colNum = col;
      colDiv.appendChild(rowDiv);
    }
    container.appendChild(colDiv);
  }
}

function updatePlayerBoardVs(shipElement, tile, isRotated) {
  const allTiles = document.querySelectorAll('.player-row');
  const container = document.querySelector('.player-board');
  const row = parseInt(tile.dataset.rowNum, 10);
  const col = parseInt(tile.dataset.rowCol, 10);
  const coordinates = [];
  coordinates.push(row, col);
  const num = (0,_logicGame__WEBPACK_IMPORTED_MODULE_0__.calculateNumber)(coordinates);
  const currentTile = allTiles[num];

  const shipContainer = document.querySelector('.popUp');
  if (!shipContainer || !shipElement || !tile) {
    return;
  }

  const shipImg = new Image();
  shipImg.src = shipElement.src;
  shipImg.classList.add('placed-ship');
  shipImg.style.position = 'absolute';
  shipImg.style.zIndex = '5';

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

  const tileRect = currentTile.getBoundingClientRect();
  const boardRect = container.getBoundingClientRect();

  const offsetX = tileRect.left - boardRect.left;
  const offsetY = tileRect.top - boardRect.top;
  shipImg.style.left = `${offsetX}px`;
  shipImg.style.top = `${offsetY}px`;

  if (isRotated) {
    shipImg.style.transform = 'rotate(90deg)';
    shipImg.style.transformOrigin = 'top left';
    shipImg.style.left = `${offsetX + tileRect.height}px`;
  }

  container.appendChild(shipImg);
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
    return;
  }

  const shipImg = new Image();
  shipImg.src = shipElement.src;
  shipImg.classList.add('placed-ship');
  shipImg.style.position = 'absolute';
  shipImg.style.zIndex = '5';

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
      (0,_board__WEBPACK_IMPORTED_MODULE_0__.updatePlayerBoardVs)(shipClicked, tile, rotateAnswer);
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
  console.log(board.getBoard());
  if (div.children.length === 0) (0,_logicGame__WEBPACK_IMPORTED_MODULE_8__.StartingGame)(board, name);
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

  const playerBoard = document.querySelector('.player-board');
  const playerName = document.querySelector('.headline-player');
  playerName.textContent = `${name} board`;
  (0,_board__WEBPACK_IMPORTED_MODULE_0__.createBoardVs)(playerBoard);

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
  let playerHealth = 5;
  let enemyHealth = 5;
  let isShipBuilt = false;
  let playerName;
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
    savePlayerName(name) {
      playerName = name;
    },
    returnName() {
      return playerName;
    },
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
      let coordinates = position.map((element) => parseInt(element, 10));
      return coordinates;
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
    playerHit() {
      playerHealth -= 1;
    },
    returnPlayerHealth() {
      return playerHealth;
    },
    enemyHit() {
      enemyHealth -= 1;
    },
    returnEnemyHealth() {
      return enemyHealth;
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
/* harmony export */   calculateNumber: () => (/* binding */ calculateNumber),
/* harmony export */   createPLayers: () => (/* binding */ createPLayers)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/related/player.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/related/board.js");
/* harmony import */ var _photos_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photos/delete.png */ "./src/photos/delete.png");
/* harmony import */ var _winVs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winVs */ "./src/related/winVs.js");





function getRandomNumber64() {
  return Math.floor(Math.random() * 64);
}

function createPLayers(name) {
  const mainPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(name);
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)('computer');
  return [mainPlayer, computer];
}
function didHit() {
  const allTiles = document.querySelectorAll('.player-row');
  let hit = false;
  for (let index = 0; index < allTiles.length; index++) {
    const div = allTiles[index];
    if (div.classList.contains('enemy-hit')) hit = true;
  }
  return hit;
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
    if (tile.classList.contains('enemy-sunk')) return;

    const shipLength = ship.getLength();
    for (let index = 0; index < shipLength; index++) {
      const element = ship.returnPlace().map((number) => parseInt(number, 10));

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
      board.enemyHit();

      if (board.returnEnemyHealth() === 0) {
        (0,_winVs__WEBPACK_IMPORTED_MODULE_3__.WinScreen)(name, name);
      }
    } else {
      messageContainer.textContent = `${name} missed! try again`;
      addClasses(sunk, tile, inTile);
      const divMessage = document.querySelector('.message-container');
      divMessage.classList.remove('player-turn');
      divMessage.classList.add('enemy-turn');
      checkTurn(tile, board, name);
    }
  } else {
    if (inTile === 2) {
      messageContainer.textContent = `you can't hit it again!`;
    } else {
      messageContainer.textContent = `you can't miss again`;
    }
  }
}

function enemyAttackUntilEnd(
  textCoordinates,
  allTiles,
  tileLogic,
  number,
  board
) {
  let coordinates = textCoordinates.map((element) => parseInt(element, 10));

  const directions = tileLogic.returnDirections();
  const newCoordinates = [];

  if (directions[0] === 'down') {
    if (coordinates[0] !== 7) {
      const row = coordinates[0] + 1;
      newCoordinates.push(row, coordinates[1]);
      number++;
      const newTileVs = allTiles[number];
      if (newTileVs.classList.contains('enemy-hit')) {
        board.savePosition(newCoordinates);
        enemyAttackUntilEnd(newCoordinates, allTiles, tileLogic, number, board);
      } else {
        enemyAttack(board, number, newCoordinates, allTiles, newTileVs);
      }
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
      if (newTileVs.classList.contains('enemy-missed')) {
        tileLogic.shiftDirections();
        enemyAttackUntilEnd(newCoordinates, allTiles, tileLogic, number, board);
        return;
      }
      if (newTileVs.classList.contains('enemy-hit')) {
        board.savePosition(newCoordinates);
        enemyAttackUntilEnd(newCoordinates, allTiles, tileLogic, number, board);
      } else {
        enemyAttack(board, number, newCoordinates, allTiles, newTileVs);
      }
    } else {
      tileLogic.shiftDirections();
      enemyAttackUntilEnd(coordinates, allTiles, tileLogic, number, board);
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
      if (newTileVs.classList.contains('enemy-missed')) {
        tileLogic.shiftDirections();
        enemyAttackUntilEnd(newCoordinates, allTiles, tileLogic, number, board);
        return;
      }
      if (newTileVs.classList.contains('enemy-hit')) {
        board.savePosition(newCoordinates);
        enemyAttackUntilEnd(newCoordinates, allTiles, tileLogic, number, board);
      } else {
        enemyAttack(board, number, newCoordinates, allTiles, newTileVs);
      }
    } else {
      tileLogic.shiftDirections();
      enemyAttackUntilEnd(coordinates, allTiles, tileLogic, number, board);
    }
    return;
  }
  if (directions[0] === 'left' || directions.length === 0) {
    coordinates = board.returnPosition();
    number = calculateNumber(coordinates);

    const col = coordinates[1] - 1;
    newCoordinates.push(coordinates[0], col);
    number -= 8;
    const newTileVs = allTiles[number];
    if (newTileVs.classList.contains('enemy-missed')) {
      tileLogic.shiftDirections();
      enemyAttackUntilEnd(newCoordinates, allTiles, tileLogic, number, board);
      return;
    }
    if (newTileVs.classList.contains('enemy-hit')) {
      board.savePosition(newCoordinates);
      enemyAttackUntilEnd(newCoordinates, allTiles, tileLogic, number, board);
    } else {
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
    board.spliceNum(number);
    const divMessage = document.querySelector('.message-container');
    divMessage.classList.remove('enemy-turn');
    divMessage.classList.add('player-turn');
    return;
  }
  if (tileLogic.isSunk()) {
    const status = tileLogic.isSunk();

    addClasses(status, tile, tileLogic);
  } else if ((tileLogic !== 0) & (tileLogic !== 2)) {
    tileLogic.hit();
    const status = tileLogic.isSunk();
    if (!status) {
      tileLogic.enterPosition(coordinates);

      addClasses(status, tile, tileLogic);
      board.spliceNum(number);
      enemyAttackUntilEnd(coordinates, allTiles, tileLogic, number, board);
    } else {
      tileLogic.enterPosition(coordinates);

      addClasses(status, tile, tileLogic, '.player-row');
      board.spliceNum(number);
      board.playerHit();
      if (board.returnPlayerHealth() === 0) {
        (0,_winVs__WEBPACK_IMPORTED_MODULE_3__.WinScreen)('opponent', board.returnName());
      }
      enemyTurn(board);
    }
  }
}

function hitAgain(board) {
  let position = board.returnPosition();
  let allTiles = document.querySelectorAll('.player-row');
  let boardLogic = board.getBoard();
  let tileLogic = boardLogic[position[0]][position[1]];
  let number = 0;
  enemyAttackUntilEnd(position, allTiles, tileLogic, number, board);
}

function enemyTurn(board) {
  if (didHit()) {
    hitAgain(board);
  } else {
    const list = board.return64list();
    let number;
    let answer = false;
    number = getRandomNumber64();

    const allTiles = document.querySelectorAll('.player-row');
    const tile = allTiles[number];
    const row = parseInt(tile.dataset.rowNum, 10);
    const col = parseInt(tile.dataset.rowCol, 10);
    let coordinates = [];
    coordinates.push(row, col);
    if (
      tile.classList.contains('enemy-hit') ||
      tile.classList.contains('enemy-missed') ||
      tile.classList.contains('enemy-sunk')
    ) {
      board.spliceNum(number);
      enemyTurn(board);
    } else {
      board.savePosition(coordinates);

      enemyAttack(board, number, coordinates, allTiles, tile);
    }
  }
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

  const enemyBoard = document.querySelector('.opponent-board');

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
  gameBoard.savePlayerName(name);
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
  let col = false;
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
      return parseInt(length, 10) === hits;
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

/***/ "./src/related/winVs.js":
/*!******************************!*\
  !*** ./src/related/winVs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WinScreen: () => (/* binding */ WinScreen)
/* harmony export */ });
/* harmony import */ var _chooseVS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chooseVS */ "./src/related/chooseVS.js");


function WinScreen(name, playerName) {
  const overlay = document.querySelector('.overlay');
  const winContainer = document.createElement('div');
  const winMessage = document.createElement('h2');
  const playAgainButton = document.createElement('button');
  overlay.style.display = 'block';
  winContainer.classList.add('win-container');
  winContainer.style.zIndex = '20';
  winMessage.classList.add('winMessage');
  playAgainButton.classList.add('button');
  playAgainButton.classList.add('button-play-again');

  winMessage.textContent = `${name} Wins`;
  playAgainButton.textContent = 'Play Again!';

  winContainer.appendChild(winMessage);
  winContainer.appendChild(playAgainButton);
  body.appendChild(winContainer);

  playAgainButton.addEventListener('click', () => {
    resetGame(playerName);
  });
}

function resetGame(name) {
  const overlay = document.querySelector('.overlay');
  const winContainer = document.querySelector('.win-container');
  const popUp = document.querySelector('.popUp');
  const playerBoard = document.querySelector('.player-board');
  const opponentBoard = document.querySelector('.opponent-board');

  popUp.remove();
  overlay.remove();
  winContainer.remove();
  while (playerBoard.firstChild) {
    playerBoard.removeChild(playerBoard.firstChild);
  }
  while (opponentBoard.firstChild) {
    opponentBoard.removeChild(opponentBoard.firstChild);
  }
  (0,_chooseVS__WEBPACK_IMPORTED_MODULE_0__.createPlayerChoice)(name);
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
function startingTheGame() {
  const startGameButton = document.querySelector('.start-game');
  startGameButton.addEventListener('click', () => {
    const inputElement = document.getElementById('name');
    const inputValue = inputElement.value;
    (0,_related_chooseVS__WEBPACK_IMPORTED_MODULE_1__.createPlayerChoice)(inputValue);
  });
}

homepage();
startingTheGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlJQUF5SSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sNkNBQTZDLHdGQUF3RixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9DQUFvQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNsaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsc0JBQXNCLHNCQUFzQixXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0scUJBQXFCLE9BQU8sTUFBTSxxQkFBcUIsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSwwSEFBMEgsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLDZDQUE2Qyx3RkFBd0YsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxv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QUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBWTtBQUNkO0FBQ0E7QUFD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Q0g7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3JlbGF0ZWQvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9jaG9vc2VWUy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9yZWxhdGVkL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9yZWxhdGVkL2xvZ2ljR2FtZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9yZWxhdGVkL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3JlbGF0ZWQvd2luVnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsZmErU2xhYitPbmUmZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PU9yYml0cm9uOndnaHRANDAwLi45MDAmZmFtaWx5PVBhY2lmaWNvJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG59XG5cbi5ob21lLXBhZ2Uge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBDb3ZlciBlbnN1cmVzIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIGVudGlyZSBkaXYgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZmEgU2xhYiBPbmVcIiwgc2VyaWY7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLndlbGNvbWUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLmxvZ28ge1xuICBmb250LXNpemU6IDE2dnc7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lbnRlci1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1dmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmb250LWZhbWlseTogXCJPcmJpdHJvblwiLCBzYW5zLXNlcmlmO1xufVxuXG4jbmFtZSB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogXCJPcmJpdHJvblwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDU1JTtcbiAgaGVpZ2h0OiA3NSU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnV0dG9uOmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB3aWR0aDogNTQlO1xuICBoZWlnaHQ6IDc0JTtcbn1cblxuLnN0YXJ0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3F1YXJlIHtcbiAgd2lkdGg6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uc3F1YXJlLWNob29zZSB7XG4gIHdpZHRoOiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmhlYWRsaW5lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJBbGZhIFNsYWIgT25lXCIsIHNlcmlmO1xuICBtYXJnaW46IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wb3BVcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NTM7XG4gIGhlaWdodDogNzAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA4NSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5zaGlwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNob29zZUhlYWQge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbi1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTUzO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wbGF5ZXItYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vcHBvbmVudC1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYWluLWJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGhlaWdodDogODB2aDtcbn1cblxuLmhlYWRsaW5lLWdhbWUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5tZXNzYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogY2xhbXAoNjBweCwgMTB2aCwgNTAwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTQxZDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5idXR0b24tY29udGFpbmVyLWNob29zZSB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYnV0dG9uLXJvdGF0ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4YzA2O1xufVxuXG4uYnV0dG9uLXN0YXJ0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWFlNzM7XG59XG5cbi5idXR0b24tc3RhcnQ6YWN0aXZlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHdpZHRoOiAzNCU7XG4gIGhlaWdodDogOTklO1xufVxuXG4uYnV0dG9uLXJvdGF0ZTphY3RpdmUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgd2lkdGg6IDM0JTtcbiAgaGVpZ2h0OiA5OSU7XG59XG5cbi5jYXJyaWVyIHtcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCA0MHZ3LCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xufVxuXG4uYmF0dGxlLXNoaXAge1xuICB3aWR0aDogY2xhbXAoMTIwcHgsIDMwdncsIDUwMHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XG59XG5cbi5zdWJtYXJpbmUge1xuICB3aWR0aDogY2xhbXAoNjBweCwgMjB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbn1cblxuLmNydWlzZXIge1xuICB3aWR0aDogY2xhbXAoNjBweCwgMjB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbn1cblxuLmRlc3Ryb3llciB7XG4gIHdpZHRoOiBjbGFtcCgyMHB4LCAxMHZ3LCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xufVxuXG4uaG92ZXJlZC10aWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xufVxuXG4ucGxhY2VkLXNoaXAge1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmVuZW15LWhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XG59XG5cbi5kZWwge1xuICB3aWR0aDogY2xhbXAoMjBweCwgMTB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbn1cblxuLmVuZW15LW1pc3NlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGJmZTM7XG59XG5cbi5lbmVteS1zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0OGMwNjtcbn1cblxuLm1lc3NhZ2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucGxheWVyLXJvdyB7XG4gIHotaW5kZXg6IDEyOyAvKiBFbnN1cmUgdGlsZXMgYXJlIGluIGZyb250ICovXG59XG5cbi5wbGFjZWQtc2hpcC1wbGF5ZXIge1xuICB6LWluZGV4OiA1OyAvKiBFbnN1cmUgc2hpcHMgYXJlIGJlaGluZCB0aWxlcyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jb2wge1xuICB6LWluZGV4OiAxMTtcbn1cblxuLndpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTUzO1xuICBoZWlnaHQ6IDQwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdpZHRoOiA4NSU7XG4gIHdpZHRoOiA4NSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuLndpbk1lc3NhZ2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b24tcGxheS1hZ2FpbiB7XG4gIHdpZHRoOiBjbGFtcCgxNTVweCwgNTAlLCAzMDBweCk7XG4gIGhlaWdodDogY2xhbXAoNDVweCwgMTElLCA3MHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2YmM2ODtcbn1cblxuLmJ1dHRvbi1wbGF5LWFnYWluOmFjdGl2ZSB7XG4gIHdpZHRoOiBjbGFtcCgxNTNweCwgNDklLCAyOThweCk7XG4gIGhlaWdodDogY2xhbXAoNDRweCwgMTAlLCA2OXB4KTtcbn1cblxuLm9wcG9uZW50LW1haW4ge1xuICB6LWluZGV4OiA4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBLEVBQUEsa0RBQUE7RUFDQSwyQkFBQSxFQUFBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxh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LGdDQUFBO0VBQ0EsZ0NBQUE7QUE0QkY7O0FBMUJBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQTZCRjs7QUEzQkE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FBOEJGOztBQTVCQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUErQkY7O0FBN0JBO0VBQ0Usb0NBQUE7QUFnQ0Y7O0FBOUJBO0VBQ0UsV0FBQTtBQWlDRjs7QUEvQkE7RUFDRSx5QkFBQTtBQWtDRjs7QUFoQ0E7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FBbUNGOztBQWpDQTtFQUNFLHlCQUFBO0FBb0NGOztBQWxDQTtFQUNFLHlCQUFBO0FBcUNGOztBQW5DQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBc0NGOztBQXBDQTtFQUNFLFdBQUEsRUFBQSw4QkFBQTtBQXVDRjs7QUFyQ0E7RUFDRSxVQUFBLEVBQUEsa0NBQUE7RUFDQSxrQkFBQTtBQXdDRjs7QUF0Q0E7RUFDRSxXQUFBO0FBeUNGOztBQXZDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBMENGOztBQXhDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQTJDRjs7QUF6Q0E7RUFDRSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUE0Q0Y7O0FBMUNBO0VBQ0UsK0JBQUE7RUFDQSw4QkFBQTtBQTZDRjs7QUEzQ0E7RUFDRSxVQUFBO0FBOENGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsZmErU2xhYitPbmUmZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PU9yYml0cm9uOndnaHRANDAwLi45MDAmZmFtaWx5PVBhY2lmaWNvJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5ob21lLXBhZ2Uge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIENvdmVyIGVuc3VyZXMgdGhlIGltYWdlIGNvdmVycyB0aGUgZW50aXJlIGRpdiAqL1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlICovXFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQWxmYSBTbGFiIE9uZScsIHNlcmlmO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi53ZWxjb21lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuICBmb250LXNpemU6IDE2dnc7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLmVudGVyLW5hbWUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDE1dmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmb250LWZhbWlseTogJ09yYml0cm9uJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuI25hbWUge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3JiaXRyb24nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4ubGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbi5idXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjUyNTI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiA1NSU7XFxyXFxuICBoZWlnaHQ6IDc1JTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiA1MG1zO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG4uYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIHdpZHRoOiA1NCU7XFxyXFxuICBoZWlnaHQ6IDc0JTtcXHJcXG59XFxyXFxuLnN0YXJ0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zcXVhcmUge1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5zcXVhcmUtY2hvb3NlIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgei1pbmRleDogMjA7XFxyXFxufVxcclxcbi5oZWFkbGluZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ0FsZmEgU2xhYiBPbmUnLCBzZXJpZjtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ucG9wVXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTUzO1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5jaG9vc2VIZWFkIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm1haW4tZGl2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NTM7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5wbGF5ZXItYm9hcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHotaW5kZXg6IDY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5vcHBvbmVudC1ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4ubWFpbi1ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUtZ2FtZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcbi5tZXNzYWdlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCg2MHB4LCAxMHZoLCA1MDBweCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzE0MWQ7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbi5vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHotaW5kZXg6IDk7XFxyXFxufVxcclxcbi5idXR0b24tY29udGFpbmVyLWNob29zZSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuLmJ1dHRvbi1yb3RhdGUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDhjMDY7XFxyXFxufVxcclxcbi5idXR0b24tc3RhcnQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWFlNzM7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tc3RhcnQ6YWN0aXZlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgd2lkdGg6IDM0JTtcXHJcXG4gIGhlaWdodDogOTklO1xcclxcbn1cXHJcXG4uYnV0dG9uLXJvdGF0ZTphY3RpdmUge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB3aWR0aDogMzQlO1xcclxcbiAgaGVpZ2h0OiA5OSU7XFxyXFxufVxcclxcbi5jYXJyaWVyIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgxNTBweCwgNDB2dywgNTAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxufVxcclxcbi5iYXR0bGUtc2hpcCB7XFxyXFxuICB3aWR0aDogY2xhbXAoMTIwcHgsIDMwdncsIDUwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbn1cXHJcXG4uc3VibWFyaW5lIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCg2MHB4LCAyMHZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG59XFxyXFxuLmNydWlzZXIge1xcclxcbiAgd2lkdGg6IGNsYW1wKDYwcHgsIDIwdncsIDUwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbn1cXHJcXG4uZGVzdHJveWVyIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG59XFxyXFxuLmhvdmVyZWQtdGlsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcbi5wbGFjZWQtc2hpcCB7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuLmVuZW15LWhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyMzNjO1xcclxcbn1cXHJcXG4uZGVsIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG59XFxyXFxuLmVuZW15LW1pc3NlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhiZmUzO1xcclxcbn1cXHJcXG4uZW5lbXktc3VuayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4YzA2O1xcclxcbn1cXHJcXG4ubWVzc2FnZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLnBsYXllci1yb3cge1xcclxcbiAgei1pbmRleDogMTI7IC8qIEVuc3VyZSB0aWxlcyBhcmUgaW4gZnJvbnQgKi9cXHJcXG59XFxyXFxuLnBsYWNlZC1zaGlwLXBsYXllciB7XFxyXFxuICB6LWluZGV4OiA1OyAvKiBFbnN1cmUgc2hpcHMgYXJlIGJlaGluZCB0aWxlcyAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uY29sIHtcXHJcXG4gIHotaW5kZXg6IDExO1xcclxcbn1cXHJcXG4ud2luLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NTM7XFxyXFxuICBoZWlnaHQ6IDQwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxuLndpbk1lc3NhZ2Uge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJ1dHRvbi1wbGF5LWFnYWluIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgxNTVweCwgNTAlLCAzMDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDQ1cHgsIDExJSwgNzBweCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZiYzY4O1xcclxcbn1cXHJcXG4uYnV0dG9uLXBsYXktYWdhaW46YWN0aXZlIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgxNTNweCwgNDklLCAyOThweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDQ0cHgsIDEwJSwgNjlweCk7XFxyXFxufVxcclxcbi5vcHBvbmVudC1tYWluIHtcXHJcXG4gIHotaW5kZXg6IDg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNhbGN1bGF0ZU51bWJlciB9IGZyb20gJy4vbG9naWNHYW1lJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkVnMoY29udGFpbmVyKSB7XHJcbiAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcclxuICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29sRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbCcpO1xyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgODsgcm93KyspIHtcclxuICAgICAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoJ3BsYXllci1yb3cnKTtcclxuXHJcbiAgICAgIHJvd0Rpdi5kYXRhc2V0LnJvd051bSA9IHJvdztcclxuICAgICAgcm93RGl2LmRhdGFzZXQucm93Q29sID0gY29sO1xyXG4gICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQocm93RGl2KTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQm9hcmRDaG9vc2VWcyhjb250YWluZXIpIHtcclxuICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xyXG4gICAgY29uc3QgY29sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb2xEaXYuY2xhc3NMaXN0LmFkZCgnY29sJyk7XHJcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA4OyByb3crKykge1xyXG4gICAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZS1jaG9vc2UnKTtcclxuICAgICAgcm93RGl2LmRhdGFzZXQucm93TnVtID0gcm93O1xyXG4gICAgICByb3dEaXYuZGF0YXNldC5yb3dDb2wgPSBjb2w7XHJcbiAgICAgIGNvbERpdi5hcHBlbmRDaGlsZChyb3dEaXYpO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmVteUJvYXJkVnMoY29udGFpbmVyKSB7XHJcbiAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcclxuICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29sRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbCcpO1xyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgODsgcm93KyspIHtcclxuICAgICAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoJ2VuZW15LXJvdycpO1xyXG4gICAgICByb3dEaXYuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICByb3dEaXYuZGF0YXNldC5yb3dOdW0gPSByb3c7XHJcbiAgICAgIHJvd0Rpdi5kYXRhc2V0LmNvbE51bSA9IGNvbDtcclxuICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHJvd0Rpdik7XHJcbiAgICB9XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sRGl2KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBsYXllckJvYXJkVnMoc2hpcEVsZW1lbnQsIHRpbGUsIGlzUm90YXRlZCkge1xyXG4gIGNvbnN0IGFsbFRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1yb3cnKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XHJcbiAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd051bSwgMTApO1xyXG4gIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dDb2wsIDEwKTtcclxuICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xyXG4gIGNvb3JkaW5hdGVzLnB1c2gocm93LCBjb2wpO1xyXG4gIGNvbnN0IG51bSA9IGNhbGN1bGF0ZU51bWJlcihjb29yZGluYXRlcyk7XHJcbiAgY29uc3QgY3VycmVudFRpbGUgPSBhbGxUaWxlc1tudW1dO1xyXG5cclxuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XHJcbiAgaWYgKCFzaGlwQ29udGFpbmVyIHx8ICFzaGlwRWxlbWVudCB8fCAhdGlsZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hpcEltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIHNoaXBJbWcuc3JjID0gc2hpcEVsZW1lbnQuc3JjO1xyXG4gIHNoaXBJbWcuY2xhc3NMaXN0LmFkZCgncGxhY2VkLXNoaXAnKTtcclxuICBzaGlwSW1nLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICBzaGlwSW1nLnN0eWxlLnpJbmRleCA9ICc1JztcclxuXHJcbiAgY29uc3Qgc2hpcFR5cGVzID0gW1xyXG4gICAgJ2NhcnJpZXInLFxyXG4gICAgJ2JhdHRsZS1zaGlwJyxcclxuICAgICdzdWJtYXJpbmUnLFxyXG4gICAgJ2NydWlzZXInLFxyXG4gICAgJ2Rlc3Ryb3llcicsXHJcbiAgXTtcclxuICBzaGlwVHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xyXG4gICAgaWYgKHNoaXBFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0eXBlKSkge1xyXG4gICAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQodHlwZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRpbGVSZWN0ID0gY3VycmVudFRpbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgY29uc3QgYm9hcmRSZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICBjb25zdCBvZmZzZXRYID0gdGlsZVJlY3QubGVmdCAtIGJvYXJkUmVjdC5sZWZ0O1xyXG4gIGNvbnN0IG9mZnNldFkgPSB0aWxlUmVjdC50b3AgLSBib2FyZFJlY3QudG9wO1xyXG4gIHNoaXBJbWcuc3R5bGUubGVmdCA9IGAke29mZnNldFh9cHhgO1xyXG4gIHNoaXBJbWcuc3R5bGUudG9wID0gYCR7b2Zmc2V0WX1weGA7XHJcblxyXG4gIGlmIChpc1JvdGF0ZWQpIHtcclxuICAgIHNoaXBJbWcuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xyXG4gICAgc2hpcEltZy5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAndG9wIGxlZnQnO1xyXG4gICAgc2hpcEltZy5zdHlsZS5sZWZ0ID0gYCR7b2Zmc2V0WCArIHRpbGVSZWN0LmhlaWdodH1weGA7XHJcbiAgfVxyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcEltZyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlQm9hcmRWcyxcclxuICBlbmVteUJvYXJkVnMsXHJcbiAgY3JlYXRlQm9hcmRDaG9vc2VWcyxcclxuICB1cGRhdGVQbGF5ZXJCb2FyZFZzLFxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUJvYXJkQ2hvb3NlVnMsXHJcbiAgdXBkYXRlUGxheWVyQm9hcmRWcyxcclxuICBjcmVhdGVCb2FyZFZzLFxyXG59IGZyb20gJy4vYm9hcmQnO1xyXG5pbXBvcnQgeyBTaGlwLCBzaGlwVlMgfSBmcm9tICcuL3NoaXAnO1xyXG5pbXBvcnQgYmF0dGxlU2hpcCBmcm9tICcuLi9waG90b3MvYmF0dGxlU2hpcDIucG5nJztcclxuaW1wb3J0IGNhcnJpZXIgZnJvbSAnLi4vcGhvdG9zL2NhcnJpZXIucG5nJztcclxuaW1wb3J0IGNydWlzZXIgZnJvbSAnLi4vcGhvdG9zL2NydWlzZXIucG5nJztcclxuaW1wb3J0IGRlc3Ryb3llciBmcm9tICcuLi9waG90b3MvZGVzdHJveWVyLnBuZyc7XHJcbmltcG9ydCBzdWJtYXJpbmUgZnJvbSAnLi4vcGhvdG9zL3N1Ym1hcmluZS5wbmcnO1xyXG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXJDaG9pY2VMb2dpYyB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgU3RhcnRpbmdHYW1lIH0gZnJvbSAnLi9sb2dpY0dhbWUnO1xyXG5cclxuZnVuY3Rpb24gYWRkQ2xpY2tlZFNoaXAoY2xpY2tlZFNoaXApIHtcclxuICBjb25zdCBhbGxTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWNob29zZScpO1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xyXG4gIH0pO1xyXG4gIGNsaWNrZWRTaGlwLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZlNoaXBDbGlja2VkKCkge1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtY2hvb3NlJyk7XHJcbiAgbGV0IGFuc3dlclNoaXA7XHJcbiAgbGV0IGFuc3dlciA9IGZhbHNlO1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XHJcbiAgICAgIGFuc3dlciA9IHRydWU7XHJcbiAgICAgIGFuc3dlclNoaXAgPSBzaGlwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChhbnN3ZXIpIHJldHVybiBhbnN3ZXJTaGlwLmRhdGFzZXQuc2hpcExlbmd0aDtcclxuICBlbHNlIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXR1cm5TaGlwKCkge1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtY2hvb3NlJyk7XHJcbiAgbGV0IGFuc3dlclNoaXAgPSBudWxsO1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XHJcbiAgICAgIGFuc3dlclNoaXAgPSBzaGlwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBhbnN3ZXJTaGlwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUm90YXRlKCkge1xyXG4gIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tcm90YXRlJyk7XHJcbiAgaWYgKHJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZS1vbicpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIHBsYWNlU2hpcEltYWdlKHNoaXBFbGVtZW50LCB0aWxlLCBpc1JvdGF0ZWQpIHtcclxuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XHJcbiAgaWYgKCFzaGlwQ29udGFpbmVyIHx8ICFzaGlwRWxlbWVudCB8fCAhdGlsZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hpcEltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIHNoaXBJbWcuc3JjID0gc2hpcEVsZW1lbnQuc3JjO1xyXG4gIHNoaXBJbWcuY2xhc3NMaXN0LmFkZCgncGxhY2VkLXNoaXAnKTtcclxuICBzaGlwSW1nLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICBzaGlwSW1nLnN0eWxlLnpJbmRleCA9ICc1JztcclxuXHJcbiAgY29uc3Qgc2hpcFR5cGVzID0gW1xyXG4gICAgJ2NhcnJpZXInLFxyXG4gICAgJ2JhdHRsZS1zaGlwJyxcclxuICAgICdzdWJtYXJpbmUnLFxyXG4gICAgJ2NydWlzZXInLFxyXG4gICAgJ2Rlc3Ryb3llcicsXHJcbiAgXTtcclxuICBzaGlwVHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xyXG4gICAgaWYgKHNoaXBFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0eXBlKSkge1xyXG4gICAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQodHlwZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRpbGVSZWN0ID0gdGlsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBjb25zdCBib2FyZFJlY3QgPSBzaGlwQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICBjb25zdCBvZmZzZXRYID0gdGlsZVJlY3QubGVmdCAtIGJvYXJkUmVjdC5sZWZ0O1xyXG4gIGNvbnN0IG9mZnNldFkgPSB0aWxlUmVjdC50b3AgLSBib2FyZFJlY3QudG9wO1xyXG5cclxuICBzaGlwSW1nLnN0eWxlLmxlZnQgPSBgJHtvZmZzZXRYfXB4YDtcclxuICBzaGlwSW1nLnN0eWxlLnRvcCA9IGAke29mZnNldFl9cHhgO1xyXG5cclxuICBpZiAoaXNSb3RhdGVkKSB7XHJcbiAgICBzaGlwSW1nLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcclxuICAgIHNoaXBJbWcuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ3RvcCBsZWZ0JztcclxuICAgIHNoaXBJbWcuc3R5bGUubGVmdCA9IGAke29mZnNldFggKyB0aWxlUmVjdC5oZWlnaHR9cHhgO1xyXG4gIH1cclxuICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBJbWcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5Zb3VQbGFjZShib2FyZCwgY29vcmRpbmF0ZXMsIHJvdGF0ZSwgZG9lc1NoaXApIHtcclxuICBjb25zdCBudW0gPSBwYXJzZUludChkb2VzU2hpcCwgMTApO1xyXG4gIGxldCBhbnN3ZXIgPSB0cnVlO1xyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbnVtOyBpbmRleCsrKSB7XHJcbiAgICBjb25zdCBuZXdDb29yZGluYXRlcyA9IHJvdGF0ZVxyXG4gICAgICA/IFtjb29yZGluYXRlc1swXSArIGluZGV4LCBjb29yZGluYXRlc1sxXV1cclxuICAgICAgOiBbY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdICsgaW5kZXhdO1xyXG5cclxuICAgIGlmIChib2FyZC5yZXR1cm5QbGFjZShuZXdDb29yZGluYXRlcykgIT09IG51bGwpIHtcclxuICAgICAgYW5zd2VyID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFuc3dlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2luZ1NoaXAodGlsZSwgYm9hcmQpIHtcclxuICBjb25zdCBkb2VzU2hpcCA9IGNoZWNrSWZTaGlwQ2xpY2tlZCgpO1xyXG4gIGNvbnN0IHNoaXBDbGlja2VkID0gcmV0dXJuU2hpcCgpO1xyXG4gIGxldCBudW0gPSBwYXJzZUludChkb2VzU2hpcCwgMTApO1xyXG4gIGlmIChkb2VzU2hpcCAhPT0gbnVsbCkge1xyXG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd051bSwgMTApO1xyXG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd0NvbCwgMTApO1xyXG4gICAgY29uc3Qgcm90YXRlQW5zd2VyID0gY2hlY2tJZlJvdGF0ZSgpO1xyXG5cclxuICAgIGlmICghcm90YXRlQW5zd2VyKSB7XHJcbiAgICAgIGlmIChjb2wgKyBudW0gPiA4KSB7XHJcbiAgICAgICAgbnVtLS07XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocm93ICsgbnVtID4gOCkge1xyXG4gICAgICAgIG51bS0tO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcclxuICAgIGNvb3JkaW5hdGVzLnB1c2gocm93LCBjb2wpO1xyXG4gICAgaWYgKGNhbllvdVBsYWNlKGJvYXJkLCBjb29yZGluYXRlcywgcm90YXRlQW5zd2VyLCBkb2VzU2hpcCkpIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoZG9lc1NoaXApO1xyXG4gICAgICBib2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZXMsIHNoaXAsIHJvdGF0ZUFuc3dlcik7XHJcbiAgICAgIHBsYWNlU2hpcEltYWdlKHNoaXBDbGlja2VkLCB0aWxlLCByb3RhdGVBbnN3ZXIpOyAvLyBQbGFjZSBzaGlwIGltYWdlIGJlaGluZCB0aGUgdGlsZXNcclxuICAgICAgdXBkYXRlUGxheWVyQm9hcmRWcyhzaGlwQ2xpY2tlZCwgdGlsZSwgcm90YXRlQW5zd2VyKTtcclxuICAgICAgc2hpcENsaWNrZWQucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZU51bWJlcihjb29yZGluYXRlcykge1xyXG4gIGNvbnN0IG51bSA9IGNvb3JkaW5hdGVzWzFdICogOCArIGNvb3JkaW5hdGVzWzBdO1xyXG4gIHJldHVybiBudW07XHJcbn1cclxuZnVuY3Rpb24gY29sb3JUaWxlcyhjb29yZGluYXRlcywgc2hpcExlbmd0aCwgY29sb3IpIHtcclxuICBjb25zdCBjb2wgPSBjaGVja0lmUm90YXRlKCk7XHJcbiAgbGV0IHBsYWNlID0gY2FsY3VsYXRlTnVtYmVyKGNvb3JkaW5hdGVzKTtcclxuICBjb25zdCBhbGxUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUtY2hvb3NlJyk7XHJcblxyXG4gIGlmICghY29sKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcExlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAocGxhY2UgPj0gYWxsVGlsZXMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHRpbGUgPSBhbGxUaWxlc1twbGFjZV07XHJcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZC10aWxlJyk7XHJcbiAgICAgIHRpbGUuc3R5bGUuc2V0UHJvcGVydHkoJy0taG92ZXItY29sb3InLCBjb2xvcik7XHJcbiAgICAgIHBsYWNlICs9IDg7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwTGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGlmICgocGxhY2UgJSA4KSArIDEgPT09IDgpIHtcclxuICAgICAgICBjb25zdCB0aWxlID0gYWxsVGlsZXNbcGxhY2VdO1xyXG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZC10aWxlJyk7XHJcbiAgICAgICAgdGlsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ob3Zlci1jb2xvcicsIGNvbG9yKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGlsZSA9IGFsbFRpbGVzW3BsYWNlXTtcclxuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkLXRpbGUnKTtcclxuICAgICAgdGlsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ob3Zlci1jb2xvcicsIGNvbG9yKTtcclxuICAgICAgcGxhY2UrKztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNvbG9yKHRpbGUpIHtcclxuICBjb25zdCBzaGlwID0gcmV0dXJuU2hpcCgpO1xyXG4gIGNvbnN0IHNoaXBMZW5ndGggPSBjaGVja0lmU2hpcENsaWNrZWQoKTtcclxuICBpZiAoc2hpcCAhPT0gbnVsbCkge1xyXG4gICAgY29uc3QgY29sb3IgPSBzaGlwLmRhdGFzZXQuc2hpcENvbG9yO1xyXG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd051bSwgMTApO1xyXG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd0NvbCwgMTApO1xyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcclxuICAgIGNvb3JkaW5hdGVzLnB1c2gocm93LCBjb2wpO1xyXG4gICAgY29sb3JUaWxlcyhjb29yZGluYXRlcywgc2hpcExlbmd0aCwgY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ29sb3IoKSB7XHJcbiAgY29uc3QgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlLWNob29zZScpO1xyXG4gIGFsbFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuICAgIGlmICh0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaG92ZXJlZC10aWxlJykpIHtcclxuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkLXRpbGUnKTtcclxuICAgICAgdGlsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnLS1ob3Zlci1jb2xvcicpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5Zb3VQbGF5KGJvYXJkLCBuYW1lKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XHJcbiAgY29uc29sZS5sb2coYm9hcmQuZ2V0Qm9hcmQoKSk7XHJcbiAgaWYgKGRpdi5jaGlsZHJlbi5sZW5ndGggPT09IDApIFN0YXJ0aW5nR2FtZShib2FyZCwgbmFtZSk7XHJcbiAgZWxzZSByZXR1cm47XHJcbn1cclxuLy8gYnVnIG5lZWQgdG8gY2hhbmdlIHRoZSBjYW4geW91IHBsYXkgdG8gPT09IDBcclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50KGFsbFRpbGVzLCBib2FyZCwgbmFtZSkge1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtY2hvb3NlJyk7XHJcbiAgYWxsU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZENsaWNrZWRTaGlwKHNoaXApKTtcclxuICB9KTtcclxuXHJcbiAgYWxsVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYWNpbmdTaGlwKHRpbGUsIGJvYXJkKSk7XHJcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IGNoYW5nZUNvbG9yKHRpbGUpKTtcclxuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiByZW1vdmVDb2xvcih0aWxlKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJvdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tcm90YXRlJyk7XHJcbiAgcm90YXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcm90YXRlLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZS1vbicpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tc3RhcnQnKTtcclxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNhbllvdVBsYXkoYm9hcmQsIG5hbWUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXJDaG9pY2UobmFtZSkge1xyXG4gIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtcGFnZScpO1xyXG4gIGhvbWVQYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgY29uc3QgY2hvb3NlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XHJcblxyXG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xyXG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGxpbmUtcGxheWVyJyk7XHJcbiAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGAke25hbWV9IGJvYXJkYDtcclxuICBjcmVhdGVCb2FyZFZzKHBsYXllckJvYXJkKTtcclxuXHJcbiAgY2hvb3NlQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcxMCc7XHJcbiAgY2hvb3NlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcFVwJyk7XHJcbiAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcclxuICBib2FyZENvbnRhaW5lci5zdHlsZS56SW5kZXggPSAnMTEnO1xyXG4gIGgyLmNsYXNzTGlzdC5hZGQoJ2Nob29zZUhlYWQnKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcclxuICBzaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY29udGFpbmVyJyk7XHJcbiAgc2hpcENvbnRhaW5lci5zdHlsZS56SW5kZXggPSAnMTAnO1xyXG4gIHJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICByb3RhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXJvdGF0ZScpO1xyXG4gIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1zdGFydCcpO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyLWNob29zZScpO1xyXG5cclxuICBoMi50ZXh0Q29udGVudCA9IGAke25hbWV9IGNob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIHNoaXBgO1xyXG4gIHJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSb3RhdGUnO1xyXG4gIHN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0JztcclxuXHJcbiAgc2hpcFZTKGNhcnJpZXIsIGJhdHRsZVNoaXAsIHN1Ym1hcmluZSwgY3J1aXNlciwgZGVzdHJveWVyLCBzaGlwQ29udGFpbmVyKTtcclxuXHJcbiAgY3JlYXRlQm9hcmRDaG9vc2VWcyhib2FyZENvbnRhaW5lcik7XHJcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGVQbGF5ZXJDaG9pY2VMb2dpYyhuYW1lKTtcclxuXHJcbiAgaGVhZGxpbmUuYXBwZW5kQ2hpbGQoaDIpO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVCdXR0b24pO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XHJcblxyXG4gIGNob29zZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZSk7XHJcbiAgY2hvb3NlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XHJcbiAgY2hvb3NlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcclxuICBjaG9vc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENvbnRhaW5lcik7XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChjaG9vc2VDb250YWluZXIpO1xyXG4gIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZS1jaG9vc2UnKTtcclxuXHJcbiAgYWRkRXZlbnQodGlsZXMsIGJvYXJkLCBuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlUGxheWVyQ2hvaWNlIH07XHJcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWF0cml4KHJvd3MsIGNvbHMpIHtcclxuICBjb25zdCBtYXRyaXggPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gW107XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xyXG4gICAgICByb3cucHVzaChudWxsKTsgLy8gWW91IGNhbiBpbml0aWFsaXplIHRoZSBtYXRyaXggd2l0aCBhbnkgdmFsdWUsIGhlcmUgd2UgdXNlIDBcclxuICAgIH1cclxuICAgIG1hdHJpeC5wdXNoKHJvdyk7XHJcbiAgfVxyXG4gIHJldHVybiBtYXRyaXg7XHJcbn1cclxuZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyQmV0d2VlbjBBbmQ3KCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcclxufVxyXG5mdW5jdGlvbiB0cnVlT3JGYWxzZSgpIHtcclxuICByZXR1cm4gTWF0aC5yYW5kb20oKSA+PSAwLjU7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlNjQoKSB7XHJcbiAgY29uc3QgYXJyYXkgPSBbXTtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNjQ7IGluZGV4KyspIHtcclxuICAgIGFycmF5LnB1c2goaW5kZXgpO1xyXG4gIH1cclxuICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVCb2FyZCgpIHtcclxuICBsZXQgcGxheWVySGVhbHRoID0gNTtcclxuICBsZXQgZW5lbXlIZWFsdGggPSA1O1xyXG4gIGxldCBpc1NoaXBCdWlsdCA9IGZhbHNlO1xyXG4gIGxldCBwbGF5ZXJOYW1lO1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gW107XHJcbiAgY29uc3Qgc2hpcDQgPSBTaGlwKDQpO1xyXG4gIGNvbnN0IHNoaXAzID0gU2hpcCgzKTtcclxuICBjb25zdCBzaGlwMkFsc28gPSBTaGlwKDIpO1xyXG4gIGNvbnN0IHNoaXAyID0gU2hpcCgyKTtcclxuICBjb25zdCBzaGlwMSA9IFNoaXAoMSk7XHJcbiAgY29uc3QgbGlzdCA9IGNyZWF0ZTY0KCk7XHJcbiAgbGV0IHBvc2l0aW9uO1xyXG4gIGFsbFNoaXBzLnB1c2goc2hpcDQsIHNoaXAzLCBzaGlwMkFsc28sIHNoaXAyLCBzaGlwMSk7XHJcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGVNYXRyaXgoOCwgOCk7XHJcbiAgY29uc3QgZW5lbXlCb2FyZCA9IGNyZWF0ZU1hdHJpeCg4LCA4KTtcclxuICByZXR1cm4ge1xyXG4gICAgc2F2ZVBsYXllck5hbWUobmFtZSkge1xyXG4gICAgICBwbGF5ZXJOYW1lID0gbmFtZTtcclxuICAgIH0sXHJcbiAgICByZXR1cm5OYW1lKCkge1xyXG4gICAgICByZXR1cm4gcGxheWVyTmFtZTtcclxuICAgIH0sXHJcbiAgICBwbGFjZVNoaXAoY29vcmRpbmF0ZXMsIHNoaXAsIGNvbCkge1xyXG4gICAgICBjb25zdCBsZW5ndGhTaGlwID0gc2hpcC5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGhTaGlwOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKCFjb2wpIHtcclxuICAgICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXSArIGluZGV4XSA9IHNoaXA7XHJcbiAgICAgICAgfSBlbHNlIGJvYXJkW2Nvb3JkaW5hdGVzWzBdICsgaW5kZXhdW2Nvb3JkaW5hdGVzWzFdXSA9IHNoaXA7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzYXZlUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcclxuICAgICAgcG9zaXRpb24gPSBjb29yZGluYXRlcztcclxuICAgIH0sXHJcbiAgICByZXR1cm5Qb3NpdGlvbigpIHtcclxuICAgICAgbGV0IGNvb3JkaW5hdGVzID0gcG9zaXRpb24ubWFwKChlbGVtZW50KSA9PiBwYXJzZUludChlbGVtZW50LCAxMCkpO1xyXG4gICAgICByZXR1cm4gY29vcmRpbmF0ZXM7XHJcbiAgICB9LFxyXG4gICAgcGxhY2VFbmVteVNoaXAoY29vcmRpbmF0ZXMsIHNoaXAsIGNvbCkge1xyXG4gICAgICBjb25zdCBsZW5ndGhTaGlwID0gc2hpcC5nZXRMZW5ndGgoKTtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aFNoaXA7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xyXG4gICAgICAgIGlmICghY29sKSB7XHJcbiAgICAgICAgICBlbmVteUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXSArIGluZGV4XSA9IHNoaXA7XHJcbiAgICAgICAgICBhcnJheS5wdXNoKGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSArIGluZGV4KTtcclxuICAgICAgICAgIHNoaXAuZW50ZXJQb3NpdGlvbihhcnJheSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVuZW15Qm9hcmRbY29vcmRpbmF0ZXNbMF0gKyBpbmRleF1bY29vcmRpbmF0ZXNbMV1dID0gc2hpcDtcclxuICAgICAgICAgIGFycmF5LnB1c2goY29vcmRpbmF0ZXNbMF0gKyBpbmRleCwgY29vcmRpbmF0ZXNbMV0pO1xyXG4gICAgICAgICAgc2hpcC5lbnRlclBvc2l0aW9uKGFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBBdHRhY2soY29vcmRpbmF0ZXMsIHRpbGUpIHtcclxuICAgICAgY29uc3QgcGxhY2UgPSBlbmVteUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV07XHJcbiAgICAgIGlmICh0aWxlID09PSBudWxsKSB7XHJcbiAgICAgICAgZW5lbXlCb2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dID0gMDtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwbGFjZS5oaXQoKTtcclxuICAgICAgICBlbmVteUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPSAyO1xyXG4gICAgICAgIHJldHVybiBwbGFjZS5pc1N1bmsoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXllckhpdCgpIHtcclxuICAgICAgcGxheWVySGVhbHRoIC09IDE7XHJcbiAgICB9LFxyXG4gICAgcmV0dXJuUGxheWVySGVhbHRoKCkge1xyXG4gICAgICByZXR1cm4gcGxheWVySGVhbHRoO1xyXG4gICAgfSxcclxuICAgIGVuZW15SGl0KCkge1xyXG4gICAgICBlbmVteUhlYWx0aCAtPSAxO1xyXG4gICAgfSxcclxuICAgIHJldHVybkVuZW15SGVhbHRoKCkge1xyXG4gICAgICByZXR1cm4gZW5lbXlIZWFsdGg7XHJcbiAgICB9LFxyXG4gICAgZ2V0Qm9hcmQoKSB7XHJcbiAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH0sXHJcbiAgICBnZXRFbmVteUJvYXJkKCkge1xyXG4gICAgICByZXR1cm4gZW5lbXlCb2FyZDtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlckF0dGFjaygpIHtcclxuICAgICAgbGV0IGRvZXNNaXNzID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVTaGlwKG51bWJlcikge1xyXG4gICAgICBjb25zdCBzaGlwID0gU2hpcChudW1iZXIpO1xyXG4gICAgICBpc1NoaXBCdWlsdCA9IHRydWU7XHJcbiAgICAgIHJldHVybiBbc2hpcCwgaXNTaGlwQnVpbHRdO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVNoaXBTdGF0dXMoKSB7XHJcbiAgICAgIGlzU2hpcEJ1aWx0ID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTaGlwU3RhdHVzKCkge1xyXG4gICAgICByZXR1cm4gaXNTaGlwQnVpbHQ7XHJcbiAgICB9LFxyXG4gICAgcmV0dXJuUGxhY2UoY29vcmRpbmF0ZXMpIHtcclxuICAgICAgcmV0dXJuIGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV07XHJcbiAgICB9LFxyXG4gICAgcmV0dXJuNjRsaXN0KCkge1xyXG4gICAgICByZXR1cm4gbGlzdDtcclxuICAgIH0sXHJcbiAgICBzcGxpY2VOdW0obnVtKSB7XHJcbiAgICAgIGxpc3Quc3BsaWNlKG51bSwgMSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlRW5lbXlCb2FyZCgpIHtcclxuICAgICAgd2hpbGUgKGFsbFNoaXBzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGxldCByb3cgPSBnZXRSYW5kb21OdW1iZXJCZXR3ZWVuMEFuZDcoKTtcclxuICAgICAgICBsZXQgY29sID0gZ2V0UmFuZG9tTnVtYmVyQmV0d2VlbjBBbmQ3KCk7XHJcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbCA9IHRydWVPckZhbHNlKCk7XHJcbiAgICAgICAgY29uc3Qgc2hpcCA9IGFsbFNoaXBzWzBdO1xyXG4gICAgICAgIGxldCBjYW5QbGFjZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGhvcml6b250YWwpIHtcclxuICAgICAgICAgIGlmIChyb3cgKyBzaGlwLmdldExlbmd0aCgpID4gOCkge1xyXG4gICAgICAgICAgICBjYW5QbGFjZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGUgcmVzdCBvZiB0aGUgbG9vcCBhbmQgc3RhcnQgd2l0aCBuZXcgcmFuZG9tIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjb2wgKyBzaGlwLmdldExlbmd0aCgpID4gOCkge1xyXG4gICAgICAgICAgICBjYW5QbGFjZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGUgcmVzdCBvZiB0aGUgbG9vcCBhbmQgc3RhcnQgd2l0aCBuZXcgcmFuZG9tIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmdldExlbmd0aCgpOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlCb2FyZFtyb3cgKyBpbmRleF1bY29sXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIGNhblBsYWNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbmVteUJvYXJkW3Jvd11bY29sICsgaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgY2FuUGxhY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FuUGxhY2UpIHtcclxuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW3JvdywgY29sXTtcclxuICAgICAgICAgIHRoaXMucGxhY2VFbmVteVNoaXAoY29vcmRpbmF0ZXMsIHNoaXAsIGhvcml6b250YWwpO1xyXG4gICAgICAgICAgYWxsU2hpcHMuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5leHBvcnQgeyBHYW1lQm9hcmQgfTtcclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVCb2FyZFZzLCBlbmVteUJvYXJkVnMsIHVwZGF0ZVBsYXllckJvYXJkVnMgfSBmcm9tICcuL2JvYXJkJztcclxuaW1wb3J0IGRlbCBmcm9tICcuLi9waG90b3MvZGVsZXRlLnBuZyc7XHJcbmltcG9ydCB7IFdpblNjcmVlbiB9IGZyb20gJy4vd2luVnMnO1xyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyNjQoKSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDY0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUExheWVycyhuYW1lKSB7XHJcbiAgY29uc3QgbWFpblBsYXllciA9IFBsYXllcihuYW1lKTtcclxuICBjb25zdCBjb21wdXRlciA9IFBsYXllcignY29tcHV0ZXInKTtcclxuICByZXR1cm4gW21haW5QbGF5ZXIsIGNvbXB1dGVyXTtcclxufVxyXG5mdW5jdGlvbiBkaWRIaXQoKSB7XHJcbiAgY29uc3QgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLXJvdycpO1xyXG4gIGxldCBoaXQgPSBmYWxzZTtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWxsVGlsZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjb25zdCBkaXYgPSBhbGxUaWxlc1tpbmRleF07XHJcbiAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucygnZW5lbXktaGl0JykpIGhpdCA9IHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBoaXQ7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tUaWxlKHRpbGUsIGJvYXJkKSB7XHJcbiAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd051bSwgMTApO1xyXG4gIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5jb2xOdW0sIDEwKTtcclxuICBjb25zdCBlbmVteUJvYXJkTG9naWMgPSBib2FyZC5nZXRFbmVteUJvYXJkKCk7XHJcbiAgcmV0dXJuIGVuZW15Qm9hcmRMb2dpY1tyb3ddW2NvbF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZU51bWJlcihjb29yZGluYXRlcykge1xyXG4gIGNvbnN0IG51bSA9IGNvb3JkaW5hdGVzWzFdICogOCArIGNvb3JkaW5hdGVzWzBdO1xyXG4gIHJldHVybiBudW07XHJcbn1cclxuZnVuY3Rpb24gYWRkQ2xhc3NlcyhzdGF0dXMsIHRpbGUsIHNoaXAsIGNsYXNzTmFtZSkge1xyXG4gIGlmIChzdGF0dXMgPT09IGZhbHNlKSB7XHJcbiAgICBjb25zdCBkZWxJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGRlbEltZy5jbGFzc0xpc3QuYWRkKCdkZWwnKTtcclxuICAgIGRlbEltZy5zcmMgPSBkZWw7XHJcblxyXG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdlbmVteS1oaXQnKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZGVsSW1nKTtcclxuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMCkge1xyXG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdlbmVteS1taXNzZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmVteS1zdW5rJykpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwTGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBzaGlwLnJldHVyblBsYWNlKCkubWFwKChudW1iZXIpID0+IHBhcnNlSW50KG51bWJlciwgMTApKTtcclxuXHJcbiAgICAgIGNvbnN0IGFsbFRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xyXG4gICAgICBjb25zdCBudW0gPSBjYWxjdWxhdGVOdW1iZXIoZWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUaWxlID0gYWxsVGlsZXNbbnVtXTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50VGlsZSAmJiBjdXJyZW50VGlsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgY3VycmVudFRpbGUucmVtb3ZlQ2hpbGQoY3VycmVudFRpbGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGN1cnJlbnRUaWxlLmNsYXNzTGlzdC5jb250YWlucygnZW5lbXktaGl0JykpIHtcclxuICAgICAgICBjdXJyZW50VGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdlbmVteS1oaXQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY3VycmVudFRpbGUuY2xhc3NMaXN0LmFkZCgnZW5lbXktc3VuaycpO1xyXG5cclxuICAgICAgY29uc3QgZGVsSW1nQWdhaW4gPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgZGVsSW1nQWdhaW4uY2xhc3NMaXN0LmFkZCgnZGVsJyk7XHJcbiAgICAgIGRlbEltZ0FnYWluLnNyYyA9IGRlbDtcclxuICAgICAgY3VycmVudFRpbGUuYXBwZW5kQ2hpbGQoZGVsSW1nQWdhaW4pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBwbGF5ZXJUdXJuKHRpbGUsIGJvYXJkLCBuYW1lKSB7XHJcbiAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcbiAgY29uc3QgaW5UaWxlID0gY2hlY2tUaWxlKHRpbGUsIGJvYXJkKTtcclxuICBjb25zdCByb3cgPSBwYXJzZUludCh0aWxlLmRhdGFzZXQucm93TnVtLCAxMCk7XHJcbiAgY29uc3QgY29sID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LmNvbE51bSwgMTApO1xyXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XHJcbiAgbGV0IHN1bms7XHJcbiAgY29vcmRpbmF0ZXMucHVzaChyb3csIGNvbCk7XHJcbiAgaWYgKGluVGlsZSAhPT0gMiAmJiBpblRpbGUgIT09IDApIHtcclxuICAgIHN1bmsgPSBib2FyZC5BdHRhY2soY29vcmRpbmF0ZXMsIGluVGlsZSk7XHJcbiAgICBpZiAoc3VuayA9PT0gZmFsc2UpIHtcclxuICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke25hbWV9IGhpdCBhIHNoaXAhYDtcclxuICAgICAgYWRkQ2xhc3NlcyhzdW5rLCB0aWxlLCBpblRpbGUpO1xyXG4gICAgfSBlbHNlIGlmIChzdW5rID09PSB0cnVlKSB7XHJcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBzdW5rZW4gYSBzaGlwIWA7XHJcbiAgICAgIGFkZENsYXNzZXMoc3VuaywgdGlsZSwgaW5UaWxlLCAnLmVuZW15LXJvdycpO1xyXG4gICAgICBib2FyZC5lbmVteUhpdCgpO1xyXG5cclxuICAgICAgaWYgKGJvYXJkLnJldHVybkVuZW15SGVhbHRoKCkgPT09IDApIHtcclxuICAgICAgICBXaW5TY3JlZW4obmFtZSwgbmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBtaXNzZWQhIHRyeSBhZ2FpbmA7XHJcbiAgICAgIGFkZENsYXNzZXMoc3VuaywgdGlsZSwgaW5UaWxlKTtcclxuICAgICAgY29uc3QgZGl2TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLWNvbnRhaW5lcicpO1xyXG4gICAgICBkaXZNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci10dXJuJyk7XHJcbiAgICAgIGRpdk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZW5lbXktdHVybicpO1xyXG4gICAgICBjaGVja1R1cm4odGlsZSwgYm9hcmQsIG5hbWUpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaW5UaWxlID09PSAyKSB7XHJcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgeW91IGNhbid0IGhpdCBpdCBhZ2FpbiFgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGB5b3UgY2FuJ3QgbWlzcyBhZ2FpbmA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmVteUF0dGFja1VudGlsRW5kKFxyXG4gIHRleHRDb29yZGluYXRlcyxcclxuICBhbGxUaWxlcyxcclxuICB0aWxlTG9naWMsXHJcbiAgbnVtYmVyLFxyXG4gIGJvYXJkXHJcbikge1xyXG4gIGxldCBjb29yZGluYXRlcyA9IHRleHRDb29yZGluYXRlcy5tYXAoKGVsZW1lbnQpID0+IHBhcnNlSW50KGVsZW1lbnQsIDEwKSk7XHJcblxyXG4gIGNvbnN0IGRpcmVjdGlvbnMgPSB0aWxlTG9naWMucmV0dXJuRGlyZWN0aW9ucygpO1xyXG4gIGNvbnN0IG5ld0Nvb3JkaW5hdGVzID0gW107XHJcblxyXG4gIGlmIChkaXJlY3Rpb25zWzBdID09PSAnZG93bicpIHtcclxuICAgIGlmIChjb29yZGluYXRlc1swXSAhPT0gNykge1xyXG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlc1swXSArIDE7XHJcbiAgICAgIG5ld0Nvb3JkaW5hdGVzLnB1c2gocm93LCBjb29yZGluYXRlc1sxXSk7XHJcbiAgICAgIG51bWJlcisrO1xyXG4gICAgICBjb25zdCBuZXdUaWxlVnMgPSBhbGxUaWxlc1tudW1iZXJdO1xyXG4gICAgICBpZiAobmV3VGlsZVZzLmNsYXNzTGlzdC5jb250YWlucygnZW5lbXktaGl0JykpIHtcclxuICAgICAgICBib2FyZC5zYXZlUG9zaXRpb24obmV3Q29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGVuZW15QXR0YWNrVW50aWxFbmQobmV3Q29vcmRpbmF0ZXMsIGFsbFRpbGVzLCB0aWxlTG9naWMsIG51bWJlciwgYm9hcmQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVuZW15QXR0YWNrKGJvYXJkLCBudW1iZXIsIG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgbmV3VGlsZVZzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGlsZUxvZ2ljLnNoaWZ0RGlyZWN0aW9ucygpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoZGlyZWN0aW9uc1swXSA9PT0gJ3VwJykge1xyXG4gICAgY29vcmRpbmF0ZXMgPSBib2FyZC5yZXR1cm5Qb3NpdGlvbigpO1xyXG4gICAgbnVtYmVyID0gY2FsY3VsYXRlTnVtYmVyKGNvb3JkaW5hdGVzKTtcclxuXHJcbiAgICBpZiAoY29vcmRpbmF0ZXNbMF0gIT09IDApIHtcclxuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZXNbMF0gLSAxO1xyXG4gICAgICBuZXdDb29yZGluYXRlcy5wdXNoKHJvdywgY29vcmRpbmF0ZXNbMV0pO1xyXG4gICAgICBudW1iZXItLTtcclxuICAgICAgY29uc3QgbmV3VGlsZVZzID0gYWxsVGlsZXNbbnVtYmVyXTtcclxuICAgICAgaWYgKG5ld1RpbGVWcy5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15LW1pc3NlZCcpKSB7XHJcbiAgICAgICAgdGlsZUxvZ2ljLnNoaWZ0RGlyZWN0aW9ucygpO1xyXG4gICAgICAgIGVuZW15QXR0YWNrVW50aWxFbmQobmV3Q29vcmRpbmF0ZXMsIGFsbFRpbGVzLCB0aWxlTG9naWMsIG51bWJlciwgYm9hcmQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3VGlsZVZzLmNsYXNzTGlzdC5jb250YWlucygnZW5lbXktaGl0JykpIHtcclxuICAgICAgICBib2FyZC5zYXZlUG9zaXRpb24obmV3Q29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGVuZW15QXR0YWNrVW50aWxFbmQobmV3Q29vcmRpbmF0ZXMsIGFsbFRpbGVzLCB0aWxlTG9naWMsIG51bWJlciwgYm9hcmQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVuZW15QXR0YWNrKGJvYXJkLCBudW1iZXIsIG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgbmV3VGlsZVZzKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGlsZUxvZ2ljLnNoaWZ0RGlyZWN0aW9ucygpO1xyXG4gICAgICBlbmVteUF0dGFja1VudGlsRW5kKGNvb3JkaW5hdGVzLCBhbGxUaWxlcywgdGlsZUxvZ2ljLCBudW1iZXIsIGJvYXJkKTtcclxuICAgIH1cclxuICAgIHRpbGVMb2dpYy5zaGlmdERpcmVjdGlvbnMoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGRpcmVjdGlvbnNbMF0gPT09ICdyaWdodCcpIHtcclxuICAgIGNvb3JkaW5hdGVzID0gYm9hcmQucmV0dXJuUG9zaXRpb24oKTtcclxuICAgIG51bWJlciA9IGNhbGN1bGF0ZU51bWJlcihjb29yZGluYXRlcyk7XHJcbiAgICBpZiAoY29vcmRpbmF0ZXNbMV0gIT09IDcpIHtcclxuICAgICAgY29uc3QgY29sID0gY29vcmRpbmF0ZXNbMV0gKyAxO1xyXG4gICAgICBuZXdDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVzWzBdLCBjb2wpO1xyXG4gICAgICBudW1iZXIgKz0gODtcclxuICAgICAgY29uc3QgbmV3VGlsZVZzID0gYWxsVGlsZXNbbnVtYmVyXTtcclxuICAgICAgaWYgKG5ld1RpbGVWcy5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15LW1pc3NlZCcpKSB7XHJcbiAgICAgICAgdGlsZUxvZ2ljLnNoaWZ0RGlyZWN0aW9ucygpO1xyXG4gICAgICAgIGVuZW15QXR0YWNrVW50aWxFbmQobmV3Q29vcmRpbmF0ZXMsIGFsbFRpbGVzLCB0aWxlTG9naWMsIG51bWJlciwgYm9hcmQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3VGlsZVZzLmNsYXNzTGlzdC5jb250YWlucygnZW5lbXktaGl0JykpIHtcclxuICAgICAgICBib2FyZC5zYXZlUG9zaXRpb24obmV3Q29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGVuZW15QXR0YWNrVW50aWxFbmQobmV3Q29vcmRpbmF0ZXMsIGFsbFRpbGVzLCB0aWxlTG9naWMsIG51bWJlciwgYm9hcmQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVuZW15QXR0YWNrKGJvYXJkLCBudW1iZXIsIG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgbmV3VGlsZVZzKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGlsZUxvZ2ljLnNoaWZ0RGlyZWN0aW9ucygpO1xyXG4gICAgICBlbmVteUF0dGFja1VudGlsRW5kKGNvb3JkaW5hdGVzLCBhbGxUaWxlcywgdGlsZUxvZ2ljLCBudW1iZXIsIGJvYXJkKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGRpcmVjdGlvbnNbMF0gPT09ICdsZWZ0JyB8fCBkaXJlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY29vcmRpbmF0ZXMgPSBib2FyZC5yZXR1cm5Qb3NpdGlvbigpO1xyXG4gICAgbnVtYmVyID0gY2FsY3VsYXRlTnVtYmVyKGNvb3JkaW5hdGVzKTtcclxuXHJcbiAgICBjb25zdCBjb2wgPSBjb29yZGluYXRlc1sxXSAtIDE7XHJcbiAgICBuZXdDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVzWzBdLCBjb2wpO1xyXG4gICAgbnVtYmVyIC09IDg7XHJcbiAgICBjb25zdCBuZXdUaWxlVnMgPSBhbGxUaWxlc1tudW1iZXJdO1xyXG4gICAgaWYgKG5ld1RpbGVWcy5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15LW1pc3NlZCcpKSB7XHJcbiAgICAgIHRpbGVMb2dpYy5zaGlmdERpcmVjdGlvbnMoKTtcclxuICAgICAgZW5lbXlBdHRhY2tVbnRpbEVuZChuZXdDb29yZGluYXRlcywgYWxsVGlsZXMsIHRpbGVMb2dpYywgbnVtYmVyLCBib2FyZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChuZXdUaWxlVnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmVteS1oaXQnKSkge1xyXG4gICAgICBib2FyZC5zYXZlUG9zaXRpb24obmV3Q29vcmRpbmF0ZXMpO1xyXG4gICAgICBlbmVteUF0dGFja1VudGlsRW5kKG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgdGlsZUxvZ2ljLCBudW1iZXIsIGJvYXJkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVuZW15QXR0YWNrKGJvYXJkLCBudW1iZXIsIG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgbmV3VGlsZVZzKTtcclxuICAgIH1cclxuICB9XHJcbiAgdGlsZUxvZ2ljLnNoaWZ0RGlyZWN0aW9ucygpO1xyXG4gIHJldHVybjtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5lbXlBdHRhY2soYm9hcmQsIG51bWJlciwgY29vcmRpbmF0ZXMsIGFsbFRpbGVzLCB0aWxlKSB7XHJcbiAgY29uc3QgdGlsZUxvZ2ljID0gYm9hcmQucmV0dXJuUGxhY2UoY29vcmRpbmF0ZXMpO1xyXG4gIGlmICh0aWxlTG9naWMgPT09IG51bGwpIHtcclxuICAgIGFkZENsYXNzZXMoMCwgdGlsZSwgdGlsZUxvZ2ljKTtcclxuICAgIGJvYXJkLnNwbGljZU51bShudW1iZXIpO1xyXG4gICAgY29uc3QgZGl2TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLWNvbnRhaW5lcicpO1xyXG4gICAgZGl2TWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdlbmVteS10dXJuJyk7XHJcbiAgICBkaXZNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10dXJuJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICh0aWxlTG9naWMuaXNTdW5rKCkpIHtcclxuICAgIGNvbnN0IHN0YXR1cyA9IHRpbGVMb2dpYy5pc1N1bmsoKTtcclxuXHJcbiAgICBhZGRDbGFzc2VzKHN0YXR1cywgdGlsZSwgdGlsZUxvZ2ljKTtcclxuICB9IGVsc2UgaWYgKCh0aWxlTG9naWMgIT09IDApICYgKHRpbGVMb2dpYyAhPT0gMikpIHtcclxuICAgIHRpbGVMb2dpYy5oaXQoKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IHRpbGVMb2dpYy5pc1N1bmsoKTtcclxuICAgIGlmICghc3RhdHVzKSB7XHJcbiAgICAgIHRpbGVMb2dpYy5lbnRlclBvc2l0aW9uKGNvb3JkaW5hdGVzKTtcclxuXHJcbiAgICAgIGFkZENsYXNzZXMoc3RhdHVzLCB0aWxlLCB0aWxlTG9naWMpO1xyXG4gICAgICBib2FyZC5zcGxpY2VOdW0obnVtYmVyKTtcclxuICAgICAgZW5lbXlBdHRhY2tVbnRpbEVuZChjb29yZGluYXRlcywgYWxsVGlsZXMsIHRpbGVMb2dpYywgbnVtYmVyLCBib2FyZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aWxlTG9naWMuZW50ZXJQb3NpdGlvbihjb29yZGluYXRlcyk7XHJcblxyXG4gICAgICBhZGRDbGFzc2VzKHN0YXR1cywgdGlsZSwgdGlsZUxvZ2ljLCAnLnBsYXllci1yb3cnKTtcclxuICAgICAgYm9hcmQuc3BsaWNlTnVtKG51bWJlcik7XHJcbiAgICAgIGJvYXJkLnBsYXllckhpdCgpO1xyXG4gICAgICBpZiAoYm9hcmQucmV0dXJuUGxheWVySGVhbHRoKCkgPT09IDApIHtcclxuICAgICAgICBXaW5TY3JlZW4oJ29wcG9uZW50JywgYm9hcmQucmV0dXJuTmFtZSgpKTtcclxuICAgICAgfVxyXG4gICAgICBlbmVteVR1cm4oYm9hcmQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGl0QWdhaW4oYm9hcmQpIHtcclxuICBsZXQgcG9zaXRpb24gPSBib2FyZC5yZXR1cm5Qb3NpdGlvbigpO1xyXG4gIGxldCBhbGxUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItcm93Jyk7XHJcbiAgbGV0IGJvYXJkTG9naWMgPSBib2FyZC5nZXRCb2FyZCgpO1xyXG4gIGxldCB0aWxlTG9naWMgPSBib2FyZExvZ2ljW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV07XHJcbiAgbGV0IG51bWJlciA9IDA7XHJcbiAgZW5lbXlBdHRhY2tVbnRpbEVuZChwb3NpdGlvbiwgYWxsVGlsZXMsIHRpbGVMb2dpYywgbnVtYmVyLCBib2FyZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuZW15VHVybihib2FyZCkge1xyXG4gIGlmIChkaWRIaXQoKSkge1xyXG4gICAgaGl0QWdhaW4oYm9hcmQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBsaXN0ID0gYm9hcmQucmV0dXJuNjRsaXN0KCk7XHJcbiAgICBsZXQgbnVtYmVyO1xyXG4gICAgbGV0IGFuc3dlciA9IGZhbHNlO1xyXG4gICAgbnVtYmVyID0gZ2V0UmFuZG9tTnVtYmVyNjQoKTtcclxuXHJcbiAgICBjb25zdCBhbGxUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItcm93Jyk7XHJcbiAgICBjb25zdCB0aWxlID0gYWxsVGlsZXNbbnVtYmVyXTtcclxuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dOdW0sIDEwKTtcclxuICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dDb2wsIDEwKTtcclxuICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xyXG4gICAgY29vcmRpbmF0ZXMucHVzaChyb3csIGNvbCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmVteS1oaXQnKSB8fFxyXG4gICAgICB0aWxlLmNsYXNzTGlzdC5jb250YWlucygnZW5lbXktbWlzc2VkJykgfHxcclxuICAgICAgdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15LXN1bmsnKVxyXG4gICAgKSB7XHJcbiAgICAgIGJvYXJkLnNwbGljZU51bShudW1iZXIpO1xyXG4gICAgICBlbmVteVR1cm4oYm9hcmQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9hcmQuc2F2ZVBvc2l0aW9uKGNvb3JkaW5hdGVzKTtcclxuXHJcbiAgICAgIGVuZW15QXR0YWNrKGJvYXJkLCBudW1iZXIsIGNvb3JkaW5hdGVzLCBhbGxUaWxlcywgdGlsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1R1cm4odGlsZSwgYm9hcmQsIG5hbWUpIHtcclxuICBjb25zdCBkaXZNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UtY29udGFpbmVyJyk7XHJcbiAgaWYgKGRpdk1lc3NhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCd3aW4nKSkge1xyXG4gICAgY29uc29sZS5sb2coJ3dpbicpO1xyXG4gIH0gZWxzZSBpZiAoZGl2TWVzc2FnZS5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllci10dXJuJykpIHtcclxuICAgIHBsYXllclR1cm4odGlsZSwgYm9hcmQsIG5hbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbmVteVR1cm4oYm9hcmQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnQoYm9hcmQsIG5hbWUpIHtcclxuICBjb25zdCBhbGxUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteS1yb3cnKTtcclxuICBhbGxUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjaGVja1R1cm4odGlsZSwgYm9hcmQsIG5hbWUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN0YXJ0aW5nR2FtZShib2FyZCwgbmFtZSkge1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcCcpO1xyXG4gIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQtYm9hcmQnKTtcclxuXHJcbiAgZW5lbXlCb2FyZFZzKGVuZW15Qm9hcmQpO1xyXG4gIGJvYXJkLmNyZWF0ZUVuZW15Qm9hcmQoKTtcclxuICBjb25zdCBlbmVteUJvYXJkTG9naWMgPSBib2FyZC5nZXRFbmVteUJvYXJkKCk7XHJcbiAgY29uc3QgZGl2TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLWNvbnRhaW5lcicpO1xyXG4gIGRpdk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgncGxheWVyLXR1cm4nKTtcclxuICBhZGRFdmVudChib2FyZCwgbmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVBMYXllcnMsIFN0YXJ0aW5nR2FtZSwgY2FsY3VsYXRlTnVtYmVyIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUJvYXJkVnMsIGVuZW15Qm9hcmRWcyB9IGZyb20gJy4vYm9hcmQnO1xyXG5cclxuZnVuY3Rpb24gcGFnZShuYW1lKSB7XHJcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XHJcbiAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHBvbmVudC1ib2FyZCcpO1xyXG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGxpbmUtZ2FtZScpO1xyXG4gIGNyZWF0ZUJvYXJkVnMocGxheWVyQm9hcmQpO1xyXG4gIGVuZW15Qm9hcmRWcyhvcHBvbmVudEJvYXJkKTtcclxuICBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gYCR7bmFtZX0gYm9hcmRgO1xyXG59XHJcbmV4cG9ydCB7IHBhZ2UgfTtcclxuIiwiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xyXG5cclxuZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcclxuICBjb25zdCBib2FyZCA9IEdhbWVCb2FyZCgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIGJvYXJkLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBsYXllckNob2ljZUxvZ2ljKG5hbWUpIHtcclxuICBjb25zdCBnYW1lQm9hcmQgPSBHYW1lQm9hcmQobmFtZSk7XHJcbiAgZ2FtZUJvYXJkLnNhdmVQbGF5ZXJOYW1lKG5hbWUpO1xyXG4gIHJldHVybiBnYW1lQm9hcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllciwgY3JlYXRlUGxheWVyQ2hvaWNlTG9naWMgfTtcclxuIiwiZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcclxuICBsZXQgaGl0cyA9IDA7XHJcbiAgbGV0IHN1bmsgPSBmYWxzZTtcclxuICBsZXQgY29sID0gZmFsc2U7XHJcbiAgY29uc3QgZGlyZWN0aW9ucyA9IFsnZG93bicsICd1cCcsICdyaWdodCcsICdsZWZ0J107XHJcbiAgY29uc3QgcG9zaXRpb24gPSBbXTtcclxuICByZXR1cm4ge1xyXG4gICAgcmV0dXJuUGxhY2UoKSB7XHJcbiAgICAgIHJldHVybiBwb3NpdGlvbi5zaGlmdCgpO1xyXG4gICAgfSxcclxuICAgIHJldHVybkRpcmVjdGlvbnMoKSB7XHJcbiAgICAgIHJldHVybiBkaXJlY3Rpb25zO1xyXG4gICAgfSxcclxuICAgIHNoaWZ0RGlyZWN0aW9ucygpIHtcclxuICAgICAgZGlyZWN0aW9ucy5zaGlmdCgpO1xyXG4gICAgfSxcclxuICAgIGVudGVyUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcclxuICAgICAgcG9zaXRpb24ucHVzaChjb29yZGluYXRlcyk7XHJcbiAgICB9LFxyXG4gICAgZ2V0TnVtT2ZIaXRzKCkge1xyXG4gICAgICByZXR1cm4gaGl0cztcclxuICAgIH0sXHJcbiAgICBoaXQoKSB7XHJcbiAgICAgIGhpdHMgKz0gMTtcclxuICAgIH0sXHJcbiAgICBpc1N1bmsoKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChsZW5ndGgsIDEwKSA9PT0gaGl0cztcclxuICAgIH0sXHJcbiAgICBnZXRMZW5ndGgoKSB7XHJcbiAgICAgIHJldHVybiBsZW5ndGg7XHJcbiAgICB9LFxyXG4gICAgZ2V0U2hpcCgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsZW5ndGgsXHJcbiAgICAgICAgaGl0cyxcclxuICAgICAgICBzdW5rLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbmZ1bmN0aW9uIHNoaXBWUyhcclxuICBjYXJyaWVyLFxyXG4gIGJhdHRsZVNoaXAsXHJcbiAgc3VibWFyaW5lLFxyXG4gIGNydWlzZXIsXHJcbiAgZGVzdHJveWVyLFxyXG4gIHNoaXBDb250YWluZXJcclxuKSB7XHJcbiAgY29uc3QgY2FycmllckltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IGJhdHRsZVNoaXBJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBzdWJtYXJpbmVJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBjcnVpc2VySW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgZGVzdHJveWVySW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY2FycmllckltZy5jbGFzc0xpc3QuYWRkKCdjYXJyaWVyJywgJ3NoaXAtY2hvb3NlJyk7XHJcbiAgYmF0dGxlU2hpcEltZy5jbGFzc0xpc3QuYWRkKCdiYXR0bGUtc2hpcCcsICdzaGlwLWNob29zZScpO1xyXG4gIHN1Ym1hcmluZUltZy5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmUnLCAnc2hpcC1jaG9vc2UnKTtcclxuICBjcnVpc2VySW1nLmNsYXNzTGlzdC5hZGQoJ2NydWlzZXInLCAnc2hpcC1jaG9vc2UnKTtcclxuICBkZXN0cm95ZXJJbWcuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVyJywgJ3NoaXAtY2hvb3NlJyk7XHJcbiAgY2FycmllckltZy5zcmMgPSBjYXJyaWVyO1xyXG4gIGJhdHRsZVNoaXBJbWcuc3JjID0gYmF0dGxlU2hpcDtcclxuICBzdWJtYXJpbmVJbWcuc3JjID0gc3VibWFyaW5lO1xyXG4gIGNydWlzZXJJbWcuc3JjID0gY3J1aXNlcjtcclxuICBkZXN0cm95ZXJJbWcuc3JjID0gZGVzdHJveWVyO1xyXG4gIGNhcnJpZXJJbWcuZGF0YXNldC5zaGlwTGVuZ3RoID0gNDtcclxuICBiYXR0bGVTaGlwSW1nLmRhdGFzZXQuc2hpcExlbmd0aCA9IDM7XHJcbiAgc3VibWFyaW5lSW1nLmRhdGFzZXQuc2hpcExlbmd0aCA9IDI7XHJcbiAgY3J1aXNlckltZy5kYXRhc2V0LnNoaXBMZW5ndGggPSAyO1xyXG4gIGRlc3Ryb3llckltZy5kYXRhc2V0LnNoaXBMZW5ndGggPSAxO1xyXG5cclxuICBjYXJyaWVySW1nLmRhdGFzZXQuc2hpcENvbG9yID0gJyNmZjRkNmQnO1xyXG4gIGJhdHRsZVNoaXBJbWcuZGF0YXNldC5zaGlwQ29sb3IgPSAnI2ZhYTMwNyc7XHJcbiAgc3VibWFyaW5lSW1nLmRhdGFzZXQuc2hpcENvbG9yID0gJyMwMGI0ZDgnO1xyXG4gIGNydWlzZXJJbWcuZGF0YXNldC5zaGlwQ29sb3IgPSAnI2ZmZGQwMCc7XHJcbiAgZGVzdHJveWVySW1nLmRhdGFzZXQuc2hpcENvbG9yID0gJyM3YmYxYTgnO1xyXG5cclxuICBjYXJyaWVySW1nLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICBiYXR0bGVTaGlwSW1nLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICBzdWJtYXJpbmVJbWcuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gIGNydWlzZXJJbWcuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gIGRlc3Ryb3llckltZy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FycmllckltZyk7XHJcbiAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChiYXR0bGVTaGlwSW1nKTtcclxuICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1hcmluZUltZyk7XHJcbiAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChjcnVpc2VySW1nKTtcclxuICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3Ryb3llckltZyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNoaXAsIHNoaXBWUyB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVQbGF5ZXJDaG9pY2UgfSBmcm9tICcuL2Nob29zZVZTJztcclxuXHJcbmZ1bmN0aW9uIFdpblNjcmVlbihuYW1lLCBwbGF5ZXJOYW1lKSB7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcbiAgY29uc3Qgd2luQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB3aW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2luLWNvbnRhaW5lcicpO1xyXG4gIHdpbkNvbnRhaW5lci5zdHlsZS56SW5kZXggPSAnMjAnO1xyXG4gIHdpbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnd2luTWVzc2FnZScpO1xyXG4gIHBsYXlBZ2FpbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICBwbGF5QWdhaW5CdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXBsYXktYWdhaW4nKTtcclxuXHJcbiAgd2luTWVzc2FnZS50ZXh0Q29udGVudCA9IGAke25hbWV9IFdpbnNgO1xyXG4gIHBsYXlBZ2FpbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdQbGF5IEFnYWluISc7XHJcblxyXG4gIHdpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5NZXNzYWdlKTtcclxuICB3aW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheUFnYWluQnV0dG9uKTtcclxuICBib2R5LmFwcGVuZENoaWxkKHdpbkNvbnRhaW5lcik7XHJcblxyXG4gIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlc2V0R2FtZShwbGF5ZXJOYW1lKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRHYW1lKG5hbWUpIHtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuICBjb25zdCB3aW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XHJcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XHJcbiAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHBvbmVudC1ib2FyZCcpO1xyXG5cclxuICBwb3BVcC5yZW1vdmUoKTtcclxuICBvdmVybGF5LnJlbW92ZSgpO1xyXG4gIHdpbkNvbnRhaW5lci5yZW1vdmUoKTtcclxuICB3aGlsZSAocGxheWVyQm9hcmQuZmlyc3RDaGlsZCkge1xyXG4gICAgcGxheWVyQm9hcmQucmVtb3ZlQ2hpbGQocGxheWVyQm9hcmQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG4gIHdoaWxlIChvcHBvbmVudEJvYXJkLmZpcnN0Q2hpbGQpIHtcclxuICAgIG9wcG9uZW50Qm9hcmQucmVtb3ZlQ2hpbGQob3Bwb25lbnRCb2FyZC5maXJzdENoaWxkKTtcclxuICB9XHJcbiAgY3JlYXRlUGxheWVyQ2hvaWNlKG5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgeyBXaW5TY3JlZW4gfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlUGxheWVyQ2hvaWNlIH0gZnJvbSAnLi9yZWxhdGVkL2Nob29zZVZTJztcclxuaW1wb3J0IHsgcGFnZSB9IGZyb20gJy4vcmVsYXRlZC9wYWdlJztcclxuaW1wb3J0IGJhdHRsZXNoaXAgZnJvbSAnLi9waG90b3MvYmF0dGxlc2hpcC5wbmcnO1xyXG5pbXBvcnQgbWV0YWwgZnJvbSAnLi9waG90b3Mvc2VhbWxlc3MtbWV0YWwuanBnJztcclxuXHJcbmZ1bmN0aW9uIGhvbWVwYWdlKCkge1xyXG4gIGNvbnN0IGhvbWVQaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXBhZ2UnKTtcclxuICBob21lUGhvdG8uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JhdHRsZXNoaXB9KWA7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcclxuXHJcbiAgbG9nby5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bWV0YWx9KWA7XHJcbiAgbG9nby5zdHlsZS53ZWJraXRCYWNrZ3JvdW5kQ2xpcCA9ICd0ZXh0JztcclxuICBsb2dvLnN0eWxlLmJhY2tncm91bmRDbGlwID0gJ3RleHQnO1xyXG59XHJcbmZ1bmN0aW9uIHN0YXJ0aW5nVGhlR2FtZSgpIHtcclxuICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpO1xyXG4gIHN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRFbGVtZW50LnZhbHVlO1xyXG4gICAgY3JlYXRlUGxheWVyQ2hvaWNlKGlucHV0VmFsdWUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5ob21lcGFnZSgpO1xyXG5zdGFydGluZ1RoZUdhbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9