import { createBoardVs, enemyBoardVs } from './board';
import { createPLayers } from './logicGame';

function page(name) {
  const playerBoard = document.querySelector('.player-board');
  const opponentBoard = document.querySelector('.opponent-board');
  const playerName = document.querySelector('.headline-game');
  const [human, opponent] = createPLayers(name);
  createBoardVs(playerBoard);
  enemyBoardVs(opponentBoard);
  playerName.textContent = `${name} board`;
  return [human, opponent];
}
export { page };
