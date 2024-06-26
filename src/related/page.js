import { createBoardVs, enemyBoardVs } from './board';

function page(name) {
  const playerBoard = document.querySelector('.player-board');
  const opponentBoard = document.querySelector('.opponent-board');
  const playerName = document.querySelector('.headline-game');
  createBoardVs(playerBoard);
  enemyBoardVs(opponentBoard);
  playerName.textContent = `${name} board`;
}
export { page };
