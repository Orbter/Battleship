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
  font-family: "Orbitron", sans-serif;
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
  border: 3px solid black;
  border-radius: 7px;
}

.label {
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
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
  width: 100%;
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
  font-size: 1.6rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  text-align: center;
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
}

.computer-board {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (min-width: 425px) and (max-width: 768px) {
  .popUp {
    height: fit-content;
  }
  .square-choose {
    width: clamp(50px, 5vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .square {
    width: clamp(50px, 5vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .del {
    width: clamp(50px, 5vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .carrier {
    width: clamp(200px, 20vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .battle-ship {
    width: clamp(150px, 15vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .submarine {
    width: clamp(100px, 10vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .cruiser {
    width: clamp(100px, 10vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .destroyer {
    width: clamp(50px, 5vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .ship-container {
    height: 350px;
  }
  .button-container-choose {
    height: 70px;
  }
  .button-start {
    height: clamp(50px, 80%, 80px);
    width: 35%;
  }
  .button-start:active {
    font-size: 1.1rem;
    height: clamp(49px, 79%, 79px);
    width: 34%;
  }
  .button-rotate {
    height: clamp(50px, 80%, 80px);
    width: 35%;
  }
  .button-rotate:active {
    font-size: 1.1rem;
    height: clamp(49px, 79%, 79px);
    width: 34%;
  }
  .message-container {
    width: clamp(425px, 80%, 500px);
  }
  .message {
    font-size: 1.8rem;
  }
  .win-container {
    height: 40%;
    width: 65%;
  }
  .start-game {
    font-size: 1.8rem;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .main-board {
    flex-direction: row;
    align-items: top;
    width: 100%;
    height: 60%;
  }
  .square {
    width: clamp(50px, 5vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .square-choose {
    width: clamp(50px, 5vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .message-container {
    width: 40vw;
    height: 13vw;
  }
  .message {
    font-size: 2rem;
  }
  .main-div {
    justify-content: space-around;
  }
  .computer-board {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
    height: 20%;
    gap: 30px;
  }
  .del {
    width: clamp(50px, 5vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .carrier {
    width: clamp(200px, 20vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .battle-ship {
    width: clamp(150px, 15vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .submarine {
    width: clamp(100px, 10vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .cruiser {
    width: clamp(100px, 10vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .destroyer {
    width: clamp(50px, 5vw, 500px);
    height: clamp(50px, 5vw, 500px);
  }
  .button-start {
    height: clamp(50px, 80%, 80px);
    width: 25%;
  }
  .button-start:active {
    font-size: 1.1rem;
    height: clamp(49px, 79%, 79px);
    width: 24%;
  }
  .button-rotate {
    height: clamp(50px, 80%, 80px);
    width: 25%;
  }
  .button-rotate:active {
    font-size: 1.1rem;
    height: clamp(49px, 79%, 79px);
    width: 24%;
  }
  .button-container-choose {
    height: 75px;
    width: 70%;
  }
  .win-container {
    width: 65%;
  }
  .start-game {
    width: clamp(400px, 20%, 600px);
    font-size: 2rem;
  }
  #name {
    width: 50%;
    height: 80px;
  }
}
@media (min-width: 1025px) {
  .main-board {
    flex-direction: row;
    align-items: top;
    width: 100%;
    height: 60%;
  }
  .square {
    width: clamp(50px, 5vw, 72px);
    height: clamp(50px, 5vw, 72px);
  }
  .square-choose {
    width: clamp(50px, 5vw, 72px);
    height: clamp(50px, 5vw, 72px);
  }
  .message-container {
    width: 40vw;
    height: 13vw;
  }
  .message {
    font-size: 2rem;
  }
  .main-div {
    justify-content: space-around;
  }
  .computer-board {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
    height: 20%;
    gap: 30px;
  }
  .del {
    width: clamp(50px, 5vw, 72px);
    height: clamp(50px, 5vw, 72px);
  }
  .carrier {
    width: clamp(200px, 20vw, 288px);
    height: clamp(50px, 5vw, 72px);
  }
  .battle-ship {
    width: clamp(150px, 15vw, 216px);
    height: clamp(50px, 5vw, 72px);
  }
  .submarine {
    width: clamp(100px, 10vw, 144px);
    height: clamp(50px, 5vw, 72px);
  }
  .cruiser {
    width: clamp(100px, 10vw, 144px);
    height: clamp(50px, 5vw, 72px);
  }
  .destroyer {
    width: clamp(50px, 5vw, 72px);
    height: clamp(50px, 5vw, 72px);
  }
  .button-start {
    height: clamp(70px, 80%, 80px);
    width: clamp(100px, 24%, 240px);
    font-size: 1.7rem;
  }
  .button-start:active {
    font-size: 1.6rem;
    height: clamp(49px, 79%, 79px);
    width: clamp(99px, 23%, 239px);
  }
  .button-rotate {
    height: clamp(50px, 80%, 80px);
    width: clamp(100px, 24%, 240px);
    font-size: 1.7rem;
  }
  .button-rotate:active {
    font-size: 1.6rem;
    height: clamp(49px, 79%, 79px);
    width: clamp(99px, 23%, 239px);
  }
  .button-container-choose {
    height: 110px;
    width: 50%;
  }
  .win-container {
    width: 45%;
    max-width: 850px;
  }
  .logo {
    font-size: 9rem;
  }
  #name {
    width: 40%;
    height: 100px;
  }
  .start-game {
    width: clamp(400px, 20%, 600px);
    font-size: 2rem;
  }
  .start-game:active {
    width: clamp(399px, 19%, 599px);
    font-size: 1.9rem;
  }
  .enter-name-container {
    height: 20vh;
  }
  .label {
    font-size: 2.3rem;
  }
  .welcome {
    font-size: 4rem;
  }
  .ship-container {
    flex-direction: row;
    height: 20%;
  }
  .button-play-again {
    width: clamp(300px, 50%, 500px);
    height: clamp(75px, 16%, 150px);
    font-size: 2rem;
  }
  .button-play-again:active {
    width: clamp(299px, 49%, 499px);
    height: clamp(74px, 15%, 149px);
    font-size: 1.9rem;
  }
  .winMessage {
    font-size: 3.5rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\nbody {\r\n  height: 100vh;\r\n  margin: 0;\r\n}\r\n.home-page {\r\n  height: 100vh;\r\n  background-size: cover; /* Cover ensures the image covers the entire div */\r\n  background-position: center; /* Centers the background image */\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.header {\r\n  text-align: center;\r\n  font-family: 'Alfa Slab One', serif;\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.welcome {\r\n  font-size: 2.5rem;\r\n  font-family: 'Orbitron', sans-serif;\r\n}\r\n.logo {\r\n  font-size: 16vw;\r\n  color: transparent;\r\n  font-weight: bold;\r\n}\r\n.enter-name-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 15vh;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  font-family: 'Orbitron', sans-serif;\r\n}\r\n#name {\r\n  width: 80%;\r\n  height: 50px;\r\n  font-size: 2rem;\r\n  font-family: 'Orbitron', sans-serif;\r\n  border: 3px solid black;\r\n  border-radius: 7px;\r\n}\r\n.label {\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n}\r\n.button {\r\n  border-radius: 12px;\r\n  background-color: #525252;\r\n  color: white;\r\n  border: 1px solid black;\r\n  width: 55%;\r\n  height: 75%;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  transition: all ease-in 50ms;\r\n  cursor: pointer;\r\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);\r\n}\r\n.button:active {\r\n  font-size: 1.1rem;\r\n  width: 54%;\r\n  height: 74%;\r\n}\r\n.start-container {\r\n  width: 100%;\r\n  height: 10vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.square {\r\n  width: clamp(30px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n  border: 1px solid white;\r\n}\r\n.square-choose {\r\n  width: clamp(30px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n  border: 1px solid white;\r\n  transition: background-color 0.3s;\r\n  z-index: 20;\r\n}\r\n.headline {\r\n  text-align: center;\r\n  font-family: 'Alfa Slab One', serif;\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.popUp {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #494953;\r\n  height: 70%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 85%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-top-left-radius: 12px;\r\n  border-top-right-radius: 12px;\r\n  border-bottom-left-radius: 12px;\r\n  border-bottom-right-radius: 12px;\r\n  padding: 10px;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.ship-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #212529;\r\n  padding: 10px;\r\n  border-bottom-left-radius: 12px;\r\n  border-bottom-right-radius: 12px;\r\n  width: 100%;\r\n  height: 30%;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n.chooseHead {\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.main-div {\r\n  background-color: #494953;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.title {\r\n  font-family: 'Lato', sans-serif;\r\n  margin: 0;\r\n  color: white;\r\n  font-size: 3.5rem;\r\n  font-weight: bold;\r\n}\r\n.player-board {\r\n  display: flex;\r\n  z-index: 6;\r\n  position: relative;\r\n}\r\n.opponent-board {\r\n  display: flex;\r\n}\r\n.main-board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  height: 80vh;\r\n}\r\n\r\n.headline-game {\r\n  font-family: 'Poppins', sans-serif;\r\n\r\n  color: white;\r\n  font-size: 1.5rem;\r\n}\r\n.message-container {\r\n  width: 100%;\r\n  height: clamp(60px, 10vh, 500px);\r\n  border: 1px solid white;\r\n  background-color: #13141d;\r\n  padding: 5px;\r\n}\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 9;\r\n}\r\n.button-container-choose {\r\n  width: 90%;\r\n  height: 5%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n.button-rotate {\r\n  border-radius: 8px;\r\n  height: 100%;\r\n  width: 35%;\r\n  background-color: #f48c06;\r\n}\r\n.button-start {\r\n  border-radius: 8px;\r\n  height: 100%;\r\n  width: 35%;\r\n  background-color: #2eae73;\r\n}\r\n\r\n.button-start:active {\r\n  font-size: 1.1rem;\r\n  width: 34%;\r\n  height: 99%;\r\n}\r\n.button-rotate:active {\r\n  font-size: 1.1rem;\r\n  width: 34%;\r\n  height: 99%;\r\n}\r\n.carrier {\r\n  width: clamp(150px, 40vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.battle-ship {\r\n  width: clamp(120px, 30vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.submarine {\r\n  width: clamp(60px, 20vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.cruiser {\r\n  width: clamp(60px, 20vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.destroyer {\r\n  width: clamp(20px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.hovered-tile {\r\n  background-color: var(--hover-color);\r\n}\r\n.placed-ship {\r\n  z-index: 10;\r\n}\r\n.enemy-hit {\r\n  background-color: #ef233c;\r\n}\r\n.del {\r\n  width: clamp(20px, 10vw, 500px);\r\n  height: clamp(30px, 10vw, 500px);\r\n}\r\n.enemy-missed {\r\n  background-color: #48bfe3;\r\n}\r\n.enemy-sunk {\r\n  background-color: #f48c06;\r\n}\r\n.message {\r\n  color: white;\r\n  font-size: 1.6rem;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n.player-row {\r\n  z-index: 12; /* Ensure tiles are in front */\r\n}\r\n.placed-ship-player {\r\n  z-index: 5; /* Ensure ships are behind tiles */\r\n  position: absolute;\r\n}\r\n.col {\r\n  z-index: 11;\r\n}\r\n.win-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #494953;\r\n  height: 40%;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  width: 85%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-top-left-radius: 12px;\r\n  border-top-right-radius: 12px;\r\n  border-bottom-left-radius: 12px;\r\n  border-bottom-right-radius: 12px;\r\n}\r\n.winMessage {\r\n  color: white;\r\n  font-size: 3rem;\r\n  font-family: 'Poppins', sans-serif;\r\n  text-align: center;\r\n}\r\n.button-play-again {\r\n  width: clamp(155px, 50%, 300px);\r\n  height: clamp(45px, 11%, 70px);\r\n  background-color: #06bc68;\r\n}\r\n.button-play-again:active {\r\n  width: clamp(153px, 49%, 298px);\r\n  height: clamp(44px, 10%, 69px);\r\n}\r\n.opponent-main {\r\n  z-index: 8;\r\n}\r\n.computer-board {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@media (min-width: 425px) and (max-width: 768px) {\r\n  .popUp {\r\n    height: fit-content;\r\n  }\r\n  .square-choose {\r\n    width: clamp(50px, 5vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .square {\r\n    width: clamp(50px, 5vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .del {\r\n    width: clamp(50px, 5vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .carrier {\r\n    width: clamp(200px, 20vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .battle-ship {\r\n    width: clamp(150px, 15vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .submarine {\r\n    width: clamp(100px, 10vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .cruiser {\r\n    width: clamp(100px, 10vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .destroyer {\r\n    width: clamp(50px, 5vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .ship-container {\r\n    height: 350px;\r\n  }\r\n\r\n  .button-container-choose {\r\n    height: 70px;\r\n  }\r\n  .button-start {\r\n    height: clamp(50px, 80%, 80px);\r\n    width: 35%;\r\n  }\r\n  .button-start:active {\r\n    font-size: 1.1rem;\r\n    height: clamp(49px, 79%, 79px);\r\n    width: 34%;\r\n  }\r\n\r\n  .button-rotate {\r\n    height: clamp(50px, 80%, 80px);\r\n    width: 35%;\r\n  }\r\n\r\n  .button-rotate:active {\r\n    font-size: 1.1rem;\r\n    height: clamp(49px, 79%, 79px);\r\n    width: 34%;\r\n  }\r\n\r\n  .message-container {\r\n    width: clamp(425px, 80%, 500px);\r\n  }\r\n  .message {\r\n    font-size: 1.8rem;\r\n  }\r\n  .win-container {\r\n    height: 40%;\r\n    width: 65%;\r\n  }\r\n  .start-game {\r\n    font-size: 1.8rem;\r\n  }\r\n}\r\n@media (min-width: 769px) and (max-width: 1024px) {\r\n  .main-board {\r\n    flex-direction: row;\r\n    align-items: top;\r\n    width: 100%;\r\n    height: 60%;\r\n  }\r\n  .square {\r\n    width: clamp(50px, 5vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .square-choose {\r\n    width: clamp(50px, 5vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .message-container {\r\n    width: 40vw;\r\n    height: 13vw;\r\n  }\r\n  .message {\r\n    font-size: 2rem;\r\n  }\r\n  .main-div {\r\n    justify-content: space-around;\r\n  }\r\n  .computer-board {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 20%;\r\n    gap: 30px;\r\n  }\r\n  .del {\r\n    width: clamp(50px, 5vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .carrier {\r\n    width: clamp(200px, 20vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .battle-ship {\r\n    width: clamp(150px, 15vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .submarine {\r\n    width: clamp(100px, 10vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .cruiser {\r\n    width: clamp(100px, 10vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n  .destroyer {\r\n    width: clamp(50px, 5vw, 500px);\r\n    height: clamp(50px, 5vw, 500px);\r\n  }\r\n\r\n  .button-start {\r\n    height: clamp(50px, 80%, 80px);\r\n    width: 25%;\r\n  }\r\n  .button-start:active {\r\n    font-size: 1.1rem;\r\n    height: clamp(49px, 79%, 79px);\r\n    width: 24%;\r\n  }\r\n\r\n  .button-rotate {\r\n    height: clamp(50px, 80%, 80px);\r\n    width: 25%;\r\n  }\r\n\r\n  .button-rotate:active {\r\n    font-size: 1.1rem;\r\n    height: clamp(49px, 79%, 79px);\r\n    width: 24%;\r\n  }\r\n  .button-container-choose {\r\n    height: 75px;\r\n    width: 70%;\r\n  }\r\n  .win-container {\r\n    width: 65%;\r\n  }\r\n  .start-game {\r\n    width: clamp(400px, 20%, 600px);\r\n    font-size: 2rem;\r\n  }\r\n  #name {\r\n    width: 50%;\r\n    height: 80px;\r\n  }\r\n}\r\n@media (min-width: 1025px) {\r\n  .main-board {\r\n    flex-direction: row;\r\n    align-items: top;\r\n    width: 100%;\r\n    height: 60%;\r\n  }\r\n  .square {\r\n    width: clamp(50px, 5vw, 72px);\r\n    height: clamp(50px, 5vw, 72px);\r\n  }\r\n  .square-choose {\r\n    width: clamp(50px, 5vw, 72px);\r\n    height: clamp(50px, 5vw, 72px);\r\n  }\r\n  .message-container {\r\n    width: 40vw;\r\n    height: 13vw;\r\n  }\r\n  .message {\r\n    font-size: 2rem;\r\n  }\r\n  .main-div {\r\n    justify-content: space-around;\r\n  }\r\n  .computer-board {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 20%;\r\n    gap: 30px;\r\n  }\r\n  .del {\r\n    width: clamp(50px, 5vw, 72px);\r\n    height: clamp(50px, 5vw, 72px);\r\n  }\r\n  .carrier {\r\n    width: clamp(200px, 20vw, 288px);\r\n    height: clamp(50px, 5vw, 72px);\r\n  }\r\n  .battle-ship {\r\n    width: clamp(150px, 15vw, 216px);\r\n    height: clamp(50px, 5vw, 72px);\r\n  }\r\n  .submarine {\r\n    width: clamp(100px, 10vw, 144px);\r\n    height: clamp(50px, 5vw, 72px);\r\n  }\r\n  .cruiser {\r\n    width: clamp(100px, 10vw, 144px);\r\n    height: clamp(50px, 5vw, 72px);\r\n  }\r\n  .destroyer {\r\n    width: clamp(50px, 5vw, 72px);\r\n    height: clamp(50px, 5vw, 72px);\r\n  }\r\n\r\n  .button-start {\r\n    height: clamp(70px, 80%, 80px);\r\n    width: clamp(100px, 24%, 240px);\r\n    font-size: 1.7rem;\r\n  }\r\n  .button-start:active {\r\n    font-size: 1.6rem;\r\n    height: clamp(49px, 79%, 79px);\r\n    width: clamp(99px, 23%, 239px);\r\n  }\r\n\r\n  .button-rotate {\r\n    height: clamp(50px, 80%, 80px);\r\n    width: clamp(100px, 24%, 240px);\r\n    font-size: 1.7rem;\r\n  }\r\n\r\n  .button-rotate:active {\r\n    font-size: 1.6rem;\r\n    height: clamp(49px, 79%, 79px);\r\n    width: clamp(99px, 23%, 239px);\r\n  }\r\n  .button-container-choose {\r\n    height: 110px;\r\n    width: 50%;\r\n  }\r\n  .win-container {\r\n    width: 45%;\r\n    max-width: 850px;\r\n  }\r\n  .logo {\r\n    font-size: 9rem;\r\n  }\r\n  #name {\r\n    width: 40%;\r\n    height: 100px;\r\n  }\r\n  .start-game {\r\n    width: clamp(400px, 20%, 600px);\r\n    font-size: 2rem;\r\n  }\r\n  .start-game:active {\r\n    width: clamp(399px, 19%, 599px);\r\n    font-size: 1.9rem;\r\n  }\r\n  .enter-name-container {\r\n    height: 20vh;\r\n  }\r\n  .label {\r\n    font-size: 2.3rem;\r\n  }\r\n  .welcome {\r\n    font-size: 4rem;\r\n  }\r\n  .ship-container {\r\n    flex-direction: row;\r\n    height: 20%;\r\n  }\r\n  .button-play-again {\r\n    width: clamp(300px, 50%, 500px);\r\n    height: clamp(75px, 16%, 150px);\r\n    font-size: 2rem;\r\n  }\r\n  .button-play-again:active {\r\n    width: clamp(299px, 49%, 499px);\r\n    height: clamp(74px, 15%, 149px);\r\n    font-size: 1.9rem;\r\n  }\r\n  .winMessage {\r\n    font-size: 3.5rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  const MessageContainer = document.querySelector('.message');
  popUp.remove();
  overlay.remove();
  winContainer.remove();
  while (playerBoard.firstChild) {
    playerBoard.removeChild(playerBoard.firstChild);
  }
  while (opponentBoard.firstChild) {
    opponentBoard.removeChild(opponentBoard.firstChild);
  }
  MessageContainer.textContent = '';
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
  const mainScreen = document.querySelector('.main-div');

  logo.style.backgroundImage = `url(${_photos_seamless_metal_jpg__WEBPACK_IMPORTED_MODULE_4__})`;
  logo.style.webkitBackgroundClip = 'text';
  logo.style.backgroundClip = 'text';
  mainScreen.style.display = 'none';
}
function startingTheGame() {
  const gameForm = document.querySelector('.start-game');
  gameForm.addEventListener('click', (event) => {
    event.preventDefault();
    const mainScreen = document.querySelector('.main-div');

    const inputElement = document.getElementById('name');
    const label = document.querySelector('.label');
    if (inputElement.value.trim() === '') {
      inputElement.style.borderColor = '#c1121f';
      label.textContent = 'please enter a real Name';
    } else {
      const inputValue = inputElement.value;
      mainScreen.style.display = 'flex';
      (0,_related_chooseVS__WEBPACK_IMPORTED_MODULE_1__.createPlayerChoice)(inputValue);
    }
  });
}

homepage();
startingTheGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlJQUF5SSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sNkNBQTZDLHdGQUF3RixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9DQUFvQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNsaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsc0JBQXNCLHNCQUFzQixXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLHFCQUFxQixPQUFPLE1BQU0scUJBQXFCLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QztBQUNBLE1BQU07QUFDTix3Q0FBd0MsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVM7QUFDakI7QUFDQSxNQUFNO0FBQ04sd0NBQXdDLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ3JVRjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBYTtBQUNmLEVBQUUsb0RBQVk7QUFDZCw4QkFBOEIsTUFBTTtBQUNwQztBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWd0I7QUFDeEM7QUFDQTtBQUNBLGdCQUFnQixxREFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQzJDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBa0I7QUFDcEI7QUFDQTtBQUNxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDNEI7QUFDbEI7QUFDVztBQUNEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtREFBVSxDQUFDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx1REFBSyxDQUFDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSxxRUFBa0I7QUFDeEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3JlbGF0ZWQvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9jaG9vc2VWUy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9yZWxhdGVkL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9yZWxhdGVkL2xvZ2ljR2FtZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9yZWxhdGVkL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsYXRlZC9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3JlbGF0ZWQvd2luVnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsZmErU2xhYitPbmUmZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PU9yYml0cm9uOndnaHRANDAwLi45MDAmZmFtaWx5PVBhY2lmaWNvJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG59XG5cbi5ob21lLXBhZ2Uge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBDb3ZlciBlbnN1cmVzIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIGVudGlyZSBkaXYgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZmEgU2xhYiBPbmVcIiwgc2VyaWY7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLndlbGNvbWUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3JiaXRyb25cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmxvZ28ge1xuICBmb250LXNpemU6IDE2dnc7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lbnRlci1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1dmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmb250LWZhbWlseTogXCJPcmJpdHJvblwiLCBzYW5zLXNlcmlmO1xufVxuXG4jbmFtZSB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogXCJPcmJpdHJvblwiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4ubGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogNTUlO1xuICBoZWlnaHQ6IDc1JTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gNTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHdpZHRoOiA1NCU7XG4gIGhlaWdodDogNzQlO1xufVxuXG4uc3RhcnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zcXVhcmUge1xuICB3aWR0aDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5zcXVhcmUtY2hvb3NlIHtcbiAgd2lkdGg6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uaGVhZGxpbmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZmEgU2xhYiBPbmVcIiwgc2VyaWY7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBvcFVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk1MztcbiAgaGVpZ2h0OiA3MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDg1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnNoaXAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hvb3NlSGVhZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NTM7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBsYXllci1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm9wcG9uZW50LWJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1haW4tYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuXG4uaGVhZGxpbmUtZ2FtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2xhbXAoNjBweCwgMTB2aCwgNTAwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTQxZDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5idXR0b24tY29udGFpbmVyLWNob29zZSB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYnV0dG9uLXJvdGF0ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4YzA2O1xufVxuXG4uYnV0dG9uLXN0YXJ0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWFlNzM7XG59XG5cbi5idXR0b24tc3RhcnQ6YWN0aXZlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHdpZHRoOiAzNCU7XG4gIGhlaWdodDogOTklO1xufVxuXG4uYnV0dG9uLXJvdGF0ZTphY3RpdmUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgd2lkdGg6IDM0JTtcbiAgaGVpZ2h0OiA5OSU7XG59XG5cbi5jYXJyaWVyIHtcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCA0MHZ3LCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xufVxuXG4uYmF0dGxlLXNoaXAge1xuICB3aWR0aDogY2xhbXAoMTIwcHgsIDMwdncsIDUwMHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XG59XG5cbi5zdWJtYXJpbmUge1xuICB3aWR0aDogY2xhbXAoNjBweCwgMjB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbn1cblxuLmNydWlzZXIge1xuICB3aWR0aDogY2xhbXAoNjBweCwgMjB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbn1cblxuLmRlc3Ryb3llciB7XG4gIHdpZHRoOiBjbGFtcCgyMHB4LCAxMHZ3LCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xufVxuXG4uaG92ZXJlZC10aWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xufVxuXG4ucGxhY2VkLXNoaXAge1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmVuZW15LWhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XG59XG5cbi5kZWwge1xuICB3aWR0aDogY2xhbXAoMjBweCwgMTB2dywgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcbn1cblxuLmVuZW15LW1pc3NlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGJmZTM7XG59XG5cbi5lbmVteS1zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0OGMwNjtcbn1cblxuLm1lc3NhZ2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXItcm93IHtcbiAgei1pbmRleDogMTI7IC8qIEVuc3VyZSB0aWxlcyBhcmUgaW4gZnJvbnQgKi9cbn1cblxuLnBsYWNlZC1zaGlwLXBsYXllciB7XG4gIHotaW5kZXg6IDU7IC8qIEVuc3VyZSBzaGlwcyBhcmUgYmVoaW5kIHRpbGVzICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNvbCB7XG4gIHotaW5kZXg6IDExO1xufVxuXG4ud2luLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NTM7XG4gIGhlaWdodDogNDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgd2lkdGg6IDg1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG4ud2luTWVzc2FnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1wbGF5LWFnYWluIHtcbiAgd2lkdGg6IGNsYW1wKDE1NXB4LCA1MCUsIDMwMHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCg0NXB4LCAxMSUsIDcwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZiYzY4O1xufVxuXG4uYnV0dG9uLXBsYXktYWdhaW46YWN0aXZlIHtcbiAgd2lkdGg6IGNsYW1wKDE1M3B4LCA0OSUsIDI5OHB4KTtcbiAgaGVpZ2h0OiBjbGFtcCg0NHB4LCAxMCUsIDY5cHgpO1xufVxuXG4ub3Bwb25lbnQtbWFpbiB7XG4gIHotaW5kZXg6IDg7XG59XG5cbi5jb21wdXRlci1ib2FyZCB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDI1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucG9wVXAge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cbiAgLnNxdWFyZS1jaG9vc2Uge1xuICAgIHdpZHRoOiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xuICB9XG4gIC5zcXVhcmUge1xuICAgIHdpZHRoOiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xuICB9XG4gIC5kZWwge1xuICAgIHdpZHRoOiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xuICB9XG4gIC5jYXJyaWVyIHtcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDIwdncsIDUwMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xuICB9XG4gIC5iYXR0bGUtc2hpcCB7XG4gICAgd2lkdGg6IGNsYW1wKDE1MHB4LCAxNXZ3LCA1MDBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcbiAgfVxuICAuc3VibWFyaW5lIHtcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDEwdncsIDUwMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xuICB9XG4gIC5jcnVpc2VyIHtcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDEwdncsIDUwMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xuICB9XG4gIC5kZXN0cm95ZXIge1xuICAgIHdpZHRoOiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xuICB9XG4gIC5zaGlwLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxuICAuYnV0dG9uLWNvbnRhaW5lci1jaG9vc2Uge1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuICAuYnV0dG9uLXN0YXJ0IHtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDgwJSwgODBweCk7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxuICAuYnV0dG9uLXN0YXJ0OmFjdGl2ZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgaGVpZ2h0OiBjbGFtcCg0OXB4LCA3OSUsIDc5cHgpO1xuICAgIHdpZHRoOiAzNCU7XG4gIH1cbiAgLmJ1dHRvbi1yb3RhdGUge1xuICAgIGhlaWdodDogY2xhbXAoNTBweCwgODAlLCA4MHB4KTtcbiAgICB3aWR0aDogMzUlO1xuICB9XG4gIC5idXR0b24tcm90YXRlOmFjdGl2ZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgaGVpZ2h0OiBjbGFtcCg0OXB4LCA3OSUsIDc5cHgpO1xuICAgIHdpZHRoOiAzNCU7XG4gIH1cbiAgLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogY2xhbXAoNDI1cHgsIDgwJSwgNTAwcHgpO1xuICB9XG4gIC5tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxuICAud2luLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuICAuc3RhcnQtZ2FtZSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubWFpbi1ib2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogdG9wO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAlO1xuICB9XG4gIC5zcXVhcmUge1xuICAgIHdpZHRoOiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xuICB9XG4gIC5zcXVhcmUtY2hvb3NlIHtcbiAgICB3aWR0aDogY2xhbXAoNTBweCwgNXZ3LCA1MDBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcbiAgfVxuICAubWVzc2FnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA0MHZ3O1xuICAgIGhlaWdodDogMTN2dztcbiAgfVxuICAubWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5tYWluLWRpdiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLmNvbXB1dGVyLWJvYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDUwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMjAlO1xuICAgIGdhcDogMzBweDtcbiAgfVxuICAuZGVsIHtcbiAgICB3aWR0aDogY2xhbXAoNTBweCwgNXZ3LCA1MDBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcbiAgfVxuICAuY2FycmllciB7XG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCAyMHZ3LCA1MDBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcbiAgfVxuICAuYmF0dGxlLXNoaXAge1xuICAgIHdpZHRoOiBjbGFtcCgxNTBweCwgMTV2dywgNTAwcHgpO1xuICAgIGhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA1MDBweCk7XG4gIH1cbiAgLnN1Ym1hcmluZSB7XG4gICAgd2lkdGg6IGNsYW1wKDEwMHB4LCAxMHZ3LCA1MDBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcbiAgfVxuICAuY3J1aXNlciB7XG4gICAgd2lkdGg6IGNsYW1wKDEwMHB4LCAxMHZ3LCA1MDBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcbiAgfVxuICAuZGVzdHJveWVyIHtcbiAgICB3aWR0aDogY2xhbXAoNTBweCwgNXZ3LCA1MDBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcbiAgfVxuICAuYnV0dG9uLXN0YXJ0IHtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDgwJSwgODBweCk7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAuYnV0dG9uLXN0YXJ0OmFjdGl2ZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgaGVpZ2h0OiBjbGFtcCg0OXB4LCA3OSUsIDc5cHgpO1xuICAgIHdpZHRoOiAyNCU7XG4gIH1cbiAgLmJ1dHRvbi1yb3RhdGUge1xuICAgIGhlaWdodDogY2xhbXAoNTBweCwgODAlLCA4MHB4KTtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5idXR0b24tcm90YXRlOmFjdGl2ZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgaGVpZ2h0OiBjbGFtcCg0OXB4LCA3OSUsIDc5cHgpO1xuICAgIHdpZHRoOiAyNCU7XG4gIH1cbiAgLmJ1dHRvbi1jb250YWluZXItY2hvb3NlIHtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICAud2luLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuICAuc3RhcnQtZ2FtZSB7XG4gICAgd2lkdGg6IGNsYW1wKDQwMHB4LCAyMCUsIDYwMHB4KTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgI25hbWUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5tYWluLWJvYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiB0b3A7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MCU7XG4gIH1cbiAgLnNxdWFyZSB7XG4gICAgd2lkdGg6IGNsYW1wKDUwcHgsIDV2dywgNzJweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDcycHgpO1xuICB9XG4gIC5zcXVhcmUtY2hvb3NlIHtcbiAgICB3aWR0aDogY2xhbXAoNTBweCwgNXZ3LCA3MnB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNzJweCk7XG4gIH1cbiAgLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDB2dztcbiAgICBoZWlnaHQ6IDEzdnc7XG4gIH1cbiAgLm1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICAubWFpbi1kaXYge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG4gIC5jb21wdXRlci1ib2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICBnYXA6IDMwcHg7XG4gIH1cbiAgLmRlbCB7XG4gICAgd2lkdGg6IGNsYW1wKDUwcHgsIDV2dywgNzJweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDcycHgpO1xuICB9XG4gIC5jYXJyaWVyIHtcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDIwdncsIDI4OHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNzJweCk7XG4gIH1cbiAgLmJhdHRsZS1zaGlwIHtcbiAgICB3aWR0aDogY2xhbXAoMTUwcHgsIDE1dncsIDIxNnB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNzJweCk7XG4gIH1cbiAgLnN1Ym1hcmluZSB7XG4gICAgd2lkdGg6IGNsYW1wKDEwMHB4LCAxMHZ3LCAxNDRweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDcycHgpO1xuICB9XG4gIC5jcnVpc2VyIHtcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDEwdncsIDE0NHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNzJweCk7XG4gIH1cbiAgLmRlc3Ryb3llciB7XG4gICAgd2lkdGg6IGNsYW1wKDUwcHgsIDV2dywgNzJweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDcycHgpO1xuICB9XG4gIC5idXR0b24tc3RhcnQge1xuICAgIGhlaWdodDogY2xhbXAoNzBweCwgODAlLCA4MHB4KTtcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDI0JSwgMjQwcHgpO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICB9XG4gIC5idXR0b24tc3RhcnQ6YWN0aXZlIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBoZWlnaHQ6IGNsYW1wKDQ5cHgsIDc5JSwgNzlweCk7XG4gICAgd2lkdGg6IGNsYW1wKDk5cHgsIDIzJSwgMjM5cHgpO1xuICB9XG4gIC5idXR0b24tcm90YXRlIHtcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDgwJSwgODBweCk7XG4gICAgd2lkdGg6IGNsYW1wKDEwMHB4LCAyNCUsIDI0MHB4KTtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuYnV0dG9uLXJvdGF0ZTphY3RpdmUge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGhlaWdodDogY2xhbXAoNDlweCwgNzklLCA3OXB4KTtcbiAgICB3aWR0aDogY2xhbXAoOTlweCwgMjMlLCAyMzlweCk7XG4gIH1cbiAgLmJ1dHRvbi1jb250YWluZXItY2hvb3NlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLndpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWF4LXdpZHRoOiA4NTBweDtcbiAgfVxuICAubG9nbyB7XG4gICAgZm9udC1zaXplOiA5cmVtO1xuICB9XG4gICNuYW1lIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgLnN0YXJ0LWdhbWUge1xuICAgIHdpZHRoOiBjbGFtcCg0MDBweCwgMjAlLCA2MDBweCk7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5zdGFydC1nYW1lOmFjdGl2ZSB7XG4gICAgd2lkdGg6IGNsYW1wKDM5OXB4LCAxOSUsIDU5OXB4KTtcbiAgICBmb250LXNpemU6IDEuOXJlbTtcbiAgfVxuICAuZW50ZXItbmFtZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMjB2aDtcbiAgfVxuICAubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xuICB9XG4gIC53ZWxjb21lIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbiAgLnNoaXAtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogMjAlO1xuICB9XG4gIC5idXR0b24tcGxheS1hZ2FpbiB7XG4gICAgd2lkdGg6IGNsYW1wKDMwMHB4LCA1MCUsIDUwMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDc1cHgsIDE2JSwgMTUwcHgpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICAuYnV0dG9uLXBsYXktYWdhaW46YWN0aXZlIHtcbiAgICB3aWR0aDogY2xhbXAoMjk5cHgsIDQ5JSwgNDk5cHgpO1xuICAgIGhlaWdodDogY2xhbXAoNzRweCwgMTUlLCAxNDlweCk7XG4gICAgZm9udC1zaXplOiAxLjlyZW07XG4gIH1cbiAgLndpbk1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUEsRUFBQSxrREFBQTtFQUNBLDJCQUFBLEVBQUEsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxtQ0FBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0FBTUY7O0FBSkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFB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RUFuQ0E7SUFDRSxpQkFBQTtJQUNBLDhCQUFBO0lBQ0EsOEJBQUE7RUFxQ0Y7RUFuQ0E7SUFDRSxhQUFBO0lBQ0EsVUFBQTtFQXFDRjtFQW5DQTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQXFDRjtFQW5DQTtJQUNFLGVBQUE7RUFxQ0Y7RUFuQ0E7SUFDRSxVQUFBO0lBQ0EsYUFBQTtFQXFDRjtFQW5DQTtJQUNFLCtCQUFBO0lBQ0EsZUFBQTtFQXFDRjtFQW5DQTtJQUNFLCtCQUFBO0lBQ0EsaUJBQUE7RUFxQ0Y7RUFuQ0E7SUFDRSxZQUFBO0VBcUNGO0VBbkNBO0lBQ0UsaUJBQUE7RUFxQ0Y7RUFuQ0E7SUFDRSxlQUFBO0VBcUNGO0VBbkNBO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0VBcUNGO0VBbkNBO0lBQ0UsK0JBQUE7SUFDQSwrQkFBQTtJQUNBLGVBQUE7RUFxQ0Y7RUFuQ0E7SUFDRSwrQkFBQTtJQUNBLCtCQUFBO0lBQ0EsaUJBQUE7RUFxQ0Y7RUFuQ0E7SUFDRSxpQkFBQTtFQXFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsZmErU2xhYitPbmUmZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PU9yYml0cm9uOndnaHRANDAwLi45MDAmZmFtaWx5PVBhY2lmaWNvJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5ob21lLXBhZ2Uge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIENvdmVyIGVuc3VyZXMgdGhlIGltYWdlIGNvdmVycyB0aGUgZW50aXJlIGRpdiAqL1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlICovXFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQWxmYSBTbGFiIE9uZScsIHNlcmlmO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi53ZWxjb21lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcmJpdHJvbicsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZ2dztcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4uZW50ZXItbmFtZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTV2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3JiaXRyb24nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4jbmFtZSB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcmJpdHJvbicsIHNhbnMtc2VyaWY7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG59XFxyXFxuLmxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogNTUlO1xcclxcbiAgaGVpZ2h0OiA3NSU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gNTBtcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuLmJ1dHRvbjphY3RpdmUge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB3aWR0aDogNTQlO1xcclxcbiAgaGVpZ2h0OiA3NCU7XFxyXFxufVxcclxcbi5zdGFydC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc3F1YXJlIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4uc3F1YXJlLWNob29zZSB7XFxyXFxuICB3aWR0aDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbn1cXHJcXG4uaGVhZGxpbmUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdBbGZhIFNsYWIgT25lJywgc2VyaWY7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnBvcFVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk1MztcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uY2hvb3NlSGVhZCB7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5tYWluLWRpdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTUzO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ucGxheWVyLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB6LWluZGV4OiA2O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ub3Bwb25lbnQtYm9hcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLm1haW4tYm9hcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGhlaWdodDogODB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRsaW5lLWdhbWUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG4ubWVzc2FnZS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDYwcHgsIDEwdmgsIDUwMHB4KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTQxZDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuLm92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgei1pbmRleDogOTtcXHJcXG59XFxyXFxuLmJ1dHRvbi1jb250YWluZXItY2hvb3NlIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG4uYnV0dG9uLXJvdGF0ZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMzUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0OGMwNjtcXHJcXG59XFxyXFxuLmJ1dHRvbi1zdGFydCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMzUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYWU3MztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1zdGFydDphY3RpdmUge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB3aWR0aDogMzQlO1xcclxcbiAgaGVpZ2h0OiA5OSU7XFxyXFxufVxcclxcbi5idXR0b24tcm90YXRlOmFjdGl2ZSB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIHdpZHRoOiAzNCU7XFxyXFxuICBoZWlnaHQ6IDk5JTtcXHJcXG59XFxyXFxuLmNhcnJpZXIge1xcclxcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCA0MHZ3LCA1MDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG59XFxyXFxuLmJhdHRsZS1zaGlwIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgxMjBweCwgMzB2dywgNTAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxufVxcclxcbi5zdWJtYXJpbmUge1xcclxcbiAgd2lkdGg6IGNsYW1wKDYwcHgsIDIwdncsIDUwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbn1cXHJcXG4uY3J1aXNlciB7XFxyXFxuICB3aWR0aDogY2xhbXAoNjBweCwgMjB2dywgNTAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxufVxcclxcbi5kZXN0cm95ZXIge1xcclxcbiAgd2lkdGg6IGNsYW1wKDIwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbn1cXHJcXG4uaG92ZXJlZC10aWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuLnBsYWNlZC1zaGlwIHtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG4uZW5lbXktaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XFxyXFxufVxcclxcbi5kZWwge1xcclxcbiAgd2lkdGg6IGNsYW1wKDIwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgMTB2dywgNTAwcHgpO1xcclxcbn1cXHJcXG4uZW5lbXktbWlzc2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGJmZTM7XFxyXFxufVxcclxcbi5lbmVteS1zdW5rIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDhjMDY7XFxyXFxufVxcclxcbi5tZXNzYWdlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucGxheWVyLXJvdyB7XFxyXFxuICB6LWluZGV4OiAxMjsgLyogRW5zdXJlIHRpbGVzIGFyZSBpbiBmcm9udCAqL1xcclxcbn1cXHJcXG4ucGxhY2VkLXNoaXAtcGxheWVyIHtcXHJcXG4gIHotaW5kZXg6IDU7IC8qIEVuc3VyZSBzaGlwcyBhcmUgYmVoaW5kIHRpbGVzICovXFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5jb2wge1xcclxcbiAgei1pbmRleDogMTE7XFxyXFxufVxcclxcbi53aW4tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk1MztcXHJcXG4gIGhlaWdodDogNDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcbi53aW5NZXNzYWdlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5idXR0b24tcGxheS1hZ2FpbiB7XFxyXFxuICB3aWR0aDogY2xhbXAoMTU1cHgsIDUwJSwgMzAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCg0NXB4LCAxMSUsIDcwcHgpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2YmM2ODtcXHJcXG59XFxyXFxuLmJ1dHRvbi1wbGF5LWFnYWluOmFjdGl2ZSB7XFxyXFxuICB3aWR0aDogY2xhbXAoMTUzcHgsIDQ5JSwgMjk4cHgpO1xcclxcbiAgaGVpZ2h0OiBjbGFtcCg0NHB4LCAxMCUsIDY5cHgpO1xcclxcbn1cXHJcXG4ub3Bwb25lbnQtbWFpbiB7XFxyXFxuICB6LWluZGV4OiA4O1xcclxcbn1cXHJcXG4uY29tcHV0ZXItYm9hcmQge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDI1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnBvcFVwIHtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIH1cXHJcXG4gIC5zcXVhcmUtY2hvb3NlIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xcclxcbiAgfVxcclxcbiAgLnNxdWFyZSB7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcXHJcXG4gIH1cXHJcXG4gIC5kZWwge1xcclxcbiAgICB3aWR0aDogY2xhbXAoNTBweCwgNXZ3LCA1MDBweCk7XFxyXFxuICAgIGhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA1MDBweCk7XFxyXFxuICB9XFxyXFxuICAuY2FycmllciB7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgMjB2dywgNTAwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xcclxcbiAgfVxcclxcbiAgLmJhdHRsZS1zaGlwIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDE1MHB4LCAxNXZ3LCA1MDBweCk7XFxyXFxuICAgIGhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA1MDBweCk7XFxyXFxuICB9XFxyXFxuICAuc3VibWFyaW5lIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDEwMHB4LCAxMHZ3LCA1MDBweCk7XFxyXFxuICAgIGhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA1MDBweCk7XFxyXFxuICB9XFxyXFxuICAuY3J1aXNlciB7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCgxMDBweCwgMTB2dywgNTAwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xcclxcbiAgfVxcclxcbiAgLmRlc3Ryb3llciB7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcXHJcXG4gIH1cXHJcXG4gIC5zaGlwLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnV0dG9uLWNvbnRhaW5lci1jaG9vc2Uge1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICB9XFxyXFxuICAuYnV0dG9uLXN0YXJ0IHtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA4MCUsIDgwcHgpO1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgfVxcclxcbiAgLmJ1dHRvbi1zdGFydDphY3RpdmUge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg0OXB4LCA3OSUsIDc5cHgpO1xcclxcbiAgICB3aWR0aDogMzQlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ1dHRvbi1yb3RhdGUge1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDgwJSwgODBweCk7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnV0dG9uLXJvdGF0ZTphY3RpdmUge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg0OXB4LCA3OSUsIDc5cHgpO1xcclxcbiAgICB3aWR0aDogMzQlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lc3NhZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDQyNXB4LCA4MCUsIDUwMHB4KTtcXHJcXG4gIH1cXHJcXG4gIC5tZXNzYWdlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICB9XFxyXFxuICAud2luLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogNDAlO1xcclxcbiAgICB3aWR0aDogNjUlO1xcclxcbiAgfVxcclxcbiAgLnN0YXJ0LWdhbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAubWFpbi1ib2FyZCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDYwJTtcXHJcXG4gIH1cXHJcXG4gIC5zcXVhcmUge1xcclxcbiAgICB3aWR0aDogY2xhbXAoNTBweCwgNXZ3LCA1MDBweCk7XFxyXFxuICAgIGhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA1MDBweCk7XFxyXFxuICB9XFxyXFxuICAuc3F1YXJlLWNob29zZSB7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcXHJcXG4gIH1cXHJcXG4gIC5tZXNzYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA0MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEzdnc7XFxyXFxuICB9XFxyXFxuICAubWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIC5tYWluLWRpdiB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgfVxcclxcbiAgLmNvbXB1dGVyLWJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICB9XFxyXFxuICAuZGVsIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xcclxcbiAgfVxcclxcbiAgLmNhcnJpZXIge1xcclxcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDIwdncsIDUwMHB4KTtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcXHJcXG4gIH1cXHJcXG4gIC5iYXR0bGUtc2hpcCB7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCgxNTBweCwgMTV2dywgNTAwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xcclxcbiAgfVxcclxcbiAgLnN1Ym1hcmluZSB7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCgxMDBweCwgMTB2dywgNTAwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNTAwcHgpO1xcclxcbiAgfVxcclxcbiAgLmNydWlzZXIge1xcclxcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDEwdncsIDUwMHB4KTtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDUwMHB4KTtcXHJcXG4gIH1cXHJcXG4gIC5kZXN0cm95ZXIge1xcclxcbiAgICB3aWR0aDogY2xhbXAoNTBweCwgNXZ3LCA1MDBweCk7XFxyXFxuICAgIGhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA1MDBweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnV0dG9uLXN0YXJ0IHtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA4MCUsIDgwcHgpO1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgfVxcclxcbiAgLmJ1dHRvbi1zdGFydDphY3RpdmUge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg0OXB4LCA3OSUsIDc5cHgpO1xcclxcbiAgICB3aWR0aDogMjQlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ1dHRvbi1yb3RhdGUge1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDgwJSwgODBweCk7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnV0dG9uLXJvdGF0ZTphY3RpdmUge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg0OXB4LCA3OSUsIDc5cHgpO1xcclxcbiAgICB3aWR0aDogMjQlO1xcclxcbiAgfVxcclxcbiAgLmJ1dHRvbi1jb250YWluZXItY2hvb3NlIHtcXHJcXG4gICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgfVxcclxcbiAgLndpbi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNjUlO1xcclxcbiAgfVxcclxcbiAgLnN0YXJ0LWdhbWUge1xcclxcbiAgICB3aWR0aDogY2xhbXAoNDAwcHgsIDIwJSwgNjAwcHgpO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuICAjbmFtZSB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xcclxcbiAgLm1haW4tYm9hcmQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogdG9wO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA2MCU7XFxyXFxuICB9XFxyXFxuICAuc3F1YXJlIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDUwcHgsIDV2dywgNzJweCk7XFxyXFxuICAgIGhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA3MnB4KTtcXHJcXG4gIH1cXHJcXG4gIC5zcXVhcmUtY2hvb3NlIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDUwcHgsIDV2dywgNzJweCk7XFxyXFxuICAgIGhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA3MnB4KTtcXHJcXG4gIH1cXHJcXG4gIC5tZXNzYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA0MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEzdnc7XFxyXFxuICB9XFxyXFxuICAubWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIC5tYWluLWRpdiB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgfVxcclxcbiAgLmNvbXB1dGVyLWJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICB9XFxyXFxuICAuZGVsIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDUwcHgsIDV2dywgNzJweCk7XFxyXFxuICAgIGhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA3MnB4KTtcXHJcXG4gIH1cXHJcXG4gIC5jYXJyaWVyIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCAyMHZ3LCAyODhweCk7XFxyXFxuICAgIGhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA3MnB4KTtcXHJcXG4gIH1cXHJcXG4gIC5iYXR0bGUtc2hpcCB7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCgxNTBweCwgMTV2dywgMjE2cHgpO1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDV2dywgNzJweCk7XFxyXFxuICB9XFxyXFxuICAuc3VibWFyaW5lIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDEwMHB4LCAxMHZ3LCAxNDRweCk7XFxyXFxuICAgIGhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA3MnB4KTtcXHJcXG4gIH1cXHJcXG4gIC5jcnVpc2VyIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDEwMHB4LCAxMHZ3LCAxNDRweCk7XFxyXFxuICAgIGhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA3MnB4KTtcXHJcXG4gIH1cXHJcXG4gIC5kZXN0cm95ZXIge1xcclxcbiAgICB3aWR0aDogY2xhbXAoNTBweCwgNXZ3LCA3MnB4KTtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dncsIDcycHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ1dHRvbi1zdGFydCB7XFxyXFxuICAgIGhlaWdodDogY2xhbXAoNzBweCwgODAlLCA4MHB4KTtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDEwMHB4LCAyNCUsIDI0MHB4KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICB9XFxyXFxuICAuYnV0dG9uLXN0YXJ0OmFjdGl2ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDQ5cHgsIDc5JSwgNzlweCk7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg5OXB4LCAyMyUsIDIzOXB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b24tcm90YXRlIHtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA4MCUsIDgwcHgpO1xcclxcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDI0JSwgMjQwcHgpO1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b24tcm90YXRlOmFjdGl2ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDQ5cHgsIDc5JSwgNzlweCk7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg5OXB4LCAyMyUsIDIzOXB4KTtcXHJcXG4gIH1cXHJcXG4gIC5idXR0b24tY29udGFpbmVyLWNob29zZSB7XFxyXFxuICAgIGhlaWdodDogMTEwcHg7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICB9XFxyXFxuICAud2luLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA0NSU7XFxyXFxuICAgIG1heC13aWR0aDogODUwcHg7XFxyXFxuICB9XFxyXFxuICAubG9nbyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOXJlbTtcXHJcXG4gIH1cXHJcXG4gICNuYW1lIHtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIH1cXHJcXG4gIC5zdGFydC1nYW1lIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDQwMHB4LCAyMCUsIDYwMHB4KTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcbiAgLnN0YXJ0LWdhbWU6YWN0aXZlIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDM5OXB4LCAxOSUsIDU5OXB4KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxyXFxuICB9XFxyXFxuICAuZW50ZXItbmFtZS1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDIwdmg7XFxyXFxuICB9XFxyXFxuICAubGFiZWwge1xcclxcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXHJcXG4gIH1cXHJcXG4gIC53ZWxjb21lIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgfVxcclxcbiAgLnNoaXAtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgaGVpZ2h0OiAyMCU7XFxyXFxuICB9XFxyXFxuICAuYnV0dG9uLXBsYXktYWdhaW4ge1xcclxcbiAgICB3aWR0aDogY2xhbXAoMzAwcHgsIDUwJSwgNTAwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDc1cHgsIDE2JSwgMTUwcHgpO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuICAuYnV0dG9uLXBsYXktYWdhaW46YWN0aXZlIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDI5OXB4LCA0OSUsIDQ5OXB4KTtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCg3NHB4LCAxNSUsIDE0OXB4KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxyXFxuICB9XFxyXFxuICAud2luTWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjYWxjdWxhdGVOdW1iZXIgfSBmcm9tICcuL2xvZ2ljR2FtZSc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCb2FyZFZzKGNvbnRhaW5lcikge1xyXG4gIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDg7IGNvbCsrKSB7XHJcbiAgICBjb25zdCBjb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbERpdi5jbGFzc0xpc3QuYWRkKCdjb2wnKTtcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDg7IHJvdysrKSB7XHJcbiAgICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICByb3dEaXYuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcbiAgICAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItcm93Jyk7XHJcblxyXG4gICAgICByb3dEaXYuZGF0YXNldC5yb3dOdW0gPSByb3c7XHJcbiAgICAgIHJvd0Rpdi5kYXRhc2V0LnJvd0NvbCA9IGNvbDtcclxuICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHJvd0Rpdik7XHJcbiAgICB9XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sRGl2KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkQ2hvb3NlVnMoY29udGFpbmVyKSB7XHJcbiAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcclxuICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29sRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbCcpO1xyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgODsgcm93KyspIHtcclxuICAgICAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUtY2hvb3NlJyk7XHJcbiAgICAgIHJvd0Rpdi5kYXRhc2V0LnJvd051bSA9IHJvdztcclxuICAgICAgcm93RGl2LmRhdGFzZXQucm93Q29sID0gY29sO1xyXG4gICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQocm93RGl2KTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW5lbXlCb2FyZFZzKGNvbnRhaW5lcikge1xyXG4gIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDg7IGNvbCsrKSB7XHJcbiAgICBjb25zdCBjb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbERpdi5jbGFzc0xpc3QuYWRkKCdjb2wnKTtcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDg7IHJvdysrKSB7XHJcbiAgICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICByb3dEaXYuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcbiAgICAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdlbmVteS1yb3cnKTtcclxuICAgICAgcm93RGl2LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgcm93RGl2LmRhdGFzZXQucm93TnVtID0gcm93O1xyXG4gICAgICByb3dEaXYuZGF0YXNldC5jb2xOdW0gPSBjb2w7XHJcbiAgICAgIGNvbERpdi5hcHBlbmRDaGlsZChyb3dEaXYpO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQbGF5ZXJCb2FyZFZzKHNoaXBFbGVtZW50LCB0aWxlLCBpc1JvdGF0ZWQpIHtcclxuICBjb25zdCBhbGxUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItcm93Jyk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xyXG4gIGNvbnN0IHJvdyA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dOdW0sIDEwKTtcclxuICBjb25zdCBjb2wgPSBwYXJzZUludCh0aWxlLmRhdGFzZXQucm93Q29sLCAxMCk7XHJcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcclxuICBjb29yZGluYXRlcy5wdXNoKHJvdywgY29sKTtcclxuICBjb25zdCBudW0gPSBjYWxjdWxhdGVOdW1iZXIoY29vcmRpbmF0ZXMpO1xyXG4gIGNvbnN0IGN1cnJlbnRUaWxlID0gYWxsVGlsZXNbbnVtXTtcclxuXHJcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcCcpO1xyXG4gIGlmICghc2hpcENvbnRhaW5lciB8fCAhc2hpcEVsZW1lbnQgfHwgIXRpbGUpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNoaXBJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBzaGlwSW1nLnNyYyA9IHNoaXBFbGVtZW50LnNyYztcclxuICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZC1zaGlwJyk7XHJcbiAgc2hpcEltZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgc2hpcEltZy5zdHlsZS56SW5kZXggPSAnNSc7XHJcblxyXG4gIGNvbnN0IHNoaXBUeXBlcyA9IFtcclxuICAgICdjYXJyaWVyJyxcclxuICAgICdiYXR0bGUtc2hpcCcsXHJcbiAgICAnc3VibWFyaW5lJyxcclxuICAgICdjcnVpc2VyJyxcclxuICAgICdkZXN0cm95ZXInLFxyXG4gIF07XHJcbiAgc2hpcFR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcclxuICAgIGlmIChzaGlwRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModHlwZSkpIHtcclxuICAgICAgc2hpcEltZy5jbGFzc0xpc3QuYWRkKHR5cGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0aWxlUmVjdCA9IGN1cnJlbnRUaWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGNvbnN0IGJvYXJkUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgY29uc3Qgb2Zmc2V0WCA9IHRpbGVSZWN0LmxlZnQgLSBib2FyZFJlY3QubGVmdDtcclxuICBjb25zdCBvZmZzZXRZID0gdGlsZVJlY3QudG9wIC0gYm9hcmRSZWN0LnRvcDtcclxuICBzaGlwSW1nLnN0eWxlLmxlZnQgPSBgJHtvZmZzZXRYfXB4YDtcclxuICBzaGlwSW1nLnN0eWxlLnRvcCA9IGAke29mZnNldFl9cHhgO1xyXG5cclxuICBpZiAoaXNSb3RhdGVkKSB7XHJcbiAgICBzaGlwSW1nLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcclxuICAgIHNoaXBJbWcuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ3RvcCBsZWZ0JztcclxuICAgIHNoaXBJbWcuc3R5bGUubGVmdCA9IGAke29mZnNldFggKyB0aWxlUmVjdC5oZWlnaHR9cHhgO1xyXG4gIH1cclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBJbWcpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZUJvYXJkVnMsXHJcbiAgZW5lbXlCb2FyZFZzLFxyXG4gIGNyZWF0ZUJvYXJkQ2hvb3NlVnMsXHJcbiAgdXBkYXRlUGxheWVyQm9hcmRWcyxcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVCb2FyZENob29zZVZzLFxyXG4gIHVwZGF0ZVBsYXllckJvYXJkVnMsXHJcbiAgY3JlYXRlQm9hcmRWcyxcclxufSBmcm9tICcuL2JvYXJkJztcclxuaW1wb3J0IHsgU2hpcCwgc2hpcFZTIH0gZnJvbSAnLi9zaGlwJztcclxuaW1wb3J0IGJhdHRsZVNoaXAgZnJvbSAnLi4vcGhvdG9zL2JhdHRsZVNoaXAyLnBuZyc7XHJcbmltcG9ydCBjYXJyaWVyIGZyb20gJy4uL3Bob3Rvcy9jYXJyaWVyLnBuZyc7XHJcbmltcG9ydCBjcnVpc2VyIGZyb20gJy4uL3Bob3Rvcy9jcnVpc2VyLnBuZyc7XHJcbmltcG9ydCBkZXN0cm95ZXIgZnJvbSAnLi4vcGhvdG9zL2Rlc3Ryb3llci5wbmcnO1xyXG5pbXBvcnQgc3VibWFyaW5lIGZyb20gJy4uL3Bob3Rvcy9zdWJtYXJpbmUucG5nJztcclxuaW1wb3J0IHsgY3JlYXRlUGxheWVyQ2hvaWNlTG9naWMgfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IFN0YXJ0aW5nR2FtZSB9IGZyb20gJy4vbG9naWNHYW1lJztcclxuXHJcbmZ1bmN0aW9uIGFkZENsaWNrZWRTaGlwKGNsaWNrZWRTaGlwKSB7XHJcbiAgY29uc3QgYWxsU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1jaG9vc2UnKTtcclxuICBhbGxTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcclxuICB9KTtcclxuICBjbGlja2VkU2hpcC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZTaGlwQ2xpY2tlZCgpIHtcclxuICBjb25zdCBhbGxTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWNob29zZScpO1xyXG4gIGxldCBhbnN3ZXJTaGlwO1xyXG4gIGxldCBhbnN3ZXIgPSBmYWxzZTtcclxuICBhbGxTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsaWNrZWQnKSkge1xyXG4gICAgICBhbnN3ZXIgPSB0cnVlO1xyXG4gICAgICBhbnN3ZXJTaGlwID0gc2hpcDtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoYW5zd2VyKSByZXR1cm4gYW5zd2VyU2hpcC5kYXRhc2V0LnNoaXBMZW5ndGg7XHJcbiAgZWxzZSByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0dXJuU2hpcCgpIHtcclxuICBjb25zdCBhbGxTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWNob29zZScpO1xyXG4gIGxldCBhbnN3ZXJTaGlwID0gbnVsbDtcclxuICBhbGxTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsaWNrZWQnKSkge1xyXG4gICAgICBhbnN3ZXJTaGlwID0gc2hpcDtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gYW5zd2VyU2hpcDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZlJvdGF0ZSgpIHtcclxuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXJvdGF0ZScpO1xyXG4gIGlmIChyb3RhdGVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUtb24nKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBwbGFjZVNoaXBJbWFnZShzaGlwRWxlbWVudCwgdGlsZSwgaXNSb3RhdGVkKSB7XHJcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcCcpO1xyXG4gIGlmICghc2hpcENvbnRhaW5lciB8fCAhc2hpcEVsZW1lbnQgfHwgIXRpbGUpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNoaXBJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBzaGlwSW1nLnNyYyA9IHNoaXBFbGVtZW50LnNyYztcclxuICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZC1zaGlwJyk7XHJcbiAgc2hpcEltZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgc2hpcEltZy5zdHlsZS56SW5kZXggPSAnNSc7XHJcblxyXG4gIGNvbnN0IHNoaXBUeXBlcyA9IFtcclxuICAgICdjYXJyaWVyJyxcclxuICAgICdiYXR0bGUtc2hpcCcsXHJcbiAgICAnc3VibWFyaW5lJyxcclxuICAgICdjcnVpc2VyJyxcclxuICAgICdkZXN0cm95ZXInLFxyXG4gIF07XHJcbiAgc2hpcFR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcclxuICAgIGlmIChzaGlwRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModHlwZSkpIHtcclxuICAgICAgc2hpcEltZy5jbGFzc0xpc3QuYWRkKHR5cGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0aWxlUmVjdCA9IHRpbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgY29uc3QgYm9hcmRSZWN0ID0gc2hpcENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgY29uc3Qgb2Zmc2V0WCA9IHRpbGVSZWN0LmxlZnQgLSBib2FyZFJlY3QubGVmdDtcclxuICBjb25zdCBvZmZzZXRZID0gdGlsZVJlY3QudG9wIC0gYm9hcmRSZWN0LnRvcDtcclxuXHJcbiAgc2hpcEltZy5zdHlsZS5sZWZ0ID0gYCR7b2Zmc2V0WH1weGA7XHJcbiAgc2hpcEltZy5zdHlsZS50b3AgPSBgJHtvZmZzZXRZfXB4YDtcclxuXHJcbiAgaWYgKGlzUm90YXRlZCkge1xyXG4gICAgc2hpcEltZy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XHJcbiAgICBzaGlwSW1nLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICd0b3AgbGVmdCc7XHJcbiAgICBzaGlwSW1nLnN0eWxlLmxlZnQgPSBgJHtvZmZzZXRYICsgdGlsZVJlY3QuaGVpZ2h0fXB4YDtcclxuICB9XHJcbiAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwSW1nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuWW91UGxhY2UoYm9hcmQsIGNvb3JkaW5hdGVzLCByb3RhdGUsIGRvZXNTaGlwKSB7XHJcbiAgY29uc3QgbnVtID0gcGFyc2VJbnQoZG9lc1NoaXAsIDEwKTtcclxuICBsZXQgYW5zd2VyID0gdHJ1ZTtcclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bTsgaW5kZXgrKykge1xyXG4gICAgY29uc3QgbmV3Q29vcmRpbmF0ZXMgPSByb3RhdGVcclxuICAgICAgPyBbY29vcmRpbmF0ZXNbMF0gKyBpbmRleCwgY29vcmRpbmF0ZXNbMV1dXHJcbiAgICAgIDogW2Nvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSArIGluZGV4XTtcclxuXHJcbiAgICBpZiAoYm9hcmQucmV0dXJuUGxhY2UobmV3Q29vcmRpbmF0ZXMpICE9PSBudWxsKSB7XHJcbiAgICAgIGFuc3dlciA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBhbnN3ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWNpbmdTaGlwKHRpbGUsIGJvYXJkKSB7XHJcbiAgY29uc3QgZG9lc1NoaXAgPSBjaGVja0lmU2hpcENsaWNrZWQoKTtcclxuICBjb25zdCBzaGlwQ2xpY2tlZCA9IHJldHVyblNoaXAoKTtcclxuICBsZXQgbnVtID0gcGFyc2VJbnQoZG9lc1NoaXAsIDEwKTtcclxuICBpZiAoZG9lc1NoaXAgIT09IG51bGwpIHtcclxuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dOdW0sIDEwKTtcclxuICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dDb2wsIDEwKTtcclxuICAgIGNvbnN0IHJvdGF0ZUFuc3dlciA9IGNoZWNrSWZSb3RhdGUoKTtcclxuXHJcbiAgICBpZiAoIXJvdGF0ZUFuc3dlcikge1xyXG4gICAgICBpZiAoY29sICsgbnVtID4gOCkge1xyXG4gICAgICAgIG51bS0tO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHJvdyArIG51bSA+IDgpIHtcclxuICAgICAgICBudW0tLTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XHJcbiAgICBjb29yZGluYXRlcy5wdXNoKHJvdywgY29sKTtcclxuICAgIGlmIChjYW5Zb3VQbGFjZShib2FyZCwgY29vcmRpbmF0ZXMsIHJvdGF0ZUFuc3dlciwgZG9lc1NoaXApKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGRvZXNTaGlwKTtcclxuICAgICAgYm9hcmQucGxhY2VTaGlwKGNvb3JkaW5hdGVzLCBzaGlwLCByb3RhdGVBbnN3ZXIpO1xyXG4gICAgICBwbGFjZVNoaXBJbWFnZShzaGlwQ2xpY2tlZCwgdGlsZSwgcm90YXRlQW5zd2VyKTsgLy8gUGxhY2Ugc2hpcCBpbWFnZSBiZWhpbmQgdGhlIHRpbGVzXHJcbiAgICAgIHVwZGF0ZVBsYXllckJvYXJkVnMoc2hpcENsaWNrZWQsIHRpbGUsIHJvdGF0ZUFuc3dlcik7XHJcbiAgICAgIHNoaXBDbGlja2VkLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjYWxjdWxhdGVOdW1iZXIoY29vcmRpbmF0ZXMpIHtcclxuICBjb25zdCBudW0gPSBjb29yZGluYXRlc1sxXSAqIDggKyBjb29yZGluYXRlc1swXTtcclxuICByZXR1cm4gbnVtO1xyXG59XHJcbmZ1bmN0aW9uIGNvbG9yVGlsZXMoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIGNvbG9yKSB7XHJcbiAgY29uc3QgY29sID0gY2hlY2tJZlJvdGF0ZSgpO1xyXG4gIGxldCBwbGFjZSA9IGNhbGN1bGF0ZU51bWJlcihjb29yZGluYXRlcyk7XHJcbiAgY29uc3QgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlLWNob29zZScpO1xyXG5cclxuICBpZiAoIWNvbCkge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNoaXBMZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKHBsYWNlID49IGFsbFRpbGVzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB0aWxlID0gYWxsVGlsZXNbcGxhY2VdO1xyXG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQtdGlsZScpO1xyXG4gICAgICB0aWxlLnN0eWxlLnNldFByb3BlcnR5KCctLWhvdmVyLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICBwbGFjZSArPSA4O1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcExlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoKHBsYWNlICUgOCkgKyAxID09PSA4KSB7XHJcbiAgICAgICAgY29uc3QgdGlsZSA9IGFsbFRpbGVzW3BsYWNlXTtcclxuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQtdGlsZScpO1xyXG4gICAgICAgIHRpbGUuc3R5bGUuc2V0UHJvcGVydHkoJy0taG92ZXItY29sb3InLCBjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRpbGUgPSBhbGxUaWxlc1twbGFjZV07XHJcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZC10aWxlJyk7XHJcbiAgICAgIHRpbGUuc3R5bGUuc2V0UHJvcGVydHkoJy0taG92ZXItY29sb3InLCBjb2xvcik7XHJcbiAgICAgIHBsYWNlKys7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDb2xvcih0aWxlKSB7XHJcbiAgY29uc3Qgc2hpcCA9IHJldHVyblNoaXAoKTtcclxuICBjb25zdCBzaGlwTGVuZ3RoID0gY2hlY2tJZlNoaXBDbGlja2VkKCk7XHJcbiAgaWYgKHNoaXAgIT09IG51bGwpIHtcclxuICAgIGNvbnN0IGNvbG9yID0gc2hpcC5kYXRhc2V0LnNoaXBDb2xvcjtcclxuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dOdW0sIDEwKTtcclxuICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dDb2wsIDEwKTtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XHJcbiAgICBjb29yZGluYXRlcy5wdXNoKHJvdywgY29sKTtcclxuICAgIGNvbG9yVGlsZXMoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIGNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNvbG9yKCkge1xyXG4gIGNvbnN0IGFsbFRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZS1jaG9vc2UnKTtcclxuICBhbGxUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcbiAgICBpZiAodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyZWQtdGlsZScpKSB7XHJcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZC10aWxlJyk7XHJcbiAgICAgIHRpbGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0taG92ZXItY29sb3InKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuWW91UGxheShib2FyZCwgbmFtZSkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xyXG4gIGlmIChkaXYuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSBTdGFydGluZ0dhbWUoYm9hcmQsIG5hbWUpO1xyXG4gIGVsc2UgcmV0dXJuO1xyXG59XHJcbi8vIGJ1ZyBuZWVkIHRvIGNoYW5nZSB0aGUgY2FuIHlvdSBwbGF5IHRvID09PSAwXHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudChhbGxUaWxlcywgYm9hcmQsIG5hbWUpIHtcclxuICBjb25zdCBhbGxTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWNob29zZScpO1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRDbGlja2VkU2hpcChzaGlwKSk7XHJcbiAgfSk7XHJcblxyXG4gIGFsbFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwbGFjaW5nU2hpcCh0aWxlLCBib2FyZCkpO1xyXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiBjaGFuZ2VDb2xvcih0aWxlKSk7XHJcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4gcmVtb3ZlQ29sb3IodGlsZSkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCByb3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXJvdGF0ZScpO1xyXG4gIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJvdGF0ZS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUtb24nKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXN0YXJ0Jyk7XHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjYW5Zb3VQbGF5KGJvYXJkLCBuYW1lKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGxheWVyQ2hvaWNlKG5hbWUpIHtcclxuICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXBhZ2UnKTtcclxuICBob21lUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGNvbnN0IGNob29zZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xyXG5cclxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcclxuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRsaW5lLXBsYXllcicpO1xyXG4gIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBib2FyZGA7XHJcbiAgY3JlYXRlQm9hcmRWcyhwbGF5ZXJCb2FyZCk7XHJcblxyXG4gIGNob29zZUNvbnRhaW5lci5zdHlsZS56SW5kZXggPSAnMTAnO1xyXG4gIGNob29zZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwb3BVcCcpO1xyXG4gIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XHJcbiAgYm9hcmRDb250YWluZXIuc3R5bGUuekluZGV4ID0gJzExJztcclxuICBoMi5jbGFzc0xpc3QuYWRkKCdjaG9vc2VIZWFkJyk7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XHJcbiAgc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlwLWNvbnRhaW5lcicpO1xyXG4gIHNoaXBDb250YWluZXIuc3R5bGUuekluZGV4ID0gJzEwJztcclxuICByb3RhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XHJcbiAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XHJcbiAgcm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1yb3RhdGUnKTtcclxuICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tc3RhcnQnKTtcclxuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lci1jaG9vc2UnKTtcclxuXHJcbiAgaDIudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBjaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBzaGlwYDtcclxuICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnUm90YXRlJztcclxuICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdGFydCc7XHJcblxyXG4gIHNoaXBWUyhjYXJyaWVyLCBiYXR0bGVTaGlwLCBzdWJtYXJpbmUsIGNydWlzZXIsIGRlc3Ryb3llciwgc2hpcENvbnRhaW5lcik7XHJcblxyXG4gIGNyZWF0ZUJvYXJkQ2hvb3NlVnMoYm9hcmRDb250YWluZXIpO1xyXG4gIGNvbnN0IGJvYXJkID0gY3JlYXRlUGxheWVyQ2hvaWNlTG9naWMobmFtZSk7XHJcblxyXG4gIGhlYWRsaW5lLmFwcGVuZENoaWxkKGgyKTtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQocm90YXRlQnV0dG9uKTtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xyXG5cclxuICBjaG9vc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG4gIGNob29zZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xyXG4gIGNob29zZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XHJcbiAgY2hvb3NlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDb250YWluZXIpO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY2hvb3NlQ29udGFpbmVyKTtcclxuICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUtY2hvb3NlJyk7XHJcblxyXG4gIGFkZEV2ZW50KHRpbGVzLCBib2FyZCwgbmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVBsYXllckNob2ljZSB9O1xyXG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1hdHJpeChyb3dzLCBjb2xzKSB7XHJcbiAgY29uc3QgbWF0cml4ID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspIHtcclxuICAgICAgcm93LnB1c2gobnVsbCk7IC8vIFlvdSBjYW4gaW5pdGlhbGl6ZSB0aGUgbWF0cml4IHdpdGggYW55IHZhbHVlLCBoZXJlIHdlIHVzZSAwXHJcbiAgICB9XHJcbiAgICBtYXRyaXgucHVzaChyb3cpO1xyXG4gIH1cclxuICByZXR1cm4gbWF0cml4O1xyXG59XHJcbmZ1bmN0aW9uIGdldFJhbmRvbU51bWJlckJldHdlZW4wQW5kNygpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XHJcbn1cclxuZnVuY3Rpb24gdHJ1ZU9yRmFsc2UoKSB7XHJcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPj0gMC41O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZTY0KCkge1xyXG4gIGNvbnN0IGFycmF5ID0gW107XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDY0OyBpbmRleCsrKSB7XHJcbiAgICBhcnJheS5wdXNoKGluZGV4KTtcclxuICB9XHJcbiAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lQm9hcmQoKSB7XHJcbiAgbGV0IHBsYXllckhlYWx0aCA9IDU7XHJcbiAgbGV0IGVuZW15SGVhbHRoID0gNTtcclxuICBsZXQgaXNTaGlwQnVpbHQgPSBmYWxzZTtcclxuICBsZXQgcGxheWVyTmFtZTtcclxuICBjb25zdCBhbGxTaGlwcyA9IFtdO1xyXG4gIGNvbnN0IHNoaXA0ID0gU2hpcCg0KTtcclxuICBjb25zdCBzaGlwMyA9IFNoaXAoMyk7XHJcbiAgY29uc3Qgc2hpcDJBbHNvID0gU2hpcCgyKTtcclxuICBjb25zdCBzaGlwMiA9IFNoaXAoMik7XHJcbiAgY29uc3Qgc2hpcDEgPSBTaGlwKDEpO1xyXG4gIGNvbnN0IGxpc3QgPSBjcmVhdGU2NCgpO1xyXG4gIGxldCBwb3NpdGlvbjtcclxuICBhbGxTaGlwcy5wdXNoKHNoaXA0LCBzaGlwMywgc2hpcDJBbHNvLCBzaGlwMiwgc2hpcDEpO1xyXG4gIGNvbnN0IGJvYXJkID0gY3JlYXRlTWF0cml4KDgsIDgpO1xyXG4gIGNvbnN0IGVuZW15Qm9hcmQgPSBjcmVhdGVNYXRyaXgoOCwgOCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNhdmVQbGF5ZXJOYW1lKG5hbWUpIHtcclxuICAgICAgcGxheWVyTmFtZSA9IG5hbWU7XHJcbiAgICB9LFxyXG4gICAgcmV0dXJuTmFtZSgpIHtcclxuICAgICAgcmV0dXJuIHBsYXllck5hbWU7XHJcbiAgICB9LFxyXG4gICAgcGxhY2VTaGlwKGNvb3JkaW5hdGVzLCBzaGlwLCBjb2wpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoU2hpcCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoU2hpcDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmICghY29sKSB7XHJcbiAgICAgICAgICBib2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV0gKyBpbmRleF0gPSBzaGlwO1xyXG4gICAgICAgIH0gZWxzZSBib2FyZFtjb29yZGluYXRlc1swXSArIGluZGV4XVtjb29yZGluYXRlc1sxXV0gPSBzaGlwO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2F2ZVBvc2l0aW9uKGNvb3JkaW5hdGVzKSB7XHJcbiAgICAgIHBvc2l0aW9uID0gY29vcmRpbmF0ZXM7XHJcbiAgICB9LFxyXG4gICAgcmV0dXJuUG9zaXRpb24oKSB7XHJcbiAgICAgIGxldCBjb29yZGluYXRlcyA9IHBvc2l0aW9uLm1hcCgoZWxlbWVudCkgPT4gcGFyc2VJbnQoZWxlbWVudCwgMTApKTtcclxuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xyXG4gICAgfSxcclxuICAgIHBsYWNlRW5lbXlTaGlwKGNvb3JkaW5hdGVzLCBzaGlwLCBjb2wpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoU2hpcCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGhTaGlwOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcclxuICAgICAgICBpZiAoIWNvbCkge1xyXG4gICAgICAgICAgZW5lbXlCb2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV0gKyBpbmRleF0gPSBzaGlwO1xyXG4gICAgICAgICAgYXJyYXkucHVzaChjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0gKyBpbmRleCk7XHJcbiAgICAgICAgICBzaGlwLmVudGVyUG9zaXRpb24oYXJyYXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbmVteUJvYXJkW2Nvb3JkaW5hdGVzWzBdICsgaW5kZXhdW2Nvb3JkaW5hdGVzWzFdXSA9IHNoaXA7XHJcbiAgICAgICAgICBhcnJheS5wdXNoKGNvb3JkaW5hdGVzWzBdICsgaW5kZXgsIGNvb3JkaW5hdGVzWzFdKTtcclxuICAgICAgICAgIHNoaXAuZW50ZXJQb3NpdGlvbihhcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgQXR0YWNrKGNvb3JkaW5hdGVzLCB0aWxlKSB7XHJcbiAgICAgIGNvbnN0IHBsYWNlID0gZW5lbXlCb2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dO1xyXG4gICAgICBpZiAodGlsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGVuZW15Qm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9IDA7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGxhY2UuaGl0KCk7XHJcbiAgICAgICAgZW5lbXlCb2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dID0gMjtcclxuICAgICAgICByZXR1cm4gcGxhY2UuaXNTdW5rKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbGF5ZXJIaXQoKSB7XHJcbiAgICAgIHBsYXllckhlYWx0aCAtPSAxO1xyXG4gICAgfSxcclxuICAgIHJldHVyblBsYXllckhlYWx0aCgpIHtcclxuICAgICAgcmV0dXJuIHBsYXllckhlYWx0aDtcclxuICAgIH0sXHJcbiAgICBlbmVteUhpdCgpIHtcclxuICAgICAgZW5lbXlIZWFsdGggLT0gMTtcclxuICAgIH0sXHJcbiAgICByZXR1cm5FbmVteUhlYWx0aCgpIHtcclxuICAgICAgcmV0dXJuIGVuZW15SGVhbHRoO1xyXG4gICAgfSxcclxuICAgIGdldEJvYXJkKCkge1xyXG4gICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0RW5lbXlCb2FyZCgpIHtcclxuICAgICAgcmV0dXJuIGVuZW15Qm9hcmQ7XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZXJBdHRhY2soKSB7XHJcbiAgICAgIGxldCBkb2VzTWlzcyA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlU2hpcChudW1iZXIpIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IFNoaXAobnVtYmVyKTtcclxuICAgICAgaXNTaGlwQnVpbHQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gW3NoaXAsIGlzU2hpcEJ1aWx0XTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTaGlwU3RhdHVzKCkge1xyXG4gICAgICBpc1NoaXBCdWlsdCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGNoZWNrU2hpcFN0YXR1cygpIHtcclxuICAgICAgcmV0dXJuIGlzU2hpcEJ1aWx0O1xyXG4gICAgfSxcclxuICAgIHJldHVyblBsYWNlKGNvb3JkaW5hdGVzKSB7XHJcbiAgICAgIHJldHVybiBib2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dO1xyXG4gICAgfSxcclxuICAgIHJldHVybjY0bGlzdCgpIHtcclxuICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9LFxyXG4gICAgc3BsaWNlTnVtKG51bSkge1xyXG4gICAgICBsaXN0LnNwbGljZShudW0sIDEpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUVuZW15Qm9hcmQoKSB7XHJcbiAgICAgIHdoaWxlIChhbGxTaGlwcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBsZXQgcm93ID0gZ2V0UmFuZG9tTnVtYmVyQmV0d2VlbjBBbmQ3KCk7XHJcbiAgICAgICAgbGV0IGNvbCA9IGdldFJhbmRvbU51bWJlckJldHdlZW4wQW5kNygpO1xyXG4gICAgICAgIGNvbnN0IGhvcml6b250YWwgPSB0cnVlT3JGYWxzZSgpO1xyXG4gICAgICAgIGNvbnN0IHNoaXAgPSBhbGxTaGlwc1swXTtcclxuICAgICAgICBsZXQgY2FuUGxhY2UgPSB0cnVlO1xyXG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XHJcbiAgICAgICAgICBpZiAocm93ICsgc2hpcC5nZXRMZW5ndGgoKSA+IDgpIHtcclxuICAgICAgICAgICAgY2FuUGxhY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29udGludWU7IC8vIFNraXAgdGhlIHJlc3Qgb2YgdGhlIGxvb3AgYW5kIHN0YXJ0IHdpdGggbmV3IHJhbmRvbSBjb29yZGluYXRlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoY29sICsgc2hpcC5nZXRMZW5ndGgoKSA+IDgpIHtcclxuICAgICAgICAgICAgY2FuUGxhY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29udGludWU7IC8vIFNraXAgdGhlIHJlc3Qgb2YgdGhlIGxvb3AgYW5kIHN0YXJ0IHdpdGggbmV3IHJhbmRvbSBjb29yZGluYXRlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgaWYgKGVuZW15Qm9hcmRbcm93ICsgaW5kZXhdW2NvbF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICBjYW5QbGFjZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlCb2FyZFtyb3ddW2NvbCArIGluZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIGNhblBsYWNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhblBsYWNlKSB7XHJcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtyb3csIGNvbF07XHJcbiAgICAgICAgICB0aGlzLnBsYWNlRW5lbXlTaGlwKGNvb3JkaW5hdGVzLCBzaGlwLCBob3Jpem9udGFsKTtcclxuICAgICAgICAgIGFsbFNoaXBzLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IHsgR2FtZUJvYXJkIH07XHJcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgY3JlYXRlQm9hcmRWcywgZW5lbXlCb2FyZFZzLCB1cGRhdGVQbGF5ZXJCb2FyZFZzIH0gZnJvbSAnLi9ib2FyZCc7XHJcbmltcG9ydCBkZWwgZnJvbSAnLi4vcGhvdG9zL2RlbGV0ZS5wbmcnO1xyXG5pbXBvcnQgeyBXaW5TY3JlZW4gfSBmcm9tICcuL3dpblZzJztcclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcjY0KCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2NCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBMYXllcnMobmFtZSkge1xyXG4gIGNvbnN0IG1haW5QbGF5ZXIgPSBQbGF5ZXIobmFtZSk7XHJcbiAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoJ2NvbXB1dGVyJyk7XHJcbiAgcmV0dXJuIFttYWluUGxheWVyLCBjb21wdXRlcl07XHJcbn1cclxuZnVuY3Rpb24gZGlkSGl0KCkge1xyXG4gIGNvbnN0IGFsbFRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1yb3cnKTtcclxuICBsZXQgaGl0ID0gZmFsc2U7XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFsbFRpbGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY29uc3QgZGl2ID0gYWxsVGlsZXNbaW5kZXhdO1xyXG4gICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15LWhpdCcpKSBoaXQgPSB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gaGl0O1xyXG59XHJcbmZ1bmN0aW9uIGNoZWNrVGlsZSh0aWxlLCBib2FyZCkge1xyXG4gIGNvbnN0IHJvdyA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5yb3dOdW0sIDEwKTtcclxuICBjb25zdCBjb2wgPSBwYXJzZUludCh0aWxlLmRhdGFzZXQuY29sTnVtLCAxMCk7XHJcbiAgY29uc3QgZW5lbXlCb2FyZExvZ2ljID0gYm9hcmQuZ2V0RW5lbXlCb2FyZCgpO1xyXG4gIHJldHVybiBlbmVteUJvYXJkTG9naWNbcm93XVtjb2xdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVOdW1iZXIoY29vcmRpbmF0ZXMpIHtcclxuICBjb25zdCBudW0gPSBjb29yZGluYXRlc1sxXSAqIDggKyBjb29yZGluYXRlc1swXTtcclxuICByZXR1cm4gbnVtO1xyXG59XHJcbmZ1bmN0aW9uIGFkZENsYXNzZXMoc3RhdHVzLCB0aWxlLCBzaGlwLCBjbGFzc05hbWUpIHtcclxuICBpZiAoc3RhdHVzID09PSBmYWxzZSkge1xyXG4gICAgY29uc3QgZGVsSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBkZWxJbWcuY2xhc3NMaXN0LmFkZCgnZGVsJyk7XHJcbiAgICBkZWxJbWcuc3JjID0gZGVsO1xyXG5cclxuICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnZW5lbXktaGl0Jyk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGRlbEltZyk7XHJcbiAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDApIHtcclxuICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnZW5lbXktbWlzc2VkJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh0aWxlLmNsYXNzTGlzdC5jb250YWlucygnZW5lbXktc3VuaycpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcExlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gc2hpcC5yZXR1cm5QbGFjZSgpLm1hcCgobnVtYmVyKSA9PiBwYXJzZUludChudW1iZXIsIDEwKSk7XHJcblxyXG4gICAgICBjb25zdCBhbGxUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKTtcclxuICAgICAgY29uc3QgbnVtID0gY2FsY3VsYXRlTnVtYmVyKGVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBjdXJyZW50VGlsZSA9IGFsbFRpbGVzW251bV07XHJcblxyXG4gICAgICBpZiAoY3VycmVudFRpbGUgJiYgY3VycmVudFRpbGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGN1cnJlbnRUaWxlLnJlbW92ZUNoaWxkKGN1cnJlbnRUaWxlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjdXJyZW50VGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15LWhpdCcpKSB7XHJcbiAgICAgICAgY3VycmVudFRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnZW5lbXktaGl0Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnJlbnRUaWxlLmNsYXNzTGlzdC5hZGQoJ2VuZW15LXN1bmsnKTtcclxuXHJcbiAgICAgIGNvbnN0IGRlbEltZ0FnYWluID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGRlbEltZ0FnYWluLmNsYXNzTGlzdC5hZGQoJ2RlbCcpO1xyXG4gICAgICBkZWxJbWdBZ2Fpbi5zcmMgPSBkZWw7XHJcbiAgICAgIGN1cnJlbnRUaWxlLmFwcGVuZENoaWxkKGRlbEltZ0FnYWluKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gcGxheWVyVHVybih0aWxlLCBib2FyZCwgbmFtZSkge1xyXG4gIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG4gIGNvbnN0IGluVGlsZSA9IGNoZWNrVGlsZSh0aWxlLCBib2FyZCk7XHJcbiAgY29uc3Qgcm93ID0gcGFyc2VJbnQodGlsZS5kYXRhc2V0LnJvd051bSwgMTApO1xyXG4gIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGUuZGF0YXNldC5jb2xOdW0sIDEwKTtcclxuICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xyXG4gIGxldCBzdW5rO1xyXG4gIGNvb3JkaW5hdGVzLnB1c2gocm93LCBjb2wpO1xyXG4gIGlmIChpblRpbGUgIT09IDIgJiYgaW5UaWxlICE9PSAwKSB7XHJcbiAgICBzdW5rID0gYm9hcmQuQXR0YWNrKGNvb3JkaW5hdGVzLCBpblRpbGUpO1xyXG4gICAgaWYgKHN1bmsgPT09IGZhbHNlKSB7XHJcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBoaXQgYSBzaGlwIWA7XHJcbiAgICAgIGFkZENsYXNzZXMoc3VuaywgdGlsZSwgaW5UaWxlKTtcclxuICAgIH0gZWxzZSBpZiAoc3VuayA9PT0gdHJ1ZSkge1xyXG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7bmFtZX0gc3Vua2VuIGEgc2hpcCFgO1xyXG4gICAgICBhZGRDbGFzc2VzKHN1bmssIHRpbGUsIGluVGlsZSwgJy5lbmVteS1yb3cnKTtcclxuICAgICAgYm9hcmQuZW5lbXlIaXQoKTtcclxuXHJcbiAgICAgIGlmIChib2FyZC5yZXR1cm5FbmVteUhlYWx0aCgpID09PSAwKSB7XHJcbiAgICAgICAgV2luU2NyZWVuKG5hbWUsIG5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7bmFtZX0gbWlzc2VkISB0cnkgYWdhaW5gO1xyXG4gICAgICBhZGRDbGFzc2VzKHN1bmssIHRpbGUsIGluVGlsZSk7XHJcbiAgICAgIGNvbnN0IGRpdk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS1jb250YWluZXInKTtcclxuICAgICAgZGl2TWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXItdHVybicpO1xyXG4gICAgICBkaXZNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2VuZW15LXR1cm4nKTtcclxuICAgICAgY2hlY2tUdXJuKHRpbGUsIGJvYXJkLCBuYW1lKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGluVGlsZSA9PT0gMikge1xyXG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYHlvdSBjYW4ndCBoaXQgaXQgYWdhaW4hYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgeW91IGNhbid0IG1pc3MgYWdhaW5gO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW5lbXlBdHRhY2tVbnRpbEVuZChcclxuICB0ZXh0Q29vcmRpbmF0ZXMsXHJcbiAgYWxsVGlsZXMsXHJcbiAgdGlsZUxvZ2ljLFxyXG4gIG51bWJlcixcclxuICBib2FyZFxyXG4pIHtcclxuICBsZXQgY29vcmRpbmF0ZXMgPSB0ZXh0Q29vcmRpbmF0ZXMubWFwKChlbGVtZW50KSA9PiBwYXJzZUludChlbGVtZW50LCAxMCkpO1xyXG5cclxuICBjb25zdCBkaXJlY3Rpb25zID0gdGlsZUxvZ2ljLnJldHVybkRpcmVjdGlvbnMoKTtcclxuICBjb25zdCBuZXdDb29yZGluYXRlcyA9IFtdO1xyXG5cclxuICBpZiAoZGlyZWN0aW9uc1swXSA9PT0gJ2Rvd24nKSB7XHJcbiAgICBpZiAoY29vcmRpbmF0ZXNbMF0gIT09IDcpIHtcclxuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZXNbMF0gKyAxO1xyXG4gICAgICBuZXdDb29yZGluYXRlcy5wdXNoKHJvdywgY29vcmRpbmF0ZXNbMV0pO1xyXG4gICAgICBudW1iZXIrKztcclxuICAgICAgY29uc3QgbmV3VGlsZVZzID0gYWxsVGlsZXNbbnVtYmVyXTtcclxuICAgICAgaWYgKG5ld1RpbGVWcy5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15LWhpdCcpKSB7XHJcbiAgICAgICAgYm9hcmQuc2F2ZVBvc2l0aW9uKG5ld0Nvb3JkaW5hdGVzKTtcclxuICAgICAgICBlbmVteUF0dGFja1VudGlsRW5kKG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgdGlsZUxvZ2ljLCBudW1iZXIsIGJvYXJkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbmVteUF0dGFjayhib2FyZCwgbnVtYmVyLCBuZXdDb29yZGluYXRlcywgYWxsVGlsZXMsIG5ld1RpbGVWcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRpbGVMb2dpYy5zaGlmdERpcmVjdGlvbnMoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGRpcmVjdGlvbnNbMF0gPT09ICd1cCcpIHtcclxuICAgIGNvb3JkaW5hdGVzID0gYm9hcmQucmV0dXJuUG9zaXRpb24oKTtcclxuICAgIG51bWJlciA9IGNhbGN1bGF0ZU51bWJlcihjb29yZGluYXRlcyk7XHJcblxyXG4gICAgaWYgKGNvb3JkaW5hdGVzWzBdICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVzWzBdIC0gMTtcclxuICAgICAgbmV3Q29vcmRpbmF0ZXMucHVzaChyb3csIGNvb3JkaW5hdGVzWzFdKTtcclxuICAgICAgbnVtYmVyLS07XHJcbiAgICAgIGNvbnN0IG5ld1RpbGVWcyA9IGFsbFRpbGVzW251bWJlcl07XHJcbiAgICAgIGlmIChuZXdUaWxlVnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmVteS1taXNzZWQnKSkge1xyXG4gICAgICAgIHRpbGVMb2dpYy5zaGlmdERpcmVjdGlvbnMoKTtcclxuICAgICAgICBlbmVteUF0dGFja1VudGlsRW5kKG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgdGlsZUxvZ2ljLCBudW1iZXIsIGJvYXJkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1RpbGVWcy5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15LWhpdCcpKSB7XHJcbiAgICAgICAgYm9hcmQuc2F2ZVBvc2l0aW9uKG5ld0Nvb3JkaW5hdGVzKTtcclxuICAgICAgICBlbmVteUF0dGFja1VudGlsRW5kKG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgdGlsZUxvZ2ljLCBudW1iZXIsIGJvYXJkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbmVteUF0dGFjayhib2FyZCwgbnVtYmVyLCBuZXdDb29yZGluYXRlcywgYWxsVGlsZXMsIG5ld1RpbGVWcyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRpbGVMb2dpYy5zaGlmdERpcmVjdGlvbnMoKTtcclxuICAgICAgZW5lbXlBdHRhY2tVbnRpbEVuZChjb29yZGluYXRlcywgYWxsVGlsZXMsIHRpbGVMb2dpYywgbnVtYmVyLCBib2FyZCk7XHJcbiAgICB9XHJcbiAgICB0aWxlTG9naWMuc2hpZnREaXJlY3Rpb25zKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChkaXJlY3Rpb25zWzBdID09PSAncmlnaHQnKSB7XHJcbiAgICBjb29yZGluYXRlcyA9IGJvYXJkLnJldHVyblBvc2l0aW9uKCk7XHJcbiAgICBudW1iZXIgPSBjYWxjdWxhdGVOdW1iZXIoY29vcmRpbmF0ZXMpO1xyXG4gICAgaWYgKGNvb3JkaW5hdGVzWzFdICE9PSA3KSB7XHJcbiAgICAgIGNvbnN0IGNvbCA9IGNvb3JkaW5hdGVzWzFdICsgMTtcclxuICAgICAgbmV3Q29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlc1swXSwgY29sKTtcclxuICAgICAgbnVtYmVyICs9IDg7XHJcbiAgICAgIGNvbnN0IG5ld1RpbGVWcyA9IGFsbFRpbGVzW251bWJlcl07XHJcbiAgICAgIGlmIChuZXdUaWxlVnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmVteS1taXNzZWQnKSkge1xyXG4gICAgICAgIHRpbGVMb2dpYy5zaGlmdERpcmVjdGlvbnMoKTtcclxuICAgICAgICBlbmVteUF0dGFja1VudGlsRW5kKG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgdGlsZUxvZ2ljLCBudW1iZXIsIGJvYXJkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1RpbGVWcy5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15LWhpdCcpKSB7XHJcbiAgICAgICAgYm9hcmQuc2F2ZVBvc2l0aW9uKG5ld0Nvb3JkaW5hdGVzKTtcclxuICAgICAgICBlbmVteUF0dGFja1VudGlsRW5kKG5ld0Nvb3JkaW5hdGVzLCBhbGxUaWxlcywgdGlsZUxvZ2ljLCBudW1iZXIsIGJvYXJkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbmVteUF0dGFjayhib2FyZCwgbnVtYmVyLCBuZXdDb29yZGluYXRlcywgYWxsVGlsZXMsIG5ld1RpbGVWcyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRpbGVMb2dpYy5zaGlmdERpcmVjdGlvbnMoKTtcclxuICAgICAgZW5lbXlBdHRhY2tVbnRpbEVuZChjb29yZGluYXRlcywgYWxsVGlsZXMsIHRpbGVMb2dpYywgbnVtYmVyLCBib2FyZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChkaXJlY3Rpb25zWzBdID09PSAnbGVmdCcgfHwgZGlyZWN0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgIGNvb3JkaW5hdGVzID0gYm9hcmQucmV0dXJuUG9zaXRpb24oKTtcclxuICAgIG51bWJlciA9IGNhbGN1bGF0ZU51bWJlcihjb29yZGluYXRlcyk7XHJcblxyXG4gICAgY29uc3QgY29sID0gY29vcmRpbmF0ZXNbMV0gLSAxO1xyXG4gICAgbmV3Q29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlc1swXSwgY29sKTtcclxuICAgIG51bWJlciAtPSA4O1xyXG4gICAgY29uc3QgbmV3VGlsZVZzID0gYWxsVGlsZXNbbnVtYmVyXTtcclxuICAgIGlmIChuZXdUaWxlVnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmVteS1taXNzZWQnKSkge1xyXG4gICAgICB0aWxlTG9naWMuc2hpZnREaXJlY3Rpb25zKCk7XHJcbiAgICAgIGVuZW15QXR0YWNrVW50aWxFbmQobmV3Q29vcmRpbmF0ZXMsIGFsbFRpbGVzLCB0aWxlTG9naWMsIG51bWJlciwgYm9hcmQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAobmV3VGlsZVZzLmNsYXNzTGlzdC5jb250YWlucygnZW5lbXktaGl0JykpIHtcclxuICAgICAgYm9hcmQuc2F2ZVBvc2l0aW9uKG5ld0Nvb3JkaW5hdGVzKTtcclxuICAgICAgZW5lbXlBdHRhY2tVbnRpbEVuZChuZXdDb29yZGluYXRlcywgYWxsVGlsZXMsIHRpbGVMb2dpYywgbnVtYmVyLCBib2FyZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbmVteUF0dGFjayhib2FyZCwgbnVtYmVyLCBuZXdDb29yZGluYXRlcywgYWxsVGlsZXMsIG5ld1RpbGVWcyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRpbGVMb2dpYy5zaGlmdERpcmVjdGlvbnMoKTtcclxuICByZXR1cm47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuZW15QXR0YWNrKGJvYXJkLCBudW1iZXIsIGNvb3JkaW5hdGVzLCBhbGxUaWxlcywgdGlsZSkge1xyXG4gIGNvbnN0IHRpbGVMb2dpYyA9IGJvYXJkLnJldHVyblBsYWNlKGNvb3JkaW5hdGVzKTtcclxuICBpZiAodGlsZUxvZ2ljID09PSBudWxsKSB7XHJcbiAgICBhZGRDbGFzc2VzKDAsIHRpbGUsIHRpbGVMb2dpYyk7XHJcbiAgICBib2FyZC5zcGxpY2VOdW0obnVtYmVyKTtcclxuICAgIGNvbnN0IGRpdk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS1jb250YWluZXInKTtcclxuICAgIGRpdk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZW5lbXktdHVybicpO1xyXG4gICAgZGl2TWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHVybicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAodGlsZUxvZ2ljLmlzU3VuaygpKSB7XHJcbiAgICBjb25zdCBzdGF0dXMgPSB0aWxlTG9naWMuaXNTdW5rKCk7XHJcblxyXG4gICAgYWRkQ2xhc3NlcyhzdGF0dXMsIHRpbGUsIHRpbGVMb2dpYyk7XHJcbiAgfSBlbHNlIGlmICgodGlsZUxvZ2ljICE9PSAwKSAmICh0aWxlTG9naWMgIT09IDIpKSB7XHJcbiAgICB0aWxlTG9naWMuaGl0KCk7XHJcbiAgICBjb25zdCBzdGF0dXMgPSB0aWxlTG9naWMuaXNTdW5rKCk7XHJcbiAgICBpZiAoIXN0YXR1cykge1xyXG4gICAgICB0aWxlTG9naWMuZW50ZXJQb3NpdGlvbihjb29yZGluYXRlcyk7XHJcblxyXG4gICAgICBhZGRDbGFzc2VzKHN0YXR1cywgdGlsZSwgdGlsZUxvZ2ljKTtcclxuICAgICAgYm9hcmQuc3BsaWNlTnVtKG51bWJlcik7XHJcbiAgICAgIGVuZW15QXR0YWNrVW50aWxFbmQoY29vcmRpbmF0ZXMsIGFsbFRpbGVzLCB0aWxlTG9naWMsIG51bWJlciwgYm9hcmQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGlsZUxvZ2ljLmVudGVyUG9zaXRpb24oY29vcmRpbmF0ZXMpO1xyXG5cclxuICAgICAgYWRkQ2xhc3NlcyhzdGF0dXMsIHRpbGUsIHRpbGVMb2dpYywgJy5wbGF5ZXItcm93Jyk7XHJcbiAgICAgIGJvYXJkLnNwbGljZU51bShudW1iZXIpO1xyXG4gICAgICBib2FyZC5wbGF5ZXJIaXQoKTtcclxuICAgICAgaWYgKGJvYXJkLnJldHVyblBsYXllckhlYWx0aCgpID09PSAwKSB7XHJcbiAgICAgICAgV2luU2NyZWVuKCdvcHBvbmVudCcsIGJvYXJkLnJldHVybk5hbWUoKSk7XHJcbiAgICAgIH1cclxuICAgICAgZW5lbXlUdXJuKGJvYXJkKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpdEFnYWluKGJvYXJkKSB7XHJcbiAgbGV0IHBvc2l0aW9uID0gYm9hcmQucmV0dXJuUG9zaXRpb24oKTtcclxuICBsZXQgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLXJvdycpO1xyXG4gIGxldCBib2FyZExvZ2ljID0gYm9hcmQuZ2V0Qm9hcmQoKTtcclxuICBsZXQgdGlsZUxvZ2ljID0gYm9hcmRMb2dpY1twb3NpdGlvblswXV1bcG9zaXRpb25bMV1dO1xyXG4gIGxldCBudW1iZXIgPSAwO1xyXG4gIGVuZW15QXR0YWNrVW50aWxFbmQocG9zaXRpb24sIGFsbFRpbGVzLCB0aWxlTG9naWMsIG51bWJlciwgYm9hcmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmVteVR1cm4oYm9hcmQpIHtcclxuICBpZiAoZGlkSGl0KCkpIHtcclxuICAgIGhpdEFnYWluKGJvYXJkKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgbGlzdCA9IGJvYXJkLnJldHVybjY0bGlzdCgpO1xyXG4gICAgbGV0IG51bWJlcjtcclxuICAgIGxldCBhbnN3ZXIgPSBmYWxzZTtcclxuICAgIG51bWJlciA9IGdldFJhbmRvbU51bWJlcjY0KCk7XHJcblxyXG4gICAgY29uc3QgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLXJvdycpO1xyXG4gICAgY29uc3QgdGlsZSA9IGFsbFRpbGVzW251bWJlcl07XHJcbiAgICBjb25zdCByb3cgPSBwYXJzZUludCh0aWxlLmRhdGFzZXQucm93TnVtLCAxMCk7XHJcbiAgICBjb25zdCBjb2wgPSBwYXJzZUludCh0aWxlLmRhdGFzZXQucm93Q29sLCAxMCk7XHJcbiAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcclxuICAgIGNvb3JkaW5hdGVzLnB1c2gocm93LCBjb2wpO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aWxlLmNsYXNzTGlzdC5jb250YWlucygnZW5lbXktaGl0JykgfHxcclxuICAgICAgdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15LW1pc3NlZCcpIHx8XHJcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmVteS1zdW5rJylcclxuICAgICkge1xyXG4gICAgICBib2FyZC5zcGxpY2VOdW0obnVtYmVyKTtcclxuICAgICAgZW5lbXlUdXJuKGJvYXJkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvYXJkLnNhdmVQb3NpdGlvbihjb29yZGluYXRlcyk7XHJcblxyXG4gICAgICBlbmVteUF0dGFjayhib2FyZCwgbnVtYmVyLCBjb29yZGluYXRlcywgYWxsVGlsZXMsIHRpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tUdXJuKHRpbGUsIGJvYXJkLCBuYW1lKSB7XHJcbiAgY29uc3QgZGl2TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLWNvbnRhaW5lcicpO1xyXG4gIGlmIChkaXZNZXNzYWdlLmNsYXNzTGlzdC5jb250YWlucygnd2luJykpIHtcclxuICAgIGNvbnNvbGUubG9nKCd3aW4nKTtcclxuICB9IGVsc2UgaWYgKGRpdk1lc3NhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5ZXItdHVybicpKSB7XHJcbiAgICBwbGF5ZXJUdXJuKHRpbGUsIGJvYXJkLCBuYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZW5lbXlUdXJuKGJvYXJkKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50KGJvYXJkLCBuYW1lKSB7XHJcbiAgY29uc3QgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXktcm93Jyk7XHJcbiAgYWxsVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2hlY2tUdXJuKHRpbGUsIGJvYXJkLCBuYW1lKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdGFydGluZ0dhbWUoYm9hcmQsIG5hbWUpIHtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAnKTtcclxuICBwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICBjb25zdCBlbmVteUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wcG9uZW50LWJvYXJkJyk7XHJcblxyXG4gIGVuZW15Qm9hcmRWcyhlbmVteUJvYXJkKTtcclxuICBib2FyZC5jcmVhdGVFbmVteUJvYXJkKCk7XHJcbiAgY29uc3QgZW5lbXlCb2FyZExvZ2ljID0gYm9hcmQuZ2V0RW5lbXlCb2FyZCgpO1xyXG4gIGNvbnN0IGRpdk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS1jb250YWluZXInKTtcclxuICBkaXZNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10dXJuJyk7XHJcbiAgYWRkRXZlbnQoYm9hcmQsIG5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQTGF5ZXJzLCBTdGFydGluZ0dhbWUsIGNhbGN1bGF0ZU51bWJlciB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZFZzLCBlbmVteUJvYXJkVnMgfSBmcm9tICcuL2JvYXJkJztcclxuXHJcbmZ1bmN0aW9uIHBhZ2UobmFtZSkge1xyXG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xyXG4gIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQtYm9hcmQnKTtcclxuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRsaW5lLWdhbWUnKTtcclxuICBjcmVhdGVCb2FyZFZzKHBsYXllckJvYXJkKTtcclxuICBlbmVteUJvYXJkVnMob3Bwb25lbnRCb2FyZCk7XHJcbiAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGAke25hbWV9IGJvYXJkYDtcclxufVxyXG5leHBvcnQgeyBwYWdlIH07XHJcbiIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcclxuXHJcbmZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XHJcbiAgY29uc3QgYm9hcmQgPSBHYW1lQm9hcmQoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBib2FyZCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXJDaG9pY2VMb2dpYyhuYW1lKSB7XHJcbiAgY29uc3QgZ2FtZUJvYXJkID0gR2FtZUJvYXJkKG5hbWUpO1xyXG4gIGdhbWVCb2FyZC5zYXZlUGxheWVyTmFtZShuYW1lKTtcclxuICByZXR1cm4gZ2FtZUJvYXJkO1xyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXIsIGNyZWF0ZVBsYXllckNob2ljZUxvZ2ljIH07XHJcbiIsImZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XHJcbiAgbGV0IGhpdHMgPSAwO1xyXG4gIGxldCBzdW5rID0gZmFsc2U7XHJcbiAgbGV0IGNvbCA9IGZhbHNlO1xyXG4gIGNvbnN0IGRpcmVjdGlvbnMgPSBbJ2Rvd24nLCAndXAnLCAncmlnaHQnLCAnbGVmdCddO1xyXG4gIGNvbnN0IHBvc2l0aW9uID0gW107XHJcbiAgcmV0dXJuIHtcclxuICAgIHJldHVyblBsYWNlKCkge1xyXG4gICAgICByZXR1cm4gcG9zaXRpb24uc2hpZnQoKTtcclxuICAgIH0sXHJcbiAgICByZXR1cm5EaXJlY3Rpb25zKCkge1xyXG4gICAgICByZXR1cm4gZGlyZWN0aW9ucztcclxuICAgIH0sXHJcbiAgICBzaGlmdERpcmVjdGlvbnMoKSB7XHJcbiAgICAgIGRpcmVjdGlvbnMuc2hpZnQoKTtcclxuICAgIH0sXHJcbiAgICBlbnRlclBvc2l0aW9uKGNvb3JkaW5hdGVzKSB7XHJcbiAgICAgIHBvc2l0aW9uLnB1c2goY29vcmRpbmF0ZXMpO1xyXG4gICAgfSxcclxuICAgIGdldE51bU9mSGl0cygpIHtcclxuICAgICAgcmV0dXJuIGhpdHM7XHJcbiAgICB9LFxyXG4gICAgaGl0KCkge1xyXG4gICAgICBoaXRzICs9IDE7XHJcbiAgICB9LFxyXG4gICAgaXNTdW5rKCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQobGVuZ3RoLCAxMCkgPT09IGhpdHM7XHJcbiAgICB9LFxyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICByZXR1cm4gbGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIGdldFNoaXAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGVuZ3RoLFxyXG4gICAgICAgIGhpdHMsXHJcbiAgICAgICAgc3VuayxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5mdW5jdGlvbiBzaGlwVlMoXHJcbiAgY2FycmllcixcclxuICBiYXR0bGVTaGlwLFxyXG4gIHN1Ym1hcmluZSxcclxuICBjcnVpc2VyLFxyXG4gIGRlc3Ryb3llcixcclxuICBzaGlwQ29udGFpbmVyXHJcbikge1xyXG4gIGNvbnN0IGNhcnJpZXJJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBiYXR0bGVTaGlwSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3Qgc3VibWFyaW5lSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgY3J1aXNlckltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IGRlc3Ryb3llckltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNhcnJpZXJJbWcuY2xhc3NMaXN0LmFkZCgnY2FycmllcicsICdzaGlwLWNob29zZScpO1xyXG4gIGJhdHRsZVNoaXBJbWcuY2xhc3NMaXN0LmFkZCgnYmF0dGxlLXNoaXAnLCAnc2hpcC1jaG9vc2UnKTtcclxuICBzdWJtYXJpbmVJbWcuY2xhc3NMaXN0LmFkZCgnc3VibWFyaW5lJywgJ3NoaXAtY2hvb3NlJyk7XHJcbiAgY3J1aXNlckltZy5jbGFzc0xpc3QuYWRkKCdjcnVpc2VyJywgJ3NoaXAtY2hvb3NlJyk7XHJcbiAgZGVzdHJveWVySW1nLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llcicsICdzaGlwLWNob29zZScpO1xyXG4gIGNhcnJpZXJJbWcuc3JjID0gY2FycmllcjtcclxuICBiYXR0bGVTaGlwSW1nLnNyYyA9IGJhdHRsZVNoaXA7XHJcbiAgc3VibWFyaW5lSW1nLnNyYyA9IHN1Ym1hcmluZTtcclxuICBjcnVpc2VySW1nLnNyYyA9IGNydWlzZXI7XHJcbiAgZGVzdHJveWVySW1nLnNyYyA9IGRlc3Ryb3llcjtcclxuICBjYXJyaWVySW1nLmRhdGFzZXQuc2hpcExlbmd0aCA9IDQ7XHJcbiAgYmF0dGxlU2hpcEltZy5kYXRhc2V0LnNoaXBMZW5ndGggPSAzO1xyXG4gIHN1Ym1hcmluZUltZy5kYXRhc2V0LnNoaXBMZW5ndGggPSAyO1xyXG4gIGNydWlzZXJJbWcuZGF0YXNldC5zaGlwTGVuZ3RoID0gMjtcclxuICBkZXN0cm95ZXJJbWcuZGF0YXNldC5zaGlwTGVuZ3RoID0gMTtcclxuXHJcbiAgY2FycmllckltZy5kYXRhc2V0LnNoaXBDb2xvciA9ICcjZmY0ZDZkJztcclxuICBiYXR0bGVTaGlwSW1nLmRhdGFzZXQuc2hpcENvbG9yID0gJyNmYWEzMDcnO1xyXG4gIHN1Ym1hcmluZUltZy5kYXRhc2V0LnNoaXBDb2xvciA9ICcjMDBiNGQ4JztcclxuICBjcnVpc2VySW1nLmRhdGFzZXQuc2hpcENvbG9yID0gJyNmZmRkMDAnO1xyXG4gIGRlc3Ryb3llckltZy5kYXRhc2V0LnNoaXBDb2xvciA9ICcjN2JmMWE4JztcclxuXHJcbiAgY2FycmllckltZy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgYmF0dGxlU2hpcEltZy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgc3VibWFyaW5lSW1nLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICBjcnVpc2VySW1nLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICBkZXN0cm95ZXJJbWcuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG5cclxuICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcnJpZXJJbWcpO1xyXG4gIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoYmF0dGxlU2hpcEltZyk7XHJcbiAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtYXJpbmVJbWcpO1xyXG4gIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY3J1aXNlckltZyk7XHJcbiAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXN0cm95ZXJJbWcpO1xyXG59XHJcblxyXG5leHBvcnQgeyBTaGlwLCBzaGlwVlMgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlUGxheWVyQ2hvaWNlIH0gZnJvbSAnLi9jaG9vc2VWUyc7XHJcblxyXG5mdW5jdGlvbiBXaW5TY3JlZW4obmFtZSwgcGxheWVyTmFtZSkge1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG4gIGNvbnN0IHdpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHdpbk1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgd2luQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dpbi1jb250YWluZXInKTtcclxuICB3aW5Db250YWluZXIuc3R5bGUuekluZGV4ID0gJzIwJztcclxuICB3aW5NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3dpbk1lc3NhZ2UnKTtcclxuICBwbGF5QWdhaW5CdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XHJcbiAgcGxheUFnYWluQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1wbGF5LWFnYWluJyk7XHJcblxyXG4gIHdpbk1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBXaW5zYDtcclxuICBwbGF5QWdhaW5CdXR0b24udGV4dENvbnRlbnQgPSAnUGxheSBBZ2FpbiEnO1xyXG5cclxuICB3aW5Db250YWluZXIuYXBwZW5kQ2hpbGQod2luTWVzc2FnZSk7XHJcbiAgd2luQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ1dHRvbik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh3aW5Db250YWluZXIpO1xyXG5cclxuICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZXNldEdhbWUocGxheWVyTmFtZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0R2FtZShuYW1lKSB7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcbiAgY29uc3Qgd2luQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbi1jb250YWluZXInKTtcclxuICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcCcpO1xyXG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xyXG4gIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQtYm9hcmQnKTtcclxuICBjb25zdCBNZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcclxuICBwb3BVcC5yZW1vdmUoKTtcclxuICBvdmVybGF5LnJlbW92ZSgpO1xyXG4gIHdpbkNvbnRhaW5lci5yZW1vdmUoKTtcclxuICB3aGlsZSAocGxheWVyQm9hcmQuZmlyc3RDaGlsZCkge1xyXG4gICAgcGxheWVyQm9hcmQucmVtb3ZlQ2hpbGQocGxheWVyQm9hcmQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG4gIHdoaWxlIChvcHBvbmVudEJvYXJkLmZpcnN0Q2hpbGQpIHtcclxuICAgIG9wcG9uZW50Qm9hcmQucmVtb3ZlQ2hpbGQob3Bwb25lbnRCb2FyZC5maXJzdENoaWxkKTtcclxuICB9XHJcbiAgTWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNyZWF0ZVBsYXllckNob2ljZShuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IHsgV2luU2NyZWVuIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVBsYXllckNob2ljZSB9IGZyb20gJy4vcmVsYXRlZC9jaG9vc2VWUyc7XHJcbmltcG9ydCB7IHBhZ2UgfSBmcm9tICcuL3JlbGF0ZWQvcGFnZSc7XHJcbmltcG9ydCBiYXR0bGVzaGlwIGZyb20gJy4vcGhvdG9zL2JhdHRsZXNoaXAucG5nJztcclxuaW1wb3J0IG1ldGFsIGZyb20gJy4vcGhvdG9zL3NlYW1sZXNzLW1ldGFsLmpwZyc7XHJcblxyXG5mdW5jdGlvbiBob21lcGFnZSgpIHtcclxuICBjb25zdCBob21lUGhvdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1wYWdlJyk7XHJcbiAgaG9tZVBob3RvLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYXR0bGVzaGlwfSlgO1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xyXG4gIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1kaXYnKTtcclxuXHJcbiAgbG9nby5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bWV0YWx9KWA7XHJcbiAgbG9nby5zdHlsZS53ZWJraXRCYWNrZ3JvdW5kQ2xpcCA9ICd0ZXh0JztcclxuICBsb2dvLnN0eWxlLmJhY2tncm91bmRDbGlwID0gJ3RleHQnO1xyXG4gIG1haW5TY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5mdW5jdGlvbiBzdGFydGluZ1RoZUdhbWUoKSB7XHJcbiAgY29uc3QgZ2FtZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpO1xyXG4gIGdhbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbWFpblNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWRpdicpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbCcpO1xyXG4gICAgaWYgKGlucHV0RWxlbWVudC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjYzExMjFmJztcclxuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAncGxlYXNlIGVudGVyIGEgcmVhbCBOYW1lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dEVsZW1lbnQudmFsdWU7XHJcbiAgICAgIG1haW5TY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgY3JlYXRlUGxheWVyQ2hvaWNlKGlucHV0VmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5ob21lcGFnZSgpO1xyXG5zdGFydGluZ1RoZUdhbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9