import { Player } from './player';
import { createBoardVs, enemyBoardVs, updatePlayerBoardVs } from './board';
import del from '../photos/delete.png';
import { WinScreen } from './winVs';

function getRandomNumber64() {
  return Math.floor(Math.random() * 64);
}

function createPLayers(name) {
  const mainPlayer = Player(name);
  const computer = Player('computer');
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
    delImg.src = del;

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
      board.enemyHit();

      if (board.returnEnemyHealth() === 0) {
        WinScreen(name, name);
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
        WinScreen('opponent', board.returnName());
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

  enemyBoardVs(enemyBoard);
  board.createEnemyBoard();
  const enemyBoardLogic = board.getEnemyBoard();
  const divMessage = document.querySelector('.message-container');
  divMessage.classList.add('player-turn');
  addEvent(board, name);
}

export { createPLayers, StartingGame, calculateNumber };
