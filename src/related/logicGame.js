import { Player } from './player';
import { createBoardVs, enemyBoardVs } from './board';
function createPLayers(name) {
  const mainPlayer = Player(name);
  const computer = Player('computer');
  return [mainPlayer, computer];
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
  console.log(enemyBoardLogic);
}

export { createPLayers, StartingGame };
