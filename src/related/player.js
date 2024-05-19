import { GameBoard } from './gameboard';

function Player(name) {
  const board = GameBoard();

  return {
    name,
    board,
  };
}

function createPlayerChoiceLogic(name) {
  const gameBoard = GameBoard(name);

  return gameBoard;
}

export { Player, createPlayerChoiceLogic };
