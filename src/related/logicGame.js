import { Player } from './player';
import { createBoardVs, enemyBoardVs, updatePlayerBoardVs } from './board';
import del from '../photos/delete.png';

function getRandomNumber64() {
  return Math.floor(Math.random() * 64);
}

function createPLayers(name) {
  const mainPlayer = Player(name);
  const computer = Player('computer');
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
    delImg.src = del;

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
      delImgAgain.src = del;
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
    board.spliceNum(number);
    const divMessage = document.querySelector('.message-container');
    divMessage.classList.remove('enemy-turn');
    divMessage.classList.add('player-turn');
    return;
  }
  if ((tileLogic !== 0) & (tileLogic !== 2)) {
    tileLogic.hit();
    const status = tileLogic.isSunk();
    if (!status) {
      addClasses(status, tile, tileLogic);
      board.spliceNum(number);
      enemyAttackUntilEnd(coordinates, allTiles, tileLogic, number, board);
    } else {
      addClasses(status, tile, tileLogic, '.player-row');
      board.spliceNum(number);
      enemyTurn(board);
    }
  }
}

function enemyTurn(board) {
  const list = board.return64list();
  let number;
  let answer = false;
  while (!answer) {
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

  const enemyBoard = document.querySelector('.opponent-board');

  enemyBoardVs(enemyBoard);
  board.createEnemyBoard();
  const enemyBoardLogic = board.getEnemyBoard();
  const divMessage = document.querySelector('.message-container');
  divMessage.classList.add('player-turn');
  addEvent(board, name);
}

export { createPLayers, StartingGame, calculateNumber };
//debaging
