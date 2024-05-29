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
function create64() {
  const array = [];
  for (let index = 0; index < 64; index++) {
    array.push(index);
  }
  return array;
}

function GameBoard() {
  let playerHealth = 5;
  let enemyHealth = 5;
  let isShipBuilt = false;
  const allShips = [];
  const ship4 = Ship(4);
  const ship3 = Ship(3);
  const ship2Also = Ship(2);
  const ship2 = Ship(2);
  const ship1 = Ship(1);
  const list = create64();
  let position;
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
    savePosition(coordinates) {
      position = coordinates;
    },
    returnPosition() {
      let coordinates = position.map((element) => parseInt(element, 10));
      return coordinates;
    },
    placeEnemyShip(coordinates, ship, col) {
      const lengthShip = ship.getLength();
      for (let index = 0; index < lengthShip; index++) {
        const array = [];
        if (!col) {
          enemyBoard[coordinates[0]][coordinates[1] + index] = ship;
          array.push(coordinates[0], coordinates[1] + index);
          ship.enterPosition(array);
        } else {
          enemyBoard[coordinates[0] + index][coordinates[1]] = ship;
          array.push(coordinates[0] + index, coordinates[1]);
          ship.enterPosition(array);
        }
      }
    },
    Attack(coordinates, tile) {
      const place = enemyBoard[coordinates[0]][coordinates[1]];
      if (tile === null) {
        enemyBoard[coordinates[0]][coordinates[1]] = 0;
        return 0;
      } else {
        place.hit();
        enemyBoard[coordinates[0]][coordinates[1]] = 2;
        return place.isSunk();
      }
    },
    playerHit() {
      playerHealth -= 1;
    },
    returnPlayerHealth() {
      return playerHealth;
    },
    enemyHit() {
      enemyHealth -= 1;
    },
    returnEnemyHealth() {
      return enemyHealth;
    },
    getBoard() {
      return board;
    },
    getEnemyBoard() {
      return enemyBoard;
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
    return64list() {
      return list;
    },
    spliceNum(num) {
      list.splice(num, 1);
    },
    createEnemyBoard() {
      while (allShips.length !== 0) {
        let row = getRandomNumberBetween0And7();
        let col = getRandomNumberBetween0And7();
        const horizontal = trueOrFalse();
        const ship = allShips[0];
        let canPlace = true;
        if (horizontal) {
          if (row + ship.getLength() > 8) {
            canPlace = false;
            continue; // Skip the rest of the loop and start with new random coordinates
          }
        } else {
          if (col + ship.getLength() > 8) {
            canPlace = false;
            continue; // Skip the rest of the loop and start with new random coordinates
          }
        }
        for (let index = 0; index < ship.getLength(); index++) {
          if (horizontal) {
            if (enemyBoard[row + index][col] !== null) {
              canPlace = false;
              break;
            }
          } else {
            if (enemyBoard[row][col + index] !== null) {
              canPlace = false;
              break;
            }
          }
        }
        if (canPlace) {
          const coordinates = [row, col];
          this.placeEnemyShip(coordinates, ship, horizontal);
          allShips.shift();
        }
      }
    },
  };
}
export { GameBoard };
