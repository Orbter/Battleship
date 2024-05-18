import { createBoardChooseVs } from './board';
import { Ship } from './ship';
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
    const ship = Ship(shipClicked);
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

  // adding a logic functions
  createBoardChooseVs(boardContainer);
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
export { createPlayerChoice };
