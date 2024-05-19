import { Player } from './player';
import { createBoardVs, enemyBoardVs } from './board';

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
  createBoardVs(playerBoard);
  enemyBoardVs(enemyBoard);
  board.createEnemyBoard();
  const enemyBoardLogic = board.getEnemyBoard();
  const divMessage = document.querySelector('.message-container');
  divMessage.classList.add('player-turn');
  //addEvent(board);
}

export { createPLayers, StartingGame };
