import { Player } from './player';
import { createBoardVs, enemyBoardVs } from './board';
function createPLayers(name) {
  const mainPlayer = Player(name);
  const computer = Player('computer');
  return [mainPlayer, computer];
}
function checkTile(tile, board) {
  const row = tile.dataSet.rowNum;
  const col = tile.dataSet.colNum;
  const enemyBoardLogic = board.getEnemyBoard();
  if (enemyBoardLogic[row][col] === null) return true;
  return false;
}

function playerTurn(tile, board) {
  const canHit = checkTile();
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
  //addEvent();
}

export { createPLayers, StartingGame };
