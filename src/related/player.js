import { GameBoard } from './gameboard';

function Player(name) {
  const board = GameBoard();

  return {
    name,
    board,
  };
}
export { Player };
