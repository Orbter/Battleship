import { createBoardChooseVs } from './board';
import { Ship, shipVS } from './ship';
import battleShip from '../photos/battleShip2.png';
import carrier from '../photos/carrier.png';
import cruiser from '../photos/cruiser.png';
import destroyer from '../photos/destroyer.png';
import submarine from '../photos/submarine.png';

import { GameBoard } from './gameboard';

function createPlayerChoiceLogic(name) {
  const gameBoard = GameBoard(name);

  return gameBoard;
}

function addClickedShip(clickedShip) {
  const allShips = document.querySelectorAll('.ship-choose');
  allShips.forEach((ship) => {
    ship.classList.remove('clicked');
  });
  clickedShip.classList.add('clicked');
}
function deleteShip() {}

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
function placeShipImage(shipElement, tile, shipLength, isRotated) {
  const shipContainer = document.querySelector('.placed-ships-container');
  const shipImg = new Image();
  shipImg.src = shipElement.src;
  shipImg.classList.add('placed-ship');
  shipImg.style.position = 'absolute';

  if (shipElement.classList.contains('carrier')) {
    shipImg.classList.add('carrier');
  } else if (shipElement.classList.contains('battle-ship')) {
    shipImg.classList.add('battle-ship');
  } else if (shipElement.classList.contains('submarine')) {
    shipImg.classList.add('submarine ');
  } else if (shipElement.classList.contains('cruiser')) {
    shipImg.classList.add('cruiser');
  } else {
    shipImg.classList.add('destroyer');
  }

  // Calculate position based on the tile's position
  const tileRect = tile.getBoundingClientRect();

  const offsetX = tileRect.left;
  const offsetY = tileRect.top;

  shipImg.style.left = `${offsetX}px`;
  shipImg.style.top = `${offsetY}px`;

  if (isRotated) {
    shipImg.style.transform = `rotate(90deg)`;
    shipImg.style.transformOrigin = 'top left';
  }

  shipContainer.appendChild(shipImg);
}
function placingShip(tile, board) {
  const doesShip = checkIfShipClicked();
  const shipClicked = returnShip();
  if (doesShip !== null) {
    const row = parseInt(tile.dataset.rowNum, 10);
    const col = parseInt(tile.dataset.rowCol, 10);
    const coordinates = [];
    coordinates.push(row, col);
    const ship = Ship(doesShip);
    const rotateAnswer = checkIfRotate();
    board.placeShip(coordinates, ship, rotateAnswer);
    placeShipImage(shipClicked, tile, doesShip, rotateAnswer); // Place ship image behind the tiles

    shipClicked.remove();
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
      if (place > allTiles.length) return;
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

function addEvent(allTiles, board) {
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
  const placedShipsContainer = document.createElement('div');
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
  placedShipsContainer.classList.add('placed-ships-container');
  placedShipsContainer.style.position = 'relative';

  h2.textContent = `${name} choose where to place your ship`;
  rotateButton.textContent = 'Rotate';
  startButton.textContent = 'Start';

  shipVS(carrier, battleShip, submarine, cruiser, destroyer, shipContainer);

  createBoardChooseVs(boardContainer);
  const board = createPlayerChoiceLogic(name);

  headline.appendChild(h2);
  buttonContainer.appendChild(rotateButton);
  buttonContainer.appendChild(startButton);

  chooseContainer.appendChild(headline);
  chooseContainer.appendChild(buttonContainer);
  chooseContainer.appendChild(boardContainer);
  chooseContainer.appendChild(shipContainer);
  boardContainer.appendChild(placedShipsContainer);

  body.appendChild(overlay);
  body.appendChild(chooseContainer);
  const tiles = document.querySelectorAll('.square-choose');

  addEvent(tiles, board);
}

export { createPlayerChoice };
