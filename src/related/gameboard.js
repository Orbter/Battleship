import { Ship } from './ship';

function createMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(null); // You can initialize the matrix with any value, here we use 0
    }
    matrix.push(row);
  }
  return matrix;
}
function GameBoard() {
  let isShipBuilt = false;
  const allShips = [];
  const ship5 = Ship(5);
  const ship4 = Ship(4);
  const ship3 = Ship(3);
  const ship3Also = Ship(3);
  const ship2 = Ship(2);
  const ship1 = Ship(1);
  allShips.push(ship5, ship4, ship3, ship3Also, ship2, ship1);

  const board = createMatrix(9, 9);
  return {
    placeShip(coordinates, ship, row) {
      let num = coordinates[0];
      const lengthShip = ship.getLength();

      for (let index = 0; index < lengthShip; index++) {
        if (row) {
          board[(coordinates[0], num)] = ship;
          num++;
        } else {
          board[(num, coordinates)] = ship;
          num++;
        }
      }
    },
    receiveAttack(coordinates) {
      const place = board[coordinates[0]][coordinates[1]];

      if (place === null) {
        board[coordinates[0]][coordinates[1]] = 0;
        return console.log('missed');
      }
      if (place === 0) {
        return console.log('why try miss again');
      }
      if (place === 2) {
        return console.log('you already hit the ship');
      }
      place.hit();
      board[coordinates[0]][coordinates[1]] = 2;
      return place.isSunk();
    },
    getBoard() {
      return board;
    },
    computerAttack() {
      let doesMiss = true;
    },
    createShip(number) {
      const ship = Ship(number);
      isShipBuilt = true;
      return [ship, isShipBuilt];
    },
    changeShipStatus() {
      isShipBuilt = false;
    },
    checkShipStatus() {
      return isShipBuilt;
    },
  };
}
export { GameBoard };
