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
  gameBoard.savePlayerName(name);
  return gameBoard;
}

export { Player, createPlayerChoiceLogic };
