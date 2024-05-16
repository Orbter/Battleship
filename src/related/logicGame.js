import { Player } from './player';

function createPLayers(name) {
  const mainPlayer = Player(name);
  const computer = Player('computer');
  return [mainPlayer, computer];
}
function startGame(board, div) {
  console.log(board.getBoard());
  console.log(div);
  const row = parseInt(div.dataset.rowNum, 10);
  const col = parseInt(div.dataset.colNum, 10);
  const coordinates = [];
  coordinates.push(row, col);
  board.receiveAttack(coordinates);
}
function addEvent(containerBoard, matrixBoard) {
  containerBoard.forEach((square) => {
    square.addEventListener('click', () => startGame(matrixBoard, square));
  });
}

export { startGame, createPLayers, addEvent };
//betwing
