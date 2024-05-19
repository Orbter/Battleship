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
function getRandomNumberBetween0And7() {
  return Math.floor(Math.random() * 8);
}
function trueOrFalse() {
  return Math.random() >= 0.5;
}
function GameBoard() {
  let isShipBuilt = false;
  const allShips = [];
  const ship4 = Ship(4);
  const ship3 = Ship(3);
  const ship2Also = Ship(2);
  const ship2 = Ship(2);
  const ship1 = Ship(1);
  allShips.push(ship4, ship3, ship2Also, ship2, ship1);

  const board = createMatrix(8, 8);
  const enemyBoard = createMatrix(8, 8);
  return {
    placeShip(coordinates, ship, col) {
      const lengthShip = ship.getLength();

      for (let index = 0; index < lengthShip; index++) {
        if (!col) {
          board[coordinates[0]][coordinates[1] + index] = ship;
        } else board[coordinates[0] + index][coordinates[1]] = ship;
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
    returnPlace(coordinates) {
      return board[coordinates[0]][coordinates[1]];
    },

    createEnemyBoard() {
      while (allShips.length !== 0) {
        let row = getRandomNumberBetween0And7();
        let col = getRandomNumberBetween0And7();
        const horizontal = trueOrFalse();
        const ship = allShips[0];
        let canPlace = true;
        if (horizontal) {
          if (col + ship.getLength() > 8) canPlace = false;
        } else {
          if (row + ship.getLength() > 8) canPlace = false;
        }
        for (let index = 0; index < ship.getLength(); index++) {
          if (horizontal) {
            if (enemyBoard[row][col + index] !== null) {
              canPlace = false;
              break;
            }
          } else {
            if (enemyBoard[row + index][col] !== null) {
              canPlace = false;
              break;
            }
          }
        }
        if (canPlace) {
          const coordinates = [row, col];
          this.placeShip(coordinates, ship, horizontal);
          allShips.shift();
        }
      }
    },
  };
}
export { GameBoard };
