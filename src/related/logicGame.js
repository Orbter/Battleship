import { Player } from './player';
import { createBoardVs, enemyBoardVs } from './board';
import del from '../photos/delete.png';

function createPLayers(name) {
  const mainPlayer = Player(name);
  const computer = Player('computer');
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

function calculateNumber(coordinates) {
  const num = coordinates[1] * 8 + coordinates[0];
  return num;
}
function addClasses(status, tile, ship) {
  const delImg = new Image();
  delImg.classList.add('del');
  delImg.src = del;

  if (status === false) {
    tile.classList.add('enemy-hit');
  } else if (status === 0) {
    tile.classList.add('enemy-missed');
  } else {
    const shipLength = ship.getLength();
    for (let index = 0; index < shipLength; index++) {
      const element = ship.returnPlace();
      const allTiles = document.querySelectorAll('.enemy-row');
      element.classList.add('enemy-sunk');
      element.classList.remove('enemy-hit');
    }
  }
}

function playerTurn(tile, board, name) {
  const messageContainer = document.querySelector('.message-container');
  const answerHit = canHit(tile, board);
  const inTile = checkTile(tile, board);
  const row = parseInt(tile.dataSet.rowNum, 10);
  const col = parseInt(tile.dataSet.colNum, 10);
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
      addClasses(sunk, tile, inTile);
    } else {
      messageContainer.textContent = `${name} missed! try again`;
      addClasses(sunk, tile, inTile);
    }
  } else {
    if (inTile === 2) {
      messageContainer.textContent = `you can't hit it again!`;
    } else {
      messageContainer.textContent = `you can'y miss again`;
    }
  }
}

function checkTurn(tile, board, name) {
  const divMessage = document.querySelector('.message-container');
  if (divMessage.classList.contains('message-container')) {
    playerTurn(tile, board, name);
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
  createBoardVs(playerBoard);
  enemyBoardVs(enemyBoard);
  board.createEnemyBoard();
  const enemyBoardLogic = board.getEnemyBoard();
  const divMessage = document.querySelector('.message-container');
  divMessage.classList.add('player-turn');
  //addEvent(board,name);
}

export { createPLayers, StartingGame };
